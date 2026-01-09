import { useState } from 'react';
import QRCode, { downloadQRCode } from './QRCode';
import { trackView } from '../lib/supabase';

export default function GuideCard({
    guide,
    isFavorite,
    onToggleFavorite,
    onView,
    viewCount
}) {
    const [copied, setCopied] = useState(false);
    const [showPrintOptions, setShowPrintOptions] = useState(false);

    const handleViewPDF = () => {
        onView(guide.id);
        trackView(guide.id);
        window.open(guide.url, '_blank');
    };

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(guide.url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error('Error copying link:', error);
        }
    };

    const handleDownloadQR = () => {
        downloadQRCode(guide.url, guide.titleShort.replace(/\s+/g, '_'));
    };

    const handlePrint = (type) => {
        setShowPrintOptions(false);

        const printWindow = window.open('', '_blank');
        let content = '';

        if (type === 'single') {
            content = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>${guide.titleShort} - QR Kod</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              display: flex; 
              flex-direction: column;
              align-items: center; 
              justify-content: center; 
              min-height: 100vh;
              margin: 0;
              padding: 20px;
            }
            .container { text-align: center; }
            h1 { font-size: 1.5rem; margin-bottom: 1rem; }
            p { color: #666; margin-bottom: 1rem; }
            img { margin: 20px 0; }
            .url { font-size: 0.75rem; color: #999; word-break: break-all; max-width: 300px; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>${guide.titleShort}</h1>
            <p>${guide.languageLabel}</p>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(guide.url)}" />
            <p class="url">${guide.url}</p>
          </div>
          <script>window.onload = () => { window.print(); }</script>
        </body>
        </html>
      `;
        } else if (type === 'poster') {
            content = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>${guide.titleShort} - Poster</title>
          <style>
            @page { size: A3; margin: 2cm; }
            body { 
              font-family: Arial, sans-serif; 
              display: flex; 
              flex-direction: column;
              align-items: center; 
              justify-content: center; 
              min-height: 100vh;
              margin: 0;
              padding: 40px;
              text-align: center;
            }
            h1 { font-size: 3rem; margin-bottom: 1rem; color: #1e40af; }
            .subtitle { font-size: 1.5rem; color: #666; margin-bottom: 2rem; }
            img { margin: 40px 0; width: 400px; height: 400px; }
            .instruction { 
              font-size: 1.25rem; 
              background: #f0f9ff; 
              padding: 20px 40px; 
              border-radius: 10px;
              margin-top: 2rem;
            }
            .logo { margin-bottom: 2rem; opacity: 0.5; }
          </style>
        </head>
        <body>
          <p class="logo">T.C. Sağlık Bakanlığı</p>
          <h1>${guide.titleShort}</h1>
          <p class="subtitle">${guide.title}</p>
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(guide.url)}" />
          <p class="instruction">📱 QR kodu telefonunuzla okutarak rehbere ulaşabilirsiniz</p>
          <script>window.onload = () => { window.print(); }</script>
        </body>
        </html>
      `;
        }

        printWindow.document.write(content);
        printWindow.document.close();
    };

    return (
        <div className="guide-card">
            <div className="guide-qr">
                <QRCode text={guide.url} size={120} />
            </div>

            <div className="guide-content">
                <div className="guide-header">
                    <h3 className="guide-title">{guide.titleShort}</h3>
                    <div className="guide-badges">
                        <span className="badge badge-language">{guide.languageLabel}</span>
                    </div>
                </div>

                <p className="guide-description">{guide.title}</p>

                {viewCount > 0 && (
                    <p className="guide-stats">
                        👁️ {viewCount} görüntülenme
                    </p>
                )}

                <div className="guide-actions">
                    <button className="btn btn-success" onClick={handleViewPDF}>
                        📄 PDF Görüntüle
                    </button>

                    <button className="btn btn-primary" onClick={handleDownloadQR}>
                        ⬇️ QR İndir
                    </button>

                    <button
                        className="btn btn-outline"
                        onClick={handleCopyLink}
                    >
                        {copied ? '✅ Kopyalandı!' : '📋 Link Kopyala'}
                    </button>

                    <div style={{ position: 'relative' }}>
                        <button
                            className="btn btn-outline"
                            onClick={() => setShowPrintOptions(!showPrintOptions)}
                        >
                            🖨️ Yazdır
                        </button>

                        {showPrintOptions && (
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                marginTop: '4px',
                                background: 'var(--color-bg-card)',
                                border: '1px solid var(--color-border)',
                                borderRadius: 'var(--radius-md)',
                                boxShadow: 'var(--shadow-lg)',
                                zIndex: 10,
                                minWidth: '160px'
                            }}>
                                <button
                                    className="btn btn-ghost"
                                    style={{ width: '100%', justifyContent: 'flex-start' }}
                                    onClick={() => handlePrint('single')}
                                >
                                    📄 Tek Sayfa
                                </button>
                                <button
                                    className="btn btn-ghost"
                                    style={{ width: '100%', justifyContent: 'flex-start' }}
                                    onClick={() => handlePrint('poster')}
                                >
                                    🖼️ Poster (A3)
                                </button>
                            </div>
                        )}
                    </div>

                    <button
                        className={`btn btn-ghost btn-icon ${isFavorite ? 'active' : ''}`}
                        onClick={() => onToggleFavorite(guide.id)}
                        title={isFavorite ? 'Favorilerden çıkar' : 'Favorilere ekle'}
                    >
                        {isFavorite ? '⭐' : '☆'}
                    </button>
                </div>
            </div>
        </div>
    );
}
