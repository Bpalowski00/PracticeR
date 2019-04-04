import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
	constructor() {
		super();
		this.state = {
			contacts: [
				{
					id: 1,
					name: 'Brian P',
					email: 'Brian@yahoo.com',
					phone: '000-111-2222'
				},
				{
					id: 2,
					name: 'James Brown',
					email: 'James@yahoo.com',
					phone: '111-222-2222'
				},
				{
					id: 3,
					name: 'Buck Foo',
					email: 'Bucky@yahoo.com',
					phone: '123-456-7890'
				},
			]
		};

	}
	deleteContact = (id) => {
		const { contacts } = this.state;
		const newContacts = contacts.filter(contact => contact.id !== id)
		this.setState({
			contacts: newContacts
		})
	}
	render() {
		const { contacts } = this.state;
		return (
			//	<div>
			< React.Fragment>
				{contacts.map(contact => (
					<Contact
						key={contact.id}
						contact={contact}
						deleteClickHandler={this.deleteContact.bind(this, contact.id)}
					/>
				))}
			</React.Fragment>
			//	</div>
		)
	}
}


export default Contacts