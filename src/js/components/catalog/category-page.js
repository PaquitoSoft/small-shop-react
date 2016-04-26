import React from 'react';
import * as catalogApi from '../../api/catalog';
import ProductSummary from './product-summary';
import ProductsMiniList from './products-mini-list';
import NewsletterSubscribe from './newsletter-subscribe';

class CategoryPage extends React.Component {

	static loadPageData(request) {
		logger.debug("Let's load category page required data...");
		return new Promise((resolve, reject) => {
			Promise.all([
				catalogApi.getCategoryDetails(req.params.categoryId),
				catalogApi.getCategoryProducts(req.params.categoryId),
				catalogApi.getCategories()
			])
			.then(values => {
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
		const products = this.state.products.map((product, index) => {
			return (<ProductSummary product={product} key={index} />);
		});

		const categories = this.state.categories.map((category, index) => {
			return (<li key={index}><a href="#">{category.name}</a></li>);
		});

		const popuplarProducts = []; // TODO
		const lastViewedProducts = []; // TODO

		return (
			<div className="content-wrap">

				<div className="container clearfix">
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

							<ProductsMiniList products={popuplarProducts} title="Popular items" />

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
