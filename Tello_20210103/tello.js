// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  function execURL(input_url) {
    console.log(input_url.trim());
	
    var innerHTML_ = '<iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation" src="' + input_url.trim() + '" style="width:240px;height:320px" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; geolocation; microphone; camera"></iframe>';
    
    if (document.getElementById("div_tello")) {
          document.getElementById("div_tello").innerHTML = innerHTML_;
    }
    else {
        var div = document.createElement('div');
        div.id = "div_tello";
        div.style.position = 'absolute';      
        div.style.left = '0px';
        div.style.top = '0px';
        div.style.display = 'none';
        div.innerHTML = innerHTML_;
        document.body.appendChild(div);
    }
  }

  window.execURL = execURL;

}(window, window.document));
