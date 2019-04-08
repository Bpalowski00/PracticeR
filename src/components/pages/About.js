import React from 'react'

const About = (props) => {
	return (
		<div>
			<h1 className="display-4">About Contact Mananger</h1>
			<p className="lead">Simple app to manage contcats</p>
			<p className="text-secondary"> Version 1.0.0</p>
			<p>{props.match.params.id}</p>
		</div>
	)
}
export default About