import React from 'react';

import Logger from '../../../plugins/logger';

import * as catalogApi from '../../../api/catalog';

import ProductSummary from '../shared/product-summary';
import ProductsMiniList from '../shared/products-mini-list';
import NewsletterSubscribe from '../shared/newsletter-subscribe';

import '../../../../styles/pages/catalog/category-page.css';

const logger = new Logger('CategoryPage');

class CategoryPage extends React.Component {

	constructor() {
		super();

		this.state = {
			category: undefined,
			categoryProducts: [],
			popularProducts: [],
			categories: []
		};
	}

	static loadPageData(request) {
		logger.debug("Let's load category page required data...");
		return new Promise((resolve, reject) => {
			Promise.all([
				catalogApi.getCategoryDetails(request.params.categoryId),
				catalogApi.getCategoryProducts(request.params.categoryId),
				catalogApi.getPopularProducts(),
				catalogApi.getCategories()
			])
			.then(values => {
				logger.debug('This is received data:', values[0], values[2]);
				resolve({
					category: values[0],
					categoryProducts: values[1],
					popularProducts: values[2],
					categories: values[3]
				});
			})
			.catch(reject);
		});
	}

	render() {
		const pageData = this.props.pageData;

		const products = pageData.categoryProducts.map((product, index) => {
			return (<ProductSummary product={product} key={index} />);
		});

		const categories = pageData.categories.map((category, index) => {
			return (<li key={index}><a href={`/category/${category.name}/${category.id}`}>{category.name}</a></li>);
		});

		const lastViewedProducts = []; // TODO
		let lastViewedProductsList;
		if (lastViewedProducts.length) {
			lastViewedProductsList = (<ProductsMiniList products={lastViewedProducts} title="Last viewed items" />);
		}

		return (
			<div className="content-wrap category-page">

				<div className="container clearfix">

					<div className="products-count">
						<span className="count">{products.length}</span>&nbsp;<span>products</span>
					</div>

					<div className="postcontent nobottommargin col_last">
						<div id="shop" className="shop product-3 clearfix">
							{products}
						</div>
					</div>

					<div className="sidebar nobottommargin">
						<div className="sidebar-widgets-wrap">

							<div className="widget widget_links clearfix">

								<h4>Shop Categories</h4>
								<ul>
									{categories}
								</ul>

							</div>

							<ProductsMiniList products={pageData.popularProducts} title="Popular items" />

							{lastViewedProductsList}

							<NewsletterSubscribe />

						</div>
					</div>

				</div>

			</div>
		);
	}

}

export default CategoryPage;
