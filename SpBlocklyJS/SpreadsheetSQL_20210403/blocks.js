Blockly.Blocks['controls_spreadsheet_function'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg["SPREADSHEETSQL_SPREADSHEET"]);
  this.appendValueInput("spreadsheeturl")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEETSQL_URL_SHOW"]);
  this.appendValueInput("spreadsheetname")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEETSQL_NAME_SHOW"]);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["SPREADSHEETSQL_SET_CELL_SHOW"],"setcell"],
		[Blockly.Msg["SPREADSHEETSQL_CLEAR_CELL_SHOW"],"clearcell"],
		[Blockly.Msg["SPREADSHEETSQL_CLEAR_ROW_SHOW"],"clearrow"],
		[Blockly.Msg["SPREADSHEETSQL_CLEAR_COL_SHOW"],"clearcol"],		
		[Blockly.Msg["SPREADSHEETSQL_CLEAR_AFTERROW2_SHOW"],"clearafterrow2"],		
		[Blockly.Msg["SPREADSHEETSQL_CLEAR_SHEET_SHOW"],"clearsheet"]	  
		],this.validate), "func");
  this.appendValueInput("col")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEETSQL_COL_SHOW"]);		
  this.appendValueInput("row")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEETSQL_ROW_SHOW"]);
  this.appendValueInput("text")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEETSQL_TEXT_SHOW"]);
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/gs/Spreadsheet_function.gs");	  
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(130);
  },
  validate: function(newValue) {
	const block = this.sourceBlock_;
	if (!block) return;
	if (newValue=="setcell") {
		block.getInput("row").setVisible(true);
		block.getInput("col").setVisible(true);
		block.getInput("text").setVisible(true);
	}
	else if (newValue=="clearcell") {
		block.getInput("row").setVisible(true);
		block.getInput("col").setVisible(true);
		block.getInput("text").setVisible(false);
	}
	else if (newValue=="clearrow") {
		block.getInput("row").setVisible(true);
		block.getInput("col").setVisible(false);
		block.getInput("text").setVisible(false);
	}
	else if (newValue=="clearcol") {
		block.getInput("row").setVisible(false);
		block.getInput("col").setVisible(true);
		block.getInput("text").setVisible(false);
	}	
	else if (newValue=="clearafterrow2") {
		block.getInput("row").setVisible(false);
		block.getInput("col").setVisible(false);
		block.getInput("text").setVisible(false);
	}
	else if (newValue=="clearsheet") {
		block.getInput("row").setVisible(false);
		block.getInput("col").setVisible(false);
		block.getInput("text").setVisible(false);
	}	
  }
};

Blockly.Blocks['spreadsheetsql_queryData'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.SPREADSHEETSQL_SHOW); 	  
  this.appendValueInput("spreadsheet_id")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.SPREADSHEETSQL_ID_SHOW);    
  this.appendValueInput("spreadsheet_name")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.SPREADSHEETSQL_NAME_SHOW);
  this.appendDummyInput()
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg.SPREADSHEETSQL_TASK_SHOW)
      .appendField(new Blockly.FieldTextInput(""), "task_id");
  this.setInputsInline(false);   	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(65);
  this.setHelpUrl("https://developers.google.com/chart/interactive/docs/querylanguage");
  }
};

Blockly.Blocks['spreadsheetsql_executeSql'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.SPREADSHEETSQL_EXECUTESQL_SHOW);
  this.appendValueInput("spreadsheet_sql")
      .setCheck("String");
  this.appendDummyInput()
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg.SPREADSHEETSQL_TASK_SHOW)
      .appendField(new Blockly.FieldTextInput(""), "task_id");   
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(65);
  this.setHelpUrl("https://developers.google.com/chart/interactive/docs/querylanguage");
  }
};

Blockly.Blocks['spreadsheetsql_executeSql1'] = {
  init: function() {
  this.appendDummyInput()  
	  .appendField(Blockly.Msg["SPREADSHEETSQL_EXECUTESQL_SHOW"]);  
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["SPREADSHEETSQL_SQL_SHOW"],"sql"], 
			[Blockly.Msg["SPREADSHEETSQL_RANGE_SHOW"],"range"], 
			[Blockly.Msg["SPREADSHEETSQL_COLUMN_COMPARISON_SHOW"],"comparision"], 
			[Blockly.Msg["SPREADSHEETSQL_COLUMN_LIKE_SHOW"],"like"]
		], this.validate), "option");	  
  this.appendValueInput("sql","sql")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField("SQL");	  
  this.appendValueInput("cols","cols")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEETSQL_COLS_SHOW"]);
  this.appendValueInput("rows","rows")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEETSQL_ROWS_SHOW"]);		  
  this.appendValueInput("cole","cole")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEETSQL_COLE_SHOW"]);
  this.appendValueInput("rowe","rowe")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEETSQL_ROWE_SHOW"]);
  this.appendDummyInput("op")
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldDropdown([
		["=","="],
		[">",">"],
		[">=",">="],
		["<","<"],
		["<=","<="],
		["!=","!="]
  ]), "operator");		  
  this.appendValueInput("comparision","comparision")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEETSQL_COLUMN_VALUE_SHOW"]);  
  this.appendValueInput("like","like")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEETSQL_COLUMN_LIKE_STRING_SHOW"]);
  this.appendDummyInput()
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg["SPREADSHEETSQL_TASK_SHOW"])
      .appendField(new Blockly.FieldTextInput(""), "task_id");	  
  this.getInput("rows").setVisible(false);
  this.getInput("cols").setVisible(false);
  this.getInput("rowe").setVisible(false);
  this.getInput("cole").setVisible(false);
  this.getInput("comparision").setVisible(false);
  this.getInput("op").setVisible(false);
  this.getInput("like").setVisible(false);	  
  this.setInputsInline(false);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(65);
  this.setHelpUrl("https://developers.google.com/chart/interactive/docs/querylanguage");
  },
  validate: function(newValue) {
	const block = this.sourceBlock_;
	if (newValue=="sql") {
		block.getInput("sql").setVisible(true);
		block.getInput("cols").setVisible(false);
		block.getInput("rows").setVisible(false);		
		block.getInput("cole").setVisible(false);
		block.getInput("rowe").setVisible(false);
		block.getInput("comparision").setVisible(false);
		block.getInput("op").setVisible(false);
		block.getInput("like").setVisible(false);		
	}
	else if (newValue=="range") {
		block.getInput("sql").setVisible(false);
		block.getInput("cols").setVisible(true);
		block.getInput("rows").setVisible(true);
		block.getInput("cole").setVisible(true);
		block.getInput("rowe").setVisible(true);
		block.getInput("comparision").setVisible(false);
		block.getInput("op").setVisible(false);
		block.getInput("like").setVisible(false);		
	}
	else if (newValue=="comparision") {
		block.getInput("sql").setVisible(false);
		block.getInput("cols").setVisible(true);
		block.getInput("rows").setVisible(false);
		block.getInput("cole").setVisible(false);
		block.getInput("rowe").setVisible(false);
		block.getInput("comparision").setVisible(true);
		block.getInput("op").setVisible(true);
		block.getInput("like").setVisible(false);		
	}
	else if (newValue=="like") {
		block.getInput("sql").setVisible(false);
		block.getInput("cols").setVisible(true);
		block.getInput("rows").setVisible(false);
		block.getInput("cole").setVisible(false);
		block.getInput("rowe").setVisible(false);
		block.getInput("comparision").setVisible(false);
		block.getInput("op").setVisible(false);
		block.getInput("like").setVisible(true);		
	}	
  }
};

Blockly.Blocks['spreadsheetsql_getCellSQL'] = {
  init: function() {
	this.appendDummyInput()
		.appendField("SQL");		  
	this.appendDummyInput()
		.appendField(Blockly.Msg.SPREADSHEETSQL_COLUMN_SHOW)
		.appendField(new Blockly.FieldDropdown([
          ["A","A"],		
          ["B","B"],
          ["C","C"],		
          ["D","D"],		  
          ["E","E"],		
          ["F","F"],
          ["G","G"],		
          ["H","H"],
          ["I","I"],		
          ["J","J"],		  
          ["K","K"],		
          ["L","L"],	
          ["M","M"],		
          ["N","N"],
          ["O","O"],		
          ["P","P"],		  
          ["Q","Q"],		
          ["R","R"],
          ["S","S"],		
          ["T","T"],
          ["U","U"],		
          ["V","V"],		  
          ["W","W"],		
          ["X","X"],
          ["Y","Y"],		
          ["Z","Z"]		  
		]), "col"); 
    this.appendValueInput("row")
		.setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")  
        .appendField(Blockly.Msg.SPREADSHEETSQL_ROW_SHOW);		
	this.setInputsInline(true);
	this.setOutput(true, null); 
	this.setColour(65);
  }
};

Blockly.Blocks['spreadsheetsql_getData'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.SPREADSHEETSQL_GETDATA_SHOW);
  this.appendDummyInput()
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg.SPREADSHEETSQL_TASK_SHOW)
      .appendField(new Blockly.FieldTextInput(""), "task_id");  	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  this.setHelpUrl("https://developers.google.com/chart/interactive/docs/querylanguage");  
  }
};

Blockly.Blocks['spreadsheetsql_getCell'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg.SPREADSHEETSQL_GETCELL_SHOW);
	this.appendValueInput("row")
		.setAlign(Blockly.ALIGN_RIGHT)
		.setCheck("Number")  
		.appendField(Blockly.Msg.SPREADSHEETSQL_ROW_SHOW);			
	this.appendValueInput("col")
		.setAlign(Blockly.ALIGN_RIGHT)
		.setCheck("Number")  
		.appendField(Blockly.Msg.SPREADSHEETSQL_COL_SHOW);
    this.appendDummyInput()
	    .setAlign(Blockly.ALIGN_RIGHT)
	    .appendField(Blockly.Msg.SPREADSHEETSQL_TASK_SHOW)
        .appendField(new Blockly.FieldTextInput(""), "task_id"); 		
	this.setInputsInline(true);
	this.setOutput(true, null); 
	this.setColour(65);
	this.setHelpUrl("https://developers.google.com/chart/interactive/docs/querylanguage");  
  }
};

Blockly.Blocks['spreadsheetsql_getDataTable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SPREADSHEETSQL_EXECUTESQL_SHOW);	  
    this.appendDummyInput()
        .appendField(Blockly.Msg.SPREADSHEETSQL_GETDATATABLE_SHOW);
	this.appendValueInput("id")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.SPREADSHEETSQL_TABLEID_SHOW)
		.setCheck("String");		
    this.appendValueInput("width")
		.setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")  
        .appendField(Blockly.Msg.SPREADSHEETSQL_WIDTH_SHOW);
    this.appendValueInput("fontsize")
		.setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")  
        .appendField(Blockly.Msg.SPREADSHEETSQL_FONTSIZE_SHOW);			
    this.appendValueInput("left")
		.setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")  
        .appendField(Blockly.Msg.SPREADSHEETSQL_LEFT_SHOW);
    this.appendValueInput("top")
		.setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")  
        .appendField(Blockly.Msg.SPREADSHEETSQL_TOP_SHOW);
    this.appendValueInput("column")
		.setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Boolean")  
        .appendField(Blockly.Msg.SPREADSHEETSQL_COLUMNNAME_SHOW);
    this.appendDummyInput()
	    .setAlign(Blockly.ALIGN_RIGHT)
	    .appendField(Blockly.Msg.SPREADSHEETSQL_TASK_SHOW)
        .appendField(new Blockly.FieldTextInput(""), "task_id"); 		
	this.setInputsInline(false);	  
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	
	this.setColour(65);
	this.setHelpUrl("https://developers.google.com/chart/interactive/docs/querylanguage");   
  }
};

Blockly.Blocks['spreadsheetsql_clearDataTable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SPREADSHEETSQL_CLEARDATATABLE_SHOW);
	this.appendValueInput("id")
		.appendField(Blockly.Msg.SPREADSHEETSQL_TABLEID_SHOW)
		.setCheck("String");		
	this.setInputsInline(true);	  
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	
	this.setColour(65);		
  }
};

Blockly.Blocks['spreadsheetsql_getDataCount'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.SPREADSHEETSQL_GETDATA_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.SPREADSHEETSQL_GETDATACOUNTROWS_SHOW,"ROWS"],		
          [Blockly.Msg.SPREADSHEETSQL_GETDATACOUNTCOLS_SHOW,"COLS"]
        ]), "count");
    this.appendDummyInput()
	    .setAlign(Blockly.ALIGN_RIGHT)
	    .appendField(Blockly.Msg.SPREADSHEETSQL_TASK_SHOW)
        .appendField(new Blockly.FieldTextInput(""), "task_id"); 		
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['spreadsheetsql_clearData'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SPREADSHEETSQL_CLEARDATA_SHOW);
    this.appendDummyInput()
	    .setAlign(Blockly.ALIGN_RIGHT)
	    .appendField(Blockly.Msg.SPREADSHEETSQL_TASK_SHOW)
        .appendField(new Blockly.FieldTextInput(""), "task_id"); 
    this.setInputsInline(true);		
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
  }
};

Blockly.Blocks['spreadsheetsql_getdatafinish'] = {
  init: function () {
  this.appendDummyInput()
      .appendField(Blockly.Msg.SPREADSHEETSQL_GETDATAFINISH_SHOW);
    this.appendDummyInput()
	    .setAlign(Blockly.ALIGN_RIGHT)
	    .appendField(Blockly.Msg.SPREADSHEETSQL_TASK_SHOW)
        .appendField(new Blockly.FieldTextInput(""), "task_id");  	  
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
}


Blockly.defineBlocksWithJsonArray([
	{type:"controls_spreadsheet"
	,message0:"%{BKY_SPREADSHEETSQL_SPREADSHEET}"
	,message1:"%{BKY_SPREADSHEETSQL_INSERT_SHOW}"
	,message2:"%{BKY_SPREADSHEETSQL_URL_SHOW} %1"	
	,args2:[{type:"input_value",name:"spreadsheeturl",check:null,align:"RIGHT"}]	
	,message3:"%{BKY_SPREADSHEETSQL_NAME_SHOW} %1"	
	,args3:[{type:"input_value",name:"spreadsheetname",check:null,align:"RIGHT"}]		
	,message4:"%1"
	,args4:[{type:"field_dropdown",name:"func",options:[["%{BKY_SPREADSHEETSQL_INSERTFIRSTROW_SHOW}","insertfirst"],["%{BKY_SPREADSHEETSQL_ROW2_SHOW}","insertrow2"],["%{BKY_SPREADSHEETSQL_INSERTLASTROW_SHOW}","insertlast"]],align:"RIGHT"}]		
	,message5:"%{BKY_SPREADSHEETSQL_COLUMN_SHOW}A %1"	
	,args5:[{type:"input_value",name:"VALUE",check:null,align:"RIGHT"}]	
	,previousStatement:null
	,nextStatement:null
	,style:"logic_blocks"
	,inputsInline:0
	,helpUrl:"https://github.com/fustyles/webduino/blob/gs/Spreadsheet_function.gs"
	,mutator:"controls_spreadsheet_mutator"
	}
	,{type:"controls_spreadsheet_main"
	,message0:"%{BKY_SPREADSHEETSQL_COLUMN_SHOW}"
	,nextStatement:null
	,enableContextMenu:!1
	,style:"logic_blocks"
	}	
	,{type:"controls_spreadsheet_value"
	,message0:"%{BKY_SPREADSHEETSQL_COLUMN_SHOW}"
	,previousStatement:null
	,nextStatement:null
	,enableContextMenu:!1
	,style:"logic_blocks"
	}
]);

var module$contents$Blockly$blocks$CONTROLS_SPREADSHEET_MUTATOR_MIXIN={
	allCount_:0
	,mutationToDom:function(){		
		if(!this.allCount_)return null;
		var a=Blockly.utils.xml.createElement("mutation");
		this.allCount_&&a.setAttribute("all",this.allCount_);
		return a
	}
	,domToMutation:function(a){		
		this.allCount_=parseInt(a.getAttribute("all"),10)||0;
		this.rebuildShape_()
	}
	,decompose:function(a){
		var b=a.newBlock("controls_spreadsheet_main");
		b.initSvg();
		
		for(var c=b.nextConnection,d=1;d<=this.allCount_;d++){
			var e=a.newBlock("controls_spreadsheet_value");
			e.initSvg();
			c.connect(e.previousConnection);
			c=e.nextConnection
		}
		return b
	}
	,compose:function(a){
		a=a.nextConnection.targetBlock();
		this.allCount_=0;
		for(var b=[null];a&&!a.isInsertionMarker();){
			this.allCount_++;
			b.push(a.valueConnection_);
			a=a.nextConnection&&a.nextConnection.targetBlock()
		}
		this.updateShape_();
		this.reconnectChildBlocks_(b)
	}
	,saveConnections:function(a){	
		a=a.nextConnection.targetBlock();
		for(var b=1;a;){
			switch(a.type){
				case "controls_spreadsheet_value":
					var c=this.getInput(String.fromCharCode(b+65));
					a.valueConnection_=c&&c.connection.targetConnection;
					b++;
					break;				
				default:throw TypeError("Unknown block type: "+a.type);
			}
			a=a.nextConnection&&a.nextConnection.targetBlock()
		}
	}
	,rebuildShape_:function(){	
		var a=[null];
		for(var d=1;this.getInput(String.fromCharCode(d+65));){
			var e=this.getInput(String.fromCharCode(d+65));
			a.push(e.connection.targetConnection);d++
		}
		this.updateShape_();
		this.reconnectChildBlocks_(a)
	}
	,updateShape_:function(){	
		for(var a=1;this.getInput(String.fromCharCode(a+65));)
			this.removeInput(String.fromCharCode(a+65)),a++;
		for(a=1;a<=this.allCount_;a++)
			this.appendValueInput(String.fromCharCode(a+65))
			.setCheck(null)
			.appendField(Blockly.Msg["SPREADSHEETSQL_COLUMN_SHOW"]+String.fromCharCode(a+65))
			.setAlign(Blockly.ALIGN_RIGHT)
	}
	,reconnectChildBlocks_:function(a,b){	
		for(var d=1;d<=this.allCount_;d++)
			Blockly.icons.MutatorIcon.reconnect(a[d],this,String.fromCharCode(d+65));
	}
};
Blockly.Extensions.registerMutator("controls_spreadsheet_mutator",module$contents$Blockly$blocks$CONTROLS_SPREADSHEET_MUTATOR_MIXIN,null,["controls_spreadsheet_value"]);


Blockly.defineBlocksWithJsonArray([
	{type:"controls_spreadsheet_datetime"
	,message0:"%{BKY_SPREADSHEETSQL_TEXT_SHOW}"	
	,message1:"%1"
	,args1:[{type:"field_dropdown",name:"datetime",options:[["%{BKY_SPREADSHEETSQL_DATETIME}","gmt_datetime"],["%{BKY_SPREADSHEETSQL_DATE}","gmt_date"],["%{BKY_SPREADSHEETSQL_TIME}","gmt_time"]],align:"RIGHT"}]		
	,output:null
	,inputsInline:!0
	,style:"logic_blocks"
	,helpUrl:"https://github.com/fustyles/webduino/blob/gs/Spreadsheet_function.gs"
	}
]);

Blockly.Blocks['spreadsheetsql_insertRow'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.SPREADSHEETSQL_GETROW_SHOW);  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};