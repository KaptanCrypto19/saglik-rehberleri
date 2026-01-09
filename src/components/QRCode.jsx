import { useEffect, useRef } from 'react';
import QRCodeLib from 'qrcode';

export default function QRCode({ text, size = 120 }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current && text) {
            QRCodeLib.toCanvas(canvasRef.current, text, {
                width: size,
                margin: 1,
                color: {
                    dark: '#000000',
                    light: '#ffffff'
                }
            });
        }
    }, [text, size]);

    return <canvas ref={canvasRef} />;
}

// Utility function to download QR code
export async function downloadQRCode(text, filename) {
    try {
        const dataUrl = await QRCodeLib.toDataURL(text, {
            width: 300,
            margin: 2
        });

        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `${filename}_QR.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Error downloading QR code:', error);
    }
}
