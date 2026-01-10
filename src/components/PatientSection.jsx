import { guides, languages } from '../data/guides';

export default function PatientSection() {
    // Get patient guides in different languages
    const patientGuides = guides.filter(g => g.subcategory === 'patient');

    // Group by language
    const guidesByLang = {};
    patientGuides.forEach(guide => {
        guidesByLang[guide.language] = guide;
    });

    const handleClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <section className="patient-section">
            <div className="patient-header">
                <div>
                    <h2 className="patient-title">
                        👤 Hasta Bilgilendirme Rehberi
                    </h2>
                    <p className="patient-subtitle">QR kodu indirip hastanıza gösterebilirsiniz</p>
                </div>
            </div>

            <div className="patient-languages">
                {languages.filter(l => l.id !== 'all').map(lang => {
                    const guide = guidesByLang[lang.id];
                    if (!guide) return null;

                    return (
                        <a
                            key={lang.id}
                            className="lang-btn"
                            href={guide.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`${lang.name} - ${guide.titleShort}`}
                        >
                            <span className="flag">{lang.flag}</span>
                            <span>{lang.name}</span>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}
