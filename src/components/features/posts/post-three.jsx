import { Link } from "react-router-dom";

export default function PostThree() {
    return (
        <article className="post post-three">
            <Link to="/noticias/lendo">
                <figure className="post-media">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/intro/intro-3.png`} alt="post-media" />

                    <div className="btn-wrapper x-center">
                        <span className="btn btn-link text-uppercase">eventos</span>
                    </div>
                </figure>
            </Link>

            <div className="post-detail">
                <p>Abertas as Inscrições para o 36º Campeonato Brasileiro Individual de Boliche 2021</p>
            </div>
        </article>
    )
}