import React from 'react';
import TopBar from './top-bar';
import Header from './header';
import Footer from './footer';
import Popup from '../shared/popup';

import routesConfiguration from '../../config/routes-config';
import Router from '../shared/router';

export default function MainLayout(props) {
	return (
		<div>
			<TopBar />
			<Header />

			<section id="content">
				<Router config={routesConfiguration} />
			</section>

			<Footer/>

			<Popup />
		</div>
	);
}
