Blockly.JavaScript['controls_spreadsheet_function'] = function(block){
	var spreadsheeturl = Blockly.JavaScript.valueToCode(block,"spreadsheeturl",Blockly.JavaScript.ORDER_NONE)||"";
	var spreadsheetname = Blockly.JavaScript.valueToCode(block,"spreadsheetname",Blockly.JavaScript.ORDER_NONE)||"";
	var func = block.getFieldValue('func');
	var row = Blockly.JavaScript.valueToCode(block,"row",Blockly.JavaScript.ORDER_NONE)||"";
	var col = Blockly.JavaScript.valueToCode(block,"col",Blockly.JavaScript.ORDER_NONE)||"";
	var text = Blockly.JavaScript.valueToCode(block,"text",Blockly.JavaScript.ORDER_NONE)||"";
	
	var code = 'spreadsheet_insert("' + func + '", "", ' + row + ', ' + col + ', String(' + text + '), ' + spreadsheeturl + ', ' + spreadsheetname + ', ' +  '"https://script.google.com/macros/s/AKfycbxA3hhTlntwVTOcqngOC_iJL_zLmRwzcDbMYDs7FD8iinNsY9XZsMkD7AcXTIUbEc33EA/exec");\n';
	return code;
};

Blockly.JavaScript['spreadsheetsql_queryData'] = function (block) {
  var task_id = block.getFieldValue('task_id');	
  var spreadsheet_id = Blockly.JavaScript.valueToCode(block, 'spreadsheet_id', Blockly.JavaScript.ORDER_ATOMIC);  
  var spreadsheet_name = Blockly.JavaScript.valueToCode(block, 'spreadsheet_name', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = 'spreadsheetsql_settings('+spreadsheet_id+','+spreadsheet_name+', "'+task_id+'");\n';
  return code; 
};

Blockly.JavaScript['spreadsheetsql_executeSql'] = function (block) {
  var spreadsheet_sql = Blockly.JavaScript.valueToCode(block, 'spreadsheet_sql', Blockly.JavaScript.ORDER_ATOMIC);
  var task_id = block.getFieldValue('task_id');
  
  var code = 'spreadsheetsql_executeSql('+spreadsheet_sql+', "'+task_id+'");\n';
  return code; 
};

Blockly.JavaScript['spreadsheetsql_executeSql1'] = function(block){
	var option = block.getFieldValue('option');		
	var sql = Blockly.JavaScript.valueToCode(block,"sql",Blockly.JavaScript.ORDER_NONE);
	var cols = Blockly.JavaScript.valueToCode(block,"cols",Blockly.JavaScript.ORDER_NONE);
	var rows = Blockly.JavaScript.valueToCode(block,"rows",Blockly.JavaScript.ORDER_NONE);
	var cole = Blockly.JavaScript.valueToCode(block,"cole",Blockly.JavaScript.ORDER_NONE);
	var rowe = Blockly.JavaScript.valueToCode(block,"rowe",Blockly.JavaScript.ORDER_NONE);
	var comparision = Blockly.JavaScript.valueToCode(block,"comparision",Blockly.JavaScript.ORDER_NONE);
	var operator = block.getFieldValue('operator');
	var like = Blockly.JavaScript.valueToCode(block,"like",Blockly.JavaScript.ORDER_NONE);
    var task_id = block.getFieldValue('task_id');
  
	if (option=="sql")
		var code = 'spreadsheetsql_executeSql('+sql+', "'+task_id+'");\n';
	else if (option=="range")
		var code = 'spreadsheetsql_executeSql("select "+spreadsheet_colsToList(' + cols + ', ' + cole + ')+" limit '+(rowe-rows+1)+ ' offset '+ (rows-1)+'", "'+task_id+'");\n';
	else if (option=="comparision")
		var code = 'spreadsheetsql_executeSql("select * where '+String.fromCharCode(65 + (cols - 1))+' '+operator+' ' + comparision.replace(/"/g,"'") + '", "'+task_id+'");\n';
	else if (option=="like")
		var code = 'spreadsheetsql_executeSql("select * where '+String.fromCharCode(65 + (cols - 1))+' contains ' + like.replace(/"/g,"'") + '", "'+task_id+'");\n';
	return code;
};

Blockly.JavaScript['spreadsheetsql_getCellSQL'] = function (block) {
  var col = block.getFieldValue('col'); 
  var row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = '"select '+col+' limit 1 offset "+('+row+'-1)';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['spreadsheetsql_getData'] = function (block) {
  var task_id = block.getFieldValue('task_id');
  var code = 'spreadsheetsql_getData("'+task_id+'")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['spreadsheetsql_getCell'] = function (block) {
  var task_id = block.getFieldValue('task_id');
  var col = Blockly.JavaScript.valueToCode(block, 'col', Blockly.JavaScript.ORDER_ATOMIC);
  var row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_ATOMIC);	
  var code = 'spreadsheetsql_getCell('+col+', '+row+',"'+task_id+'")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['spreadsheetsql_getDataTable'] = function (block) {
  var task_id = block.getFieldValue('task_id');
  var id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);  
  var width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC); 
  var fontsize = Blockly.JavaScript.valueToCode(block, 'fontsize', Blockly.JavaScript.ORDER_ATOMIC);
  var left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_ATOMIC);
  var top = Blockly.JavaScript.valueToCode(block, 'top', Blockly.JavaScript.ORDER_ATOMIC);
  var column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = 'spreadsheetsql_getDataTable('+id+','+width+','+fontsize+','+left+','+top+','+column+',"'+task_id+'");\n';
  return code; 
};

Blockly.JavaScript['spreadsheetsql_clearDataTable'] = function (block) {
  var id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);  
  
  var code = 'spreadsheetsql_clearDataTable('+id+');\n';
  return code; 
};

Blockly.JavaScript['spreadsheetsql_getDataCount'] = function (block) {
  var task_id = block.getFieldValue('task_id');
  var value_count = block.getFieldValue('count'); 
  var code = 'spreadsheetsql_getDataCount("'+value_count+'","'+task_id+'")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['spreadsheetsql_clearData'] = function (block) {
  var task_id = block.getFieldValue('task_id');
  var code = 'spreadsheetsql_clearData("'+task_id+'");\n';
  return code; 
};

Blockly.JavaScript['spreadsheetsql_getdatafinish'] = function(block) {
  var task_id = block.getFieldValue('task_id');
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do_');
  Blockly.JavaScript.definitions_['spreadsheetsql_QueryResponse_'+task_id] = 'function spreadsheetsql_QueryResponse_'+task_id+'(res) {\n  spreadsheetsql_QueryResponse(res, "'+task_id+'");\n}\nwindow.spreadsheetsql_QueryResponse_'+task_id+' = spreadsheetsql_QueryResponse_'+task_id+';';
  Blockly.JavaScript.definitions_['spreadsheetsql_getDataFinish_'+task_id] = 'async function spreadsheetsql_getDataFinish_' + task_id + '(head_response, response) {\n' + statements_do + '\n};\nwindow.spreadsheetsql_getDataFinish_'+task_id+' = spreadsheetsql_getDataFinish_'+task_id+';';
  
  var code = '';
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

Blockly.JavaScript['spreadsheetsql_insertRow'] = function(block){
	var code = '"=Row()"';
	return [code,Blockly.JavaScript.ORDER_ATOMIC];
};
