import React from 'react';
import events from '../../plugins/events-bus';

const CategoryChangeListener = (MixedComponent) => class _CategoryChangeListener extends React.Component {
	constructor() {
		super();

		this.state = {
			selectedCategoryId: -1
		};
		
		this.onNavigationEnd = this.onNavigationEnd.bind(this);
	}

	componentWillMount() {
		events.bus.on(events.types.NAVIGATION_END, this.onNavigationEnd);
	}

	componentWillUnmount() {
		events.bus.removeListener(events.types.NAVIGATION_END, this.onNavigationEnd);
	}

	onNavigationEnd(requestContext) {
		this.setState({ selectedCategoryId: requestContext.params.categoryId });
	}

	render() {
		return <MixedComponent {...this.state} {...this.props} />;
	}
};

export default CategoryChangeListener;
