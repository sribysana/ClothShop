import React, { Component } from 'react';
import CollectionItem from '../collectionItem/collectionItem.component';
import './collectionPreview.style.scss';

const CollectionPreview = ({ title, items }) => {
	return (
		<div className="collectionPreviewWrap">
			<h2 className="title"> {title}</h2>
			<div className="preview">
				{items.filter((itm, ind) => ind < 4).map(({ id, ...itemProps }) => {
					return <CollectionItem key={id} {...itemProps} />;
					//return <div key={`${ind}`}>{name}</div>;
				})}
			</div>
		</div>
	);
};

export default CollectionPreview;
