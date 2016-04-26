import React from 'react';

export default function ProductsMiniList(props) {

	const products = props.products.map((product, index) => {
		return (
			<div className="spost clearfix">
				<div className="entry-image">
					<a href="#"><img src={product.imagesUrls[0]} alt="Image" /></a>
				</div>
				<div className="entry-c">
					<div className="entry-title">
						<h4><a href="#">{product.name}</a></h4>
					</div>
					<ul className="entry-meta">
						<li className="color">{product.price}€</li>
						<li><i className="icon-star3"></i> <i className="icon-star3"></i> <i className="icon-star3"></i> <i className="icon-star3"></i> <i className="icon-star-half-full"></i></li>
					</ul>
				</div>
			</div>
		);
	});

	return (
		<div className="widget clearfix">
			<h4>{props.title}</h4>
			<div id="post-list-footer">
				{products}
			</div>
		</div>
	);
}
