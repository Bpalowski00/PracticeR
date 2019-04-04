import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";

class Contact extends Component {
	state = {
		showContactInfo: true
	};
	onDeleteClick = (id, dispatch) => {
		dispatch({
			type: "DELETE_CONTACT",
			payload: id
		});
	};
	onShowClick = e => { };
	render() {

		const { showContactInfo } = this.state;
		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					return (
						<div className="card card-body mb-3">
							<h4>
								{this.props.name}
								<i
									onClick={() =>
										this.setState({
											showContactInfo: !this.state.showContactInfo
										})
									}
									className="fas fa-sort-down"

								/>
								<i
									className="fas fa-times"
									style={{ float: "right" }}
									onClick={this.onDeleteClick.bind(this, this.props.id, dispatch)}
								/>
							</h4>
							{showContactInfo ? (
								<ul className="list-group">
									<li className="list-group-item">Email:{this.props.email}</li>
									<li className="list-group-item">Phone:{this.props.phone}</li>
								</ul>
							) : null}
						</div>
					);
				}}
			</Consumer>
		);
	}
}

Contact.propTypes = {
	contact: PropTypes.object.isRequired
};
export default Contact;