Blockly.Blocks['controls_spreadsheet_function'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg["CONTROLS_SPREADSHEET"]);
  this.appendValueInput("spreadsheeturl")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_URL_SHOW"]);
  this.appendValueInput("spreadsheetname")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_NAME_SHOW"]);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["SPREADSHEET_SET_CELL_SHOW"],"setcell"],
		[Blockly.Msg["SPREADSHEET_CLEAR_CELL_SHOW"],"clearcell"],
		[Blockly.Msg["SPREADSHEET_CLEAR_ROW_SHOW"],"clearrow"],
		[Blockly.Msg["SPREADSHEET_CLEAR_COL_SHOW"],"clearcol"],		
		[Blockly.Msg["SPREADSHEET_CLEAR_AFTERROW2_SHOW"],"clearafterrow2"],		
		[Blockly.Msg["SPREADSHEET_CLEAR_SHEET_SHOW"],"clearsheet"]	  
		],this.validate), "func");
  this.appendValueInput("col")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_COL_SHOW"]);		
  this.appendValueInput("row")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_ROW_SHOW"]);
  this.appendValueInput("text")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_TEXT_SHOW"]);
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/gs/Spreadsheet_function.gs");	  
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(90);
  },
  validate: function(newValue) {
	const block = this.sourceBlock_;
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
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
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
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(65);
  this.setHelpUrl("https://developers.google.com/chart/interactive/docs/querylanguage");
  }
};

Blockly.Blocks['spreadsheetsql_getCellSQL'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg.SPREADSHEETSQL_SQL_SHOW);		  
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
		.setAlign(Blockly.ALIGN_RIGHT)	
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
	this.appendDummyInput()  
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.SPREADSHEETSQL_COLUMNNAME_SHOW)
		.appendField(new Blockly.FieldDropdown([
			["Y","1"],
			["N","0"]	  
	]), "column"); 		
	this.setInputsInline(false);	  
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setTooltip('');
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
	this.setTooltip('');
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
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['spreadsheetsql_clearData'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.SPREADSHEETSQL_CLEARDATA_SHOW);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(65);
  }
};

Blockly.Blocks['spreadsheetsql_getdatafinish'] = {
  init: function () {
  this.appendDummyInput()
      .appendField(Blockly.Msg.SPREADSHEETSQL_GETDATAFINISH_SHOW);
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
}


Blockly.defineBlocksWithJsonArray([
	{type:"controls_spreadsheet"
	,message0:"%{BKY_CONTROLS_SPREADSHEET}"
	,message1:"%{BKY_SPREADSHEET_INSERT_SHOW}"
	,message2:"%{BKY_SPREADSHEET_SPREADSHEET_URL_SHOW} %1"	
	,args2:[{type:"input_value",name:"spreadsheeturl",check:null,align:"RIGHT"}]	
	,message3:"%{BKY_SPREADSHEET_SPREADSHEET_NAME_SHOW} %1"	
	,args3:[{type:"input_value",name:"spreadsheetname",check:null,align:"RIGHT"}]		
	,message4:"%1"
	,args4:[{type:"field_dropdown",name:"func",options:[["%{BKY_SPREADSHEET_INSERTFIRSTROW_SHOW}","insertfirst"],["%{BKY_SPREADSHEET_ROW2_SHOW}","insertrow2"],["%{BKY_SPREADSHEET_INSERTLASTROW_SHOW}","insertlast"]],align:"RIGHT"}]		
	,message5:"%{BKY_SPREADSHEET_COLUMN_SHOW}A %1"	
	,args5:[{type:"input_value",name:"VALUE",check:null,align:"RIGHT"}]	
	,previousStatement:null
	,nextStatement:null
	,style:"logic_blocks"
	,inputsInline:0
	,helpUrl:"https://github.com/fustyles/webduino/blob/gs/Spreadsheet_function.gs"
	,mutator:"controls_spreadsheet_mutator"
	}
	,{type:"controls_spreadsheet_main"
	,message0:"%{BKY_SPREADSHEET_COLUMN_SHOW}"
	,nextStatement:null
	,enableContextMenu:!1
	,style:"logic_blocks"
	}	
	,{type:"controls_spreadsheet_value"
	,message0:"%{BKY_SPREADSHEET_COLUMN_SHOW}"
	,previousStatement:null
	,nextStatement:null
	,enableContextMenu:!1
	,style:"logic_blocks"
	}
]);

var module$contents$Blockly$blocks$CONTROLS_SPREADSHEET_MUTATOR_MIXIN={
	allCount_:0
	,suppressPrefixSuffix:!0
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
			.appendField(Blockly.Msg["SPREADSHEET_COLUMN_SHOW"]+String.fromCharCode(a+65))
			.setAlign(Blockly.ALIGN_RIGHT)
	}
	,reconnectChildBlocks_:function(a,b){	
		for(var d=1;d<=this.allCount_;d++)
			Blockly.Mutator.reconnect(a[d],this,String.fromCharCode(d+65));
	}
};
Blockly.Extensions.registerMutator("controls_spreadsheet_mutator",module$contents$Blockly$blocks$CONTROLS_SPREADSHEET_MUTATOR_MIXIN,null,["controls_spreadsheet_value"]);

Blockly.defineBlocksWithJsonArray([
	{type:"controls_spreadsheet_datetime"
	,message0:"%{BKY_SPREADSHEET_SPREADSHEET_TEXT_SHOW}"	
	,message1:"%1"
	,args1:[{type:"field_dropdown",name:"datetime",options:[["%{BKY_CONTROLS_SPREADSHEET_DATETIME}","gmt_datetime"],["%{BKY_CONTROLS_SPREADSHEET_DATE}","gmt_date"],["%{BKY_CONTROLS_SPREADSHEET_TIME}","gmt_time"]],align:"RIGHT"}]		
	,output:null
	,inputsInline:!0
	,style:"logic_blocks"
	,helpUrl:"https://github.com/fustyles/webduino/blob/gs/Spreadsheet_function.gs"
	}
]);