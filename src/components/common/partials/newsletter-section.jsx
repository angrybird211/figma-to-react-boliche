export default function NewsletterSection() {
    return (
        <div className="container-fluid">
            <div className="newsletter-section" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/newsletter.svg)`, backgroundColor: "#FDE219", borderRadius: "8px" }}>
                <div className="container">
                    <div className="newsletter-title">
                        <h2 className="text-primary">NEWSLETTER.</h2>
                        <h5 className="text-uppercase text-primary text-lg-end text-center">ACOMPANHE TODAS AS novidades DO<br />PORTAL DA CONFEDERAÇÃO em seu email</h5>
                    </div>

                    <div className="newsletter-content">
                        <input type="name" className="form-control bg-white mr-4" name="name" id="name" placeholder="name" />
                        <input type="email" className="form-control bg-white" name="email" id="email" placeholder="email" />

                        <div className="btn-wrapper y-center btn-out">
                            <a href="#" className="text-primary">OK.</a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}