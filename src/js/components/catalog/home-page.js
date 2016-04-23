import React from 'react';

import Logger from '../../plugins/logger';

import * as catalogApi from '../../api/catalog';
import * as shopApi from '../../api/shop';

import ProductSummary from './product-summary';
import HomeInfo from './home-info';

import '../../../styles/pages/catalog/home-page.css';

const logger = new Logger('HomePage');

const products = [
	{
		name: 'Checked Short Dress',
		label: '50% Off',
		images: ['/images/shop/dress/1.jpg', '/images/shop/dress/1-1.jpg'],
		price: '12.49',
		oldPrice: '24.99'
	},
	{
		name: 'Slim Fit Chinos',
		label: undefined,
		images: ['/images/shop/pants/1-1.jpg', '/images/shop/pants/1.jpg'],
		price: '39.99',
		oldPrice: undefined
	},
	{
		name: 'Dark Brown Boots',
		label: undefined,
		images: ['/images/shop/shoes/1.jpg', '/images/shop/shoes/1-1.jpg'],
		price: '49.00',
		oldPrice: undefined
	},
	{
		name: 'Light Blue Denim Dress',
		label: undefined,
		images: ['/images/shop/dress/2.jpg', '/images/shop/dress/2-2.jpg'],
		price: '19.95',
		oldPrice: undefined
	}
];

class HomePage extends React.Component {

	static loadPageData() {
		logger.debug("Let's load home page required data...");
		return new Promise((resolve, reject) => {
			Promise.all([
				catalogApi.getHomeBanner(),
				catalogApi.getFeaturedProducts(),
				shopApi.getShopInfo()
			])
			.then(values => {
				resolve({
					banner: values[0],
					featuredProducts: values[1],
					shopInfo: values[2]
				});
			})
			.catch(reject);
		});
	}

	render() {
		const productsElements = this.props.pageData.featuredProducts.map((product, index) => {
			return (<ProductSummary product={product} key={index} />);
		});

		const infosElements = this.props.pageData.shopInfo.map((info, index) => {
			return (<HomeInfo info={info} key={index} isLast={this.props.pageData.shopInfo.length - 1 === index} />);
		});

		logger.debug('render# Props:', this.props);

		return (
			<div className="content-wrap home-page">

				<div className="container clearfix">

					<div dangerouslySetInnerHTML={{__html: this.props.pageData.banner}}></div>

					<div className="tabs topmargin-lg clearfix" id="tab-3">
						<ul className="tab-nav clearfix">
							<li><a href="#tabs-9">New features</a></li>
						</ul>

						<div className="tab-container">
							<div className="tab-content clearfix" id="tabs-9">
								<div id="shop" className="shop clearfix">
									{productsElements}
								</div>
							</div>
						</div>
					</div>

					<div className="clear bottommargin-sm"></div>

					<div className="clear"></div>
				</div>

				<div className="section nobottommargin shop-info">
					<div className="container clearfix">
						{infosElements}
					</div>
				</div>
			</div>
		);
	}

}

export default HomePage;

/*
<div className="col-md-8 nopadding">
	<div className="col-md-6 noleftpadding bottommargin-sm">
		<a href="#"><img src="images/shop/banners/2.jpg" alt="Image"/></a>
	</div>
	<div className="col-md-6 noleftpadding bottommargin-sm">
		<a href="#"><img src="images/shop/banners/8.jpg" alt="Image"/></a>
	</div>
	<div className="clear"></div>
	<div className="col-md-12 noleftpadding">
		<a href="#"><img src="images/shop/banners/4.jpg" alt="Image"/></a>
	</div>
</div>
<div className="col-md-4 nopadding">
	<a href="#"><img src="images/shop/banners/9.jpg" alt="Image"/></a>
</div>

<div className="clear"></div>
*/
