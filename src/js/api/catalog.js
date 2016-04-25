import appConfig from '../config/app-config';
import * as ajax from '../plugins/ajax';

export function getHomeBanner() {
	return ajax.getText(`${appConfig.staticContentBasePath}/content/catalog/home-banner.html`, {
		ttl: 24 * 60 // minutes
	});
}

export function getCategories() {
	return ajax.getJson(`${appConfig.apiHost}/catalog/category`, {
		ttl: 24 * 60 // minutes
	});
}

export function getFeaturedProducts() {
	return ajax.getJson(`${appConfig.apiHost}/catalog/featured-products`, {
		ttl: 5 // minutes
	});
}
