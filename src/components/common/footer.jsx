import BlogSection from "./partials/blog-section";
import NewsletterSection from "./partials/newsletter-section";

export default function Footer() {
    return (
        <>
            <NewsletterSection />

            <div className="container">
                <BlogSection />

                <div className="footer-divider">
                    <h3 className="text-uppercase">parceiros</h3>

                    <hr></hr>
                </div>

                <div className="footer-middle">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/logos/logo-1.svg`} alt="logo" />
                    <img src={`${process.env.PUBLIC_URL}/assets/images/logos/logo-2.svg`} alt="logo" />
                    <img src={`${process.env.PUBLIC_URL}/assets/images/logos/logo-3.svg`} alt="logo" />
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-left">
                        <div className="social-icons d-flex">
                            <a href="#1" className="social-icon">
                                <i className="fa-facebook fab"></i>
                            </a>

                            <a href="#1" className="social-icon">
                                <i className="fa-twitter fab"></i>
                            </a>

                            <a href="#1" className="social-icon">
                                <i className="fa-instagram fab"></i>
                            </a>

                            <a href="#1" className="social-icon">
                                <i className="fa-youtube fab"></i>
                            </a>
                        </div>

                        <p><b>Confederação Brasileira de Boliche</b><br />
                            Vinculada ao Comitê Olímpico Brasileiro<br />
                            SEPS 705/905 Bloco “A” Sala 517<br />
                            Brasília - DF / CEP 70.390-055<br /><br />
                            Telefone: + 55 61 3340-1340<br />
                            E-mail: contato@bolichebrasil.com.br</p>
                    </div>

                    <div className="footer-right">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/logos/logo-4.svg`} alt="logo" />
                        <img src={`${process.env.PUBLIC_URL}/assets/images/logos/logo-5.svg`} alt="logo" />
                    </div>
                </div>

                <img src={`${process.env.PUBLIC_URL}/assets/images/footer-frame.svg`} alt="logo" className="footer-frame" />
            </div>
        </>
    )
}