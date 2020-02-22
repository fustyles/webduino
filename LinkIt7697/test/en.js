var language = window.location.search.toLowerCase();
console.log(window.location);
console.log(window.location.search);

if (language.indexOf("en")!=-1) { 
  Blockly.Msg["category_test"] = "TEST";
  Blockly.Msg["category_test_HUE"] = "280";  
  Blockly.Msg.OPEN_SHOW = "Open Link";
  Blockly.Msg.CLOSE_SHOW = "Close Link";
  Blockly.Msg.OPENID_SHOW = "ID";
  Blockly.Msg.CLOSEID_SHOW = "ID";
  Blockly.Msg.URL_SHOW = "Url";
  Blockly.Msg.WIDTH_SHOW = "Width";
  Blockly.Msg.LEFT_SHOW = "Left";
  Blockly.Msg.TOP_SHOW = "Top";
  Blockly.Msg.ZINDEX_SHOW = "Z-index";
} 
else if (language.indexOf("zh")!=-1) {
  Blockly.Msg["category_test"] = "測試";
  Blockly.Msg["category_test_HUE"] = "280";
  Blockly.Msg.OPEN_SHOW = "開啟連結";
  Blockly.Msg.CLOSE_SHOW = "關閉連結";
  Blockly.Msg.OPENID_SHOW = "代碼";
  Blockly.Msg.CLOSEID_SHOW = "代碼";
  Blockly.Msg.URL_SHOW = "來源網址";
  Blockly.Msg.WIDTH_SHOW = "寬度";
  Blockly.Msg.HEIGHT_SHOW = "高度";
  Blockly.Msg.LEFT_SHOW = "靠左距離";
  Blockly.Msg.TOP_SHOW = "靠上距離";
  Blockly.Msg.ZINDEX_SHOW = "層次";
}
  
