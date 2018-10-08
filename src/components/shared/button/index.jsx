// Core
import React from 'react';
import PropTypes from 'prop-types';
// import './styles.scss';

const Button = ({ text, type, name, onClick, cls, disabled }) => (
	<button type={ type } name={name} onClick={onClick} className={cls} disabled={disabled} >
		{text}
	</button>
);

Button.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string,
	name: PropTypes.string,
	cls: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
};

Button.defaultProps = {
	type: 'button',
	name: 'button',
	cls: '',
	onClick: () => null,
	disabled: false
};

export default Button;
