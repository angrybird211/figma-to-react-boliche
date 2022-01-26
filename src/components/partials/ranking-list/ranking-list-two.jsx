import PlayerFour from "../../features/players/player-four";

export default function RankingListTwo() {
    return (
        <div className="ranking-list ranking-list-one">
            <div className="container">
                <div className="list-header">
                    <div className="section-title mb-0">
                        <h2 className="text-secondary-dark text-uppercase">Atletas Inscritos (35)</h2>
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
                  <ul className="player-list">
                      {
                          [1,2,3,4,5].map(item =>
                              <PlayerFour number={item} key={`player-two-${item}`} />
                          )
                      }
                  </ul>
                </div>
            </div>
        </div>
    )
}