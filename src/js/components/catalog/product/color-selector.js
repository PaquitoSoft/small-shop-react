import React from 'react';

import { getProductColorImage } from '../../../plugins/url-builder';

export default function ColorSelector({colors: colorsList, onColorSelected}) {
	const colors = colorsList.map((color, index) => {
		return (
			<li key={index} className={`product-color ${!index ? 'selected' : ''}`} onClick={onColorSelected.bind(null, color)}>
				<img width="36" height="36" src={getProductColorImage(color.id)} alt={color.name} title={color.name} />
			</li>
		);
	});

	return (
		<div className="color-selector">
			<div className="title">Select a color:</div>
			<ul>{colors}</ul>
		</div>
	);
}
