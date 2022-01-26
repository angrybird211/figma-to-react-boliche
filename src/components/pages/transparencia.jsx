import CardOne from "../features/card/card-one";

export default function Transparencia() {
    return (
        <main className="main transparencia">
            <div className="ranking-list ranking-list-one">
                <div className="container">
                    <div className="list-header">
                        <div className="section-title mb-0">
                            <h2 className="text-white">RELATÓRIO ANUAL DE GESTÃO</h2>

                            <h5 className="text-white">As atividade anuais da CBTKD são apresentadas em Assembléia Geral Ordinária, no primeiro trimestre do ano subsequente. Confira nos anexos, os Relatórios Anuais de Gestão.</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="accordion right-circle">
                    <CardOne title="LEGISLAÇÃO." isCollapsed={false} >
                        <div className="custom-table">
                            <div className="table-header">
                                <div className="th" style={{width: "45%"}}>
                                    <h4>ARQUIVOS.</h4>
                                </div>

                                <div className="th" style={{width: "30%"}}>
                                    <h4>DATA.</h4>
                                </div>

                                <div className="th" style={{width: "25%"}}>
                                    <h4>ANEXO.</h4>
                                </div>
                            </div>

                            <div className="table-body">
                                <div className="table-row">
                                    <div className="td file" style={{width: "45%"}}>
                                        <h4>Relatorio anual 2020</h4>
                                    </div>

                                    <div className="td data" style={{width: "30%"}}>
                                        <h4>25/03/2021   09:00</h4>
                                    </div>

                                    <div className="td" style={{width: "25%"}}>
                                        <a href="#1" className="download">
                                            <span className="text-uppercase">Download</span>
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="table-row">
                                    <div className="td file" style={{width: "45%"}}>
                                        <h4>Relatorio anual 2020</h4>
                                    </div>

                                    <div className="td data" style={{width: "30%"}}>
                                        <h4>25/03/2021   09:00</h4>
                                    </div>

                                    <div className="td" style={{width: "25%"}}>
                                        <a href="#1" className="download">
                                            <span className="text-uppercase">Download</span>
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="table-row">
                                    <div className="td file" style={{width: "45%"}}>
                                        <h4>Relatorio anual 2020</h4>
                                    </div>

                                    <div className="td data" style={{width: "30%"}}>
                                        <h4>25/03/2021   09:00</h4>
                                    </div>

                                    <div className="td" style={{width: "25%"}}>
                                        <a href="#1" className="download">
                                            <span className="text-uppercase">Download</span>
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="table-row">
                                    <div className="td file" style={{width: "45%"}}>
                                        <h4>Relatorio anual 2020</h4>
                                    </div>

                                    <div className="td data" style={{width: "30%"}}>
                                        <h4>25/03/2021   09:00</h4>
                                    </div>

                                    <div className="td" style={{width: "25%"}}>
                                        <a href="#1" className="download">
                                            <span className="text-uppercase">Download</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardOne>

                    <CardOne title="formação." />

                    <CardOne title="formação." />
                </div>
            </div>
        </main>
    )
}