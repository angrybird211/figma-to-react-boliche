import { Link } from "react-router-dom";

import EventGroupOne from "../event-group/event-group-one";

export default function ScheduleOne() {
    return (
        <div className="schedule">
            <div className="container-fluid light-bar light-bar-green">
                <div className="schedule-header text-green">
                    <div className="container">
                        <div className="section-title">
                            <h2>Próximos<br />eventos.<i className="fa fa-calendar"></i></h2>

                            <div className="btn-wrapper y-center btn-out">
                                <Link to="/evento" className="text-green">VEJA TODOS EVENTOS</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <EventGroupOne />
            </div>
        </div>
    )
}