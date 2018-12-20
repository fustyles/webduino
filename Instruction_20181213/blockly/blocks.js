Blockly.Blocks['cmd1'] = {
  init: function() {
  this.appendValueInput("cmd1_0")
      .setCheck("String")
      .appendField("Get ");    
  this.setOutput(true, null);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(20);
  }
};

Blockly.Blocks['cmd2'] = {
  init: function() {
  this.appendValueInput("cmd2_0")
      .setCheck("String")
      .appendField("Get ");   
  this.appendDummyInput()
      .appendField("( ");      
  this.appendValueInput("cmd2_1")
      .setCheck(null);  
  this.appendDummyInput()
      .appendField(" )");      
  this.setOutput(true, null);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(20);
  }
};

Blockly.Blocks['cmd3'] = {
  init: function() {
  this.appendValueInput("cmd3_0")
      .setCheck("String")
      .appendField("Get ");
  this.appendDummyInput()
      .appendField("( ");    
  this.appendValueInput("cmd3_1")
      .setCheck(null);  
  this.appendDummyInput()
      .appendField(", ");       
  this.appendValueInput("cmd3_2")
      .setCheck(null);     
  this.appendDummyInput()
      .appendField(" )");      
  this.setOutput(true, null);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(20);
  }
};

Blockly.Blocks['cmd4'] = {
  init: function() {
  this.appendDummyInput()
      .appendField("Get ");
  this.appendValueInput("myVar")
      .setCheck(null); 
  this.appendDummyInput()
      .appendField(".");     
  this.appendValueInput("cmd4_0")
      .setCheck("String");
  this.appendDummyInput()
      .appendField("( ");    
  this.appendValueInput("cmd4_1")
      .setCheck(null);  
  this.appendDummyInput()
      .appendField(", ");       
  this.appendValueInput("cmd4_2")
      .setCheck(null);     
  this.appendDummyInput()
      .appendField(" )");      
  this.setOutput(true, null);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(20);
  }
};

Blockly.Blocks['cmd5'] = {
  init: function() {
  this.appendDummyInput()
      .appendField("Get ");
  this.appendValueInput("myVar")
      .setCheck(null);  
  this.appendDummyInput()
      .appendField(".");     
  this.appendValueInput("cmd5_0")
      .setCheck("String");
  this.appendDummyInput()
      .appendField("( ");    
  this.appendValueInput("cmd5_1")
      .setCheck(null);    
  this.appendDummyInput()
      .appendField(" )");      
  this.setOutput(true, null);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(20);
  }
};

Blockly.Blocks['cmd6'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        ["Math.E","Math.E"], 
        ["Math.LN2","Math.LN2"], 
        ["Math.LN10","Math.LN10"], 
        ["Math.LOG2E","Math.LOG2E"], 
        ["Math.LOG10E","Math.LOG10E"], 
        ["Math.PI","Math.PI"], 
        ["Math.SQRT1_2","Math.SQRT1_2"], 
        ["Math.SQRT2","Math.SQRT2"], 
        ["Math.abs","Math.abs"],
        ["Math.acos","Math.acos"],
        ["Math.acosh","Math.acosh"],
        ["Math.asin","Math.asin"],
        ["Math.asinh","Math.asinh"],
        ["Math.atan","Math.atan"],
        ["Math.atan2","Math.atan2"],
        ["Math.atanh","Math.atanh"],
        ["Math.cbrt","Math.cbrt"],
        ["Math.ceil","Math.ceil"],
        ["Math.clz32","Math.clz32"],
        ["Math.cos","Math.cos"],
        ["Math.cosh","Math.cosh"],
        ["Math.exp","Math.exp"],
        ["Math.expm1","Math.expm1"],
        ["Math.floor","Math.floor"],
        ["Math.fround","Math.fround"],
        ["Math.hypot","Math.hypot"],
        ["Math.imul","Math.imul"],
        ["Math.log","Math.log"],
        ["Math.log1p","Math.log1p"],
        ["Math.log10","Math.log10"],
        ["Math.log2","Math.log2"],
        ["Math.max","Math.max"],
        ["Math.min","Math.min"],
        ["Math.pow","Math.pow"],
        ["Math.random","Math.random"],
        ["Math.round","Math.round"],
        ["Math.sign","Math.sign"],
        ["Math.sin","Math.sin"],
        ["Math.sinh","Math.sinh"],
        ["Math.sqrt","Math.sqrt"],
        ["Math.tan","Math.tan"],
        ["Math.tanh","Math.tanh"],
        ["Math.trunc","Math.trunc"],  
        ["null","null"]
      ]), "cmd_math");    
  this.setOutput(true, null);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(50);
  }
};

Blockly.Blocks['cmd7'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        ["anchor","anchor"],
        ["big","big"],
        ["blink","blink"],
        ["bold","bold"],
        ["charAt","charAt"],
        ["charCodeAt","charCodeAt"],
        ["codePointAt","codePointAt"],
        ["concat","concat"],
        ["EndsWith","EndsWith"],
        ["includes","includes"],
        ["fixed","fixed"],
        ["fontcolor","fontcolor"],
        ["fontsize","fontsize"],
        ["hasOwnProperty","hasOwnProperty"],
        ["indexOf","indexOf"],
        ["isPrototypeOf","isPrototypeOf"],
        ["italics","italics"],
        ["lastIndexOf","lastIndexOf"],
        ["link","link"],
        ["localeCompare","localeCompare"],
        ["match","match"],
        ["normalize","normalize"],
        ["propertyIsEnumerable","propertyIsEnumerable"],
        ["repeat","repeat"],
        ["replace","replace"],
        ["search","search"],
        ["slice","slice"],
        ["small","small"],
        ["split","split"],
        ["StartsWith","StartsWith"],
        ["strike","strike"],
        ["sub","sub"],
        ["substr","substr"],
        ["substring","substring"],
        ["sup","sup"],
        ["toLocaleLowerCase","toLocaleLowerCase"],
        ["toLocaleString","toLocaleString"],
        ["toLocaleUpperCase","toLocaleUpperCase"],
        ["toLowerCase","toLowerCase"],
        ["toString","toString"],
        ["length","length"],    
        ["null","null"]
      ]), "cmd_string");    
  this.setOutput(true, null);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(50);
  }
};

Blockly.Blocks['cmd8'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        ["concat","concat"],
        ["entries","entries"],
        ["every","every"],
        ["fill","fill"],
        ["filter","filter"],
        ["findIndex","findIndex"],
        ["forEach","forEach"],
        ["hasOwnProperty","hasOwnProperty"],
        ["indexOf","indexOf"],
        ["isPrototypeOf","isPrototypeOf"],
        ["join","join"],
        ["keys","keys"],
        ["lastIndexOf","lastIndexOf"],
        ["map","map"],
        ["pop","pop"],
        ["propertyIsEnumerable","propertyIsEnumerable"],
        ["push","push"],
        ["reduce","reduce"],
        ["reduceRight","reduceRight"],
        ["reverse","reverse"],
        ["shift","shift"],
        ["slice","slice"],
        ["some","some"],
        ["sort","sort"],
        ["splice","splice"],
        ["toLocaleString","toLocaleString"],
        ["toString","toString"],
        ["unshift","unshift"],
        ["valueOf","valueOf"],
        ["values","values"],
        ["null","null"]
      ]), "cmd_array");    
  this.setOutput(true, null);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(50);
  }
};

Blockly.Blocks['cmd9'] = {
  init: function() {
  this.appendDummyInput()
      .appendField("Get ");
  this.appendValueInput("myVar")
      .setCheck(null);  
  this.appendDummyInput()
      .appendField(".");     
  this.appendValueInput("cmd9_0")
      .setCheck("String");   
  this.setOutput(true, null);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(20);
  }
};

Blockly.Blocks['cmd10'] = {
  init: function() {
  this.appendDummyInput()
      .appendField("Get  Array");
  this.appendValueInput("myVar")
      .setCheck(null);  
  this.appendDummyInput()
      .appendField("[");     
  this.appendValueInput("cmd10_0")
      .setCheck(null); 
  this.appendDummyInput()
      .appendField("]");      
  this.setOutput(true, null);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(20);
  }
};

Blockly.Blocks['cmd11'] = {
  init: function() {
  this.appendDummyInput()
      .appendField("Get ");
  this.appendValueInput("myVar")
      .setCheck(null); 
  this.appendDummyInput()
      .appendField(".");     
  this.appendValueInput("cmd11_0")
      .setCheck("String");
  this.appendDummyInput()
      .appendField("( ");    
  this.appendValueInput("cmd11_1")
      .setCheck(null);  
  this.appendDummyInput()
      .appendField(", ");       
  this.appendValueInput("cmd11_2")
      .setCheck(null);     
  this.appendDummyInput()
      .appendField(", ");       
  this.appendValueInput("cmd11_3")
      .setCheck(null);        
  this.appendDummyInput()
      .appendField(" )");      
  this.setOutput(true, null);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(20);
  }
};

Blockly.Blocks['cmd12'] = {
  init: function() {
  this.appendDummyInput()
      .appendField("Get  Array");
  this.appendValueInput("myVar")
      .setCheck(null);  
  this.appendDummyInput()
      .appendField("[");     
  this.appendValueInput("cmd12_0")
      .setCheck(null); 
  this.appendDummyInput()
      .appendField("] [");     
  this.appendValueInput("cmd12_1")
      .setCheck(null); 
  this.appendDummyInput()
      .appendField("]"); 
  this.setOutput(true, null);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(20);
  }
};

Blockly.Blocks['cmd13'] = {
  init: function() {
  this.appendDummyInput()
      .appendField("Declare Variable");
  this.appendValueInput("myVar")
      .setCheck(null);    
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(20);
  }
};

Blockly.Blocks['cmd14'] = {
  init: function() {
  this.appendDummyInput()
      .appendField("Set Variable");
  this.appendValueInput("myVar")
      .setCheck(null);   
  this.appendDummyInput()
      .appendField(" = ");    
  this.appendValueInput("variableValue")
      .setCheck(null);      
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(20);
  }
};

Blockly.Blocks['cmd15'] = {
  init: function() {
  this.appendDummyInput()
      .appendField("Instruction"); 
  this.appendValueInput("Instruction")
      .setCheck(null);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(20);
  }
};
