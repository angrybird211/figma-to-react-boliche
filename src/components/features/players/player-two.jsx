export default function PlayerTwo(props) {
    const { number } = props;

    return (
        <div className="player player-two text-white">
            <div className="player-info d-flex p-0 mb-0">
                <div className="text-white player-number">
                    <h2>{number}.</h2>
                </div>

                <div className="player-name text-white">Rodrigo <strong>Marques costa</strong></div>

                <div className="player-nation">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/flag.png`} alt="nation" />
                </div>

                <div className="total-score">
                    <h3>3650.00</h3>
                </div>
            </div>

            <hr className="text-white" />
        </div>
    )
}