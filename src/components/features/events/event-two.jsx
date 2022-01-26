export default function EventTwo(props) {
    const { number, color } = props;

    return (
        <div className="event event-two">
            <h2 className={`score bg-${color}`}>{number} OUT.</h2>

            <h4 className={`text-${color}`}>Brasília - DF</h4>

            <h3 className="text-primary">Campeonato Brasileiro Individual de Boliche 2021</h3>

            <h5 className="text-uppercase">Striker Pier 21</h5>
        </div>
    )
}