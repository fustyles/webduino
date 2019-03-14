  function Trackface_open(input_url,input_left,input_top,input_display) {

    if (document.getElementById("trackface")) {
	var div = document.getElementById("trackface");
	div.style.left = input_left + 'px';
	div.style.top = input_top + 'px';	    
	if (input_display==1)
	  div.style.visibility="visible";
	else
	  div.style.visibility="hidden";
	div.innerHTML = '<iframe id="tracking" src="'+input_url+'" style="width:480px;height:320px;" frameborder="0" allow="geolocation; microphone; camera"></iframe>';
    } else {
	var div = document.createElement('div');
	div.id = "trackface";
	div.style.position = 'absolute';      
	div.style.left = input_left + 'px';
	div.style.top = input_top + 'px';
	div.style.zIndex = '-1';
	if (input_display==1)
	  div.style.visibility="visible";
	else
	  div.style.visibility="hidden";
	div.innerHTML = '<iframe id="tracking" src="'+input_url+'" style="width:480px;height:320px;" frameborder="0" allow="geolocation; microphone; camera"></iframe>';
	document.body.appendChild(div);
    }
  }
  
  function Trackface_display(input_display)  {
    if (document.getElementById("trackface")) {
	var div = document.getElementById("trackface");
	if (input_display==1)
	  div.style.visibility="visible";
	else
	  div.style.visibility="hidden";
    }
  }

  function Trackface_get(input_property)  {
    if (document.getElementById("trackface")) {
      if (document.getElementById('tracking').contentWindow.document.getElementById('boundingBoxX')) {
	if (input_property=="faceX") return Number(document.getElementById('tracking').contentWindow.document.getElementById('boundingBoxX').innerHTML);
	else if (input_property=="faceY") return Number(document.getElementById('tracking').contentWindow.document.getElementById('boundingBoxY').innerHTML); 
	else if (input_property=="faceWidth") return Number(document.getElementById('tracking').contentWindow.document.getElementById('boundingBoxWidth').innerHTML); 
	else if (input_property=="faceHeight") return Number(document.getElementById('tracking').contentWindow.document.getElementById('boundingBoxHeight').innerHTML); 
	else if (input_property=="jaw1X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("jaw1X").innerHTML);
	else if (input_property=="jaw1Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("jaw1Y").innerHTML);	
	else if (input_property=="jaw2X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("jaw2X").innerHTML);
	else if (input_property=="jaw2Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("jaw2Y").innerHTML);
	else if (input_property=="jaw3X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("jaw3X").innerHTML);
	else if (input_property=="jaw3Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("jaw3Y").innerHTML);	
	else if (input_property=="jaw4X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("jaw4X").innerHTML);
	else if (input_property=="jaw4Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("jaw4Y").innerHTML);	
	else if (input_property=="jaw5X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("jaw5X").innerHTML);
	else if (input_property=="jaw5Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("jaw5Y").innerHTML);
	else if (input_property=="jaw6X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("jaw6X").innerHTML);	
	else if (input_property=="jaw6Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("jaw6Y").innerHTML);
	else if (input_property=="jaw7X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("jaw7X").innerHTML);
	else if (input_property=="jaw7Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("jaw7Y").innerHTML);	
	else if (input_property=="jaw8X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("jaw8X").innerHTML);	
	else if (input_property=="jaw8Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("jaw8Y").innerHTML);
	else if (input_property=="jaw9X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("jaw9X").innerHTML);	
	else if (input_property=="jaw9Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("jaw9Y").innerHTML);
	else if (input_property=="nose1X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("nose1X").innerHTML);
	else if (input_property=="nose1Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("nose1Y").innerHTML);	
	else if (input_property=="nose2X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("nose2X").innerHTML);	
	else if (input_property=="nose2Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("nose2Y").innerHTML);
	else if (input_property=="nose3X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("nose3X").innerHTML);
	else if (input_property=="nose3Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("nose3Y").innerHTML);	
	else if (input_property=="nose4X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("nose4X").innerHTML);	
	else if (input_property=="nose4Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("nose4Y").innerHTML);
	else if (input_property=="mouth1X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("mouth1X").innerHTML);	
	else if (input_property=="mouth1Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("mouth1Y").innerHTML);	
	else if (input_property=="mouth2X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("mouth2X").innerHTML);
	else if (input_property=="mouth2Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("mouth2Y").innerHTML);
	else if (input_property=="mouth3X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("mouth3X").innerHTML);
	else if (input_property=="mouth3Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("mouth3Y").innerHTML);
	else if (input_property=="mouth4X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("mouth4X").innerHTML);
	else if (input_property=="mouth4Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("mouth4Y").innerHTML);
	else if (input_property=="eyeL1X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeL1X").innerHTML);	
	else if (input_property=="eyeL1Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeL1Y").innerHTML);
	else if (input_property=="eyeL2X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeL2X").innerHTML);	
	else if (input_property=="eyeL2Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeL2Y").innerHTML);
	else if (input_property=="eyeL3X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeL3X").innerHTML);	
	else if (input_property=="eyeL3Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeL3Y").innerHTML);
	else if (input_property=="eyeL4X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeL4X").innerHTML);	
	else if (input_property=="eyeL4Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeL4Y").innerHTML);
	else if (input_property=="eyeR1X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeR1X").innerHTML);
	else if (input_property=="eyeR1Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeR1Y").innerHTML);	
	else if (input_property=="eyeR2X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeR2X").innerHTML);	
	else if (input_property=="eyeR2Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeR2Y").innerHTML);
	else if (input_property=="eyeR3X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeR3X").innerHTML);
	else if (input_property=="eyeR3Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeR3Y").innerHTML);
	else if (input_property=="eyeR4X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeR4X").innerHTML);
	else if (input_property=="eyeR4Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeR4Y").innerHTML);
	else if (input_property=="eyeBrowL1X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeBrowL1X").innerHTML);
	else if (input_property=="eyeBrowL1Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeBrowL1Y").innerHTML);
	else if (input_property=="eyeBrowL2X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeBrowL2X").innerHTML);
	else if (input_property=="eyeBrowL2Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeBrowL2Y").innerHTML);
	else if (input_property=="eyeBrowL3X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeBrowL3X").innerHTML);
	else if (input_property=="eyeBrowL3Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeBrowL3Y").innerHTML);
	else if (input_property=="eyeBrowR1X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeBrowR1X").innerHTML);
	else if (input_property=="eyeBrowR1Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeBrowR1Y").innerHTML);
	else if (input_property=="eyeBrowR2X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeBrowR2X").innerHTML);
	else if (input_property=="eyeBrowR2Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeBrowR2Y").innerHTML);
	else if (input_property=="eyeBrowR3X") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeBrowR3X").innerHTML);
	else if (input_property=="eyeBrowR3Y") return Number(document.getElementById('tracking').contentWindow.document.getElementById("eyeBrowR3Y").innerHTML);
      }
      else
        return 0;	    
    }
    else
      return 0;
  }

  function Trackface_drawimage(input_id,input_left,input_top) {
    if (!document.getElementById("gamecanvas_"+input_id)) {
      var obj = document.createElement('canvas');
      obj.style.position = "absolute";
      obj.id = "gamecanvas_"+input_id;
      obj.setAttribute("width",'320px');
      obj.style.width = '320px';
      obj.setAttribute("height",'240px');
      obj.style.height = '240px';
      obj.style.left = '640px';
      obj.style.top = '0px';
      obj.style.zIndex = 9999;
      obj.style.display = "block";
      obj.draggable="true";
      obj.setAttribute("onclick", "javascript:onclickid_set(this);");
      obj.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('text/plain',event.target.id);");
      document.body.appendChild(obj); 
    }
    var video = document.getElementById('tracking').contentWindow.document.getElementById("videoWebcam");
    var context = document.getElementById("gamecanvas_"+input_id).getContext("2d");
    context.drawImage(video, input_left, input_top, video.clientWidth, video.clientHeight);	  
  }
