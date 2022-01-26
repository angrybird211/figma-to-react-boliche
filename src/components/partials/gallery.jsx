import { Link } from 'react-router-dom';

export default function Gallery() {
    return (
        <div className="gallery">
            <div className="container-fluid">
                <div className="container">
                    <div className="section-title text-primary">
                        <h2>GALERIA<br />DE FOTOS.</h2>

                        <div className="btn-wrapper y-center border-primary btn-out">
                            <Link to="/evento" className="text-primary">VER MAIS FOTOS.</Link>
                        </div>
                    </div>
                </div>

                <div className="row m-0">
                    <div className="col-6 col-md-4 col-lg-3 p-0 overlay-dark overlay-zoom">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/events/event-2.png`} alt="event" />
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 p-0 overlay-dark overlay-zoom">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/events/event-3.png`} alt="event" />
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 p-0 overlay-dark overlay-zoom">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/events/event-4.png`} alt="event" />
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 p-0 overlay-dark overlay-zoom">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/events/event-5.png`} alt="event" />
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 p-0 overlay-dark overlay-zoom">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/events/event-6.png`} alt="event" />
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 p-0 overlay-dark overlay-zoom">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/events/event-7.png`} alt="event" />
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 p-0 overlay-dark overlay-zoom">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/events/event-8.png`} alt="event" />
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 p-0 overlay-dark overlay-zoom">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/events/event-1.png`} alt="event" />
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 p-0 overlay-dark overlay-zoom">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/events/event-2.png`} alt="event" />
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 p-0 overlay-dark overlay-zoom">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/events/event-3.png`} alt="event" />
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 p-0 overlay-dark overlay-zoom">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/events/event-4.png`} alt="event" />
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 p-0 overlay-dark overlay-zoom">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/events/event-5.png`} alt="event" />
                    </div>
                </div>
            </div>
        </div>
    )
}