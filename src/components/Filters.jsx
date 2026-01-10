import { subcategories } from '../data/guides';

export default function Filters({
    selectedSubcategory,
    onSubcategoryChange,
    showFavorites,
    onShowFavoritesChange,
    favoritesCount
}) {
    return (
        <div className="filters">
            {subcategories.map(sub => (
                <button
                    key={sub.id}
                    className={`filter-btn ${selectedSubcategory === sub.id ? 'active' : ''}`}
                    onClick={() => onSubcategoryChange(sub.id)}
                >
                    {sub.icon} {sub.name}
                </button>
            ))}

            <button
                className={`filter-btn ${showFavorites ? 'active' : ''}`}
                onClick={() => onShowFavoritesChange(!showFavorites)}
            >
                ⭐ Favoriler {favoritesCount > 0 && `(${favoritesCount})`}
            </button>
        </div>
    );
}
