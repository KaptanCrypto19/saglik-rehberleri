import { useTheme } from '../hooks/useTheme';

export default function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="header">
            <div className="container header-content">
                <div className="header-brand">
                    <h1 className="header-title">
                        🏥 Sağlık Rehberleri
                    </h1>
                    <span className="header-tagline">QR kod ile kolay erişim • T.C. Sağlık Bakanlığı</span>
                </div>

                <div className="header-actions">
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        title={theme === 'light' ? 'Karanlık mod' : 'Aydınlık mod'}
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </div>
            </div>
        </header>
    );
}
