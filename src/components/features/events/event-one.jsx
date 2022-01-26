export default function EventOne() {
    return (
        <article className="event event-one">
            <figure className="event-media">
                <img src={`${process.env.PUBLIC_URL}/assets/images/events/event-1.png`} alt="event" />

                <h4 className="score">9 OUT.</h4>
            </figure>

            <div className="event-detail">
                <h4 className="text-green">Brasília - DF</h4>
                <h3 className="event-title text-primary">Campeonato Brasileiro Individual de Boliche 2021</h3>
                <h5 className="text-uppercase text-gray">Striker Pier 21</h5>
            </div>
        </article>
    )
}