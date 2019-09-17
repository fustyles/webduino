// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';
  
  function Trackface_display(input_display)  {
    if (document.getElementById("gamecanvas_tracking")) {
	var div = document.getElementById("gamecanvas_tracking");
	if (input_display==1)
	  div.style.display="block";
	else
	  div.style.display="none";
    }
  }

  function Trackface_get(input_property)  {
	if (input_property=="faceX") return Number(document.getElementById('boundingBoxX').innerHTML);
	else if (input_property=="faceY") return Number(document.getElementById('boundingBoxY').innerHTML); 
	else if (input_property=="faceWidth") return Number(document.getElementById('boundingBoxWidth').innerHTML); 
	else if (input_property=="faceHeight") return Number(document.getElementById('boundingBoxHeight').innerHTML); 
	else if (input_property=="jaw1X") return Number(document.getElementById("jaw1X").innerHTML);
	else if (input_property=="jaw1Y") return Number(document.getElementById("jaw1Y").innerHTML);	
	else if (input_property=="jaw2X") return Number(document.getElementById("jaw2X").innerHTML);
	else if (input_property=="jaw2Y") return Number(document.getElementById("jaw2Y").innerHTML);
	else if (input_property=="jaw3X") return Number(document.getElementById("jaw3X").innerHTML);
	else if (input_property=="jaw3Y") return Number(document.getElementById("jaw3Y").innerHTML);	
	else if (input_property=="jaw4X") return Number(document.getElementById("jaw4X").innerHTML);
	else if (input_property=="jaw4Y") return Number(document.getElementById("jaw4Y").innerHTML);	
	else if (input_property=="jaw5X") return Number(document.getElementById("jaw5X").innerHTML);
	else if (input_property=="jaw5Y") return Number(document.getElementById("jaw5Y").innerHTML);
	else if (input_property=="jaw6X") return Number(document.getElementById("jaw6X").innerHTML);	
	else if (input_property=="jaw6Y") return Number(document.getElementById("jaw6Y").innerHTML);
	else if (input_property=="jaw7X") return Number(document.getElementById("jaw7X").innerHTML);
	else if (input_property=="jaw7Y") return Number(document.getElementById("jaw7Y").innerHTML);	
	else if (input_property=="jaw8X") return Number(document.getElementById("jaw8X").innerHTML);	
	else if (input_property=="jaw8Y") return Number(document.getElementById("jaw8Y").innerHTML);
	else if (input_property=="jaw9X") return Number(document.getElementById("jaw9X").innerHTML);	
	else if (input_property=="jaw9Y") return Number(document.getElementById("jaw9Y").innerHTML);
	else if (input_property=="nose1X") return Number(document.getElementById("nose1X").innerHTML);
	else if (input_property=="nose1Y") return Number(document.getElementById("nose1Y").innerHTML);	
	else if (input_property=="nose2X") return Number(document.getElementById("nose2X").innerHTML);	
	else if (input_property=="nose2Y") return Number(document.getElementById("nose2Y").innerHTML);
	else if (input_property=="nose3X") return Number(document.getElementById("nose3X").innerHTML);
	else if (input_property=="nose3Y") return Number(document.getElementById("nose3Y").innerHTML);	
	else if (input_property=="nose4X") return Number(document.getElementById("nose4X").innerHTML);	
	else if (input_property=="nose4Y") return Number(document.getElementById("nose4Y").innerHTML);
	else if (input_property=="mouth1X") return Number(document.getElementById("mouth1X").innerHTML);	
	else if (input_property=="mouth1Y") return Number(document.getElementById("mouth1Y").innerHTML);	
	else if (input_property=="mouth2X") return Number(document.getElementById("mouth2X").innerHTML);
	else if (input_property=="mouth2Y") return Number(document.getElementById("mouth2Y").innerHTML);
	else if (input_property=="mouth3X") return Number(document.getElementById("mouth3X").innerHTML);
	else if (input_property=="mouth3Y") return Number(document.getElementById("mouth3Y").innerHTML);
	else if (input_property=="mouth4X") return Number(document.getElementById("mouth4X").innerHTML);
	else if (input_property=="mouth4Y") return Number(document.getElementById("mouth4Y").innerHTML);
	else if (input_property=="eyeL1X") return Number(document.getElementById("eyeL1X").innerHTML);	
	else if (input_property=="eyeL1Y") return Number(document.getElementById("eyeL1Y").innerHTML);
	else if (input_property=="eyeL2X") return Number(document.getElementById("eyeL2X").innerHTML);	
	else if (input_property=="eyeL2Y") return Number(document.getElementById("eyeL2Y").innerHTML);
	else if (input_property=="eyeL3X") return Number(document.getElementById("eyeL3X").innerHTML);	
	else if (input_property=="eyeL3Y") return Number(document.getElementById("eyeL3Y").innerHTML);
	else if (input_property=="eyeL4X") return Number(document.getElementById("eyeL4X").innerHTML);	
	else if (input_property=="eyeL4Y") return Number(document.getElementById("eyeL4Y").innerHTML);
	else if (input_property=="eyeR1X") return Number(document.getElementById("eyeR1X").innerHTML);
	else if (input_property=="eyeR1Y") return Number(document.getElementById("eyeR1Y").innerHTML);	
	else if (input_property=="eyeR2X") return Number(document.getElementById("eyeR2X").innerHTML);	
	else if (input_property=="eyeR2Y") return Number(document.getElementById("eyeR2Y").innerHTML);
	else if (input_property=="eyeR3X") return Number(document.getElementById("eyeR3X").innerHTML);
	else if (input_property=="eyeR3Y") return Number(document.getElementById("eyeR3Y").innerHTML);
	else if (input_property=="eyeR4X") return Number(document.getElementById("eyeR4X").innerHTML);
	else if (input_property=="eyeR4Y") return Number(document.getElementById("eyeR4Y").innerHTML);
	else if (input_property=="eyeBrowL1X") return Number(document.getElementById("eyeBrowL1X").innerHTML);
	else if (input_property=="eyeBrowL1Y") return Number(document.getElementById("eyeBrowL1Y").innerHTML);
	else if (input_property=="eyeBrowL2X") return Number(document.getElementById("eyeBrowL2X").innerHTML);
	else if (input_property=="eyeBrowL2Y") return Number(document.getElementById("eyeBrowL2Y").innerHTML);
	else if (input_property=="eyeBrowL3X") return Number(document.getElementById("eyeBrowL3X").innerHTML);
	else if (input_property=="eyeBrowL3Y") return Number(document.getElementById("eyeBrowL3Y").innerHTML);
	else if (input_property=="eyeBrowR1X") return Number(document.getElementById("eyeBrowR1X").innerHTML);
	else if (input_property=="eyeBrowR1Y") return Number(document.getElementById("eyeBrowR1Y").innerHTML);
	else if (input_property=="eyeBrowR2X") return Number(document.getElementById("eyeBrowR2X").innerHTML);
	else if (input_property=="eyeBrowR2Y") return Number(document.getElementById("eyeBrowR2Y").innerHTML);
	else if (input_property=="eyeBrowR3X") return Number(document.getElementById("eyeBrowR3X").innerHTML);
	else if (input_property=="eyeBrowR3Y") return Number(document.getElementById("eyeBrowR3Y").innerHTML);
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
    var video = document.getElementById("videoWebcam");
    var context = document.getElementById("gamecanvas_"+input_id).getContext("2d");
    context.drawImage(video, input_left, input_top, video.clientWidth, video.clientHeight);	  
  }
    
  window.Trackface_display = Trackface_display;
  window.Trackface_get = Trackface_get;
  window.Trackface_drawimage = Trackface_drawimage;
  
}(window, window.document));
