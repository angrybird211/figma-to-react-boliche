import { Link } from 'react-router-dom';

export default function Header(props) {
    const { isBottom = true } = props;

    return (
        <div className="header">
            <div className="header-top">
                <div className="container">
                    <div className="header-left">
                        <Link to="/home">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/logo.svg`} width="138" height="138" alt="logo" className="logo"></img>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/logo-text.svg`} width="442" height="43" alt="logo-text" className="logo-text"></img>
                        </Link>
                    </div>

                    <div className="header-right align-items-center d-flex">
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

                            <a href="#1" className="btn login btn-outline-primary">
                                LOGIN
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-middle bg-primary">
                <div className="container d-flex">
                    <ul className="main-nav d-flex m-auto">
                        <li>
                            <Link to="/home" className="text-white">HOME</Link>
                        </li>

                        <li>
                            <Link to="/boliche-evento" className="text-white">BOLICHE BRASIL</Link>
                        </li>

                        <li>
                            <Link to="/eventos" className="text-white">EVENTOS</Link>
                        </li>

                        <li>
                            <Link to="/noticias" className="text-white">NOTÍCIAS</Link>
                        </li>

                        <li>
                            <Link to="/transparencia" className="text-white">TRANSPARÊNCIA</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {
                isBottom ?
                    <div className="header-bottom light-bar position-relative container-fluid">
                        <div className="container">
                            <div className="breadcrumb">
                                <Link to="/home" className="text-uppercase">home</Link>
                                <span>/</span>
                                <Link to="/eventos" className="text-uppercase"> eventos</Link>
                                <span>/</span>
                                <a href="#" className="text-uppercase"> Campeonato Brasileiro Individual de Boliche 2021</a>
                            </div>
                        </div>
                    </div> :
                    <div className="container-fluid light-bar pt-5"></div>
            }
        </div>
    )
}