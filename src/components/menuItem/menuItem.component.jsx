import React from 'react';
import { withRouter } from 'react-router-dom';
import './menuItem.style.scss';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
	<div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
		<div
			className="background-Image"
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
		/>
		<div className="content">
			<h2 className="title">{title.toUpperCase()}</h2>
			<span className="subTitle">Shop Now</span>
		</div>
	</div>
);

export default withRouter(MenuItem);
