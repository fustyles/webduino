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

Blockly.JavaScript['spreadsheetsql_getCellSQL'] = function (block) {
  var col = block.getFieldValue('col'); 
  var row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = '"select '+col+' limit 1 offset "+'+(row-1);
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['spreadsheetsql_getData'] = function (block) {
  var code = 'spreadsheetsql_getData()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['spreadsheetsql_getCell'] = function (block) {
  var col = Blockly.JavaScript.valueToCode(block, 'col', Blockly.JavaScript.ORDER_ATOMIC);
  var row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_ATOMIC);	
  var code = 'spreadsheetsql_getCell('+col+', '+row+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['spreadsheetsql_getDataTable'] = function (block) {
  var id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);  
  var width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC); 
  var fontsize = Blockly.JavaScript.valueToCode(block, 'fontsize', Blockly.JavaScript.ORDER_ATOMIC);
  var left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_ATOMIC);
  var top = Blockly.JavaScript.valueToCode(block, 'top', Blockly.JavaScript.ORDER_ATOMIC);
  var column = block.getFieldValue('column'); 
  
  var code = 'spreadsheetsql_getDataTable('+id+','+width+','+fontsize+','+left+','+top+','+column+');\n';
  return code; 
};

Blockly.JavaScript['spreadsheetsql_clearDataTable'] = function (block) {
  var id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);  
  
  var code = 'spreadsheetsql_clearDataTable('+id+');\n';
  return code; 
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


Blockly.JavaScript['controls_spreadsheet'] = function(block){
	var spreadsheeturl = Blockly.JavaScript.valueToCode(block,"spreadsheeturl",Blockly.JavaScript.ORDER_NONE)||"";
	var spreadsheetname = Blockly.JavaScript.valueToCode(block,"spreadsheetname",Blockly.JavaScript.ORDER_NONE)||"";	
	var func = block.getFieldValue('func');
	var data = Blockly.JavaScript.valueToCode(block,"VALUE",Blockly.JavaScript.ORDER_NONE)||"";
	data = 'String('+data+')+"|"';
	for (var i=0;i<26;i++) {
		var text = Blockly.JavaScript.valueToCode(block,String.fromCharCode(i+65),Blockly.JavaScript.ORDER_NONE);
		if (block.getInput(String.fromCharCode(i+65)))
			data += '+String('+text+')+"|"';
	}
	data = data.substring(0, data.length-4);
			
	var code = 'spreadsheet_insert("' + func + '", ' + data + ', 0, 0, "", ' + spreadsheeturl + ', ' + spreadsheetname + ', ' +  '"https://script.google.com/macros/s/AKfycbxA3hhTlntwVTOcqngOC_iJL_zLmRwzcDbMYDs7FD8iinNsY9XZsMkD7AcXTIUbEc33EA/exec");\n';
	return code;
};

Blockly.JavaScript['controls_spreadsheet_datetime'] = function(block){
	var datetime = block.getFieldValue('datetime');	
	var code = '"'+datetime+'"';
	return [code,Blockly.JavaScript.ORDER_ATOMIC];
};