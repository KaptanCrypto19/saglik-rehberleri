export default function SearchBar({ value, onChange }) {
    return (
        <div className="search-container">
            <div className="search-bar">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Rehber ara... (örn: hasta bilgilendirme, tüberküloz)"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
                <button className="search-btn">
                    🔍 Ara
                </button>
            </div>
        </div>
    );
}
