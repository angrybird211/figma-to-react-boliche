export default function Pagination() {
    return (
        <div className="pagination-wrapper">
            <div className="container-fluid">
                <div className="pagination">
                    <div className="page-left">
                        <a href="#">
                            <i className="fa fa-angle-left"></i>
                        </a>
                    </div>

                    <div className="page-numbers divider-left divider-right">
                        <a href="#">
                            <span className="number">1</span>
                        </a>

                        <a href="#">
                            <span className="number">2</span>
                        </a>

                        <a href="#">
                            <span className="number">3</span>
                        </a>
                    </div>

                    <div className="page-right">
                        <a href="#">
                            <i className="fa fa-angle-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}