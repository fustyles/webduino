// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {
	
	'use strict';

	function trackingface_display(input_display, input_frame, input_result, input_opacity) {
		if (document.getElementById("gamecanvas_trackingface")) {
			var canvas = document.getElementById("gamecanvas_trackingface");
			if (input_display==1)
				canvas.style.display="block";
			else
				canvas.style.display="none";
		}
		document.getElementById("gamediv_trackingface").style.display = input_result;
		document.getElementById("frame_trackingface").value = input_frame;
		document.getElementById("region_trackingface").style.opacity = input_opacity;
	}

	function trackingface_get(input_index, input_property) {
		if (document.getElementById("gamediv_trackingface").innerHTML == "") return -1;
		var persons = document.getElementById("gamediv_trackingface").innerHTML.split("<br>");
		if ((input_index>persons.length-2)||(input_index<0)) return -1;	  
		var result = persons[input_index].split(",");
		//console.log(result);

		if (input_property=="faceX") return Number(result[0]);
		else if (input_property=="faceY") return Number(result[1]); 
		else if (input_property=="faceWidth") return Number(result[2]); 
		else if (input_property=="faceHeight") return Number(result[3]); 
		else if (input_property=="jaw1X") return Number(result[4]);
		else if (input_property=="jaw1Y") return Number(result[5]);	
		else if (input_property=="jaw2X") return Number(result[6]);
		else if (input_property=="jaw2Y") return Number(result[7]);
		else if (input_property=="jaw3X") return Number(result[8]);
		else if (input_property=="jaw3Y") return Number(result[9]);	
		else if (input_property=="jaw4X") return Number(result[10]);
		else if (input_property=="jaw4Y") return Number(result[11]);	
		else if (input_property=="jaw5X") return Number(result[12]);
		else if (input_property=="jaw5Y") return Number(result[13]);
		else if (input_property=="jaw6X") return Number(result[14]);	
		else if (input_property=="jaw6Y") return Number(result[15]);
		else if (input_property=="jaw7X") return Number(result[16]);
		else if (input_property=="jaw7Y") return Number(result[17]);	
		else if (input_property=="jaw8X") return Number(result[18]);	
		else if (input_property=="jaw8Y") return Number(result[19]);
		else if (input_property=="jaw9X") return Number(result[20]);	
		else if (input_property=="jaw9Y") return Number(result[21]);
		else if (input_property=="nose1X") return Number(result[22]);
		else if (input_property=="nose1Y") return Number(result[23]);	
		else if (input_property=="nose2X") return Number(result[24]);	
		else if (input_property=="nose2Y") return Number(result[25]);
		else if (input_property=="nose3X") return Number(result[26]);
		else if (input_property=="nose3Y") return Number(result[27]);
		else if (input_property=="nose4X") return Number(result[28]);
		else if (input_property=="nose4Y") return Number(result[29]);
		else if (input_property=="mouth1X") return Number(result[30]);	
		else if (input_property=="mouth1Y") return Number(result[31]);
		else if (input_property=="mouth2X") return Number(result[32]);
		else if (input_property=="mouth2Y") return Number(result[33]);
		else if (input_property=="mouth3X") return Number(result[34]);
		else if (input_property=="mouth3Y") return Number(result[35]);
		else if (input_property=="mouth4X") return Number(result[36]);
		else if (input_property=="mouth4Y") return Number(result[37]);
		else if (input_property=="eyeL1X") return Number(result[38]);
		else if (input_property=="eyeL1Y") return Number(result[39]);
		else if (input_property=="eyeL2X") return Number(result[40]);
		else if (input_property=="eyeL2Y") return Number(result[41]);
		else if (input_property=="eyeL3X") return Number(result[42]);
		else if (input_property=="eyeL3Y") return Number(result[43]);
		else if (input_property=="eyeL4X") return Number(result[44]);
		else if (input_property=="eyeL4Y") return Number(result[45]);
		else if (input_property=="eyeR1X") return Number(result[46]);
		else if (input_property=="eyeR1Y") return Number(result[47]);
		else if (input_property=="eyeR2X") return Number(result[48]);
		else if (input_property=="eyeR2Y") return Number(result[49]);
		else if (input_property=="eyeR3X") return Number(result[50]);
		else if (input_property=="eyeR3Y") return Number(result[51]);
		else if (input_property=="eyeR4X") return Number(result[52]);
		else if (input_property=="eyeR4Y") return Number(result[53]);
		else if (input_property=="eyeBrowL1X") return Number(result[54]);
		else if (input_property=="eyeBrowL1Y") return Number(result[55]);
		else if (input_property=="eyeBrowL2X") return Number(result[56]);
		else if (input_property=="eyeBrowL2Y") return Number(result[57]);
		else if (input_property=="eyeBrowL3X") return Number(result[58]);
		else if (input_property=="eyeBrowL3Y") return Number(result[59]);
		else if (input_property=="eyeBrowR1X") return Number(result[60]);
		else if (input_property=="eyeBrowR1Y") return Number(result[61]);
		else if (input_property=="eyeBrowR2X") return Number(result[62]);
		else if (input_property=="eyeBrowR2Y") return Number(result[63]);
		else if (input_property=="eyeBrowR3X") return Number(result[64]);
		else if (input_property=="eyeBrowR3Y") return Number(result[65]);
	}

	function trackingface_drawimage(input_id,input_left,input_top) {
		if (!document.getElementById("gamecanvas_"+input_id)) {
			var obj = document.createElement('canvas');
			obj.style.position = "absolute";
			obj.id = "gamecanvas_"+input_id;
			obj.style.left = '0px';
			obj.style.top = '0px';
			obj.style.zIndex = 9999;
			obj.style.display = "block";
			obj.draggable="true";
			obj.setAttribute("onclick", "javascript:onclickid_set(this);");
			obj.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('text/plain',event.target.id);");
			document.body.appendChild(obj); 
		}
		var video = document.getElementById("gamevideo_trackingface");
		document.getElementById("gamecanvas_"+input_id).setAttribute("width", video.width+"px");
		document.getElementById("gamecanvas_"+input_id).setAttribute("height", video.height+"px");
		document.getElementById("gamecanvas_"+input_id).style.width = video.width+"px";
		document.getElementById("gamecanvas_"+input_id).style.height = video.height+"px";	  
		var context = document.getElementById("gamecanvas_"+input_id).getContext("2d");
		context.drawImage(video, input_left, input_top, video.width, video.height);	  
	}

	function trackingface_startvideo_media(input_width, input_height, input_facing, input_videoInputIndex) {
		var video = document.getElementById("gamevideo_trackingface");
		video.width = input_width;
		video.height = input_height;
		video.style.width = input_width+"px";
		video.style.height = input_height+"px";		

		var canvas = document.getElementById("gamecanvas_trackingface");
		canvas.setAttribute("width", video.width);
		canvas.setAttribute("height", video.height);
		canvas.style.width = video.width+"px";
		canvas.style.height = video.height+"px";

		document.getElementById("sourceId_trackingface").innerHTML = "gamevideo_trackingface";
	}

	function trackingface_startvideo_stream(url) {
		var img = document.getElementById("gameimg_trackingface");
		var canvas = document.getElementById("gamecanvas_trackingface"); 

		img.style.visibility = "visible";
		img.src = url;
		img.onload = function() {
			canvas.setAttribute("width", img.width);
			canvas.setAttribute("height", img.height);
			canvas.style.width = img.width+"px";
			canvas.style.height = img.height+"px";				
			document.getElementById("sourceId_trackingface").innerHTML = "gameimg_trackingface";
		}	
	}

	window.trackingface_display = trackingface_display;
	window.trackingface_get = trackingface_get;
	window.trackingface_drawimage = trackingface_drawimage;
	window.trackingface_startvideo_media = trackingface_startvideo_media;
	window.trackingface_startvideo_stream = trackingface_startvideo_stream;  
	
}(window, window.document));
