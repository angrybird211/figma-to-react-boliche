import { Link } from "react-router-dom";

export default function PostFour(props) {
    const { url } = props;

    return (
        <div className="post post-four">
            <Link to="/noticias/lendo">
                <figure className="post-media">
                    <img src={`${process.env.PUBLIC_URL}/${url}`} alt="post-media" />
                </figure>
            </Link>

            <div className="post-detail">
                <div className="btn-wrapper btn-category">
                    <span href="#" className="btn text-uppercase">Gestão Esportiva</span>
                </div>

                <h2>Atletas brasileiros são exemplos de superação, determinação e comprometimento</h2>

                <p>Superação, determinação e comprometimento são a essência de uma atleta de alta performance, ainda mais quando se trata de um esportista brasileiro. Por isso, quando ocorrem competições de nível mundial é uma oportunidade de valorizarmos todos os</p>

                <div className="btn-wrapper">
                    <span href="#" className="btn btn-link text-uppercase">Ler no blog <i className="fa fa-arrow-right-long"></i></span>
                </div>
            </div>
        </div>
    )
}