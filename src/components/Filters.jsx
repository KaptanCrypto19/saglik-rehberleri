import { subcategories, languages } from '../data/guides';

export default function Filters({
    selectedSubcategory,
    onSubcategoryChange,
    selectedLanguage,
    onLanguageChange,
    showFavorites,
    onShowFavoritesChange,
    favoritesCount
}) {
    return (
        <div className="filters">
            <div className="filter-group">
                {subcategories.map(sub => (
                    <button
                        key={sub.id}
                        className={`filter-btn ${selectedSubcategory === sub.id ? 'active' : ''}`}
                        onClick={() => onSubcategoryChange(sub.id)}
                    >
                        {sub.icon} {sub.name}
                    </button>
                ))}
            </div>

            <div className="filter-divider" />

            <div className="filter-group">
                {languages.map(lang => (
                    <button
                        key={lang.id}
                        className={`filter-btn ${selectedLanguage === lang.id ? 'active' : ''}`}
                        onClick={() => onLanguageChange(lang.id)}
                    >
                        {lang.flag} {lang.name}
                    </button>
                ))}
            </div>

            <div className="filter-divider" />

            <div className="filter-group">
                <button
                    className={`filter-btn ${showFavorites ? 'active' : ''}`}
                    onClick={() => onShowFavoritesChange(!showFavorites)}
                >
                    ⭐ Favoriler {favoritesCount > 0 && `(${favoritesCount})`}
                </button>
            </div>
        </div>
    );
}
