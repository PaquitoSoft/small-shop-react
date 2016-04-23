
class Logger {
	constructor(name) {
		this.name = name;

		for (let key in console) {
			this[key] = (...args) => {
				const loggerName = this.name;
				console[key].apply(console, [`${loggerName}:`].concat(...args));
			};
		}
	}
}

export default Logger;
