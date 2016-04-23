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
				this.setState({categories});
			})
			.catch(err => {
				logger.error('componentWillMount# Error loading categories:', err.toString());
			});
	}

	render() {
		const categories = this.state.categories.map((category, index) => {
			return (<li key={index}><a href={`/category/${category.name}/${category.id}`}><div>{category.name}</div></a></li>);
		});

		return (
			<nav id="primary-menu">
				<ul>
					<li className="navigation-categories">
						<a href="#"><div>Categories</div><span>Out of the Box</span></a>
						<div className="mega-menu-content style-2 clearfix">
							<ul className="mega-menu-column col-md-6">
								<li className="mega-menu-title"><a href="#"><div>Footwear</div></a>
									<ul>
										{categories}
									</ul>
								</li>
							</ul>
							<ul className="mega-menu-column col-md-6">
								<li className="mega-menu-title"><a href="#"><div>Clothing</div></a>
									<ul>
										<li><a href="#"><div>Casual Shirts</div></a></li>
										<li><a href="#"><div>T-Shirts</div></a></li>
										<li><a href="#"><div>Collared Tees</div></a></li>
										<li><a href="#"><div>Pants / Trousers</div></a></li>
										<li><a href="#"><div>Ethnic Wear</div></a></li>
										<li><a href="#"><div>Jeans</div></a></li>
										<li><a href="#"><div>Sweamwear</div></a></li>
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
