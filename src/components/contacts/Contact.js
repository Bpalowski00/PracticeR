import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios'
import { Link } from 'react-router-dom';
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
		axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then(res => dispatch({
				type: 'DELETE_CONTACT',
				payload: id
			}))
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
								<Link to={`edit/${id}`} >
									<i className="fas fa-pencil-alt"
										style={{
											cursor: 'pointer',
											float: 'right',
											color: 'black',
											marginRight: '1rem'
										}}></i>
								</Link>
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