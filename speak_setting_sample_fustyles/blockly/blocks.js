Blockly.Blocks['speak_setting_sample_fustyles'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_SPEAK_LANG)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_SPEAK_TW, "cmn-Hant-TW"],
        [Blockly.Msg.WEBDUINO_SPEAK_US, "en-US"],
        [Blockly.Msg.WEBDUINO_SPEAK_JP, "ja-JP"],
        [Blockly.Msg.WEBDUINO_SPEAK_KR, "ko-KR"],
        [Blockly.Msg.WEBDUINO_SPEAK_ES, "es-ES"],
        [Blockly.Msg.WEBDUINO_SPEAK_FR, "fr-FR"],
        [Blockly.Msg.WEBDUINO_SPEAK_IT, "it-IT"],
        [Blockly.Msg.WEBDUINO_SPEAK_yue_Hant_HK,"yue-Hant-HK"],
        [Blockly.Msg.WEBDUINO_SPEAK_cmn_Hans_HK,"cmn-Hans-HK"],
        [Blockly.Msg.WEBDUINO_SPEAK_cmn_Hans_CN,"cmn-Hans-CN"], 
        [Blockly.Msg.WEBDUINO_SPEAK_vi_VN,"vi-VN"],      
        [Blockly.Msg.WEBDUINO_SPEAK_af_ZA,"af-ZA"],
        [Blockly.Msg.WEBDUINO_SPEAK_am_ET,"am-ET"],
        [Blockly.Msg.WEBDUINO_SPEAK_hy_AM,"hy-AM"],
        [Blockly.Msg.WEBDUINO_SPEAK_az_AZ,"az-AZ"],
        [Blockly.Msg.WEBDUINO_SPEAK_id_ID,"id-ID"],
        [Blockly.Msg.WEBDUINO_SPEAK_ms_MY,"ms-MY"],
        [Blockly.Msg.WEBDUINO_SPEAK_bn_BD,"bn-BD"],
        [Blockly.Msg.WEBDUINO_SPEAK_bn_IN,"bn-IN"],
        [Blockly.Msg.WEBDUINO_SPEAK_ca_ES,"ca-ES"],
        [Blockly.Msg.WEBDUINO_SPEAK_cs_CZ,"cs-CZ"],
        [Blockly.Msg.WEBDUINO_SPEAK_da_DK,"da-DK"],
        [Blockly.Msg.WEBDUINO_SPEAK_de_DE,"de-DE"],
        [Blockly.Msg.WEBDUINO_SPEAK_en_AU,"en-AU"],
        [Blockly.Msg.WEBDUINO_SPEAK_en_CA,"en-CA"],
        [Blockly.Msg.WEBDUINO_SPEAK_en_GH,"en-GH"],
        [Blockly.Msg.WEBDUINO_SPEAK_en_GB,"en-GB"],
        [Blockly.Msg.WEBDUINO_SPEAK_en_IN,"en-IN"],
        [Blockly.Msg.WEBDUINO_SPEAK_en_IE,"en-IE"],
        [Blockly.Msg.WEBDUINO_SPEAK_en_KE,"en-KE"],
        [Blockly.Msg.WEBDUINO_SPEAK_en_NZ,"en-NZ"],
        [Blockly.Msg.WEBDUINO_SPEAK_en_NG,"en-NG"],
        [Blockly.Msg.WEBDUINO_SPEAK_en_PH,"en-PH"],
        [Blockly.Msg.WEBDUINO_SPEAK_en_ZA,"en-ZA"],
        [Blockly.Msg.WEBDUINO_SPEAK_en_TZ,"en-TZ"],
        [Blockly.Msg.WEBDUINO_SPEAK_es_AR,"es-AR"],
        [Blockly.Msg.WEBDUINO_SPEAK_es_BO,"es-BO"],
        [Blockly.Msg.WEBDUINO_SPEAK_es_CL,"es-CL"],
        [Blockly.Msg.WEBDUINO_SPEAK_es_CO,"es-CO"],
        [Blockly.Msg.WEBDUINO_SPEAK_es_CR,"es-CR"],
        [Blockly.Msg.WEBDUINO_SPEAK_es_EC,"es-EC"],
        [Blockly.Msg.WEBDUINO_SPEAK_es_SV,"es-SV"],
        [Blockly.Msg.WEBDUINO_SPEAK_es_US,"es-US"],
        [Blockly.Msg.WEBDUINO_SPEAK_es_GT,"es-GT"],
        [Blockly.Msg.WEBDUINO_SPEAK_es_HN,"es-HN"],
        [Blockly.Msg.WEBDUINO_SPEAK_es_MX,"es-MX"],
        [Blockly.Msg.WEBDUINO_SPEAK_es_NI,"es-NI"],
        [Blockly.Msg.WEBDUINO_SPEAK_es_PA,"es-PA"],
        [Blockly.Msg.WEBDUINO_SPEAK_es_PY,"es-PY"],
        [Blockly.Msg.WEBDUINO_SPEAK_es_PE,"es-PE"],
        [Blockly.Msg.WEBDUINO_SPEAK_es_PR,"es-PR"],
        [Blockly.Msg.WEBDUINO_SPEAK_es_DO,"es-DO"],
        [Blockly.Msg.WEBDUINO_SPEAK_es_UY,"es-UY"],
        [Blockly.Msg.WEBDUINO_SPEAK_es_VE,"es-VE"],
        [Blockly.Msg.WEBDUINO_SPEAK_eu_ES,"eu-ES"],
        [Blockly.Msg.WEBDUINO_SPEAK_fil_PH,"fil-PH"],
        [Blockly.Msg.WEBDUINO_SPEAK_fr_CA,"fr-CA"],
        [Blockly.Msg.WEBDUINO_SPEAK_gl_ES,"gl-ES"],
        [Blockly.Msg.WEBDUINO_SPEAK_ka_GE,"ka-GE"],
        [Blockly.Msg.WEBDUINO_SPEAK_gu_IN,"gu-IN"],
        [Blockly.Msg.WEBDUINO_SPEAK_hr_HR,"hr-HR"],
        [Blockly.Msg.WEBDUINO_SPEAK_zu_ZA,"zu-ZA"],
        [Blockly.Msg.WEBDUINO_SPEAK_is_IS,"is-IS"],
        [Blockly.Msg.WEBDUINO_SPEAK_jv_ID,"jv-ID"],
        [Blockly.Msg.WEBDUINO_SPEAK_kn_IN,"kn-IN"],
        [Blockly.Msg.WEBDUINO_SPEAK_km_KH,"km-KH"],
        [Blockly.Msg.WEBDUINO_SPEAK_lo_LA,"lo-LA"],
        [Blockly.Msg.WEBDUINO_SPEAK_lv_LV,"lv-LV"],
        [Blockly.Msg.WEBDUINO_SPEAK_lt_LT,"lt-LT"],
        [Blockly.Msg.WEBDUINO_SPEAK_hu_HU,"hu-HU"],
        [Blockly.Msg.WEBDUINO_SPEAK_ml_IN,"ml-IN"],
        [Blockly.Msg.WEBDUINO_SPEAK_mr_IN,"mr-IN"],
        [Blockly.Msg.WEBDUINO_SPEAK_nl_NL,"nl-NL"],
        [Blockly.Msg.WEBDUINO_SPEAK_ne_NP,"ne-NP"],
        [Blockly.Msg.WEBDUINO_SPEAK_nb_NO,"nb-NO"],
        [Blockly.Msg.WEBDUINO_SPEAK_pl_PL,"pl-PL"],
        [Blockly.Msg.WEBDUINO_SPEAK_pt_BR,"pt-BR"],
        [Blockly.Msg.WEBDUINO_SPEAK_pt_PT,"pt-PT"],
        [Blockly.Msg.WEBDUINO_SPEAK_ro_RO,"ro-RO"],
        [Blockly.Msg.WEBDUINO_SPEAK_si_LK,"si-LK"],
        [Blockly.Msg.WEBDUINO_SPEAK_sk_SK,"sk-SK"],
        [Blockly.Msg.WEBDUINO_SPEAK_sl_SI,"sl-SI"],
        [Blockly.Msg.WEBDUINO_SPEAK_su_ID,"su-ID"],
        [Blockly.Msg.WEBDUINO_SPEAK_sw_TZ,"sw-TZ"],
        [Blockly.Msg.WEBDUINO_SPEAK_sw_KE,"sw-KE"],
        [Blockly.Msg.WEBDUINO_SPEAK_fi_FI,"fi-FI"],
        [Blockly.Msg.WEBDUINO_SPEAK_sv_SE,"sv-SE"],
        [Blockly.Msg.WEBDUINO_SPEAK_ta_IN,"ta-IN"],
        [Blockly.Msg.WEBDUINO_SPEAK_ta_SG,"ta-SG"],
        [Blockly.Msg.WEBDUINO_SPEAK_ta_LK,"ta-LK"],
        [Blockly.Msg.WEBDUINO_SPEAK_ta_MY,"ta-MY"],
        [Blockly.Msg.WEBDUINO_SPEAK_te_IN,"te-IN"],
        [Blockly.Msg.WEBDUINO_SPEAK_tr_TR,"tr-TR"],
        [Blockly.Msg.WEBDUINO_SPEAK_ur_PK,"ur-PK"],
        [Blockly.Msg.WEBDUINO_SPEAK_ur_IN,"ur-IN"],
        [Blockly.Msg.WEBDUINO_SPEAK_el_GR,"el-GR"],
        [Blockly.Msg.WEBDUINO_SPEAK_bg_BG,"bg-BG"],
        [Blockly.Msg.WEBDUINO_SPEAK_ru_RU,"ru-RU"],
        [Blockly.Msg.WEBDUINO_SPEAK_sr_RS,"sr-RS"],
        [Blockly.Msg.WEBDUINO_SPEAK_uk_UA,"uk-UA"],
        [Blockly.Msg.WEBDUINO_SPEAK_he_IL,"he-IL"],
        [Blockly.Msg.WEBDUINO_SPEAK_ar_IL,"ar-IL"],
        [Blockly.Msg.WEBDUINO_SPEAK_ar_JO,"ar-JO"],
        [Blockly.Msg.WEBDUINO_SPEAK_ar_AE,"ar-AE"],
        [Blockly.Msg.WEBDUINO_SPEAK_ar_BH,"ar-BH"],
        [Blockly.Msg.WEBDUINO_SPEAK_ar_DZ,"ar-DZ"],
        [Blockly.Msg.WEBDUINO_SPEAK_ar_SA,"ar-SA"],
        [Blockly.Msg.WEBDUINO_SPEAK_ar_IQ,"ar-IQ"],
        [Blockly.Msg.WEBDUINO_SPEAK_ar_KW,"ar-KW"],
        [Blockly.Msg.WEBDUINO_SPEAK_ar_MA,"ar-MA"],
        [Blockly.Msg.WEBDUINO_SPEAK_ar_TN,"ar-TN"],
        [Blockly.Msg.WEBDUINO_SPEAK_ar_OM,"ar-OM"],
        [Blockly.Msg.WEBDUINO_SPEAK_ar_PS,"ar-PS"],
        [Blockly.Msg.WEBDUINO_SPEAK_ar_QA,"ar-QA"],
        [Blockly.Msg.WEBDUINO_SPEAK_ar_LB,"ar-LB"],
        [Blockly.Msg.WEBDUINO_SPEAK_ar_EG,"ar-EG"],
        [Blockly.Msg.WEBDUINO_SPEAK_fa_IR,"fa-IR"],
        [Blockly.Msg.WEBDUINO_SPEAK_hi_IN,"hi-IN"],
        [Blockly.Msg.WEBDUINO_SPEAK_th_TH,"th-TH"]    
      ]), "lang_")
      .appendField(Blockly.Msg.WEBDUINO_SPEAK_VOLUME)
      .appendField(new Blockly.FieldDropdown([
        ["1", "1"],
        ["0.9", "0.9"],
        ["0.8", "0.8"],
        ["0.7", "0.7"],
        ["0.6", "0.6"],
        ["0.5", "0.5"],
        ["0.4", "0.4"],
        ["0.3", "0.3"],
        ["0.2", "0.3"],
        ["0.1", "0.1"],
        ["0", "0"]
      ]), "volume_")
      .appendField(Blockly.Msg.WEBDUINO_SPEAK_PITCH)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_SPEAK_P20, "2"],
        [Blockly.Msg.WEBDUINO_SPEAK_P15, "1.5"],
        [Blockly.Msg.WEBDUINO_SPEAK_P10, "1"],
        [Blockly.Msg.WEBDUINO_SPEAK_P05, "0.5"],
        [Blockly.Msg.WEBDUINO_SPEAK_P01, "0.1"]
      ]), "pitch_")
      .appendField(Blockly.Msg.WEBDUINO_SPEAK_RATE)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_SPEAK_R20, "2"],
        [Blockly.Msg.WEBDUINO_SPEAK_R15, "1.5"],
        [Blockly.Msg.WEBDUINO_SPEAK_R10, "1"],
        [Blockly.Msg.WEBDUINO_SPEAK_R07, "0.7"],
        [Blockly.Msg.WEBDUINO_SPEAK_R05, "0.5"]
      ]), "rate_");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip('');
    this.setColour(270);
    this.setHelpUrl(mainUrl + 'useful/component/buzzer-clock.html' + utmUrl); 
  }
};

Blockly.Blocks['speak_setting_sample1_fustyles'] = {
  init: function () {
    this.appendValueInput("value_lang_")
      .setCheck("String")
      .appendField(Blockly.Msg.WEBDUINO_SPEAK_LANG)
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_SPEAK_VOLUME)
      .appendField(new Blockly.FieldDropdown([
        ["1", "1"],
        ["0.9", "0.9"],
        ["0.8", "0.8"],
        ["0.7", "0.7"],
        ["0.6", "0.6"],
        ["0.5", "0.5"],
        ["0.4", "0.4"],
        ["0.3", "0.3"],
        ["0.2", "0.3"],
        ["0.1", "0.1"],
        ["0", "0"]
      ]), "volume_")
      .appendField(Blockly.Msg.WEBDUINO_SPEAK_PITCH)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_SPEAK_P20, "2"],
        [Blockly.Msg.WEBDUINO_SPEAK_P15, "1.5"],
        [Blockly.Msg.WEBDUINO_SPEAK_P10, "1"],
        [Blockly.Msg.WEBDUINO_SPEAK_P05, "0.5"],
        [Blockly.Msg.WEBDUINO_SPEAK_P01, "0.1"]
      ]), "pitch_")
      .appendField(Blockly.Msg.WEBDUINO_SPEAK_RATE)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_SPEAK_R20, "2"],
        [Blockly.Msg.WEBDUINO_SPEAK_R15, "1.5"],
        [Blockly.Msg.WEBDUINO_SPEAK_R10, "1"],
        [Blockly.Msg.WEBDUINO_SPEAK_R07, "0.7"],
        [Blockly.Msg.WEBDUINO_SPEAK_R05, "0.5"]
      ]), "rate_");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip('');
    this.setColour(270);
    this.setHelpUrl(mainUrl + 'useful/component/buzzer-clock.html' + utmUrl); 
  }
};
