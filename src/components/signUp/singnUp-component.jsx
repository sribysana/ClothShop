import React from 'react';
import FormInput from '../formInput/formInput.component';
import CustomButton from '../customButton/customButton.component';

import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import './signUp-style.scss';

class SignUp extends React.Component {
	constructor() {
		super();
		this.state = {
			displayName: '',
			email: '',
			password: '',
			cnfPassword: ''
		};
	}
	submitHandeler = async (e) => {
		e.preventDefault();
		const { displayName, email, password, cnfPassword } = this.state;
		if (password !== cnfPassword) {
			alert("confirm password  dosen't match password");
			return;
		}
		try {
			const createUserWithEmailAndPassword = await auth.createUserWithEmailAndPassword(email, password);
			console.log('createUserWithEmailAndPassword %%%%%%', createUserWithEmailAndPassword);
			const { user } = createUserWithEmailAndPassword;
			await createUserProfileDocument(user, { displayName });
			this.setState({
				displayName: '',
				email: '',
				password: '',
				cnfPassword: ''
			});
		} catch (err) {
			console.log(err.message);
		}
	};
	changeHandeler = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};
	render() {
		const { displayName, email, password, cnfPassword } = this.state;
		return (
			<div className="signUp">
				<h2>I don't have a account</h2>
				<span>SignUp with youe email and password</span>
				<form className="sign-up-form" onSubmit={this.submitHandeler}>
					<FormInput
						name="displayName"
						value={displayName}
						type="text"
						handleChange={this.changeHandeler}
						label="User Name"
						id="userName"
					/>
					<FormInput
						name="email"
						value={email}
						type="email"
						handleChange={this.changeHandeler}
						label="User Email"
						id="userEmail"
					/>
					<FormInput
						name="password"
						value={password}
						type="passsword"
						handleChange={this.changeHandeler}
						label="Confirm Your Passsword"
						id="passsword"
					/>
					<FormInput
						name="cnfPassword"
						value={cnfPassword}
						type="passsword"
						handleChange={this.changeHandeler}
						label="Confirm Your Passsword"
						id="cnfPassword"
					/>
					<CustomButton type="submit">Sign Up</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
