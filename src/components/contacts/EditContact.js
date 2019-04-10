import React, { Component } from 'react'
import { Consumer } from '../../context';
import axios from 'axios'
import TextInputGroup from '../layout/TextInputGroup'

class EditContact extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			phone: '',
			errors: {
			}
		}
	}
	componentDidMount() {
		const { id } = this.props.match.params;

		axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then(res => {
				const customer = res.data;
				this.setState({
					name: customer.name,
					email: customer.email,
					phone: customer.phone
				})
			})
	}
	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = (dispatch, e) => {

		e.preventDefault();
		const { name, email, phone } = this.state;

		//check for errors
		if (name === '') {
			this.setState({
				errors: {
					name: 'Name is required'
				}
			});
			return;
		}

		if (email === '') {
			this.setState({
				errors: {
					email: 'Email is required'
				}
			});
			return;
		}
		if (phone === '') {
			this.setState({
				errors: {
					phone: 'Phone is required'
				}
			});
			return;
		}
		const updateContact = {
			name,
			email,
			phone
		}
		const { id } = this.props.match.params;
		axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact)
			.then(res =>
				dispatch({
					type: 'UPDATE_CONTACT',
					payload: res.data
				})
			)

		this.setState({
			name: '',
			email: '',
			phone: '',
			erros: {}
		})
		this.props.history.push('/contact');
	}
	render() {

		const { name, email, phone, errors } = this.state
		return (

			< Consumer >
				{value => {
					const { dispatch } = value;
					return (
						<div className="card mb-3">
							<div className="card-header">
								Add Contact
							</div>
							<div className="card-body">
								<form onSubmit={this.onSubmit.bind(this, dispatch)}>
									<TextInputGroup
										label="Name"
										name="name"
										placeholder="Enter Name"
										value={name}
										onChange={this.onChange}
										error={errors.name}
									/>
									<TextInputGroup
										label="Email"
										name="email"
										type="email"
										placeholder="Enter Email"
										value={email}
										onChange={this.onChange}
										error={errors.email}
									/>
									<TextInputGroup
										label="Phone"
										name="phone"
										placeholder="Enter Phone"
										value={phone}
										onChange={this.onChange}
										error={errors.phone}
									/>
									<input
										type="submit"
										value="Update Contact"
										className="btn btn-success btn-block">
									</input>
								</form>
							</div>
						</div >
					)
				}}
			</Consumer >
		)

	}
}
export default EditContact;