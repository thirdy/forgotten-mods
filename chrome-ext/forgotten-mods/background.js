chrome.browserAction.onClicked.addListener(function(tab) {
	console.log('chrome.browserAction.onClicked', tab);
	chrome.tabs.executeScript(null, {file:"contentscript.js"});
});


chrome.webRequest.onCompleted.addListener(function(details) {
	console.log('chrome.browserAction.onClicked', details);
	chrome.tabs.executeScript(null, {file:"contentscript.js"});
}, {
    urls: ['http://www.poe.trade/search/*', 'http://poe.trade/search/*'],
	types: ["xmlhttprequest"]
});
