export default function PlayerThree(props) {
  const { number, color } = props;

  return (
      <div className="player player-three">
          <div className="player-info d-flex">
              <div className={`player-number bg-${color}`}>
                  <h2>{number}</h2>
              </div>

              <div className="player-avatar">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/avatars/avatar-1.png`} alt="player" />
              </div>

              <div className="player-name text-white">Rodrigo <strong>Marques costa</strong></div>

              <div className="player-nation">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/flag.png`} alt="nation" />
              </div>

              <div className="player-score text-center">
                  <h3>135.00</h3>
                  <h5>10/10/2020</h5>
              </div>

              <div className="player-score text-center">
                  <h3>392.00</h3>
                  <h5>10/10/2020</h5>
              </div>

              <div className="player-score border-0 text-center">
                  <h3>135.00</h3>
                  <h5>10/10/2020</h5>
              </div>

              <div className="total-score text-secondary d-block">
                  <h3>3650.00</h3>
              </div>
          </div>

          <hr className="text-white m-0" />
      </div>
  )
}