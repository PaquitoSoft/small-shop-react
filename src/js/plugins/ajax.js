import lscache from 'lscache';

let _xmlParser = new DOMParser(),
	jsonpCallbackId = 0,
	jsonpTimeoutHandler = function(){};

function checkResponseStatus(res) {
	if (res.status < 400) {
		return res;
	} else {
		let error = new Error(res.statusText);
		error.statusCode = res.status;
		error.response = res;
		throw error;
	}
}

function documentParser(parserType, res) {
	return new Promise((resolve) => {
		res.text().then(text => {
			resolve({
				result: _xmlParser.parseFromString(text, parserType),
				url: res.url
			});
		});
	});
}

function parseJson(res) {
	return new Promise((resolve) => {
		res.json().then(data => {
			resolve({
				result: data,
				url: res.url
			});
		});
	});
}

function cacheResponse(ttl, key) {
	return (data) => {
		if (ttl) {
			console.log('Ajax::cacheResponse# Caching response with key:', key, 'for', ttl, 'minutes.');
			lscache.set(data.url, data.result, ttl); // Last parameter is TTL in minutes
		}
		return data.result;
	};
}

function getData(url, responseParser, options = {ttl: 0}) {
	let data = lscache.get(url);
	if (data) {
		return Promise.resolve(data);
	} else {
		return fetch(url)
			.then(checkResponseStatus)
			.then(responseParser)
			.then(cacheResponse(options.ttl, url));
	}
}

export function getJson(url, options) {
	return getData(url, parseJson, options);
}

export function getXml(url, options) {
	return getData(url, documentParser.bind(null, 'application/xml'), options);
}

export function getHtml(url, options) {
	return getData(url, documentParser.bind(null, 'text/html'), options);
}

export function putJson(url, data) {
	return fetch(url, {
			method: 'put',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(checkResponseStatus);
}


/*
	Idea from http://blog.garstasio.com/you-dont-need-jquery/ajax/#jsonp
*/
export function getJsonp(url, options = {cache: false, callbackParamName: 'callback', timeout: 10000}) {
	return new Promise((resolve, reject) => {
		let script = document.createElement('script'),
			callbackFnName = `_pdJsonpCallback_${jsonpCallbackId++}`,
			toHandler;

		// If we get to the timeout before having the response, we reject the promise
		// so we don't have the client waiting forever and we clear the global function
		// so it doesn't get invoked later, if the response arrives
		toHandler = setTimeout(function() {
			reject(new Error('JsonP timeout: ' + url));
			setTimeout(function() { window[callbackFnName] = jsonpTimeoutHandler; }, 4);
		}, options.timeout);

		window[callbackFnName] = function(data) {
			resolve(data);
			setTimeout(() => {
				delete window[callbackFnName];
				if (toHandler) clearTimeout(toHandler);
			}, 4);
		};

		script.setAttribute('src', `${url}&${options.callbackParamName}=${callbackFnName}`);
		document.body.appendChild(script);
	});
}
