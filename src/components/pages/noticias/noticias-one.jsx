import React from 'react';
import {Link} from 'react-router-dom';

export default function NoticiasOne() {
	return(
		<main className="main noticias-one">
			<div className="bg-secondary">
				<div className="container">
					<div className="section-title text-primary">
						<h2>DOCUMENTOS E LEGISLAÇÕES.</h2>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="tags">
					<div className="tags-title">
						Filtro.
					</div>

					<div className="tag-group">
						<div className="tag">
							<Link href="/noticias">Atas.</Link>
						</div>

						<div className="tag">
							<Link href="/noticias">Atas de Eleições.</Link>
						</div>

						<div className="tag">
							<Link href="/noticias">Atas.</Link>
						</div>

						<div className="tag">
							<Link href="/noticias">Atas de Eleições.</Link>
						</div>

						<div className="tag">
							<Link href="/noticias">Atas de Eleições.</Link>
						</div>

						<div className="tag">
							<Link href="/noticias">Atas.</Link>
						</div>

						<div className="tag">
							<Link href="/noticias">Atas de Eleições.</Link>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-6">
						<div className="note-wrapper">
							<div className="note-title">
								Atas.
							</div>

							<div className="notes">
								<div className="note">
									2019 - ATA AGE 15/11/2019 - Calendário
								</div>
								<div className="note">
									2020, Tabela de custas 2020 e outros
								</div>
								<div className="note">
									2019 - ATA AGO de 15/11/2019 - Aprovação Previsão Orçamentária de 
								</div>
								<div className="note">
									2020
								</div>
								<div className="note">
									2018 - ATA AGE de 17/11/2018
								</div>
								<div className="note">
									2017 - ATA AGE de 03/11/2017
								</div>
								<div className="note">
									2016 - ATA AGE de 12/11/2016
								</div>
								<div className="note">
									2015 - ATA AGE de 05/12/2015
								</div>
								<div className="note">
									2014 - ATA AGE de 21/11/2014
								</div>
								<div className="note">
									2014 - ATA AGO de 21/03/2014
								</div>
								<div className="note">
									2013 - ATA AGE de 15/11/2013
								</div>
								<div className="note">
									2013 - ATA AGE de 01/07/2013
								</div>
								<div className="note">
									2013 - ATA AGO de 30/03/2013
								</div>
								<div className="note">
									2012 - ATA AGE de 17/11/2012
								</div>
								<div className="note">
									2012 - ATA AGE de 21/01/2012
								</div>
								<div className="note">
									2012 - ATA AGE de 21/01/2012
								</div>
								<div className="note">
									2011 - ATA AGE de 14/11/2011
								</div>
								<div className="note">
									2010 - ATA AGE de 13/11/2010
								</div>
							</div>
						</div>
					</div>


					<div className="col-md-6">
						<div className="note-wrapper">
							<div className="note-title">
								Atas de Eleições
							</div>

							<div className="notes">
								<div className="note">
									Ata de AGO de 12/12/2016 Arquivo Digitalizado - Ata de eleição - Ata de eleição registrada em cartório - Presidente, Vice-Presidente e Conselho Fiscal 2017 a 2020
								</div>
								<div className="note">
									2016 - ATA AGO de 12/11/2016 - Eleição Presidente e Conselho - Ata de Eleição do Presidente, Vice-Presidente e Conselho Fiscal para o Quadriênio 2017 a 2020
								</div>
								<div className="note">
									ATA da AGE de 01/07/2013 - Eleição do Presidente - Ata de Eleição do Presidente e Vice-Presidente para Completar o mandato de 2013 a 2016								
								</div>
							</div>
						</div>

						<div className="note-wrapper">
							<div className="note-title">
								Atas de Eleições
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}