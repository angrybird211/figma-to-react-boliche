import EventThree from "../../features/events/event-three";
import Pagination from "../../features/pagianation";

export default function EventGroupTwo() {
    return (
        <div className="event event-group-two">
            <div className="event-group-header">
                <div class="event-header-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backs/evento.svg)` }} alt="evento" />

                <div className="container-fluid">
                    <h3><i className="fa fa-calendar"></i>Calendário.</h3>

                    <div className="d-flex ml-md-auto">
                        <select name="category" className="form-control select-year" defaultValue="default">
                            <option value="default" selected="selected">Ano.</option>
                            <option value="popularity">2021</option>
                            <option value="rating">2020</option>
                            <option value="date">2019</option>
                        </select>

                        <select name="category" className="form-control select-type ml-4" defaultValue="default">
                            <option value="default" selected="selected">tipo.</option>
                            <option value="popularity">tipo.</option>
                            <option value="rating">tipo.</option>
                            <option value="date">tipo.</option>
                        </select>

                        <input type="category" className="form-control bg-white ml-4" name="category" id="category" placeholder="pesquisar." />
                    </div>
                </div>
            </div>

            <div className="events-list">
                <div className="container-fluid">
                    <table className="w-100">
                        <thead>
                            <th>DATA.</th>
                            <th>EVENTO.</th>
                            <th>CIDADE.</th>
                            <th>TIPO.</th>
                        </thead>

                        <tbody>
                            <EventThree color="#114FA0" />

                            <EventThree color="#90A607" />

                            <EventThree color="#8B1EA6" />

                            <EventThree color="#0AA1F6" />

                            <EventThree color="#0AA1F6" />

                            <EventThree color="#90A607" />

                            <EventThree color="#114FA0" />
                        </tbody>
                    </table>
                </div>
            </div>

            <Pagination />
        </div>
    )
}