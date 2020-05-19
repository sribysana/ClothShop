import React from 'react';
import Signin from '../../components/signin/signin.component';
import SignUp from '../../components/signUp/singnUp-component';
import './signIn-signUp.style.scss';

const SignInSignUpPage = () => (
	<div className="SignInSignUpPage">
		<Signin />
		<SignUp />
	</div>
);

export default SignInSignUpPage;
