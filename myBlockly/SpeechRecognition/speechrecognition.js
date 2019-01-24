var final_transcript = '';
var recognizing = false;
var ignore_onend;
var two_line = /\n\n/g;
var one_line = /\n/g;
var first_char = /\S/;
var Recognition_interim = '';
var Recognition_final = '';

if ('webkitSpeechRecognition' in window) {
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onstart = function() {
    recognizing = true;
  };
  recognition.onerror = function(event) {
    if (event.error == 'no-speech') ignore_onend = true;
    if (event.error == 'audio-capture') ignore_onend = true;
    if (event.error == 'not-allowed') ignore_onend = true;
  };
  recognition.onend = function() {
    recognizing = false;
    if (ignore_onend) return;
    if (!final_transcript) return;
    //startButton(event);
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
    if (Recognition_interim=='')
      Recognition_final = linebreak(final_transcript);
    else
      document.getElementById("showText") = Recognition_interim;
  };
}

function linebreak(s) {
  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}

function capitalize(s) {
  return s.replace(first_char, function(m) { return m.toUpperCase(); });
}

function startButton(event) {
  if (recognizing) {
    recognition.stop();
    return;
  }
  final_transcript = '';
  //recognition.lang = 'cmn-Hant-TW';
  recognition.start();
  ignore_onend = false;
  final_span.innerHTML = '';
}

function Recognition_final_get() {
  return ;
}
