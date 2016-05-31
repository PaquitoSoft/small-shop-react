
const developmentConfig = Object.freeze({
	apiHost: 'http://localhost:3003', // https://small-shop-api.herokuapp.com
	staticContentBasePath: 'http://localhost:3003/static' // https://dl.dropboxusercontent.com/u/30617876/small-shop
});

const productionConfig = Object.freeze({
	apiHost: 'https://small-shop-api.herokuapp.com',
	staticContentBasePath: 'https://dl.dropboxusercontent.com/u/30617876/small-shop'
});

export default process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig;
