import { Link } from "react-router-dom";

export default function PostTwo() {
    return (
        <div className="post post-two">
            <Link to="/noticias/lendo">
                <figure className="post-media">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/intro/intro-2.png`} alt="post-media" />
                </figure>
            </Link>

            <div className="post-detail">
                <Link to="/noticias/eventos" className="btn btn-link text-uppercase">
                    eventos
                </Link>

                <h4 className="post-date">18 OUT 2021</h4>

                <h2 className="post-title">Abertas as Inscrições para o XLI Campeonato Brasileiro de Seleções.</h2>
            </div>
        </div>
    )
}