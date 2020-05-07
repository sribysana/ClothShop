import React, { Component } from 'react';
import CollectionPreview from '../../components/collectionPreview/collectionPreview.component';
import SHOP_DATA from './shop.data';
class ShopePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: SHOP_DATA
		};
	}
	render() {
		return (
			<div>
				<h1>ShopePage</h1>
				<div className="">
					{SHOP_DATA.map(({ id, ...itemData }) => <CollectionPreview key={id} {...itemData} />)}
				</div>
			</div>
		);
	}
}

export default ShopePage;
