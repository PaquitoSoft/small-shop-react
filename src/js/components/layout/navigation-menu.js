import React from 'react';
import * as catalogApi from '../../api/catalog';
import Logger from '../../plugins/logger';
import MiniCart from './mini-cart';
import SearchControl from './search-control';

const logger = new Logger('NavigationMenu');

class NavigationMenu extends React.Component {

	constructor() {
		super();

		this.state = {
			categories: []
		};
	}

	componentWillMount() {
		catalogApi.getCategories()
			.then(categories => {
				this.setState({ categories });
			})
			.catch(err => {
				logger.error('componentWillMount# Error loading categories:', err.toString());
			});
	}

	createCategoryElements(categories) {
		return categories.map((category, index) => {
			return (<li key={index}><a href={`/category/${category.name}/${category.id}`}><div>{category.name}</div></a></li>);
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
