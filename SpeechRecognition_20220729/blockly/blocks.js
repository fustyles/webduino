Blockly.Blocks['SpeechRecognition_run'] = {
  init: function() {    
  this.appendDummyInput()  
      .appendField(Blockly.Msg.SPEECHRECOGNITION_SHOW)
      .appendField(Blockly.Msg.SPEECHRECOGNITION_LANGUAGE_SHOW)
      .appendField(new Blockly.FieldDropdown([
        ["",""],
        ["Afrikaans","af-ZA"],
        ["አማርኛ","am-ET"],
        ["Azərbaycanca","az-AZ"],
        ["বাংলাদেশ","bn-BD"],
        ["ভারত","bn-IN"],
        ["BahasaIndonesia","id-ID"],
        ["BahasaMelayu","ms-MY"],
        ["Català","ca-ES"],
        ["Čeština","cs-CZ"],
        ["Dansk","da-DK"],
        ["Deutsch","de-DE"],
        ["Australia","en-AU"],
        ["Canada","en-CA"],
        ["India","en-IN"],
        ["Kenya","en-KE"],
        ["Tanzania","en-TZ"],
        ["Ghana","en-GH"],
        ["NewZealand","en-NZ"],
        ["Nigeria","en-NG"],
        ["SouthAfrica","en-ZA"],
        ["Philippines","en-PH"],
        ["UnitedKingdom","en-GB"],
        ["UnitedStates","en-US"],
        ["Argentina","es-AR"],
        ["Bolivia","es-BO"],
        ["Chile","es-CL"],
        ["Colombia","es-CO"],
        ["CostaRica","es-CR"],
        ["Ecuador","es-EC"],
        ["ElSalvador","es-SV"],
        ["España","es-ES"],
        ["EstadosUnidos","es-US"],
        ["Guatemala","es-GT"],
        ["Honduras","es-HN"],
        ["México","es-MX"],
        ["Nicaragua","es-NI"],
        ["Panamá","es-PA"],
        ["Paraguay","es-PY"],
        ["Perú","es-PE"],
        ["PuertoRico","es-PR"],
        ["RepúblicaDominicana","es-DO"],
        ["Uruguay","es-UY"],
        ["Venezuela","es-VE"],
        ["Euskara","eu-ES"],
        ["Filipino","fil-PH"],
        ["Français","fr-FR"],
        ["BasaJawa","jv-ID"],
        ["Galego","gl-ES"],
        ["ગુજરાતી","gu-IN"],
        ["Hrvatski","hr-HR"],
        ["IsiZulu","zu-ZA"],
        ["Íslenska","is-IS"],
        ["Italia","it-IT"],
        ["Svizzera","it-CH"],
        ["ಕನ್ನಡ","kn-IN"],
        ["ភាសាខ្មែរ","km-KH"],
        ["Latviešu","lv-LV"],
        ["Lietuvių","lt-LT"],
        ["മലയാളം","ml-IN"],
        ["मराठी","mr-IN"],
        ["Magyar","hu-HU"],
        ["ລາວ","lo-LA"],
        ["Nederlands","nl-NL"],
        ["नेपालीभाषा","ne-NP"],
        ["Norskbokmål","nb-NO"],
        ["Polski","pl-PL"],
        ["Brasil","pt-BR"],
        ["Portugal","pt-PT"],
        ["Română","ro-RO"],
        ["සිංහල","si-LK"],
        ["Slovenščina","sl-SI"],
        ["BasaSunda","su-ID"],
        ["Slovenčina","sk-SK"],
        ["Suomi","fi-FI"],
        ["Svenska","sv-SE"],
        ["Tanzania","sw-TZ"],
        ["Kenya","sw-KE"],
        ["ქართული","ka-GE"],
        ["Հայերեն","hy-AM"],
        ["இந்தியா","ta-IN"],
        ["சிங்கப்பூர்","ta-SG"],
        ["இலங்கை","ta-LK"],
        ["மலேசியா","ta-MY"],
        ["తెలుగు","te-IN"],
        ["TiếngViệt","vi-VN"],
        ["Türkçe","tr-TR"],
        ["پاکستان","ur-PK"],
        ["بھارت","ur-IN"],
        ["Ελληνικά","el-GR"],
        ["български","bg-BG"],
        ["Pусский","ru-RU"],
        ["Српски","sr-RS"],
        ["Українська","uk-UA"],
        ["한국어","ko-KR"],
        ["普通话(中国大陆)","cmn-Hans-CN"],
        ["普通话(香港)","cmn-Hans-HK"],
        ["中文(台灣)","cmn-Hant-TW"],
        ["粵語(香港)","yue-Hant-HK"],
        ["日本語","ja-JP"],
        ["हिन्दी","hi-IN"],
        ["ภาษาไทย","th-TH"]
        ]), "language_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(180);
  }
};  

Blockly.Blocks['SpeechRecognition_get'] = {
  init: function () {   
  this.appendDummyInput()  
      .appendField(Blockly.Msg.SPEECHRECOGNITION_GET_SHOW); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(180);
  }
};

Blockly.Blocks['SpeechRecognition_listener'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.SPEECHRECOGNITION_LISTENER_SHOW); 
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(180);
  }
};

Blockly.Blocks['SpeechRecognition_keyword'] = {
  init: function () {   
  this.appendValueInput("myVar_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);    
  this.appendValueInput("keyword")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.SPEECHRECOGNITION_KEYWORD_SHOW);    
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(180);
  }
};

Blockly.Blocks['SpeechRecognition_interim'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.SPEECHRECOGNITION_INTERIM);
  this.appendValueInput("left")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.SPEECHRECOGNITION_LEFT);    
  this.appendValueInput("top")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.SPEECHRECOGNITION_TOP);	  
  this.appendValueInput("fontsize")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.SPEECHRECOGNITION_FONTSIZE);
  this.appendValueInput("zindex")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.SPEECHRECOGNITION_ZINDEX);
  this.appendValueInput("display")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.SPEECHRECOGNITION_DISPLAY); 	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(180);
  }
};

Blockly.Blocks['SpeechRecognition_interim_element'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.SPEECHRECOGNITION_INTERIM);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg.ELEMENT_SPAN,"span"],	  
		  [Blockly.Msg.ELEMENT_TEXT,"text"],
		  [Blockly.Msg.ELEMENT_DIV,"div"],
		  [Blockly.Msg.ELEMENT_TEXTAREA,"textarea"]
	  ]), "element_");    
  this.appendDummyInput()
      .appendField(Blockly.Msg.ID)
	  .appendField(new Blockly.FieldTextInput(""), "id_");  	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(180);
  }
};

Blockly.Blocks['SpeechRecognition_state'] = {
  init: function () {     
  this.appendDummyInput()   
      .appendField(Blockly.Msg.SPEECHRECOGNITION_STATE);  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(180);
  }
};

Blockly.Blocks['SpeechRecognition_switch'] = {
  init: function () {     
  this.appendDummyInput()   
      .appendField(Blockly.Msg.SPEECHRECOGNITION_SHOW);  
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["SPEECHRECOGNITION_START"],"1"],
		[Blockly.Msg["SPEECHRECOGNITION_STOP"],"0"]	  
  ]), "switch"); 	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(180);
  }
};

Blockly.Blocks['SpeechRecognition_texttonumber'] = {
  init: function () {     
  this.appendDummyInput()   
      .appendField(Blockly.Msg.SPEECHRECOGNITION_TEXTTONUMBER);
  this.appendValueInput("text")
      .setCheck("String"); 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(180);
  }
};