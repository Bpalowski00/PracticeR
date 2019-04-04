import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case "DELETE_CONTACT":
			return {
				...state,
				contacts: state.contacts.filter(
					contact => contact.id !== action.payload
				)
			};
		default:
			return state;
	}
};

export class Provider extends Component {
	state = {
		contacts: [
			{
				id: 1,
				name: "Arpan Sahoo",
				email: "arpan@gmail.com",
				phone: "111-111-1111"
			},
			{
				id: 2,
				name: "Shibanee Mishra Sahoo",
				email: "shibanee@gmail.com",
				phone: "222-222-2222"
			}
		],
		dispatch: action => {
			this.setState(state => reducer(state, action));
		}
	};

	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export const Consumer = Context.Consumer;