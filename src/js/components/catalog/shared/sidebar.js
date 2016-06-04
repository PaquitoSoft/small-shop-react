import React from 'react';
import events from '../../../plugins/events-bus';
import ProductsMiniList from './products-mini-list';

class Sidebar extends React.Component {

	constructor() {
		super();

		this.state = {
			selectedCategoryId: -1
		};

		this.onNavigationEnd = this.onNavigationEnd.bind(this);
	}

	componentWillMount() {
		events.bus.on(events.types.NAVIGATION_END, this.onNavigationEnd);
	}

	componentWillUnmount() {
		events.bus.removeListener(events.types.NAVIGATION_END, this.onNavigationEnd);
	}

	onNavigationEnd(requestContext) {
		this.setState({ selectedCategoryId: requestContext.params.categoryId });
	}

	render() {
		const categories = this.props.categories.map((category, index) => {
			return (
				<li key={index}>
					<a
						href={`/category/${category.name}/${category.id}`}
						className={`${this.state.selectedCategoryId === category.id ? 'selected': ''}`}>
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

					<ProductsMiniList products={this.props.popularProducts} title="Popular items" />

					<ProductsMiniList products={this.props.lastViewedProductsList} title="Last viewed items" />
				</div>
			</div>
		);
	}

}

export default Sidebar;

// export default function Sidebar({categories: categoriesList, popularProducts, lastViewedProductsList}) {
// 	const categories = categoriesList.map((category, index) => {
// 		return (<li key={index}><a href={`/category/${category.name}/${category.id}`}>{category.name}</a></li>);
// 	});
//
// 	return (
// 		<div className="sidebar nobottommargin">
// 			<div className="sidebar-widgets-wrap">
//
// 				<div className="widget widget_links clearfix">
//
// 					<h4>Shop Categories</h4>
// 					<ul>
// 						{categories}
// 					</ul>
//
// 				</div>
//
// 				<ProductsMiniList products={popularProducts} title="Popular items" />
//
// 				<ProductsMiniList products={lastViewedProductsList} title="Last viewed items" />
// 			</div>
// 		</div>
// 	);
// }
