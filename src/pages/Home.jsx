import { useState, useMemo } from 'react';
import { guides } from '../data/guides';
import { useFavorites } from '../hooks/useFavorites';
import { useRecentViews } from '../hooks/useRecentViews';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PatientSection from '../components/PatientSection';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import GuideCard from '../components/GuideCard';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('all');
    const [showFavorites, setShowFavorites] = useState(false);

    const { favorites, toggleFavorite, isFavorite } = useFavorites();
    const { recentViews, addRecentView } = useRecentViews();

    // Filter guides (exclude patient guides as they're shown in PatientSection)
    const filteredGuides = useMemo(() => {
        return guides.filter(guide => {
            // Search filter
            const matchesSearch = searchTerm === '' ||
                guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                guide.titleShort.toLowerCase().includes(searchTerm.toLowerCase());

            // Subcategory filter
            const matchesSubcategory = selectedSubcategory === 'all' ||
                guide.subcategory === selectedSubcategory;

            // Favorites filter
            const matchesFavorites = !showFavorites || favorites.includes(guide.id);

            return matchesSearch && matchesSubcategory && matchesFavorites;
        });
    }, [searchTerm, selectedSubcategory, showFavorites, favorites]);

    // Recent guides
    const recentGuides = useMemo(() => {
        return recentViews
            .map(id => guides.find(g => g.id === id))
            .filter(Boolean)
            .slice(0, 5);
    }, [recentViews]);

    return (
        <>
            <Header />

            <main className="main">
                <div className="container">
                    {/* Patient Info Section - Priority */}
                    <PatientSection />

                    {/* Recent Views */}
                    {recentGuides.length > 0 && !showFavorites && (
                        <section className="quick-section">
                            <h3 className="section-title">🕐 Son Görüntülenenler</h3>
                            <div className="quick-cards">
                                {recentGuides.map(guide => (
                                    <div
                                        key={guide.id}
                                        className="quick-card"
                                        onClick={() => window.open(guide.url, '_blank')}
                                    >
                                        <div className="quick-card-title">{guide.titleShort}</div>
                                        <div className="quick-card-meta">{guide.languageLabel}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Search */}
                    <SearchBar value={searchTerm} onChange={setSearchTerm} />

                    {/* Filters */}
                    <Filters
                        selectedSubcategory={selectedSubcategory}
                        onSubcategoryChange={setSelectedSubcategory}
                        showFavorites={showFavorites}
                        onShowFavoritesChange={setShowFavorites}
                        favoritesCount={favorites.length}
                    />

                    {/* Section Header */}
                    <div className="section-header">
                        <h3 className="section-title">📋 Tüm Rehberler</h3>
                        <span className="results-count">{filteredGuides.length} rehber</span>
                    </div>

                    {/* Guide Cards */}
                    <div className="guides-grid">
                        {filteredGuides.length === 0 ? (
                            <div className="empty-state">
                                <div className="empty-state-icon">📭</div>
                                <h3 className="empty-state-title">Rehber bulunamadı</h3>
                                <p className="empty-state-text">
                                    Filtreleri değiştirmeyi deneyin.
                                </p>
                            </div>
                        ) : (
                            filteredGuides.map(guide => (
                                <GuideCard
                                    key={guide.id}
                                    guide={guide}
                                    isFavorite={isFavorite(guide.id)}
                                    onToggleFavorite={toggleFavorite}
                                    onView={addRecentView}
                                />
                            ))
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
