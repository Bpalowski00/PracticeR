import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Contact extends Component {
	constructor() {
		super();
		this.state = {
			showInfo: false
		}
	}
	// Method
	iconClick = (e) => {
		this.setState({ showInfo: !this.state.showInfo });
	}
	deleteIcon = (id) => {
		this.props.deleteClickHandler();
	}

	render() {
		/// Deconstructing
		const { name, email, phone } = this.props.contact
		const { showInfo } = this.state;
		return (
			<div className="card card-body mb-3">

				<h4>{name}
					<i onClick={this.iconClick} style={{ cursor: 'pointer' }} className="fas fa-sort-down"></i>
					<i className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }} onClick={this.deleteIcon}></i>
				</h4>

				{showInfo ?
					////////True
					(<ul className="list-group">
						<li className="list-group-item">
							Email:{email}
						</li>
						<li className="list-group-item">
							Phone: {phone}
						</li>
					</ul>)
					////False
					: null}
			</div>
		)
	}
}
Contact.propTypes = {
	contact: PropTypes.object.isRequired,
	deleteClickHandler: PropTypes.func.isRequired
}

export default Contact