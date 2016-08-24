var path = require('path');

module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine', 'sinon'],
		files: [
			'spec/src/**/*.js'
		],

		preprocessors: {
			// add webpack preprocessor
			'src/**/*.js': ['webpack', 'sourcemap'],
			'spec/src/**/*.js': ['webpack', 'sourcemap'],
		},

		webpack: { // kind of a copy of your webpack config
			devtool: 'inline-source-map', // just do inline map insteadof the default
			module: {
				loaders: [
					{
						test: /\.js$/,
						loader: 'babel',
						exclude: path.resolve(__dirname, 'node_modules'),
						query: {
							presets: ['airbnb']
						}
					},
					{
						test: /\.css$/,
						loader: 'style!css!postcss'
					},
					{
						test: /\.json$/,
						loader: 'json'
					}
				]
			},
			externals: {
				'react/lib/ExecutionEnvironment': true,
				'react/lib/ReactContext': true
			}
		},

		webpackServer: {
			noInfo: true // please don't spam the console when running in karma
		},

		plugins: [
			'karma-webpack',
			'karma-jasmine',
			'karma-sinon',
			'karma-sourcemap-loader',
			'karma-chrome-launcher',
			'karma-phantomjs-launcher'
		],

		babelPreprocessor: {
			options: {
				presets: ['airbnb']
			}
		},

		reporters: ['progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
		singleRun: false

	});
};
