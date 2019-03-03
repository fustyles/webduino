  function openURL(input_url,input_left,input_top,input_display) {

    if (document.getElementById("trackface")) {
	var div = document.getElementById("trackface");
	div.style.left = input_left + 'px';
	div.style.top = input_top + 'px';	    
	if (input_display==1)
	  var display = "display:block;";
	else
	  var display = "display:none;";
	div.innerHTML = '<iframe src="trackface" style="width:480px;height:320px;'+display+'" frameborder="0" allow="geolocation; microphone; camera"></iframe>';
    }
    else {
	var div = document.createElement('div');
	div.id = "trackface";
	div.style.position = 'absolute';      
	div.style.left = input_left + 'px';
	div.style.top = input_top + 'px';
	div.style.zIndex = '9999';
	if (input_display==1)
	  var display = "display:block;";
	else
	  var display = "display:none;";
	div.innerHTML = '<iframe src="trackface" style="width:480px;height:320px;'+display+'" frameborder="0" allow="geolocation; microphone; camera"></iframe>';
	document.body.appendChild(div);
    }
  }
  
  function showTrackface(input_display){
    if (document.getElementById("trackface")) {
	var iframe = document.getElementById("trackface");
	if (input_display==1)
	  iframe.style.display = "block";
	else
	  iframe.style.display = "none";
    }
