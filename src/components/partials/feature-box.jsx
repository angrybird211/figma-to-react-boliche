import OwlCarousel from "../features/owl-carousel";

export default function FeatureBox() {
    const options = {
        items: 3,
        margin: 60,
        responsive: {
            992: {
                items: 3
            },
            576: {
                items: 2
            },
            0: {
                items: 1
            }
        }
    }

    return (
        <div className="feature-boxes">
            <div className="feature-background">
            </div>

            <div className="container">
                <OwlCarousel adClass="owl-theme" options={options}>
                    <div className="feature-box text-white">
                        <i className="fa fa-file-alt"></i>

                        <h3>CÓDIGO<br />DE ÉTICA.</h3>

                        <p className="text-primary">Campeonato Brasileiro Individual de Boliche 2021
                            Campeonato Brasileiro Individual de Boliche 2021</p>
                    </div>
                    <div className="feature-box text-white">
                        <i className="fa fa-folder"></i>
                        <h3>DOCUMENTOS<br />E LEGISLAÇÕES.</h3>

                        <p className="text-primary">Campeonato Brasileiro Individual de Boliche 2021
                            Campeonato Brasileiro Individual de Boliche 2021</p>
                    </div>
                    <div className="feature-box text-white">
                        <i className="fa fa-thumbs-up"></i>
                        <h3>Editais de<br />Convocação.</h3>

                        <p className="text-primary">Campeonato Brasileiro Individual de Boliche 2021
                            Campeonato Brasileiro Individual de Boliche 2021</p>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}