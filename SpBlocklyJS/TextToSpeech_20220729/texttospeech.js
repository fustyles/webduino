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

function ttsSpeak(voice, text) {
	if (ttsSpeakState) {
		ttsSetVoice(voice);
		tts.text = text;
		synth.speak(tts);
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
