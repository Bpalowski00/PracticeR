import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';


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
	deleteIcon = (id, dispatch) => {
		dispatch({
			type: 'DELETE_CONTACT',
			payload: id
		})
	}

	render() {

		/// Deconstructing
		const { id, name, email, phone } = this.props.contact
		const { showInfo } = this.state;

		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					return (
						<div className="card card-body mb-3">

							<h4>{name}
								<i onClick={this.iconClick} style={{ cursor: 'pointer' }} className="fas fa-sort-down"></i>
								<i className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }} onClick={this.deleteIcon.bind(this, id, dispatch)}></i>
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
				}}
			</Consumer>
		)
	}
}
Contact.propTypes = {
	contact: PropTypes.object.isRequired,

}

export default Contact