import React, { Component } from 'react';
import MenuItem from '../menuItem/menuItem.component';
import './directory.styles.scss';

class Directory extends React.Component {
	constructor() {
		super();
		this.state = {
			section: [
				{
					title: 'HATS',
					imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
					id: 1
				},
				{
					title: 'JACKETS',
					imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
					id: 2
				},
				{
					title: 'SNEAKERS',
					imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
					id: 3
				},
				{
					title: 'WOMENS',
					imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
					id: 4,
					size: 'large'
				},
				{
					title: 'MENS',
					imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
					id: 5,
					size: 'large'
				}
			]
		};
	}
	render() {
		return (
			<div className="directory-menu">
				{this.state.section.map(({ title, imageUrl, id, size }) => (
					<MenuItem key={id} name={title} imageUrl={imageUrl} size={size} />
				))}
			</div>
		);
	}
}

export default Directory;
