import { useTheme } from '../hooks/useTheme';

export default function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="header">
            <div className="container header-content">
                <a href="/" className="header-logo">
                    <img
                        src="https://www.saglik.gov.tr/images/logo.png"
                        alt="T.C. Sağlık Bakanlığı"
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                    />
                    <div className="header-title">
                        <h1>Sağlık Rehberleri</h1>
                        <span>T.C. Sağlık Bakanlığı</span>
                    </div>
                </a>

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
