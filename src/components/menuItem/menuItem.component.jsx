import React from 'react';
import './menuItem.style.scss';

const MenuItem = ({ name, imageUrl, size }) => (
	<div className={`menu-item ${size}`}>
		<div
			className="background-Image"
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
		/>
		<div className="content">
			<h2 className="title">{name.toUpperCase()}</h2>
			<span className="subTitle">Shop Now</span>
		</div>
	</div>
);

export default MenuItem;
