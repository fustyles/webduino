Blockly.JavaScript['gemini_text_initial'] = function (block) {
  var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC); 
  var model = block.getFieldValue('model');
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');

  var code = 'gemini_text_do('+key+', "'+model+'", "'+statements_do.replace(/\n/g,"")+'");\n';
  console.log(code);
  return code; 
};

Blockly.JavaScript['gemini_text_request'] = function (block) {
  var words = Blockly.JavaScript.valueToCode(block, 'words', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  
  var code = 'bemini_text('+words+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
