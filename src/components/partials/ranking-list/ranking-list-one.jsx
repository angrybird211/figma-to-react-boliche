import { Link } from 'react-router-dom';

import PlayerOne from "../../features/players/player-one";
import PlayerTwo from "../../features/players/player-two";

export default function RankingListOne() {
    return (
        <div className="ranking-list ranking-list-one">
            <div className="container">
                <div className="list-header">
                    <div className="section-title mb-0">
                        <h2 className="text-secondary-dark">RANKING<br />BRASILEIRO.</h2>
                    </div>

                    <div className="select-box">
                        <label className="text-white">Escolha a categoria:</label>

                        <select name="category" className="form-control" defaultValue="default">
                            <option value="default" selected="selected">Adulto Masculino</option>
                            <option value="popularity">Adulto Masculion</option>
                            <option value="rating">Adulto Masculion</option>
                            <option value="date">Adulto Masculion</option>
                            <option value="price-low">Adulto Masculion</option>
                            <option value="price-high">Adulto Masculion</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 top-3">
                        <ul className="player-list">
                            <PlayerOne number={1} color="green" />
                            <PlayerOne number={2} color="light" />
                            <PlayerOne number={3} color="secondary" />
                        </ul>
                    </div>

                    <div className="col-lg-6 top-10">
                        <ul className="player-list">
                            {
                                [4, 5, 6, 7, 8, 9, 10].map(item =>
                                    <PlayerTwo number={item} key={`player-two-${item}`} />
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="list-footer text-white d-flex">
                    <h5>atualizado em 01/10/2021</h5>

                    <Link to="/ranking" className="ml-auto text-white">
                        <h3>Ver lista completa.<i className="fa fa-arrow-right-long ml-4"></i></h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}