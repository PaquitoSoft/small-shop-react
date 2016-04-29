import React from 'react';
import NavigationMenu from './navigation-menu';

export default function Header(props) {
	return (
		<header id="header">

			<div id="header-wrap">

				<div className="container clearfix">

					<div id="primary-menu-trigger"><i className="icon-reorder"></i></div>

					<div id="logo">
						<a href="/" className="standard-logo">
							<img src="/images/logo.png" alt="Canvas Logo"/>
						</a>
						<a href="/" className="retina-logo">
							<img src="/images/logo@2x.png" alt="Canvas Logo"/>
						</a>
					</div>

					<NavigationMenu />
				</div>
			</div>
		</header>
	);
}
