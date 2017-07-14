import React from 'react';
import { render } from 'react-dom';
// console.log('Hi all again!');
import App from './app.jsx';

// import 'jquery';

// const css = require('../css/app.css');
const scss = require('../scss/app.scss');

const renderApp = () => {
	render(<App />, document.getElementById('app'));
}

renderApp();