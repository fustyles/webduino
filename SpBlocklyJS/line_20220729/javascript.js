Blockly.JavaScript['linenotify'] = function(block) {
  var token = Blockly.JavaScript.valueToCode(block, 'token_', Blockly.JavaScript.ORDER_ATOMIC);
  var type = block.getFieldValue('type_');
  var text = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC); 
  var packageId = Blockly.JavaScript.valueToCode(block, 'packageId_', Blockly.JavaScript.ORDER_ATOMIC);
  var stickerId = Blockly.JavaScript.valueToCode(block, 'stickerId_', Blockly.JavaScript.ORDER_ATOMIC);  
  var originalContentUrl = Blockly.JavaScript.valueToCode(block, 'originalContentUrl_', Blockly.JavaScript.ORDER_ATOMIC);
  var previewImageUrl = Blockly.JavaScript.valueToCode(block, 'previewImageUrl_', Blockly.JavaScript.ORDER_ATOMIC);    
  
  if (!text) text="' '";
  text = text.replace(/\"/g,"%22");
  packageId = (packageId+"").replace(/\"/g,"%22");
  stickerId = (stickerId+"").replace(/\"/g,"%22");
  originalContentUrl = (originalContentUrl+"").replace(/\"/g,"%22");
  previewImageUrl = (previewImageUrl+"").replace(/\"/g,"%22");
	
  var message = "";
  
  if (type=="text")
	message = "{'type':'"+type+"','text':"+text+"}";
  else if (type=="sticker")
	message = "{'type':'"+type+"','text':"+text+",'packageId':"+packageId+",'stickerId':"+stickerId+"}";
  else if (type=="image")
	message = "{'type':'"+type+"','text':"+text+",'originalContentUrl':"+previewImageUrl+",'previewImageUrl':"+originalContentUrl+"}";
  message = message.replace(/\\\\/g,"\\");
 
  var code = 'linenotify_push_message('+token+','+message+');\n';
  return code;
};