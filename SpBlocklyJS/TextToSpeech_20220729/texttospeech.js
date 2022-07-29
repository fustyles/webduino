var synth = window.speechSynthesis;
var tts = new SpeechSynthesisUtterance();

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