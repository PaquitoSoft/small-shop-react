import appConfig from '../config/app-config';

export function getProductImageUrl(productId, imageName) {
	return `${appConfig.staticContentBasePath}/images/products/${productId}/${imageName}.jpg`;
}
