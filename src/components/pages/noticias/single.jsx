import React from 'react';

export default function SingleNoticias() {
  return(
    <main className="main noticias-single">
      <div className="container">
        <div className="row noticias-desc">
          <div className="col-md-8">
            <h2>Abertas as Inscrições para o XLI Campeonato Brasileiro de Seleções - XXXIII Taça Brasil e XXXI Taça Brasil de Tercetos...</h2>

            <p>Estão abertas as inscrições para o XLI Campeonato Brasileiro de Seleções, bem como a XXXIII Taça Brasil de Seleções e a XXXI Taça Brasil de Tercetos.</p>
          </div>

          <div className="col-md-4">
            <div className="noticias-sec">
              <h6>Postado em:</h6>
              <h5>18/11/2021</h5>
              <h6 className="text-uppercase">menos de 1 minuto de leitura</h6>
            </div>

            <div className="noticias-sec">
              <h6>Postado por:</h6>
              <h5>GUY IGLIORI</h5>
            </div>

            <div className="noticias-sec border-0">
              <div className="btn-wrapper">
                  <span className="btn btn-link text-uppercase text-secondary">time brasil</span>
              </div>
            </div>
          </div>
        </div>

        <figure className="post-media">
          <img src={`${process.env.PUBLIC_URL}/assets/images/blog/single.png`} alt="single-blog"/>
        </figure>

        <div className="post-desc">
          <p>Abertas as Inscrições para o 36º Campeonato Brasileiro Individual de Boliche 2021
            Estão abertas as inscrições para o 36ª Campeonato Brasileiro Individual de Boliche 2021. O campeonato será disputado em várias categorias e divisões conforme regulamento já disponível no site. Para acesso ao regulamento clique neste  LINK<br/><br/>

            Abertas as Inscrições para o 36º Campeonato Brasileiro Individual de Boliche 2021
            Estão abertas as inscrições para o 36ª Campeonato Brasileiro Individual de Boliche 2021. O campeonato será disputado em várias categorias e divisões conforme regulamento já disponível no site. Para acesso ao regulamento clique neste  LINK<br/><br/>

            Abertas as Inscrições para o 36º Campeonato Brasileiro Individual de Boliche 2021
            Estão abertas as inscrições para o 36ª Campeonato Brasileiro Individual de Boliche 2021. O campeonato será disputado em várias categorias e divisões conforme regulamento já disponível no site. Para acesso ao regulamento clique neste  LINK</p>
        </div>
      </div>
    </main>
  )
}