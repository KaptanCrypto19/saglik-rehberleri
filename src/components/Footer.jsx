export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <p className="footer-info">
                    <strong>Kullanım:</strong> Her rehberin QR kodunu indirip yazdırabilir, hastalarınıza gösterebilirsiniz.
                    <br />
                    Hasta QR kodu okuttuğunda direkt olarak ilgili PDF'e yönlendirilecektir.
                </p>
                <p className="footer-credit">
                    © {currentYear} T.C. Sağlık Bakanlığı • Created by{' '}
                    <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                    >
                        Alper YILDIRIM
                    </a>
                </p>
            </div>
        </footer>
    );
}
