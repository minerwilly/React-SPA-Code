import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
	<nav className="main-nav">
		<Link to='/'>Home</Link>
		<Link to='/house'>House</Link>
		<Link to='/about'>About</Link>
		<Link to='/contact'>Contact</Link>
	</nav>
);

// class Nav extends Component {
// 	render() {
// 		return (
// 			<div className="main-nav">
// 				<IndexLink to='/' activeClassName="active">Home</IndexLink>
// 				<Link to='/about'>About</Link>
// 				<Link to='/contact'>Contact</Link>
// 			</div>
// 		)
// 	}
// }

export default Nav;