import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';



function Header(props) {
	const { branding } = props;
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-info mb-3 py-0">
			<a href="/" className="navbar-brand">{branding}</a>
			<div>
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link to="/" className="nav-link"><i className="fas fa-home">Home</i> </Link>
					</li>
					<li className="nav-item">
						<Link to="/contact" className="nav-link"><i className="fas fa-list">Contact List</i></Link>
					</li>
					<li className="nav-item">
						<Link to="/about" className="nav-link"><i className="fas fa-question">About</i> </Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

Header.propTypes = {
	branding: PropTypes.string.isRequired
}

export default Header;