import React from 'react';

import Logger from '../../../plugins/logger';
import {getText} from '../../../plugins/i18n';
import * as catalogApi from '../../../api/catalog';

import LazyImagesLoader from '../../mixins/lazy-images-loader';
import ProductSummary from '../shared/product-summary';
import Sidebar from '../shared/sidebar';

import '../../../../styles/pages/catalog/category-page.css';

const logger = new Logger('CategoryPage');

class CategoryPage extends LazyImagesLoader {

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
			return (
				<ProductSummary
					product={product}
					key={index}
					category={pageData.category}
					ref={(component) => component && this.observeComponent(component)}
				/>
			);
		});

		const categories = pageData.categories.map((category, index) => {
			return (<li key={index}><a href={`/category/${category.name}/${category.id}`}>{category.name}</a></li>);
		});

		return (
			<div className="content-wrap category-page">

				<div className="container clearfix">

					<div className="products-count">
						<span className="count">{products.length}</span>&nbsp;<span>{getText('category-page.products')}</span>
					</div>

					<div className="postcontent nobottommargin col_last">
						<div id="shop" className="shop product-3 clearfix">
							{products}
						</div>
					</div>

					<Sidebar
						categories={pageData.categories}
						popularProducts={pageData.popularProducts}
					/>

				</div>

			</div>
		);
	}

}

export default CategoryPage;
