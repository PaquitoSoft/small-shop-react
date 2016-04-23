import appConfig from '../config/app-config';
import * as ajax from '../plugins/ajax';

export function getHomeBanner() {
	return new Promise((resolve, reject) => {
		// Fixed sample content
		const content = `
			<div class="home-banner">
				<div class="col-md-8 nopadding">
					<div class="col-md-6 noleftpadding bottommargin-sm">
						<a href="#"><img src="images/shop/banners/2.jpg" alt="Image"></a>
					</div>
					<div class="col-md-6 noleftpadding bottommargin-sm">
						<a href="#"><img src="images/shop/banners/8.jpg" alt="Image"></a>
					</div>
					<div class="clear"></div>
					<div class="col-md-12 noleftpadding">
						<a href="#"><img src="images/shop/banners/4.jpg" alt="Image"></a>
					</div>
				</div>
				<div class="col-md-4 nopadding">
					<a href="#"><img src="images/shop/banners/9.jpg" alt="Image"></a>
				</div>
				<div class="clear"></div>
			</div>`;

		// Add some fake latency
		setTimeout(function () {
			resolve(content);
		}, 250);
	});
}

export function getCategories() {
	return ajax.getJson(`${appConfig.apiHost}/catalog/category`);
}

export function getFeaturedProducts() {
	return ajax.getJson(`${appConfig.apiHost}/catalog/featured-products`);
}
