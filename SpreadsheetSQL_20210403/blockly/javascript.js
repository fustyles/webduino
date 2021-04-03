Blockly.JavaScript['spreadsheetsql_queryData'] = function (block) {
  var spreadsheet_id = Blockly.JavaScript.valueToCode(block, 'spreadsheet_id', Blockly.JavaScript.ORDER_ATOMIC);  
  var spreadsheet_name = Blockly.JavaScript.valueToCode(block, 'spreadsheet_name', Blockly.JavaScript.ORDER_ATOMIC);
  var spreadsheet_sql = Blockly.JavaScript.valueToCode(block, 'spreadsheet_sql', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = 'spreadsheetsql_queryData('+spreadsheet_id+','+spreadsheet_name+','+spreadsheet_sql+');\n';
  return code; 
};

Blockly.JavaScript['spreadsheetsql_getData'] = function (block) {
  var code = 'spreadsheetsql_getData()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['spreadsheetsql_clearData'] = function (block) {
  var code = 'spreadsheetsql_clearData();\n';
  return code; 
};