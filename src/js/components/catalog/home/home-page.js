import React from 'react';

import Logger from '../../../plugins/logger';

import * as catalogApi from '../../../api/catalog';
import * as shopApi from '../../../api/shop';
import {getText} from '../../../plugins/i18n';

import ProductSummary from '../shared/product-summary';
import HomeInfo from './home-info';

import '../../../../styles/pages/catalog/home-page.css';

const logger = new Logger('HomePage');

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
			return (
				<ProductSummary
					product={product}
					key={index}
					ref={(component) => component && this.observeComponent(component)}
				/>
			);
		});

		const infosElements = this.props.pageData.shopInfo.map((info, index) => {
			return (<HomeInfo info={info} key={index} isLast={this.props.pageData.shopInfo.length - 1 === index} />);
		});

		return (
			<div className="content-wrap home-page">

				<div className="container clearfix">

					<div className="home-banner-container" dangerouslySetInnerHTML={{__html: this.props.pageData.banner}}></div>

					<div className="tabs topmargin-lg clearfix" id="tab-3">
						<ul className="tab-nav clearfix">
							<li><a href="#tabs-9">{getText('home-page.new-features')}</a></li>
						</ul>

						<div className="tab-container">
							<div className="tab-content clearfix" id="tabs-9">
								<div id="shop" className="shop clearfix product-4">
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
