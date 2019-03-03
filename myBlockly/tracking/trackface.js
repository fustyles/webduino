  function Trackface_open(input_url,input_left,input_top,input_display) {

    if (document.getElementById("trackface")) {
	var div = document.getElementById("trackface");
	div.style.left = input_left + 'px';
	div.style.top = input_top + 'px';	    
	if (input_display==1)
	  div.style.display = "block";
	else
	  div.style.display = "none";
	div.innerHTML = '<iframe id="tracking" src="'+input_url+'" style="width:480px;height:320px;" frameborder="0" allow="geolocation; microphone; camera"></iframe>';
    }
    else {
	var div = document.createElement('div');
	div.id = "trackface";
	div.style.position = 'absolute';      
	div.style.left = input_left + 'px';
	div.style.top = input_top + 'px';
	div.style.zIndex = '9999';
	if (input_display==1)
	  div.style.display = "block";
	else
	  div.style.display = "none";
	div.innerHTML = '<iframe id="tracking" src="'+input_url+'" style="width:480px;height:320px;" frameborder="0" allow="geolocation; microphone; camera"></iframe>';
	document.body.appendChild(div);
    }
  }
  
  function Trackface_display(input_display){
    if (document.getElementById("trackface")) {
	var div = document.getElementById("trackface");
	if (input_display==1)
	  div.style.display = "block";
	else
	  div.style.display = "none";
    }
  }

  function Trackface_get(input_property){
    if (document.getElementById("trackface")) {
	if (input_property=="faceX") return document.getElementById('tracking').contentWindow.document.getElementById('boundingBoxX').innerHTML;
	if (input_property=="faceY") return document.getElementById('tracking').contentWindow.document.getElementById('boundingBoxY').innerHTML; 
	if (input_property=="faceWidth") return document.getElementById('tracking').contentWindow.document.getElementById('boundingBoxWidth').innerHTML; 
	if (input_property=="faceHeight") return document.getElementById('tracking').contentWindow.document.getElementById('boundingBoxHeight').innerHTML; 
    }
  }
