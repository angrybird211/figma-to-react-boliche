import React from 'react';
import {Link} from 'react-router-dom';

export default function Aleta() {
	return(
		<main className="main aleta">
			<div className="section-title text-primary bg-primary-light">
				<div className="container">
					<h2>Atleta.</h2>
				</div>
			</div>

			<div className="container-fluid" style={{marginTop: "-23rem"}}>
				<div className="card right-circle"style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backs/aleta.png)`, backgroundSize: "cover"}}>
					<div className="aleta-info align-items-center">
						<figure className="aleta-media">
							<img src={`${process.env.PUBLIC_URL}/assets/images/avatars/avatar-2.svg`} alt="avatar"/>
						</figure>

						<div className="aleta-bio text-white">
							<h2>Miguel Arcanjo</h2>

							<div className="d-flex justify-content-between">
								<div className="aleta-item">
									<h5>IDADE</h5>
									<h4>28</h4>
								</div>

								<div className="aleta-item">
									<h5>UF</h5>
									<h4>LONDRINA / PR</h4>
								</div>
								
								<div className="aleta-item">
									<h5>RANKING</h5>
									<h4>02</h4>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="board">
					<div className="board-top">
					Torneio Pernambucano Individual Sem HDC - 2021
					</div>

					<div className="board-middle">
						<h5>Data: 19/08/2021    /    Atletas: 26    /    Posição All-Events: 24º lugar</h5>
						<h5>Linhas Jogadas: 20    /    Total de Pinos: 2826    /    Média: 141,30</h5>
					</div>

					<div className="tags">
						<div className="tag-group">							
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag active">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
						</div>
					</div>
				</div>
				
				<div className="board">
					<div className="board-top">
					Torneio Pernambucano Individual Sem HDC - 2021
					</div>

					<div className="board-middle">
						<h5>Data: 19/08/2021    /    Atletas: 26    /    Posição All-Events: 24º lugar</h5>
						<h5>Linhas Jogadas: 20    /    Total de Pinos: 2826    /    Média: 141,30</h5>
					</div>

					<div className="tags">
						<div className="tag-group">							
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag active">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
						</div>
					</div>
				</div>

				<div className="board">
					<div className="board-top">
					Torneio Pernambucano Individual Sem HDC - 2021
					</div>

					<div className="board-middle">
						<h5>Data: 19/08/2021    /    Atletas: 26    /    Posição All-Events: 24º lugar</h5>
						<h5>Linhas Jogadas: 20    /    Total de Pinos: 2826    /    Média: 141,30</h5>
					</div>

					<div className="tags">
						<div className="tag-group">							
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag active">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
							<Link to="#" className="tag">LINHA 1<br/>1102</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}