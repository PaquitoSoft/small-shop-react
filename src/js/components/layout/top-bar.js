import React from 'react';

import events from '../../plugins/events-bus';
import {getText, getCurrentLanguage, setCurrentLanguage} from '../../plugins/i18n';

const AVAILABLE_LANGUAGES = ['en', 'es'];

class TopBar extends React.Component {

	constructor(props) {
		super(props);
		this.displayName = 'TopBar';
	}

	onLanguageSelected(lang, event) {
		event.preventDefault();
		if (getCurrentLanguage() !== lang) {
			setCurrentLanguage(lang);
			events.bus.emit(
				events.types.NAVIGATION_REQUESTED,
				window.location.pathname
			);
			this.forceUpdate();
		}
	}

	render() {
		const currentLang = getCurrentLanguage();
		
		const languages = AVAILABLE_LANGUAGES.map((lang, index) => {
			return (
				<li key={index}>
					<a href="#" onClick={this.onLanguageSelected.bind(this, lang)}>
						<img 
							src={`/images/icons/flags/${lang}.png`} 
							alt={getText(`shared.languages.${lang}`)}/>
						&nbsp;{getText(`shared.languages.${lang}`)}
					</a>
				</li>
			);
		});

		return (
			<div id="top-bar" className="hidden-xs">
				<div className="container clearfix">
					<div className="col_half nobottommargin">
						<p className="nobottommargin">
							<strong>{getText('layout.phone')}:</strong> 1800-547-2145 | <strong>{getText('layout.email')}:</strong> info@canvas.com
						</p>
					</div>

					<div className="col_half col_last fright nobottommargin">
						<div className="top-links language-selector">
							<ul>
								<li>
									<a href="#">{getText(`shared.languages.${currentLang}`)} <i className="icon-angle-down"></i></a>
									<ul className="languages">
										{languages}
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TopBar;
