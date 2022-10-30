var synth = window.speechSynthesis;
var tts = new SpeechSynthesisUtterance();
var ttsSpeakState = false;

async function ttsSetVoice(voice) {
    var voices = synth.getVoices();
    if (voices.length==0) {
      while (voices.length==0) {
        await delay(0.1);        
        var voices = synth.getVoices();     
      }
    }
    if (voices.length>0) { 
      for(i = 0; i < voices.length ; i++) {
        if(voices[i].name === voice) {
          tts.voice = voices[i];
        }
      }
    }
}

function ttsSetProperty(volume, rate, pitch, lang) {
    tts.volume = volume;
    tts.rate = rate;
    tts.pitch = pitch;
    tts.lang = lang;
}

async function ttsSpeak(voice, text) {
	if (ttsSpeakState&&text!="") {
		var state = recognizing||"";
		if (state)
			if (typeof Recognition_switch === 'function') Recognition_switch(0);;
		
		ttsSetVoice(voice);
		tts.text = text;
		synth.speak(tts);
		while (ttsSpeaking()) {
			await delay(0.01);
		}
		if (state)
			if (typeof Recognition_switch === 'function') Recognition_switch(1);;		
	}
}

function ttsSwitch(state) {
    if (state==1)
		ttsSpeakState = true;
	else
		ttsSpeakState = false;
}

function ttsState(state) {
	if (state=="pause")
		synth.pause();
	else if (state=="resume")
		synth.resume();
	else if (state=="cancel")
		synth.cancel(); 
}

function ttsSpeaking() {
	return synth.speaking;
}
