Blockly.Blocks['cocossd_video'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_SHOW); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "result_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_FRAME_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	  
  ]), "frame_");	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_MIRRORIMAGE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	  
  ]), "mirrorimage_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_OPACITY_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["1","1"],
		["0.9","0.9"],
		["0.8","0.8"],
		["0.7","0.7"],
		["0.6","0.6"],	  
		["0.5","0.5"],
		["0.4","0.4"],
		["0.3","0.3"],
		["0.2","0.2"],
		["0.1","0.1"],	
		["0","0"]	   
  ]), "opacity_");	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['cocossd_list'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_OBJECT_ARRAY_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.COCOSSD_OBJECT_ALL_SHOW,""],
		["airplane","airplane"],
		["apple","apple"],
		["backpack","backpack"],
		["banana","banana"],
		["baseball bat","baseball bat"],
		["baseball glove","baseball glove"],
		["bear","bear"],
		["bed","bed"],
		["bench","bench"],
		["bicycle","bicycle"],
		["bird","bird"],
		["boat","boat"],
		["book","book"],
		["bottle","bottle"],
		["bowl","bowl"],
		["broccoli","broccoli"],
		["bus","bus"],
		["cake","cake"],
		["car","car"],
		["carrot","carrot"],
		["cat","cat"],
		["cell phone","cell phone"],
		["chair","chair"],
		["clock","clock"],
		["couch","couch"],
		["cow","cow"],
		["cup","cup"],
		["dining table","dining table"],
		["dog","dog"],
		["donut","donut"],
		["elephant","elephant"],
		["fire hydrant","fire hydrant"],
		["fork","fork"],
		["frisbee","frisbee"],
		["giraffe","giraffe"],
		["hair drier","hair drier"],
		["handbag","handbag"],
		["horse","horse"],
		["hot dog","hot dog"],
		["keyboard","keyboard"],
		["kite","kite"],
		["knife","knife"],
		["laptop","laptop"],
		["microwave","microwave"],
		["motorcycle","motorcycle"],
		["mouse","mouse"],
		["orange","orange"],
		["oven","oven"],
		["parking meter","parking meter"],
		["person","person"],
		["pizza","pizza"],
		["potted plant","potted plant"],
		["refrigerator","refrigerator"],
		["remote","remote"],
		["sandwich","sandwich"],
		["scissors","scissors"],
		["sheep","sheep"],
		["sink","sink"],
		["skateboard","skateboard"],
		["skis","skis"],
		["snowboard","snowboard"],
		["spoon","spoon"],
		["sports ball","sports ball"],
		["stop sign","stop sign"],
		["suitcase","suitcase"],
		["surfboard","surfboard"],
		["teddy bear","teddy bear"],
		["tennis racket","tennis racket"],
		["tie","tie"],
		["toaster","toaster"],
		["toilet","toilet"],
		["toothbrush","toothbrush"],
		["traffic light","traffic light"],
		["train","train"],
		["truck","truck"],
		["tv","tv"],
		["umbrella","umbrella"],
		["vase","vase"],
		["wine glass","wine glass"],
		["zebra","zebra"]
  ]), "object_");     
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['cocossd_object'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_OBJECT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.COCOSSD_OBJECT_ALL_SHOW,""],	  
		["airplane","airplane"],
		["apple","apple"],
		["backpack","backpack"],
		["banana","banana"],
		["baseball bat","baseball bat"],
		["baseball glove","baseball glove"],
		["bear","bear"],
		["bed","bed"],
		["bench","bench"],
		["bicycle","bicycle"],
		["bird","bird"],
		["boat","boat"],
		["book","book"],
		["bottle","bottle"],
		["bowl","bowl"],
		["broccoli","broccoli"],
		["bus","bus"],
		["cake","cake"],
		["car","car"],
		["carrot","carrot"],
		["cat","cat"],
		["cell phone","cell phone"],
		["chair","chair"],
		["clock","clock"],
		["couch","couch"],
		["cow","cow"],
		["cup","cup"],
		["dining table","dining table"],
		["dog","dog"],
		["donut","donut"],
		["elephant","elephant"],
		["fire hydrant","fire hydrant"],
		["fork","fork"],
		["frisbee","frisbee"],
		["giraffe","giraffe"],
		["hair drier","hair drier"],
		["handbag","handbag"],
		["horse","horse"],
		["hot dog","hot dog"],
		["keyboard","keyboard"],
		["kite","kite"],
		["knife","knife"],
		["laptop","laptop"],
		["microwave","microwave"],
		["motorcycle","motorcycle"],
		["mouse","mouse"],
		["orange","orange"],
		["oven","oven"],
		["parking meter","parking meter"],
		["person","person"],
		["pizza","pizza"],
		["potted plant","potted plant"],
		["refrigerator","refrigerator"],
		["remote","remote"],
		["sandwich","sandwich"],
		["scissors","scissors"],
		["sheep","sheep"],
		["sink","sink"],
		["skateboard","skateboard"],
		["skis","skis"],
		["snowboard","snowboard"],
		["spoon","spoon"],
		["sports ball","sports ball"],
		["stop sign","stop sign"],
		["suitcase","suitcase"],
		["surfboard","surfboard"],
		["teddy bear","teddy bear"],
		["tennis racket","tennis racket"],
		["tie","tie"],
		["toaster","toaster"],
		["toilet","toilet"],
		["toothbrush","toothbrush"],
		["traffic light","traffic light"],
		["train","train"],
		["truck","truck"],
		["tv","tv"],
		["umbrella","umbrella"],
		["vase","vase"],
		["wine glass","wine glass"],
		["zebra","zebra"]
  ]), "object_");    
  this.appendValueInput("index_")
      .setCheck("Number")
      .appendField(Blockly.Msg.COCOSSD_INDEX_SHOW);
  this.appendDummyInput()
      .appendField(Blockly.Msg.COCOSSD_DATA_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.COCOSSD_OBJECT_ALL_SHOW,""],	      
		[Blockly.Msg.COCOSSD_DATA_CLASS_SHOW,"class"],
		[Blockly.Msg.COCOSSD_DATA_SCORE_SHOW,"score"],
		["X","x"],
		["Y","y"],
		[Blockly.Msg.COCOSSD_DATA_UPPERX_SHOW,"upperx"],
		[Blockly.Msg.COCOSSD_DATA_UPPERY_SHOW,"uppery"],	  
		[Blockly.Msg.COCOSSD_DATA_MIDDLEX_SHOW,"middlex"],
		[Blockly.Msg.COCOSSD_DATA_MIDDLEY_SHOW,"middley"],
		[Blockly.Msg.COCOSSD_DATA_BOTTOMX_SHOW,"bottomx"],
		[Blockly.Msg.COCOSSD_DATA_BOTTOMY_SHOW,"bottomy"],	  
		[Blockly.Msg.COCOSSD_WIDTH_SHOW,"width"],
		[Blockly.Msg.COCOSSD_HEIGHT_SHOW,"height"]
  ]), "data_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['cocossd_object_number'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_OBJECT_NUMBER_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.COCOSSD_OBJECT_ALL_SHOW,""],
		["airplane","airplane"],
		["apple","apple"],
		["backpack","backpack"],
		["banana","banana"],
		["baseball bat","baseball bat"],
		["baseball glove","baseball glove"],
		["bear","bear"],
		["bed","bed"],
		["bench","bench"],
		["bicycle","bicycle"],
		["bird","bird"],
		["boat","boat"],
		["book","book"],
		["bottle","bottle"],
		["bowl","bowl"],
		["broccoli","broccoli"],
		["bus","bus"],
		["cake","cake"],
		["car","car"],
		["carrot","carrot"],
		["cat","cat"],
		["cell phone","cell phone"],
		["chair","chair"],
		["clock","clock"],
		["couch","couch"],
		["cow","cow"],
		["cup","cup"],
		["dining table","dining table"],
		["dog","dog"],
		["donut","donut"],
		["elephant","elephant"],
		["fire hydrant","fire hydrant"],
		["fork","fork"],
		["frisbee","frisbee"],
		["giraffe","giraffe"],
		["hair drier","hair drier"],
		["handbag","handbag"],
		["horse","horse"],
		["hot dog","hot dog"],
		["keyboard","keyboard"],
		["kite","kite"],
		["knife","knife"],
		["laptop","laptop"],
		["microwave","microwave"],
		["motorcycle","motorcycle"],
		["mouse","mouse"],
		["orange","orange"],
		["oven","oven"],
		["parking meter","parking meter"],
		["person","person"],
		["pizza","pizza"],
		["potted plant","potted plant"],
		["refrigerator","refrigerator"],
		["remote","remote"],
		["sandwich","sandwich"],
		["scissors","scissors"],
		["sheep","sheep"],
		["sink","sink"],
		["skateboard","skateboard"],
		["skis","skis"],
		["snowboard","snowboard"],
		["spoon","spoon"],
		["sports ball","sports ball"],
		["stop sign","stop sign"],
		["suitcase","suitcase"],
		["surfboard","surfboard"],
		["teddy bear","teddy bear"],
		["tennis racket","tennis racket"],
		["tie","tie"],
		["toaster","toaster"],
		["toilet","toilet"],
		["toothbrush","toothbrush"],
		["traffic light","traffic light"],
		["train","train"],
		["truck","truck"],
		["tv","tv"],
		["umbrella","umbrella"],
		["vase","vase"],
		["wine glass","wine glass"],
		["zebra","zebra"]
  ]), "object_");     
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['cocossd_state'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_STATE_SHOW)
      .appendField(new Blockly.FieldDropdown([
        ["Y","1"],
        ["N","0"]
  ]), "state_");   
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['cocossd_video_position'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_SHOW);	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.COCOSSD_VIDEO_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.COCOSSD_VIDEO_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};


Blockly.Blocks['cocossd_startvideo_media'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_SHOW); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_FACING_SHOW)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.COCOSSD_FACING_FRONT_SHOW,"front"],
        [Blockly.Msg.COCOSSD_FACING_BACK_SHOW,"back"]
  ]), "facing_");  
  this.appendValueInput("index_")
      .setCheck("Number");  
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.COCOSSD_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.COCOSSD_HEIGHT_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['cocossd_startvideo_stream'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_SHOW);    
  this.appendValueInput("src_")
      .setCheck("String")
      .appendField(Blockly.Msg.COCOSSD_SRC_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['cocossd_canvas_get'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_CANVAS_GET_SHOW); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['cocossd_clear'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_CLEAR_SHOW); 
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['cocossd_pause'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_PAUSE_SHOW);
  this.appendValueInput("time_")
      .setCheck("Number")    
      .appendField("(ms)"); 	  
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['cocossd_recognitied'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_SHOW);	  
  this.appendDummyInput()
      .appendField(Blockly.Msg.COCOSSD_RECOGNITIED_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.COCOSSD_RECOGNITIED_OBJECT_SHOW,"Y"],
		[Blockly.Msg.COCOSSD_RECOGNITIED_NOTHING_SHOW,"N"]	
  ]), "status_");	  
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['cocossd_unrecognitied'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_SHOW);	  
  this.appendDummyInput()
      .appendField(Blockly.Msg.COCOSSD_UNRECOGNITIED_SHOW);	  
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};
