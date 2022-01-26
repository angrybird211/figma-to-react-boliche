import React from 'react';
import PlayerThree from '../features/players/player-three';

export default function Ranking() {
  return(
	<main className="main ranking-page">
		<div className="ranking-list ranking-list-one">
			<div className="bg-primary-light">
				<div className="container">
					<div className="list-header">
						<div className="section-title mb-0">
						<h2 className="text-primary">RANKING BRASILEIRO.</h2>
						</div>
					</div>

				<div className="list-body row">
					<div className="col-lg-6">
						<div className="select-box">
							<label className="text-primary"><b>Escolha a categoria:</b></label>

							<select name="category" className="form-control" defaultValue="default">
								<option value="default" selected="selected">Adulto Masculino</option>
								<option value="popularity">Adulto Masculion</option>
								<option value="rating">Adulto Masculion</option>
								<option value="date">Adulto Masculion</option>
								<option value="price-low">Adulto Masculion</option>
								<option value="price-high">Adulto Masculion</option>
							</select>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="select-box">
							<label className="text-primary"><b>Escolha a categoria:</b></label>

							<select name="category" className="form-control" defaultValue="default">
								<option value="default" selected="selected">Adulto Masculino</option>
								<option value="popularity">Adulto Masculion</option>
								<option value="rating">Adulto Masculion</option>
								<option value="date">Adulto Masculion</option>
								<option value="price-low">Adulto Masculion</option>
								<option value="price-high">Adulto Masculion</option>
							</select>
						</div>
					</div>
				</div>
				</div>
			</div>

			<div className="container-fluid">
				<div className="ranking-wrapper">
					<div className="top-3 text-white bg-primary">
						<div className="ranking-title flex-wrap">
							<h2 className="mb-4 mr-8">Ranking Infanto Juvenil Sub-16 Masculino</h2>

							<h6>atualizado em 01/10/2021</h6>
						</div>

						<PlayerThree number={1} color="green" />
						<PlayerThree number={2} color="light" />
						<PlayerThree number={3} color="secondary" />
					</div>

					<div className="top-10 text-white">
						<PlayerThree number={4}/>
						<PlayerThree number={5}/>
						<PlayerThree number={6}/>
						<PlayerThree number={7}/>
						<PlayerThree number={8}/>
						<PlayerThree number={9}/>
						<PlayerThree number={10}/>
					</div>
				</div>
			</div>
		</div>
	</main>
  )
}