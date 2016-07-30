import React from 'react';

import events from '../../../plugins/events-bus';
import {getText} from '../../../plugins/i18n';
import CategoryChangeListener from '../../mixins/category-change-listener';

import ProductsMiniList from './products-mini-list';

function Sidebar(props) {
	const categories = props.categories.map((category, index) => {
		return (
			<li key={index}>
				<a
					href={`/category/${category.name}/${category.id}`}
					className={`${props.selectedCategoryId === category.id ? 'selected': ''}`}>
					{category.name}
				</a>
			</li>
		);
	});

	return (
		<div className="sidebar nobottommargin">
			<div className="sidebar-widgets-wrap">

				<div className="widget widget_links clearfix">

					<h4>{getText('layout.categories')}</h4>
					<ul className="categories-nav">
						{categories}
					</ul>

				</div>

				<ProductsMiniList products={props.popularProducts} title={getText('shared.popular-items')} />
			</div>
		</div>
	);

}

export default CategoryChangeListener(Sidebar);
