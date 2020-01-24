Blockly.Blocks['faceapi_face'] = {
  init: function() {
  this.appendValueInput("face_")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPI_FACE_SHOW);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPI_PROPERTY_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["age","age"],
		["gender","gender"],
		["genderProbability","genderProbability"],
		["emotion","emotion"],
		["neutral","neutral"],
		["happy","happy"],
		["sad","sad"],
		["angry","angry"],
		["fearful","fearful"],
		["disgusted","disgusted"],
		["surprised","surprised"],
		["boxX","boxX"],
		["boxY","boxY"],
		["boxWidth","boxWidth"],
		["boxHeight","boxHeight"]
  ]), "property_");  	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['faceapi_video'] = {
  init: function() {
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPI_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPI_HEIGHT_SHOW);	
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPI_MIRRORIMAGE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["show","block"],
		["hide","none"]	   
  ]), "showvideo_");   
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPI_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["show","block"],
		["hide","none"]	  
  ]), "result_"); 	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};