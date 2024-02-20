Blockly.JavaScript['gemini_text_initial'] = function (block) {
  var token = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC); 
  var model = block.getFieldValue('model');
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');

  var code = 'gemini_text_initial();\ngemini_text_do('+token+', "'+model+'", "'+statements_do.replace(/\n/g,"")+'");\n';
  return code; 
};

Blockly.JavaScript['gemini_text_request'] = function (block) {
  var words = Blockly.JavaScript.valueToCode(block, 'words', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  
  var code = 'bemini_text('+words+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
