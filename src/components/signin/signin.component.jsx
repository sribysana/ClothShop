import React, { Component } from 'react';
import FormInput from '../formInput/formInput.component';
import CustomButton from '../customButton/customButton.component';
import { signInWithGoogle } from '../firebase/firebase.utils';
import './signin.styles.scss';

class Signin extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		};
	}
	onSubmitHandeler = (e) => {
		e.preventDefault();
		this.setState({
			email: '',
			password: ''
		});
	};
	onChangeHandeler = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="signin">
				<h2 className="title">I already have an account </h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.onSubmitHandeler}>
					<FormInput
						type="email"
						name="email"
						value={this.state.email}
						id="email"
						handleChange={this.onChangeHandeler}
						label="Email"
					/>

					<FormInput
						type="password"
						name="password"
						value={this.state.password}
						id="password"
						handleChange={this.onChangeHandeler}
						label="Password"
					/>

					{/* <input type="submit" value="Submit Form" /> */}
					<div className="buttonGroup">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignin>
							Sign with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default Signin;
