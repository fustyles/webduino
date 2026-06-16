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
		  [Blockly.Msg.COCOSSD_AIRPLANE,"airplane"],
		  [Blockly.Msg.COCOSSD_APPLE,"apple"],
		  [Blockly.Msg.COCOSSD_BACKPACK,"backpack"],
		  [Blockly.Msg.COCOSSD_BANANA,"banana"],
		  [Blockly.Msg.COCOSSD_BASEBALL_BAT,"baseball bat"],
		  [Blockly.Msg.COCOSSD_BASEBALL_GLOVE,"baseball glove"],
		  [Blockly.Msg.COCOSSD_BEAR,"bear"],
		  [Blockly.Msg.COCOSSD_BED,"bed"],
		  [Blockly.Msg.COCOSSD_BENCH,"bench"],
		  [Blockly.Msg.COCOSSD_BICYCLE,"bicycle"],
		  [Blockly.Msg.COCOSSD_BIRD,"bird"],
		  [Blockly.Msg.COCOSSD_BOAT,"boat"],
		  [Blockly.Msg.COCOSSD_BOOK,"book"],
		  [Blockly.Msg.COCOSSD_BOTTLE,"bottle"],
		  [Blockly.Msg.COCOSSD_BOWL,"bowl"],
		  [Blockly.Msg.COCOSSD_BROCCOLI,"broccoli"],
		  [Blockly.Msg.COCOSSD_BUS,"bus"],
		  [Blockly.Msg.COCOSSD_CAKE,"cake"],
		  [Blockly.Msg.COCOSSD_CAR,"car"],
		  [Blockly.Msg.COCOSSD_CARROT,"carrot"],
		  [Blockly.Msg.COCOSSD_CAT,"cat"],
		  [Blockly.Msg.COCOSSD_CELL_PHONE,"cell phone"],
		  [Blockly.Msg.COCOSSD_CHAIR,"chair"],
		  [Blockly.Msg.COCOSSD_CLOCK,"clock"],
		  [Blockly.Msg.COCOSSD_COUCH,"couch"],
		  [Blockly.Msg.COCOSSD_COW,"cow"],
		  [Blockly.Msg.COCOSSD_CUP,"cup"],
		  [Blockly.Msg.COCOSSD_DINING_TABLE,"dining table"],
		  [Blockly.Msg.COCOSSD_DOG,"dog"],
		  [Blockly.Msg.COCOSSD_DONUT,"donut"],
		  [Blockly.Msg.COCOSSD_ELEPHANT,"elephant"],
		  [Blockly.Msg.COCOSSD_FIRE_HYDRANT,"fire hydrant"],
		  [Blockly.Msg.COCOSSD_FORK,"fork"],
		  [Blockly.Msg.COCOSSD_FRISBEE,"frisbee"],
		  [Blockly.Msg.COCOSSD_GIRAFFE,"giraffe"],
		  [Blockly.Msg.COCOSSD_HAIR_DRIER,"hair drier"],
		  [Blockly.Msg.COCOSSD_HANDBAG,"handbag"],
		  [Blockly.Msg.COCOSSD_HORSE,"horse"],
		  [Blockly.Msg.COCOSSD_HOT_DOG,"hot dog"],
		  [Blockly.Msg.COCOSSD_KEYBOARD,"keyboard"],
		  [Blockly.Msg.COCOSSD_KITE,"kite"],
		  [Blockly.Msg.COCOSSD_KNIFE,"knife"],
		  [Blockly.Msg.COCOSSD_LAPTOP,"laptop"],
		  [Blockly.Msg.COCOSSD_MICROWAVE,"microwave"],
		  [Blockly.Msg.COCOSSD_MOTORCYCLE,"motorcycle"],
		  [Blockly.Msg.COCOSSD_MOUSE,"mouse"],
		  [Blockly.Msg.COCOSSD_ORANGE,"orange"],
		  [Blockly.Msg.COCOSSD_OVEN,"oven"],
		  [Blockly.Msg.COCOSSD_PARKING_METER,"parking meter"],
		  [Blockly.Msg.COCOSSD_PERSON,"person"],
		  [Blockly.Msg.COCOSSD_PIZZA,"pizza"],
		  [Blockly.Msg.COCOSSD_POTTED_PLANT,"potted plant"],
		  [Blockly.Msg.COCOSSD_REFRIGERATOR,"refrigerator"],
		  [Blockly.Msg.COCOSSD_REMOTE,"remote"],
		  [Blockly.Msg.COCOSSD_SANDWICH,"sandwich"],
		  [Blockly.Msg.COCOSSD_SCISSORS,"scissors"],
		  [Blockly.Msg.COCOSSD_SHEEP,"sheep"],
		  [Blockly.Msg.COCOSSD_SINK,"sink"],
		  [Blockly.Msg.COCOSSD_SKATEBOARD,"skateboard"],
		  [Blockly.Msg.COCOSSD_SKIS,"skis"],
		  [Blockly.Msg.COCOSSD_SNOWBOARD,"snowboard"],
		  [Blockly.Msg.COCOSSD_SPOON,"spoon"],
		  [Blockly.Msg.COCOSSD_SPORTS_BALL,"sports ball"],
		  [Blockly.Msg.COCOSSD_STOP_SIGN,"stop sign"],
		  [Blockly.Msg.COCOSSD_SUITCASE,"suitcase"],
		  [Blockly.Msg.COCOSSD_SURFBOARD,"surfboard"],
		  [Blockly.Msg.COCOSSD_TEDDY_BEAR,"teddy bear"],
		  [Blockly.Msg.COCOSSD_TENNIS_RACKET,"tennis racket"],
		  [Blockly.Msg.COCOSSD_TIE,"tie"],
		  [Blockly.Msg.COCOSSD_TOASTER,"toaster"],
		  [Blockly.Msg.COCOSSD_TOILET,"toilet"],
		  [Blockly.Msg.COCOSSD_TOOTHBRUSH,"toothbrush"],
		  [Blockly.Msg.COCOSSD_TRAFFIC_LIGHT,"traffic light"],
		  [Blockly.Msg.COCOSSD_TRAIN,"train"],
		  [Blockly.Msg.COCOSSD_TRUCK,"truck"],
		  [Blockly.Msg.COCOSSD_TV,"tv"],
		  [Blockly.Msg.COCOSSD_UMBRELLA,"umbrella"],
		  [Blockly.Msg.COCOSSD_VASE,"vase"],
		  [Blockly.Msg.COCOSSD_WINE_GLASS,"wine glass"],
		  [Blockly.Msg.COCOSSD_ZEBRA,"zebra"]
  ]), "object_");     
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
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
		  [Blockly.Msg.COCOSSD_OBJECT_ALL_SHOW,""],
		  [Blockly.Msg.COCOSSD_AIRPLANE,"airplane"],
		  [Blockly.Msg.COCOSSD_APPLE,"apple"],
		  [Blockly.Msg.COCOSSD_BACKPACK,"backpack"],
		  [Blockly.Msg.COCOSSD_BANANA,"banana"],
		  [Blockly.Msg.COCOSSD_BASEBALL_BAT,"baseball bat"],
		  [Blockly.Msg.COCOSSD_BASEBALL_GLOVE,"baseball glove"],
		  [Blockly.Msg.COCOSSD_BEAR,"bear"],
		  [Blockly.Msg.COCOSSD_BED,"bed"],
		  [Blockly.Msg.COCOSSD_BENCH,"bench"],
		  [Blockly.Msg.COCOSSD_BICYCLE,"bicycle"],
		  [Blockly.Msg.COCOSSD_BIRD,"bird"],
		  [Blockly.Msg.COCOSSD_BOAT,"boat"],
		  [Blockly.Msg.COCOSSD_BOOK,"book"],
		  [Blockly.Msg.COCOSSD_BOTTLE,"bottle"],
		  [Blockly.Msg.COCOSSD_BOWL,"bowl"],
		  [Blockly.Msg.COCOSSD_BROCCOLI,"broccoli"],
		  [Blockly.Msg.COCOSSD_BUS,"bus"],
		  [Blockly.Msg.COCOSSD_CAKE,"cake"],
		  [Blockly.Msg.COCOSSD_CAR,"car"],
		  [Blockly.Msg.COCOSSD_CARROT,"carrot"],
		  [Blockly.Msg.COCOSSD_CAT,"cat"],
		  [Blockly.Msg.COCOSSD_CELL_PHONE,"cell phone"],
		  [Blockly.Msg.COCOSSD_CHAIR,"chair"],
		  [Blockly.Msg.COCOSSD_CLOCK,"clock"],
		  [Blockly.Msg.COCOSSD_COUCH,"couch"],
		  [Blockly.Msg.COCOSSD_COW,"cow"],
		  [Blockly.Msg.COCOSSD_CUP,"cup"],
		  [Blockly.Msg.COCOSSD_DINING_TABLE,"dining table"],
		  [Blockly.Msg.COCOSSD_DOG,"dog"],
		  [Blockly.Msg.COCOSSD_DONUT,"donut"],
		  [Blockly.Msg.COCOSSD_ELEPHANT,"elephant"],
		  [Blockly.Msg.COCOSSD_FIRE_HYDRANT,"fire hydrant"],
		  [Blockly.Msg.COCOSSD_FORK,"fork"],
		  [Blockly.Msg.COCOSSD_FRISBEE,"frisbee"],
		  [Blockly.Msg.COCOSSD_GIRAFFE,"giraffe"],
		  [Blockly.Msg.COCOSSD_HAIR_DRIER,"hair drier"],
		  [Blockly.Msg.COCOSSD_HANDBAG,"handbag"],
		  [Blockly.Msg.COCOSSD_HORSE,"horse"],
		  [Blockly.Msg.COCOSSD_HOT_DOG,"hot dog"],
		  [Blockly.Msg.COCOSSD_KEYBOARD,"keyboard"],
		  [Blockly.Msg.COCOSSD_KITE,"kite"],
		  [Blockly.Msg.COCOSSD_KNIFE,"knife"],
		  [Blockly.Msg.COCOSSD_LAPTOP,"laptop"],
		  [Blockly.Msg.COCOSSD_MICROWAVE,"microwave"],
		  [Blockly.Msg.COCOSSD_MOTORCYCLE,"motorcycle"],
		  [Blockly.Msg.COCOSSD_MOUSE,"mouse"],
		  [Blockly.Msg.COCOSSD_ORANGE,"orange"],
		  [Blockly.Msg.COCOSSD_OVEN,"oven"],
		  [Blockly.Msg.COCOSSD_PARKING_METER,"parking meter"],
		  [Blockly.Msg.COCOSSD_PERSON,"person"],
		  [Blockly.Msg.COCOSSD_PIZZA,"pizza"],
		  [Blockly.Msg.COCOSSD_POTTED_PLANT,"potted plant"],
		  [Blockly.Msg.COCOSSD_REFRIGERATOR,"refrigerator"],
		  [Blockly.Msg.COCOSSD_REMOTE,"remote"],
		  [Blockly.Msg.COCOSSD_SANDWICH,"sandwich"],
		  [Blockly.Msg.COCOSSD_SCISSORS,"scissors"],
		  [Blockly.Msg.COCOSSD_SHEEP,"sheep"],
		  [Blockly.Msg.COCOSSD_SINK,"sink"],
		  [Blockly.Msg.COCOSSD_SKATEBOARD,"skateboard"],
		  [Blockly.Msg.COCOSSD_SKIS,"skis"],
		  [Blockly.Msg.COCOSSD_SNOWBOARD,"snowboard"],
		  [Blockly.Msg.COCOSSD_SPOON,"spoon"],
		  [Blockly.Msg.COCOSSD_SPORTS_BALL,"sports ball"],
		  [Blockly.Msg.COCOSSD_STOP_SIGN,"stop sign"],
		  [Blockly.Msg.COCOSSD_SUITCASE,"suitcase"],
		  [Blockly.Msg.COCOSSD_SURFBOARD,"surfboard"],
		  [Blockly.Msg.COCOSSD_TEDDY_BEAR,"teddy bear"],
		  [Blockly.Msg.COCOSSD_TENNIS_RACKET,"tennis racket"],
		  [Blockly.Msg.COCOSSD_TIE,"tie"],
		  [Blockly.Msg.COCOSSD_TOASTER,"toaster"],
		  [Blockly.Msg.COCOSSD_TOILET,"toilet"],
		  [Blockly.Msg.COCOSSD_TOOTHBRUSH,"toothbrush"],
		  [Blockly.Msg.COCOSSD_TRAFFIC_LIGHT,"traffic light"],
		  [Blockly.Msg.COCOSSD_TRAIN,"train"],
		  [Blockly.Msg.COCOSSD_TRUCK,"truck"],
		  [Blockly.Msg.COCOSSD_TV,"tv"],
		  [Blockly.Msg.COCOSSD_UMBRELLA,"umbrella"],
		  [Blockly.Msg.COCOSSD_VASE,"vase"],
		  [Blockly.Msg.COCOSSD_WINE_GLASS,"wine glass"],
		  [Blockly.Msg.COCOSSD_ZEBRA,"zebra"]
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
  this.setColour(200);
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
		  [Blockly.Msg.COCOSSD_OBJECT_ALL_SHOW,""],
		  [Blockly.Msg.COCOSSD_AIRPLANE,"airplane"],
		  [Blockly.Msg.COCOSSD_APPLE,"apple"],
		  [Blockly.Msg.COCOSSD_BACKPACK,"backpack"],
		  [Blockly.Msg.COCOSSD_BANANA,"banana"],
		  [Blockly.Msg.COCOSSD_BASEBALL_BAT,"baseball bat"],
		  [Blockly.Msg.COCOSSD_BASEBALL_GLOVE,"baseball glove"],
		  [Blockly.Msg.COCOSSD_BEAR,"bear"],
		  [Blockly.Msg.COCOSSD_BED,"bed"],
		  [Blockly.Msg.COCOSSD_BENCH,"bench"],
		  [Blockly.Msg.COCOSSD_BICYCLE,"bicycle"],
		  [Blockly.Msg.COCOSSD_BIRD,"bird"],
		  [Blockly.Msg.COCOSSD_BOAT,"boat"],
		  [Blockly.Msg.COCOSSD_BOOK,"book"],
		  [Blockly.Msg.COCOSSD_BOTTLE,"bottle"],
		  [Blockly.Msg.COCOSSD_BOWL,"bowl"],
		  [Blockly.Msg.COCOSSD_BROCCOLI,"broccoli"],
		  [Blockly.Msg.COCOSSD_BUS,"bus"],
		  [Blockly.Msg.COCOSSD_CAKE,"cake"],
		  [Blockly.Msg.COCOSSD_CAR,"car"],
		  [Blockly.Msg.COCOSSD_CARROT,"carrot"],
		  [Blockly.Msg.COCOSSD_CAT,"cat"],
		  [Blockly.Msg.COCOSSD_CELL_PHONE,"cell phone"],
		  [Blockly.Msg.COCOSSD_CHAIR,"chair"],
		  [Blockly.Msg.COCOSSD_CLOCK,"clock"],
		  [Blockly.Msg.COCOSSD_COUCH,"couch"],
		  [Blockly.Msg.COCOSSD_COW,"cow"],
		  [Blockly.Msg.COCOSSD_CUP,"cup"],
		  [Blockly.Msg.COCOSSD_DINING_TABLE,"dining table"],
		  [Blockly.Msg.COCOSSD_DOG,"dog"],
		  [Blockly.Msg.COCOSSD_DONUT,"donut"],
		  [Blockly.Msg.COCOSSD_ELEPHANT,"elephant"],
		  [Blockly.Msg.COCOSSD_FIRE_HYDRANT,"fire hydrant"],
		  [Blockly.Msg.COCOSSD_FORK,"fork"],
		  [Blockly.Msg.COCOSSD_FRISBEE,"frisbee"],
		  [Blockly.Msg.COCOSSD_GIRAFFE,"giraffe"],
		  [Blockly.Msg.COCOSSD_HAIR_DRIER,"hair drier"],
		  [Blockly.Msg.COCOSSD_HANDBAG,"handbag"],
		  [Blockly.Msg.COCOSSD_HORSE,"horse"],
		  [Blockly.Msg.COCOSSD_HOT_DOG,"hot dog"],
		  [Blockly.Msg.COCOSSD_KEYBOARD,"keyboard"],
		  [Blockly.Msg.COCOSSD_KITE,"kite"],
		  [Blockly.Msg.COCOSSD_KNIFE,"knife"],
		  [Blockly.Msg.COCOSSD_LAPTOP,"laptop"],
		  [Blockly.Msg.COCOSSD_MICROWAVE,"microwave"],
		  [Blockly.Msg.COCOSSD_MOTORCYCLE,"motorcycle"],
		  [Blockly.Msg.COCOSSD_MOUSE,"mouse"],
		  [Blockly.Msg.COCOSSD_ORANGE,"orange"],
		  [Blockly.Msg.COCOSSD_OVEN,"oven"],
		  [Blockly.Msg.COCOSSD_PARKING_METER,"parking meter"],
		  [Blockly.Msg.COCOSSD_PERSON,"person"],
		  [Blockly.Msg.COCOSSD_PIZZA,"pizza"],
		  [Blockly.Msg.COCOSSD_POTTED_PLANT,"potted plant"],
		  [Blockly.Msg.COCOSSD_REFRIGERATOR,"refrigerator"],
		  [Blockly.Msg.COCOSSD_REMOTE,"remote"],
		  [Blockly.Msg.COCOSSD_SANDWICH,"sandwich"],
		  [Blockly.Msg.COCOSSD_SCISSORS,"scissors"],
		  [Blockly.Msg.COCOSSD_SHEEP,"sheep"],
		  [Blockly.Msg.COCOSSD_SINK,"sink"],
		  [Blockly.Msg.COCOSSD_SKATEBOARD,"skateboard"],
		  [Blockly.Msg.COCOSSD_SKIS,"skis"],
		  [Blockly.Msg.COCOSSD_SNOWBOARD,"snowboard"],
		  [Blockly.Msg.COCOSSD_SPOON,"spoon"],
		  [Blockly.Msg.COCOSSD_SPORTS_BALL,"sports ball"],
		  [Blockly.Msg.COCOSSD_STOP_SIGN,"stop sign"],
		  [Blockly.Msg.COCOSSD_SUITCASE,"suitcase"],
		  [Blockly.Msg.COCOSSD_SURFBOARD,"surfboard"],
		  [Blockly.Msg.COCOSSD_TEDDY_BEAR,"teddy bear"],
		  [Blockly.Msg.COCOSSD_TENNIS_RACKET,"tennis racket"],
		  [Blockly.Msg.COCOSSD_TIE,"tie"],
		  [Blockly.Msg.COCOSSD_TOASTER,"toaster"],
		  [Blockly.Msg.COCOSSD_TOILET,"toilet"],
		  [Blockly.Msg.COCOSSD_TOOTHBRUSH,"toothbrush"],
		  [Blockly.Msg.COCOSSD_TRAFFIC_LIGHT,"traffic light"],
		  [Blockly.Msg.COCOSSD_TRAIN,"train"],
		  [Blockly.Msg.COCOSSD_TRUCK,"truck"],
		  [Blockly.Msg.COCOSSD_TV,"tv"],
		  [Blockly.Msg.COCOSSD_UMBRELLA,"umbrella"],
		  [Blockly.Msg.COCOSSD_VASE,"vase"],
		  [Blockly.Msg.COCOSSD_WINE_GLASS,"wine glass"],
		  [Blockly.Msg.COCOSSD_ZEBRA,"zebra"]
  ]), "object_");     
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
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
  this.setColour(200);
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

Blockly.Blocks['cocossd_xy_in_triangle'] = {
  init: function() {
    this.appendDummyInput()  
        .appendField(Blockly.Msg.COCOSSD_SHOW)  
        .appendField(Blockly.Msg.COCOSSD_GEOFENCE);	  
	this.appendValueInput("x")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X")
		.setCheck("Number");		
	this.appendValueInput("y")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y")
		.setCheck("Number");
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["COCOSSD_XY_IN_TRIANGLE"]);			
	this.appendValueInput("x1")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X1")
		.setCheck("Number");		
	this.appendValueInput("y1")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y1")
		.setCheck("Number");
	this.appendValueInput("x2")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X2")
		.setCheck("Number");		
	this.appendValueInput("y2")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y2")
		.setCheck("Number");
	this.appendValueInput("x3")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X3")
		.setCheck("Number");		
	this.appendValueInput("y3")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y3")
		.setCheck("Number");			
	this.setInputsInline(false);
	this.setOutput(true, null); 
	this.setColour(200);
  }
};

Blockly.Blocks['cocossd_xy_in_quadrilateral'] = {
  init: function() {
    this.appendDummyInput()  
        .appendField(Blockly.Msg.COCOSSD_SHOW)  
        .appendField(Blockly.Msg.COCOSSD_GEOFENCE);		  
	this.appendValueInput("x")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X")
		.setCheck("Number");		
	this.appendValueInput("y")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y")
		.setCheck("Number");
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["COCOSSD_XY_IN_QUADRILATERAL"]);			
	this.appendValueInput("x1")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X1")
		.setCheck("Number");		
	this.appendValueInput("y1")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y1")
		.setCheck("Number");
	this.appendValueInput("x2")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X2")
		.setCheck("Number");		
	this.appendValueInput("y2")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y2")
		.setCheck("Number");
	this.appendValueInput("x3")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X3")
		.setCheck("Number");		
	this.appendValueInput("y3")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y3")
		.setCheck("Number");
	this.appendValueInput("x4")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X4")
		.setCheck("Number");		
	this.appendValueInput("y4")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y4")
		.setCheck("Number");
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField(Blockly.Msg["COCOSSD_XY_ARRANGE"]);
	this.setInputsInline(false);
	this.setOutput(true, null); 
	this.setColour(200);
  }

};
