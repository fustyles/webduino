var final_transcript = '';
var recognizing = false;
var ignore_onend;
var two_line = /\n\n/g;
var one_line = /\n/g;
var first_char = /\S/;
var Recognition_interim = '';
var Recognition_final = '';
var SpeechRecognition_interim;

if ('webkitSpeechRecognition' in window) {
  var recognition = new webkitSpeechRecognition();
  try { 
    document.createEvent("TouchEvent"); 
    recognition.continuous = false;
    recognition.interimResults = false;	  
  }
  catch(e) { 
    recognition.continuous = true;
    recognition.interimResults = true;
  }   
  
  recognition.onstart = function() {
    recognizing = true;
  };
  
  recognition.onerror = function(event) {
    if (event.error == 'no-speech') ignore_onend = true;
    if (event.error == 'audio-capture') ignore_onend = true;
    if (event.error == 'not-allowed') ignore_onend = true;
    //console.log(event.error);
  };
  
  recognition.onend = function() {
    recognizing = false;
    if (ignore_onend) return;
    if (!final_transcript) return;
    recognition.start(); 
  };
  
  recognition.onresult = function(event) {
    var interim_transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript = event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
    final_transcript = capitalize(final_transcript);
    Recognition_interim = linebreak(interim_transcript);

    if (Recognition_interim=='') {
	  Recognition_final = linebreak(final_transcript);
	  document.getElementById("gamespan_recognition").innerHTML = Recognition_final;
	  if (typeof SpeechRecognition_interim === 'object' && SpeechRecognition_interim !== null) {
		console.log(SpeechRecognition_interim.tagName.toLowerCase());
		if (SpeechRecognition_interim.tagName.toLowerCase()=="input"||SpeechRecognition_interim.tagName.toLowerCase()=="textarea")
		  SpeechRecognition_interim.value = Recognition_final;		  
		else
		  SpeechRecognition_interim.innerHTML = Recognition_final;
	  }
	  if (typeof Recognition_recognitionFinish === 'function') Recognition_recognitionFinish();
    }
    else {
      	  Recognition_final = "";
	  document.getElementById("gamespan_recognition").innerHTML = Recognition_interim;
		console.log(SpeechRecognition_interim.tagName.toLowerCase());
		if (SpeechRecognition_interim.tagName.toLowerCase()=="input"||SpeechRecognition_interim.tagName.toLowerCase()=="textarea")
		  SpeechRecognition_interim.value = Recognition_interim;		  
		else
		  SpeechRecognition_interim.innerHTML = Recognition_interim;
    }
  };	
}

function linebreak(s) {
  return s.replace(two_line, '<p></p>').replace(one_line, '<br>').trim();
}

function capitalize(s) {
  return s.replace(first_char, function(m) { return m.toUpperCase(); });
}

function startButton(event) {
  if (recognizing) {
    recognition.stop();
  }
  final_transcript = '';
  recognition.start();
  ignore_onend = false;
}

function Recognition_final_get() {
  return Recognition_final;
}

function Recognition_state() {
  return recognizing;
}

function Recognition_switch(state) {
    if (state==1&&!recognizing) {
		startButton(event);
	}
	else if (state==0&&recognizing) {
		ignore_onend = true;
		recognition.stop();
	}
}

function span_interim(input_left, input_top, input_fontsize, input_zindex, input_display) {	
	if (!document.getElementById("gamespan_recognition")) {
		var obj = document.createElement('div');
		obj.id = "gamespan_recognition";
		obj.style.display = "none";
		obj.style.position = "absolute";
		obj.style.zIndex = "9999";
		obj.draggable="true";
		obj.setAttribute("onclick", "javascript:onclickid_set(this);");
		obj.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('div/plain',event.target.id);");
		document.body.appendChild(obj);
	}
	else 
		var obj = document.getElementById("gamespan_recognition");
	  
	obj.style.left = input_left + 'px';
	obj.style.top = input_top + 'px';
	obj.style.fontSize = input_fontsize + "px";
	obj.style.zIndex = input_zindex;
	if (input_display==0)
		obj.style.display = "none";
	else
		obj.style.display = "block";
}

function Recognition_recognitionFinish() {
}  

function Recognition_texttonumber(text) {
    return text.replace(/零/g,"0").replace(/一/g,"1").replace(/二/g,"2").replace(/三/g,"3").replace(/四/g,"4").replace(/五/g,"5").replace(/六/g,"6").replace(/七/g,"7").replace(/八/g,"8").replace(/九/g,"9").replace(/十/g,"10");
}

window.onload = function () {
  if (!document.getElementById("gamespan_recognition")) {
	var obj = document.createElement('div');
	obj.id = "gamespan_recognition";
	obj.style.display = "none";
	obj.style.position = "absolute";
	obj.style.zIndex = "9999";
	obj.draggable="true";
	obj.setAttribute("onclick", "javascript:onclickid_set(this);");
	obj.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('div/plain',event.target.id);");
	document.body.appendChild(obj);
  }
}
