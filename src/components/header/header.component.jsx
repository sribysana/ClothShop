import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';
import { ReactComponent as Logo } from './crown.svg';
import './header.style.scss';

const Header = ({ currentUser }) => {
	return (
		<div className="header">
			<Link to="/">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					Shop
				</Link>
				<Link className="option" to="/shop">
					Contact
				</Link>
				{currentUser ? (
					<div className="option userInfo">
						<div onClick={() => auth.signOut()}>Sign out</div>
						<div className="displayName">{currentUser.displayName}</div>
						{currentUser.email}
						{currentUser.uid}
						{currentUser.phoneNumber}
					</div>
				) : (
					<Link className="option" to="/signin">
						Sign In
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
