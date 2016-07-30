import messages from '../messages/messages';

const DEFAULT_LANGUAGE = 'en';
let currentLanguage = (navigator.language || DEFAULT_LANGUAGE).split('-')[0];

export function getText(key) {
	const tokens = key.split('.');
	let translation = messages;

	for (let chunk of tokens) {
		translation = translation[chunk] || {};
	}

	return translation[currentLanguage] || translation[DEFAULT_LANGUAGE] || '---';
}

export function getCurrentLanguage() {
	return currentLanguage;
}

export function setCurrentLanguage(language) {
	currentLanguage = language;
}