import appConfig from '../config/app-config';

export function getCategoryUrl(category) {
	return `/category/${category.name}/${category.id}`;
}

export function getProductUrl(product, category) {
	// return `/category/${category.name}/${category.id}/product/${product.name}/${product.id}`;
	return `/product/${product.name}/${product.id}`;
}

export function getProductImageUrl(product, imageIndex) {
	return `${appConfig.staticContentBasePath}/images/products/${product.id}/${product.imagesUrls[imageIndex]}.jpg`;
}

export function getProductColorImage(colorId) {
	return `${appConfig.staticContentBasePath}/images/colors/${colorId}.jpg`;
}
