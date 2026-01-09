import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'saglik-rehberleri-favorites';

export function useFavorites() {
    const [favorites, setFavorites] = useState(() => {
        try {
            const stored = localStorage.getItem(FAVORITES_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (guideId) => {
        setFavorites(prev => {
            if (prev.includes(guideId)) {
                return prev.filter(id => id !== guideId);
            }
            return [...prev, guideId];
        });
    };

    const isFavorite = (guideId) => favorites.includes(guideId);

    return { favorites, toggleFavorite, isFavorite };
}
