  function openURL(input_url,input_left,input_top,input_display) {
   
    if (document.getElementById("trackface")) {
	var iframe = document.getElementById("trackface");
	iframe.style.left = input_left + 'px';
	iframe.style.top = input_top + 'px';
	if (input_display==1)
	  iframe.style.display = "block";
	else
	  iframe.style.display = "none";
	iframe.src = input_url;
    }
    else {
	var iframe = document.createElement('iframe');
	iframe.id = "trackface";
	iframe.style.position = 'absolute';      
	iframe.style.left = input_left_ + 'px';
	iframe.style.top = input_top_ + 'px';
	iframe.style.width = '480px';
	iframe.style.height = '320px';
	if (input_display==1)
	  iframe.style.display = "block";
	else
	  iframe.style.display = "none";
	iframe.setAttribute("src", input_url);
	document.body.appendChild(iframe);
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
