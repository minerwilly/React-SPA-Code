import React from 'react';
import logo from '../img/webpack-tuts.jpg'; //relative path to image

const About = () => (
	<div className="about-page">
		<h1>This is About page</h1>
		<img src={logo} alt="" />		

	</div>
);

export default About;