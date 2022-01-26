export default function EventThree(props) {
    const { color } = props;

    return (
        <tr className="event event-three">
            <td className="score" style={{ backgroundColor: color }}>
                <h5>
                    <span>10 out.</span>
                </h5>
            </td>
            <td className="event-title">
                <div class="container-border">
                    <div className="text-wrapper">
                        <h5>Campeonato Brasileiro Individual de Boliche 2021</h5>
                        <h6>23/01/2021 à 25/01/2021</h6>
                    </div>
                </div>
            </td>
            <td>
                <div class="container-border">
                    <div className="text-wrapper">
                        <h5><b>Brasília / DF</b></h5>
                    </div>
                </div>
            </td>
            <td>
                <div class="container-border">
                    <div className="text-wrapper">
                        <h5><b>internacional</b></h5>
                    </div>
                </div>
            </td>
        </tr>
    )
}