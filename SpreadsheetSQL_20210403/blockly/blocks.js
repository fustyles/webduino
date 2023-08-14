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
    this.appendValueInput("column")
		.setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Boolean")  
        .appendField(Blockly.Msg.SPREADSHEETSQL_COLUMNNAME_SHOW);	
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
