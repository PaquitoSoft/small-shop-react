import React from 'react';
import {getCategories} from '../../api/catalog';
import Logger from '../../plugins/logger';
import events from '../../plugins/events-bus';

import MiniCart from './mini-cart';
import SearchControl from './search-control';

const logger = new Logger('NavigationMenu');

class NavigationMenu extends React.Component {

	constructor() {
		super();

		this.state = {
			categories: [],
			selectedCategoryId: -1
		};

		this.onNavigationEnd = this.onNavigationEnd.bind(this);
	}

	componentWillMount() {
		getCategories()
			.then(categories => {
				this.setState({ categories });
			})
			.catch(err => {
				logger.error('componentWillMount# Error loading categories:', err);
				events.bus.emit(events.types.SHOW_MODAL, 'Could not load navigation categories.');
			});

		events.bus.on(events.types.NAVIGATION_END, this.onNavigationEnd);
	}

	componentWillUnmount() {
		events.bus.removeListener(events.types.NAVIGATION_END, this.onNavigationEnd);
	}

	onNavigationEnd(requestContext) {
		this.setState({ selectedCategoryId: requestContext.params.categoryId });
	}

	createCategoryElements(categories) {
		return categories.map((category, index) => {
			return (
				<li key={index}>
					<a
						href={`/category/${category.name}/${category.id}`}
						className={category.id === this.state.selectedCategoryId ? 'selected' : ''}>
						<div>{category.name}</div>
					</a>
				</li>);
		});
	}

	render() {
		let middleIndex =  Math.ceil(this.state.categories.length / 2),
			categories = this.state.categories,
			 group1, group2;

		return (
			<nav id="primary-menu">
				<ul>
					<li className="navigation-categories">
						<a href="#"><div>Categories</div><span>Out of the Box</span></a>
						<div className="mega-menu-content style-2 clearfix">
							<ul className="mega-menu-column col-md-6">
								<li className="mega-menu-title">
									<ul>
										{this.createCategoryElements(categories.slice(0, middleIndex))}
									</ul>
								</li>
							</ul>
							<ul className="mega-menu-column col-md-6">
								<li className="mega-menu-title">
									<ul>
										{this.createCategoryElements(categories.slice(middleIndex))}
									</ul>
								</li>
							</ul>
						</div>
					</li>
					<li><a href="#"><div>Contact</div><span>Get In Touch</span></a></li>
				</ul>

				<MiniCart />

				<SearchControl />
			</nav>
		);
	}
}

export default NavigationMenu;
