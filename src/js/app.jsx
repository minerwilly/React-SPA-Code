import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './nav.jsx';
import Landing from './landing.jsx'
import House from './house.jsx'
import About from './about.jsx'
import Contact from './contact.jsx'

// const Home = () => <h1>Home component</h1>;

const App = () => (	
	<Router>
		<div className="app">
				<Nav />
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route path='/house' component={House} />
				<Route path='/about' component={About} />
				<Route path='/contact' component={Contact} />
			</Switch>
		</div>
	</Router>	
);

export default App;