import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import HomePage from './page/homePage/homePage.Component';
import ShopePage from './page/shop/shopePage.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './page/signIn-signUp/signIn-signUp.component';
import { auth } from './components/firebase/firebase.utils';

const Hats = (props) => {
	console.log(props);
	return (
		<div>
			<h1> Hats Page </h1>
			<Link to={`${props.match.url}/aaa`}> aaa</Link>
			<Link to={`${props.match.url}/11`}> 11</Link>
			<Link to={`${props.match.url}/12`}> 12</Link>
		</div>
	);
};

const HatsDetail = (props) => {
	console.log(props);
	return (
		<div>
			<h1> Hats Detail Page {` Model is : ${props.match.params.model}`} </h1>
		</div>
	);
};

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null
		};
	}
	unSubscribe = null;
	componentDidMount() {
		this.unSubscribe = auth.onAuthStateChanged((user) => {
			this.setState({
				currentUser: user
			});
			console.log('user>>>>', user);
		});
	}
	componentWillUnmount() {
		this.unSubscribe();
	}
	render() {
		return (
			<div className="App">
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/hats" component={Hats} />
					<Route path="/hats/:model" component={HatsDetail} />
					<Route path="/shop" component={ShopePage} />
					<Route path="/signin" component={SignInSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
