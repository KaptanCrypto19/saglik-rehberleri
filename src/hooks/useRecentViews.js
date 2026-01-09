import { useState, useEffect } from 'react';

const RECENT_KEY = 'saglik-rehberleri-recent';
const MAX_RECENT = 5;

export function useRecentViews() {
    const [recentViews, setRecentViews] = useState(() => {
        try {
            const stored = localStorage.getItem(RECENT_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem(RECENT_KEY, JSON.stringify(recentViews));
    }, [recentViews]);

    const addRecentView = (guideId) => {
        setRecentViews(prev => {
            const filtered = prev.filter(id => id !== guideId);
            return [guideId, ...filtered].slice(0, MAX_RECENT);
        });
    };

    return { recentViews, addRecentView };
}
