import React from 'react';
import Logger from '../../../plugins/logger';
import * as catalogApi from '../../../api/catalog';

import ProductDetailGallery from './product-detail-gallery';
import ColorSelector from './color-selector';
import SizeSelector from './size-selector';
import AddProductToCart from './add-product-to-cart';
import Sidebar from '../shared/sidebar';

import '../../../../styles/pages/catalog/product-page.css';

const logger = new Logger('CategoryPage');

class ProductPage extends React.Component {

	constructor() {
		super();

		this.selectColorHandler = this.onColorSelected.bind(this);
		this.addToCartHandler = this.onAddToCart.bind(this);
	}

	onColorSelected(color) {
		logger.info('Selected color:', color);
	}

	onAddToCart(event) {
		logger.info('TODO: Add product to cart...');
		event.preventDefault();
	}

	static loadPageData(request) {
		logger.debug("Let's load product page required data...");
		return new Promise((resolve, reject) => {
			Promise.all([
				catalogApi.getProductDetails(request.params.productId),
				catalogApi.getPopularProducts(),
				catalogApi.getCategories()
			])
			.then(values => {
				resolve({
					product: values[0],
					popularProducts: values[1],
					categories: values[2]
				});
			})
			.catch(reject);
		});
	}

	render() {
		const product = this.props.pageData.product;

		return (
			<div className="content-wrap product-page">

				<div className="container clearfix">

					<div className="postcontent nobottommargin clearfix col_last">

						<div className="single-product">

							<div className="product">

								<div className="col_half">
									<ProductDetailGallery product={product} />
								</div>

								<div className="col_half col_last product-desc">

									<div>
										<span className="product-name">{product.name}</span>
										<div className="price-info">
											<span>Price:</span>
											<span className="price">{product.price}€</span>
										</div>
									</div><div className="line"></div>

									<div className="color-selector">
										<ColorSelector
											colors={product.colors}
											onColorSelected={this.selectColorHandler}
										/>
									</div>
									<div className="line"></div>

									<div className="size-selector">
										<SizeSelector sizes={product.sizes} />
									</div>
									<div className="line"></div>

									<AddProductToCart onAddProduct={this.addToCartHandler}/>
									<div className="line"></div>

								</div>

							</div>

						</div>

						<div className="clear"></div>
						<div className="line"></div>

					</div>

					{/* TODO Pass last viewed items */}
					<Sidebar
						categories={this.props.pageData.categories}
						popularProducts={this.props.pageData.popularProducts}
						lastViewedProductsList={[]}
					/>

				</div>

			</div>
		);
	}
}

export default ProductPage;
