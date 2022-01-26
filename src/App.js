import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/common/layout';

import './style.scss';

import HomePage from './components/pages';
import Eventos from './components/pages/eventos';
import Noticias from './components/pages/noticias';
import NoticiasOne from './components/pages/noticias/noticias-one';
import SingleNoticias from './components/pages/noticias/single';
import Transparencia from './components/pages/transparencia';
import Aleta from './components/pages/aleta';
import Ranking from './components/pages/ranking';
import BolicheEvento from './components/pages/boliche-evento';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route path="/home" exact component={HomePage} />
						<Route path="/eventos" exact component={Eventos} />
						<Route path="/noticias" exact component={Noticias} />
						<Route path="/noticias-1" exact component={NoticiasOne} />
						<Route path="/noticias/:slug"  component={SingleNoticias} />
						<Route path="/transparencia" exact component={Transparencia} />
						<Route path="/aleta" exact component={Aleta} />
						<Route path="/ranking" exact component={Ranking} />
						<Route path="/boliche-evento" exact component={BolicheEvento} />
					</Switch>
				</Layout>
			</BrowserRouter>
		</div>
	);
}

export default App;
