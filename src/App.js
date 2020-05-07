import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import HomePage from './page/homePage/homePage.Component';
import ShopePage from './page/shop/shopePage.component';

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

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/hats" component={Hats} />
				<Route path="/hats/:model" component={HatsDetail} />
				<Route path="/shop" component={ShopePage} />
			</Switch>
		</div>
	);
}

export default App;
