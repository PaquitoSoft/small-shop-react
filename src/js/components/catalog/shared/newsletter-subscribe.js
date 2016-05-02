import React from 'react';

class NewsletterSubscribe extends React.Component {

	render() {
		return (
			<div className="widget subscribe-widget clearfix">
				<h4>Subscribe For Latest Offers</h4>
				<h5>Subscribe to Our Newsletter to get Important News, Amazing Offers &amp; Inside Scoops:</h5>
				<form action="#" role="form" className="notopmargin nobottommargin" novalidate="novalidate">
					<div className="input-group divcenter">
						<input type="text" className="form-control" placeholder="Enter your Email" required="" aria-required="true"/>
						<span className="input-group-btn">
							<button className="btn btn-success" type="submit"><i className="icon-email2"></i></button>
						</span>
					</div>
				</form>
			</div>
		);
	}

}

export default NewsletterSubscribe;
