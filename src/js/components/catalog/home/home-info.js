import React from 'react';

export default function HomeInfo({info, isLast}) {
	return (
		<div className={`col_one_fourth nobottommargin ${isLast ? 'col_last' : ''}`}>
			<div className="feature-box fbox-plain fbox-dark fbox-small">
				<div className="fbox-icon">
					<i className={info.icon}></i>
				</div>
				<h3>{info.title}</h3>
				<p className="notopmargin">{info.message}</p>
			</div>
		</div>
	);
}
