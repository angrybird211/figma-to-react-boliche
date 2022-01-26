import EventOne from "../../features/events/event-one";
import EventTwo from "../../features/events/event-two";

export default function EventGroupOne() {
    return (
        <div className="event-group grid">
            <div className="height-x2 grid-item">
                <EventOne />
            </div>

            <div className="height-x1 grid-item">
                <EventTwo number={10} color="light-primary" />
            </div>

            <div className="height-x1 grid-item">
                <EventTwo number={11} color="secondary-dark" />
            </div>

            <div className="height-x1 grid-item">
                <EventTwo number={12} color="secondary-dark" />
            </div>

            <div className="height-x1 grid-item">
                <EventTwo number={13} color="secondary-dark" />
            </div>
        </div>
    )
}