import React from 'react';
import events from '../../plugins/events-bus';
import * as loader from '../../plugins/loader';
import TopBar from './top-bar';
import Header from './header';
import Footer from './footer';
import Popup from '../shared/popup';

import routesConfiguration from '../../config/routes-config';
import Router from '../shared/router';

class MainLayout extends React.Component {

	constructor() {
		super();

		events.bus.on(events.types.NAVIGATION_START, this.onNavigationStart.bind(this));
		events.bus.on(events.types.NAVIGATION_END, this.onNavigationEnd.bind(this));
	}

	onNavigationStart() {
		loader.show();
	}

	onNavigationEnd() {
		loader.hide();
	}

	render() {
		return (
			<div>
				<TopBar />
				<Header />

				<section id="content">
					<Router	config={routesConfiguration} />
				</section>

				<Footer/>

				<Popup />
			</div>
		);
	}
}

export default MainLayout;
