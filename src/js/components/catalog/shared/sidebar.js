import React from 'react';
import events from '../../../plugins/events-bus';
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

					<h4>Shop Categories</h4>
					<ul className="categories-nav">
						{categories}
					</ul>

				</div>

				<ProductsMiniList products={props.popularProducts} title="Popular items" />

				<ProductsMiniList products={props.lastViewedProductsList} title="Last viewed items" />
			</div>
		</div>
	);

}

export default CategoryChangeListener(Sidebar);
