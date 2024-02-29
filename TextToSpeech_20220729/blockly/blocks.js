Blockly.Blocks['TextToSpeech_initial'] = {
  init: function () {
  this.appendDummyInput()
      .appendField(Blockly.Msg.TEXTTOSPEECH_SHOW);           
  this.appendValueInput("volume_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TEXTTOSPEECH_VOLUME_SHOW);  
  this.appendValueInput("rate_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TEXTTOSPEECH_RATE_SHOW);  
  this.appendValueInput("pitch_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TEXTTOSPEECH_PITCH_SHOW);      
  this.appendDummyInput()
      .appendField(Blockly.Msg.TEXTTOSPEECH_LANG_SHOW)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.TEXTTOSPEECH_LANG_en_US, "en-US"],    
        [Blockly.Msg.TEXTTOSPEECH_LANG_cmn_Hant_TW, "cmn-Hant-TW"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_yue_Hant_HK,"yue-Hant-HK"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_cmn_Hans_HK,"cmn-Hans-HK"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_cmn_Hans_CN,"cmn-Hans-CN"], 
        [Blockly.Msg.TEXTTOSPEECH_LANG_ja_JP, "ja-JP"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ko_KR, "ko-KR"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_es_ES, "es-ES"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_fr_FR, "fr-FR"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_it_IT, "it-IT"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_vi_VN,"vi-VN"],      
        [Blockly.Msg.TEXTTOSPEECH_LANG_af_ZA,"af-ZA"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_am_ET,"am-ET"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_hy_AM,"hy-AM"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_az_AZ,"az-AZ"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_id_ID,"id-ID"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ms_MY,"ms-MY"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_bn_BD,"bn-BD"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_bn_IN,"bn-IN"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ca_ES,"ca-ES"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_cs_CZ,"cs-CZ"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_da_DK,"da-DK"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_de_DE,"de-DE"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_en_AU,"en-AU"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_en_CA,"en-CA"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_en_GH,"en-GH"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_en_GB,"en-GB"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_en_IN,"en-IN"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_en_IE,"en-IE"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_en_KE,"en-KE"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_en_NZ,"en-NZ"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_en_NG,"en-NG"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_en_PH,"en-PH"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_en_ZA,"en-ZA"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_en_TZ,"en-TZ"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_es_AR,"es-AR"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_es_BO,"es-BO"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_es_CL,"es-CL"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_es_CO,"es-CO"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_es_CR,"es-CR"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_es_EC,"es-EC"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_es_SV,"es-SV"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_es_US,"es-US"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_es_GT,"es-GT"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_es_HN,"es-HN"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_es_MX,"es-MX"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_es_NI,"es-NI"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_es_PA,"es-PA"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_es_PY,"es-PY"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_es_PE,"es-PE"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_es_PR,"es-PR"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_es_DO,"es-DO"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_es_UY,"es-UY"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_es_VE,"es-VE"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_eu_ES,"eu-ES"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_fil_PH,"fil-PH"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_fr_CA,"fr-CA"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_gl_ES,"gl-ES"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ka_GE,"ka-GE"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_gu_IN,"gu-IN"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_hr_HR,"hr-HR"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_zu_ZA,"zu-ZA"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_is_IS,"is-IS"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_jv_ID,"jv-ID"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_kn_IN,"kn-IN"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_km_KH,"km-KH"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_lo_LA,"lo-LA"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_lv_LV,"lv-LV"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_lt_LT,"lt-LT"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_hu_HU,"hu-HU"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ml_IN,"ml-IN"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_mr_IN,"mr-IN"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_nl_NL,"nl-NL"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ne_NP,"ne-NP"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_nb_NO,"nb-NO"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_pl_PL,"pl-PL"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_pt_BR,"pt-BR"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_pt_PT,"pt-PT"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ro_RO,"ro-RO"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_si_LK,"si-LK"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_sk_SK,"sk-SK"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_sl_SI,"sl-SI"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_su_ID,"su-ID"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_sw_TZ,"sw-TZ"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_sw_KE,"sw-KE"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_fi_FI,"fi-FI"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_sv_SE,"sv-SE"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ta_IN,"ta-IN"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ta_SG,"ta-SG"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ta_LK,"ta-LK"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ta_MY,"ta-MY"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_te_IN,"te-IN"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_tr_TR,"tr-TR"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ur_PK,"ur-PK"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ur_IN,"ur-IN"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_el_GR,"el-GR"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_bg_BG,"bg-BG"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ru_RU,"ru-RU"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_sr_RS,"sr-RS"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_uk_UA,"uk-UA"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_he_IL,"he-IL"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ar_IL,"ar-IL"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ar_JO,"ar-JO"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ar_AE,"ar-AE"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ar_BH,"ar-BH"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ar_DZ,"ar-DZ"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ar_SA,"ar-SA"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ar_IQ,"ar-IQ"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ar_KW,"ar-KW"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ar_MA,"ar-MA"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ar_TN,"ar-TN"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ar_OM,"ar-OM"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ar_PS,"ar-PS"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ar_QA,"ar-QA"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ar_LB,"ar-LB"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_ar_EG,"ar-EG"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_fa_IR,"fa-IR"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_hi_IN,"hi-IN"],
        [Blockly.Msg.TEXTTOSPEECH_LANG_th_TH,"th-TH"]    
      ]), "lang_");
  this.setInputsInline(true);    
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(130);
  }
};

Blockly.Blocks['TextToSpeech_run'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.TEXTTOSPEECH_SHOW)
      .appendField(Blockly.Msg.TEXTTOSPEECH_RUN_SHOW);
  this.appendValueInput("voice_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT); 	  
  this.appendValueInput("text_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TEXTTOSPEECH_TEXT_SHOW);  
  this.setInputsInline(true);    
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(130);
  }
};

Blockly.Blocks['TextToSpeech_control'] = {
  init: function () {          
  this.appendDummyInput()
      .appendField(Blockly.Msg.TEXTTOSPEECH_CONTROL_SHOW)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg["TEXTTOSPEECH_PAUSE_SHOW"], "pause"],    
        [Blockly.Msg["TEXTTOSPEECH_RESUME_SHOW"], "resume"],
        [Blockly.Msg["TEXTTOSPEECH_CANCEL_SHOW"],"cancel"]    
      ]), "control_");
  this.setInputsInline(true);    
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(130);
  }
};

var voiceOptions = [];
window.speechSynthesis.onvoiceschanged = function() {
	var voices = this.getVoices();
	if (voices.length>0) { 
	  for(i = 0; i < voices.length ; i++) {
		  voiceOptions.push([voices[i].name, voices[i].name]);
	  }
	}
};


Blockly.Blocks['TextToSpeech_voice'] = {
  init: function () {    
  this.appendDummyInput()
      .appendField(Blockly.Msg.TEXTTOSPEECH_VOICE_SHOW)
      .appendField(new Blockly.FieldDropdown(voiceOptions), "voice_");
	this.setInputsInline(true);
	this.setOutput(true, null); 
	this.setColour(130);
  }
};

Blockly.Blocks['TextToSpeech_switch'] = {
  init: function () {     
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TEXTTOSPEECH_SHOW);  
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["TEXTTOSPEECH_START"],"1"],
		[Blockly.Msg["TEXTTOSPEECH_STOP"],"0"]	  
  ]), "switch"); 	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(130);
  }
};

Blockly.Blocks['TextToSpeech_speaking'] = {
  init: function () {    
  this.appendDummyInput()
	  .appendField(Blockly.Msg.TEXTTOSPEECH_SHOW)
      .appendField(Blockly.Msg.TEXTTOSPEECH_SPEAKING_SHOW);
	this.setInputsInline(true);
	this.setOutput(true, null); 
	this.setColour(130);
  }
};