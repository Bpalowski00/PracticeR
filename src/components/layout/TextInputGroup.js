import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';

const TextInputGroup = (props) => {
	return (
		<div className="form-group">
			<label
				htmlFor={props.name}>{props.label}</label>
			<input
				type={props.type}
				value={props.value}
				onChange={props.onChange}
				name={props.name}
				className={classnames('form-control form-control-lg', {
					'is-invalid': props.error
				})}
				placeholder={props.placeholder}
			/>
			{props.error && <div className="invalid-feedback">{props.error}</div>}

		</div>
	)
}

TextInputGroup.propsTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	error: PropTypes.string.isRequired
}
TextInputGroup.defaultProps = {
	type: 'text'
}
export default TextInputGroup;