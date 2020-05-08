import React from 'react';
import Directory from '../../components/directory/directory.component';
import { Link } from 'react-router-dom';
import './homepage.styles.scss';

const HomePage = (props) => (
	<div className="homepage">
		{/* <button onClick={() => props.history.push('./hats')}> hats page </button> */}
		{/* <Link to="/hats"> Hats page</Link> */}
		<Directory />
	</div>
);

export default HomePage;
