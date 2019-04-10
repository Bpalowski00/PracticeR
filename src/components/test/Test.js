import React, { Component } from 'react'

class Test extends Component {
	state = {
		hello: "",
		title: "",
		body: ""
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(data =>
				this.setState({
					title: data.title,
					body: data.body
				})
			);
	}
	componentWillMount() {
		console.log('componentWillMount...')
	}
	componentDidUpdate() {
		console.log('componentDidUpdate...')
	}
	componentWillReceiveProps(nextProps, nextState) {
		console.log('componentWillReceiveProps')
	}

	render() {
		const { title, body } = this.state
		return (
			<div className="container">
				<h1 style={{ textAlign: 'center' }}>{title}</h1>
				<p>{body}</p>
			</div>
		)
	}
}
export default Test;
