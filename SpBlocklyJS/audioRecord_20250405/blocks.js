Blockly.Blocks['audiorecord_save_initial'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUDIORECORD_SHOW)
        .appendField(Blockly.Msg.AUDIORECORD_SAVE_SHOW);
    this.appendValueInput("index_")
        .setCheck("Number")
        .appendField(Blockly.Msg.AUDIORECORD_DEVICE_INDEX_SHOW);	
    this.appendValueInput("start_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUDIORECORD_START_ID_SHOW);
    this.appendValueInput("stop_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUDIORECORD_STOP_ID_SHOW);		  	    
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
  }  
};

Blockly.Blocks['audiorecord_gemini_initial'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUDIORECORD_SHOW)
        .appendField(Blockly.Msg.AUDIORECORD_GEMINI_SHOW);
    this.appendValueInput("index_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)	    
        .appendField(Blockly.Msg.AUDIORECORD_DEVICE_INDEX_SHOW);		
    this.appendValueInput("start_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUDIORECORD_START_ID_SHOW);
    this.appendValueInput("stop_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUDIORECORD_STOP_ID_SHOW);   
    this.appendValueInput("key_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUDIORECORD_GEMINI_KEY_SHOW);
    this.appendValueInput("prompt_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUDIORECORD_GEMINI_PROMPT_SHOW);
    this.appendStatementInput("do_")
	.appendField(Blockly.Msg.AUDIORECORD_GEMINI_RESPONSE_SHOW);		
    this.setInputsInline(false);	  
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(220);
  }
};

Blockly.Blocks['audiorecord_gemini_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUDIORECORD_SHOW)
        .appendField(Blockly.Msg.AUDIORECORD_GEMINI_GET_SHOW);
    this.setInputsInline(true);	  
    this.setOutput(true, null);  
    this.setColour(220);
  }  
};

Blockly.Blocks['audiorecord_openai_initial'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUDIORECORD_SHOW)
        .appendField(Blockly.Msg.AUDIORECORD_OPENAI_SHOW);
    this.appendValueInput("index_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)	    
        .appendField(Blockly.Msg.AUDIORECORD_DEVICE_INDEX_SHOW);		
    this.appendValueInput("start_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUDIORECORD_START_ID_SHOW);
    this.appendValueInput("stop_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUDIORECORD_STOP_ID_SHOW);   
    this.appendValueInput("key_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUDIORECORD_GEMINI_KEY_SHOW);
    this.appendDummyInput()  
        .appendField(Blockly.Msg.AUDIORECORD_OPENAI_MODEL_SHOW)
        .appendField(new Blockly.FieldDropdown([
			["whisper-1","whisper-1"],
			["gpt-4o-mini-transcribe","gpt-4o-mini-transcribe"],
			["gpt-4o-transcribe","gpt-4o-transcribe"],
			["groq_whisper-large-v3-turbo","whisper-large-v3-turbo"]
	    ]), "model_");		
    this.appendValueInput("prompt_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUDIORECORD_GEMINI_PROMPT_SHOW);
    this.appendDummyInput()  
        .appendField(Blockly.Msg.AUDIORECORD_LANGUAGE_SHOW)
        .appendField(new Blockly.FieldDropdown([
		["Auto", ""],
		["Afar (aa)", "aa"],
		["Abkhazian (ab)", "ab"],
		["Avestan (ae)", "ae"],
		["Afrikaans (af)", "af"],
		["Akan (ak)", "ak"],
		["Amharic (am)", "am"],
		["Aragonese (an)", "an"],
		["Arabic (ar)", "ar"],
		["Assamese (as)", "as"],
		["Avaric (av)", "av"],
		["Aymara (ay)", "ay"],
		["Azerbaijani (az)", "az"],
		["Bashkir (ba)", "ba"],
		["Belarusian (be)", "be"],
		["Bulgarian (bg)", "bg"],
		["Bihari (bh)", "bh"],
		["Bislama (bi)", "bi"],
		["Bambara (bm)", "bm"],
		["Bengali (bn)", "bn"],
		["Tibetan (bo)", "bo"],
		["Breton (br)", "br"],
		["Bosnian (bs)", "bs"],
		["Catalan (ca)", "ca"],
		["Chechen (ce)", "ce"],
		["Chamorro (ch)", "ch"],
		["Corsican (co)", "co"],
		["Cree (cr)", "cr"],
		["Czech (cs)", "cs"],
		["Church Slavic (cu)", "cu"],
		["Chuvash (cv)", "cv"],
		["Welsh (cy)", "cy"],
		["Danish (da)", "da"],
		["German (de)", "de"],
		["Divehi (dv)", "dv"],
		["Dzongkha (dz)", "dz"],
		["Ewe (ee)", "ee"],
		["Modern Greek (el)", "el"],
		["English (en)", "en"],
		["Esperanto (eo)", "eo"],
		["Spanish (es)", "es"],
		["Estonian (et)", "et"],
		["Basque (eu)", "eu"],
		["Persian (fa)", "fa"],
		["Fulah (ff)", "ff"],
		["Finnish (fi)", "fi"],
		["Fijian (fj)", "fj"],
		["Faroese (fo)", "fo"],
		["French (fr)", "fr"],
		["Western Frisian (fy)", "fy"],
		["Irish (ga)", "ga"],
		["Scottish Gaelic (gd)", "gd"],
		["Galician (gl)", "gl"],
		["Guarani (gn)", "gn"],
		["Gujarati (gu)", "gu"],
		["Manx (gv)", "gv"],
		["Hausa (ha)", "ha"],
		["Hebrew (he)", "he"],
		["Hindi (hi)", "hi"],
		["Hiri Motu (ho)", "ho"],
		["Croatian (hr)", "hr"],
		["Haitian Creole (ht)", "ht"],
		["Hungarian (hu)", "hu"],
		["Armenian (hy)", "hy"],
		["Herero (hz)", "hz"],
		["Interlingua (ia)", "ia"],
		["Indonesian (id)", "id"],
		["Interlingue (ie)", "ie"],
		["Igbo (ig)", "ig"],
		["Sichuan Yi (ii)", "ii"],
		["Inupiaq (ik)", "ik"],
		["Ido (io)", "io"],
		["Icelandic (is)", "is"],
		["Italian (it)", "it"],
		["Inuktitut (iu)", "iu"],
		["Japanese (ja)", "ja"],
		["Javanese (jv)", "jv"],
		["Georgian (ka)", "ka"],
		["Kongo (kg)", "kg"],
		["Kikuyu (ki)", "ki"],
		["Kuanyama (kj)", "kj"],
		["Kazakh (kk)", "kk"],
		["Greenlandic (kl)", "kl"],
		["Khmer (km)", "km"],
		["Kannada (kn)", "kn"],
		["Korean (ko)", "ko"],
		["Kanuri (kr)", "kr"],
		["Kashmiri (ks)", "ks"],
		["Kurdish (ku)", "ku"],
		["Komi (kv)", "kv"],
		["Cornish (kw)", "kw"],
		["Kyrgyz (ky)", "ky"],
		["Latin (la)", "la"],
		["Luxembourgish (lb)", "lb"],
		["Ganda (lg)", "lg"],
		["Limburgish (li)", "li"],
		["Lingala (ln)", "ln"],
		["Lao (lo)", "lo"],
		["Lithuanian (lt)", "lt"],
		["Luba-Katanga (lu)", "lu"],
		["Latvian (lv)", "lv"],
		["Malagasy (mg)", "mg"],
		["Marshallese (mh)", "mh"],
		["Maori (mi)", "mi"],
		["Macedonian (mk)", "mk"],
		["Malayalam (ml)", "ml"],
		["Mongolian (mn)", "mn"],
		["Moldavian (mo)", "mo"],
		["Marathi (mr)", "mr"],
		["Malay (ms)", "ms"],
		["Maltese (mt)", "mt"],
		["Burmese (my)", "my"],
		["Nauruan (na)", "na"],
		["Norwegian Bokmål (nb)", "nb"],
		["North Ndebele (nd)", "nd"],
		["Nepali (ne)", "ne"],
		["Ndonga (ng)", "ng"],
		["Dutch (nl)", "nl"],
		["Norwegian Nynorsk (nn)", "nn"],
		["Norwegian (no)", "no"],
		["South Ndebele (nr)", "nr"],
		["Navajo (nv)", "nv"],
		["Chichewa (ny)", "ny"],
		["Occitan (oc)", "oc"],
		["Ojibwa (oj)", "oj"],
		["Oromo (om)", "om"],
		["Oriya (or)", "or"],
		["Ossetian (os)", "os"],
		["Punjabi (pa)", "pa"],
		["Pali (pi)", "pi"],
		["Polish (pl)", "pl"],
		["Pashto (ps)", "ps"],
		["Portuguese (pt)", "pt"],
		["Quechua (qu)", "qu"],
		["Romansh (rm)", "rm"],
		["Kirundi (rn)", "rn"],
		["Romanian (ro)", "ro"],
		["Russian (ru)", "ru"],
		["Kinyarwanda (rw)", "rw"],
		["Sanskrit (sa)", "sa"],
		["Sardinian (sc)", "sc"],
		["Sindhi (sd)", "sd"],
		["Northern Sami (se)", "se"],
		["Sango (sg)", "sg"],
		["Serbo-Croatian (sh)", "sh"],
		["Sinhalese (si)", "si"],
		["Slovak (sk)", "sk"],
		["Slovenian (sl)", "sl"],
		["Samoan (sm)", "sm"],
		["Shona (sn)", "sn"],
		["Somali (so)", "so"],
		["Albanian (sq)", "sq"],
		["Serbian (sr)", "sr"],
		["Swati (ss)", "ss"],
		["Southern Sotho (st)", "st"],
		["Sundanese (su)", "su"],
		["Swedish (sv)", "sv"],
		["Swahili (sw)", "sw"],
		["Tamil (ta)", "ta"],
		["Telugu (te)", "te"],
		["Tajik (tg)", "tg"],
		["Thai (th)", "th"],
		["Tigrinya (ti)", "ti"],
		["Turkmen (tk)", "tk"],
		["Tagalog (tl)", "tl"],
		["Tswana (tn)", "tn"],
		["Tongan (to)", "to"],
		["Turkish (tr)", "tr"],
		["Tsonga (ts)", "ts"],
		["Tatar (tt)", "tt"],
		["Twi (tw)", "tw"],
		["Tahitian (ty)", "ty"],
		["Uyghur (ug)", "ug"],
		["Ukrainian (uk)", "uk"],
		["Urdu (ur)", "ur"],
		["Uzbek (uz)", "uz"],
		["Venda (ve)", "ve"],
		["Vietnamese (vi)", "vi"],
		["Volapük (vo)", "vo"],
		["Walloon (wa)", "wa"],
		["Wolof (wo)", "wo"],
		["Xhosa (xh)", "xh"],
		["Yiddish (yi)", "yi"],
		["Yoruba (yo)", "yo"],
		["Zhuang (za)", "za"],
		["Chinese (zh)", "zh"],
		["Zulu (zu)", "zu"]
	    ]), "language_");		
    this.appendStatementInput("do_")
	.appendField(Blockly.Msg.AUDIORECORD_GEMINI_RESPONSE_SHOW);		
    this.setInputsInline(false);	  
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
  }
};

Blockly.Blocks['audiorecord_openai_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUDIORECORD_SHOW)
        .appendField(Blockly.Msg.AUDIORECORD_OPENAI_GET_SHOW);
    this.setInputsInline(true);	  
    this.setOutput(true, null);  
    this.setColour(260);
  }  
};
