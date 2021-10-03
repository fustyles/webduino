//Create app window on launch
chrome.app.runtime.onLaunched.addListener(function(launchData) {	
	chrome.app.window.create(
		'package.nw/index.html',{
			id: 'SpBlockly'
		},
		function(win) {
			win.maximize();
		}
	);  
});

chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    console.log(request);
    if (request.url){
      var url = request.url;
      chrome.runtime.sendMessage({method: "url",url:url}, function(response) {
        console.log(response.farewell);
      });
    }
});