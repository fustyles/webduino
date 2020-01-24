Blockly.JavaScript['SpeechRecognition_run'] = function (block) {
  var value_language_ = block.getFieldValue('language_');
  var code = 'var final_transcript = "";\nvar recognizing = false;\nvar ignore_onend;\nvar two_line = /\\n\\n/g;\nvar one_line = /\\n/g;\nvar first_char = /\\S/;\nvar recognition;\nvar Recognition_interim = "";\nvar Recognition_final = "";\nfunction Recognition_initial() {\nif ("webkitSpeechRecognition" in window) {\nrecognition = new webkitSpeechRecognition();\nrecognition.continuous = true;\nrecognition.interimResults = true;\nrecognition.onstart = function() {\nrecognizing = true;\n};\nrecognition.onerror = function(event) {\nif (event.error == "no-speech") ignore_onend = true;\nif (event.error == "audio-capture") ignore_onend = true;\nif (event.error == "not-allowed") ignore_onend = true;\nconsole.log(event.error);\n};\nrecognition.onend = function() {\nrecognizing = false;\nif (ignore_onend) return;\nif (!final_transcript) return;\nrecognition.start(); \n};\nrecognition.onresult = function(event) {\nvar interim_transcript = "";\nfor (var i = event.resultIndex; i < event.results.length; ++i) {\nif (event.results[i].isFinal) {\nfinal_transcript = event.results[i][0].transcript;\n} else {\ninterim_transcript += event.results[i][0].transcript;\n}\n}\nfinal_transcript = capitalize(final_transcript);\nRecognition_interim = linebreak(interim_transcript);\nif (Recognition_interim=="") {\nRecognition_final = linebreak(final_transcript);\nconsole.log("final   = " + Recognition_final);\n}\nelse {\nRecognition_final = "";\nif (!document.getElementById("showText")) {\nvar obj = document.createElement("div");\nobj.id = "showText";\nobj.style.position = "absolute";\nobj.style.zIndex = "9999";\nobj.draggable="true";\nobj.setAttribute("onclick", "javascript:onclickid_set(this);");\nobj.setAttribute("ondragstart","javascript:event.dataTransfer.setData(\'div/plain\',event.target.id);");\ndocument.body.appendChild(obj);\n}\ndocument.getElementById("showText").innerHTML = Recognition_interim;\nconsole.log("interim = " + Recognition_interim);\n}\n};\nreturn true;\n}\nelse {\nconsole.log("webkitSpeechRecognition failed.");\nreturn false;\n}\n}\nfunction linebreak(s) {\nreturn s.replace(two_line, "<p></p>").replace(one_line, "<br>");\n}\nfunction capitalize(s) {\nreturn s.replace(first_char, function(m) { return m.toUpperCase(); });\n}\nfunction startButton(event) {\nif (recognizing) {\nrecognition.stop();\n}\nfinal_transcript = "";\nrecognition.start();\nignore_onend = false;\n}\nfunction Recognition_final_get() {\nvar result = Recognition_final;\nRecognition_final = "";\nreturn result;\n}\n\n\nif (Recognition_initial()) {\n  recognition.lang="'+value_language_+'";\n  if (!recognizing) startButton(event);\n}\n';
  return code;
};

Blockly.JavaScript['SpeechRecognition_get'] = function (block) {
  var code = 'Recognition_final_get()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['SpeechRecognition_listener'] = function (block) {
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'setInterval(async function(){\n' + statements_do_ + '},10);\n';
  return code;
};

Blockly.JavaScript['SpeechRecognition_keyword'] = function (block) {
  var value_myVar = Blockly.JavaScript.valueToCode(block, 'myVar_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_keyword = Blockly.JavaScript.valueToCode(block, 'keyword', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_myVar + '.toLowerCase().indexOf('+value_keyword+'.toLowerCase())!=-1';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
