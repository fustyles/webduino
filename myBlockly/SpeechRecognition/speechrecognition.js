<div class="right">
  <button id="start_button" onclick="startButton(event)">開始辨識</button>
</div>
<div id="results">
  <span class="final" id="final_span"></span> <span class="interim" id=
          "interim_span"></span>
</div>




<script>
var final_transcript = '';
var recognizing = false;
var ignore_onend;
var two_line = /\n\n/g;
var one_line = /\n/g;
var first_char = /\S/;

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
	startButton(event);
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
    final_span.innerHTML = linebreak(final_transcript);
	interim_span.innerHTML = linebreak(interim_transcript);
	if (interim_span.innerHTML=='')
	  console.log(final_span.innerHTML);
	final_span.innerHTML='';
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
  /*
	var langs =
	[['English',         ['en-US', 'United States']],
	 ['中文',            ['cmn-Hans-CN', '普通话 (中国大陆)'],
						 ['cmn-Hans-HK', '普通话 (香港)'],
						 ['cmn-Hant-TW', '中文 (台灣)'],
						 ['yue-Hant-HK', '粵語 (香港)']],
	 ['日本語',           ['ja-JP']],
	 ['Lingua latīna',   ['la']]];
  */
  recognition.lang = 'ja-JP';
  recognition.start();
  ignore_onend = false;
  final_span.innerHTML = '';
}

</script>