import { useState, useEffect, useMemo } from 'react';
import { guides, categories } from '../data/guides';
import { useFavorites } from '../hooks/useFavorites';
import { useRecentViews } from '../hooks/useRecentViews';
import { getViewCounts } from '../lib/supabase';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import GuideCard from '../components/GuideCard';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('all');
    const [selectedLanguage, setSelectedLanguage] = useState('all');
    const [showFavorites, setShowFavorites] = useState(false);
    const [viewCounts, setViewCounts] = useState({});

    const { favorites, toggleFavorite, isFavorite } = useFavorites();
    const { recentViews, addRecentView } = useRecentViews();

    // Load view counts from Supabase
    useEffect(() => {
        getViewCounts().then(setViewCounts);
    }, []);

    // Filter guides
    const filteredGuides = useMemo(() => {
        return guides.filter(guide => {
            // Search filter
            const matchesSearch = searchTerm === '' ||
                guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                guide.titleShort.toLowerCase().includes(searchTerm.toLowerCase());

            // Subcategory filter
            const matchesSubcategory = selectedSubcategory === 'all' ||
                guide.subcategory === selectedSubcategory;

            // Language filter
            const matchesLanguage = selectedLanguage === 'all' ||
                guide.language === selectedLanguage;

            // Favorites filter
            const matchesFavorites = !showFavorites || favorites.includes(guide.id);

            return matchesSearch && matchesSubcategory && matchesLanguage && matchesFavorites;
        });
    }, [searchTerm, selectedSubcategory, selectedLanguage, showFavorites, favorites]);

    // Recent guides
    const recentGuides = useMemo(() => {
        return recentViews
            .map(id => guides.find(g => g.id === id))
            .filter(Boolean)
            .slice(0, 5);
    }, [recentViews]);

    // Stats
    const totalViews = Object.values(viewCounts).reduce((a, b) => a + b, 0);

    return (
        <>
            <Header />

            <main className="main">
                <div className="container">
                    {/* Hero Section */}
                    <section className="hero">
                        <h2>🏥 Sağlık Rehberleri QR Platformu</h2>
                        <p>T.C. Sağlık Bakanlığı rehberlerine QR kod ile kolay erişim</p>
                        <div className="hero-stats">
                            <div className="hero-stat">
                                <div className="hero-stat-value">{guides.length}</div>
                                <div className="hero-stat-label">Rehber</div>
                            </div>
                            <div className="hero-stat">
                                <div className="hero-stat-value">{categories.length}</div>
                                <div className="hero-stat-label">Kategori</div>
                            </div>
                            <div className="hero-stat">
                                <div className="hero-stat-value">{totalViews}</div>
                                <div className="hero-stat-label">Görüntülenme</div>
                            </div>
                        </div>
                    </section>

                    {/* Recent Views */}
                    {recentGuides.length > 0 && !showFavorites && (
                        <section className="quick-access">
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
                        selectedLanguage={selectedLanguage}
                        onLanguageChange={setSelectedLanguage}
                        showFavorites={showFavorites}
                        onShowFavoritesChange={setShowFavorites}
                        favoritesCount={favorites.length}
                    />

                    {/* Results Count */}
                    <p style={{
                        marginBottom: 'var(--spacing-md)',
                        color: 'var(--color-text-secondary)',
                        fontSize: '0.875rem'
                    }}>
                        {filteredGuides.length} rehber bulundu
                    </p>

                    {/* Guide Cards */}
                    <div className="guides-grid">
                        {filteredGuides.length === 0 ? (
                            <div className="empty-state">
                                <div className="empty-state-icon">📭</div>
                                <h3 className="empty-state-title">Rehber bulunamadı</h3>
                                <p className="empty-state-text">
                                    Arama kriterlerinize uygun rehber bulunamadı.
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
                                    viewCount={viewCounts[guide.id] || 0}
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
