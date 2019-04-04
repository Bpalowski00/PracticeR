import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Contact extends Component {
	render() {
		const { name, phone, email } = this.props
		return (
			<div className="card card-body mb-3">
				<h1>{name}</h1>
				<ul className="list-group">
					<li className="list-group-item">Email:{email}</li>
					<li className="list-group-item">Phone: {phone}</li>
				</ul>
			</div>
		)
	}
}
Contact.propTypes = {
	name: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired
}

export default Contact