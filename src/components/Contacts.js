import React, { Component } from 'react'
import Contact from './Contact';
import { Consumer } from '../context';
class Contacts extends Component {


	// deleteContact(id) {
	// 	const newContacts = this.state.contacts.filter(contact => contact.id !== id);
	// 	this.setState({
	// 		contacts: newContacts
	// 	})
	// };

	render() {
		return (
			<Consumer>
				{value => {
					const { contacts } = value;
					return (
						<div >
							{contacts.map(contact => (
								<Contact
									key={contact.id}

									name={contact.name}
									phone={contact.phone}
									email={contact.email}
								//deleteClickHandler={this.deleteContact.bind(this, contact.id)} 

								/>
							))}
						</div>
					)
				}}
			</Consumer>
		)
	}
}
export default Contacts