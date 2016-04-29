import React from 'react';
import routerEngine from 'page';
import Logger from '../../plugins/logger';

const logger = new Logger('Router');

class Router extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			currentComponent: null,
			routeContext: {},
			pageData: {}
		};

		Object.keys(this.props.config).forEach(routePath => {
			routerEngine(routePath, this.handleRouteChange.bind(this, this.props.config[routePath]));
		});
	}

	handleRouteChange(pageModulePath, routeContext) {
		logger.debug('handleRouteChange# Navigating to:', pageModulePath, routeContext);

		require(`bundle!../${pageModulePath}`)(pageModule => {
			const PageComponent = pageModule.default;

			// TODO Add a loader so the user knows we're doing something
			PageComponent.loadPageData(routeContext)
				.then(pageData => {
					this.setState({
						currentComponent: PageComponent,
						routeContext,
						pageData
					});
				})
				.catch(err => {
					// TODO Generic navigation error handling
					logger.error('handleRouteChange# Navigation error:', err.toString());
					logger.error(err.stack);
				});
		});
	}

	componentDidMount() {
		// Sync with browser location
		routerEngine({
			dispatch: true, // fire routing on page load
			hashbang: false	// whether using old fashioned hash URLs or not
		});
	}

	render() {
		if (!this.state.currentComponent) {
			return (<div></div>);
		} else {
			// Scroll to top after transitioning to a new page
			setTimeout(window.scrollTo.bind(window, 0, 0), 4);

			// Second parameter is props; Third parameter is children
			return React.createElement(this.state.currentComponent, {
				request: {
					pathname: this.state.routeContext.pathname,
					path: this.state.routeContext.path,
					params: this.state.routeContext.params,
					queryString: this.state.routeContext.querystring
				},
				pageData: this.state.pageData
			});
		}
	}
}

Router.propTypes = {
	config: React.PropTypes.object.isRequired
};

export default Router;
