'use strict';

//新增自訂積木JS檔
function addCustomScript(foldname, path) {
	var file = ["blocks.js", "javascript.js", "toolbox.js", lang + ".js", "function.js"];
	for (var i=0;i<file.length;i++) {
		var url = path.substr(0, path.lastIndexOf("/")).replace("file:///","") + "/customBlocks/" + foldname + "/" + file[i];
		var s = document.createElement("script");
		s.type = "text/javascript";
		s.src = url;
		document.getElementsByTagName('head')[0].append(s);
	}
}


var path = document.currentScript.src;

addCustomScript("helloworld", path);