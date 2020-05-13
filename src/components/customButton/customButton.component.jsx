import React from 'react';
import './customButton.style.scss';

const CustomButton = ({ children, isGoogleSignin, ...otherProps }) => (
	<button className={`${isGoogleSignin ? 'googleSigin' : ''} customButton`} {...otherProps}>
		{children}
	</button>
);

export default CustomButton;
