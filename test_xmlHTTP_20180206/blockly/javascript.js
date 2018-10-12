Blockly.JavaScript['xmlHTTP_ResponseData'] = function(block) {
  var value_format_ = block.getFieldValue('value_format_'); 
  var value_url_ = Blockly.JavaScript.valueToCode(block, 'value_url_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'getResponse('+value_url_+',"'+value_format_+'")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
