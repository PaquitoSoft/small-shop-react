
const developmentConfig = Object.freeze({
	apiHost: 'http://localhost:3003',
	_staticContentBasePath: 'http://localhost:3003/static',
	staticContentBasePath: 'http://palmist-tapir-66487.bitballoon.com'
});

const productionConfig = Object.freeze({
	apiHost: 'https://small-shop-api.herokuapp.com',
	_staticContentBasePath: 'https://dl.dropboxusercontent.com/u/30617876/small-shop',
	staticContentBasePath: 'http://palmist-tapir-66487.bitballoon.com'
});

export default process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig;
