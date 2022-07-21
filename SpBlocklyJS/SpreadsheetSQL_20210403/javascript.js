Blockly.JavaScript['spreadsheetsql_queryData'] = function (block) {
  var spreadsheet_id = Blockly.JavaScript.valueToCode(block, 'spreadsheet_id', Blockly.JavaScript.ORDER_ATOMIC);  
  var spreadsheet_name = Blockly.JavaScript.valueToCode(block, 'spreadsheet_name', Blockly.JavaScript.ORDER_ATOMIC);
  var spreadsheet_sql = Blockly.JavaScript.valueToCode(block, 'spreadsheet_sql', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = 'spreadsheetsql_settings('+spreadsheet_id+','+spreadsheet_name+');\n';
  return code; 
};

Blockly.JavaScript['spreadsheetsql_executeSql'] = function (block) {
  var spreadsheet_id = Blockly.JavaScript.valueToCode(block, 'spreadsheet_id', Blockly.JavaScript.ORDER_ATOMIC);  
  var spreadsheet_name = Blockly.JavaScript.valueToCode(block, 'spreadsheet_name', Blockly.JavaScript.ORDER_ATOMIC);
  var spreadsheet_sql = Blockly.JavaScript.valueToCode(block, 'spreadsheet_sql', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = 'spreadsheetsql_executeSql('+spreadsheet_sql+');\n';
  return code; 
};

Blockly.JavaScript['spreadsheetsql_getData'] = function (block) {
  var code = 'spreadsheetsql_getData()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['spreadsheetsql_getDataCount'] = function (block) {
  var value_count = block.getFieldValue('count'); 
  var code = 'spreadsheetsql_getDataCount("'+value_count+'")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['spreadsheetsql_clearData'] = function (block) {
  var code = 'spreadsheetsql_clearData();\n';
  return code; 
};

Blockly.JavaScript['spreadsheetsql_getdatafinish'] = function(block) { 
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'spreadsheetsql_getDataFinish = function() {\n' + statements_do + '\n};\n';
  return code;
};