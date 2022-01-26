import {Link} from 'react-router-dom';

export default function PostOne() {
    return (
        <article className="post post-one">
            <Link to="/noticias/lendo">
                <figure className="post-media">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/intro/intro-1.png`} alt="post-media" />

                    <div className="btn-wrapper x-center">
                        <span className="btn btn-link text-uppercase">time brasil</span>
                    </div>
                </figure>
            </Link>

            <div className="post-detail text-center">
                <h4 className="post-date">18 OUT 2021</h4>

                <h2 className="post-title">Abertas as Inscrições para o XLI Campeonato Brasileiro de Seleções - XXXIII Taça Brasil e XXXI Taça Brasil de Tercetos...</h2>

                <p>Estão abertas as inscrições para o XLI Campeonato Brasileiro de Seleções, bem como a XXXIII Taça Brasil de Seleções e a XXXI Taça Brasil de Tercetos.</p>
            </div>
        </article>
    )
}