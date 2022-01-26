import React from 'react';
import {Link} from 'react-router-dom';

import CardTwo from '../../features/card/card-two';
import RankingListOne from '../../partials/ranking-list/ranking-list-one';

export default function BolicheEvento() {
  return(
    <main className="main boliche-evento">
		<div className="intro-section right-circle" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backs/evento.png)`}}>
			<div className="intro-content">
				<div className="container">					
					<h4>10 outubro 2021</h4>

					<h2>Campeonato Brasileiro<br/>Individual de Boliche 2021.</h2>

					<h3>23/01/2021 à 25/01/2021</h3>

					<div className="d-flex flex-wrap">
						<Link to="/boliche-evento/single/1">Brasília / DF</Link>

						<Link to="/boliche-evento/single/1">Striker Pier</Link>

						<Link to="/boliche-evento/single/1">Nacional</Link>
					</div>
				</div>
			</div>
		</div>

		<div className="container-fluid" style={{marginBottom: "4rem", padding: 0}}>
			<div className="accordion accordion-two right-circle mb-5">
				<div className="accordion-title flex-wrap">
					<div className="title-left mr-4 mb-5">
						<h2>Cronograma.</h2>
					</div>

					<div className="title-right">
						<a href="#1" className="mr-4 text-uppercase">cartaz do evento.</a>

						<a href="#1" className="text-uppercase">ofício.</a>
					</div>
				</div>

				<CardTwo title="Dia 1.">
				</CardTwo>

				<CardTwo title="Dia 2.">
				</CardTwo>

				<CardTwo title="Dia 3.">
				</CardTwo>
			</div>

			<RankingListOne />
		</div>
    </main>
  )
}