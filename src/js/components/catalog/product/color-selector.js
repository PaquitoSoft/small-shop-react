import React from 'react';

import { getProductColorImage } from '../../../plugins/url-builder';
import {getText} from '../../../plugins/i18n';

export default function ColorSelector({colors: colorsList, onColorSelected}) {
	const colors = colorsList.map((color, index) => {
		return (
			<li key={index} className={`product-color ${!index ? 'selected' : ''}`} onClick={()=>onColorSelected(color)}>
				<img width="36" height="36" src={getProductColorImage(color.id)} alt={color.name} title={color.name} />
			</li>
		);
	});

	return (
		<div className="color-selector">
			<div className="title">{getText('product-page.select-color')}</div>
			<ul>{colors}</ul>
		</div>
	);
}
