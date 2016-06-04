import React from 'react';

import ProductsMiniList from './products-mini-list';

export default function Sidebar({categories: categoriesList, popularProducts, lastViewedProductsList}) {
	const categories = categoriesList.map((category, index) => {
		return (<li key={index}><a href={`/category/${category.name}/${category.id}`}>{category.name}</a></li>);
	});

	return (
		<div className="sidebar nobottommargin">
			<div className="sidebar-widgets-wrap">

				<div className="widget widget_links clearfix">

					<h4>Shop Categories</h4>
					<ul>
						{categories}
					</ul>

				</div>

				<ProductsMiniList products={popularProducts} title="Popular items" />

				<ProductsMiniList products={lastViewedProductsList} title="Last viewed items" />
			</div>
		</div>
	);
}
