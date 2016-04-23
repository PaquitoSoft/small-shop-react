import React from 'react';

export default function TopBar(props) {
	return (
		<div id="top-bar" className="hidden-xs">
			<div className="container clearfix">
				<div className="col_half nobottommargin">
					<p className="nobottommargin"><strong>Call:</strong> 1800-547-2145 | <strong>Email:</strong> info@canvas.com</p>
				</div>

				<div className="col_half col_last fright nobottommargin">
					<div className="top-links">
						<ul>
							<li>
								<a href="#">EN <i className="icon-angle-down"></i></a>
								<ul>
									<li><a href="#"><img src="images/icons/flags/french.png" alt="French"/> FR</a></li>
									<li><a href="#"><img src="images/icons/flags/italian.png" alt="Italian"/> IT</a></li>
									<li><a href="#"><img src="images/icons/flags/german.png" alt="German"/> DE</a></li>
								</ul>
							</li>
							<li><a href="#">Login</a>
								<div className="top-link-section">
									<form id="top-login" role="form">
										<div className="input-group" id="top-login-username">
											<span className="input-group-addon"><i className="icon-user"></i></span>
											<input type="email" className="form-control" placeholder="Email address" required=""/>
										</div>
										<div className="input-group" id="top-login-password">
											<span className="input-group-addon"><i className="icon-key"></i></span>
											<input type="password" className="form-control" placeholder="Password" required=""/>
										</div>
										<label className="checkbox">
										  <input type="checkbox" value="remember-me"/> Remember me
										</label>
										<button className="btn btn-danger btn-block" type="submit">Sign in</button>
									</form>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
