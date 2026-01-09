import { createClient } from '@supabase/supabase-js';

// These will be replaced with actual values from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

// Track a view for a guide
export async function trackView(guideId) {
    if (!supabase) {
        console.log('Supabase not configured, skipping view tracking');
        return;
    }

    try {
        await supabase.from('guide_views').insert({ guide_id: guideId });
    } catch (error) {
        console.error('Error tracking view:', error);
    }
}

// Get view counts for all guides
export async function getViewCounts() {
    if (!supabase) {
        return {};
    }

    try {
        const { data, error } = await supabase
            .from('guide_view_counts')
            .select('*');

        if (error) throw error;

        return data.reduce((acc, item) => {
            acc[item.guide_id] = item.view_count;
            return acc;
        }, {});
    } catch (error) {
        console.error('Error getting view counts:', error);
        return {};
    }
}
