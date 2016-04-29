import React from 'react';

import Logger from '../../plugins/logger';

import * as catalogApi from '../../api/catalog';

import ProductSummary from './product-summary';
import ProductsMiniList from './products-mini-list';
import NewsletterSubscribe from './newsletter-subscribe';

import '../../../styles/pages/catalog/category-page.css';

const logger = new Logger('CategoryPage');

class CategoryPage extends React.Component {

	constructor() {
		super();

		this.state = {
			category: undefined,
			products: [],
			categories: []
		};
	}

	static loadPageData(request) {
		logger.debug("Let's load category page required data...");
		return new Promise((resolve, reject) => {
			Promise.all([
				catalogApi.getCategoryDetails(request.params.categoryId),
				catalogApi.getCategoryProducts(request.params.categoryId),
				catalogApi.getCategories()
			])
			.then(values => {
				logger.debug('This is received data:', values[0], values[2]);
				resolve({
					category: values[0],
					products: values[1],
					categories: values[2]
				});
			})
			.catch(reject);
		});
	}

	render() {
		const products = this.props.pageData.products.map((product, index) => {
			return (<ProductSummary product={product} key={index} />);
		});

		const categories = this.props.pageData.categories.map((category, index) => {
			return (<li key={index}><a href={`/category/${category.name}/${category.id}`}>{category.name}</a></li>);
		});

		const popularProducts = []; // TODO
		const lastViewedProducts = []; // TODO

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

							<ProductsMiniList products={popularProducts} title="Popular items" />

							<ProductsMiniList products={lastViewedProducts} title="LAst viewed items" />

							<NewsletterSubscribe />

						</div>
					</div>

				</div>

			</div>
		);
	}

}

export default CategoryPage;
