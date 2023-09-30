Blockly.Blocks['button_toolbox'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.BUTTON_TOOLBOX);	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendValueInput("fontsize_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTSIZE); 
  this.appendValueInput("color_")
	  .appendField(Blockly.Msg.BUTTON_FONTCOLOR)
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendValueInput("bgcolor_")
	  .appendField(Blockly.Msg.BACKCOLOR)
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendDummyInput()
	  .appendField(Blockly.Msg.BUTTON_GOOGLEICON_DIRECTION)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.BUTTON_GOOGLEICON_HORIZONTAL,"1"],
	  [Blockly.Msg.BUTTON_GOOGLEICON_VERTICAL,"0"]
	  ]), "direction_");	  
  this.appendValueInput("list_")
	  .appendField(Blockly.Msg.BUTTON_GOOGLEICON_LIST)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .setCheck(null);		  
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(90);
  this.setHelpUrl("https://fustyles.github.io/webduino/google_icon.html");   
  }
};

Blockly.Blocks['custom_googleicon'] = {
  init: function() {
  this.appendDummyInput() 
	  .appendField(Blockly.Msg.CUSTOM_GOOGLEICON_SHOW);  
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.ELEMENT_BUTTON,"button"],
	  [Blockly.Msg.ELEMENT_SPAN,"span"],
	  [Blockly.Msg.ELEMENT_A,"a"]
	  ]), "element");
  this.appendValueInput("id")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.ID);   
  this.appendValueInput("val")
	  .appendField(Blockly.Msg.CUSTOM_GOOGLEICON_NAME_SHOW)
      .setCheck("String");	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(50);
  this.setHelpUrl("https://fustyles.github.io/webduino/google_icon.html");  
  }
};

Blockly.defineBlocksWithJsonArray([
	{type:"table_insert_row"
	,lastDummyAlign0:"RIGHT"
	,message0:"%{BKY_TABLE} %{BKY_TABLE_ROW}"
	,message1:"%{BKY_TABLE_ID} %1"	
	,args1:[{type:"input_value",name:"id",check:null,align:"RIGHT"}]	
	,message2:"%1"
	,args2:[{type:"field_dropdown",name:"func",options:[["%{BKY_TABLE_INSERTFIRSTROW}","insertfirst"],["%{BKY_TABLE_INSERTONEROW}","insertone"],["%{BKY_TABLE_INSERTLASTROW}","insertlast"],["%{BKY_TABLE_ROW_UPDATE}","update"]],align:"RIGHT"}]
	,message3:"%1 %2"	
	,args3:[{type:"field_label_serializable",name:"row_label",text:"%{BKY_TABLE_ROW}"},{type:"input_value",name:"row",check:null,align:"RIGHT"}]	
	,message4:"%{BKY_TABLE_COL}1 %1"	
	,args4:[{type:"input_value",name:"VALUE",check:null,align:"RIGHT"}]	
	,previousStatement:null
	,nextStatement:null
	,"extensions": ["dropdown_row"]
	,colour:240
	,inputsInline:0
	,mutator:"table_insert_row_mutator"
	}
	,{type:"table_insert_row_main"
	,message0:"%{BKY_TABLE_COL}"
	,nextStatement:null
	,enableContextMenu:!1
	,style:"logic_blocks"
	}	
	,{type:"table_insert_row_value"
	,message0:"%{BKY_TABLE_COL}"
	,previousStatement:null
	,nextStatement:null
	,enableContextMenu:!1
	,style:"logic_blocks"
	}
]);

Blockly.Extensions.register('dropdown_row',
  function init() {
    this.onchange = function(event) {
		if (event.type=="finished_loading") {
			var func = this.getFieldValue("func");
			if (func=="insertfirst"||func=="insertlast") {
				this.getInput("row").setVisible(false);
				this.getField("row_label").setVisible(false);
			} else {
				this.getInput("row").setVisible(true);
				this.getField("row_label").setVisible(true);
			}	
			this.render();
		}		
		if (event.name) {
			if (event.name=="func"&&event.type=="change") {
				if (event.newValue=="insertfirst"||event.newValue=="insertlast") {
					this.getInput("row").setVisible(false);
					this.getField("row_label").setVisible(false);
				} else {
					this.getInput("row").setVisible(true);
					this.getField("row_label").setVisible(true);
				}
				this.render();
			}
		}
	}
  }
)

var module$contents$Blockly$blocks$TABLE_ROW_MUTATOR_MIXIN={
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
		var b=a.newBlock("table_insert_row_main");
		b.initSvg();
		
		for(var c=b.nextConnection,d=1;d<=this.allCount_;d++){
			var e=a.newBlock("table_insert_row_value");
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
				case "table_insert_row_value":
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
			.appendField(Blockly.Msg["TABLE_COL"]+(a+1))
			.setAlign(Blockly.ALIGN_RIGHT)
	}
	,reconnectChildBlocks_:function(a,b){	
		for(var d=1;d<=this.allCount_;d++)
			Blockly.icons.MutatorIcon.reconnect(a[d],this,String.fromCharCode(d+65));
	}
};
Blockly.Extensions.registerMutator("table_insert_row_mutator",module$contents$Blockly$blocks$TABLE_ROW_MUTATOR_MIXIN,null,["table_insert_row_value"]);

Blockly.defineBlocksWithJsonArray([
	{type:"table_insert_col"
	,lastDummyAlign0:"RIGHT"
	,message0:"%{BKY_TABLE} %{BKY_TABLE_COL}"
	,message1:"%{BKY_TABLE_ID} %1"	
	,args1:[{type:"input_value",name:"id",check:null,align:"RIGHT"}]	
	,message2:"%1"
	,args2:[{type:"field_dropdown",name:"func",options:[["%{BKY_TABLE_INSERTFIRSTCOL}","insertfirst"],["%{BKY_TABLE_INSERTONECOL}","insertone"],["%{BKY_TABLE_INSERTLASTCOL}","insertlast"],["%{BKY_TABLE_COL_UPDATE}","update"]],align:"RIGHT"}]
	,message3:"%1 %2"	
	,args3:[{type:"field_label_serializable",name:"col_label",text:"%{BKY_TABLE_COL}"},{type:"input_value",name:"col",check:null,align:"RIGHT"}]	
	,message4:"%{BKY_TABLE_ROW}1 %1"	
	,args4:[{type:"input_value",name:"VALUE",check:null,align:"RIGHT"}]	
	,previousStatement:null
	,nextStatement:null
	,"extensions": ["dropdown_col"]
	,colour:240
	,inputsInline:0
	,mutator:"table_insert_col_mutator"
	}
	,{type:"table_insert_col_main"
	,message0:"%{BKY_TABLE_ROW}"
	,nextStatement:null
	,enableContextMenu:!1
	,style:"logic_blocks"
	}	
	,{type:"table_insert_col_value"
	,message0:"%{BKY_TABLE_ROW}"
	,previousStatement:null
	,nextStatement:null
	,enableContextMenu:!1
	,style:"logic_blocks"
	}
]);

Blockly.Extensions.register('dropdown_col',
  function init() {		
    this.onchange = function(event) {
		if (event.type=="finished_loading") {
			var func = this.getFieldValue("func");
			if (func=="insertfirst"||func=="insertlast") {
				this.getInput("col").setVisible(false);
				this.getField("col_label").setVisible(false);
			} else {
				this.getInput("col").setVisible(true);
				this.getField("col_label").setVisible(true);
			}	
			this.render();
		}		
		if (event.name) {
			if (event.name=="func"&&event.type=="change") {
				if (event.newValue=="insertfirst"||event.newValue=="insertlast") {
					this.getInput("col").setVisible(false);
					this.getField("col_label").setVisible(false);
				} else {
					this.getInput("col").setVisible(true);
					this.getField("col_label").setVisible(true);
				}
				this.render();
			}
		}
	}
  }
)

var module$contents$Blockly$blocks$TABLE_COL_MUTATOR_MIXIN={
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
		var b=a.newBlock("table_insert_col_main");
		b.initSvg();
		
		for(var c=b.nextConnection,d=1;d<=this.allCount_;d++){
			var e=a.newBlock("table_insert_col_value");
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
				case "table_insert_col_value":
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
			.appendField(Blockly.Msg["TABLE_ROW"]+(a+1))
			.setAlign(Blockly.ALIGN_RIGHT)
	}
	,reconnectChildBlocks_:function(a,b){	
		for(var d=1;d<=this.allCount_;d++)
			Blockly.icons.MutatorIcon.reconnect(a[d],this,String.fromCharCode(d+65));
	}
};
Blockly.Extensions.registerMutator("table_insert_col_mutator",module$contents$Blockly$blocks$TABLE_COL_MUTATOR_MIXIN,null,["table_insert_col_value"]);


Blockly.Blocks['table_create'] = {
  init: function() {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE)   
      .appendField(Blockly.Msg.TABLE_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_ID);
  this.appendValueInput("trcount_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TRCOUNT);    
  this.appendValueInput("tdcount_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TDCOUNT);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_HEIGHT); 	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP); 
  this.appendValueInput("bgcolor_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BGCOLOR); 	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TABLE_BORDERSTYLE)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.PROPERTY_SOLID,"solid"], 
	  [Blockly.Msg.PROPERTY_DASHED,"dashed"], 
	  [Blockly.Msg.PROPERTY_DOUBLE,"double"], 
	  [Blockly.Msg.PROPERTY_DOTTED,"dotted"], 
	  [Blockly.Msg.PROPERTY_GROOVE,"groove"], 
	  [Blockly.Msg.PROPERTY_RIDGE,"ridge"], 
	  [Blockly.Msg.PROPERTY_INSET,"inset"], 
	  [Blockly.Msg.PROPERTY_OUTSET,"outset"],  
	  [Blockly.Msg.PROPERTY_NONE,"none"], 
	  [Blockly.Msg.PROPERTY_HIDDEN,"hidden"]
	  ]), "borderstyle_");  
  this.appendValueInput("borderwidth_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERWIDTH);       
  this.appendValueInput("bordercolor_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERCOLOR);          
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(240);
  }
};

Blockly.Blocks['table_set'] = {
  init: function() {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE)
	  .appendField(Blockly.Msg.TABLE_SET);  
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_ID);     
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.PROPERTY_BORDERSTYLE,"borderstyle"], 
	  [Blockly.Msg.PROPERTY_BORDERWIDTH,"borderwidth"], 
	  [Blockly.Msg.PROPERTY_BORDERCOLOR,"bordercolor"], 
	  [Blockly.Msg.PROPERTY_CELLWIDTH,"cellwidth"], 
	  [Blockly.Msg.PROPERTY_CELLHEIGHT,"cellheight"], 
	  [Blockly.Msg.PROPERTY_CELLCOLOR,"cellcolor"], 
	  [Blockly.Msg.PROPERTY_BACKGROUND,"background"], 
	  [Blockly.Msg.PROPERTY_BACKGROUNDIMAGE,"backgroundimage"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_STYLE,"style"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(240);
  }
};

Blockly.Blocks['table_get'] = {
  init: function () {   
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE);
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendDummyInput() 
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.PROPERTY_ONCLICK_COLUMN_ROW,"onclick[Column,Row]"], 
	  [Blockly.Msg.PROPERTY_ONCLICKIMAGE,"onclickImage"], 
	  [Blockly.Msg.PROPERTY_COLUMNS,"columns"], 
	  [Blockly.Msg.PROPERTY_ROWS,"rows"], 
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.PROPERTY_BORDERSTYLE,"borderstyle"], 
	  [Blockly.Msg.PROPERTY_BORDERWIDTH,"borderwidth"], 
	  [Blockly.Msg.PROPERTY_BORDERCOLOR,"bordercolor"], 
	  [Blockly.Msg.PROPERTY_BACKGROUND,"background"], 
	  [Blockly.Msg.PROPERTY_BACKGROUNDIMAGE,"backgroundimage"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.ELEMENTID,"id"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(240);
  }
};

Blockly.Blocks['table_clear'] = {
  init: function () {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE)
	  .appendField(Blockly.Msg.TABLE_CLEAR); 	  
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_ID);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(240);
  }
};

Blockly.Blocks['table_change_colsrows'] = {
  init: function () {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE)
	  .appendField(Blockly.Msg.TABLE_CHANGE_COLSROWS);       
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)   
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.PROPERTY_ADD,"add"], 
	  [Blockly.Msg.PROPERTY_REMOVE,"remove"]
	  ]), "cmd_");  
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(" ")    
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.PROPERTY_COL,"col"], 
	  [Blockly.Msg.PROPERTY_ROW,"row"]
	  ]), "target_");     
  this.appendValueInput("index_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT);   
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(240);
  }
};

Blockly.Blocks['table_td_set'] = {
  init: function() {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE)
	  .appendField(Blockly.Msg.TABLE_TD_SET);	  
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y);       
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.PROPERTY_TEXTALIGN,"textalign"], 
	  [Blockly.Msg.PROPERTY_BACKGROUND,"background"], 
	  [Blockly.Msg.PROPERTY_INNERHTML,"innerHTML"], 
	  [Blockly.Msg.PROPERTY_STYLE,"style"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(240);
  }
};

Blockly.Blocks['table_border_set'] = {
  init: function() {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE)
	  .appendField(Blockly.Msg.TABLE_BORDER_SET);	  
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.TABLE_BORDERSTYLE)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.PROPERTY_SOLID,"solid"], 
	  [Blockly.Msg.PROPERTY_DASHED,"dashed"], 
	  [Blockly.Msg.PROPERTY_DOUBLE,"double"], 
	  [Blockly.Msg.PROPERTY_DOTTED,"dotted"], 
	  [Blockly.Msg.PROPERTY_GROOVE,"groove"], 
	  [Blockly.Msg.PROPERTY_RIDGE,"ridge"], 
	  [Blockly.Msg.PROPERTY_INSET,"inset"], 
	  [Blockly.Msg.PROPERTY_OUTSET,"outset"],  
	  [Blockly.Msg.PROPERTY_NONE,"none"], 
	  [Blockly.Msg.PROPERTY_HIDDEN,"hidden"]
	  ]), "borderstyle_");  
  this.appendValueInput("borderwidth_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERWIDTH);       
  this.appendValueInput("bordercolor_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERCOLOR);       
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(240);
  }
};

Blockly.Blocks['table_td_border_set'] = {
  init: function() {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE)
	  .appendField(Blockly.Msg.TABLE_TD_BORDER_SET);    
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)   
      .appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg.PROPERTY_CELL,"cell"], 
		  [Blockly.Msg.PROPERTY_COLUMN,"col"], 
		  [Blockly.Msg.PROPERTY_ROW,"row"],
		  [Blockly.Msg.PROPERTY_CELL_ALL,"all"]
	  ], this.validate), "target_");	  
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y);       
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TABLE_BORDERSTYLE)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.PROPERTY_SOLID,"solid"], 
	  [Blockly.Msg.PROPERTY_DASHED,"dashed"], 
	  [Blockly.Msg.PROPERTY_DOUBLE,"double"], 
	  [Blockly.Msg.PROPERTY_DOTTED,"dotted"], 
	  [Blockly.Msg.PROPERTY_GROOVE,"groove"], 
	  [Blockly.Msg.PROPERTY_RIDGE,"ridge"], 
	  [Blockly.Msg.PROPERTY_INSET,"inset"], 
	  [Blockly.Msg.PROPERTY_OUTSET,"outset"],  
	  [Blockly.Msg.PROPERTY_NONE,"none"], 
	  [Blockly.Msg.PROPERTY_HIDDEN,"hidden"]
	  ], this.validate), "borderstyle_");  
  this.appendValueInput("borderwidth_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERWIDTH);       
  this.appendValueInput("bordercolor_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERCOLOR);       
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(240);
  },
  validate: function(newValue) {
	 const block = this.sourceBlock_;
	 if (!block) return;
	 if (newValue=="col") {
		 block.getInput("x_").setVisible(true);
		 block.getInput("y_").setVisible(false);
	 }
	 else if (newValue=="row") {
		 block.getInput("x_").setVisible(false);
		 block.getInput("y_").setVisible(true);
	 }	
	 else if (newValue=="all") {
		 block.getInput("x_").setVisible(false);
		 block.getInput("y_").setVisible(false);
	 }		 
	 else {
		 block.getInput("x_").setVisible(true);
		 block.getInput("y_").setVisible(true);	 
	 }	 
  } 
};

Blockly.Blocks['table_td_get'] = {
  init: function () {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE)
	  .appendField(Blockly.Msg.TABLE_TD_GET);	  
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PROPERTY)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.PROPERTY_BACKGROUND,"background"], 
	  [Blockly.Msg.PROPERTY_TEXT_SHOW,"text"], 
	  [Blockly.Msg.PROPERTY_INNERHTML,"innerHTML"], 
	  [Blockly.Msg.PROPERTY_IMAGE,"image"], 
	  [Blockly.Msg.PROPERTY_CHILDLENGTH,"childlength"], 
	  [Blockly.Msg.PROPERTY_CHILDID,"childid"], 
	  [Blockly.Msg.PROPERTY_TDID,"tdid"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(240);
  }
};

Blockly.Blocks['table_td_onclick_do'] = {
  init: function () {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE);	  
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_ID);     
  this.appendValueInput("x_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_TD_Y); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.TABLE_TD_ONCLICK_DO);    
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(240);
  }
};

Blockly.Blocks['table_td_insert_img'] = {
  init: function () {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE)
	  .appendField(Blockly.Msg.TABLE_TD_INSERT_IMAGE);        
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y); 
  this.appendValueInput("imgid_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg.IMAGE)
      .appendField(Blockly.Msg.ID);      
  this.appendValueInput("url_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg.IMAGE)
      .appendField(Blockly.Msg.URL);     
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg.IMAGE)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg.IMAGE)
      .appendField(Blockly.Msg.HEIGHT);   
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(240);
  }
};

Blockly.Blocks['table_td_img_move'] = {
  init: function () {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE);	  
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_ID);
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)   
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.IMAGE,"image"], 
	  [Blockly.Msg.CANVAS,"canvas"]
	  ]), "element_");  	  
  this.appendValueInput("imgid_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg.TABLE_TD_IMAGE_MOVE)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y);     
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(240);
  }
};

Blockly.Blocks['table_td_canvas_move'] = {
  init: function () {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE)
	  .appendField(Blockly.Msg.TABLE_TD_CANVAS_MOVE);	  
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendValueInput("canvasid_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_ID);
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y);     
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(240);
  }
};

Blockly.Blocks['table_td_copy_move'] = {
  init: function () {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE)
	  .appendField(Blockly.Msg.TABLE_TD_COPY_MOVE);       
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y);     
this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.PROPERTY_COPYTO,"copy"], 
	  [Blockly.Msg.PROPERTY_MOVETO,"move"]
	  ]), "property_");
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y);       
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(240);
  }
};

Blockly.Blocks['table_td_img_get'] = {
  init: function () {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE)
	  .appendField(Blockly.Msg.TABLE_TD_IMAGE_GET);	  
  this.appendValueInput("imgid_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.IMAGE_ID); 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.PROPERTY_COLUMN,"column"], 
	  [Blockly.Msg.PROPERTY_ROW,"row"], 
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.PROPERTY_NATURALWIDTH,"naturalwidth"], 
	  [Blockly.Msg.PROPERTY_NATURALHEIGHT,"naturalheight"], 
	  [Blockly.Msg.PROPERTY_IMAGEID,"imageid"]
	  ]), "property_");  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(240);
  }
};

Blockly.Blocks['table_td_insert_text'] = {
  init: function () {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE)
	  .appendField(Blockly.Msg.TABLE_TD_INSERT_TEXT);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_ID);
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)   
      .appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg.PROPERTY_CELL,"cell"], 
		  [Blockly.Msg.PROPERTY_COLUMN,"col"], 
		  [Blockly.Msg.PROPERTY_ROW,"row"]
	  ], this.validate), "target_");	  
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y); 
  this.appendValueInput("text_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CONTEXT);
  this.appendValueInput("fontname_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTNAME);    
  this.appendValueInput("fontsize_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTSIZE); 
  this.appendValueInput("color_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTCOLOR);       
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(240);
  this.setHelpUrl("https://tw.piliapp.com/symbol/");
  },
  validate: function(newValue) {
	 const block = this.sourceBlock_;
	 if (!block) return;
	 if (newValue=="col") {
		 block.getInput("x_").setVisible(true);
		 block.getInput("y_").setVisible(false);
	 }
	 else if (newValue=="row") {
		 block.getInput("x_").setVisible(false);
		 block.getInput("y_").setVisible(true);
	 }	 
	 else {
		 block.getInput("x_").setVisible(true);
		 block.getInput("y_").setVisible(true);	 
	 }	 
  } 
};

Blockly.Blocks['table_td_insert_element'] = {
  init: function () {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE)
	  .appendField(Blockly.Msg.TABLE_TD_INSERT_ELEMENT);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_ID);
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)   
      .appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg.PROPERTY_CELL,"cell"], 
		  [Blockly.Msg.PROPERTY_COLUMN,"col"], 
		  [Blockly.Msg.PROPERTY_ROW,"row"]
	  ], this.validate), "target_");	  
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y);
  this.appendDummyInput()
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("ID: "+Blockly.Msg.TABLE_ID+"_"+Blockly.Msg.PROPERTY_ROW+"_"+Blockly.Msg.PROPERTY_COL);
  this.appendDummyInput("first_")
	  .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg.TABLE_FIRSTROW_Y,"0"],
		  [Blockly.Msg.TABLE_FIRSTROW_N,"1"]
	  ]), "firstrow_");	  
  this.appendDummyInput()
	  .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg.ELEMENT_IMAGE,"image"],
		  [Blockly.Msg.ELEMENT_CANVAS,"canvas"],
		  [Blockly.Msg.ELEMENT_BUTTON,"button"],
		  [Blockly.Msg.ELEMENT_COLOR,"color"],
		  [Blockly.Msg.ELEMENT_SELECT,"select"],
		  [Blockly.Msg.ELEMENT_RANGE,"range"],
		  [Blockly.Msg.ELEMENT_TEXT,"text"],[
		  Blockly.Msg.ELEMENT_DIV,"div"],
		  [Blockly.Msg.ELEMENT_A,"a"],
		  [Blockly.Msg.ELEMENT_CHECKBOX,"checkbox"],
		  [Blockly.Msg.ELEMENT_TEXTAREA,"textarea"],
		  [Blockly.Msg.ELEMENT_NUMBER,"number"],
		  [Blockly.Msg.ELEMENT_DATE,"date"],
		  [Blockly.Msg.ELEMENT_TIME,"time"],
		  [Blockly.Msg.ELEMENT_DATETIME,"datetime"],
		  [Blockly.Msg.ELEMENT_PROGRESS,"progress"],
		  [Blockly.Msg.ELEMENT_PASSWORD,"password"]
	  ]), "element_");	  
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(240);
  },
  validate: function(newValue) {
	 const block = this.sourceBlock_;
	 if (!block) return;
	 if (newValue=="col") {
		 block.getInput("x_").setVisible(true);
		 block.getInput("y_").setVisible(false);
		 block.getInput("first_").setVisible(true);
	 }
	 else if (newValue=="row") {
		 block.getInput("x_").setVisible(false);
		 block.getInput("y_").setVisible(true);
		 block.getInput("first_").setVisible(true);
	 }	 
	 else {
		 block.getInput("x_").setVisible(true);
		 block.getInput("y_").setVisible(true);
		 block.getInput("first_").setVisible(false);		 
	 }	 
  }
};

Blockly.Blocks['table_td_insert_element_function'] = {
  init: function () {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE)
	  .appendField(Blockly.Msg.TABLE_TD_INSERT_ELEMENT);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_ID);  
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.ELEMENT)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.ELEMENT_IMAGE,"image"],
	  [Blockly.Msg.ELEMENT_CANVAS,"canvas"],
	  [Blockly.Msg.ELEMENT_BUTTON,"button"],
	  [Blockly.Msg.ELEMENT_COLOR,"color"],
	  [Blockly.Msg.ELEMENT_SELECT,"select"],
	  [Blockly.Msg.ELEMENT_RANGE,"range"],
	  [Blockly.Msg.ELEMENT_TEXT,"text"],[
	  Blockly.Msg.ELEMENT_DIV,"div"],
	  [Blockly.Msg.ELEMENT_A,"a"],
	  [Blockly.Msg.ELEMENT_CHECKBOX,"checkbox"],
	  [Blockly.Msg.ELEMENT_TEXTAREA,"textarea"],
	  [Blockly.Msg.ELEMENT_NUMBER,"number"],
	  [Blockly.Msg.ELEMENT_DATE,"date"],
	  [Blockly.Msg.ELEMENT_TIME,"time"],
	  [Blockly.Msg.ELEMENT_DATETIME,"datetime"],
	  [Blockly.Msg.ELEMENT_PROGRESS,"progress"],
	  [Blockly.Msg.ELEMENT_PASSWORD,"password"]
	  ]), "element");
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.PROPERTY_ONCLICK_FUNCTION,"click"],	  
		[Blockly.Msg.PROPERTY_ONCHANGE_FUNCTION,"change"]
	  ]), "event");
  this.appendDummyInput()
	  .appendField(Blockly.Msg.PROPERTY_FUNCTION_NAME)
      .appendField(new Blockly.FieldTextInput(""), "fname"); 	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(240);
  }
};

Blockly.Blocks['table_td_insert_element_function_get'] = {
  init: function () {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE)
	  .appendField(Blockly.Msg.TABLE_TD_INSERT_ELEMENT);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.TABLE_ID,"id"],
	  [Blockly.Msg.TABLE_COL,"col"],
	  [Blockly.Msg.TABLE_ROW,"row"],
	  [Blockly.Msg.PROPERTY_ELEMENT,"element"]
	  ]), "property");	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(240);
  }
};

Blockly.Blocks['table_td_clear'] = {
  init: function () {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE)
	  .appendField(Blockly.Msg.TABLE_TD_CLEAR);	  
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y); 
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(240);
  }
};

Blockly.Blocks['table_delete'] = {
  init: function () {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE)
	  .appendField(Blockly.Msg.TABLE_DELETE);	  
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_ID);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(240);
  }
};

Blockly.Blocks['music_create'] = {
  init: function() {
  this.appendValueInput("url_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MUSIC_CREATE)
      .appendField(Blockly.Msg.URL);
  this.appendValueInput("length_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MUSIC_LENGTH);
  this.appendValueInput("loop_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MUSIC_LOOP);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(350);
  }
};

Blockly.Blocks['music_delete'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MUSIC_DELETE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(350);
  }
};

Blockly.Blocks['canvas_create'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_CREATE);    
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.ID); 
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);  
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(270);
  }
};

Blockly.Blocks['canvas_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.CANVAS_ID);    
  this.appendDummyInput() 
      .appendField(Blockly.Msg.SET)    
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_MOVEX,"moveX"], 
	  [Blockly.Msg.PROPERTY_MOVEY,"moveY"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.PROPERTY_BORDER,"border"], 
	  [Blockly.Msg.PROPERTY_BACKGROUNDCOLOR,"backgroundColor"], 
	  [Blockly.Msg.PROPERTY_STYLE,"style"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(270);
  }
};

Blockly.Blocks['canvas_get'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CANVAS_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.GET)    
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.PROPERTY_EXIST,"exist"], 
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.PROPERTY_BORDER,"border"], 
	  [Blockly.Msg.PROPERTY_BACKGROUNDCOLOR,"backgroundColor"], 
	  [Blockly.Msg.ELEMENTID,"id"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(270);
  }
};

Blockly.Blocks['canvas_line'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_LINE);     
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("linewidth_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(Blockly.Msg.CANVAS_LINEWIDTH);    
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("x1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X1);    
  this.appendValueInput("y1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y1);  
  this.appendValueInput("color_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOR);  
  this.appendValueInput("rotate_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);     
  this.appendValueInput("globalAlpha_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);      
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(270);
  }
};

Blockly.Blocks['canvas_rect'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_RECT);      
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("linewidth_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)   
      .appendField(Blockly.Msg.CANVAS_LINEWIDTH);    
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendValueInput("fill_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_FILL);     
  this.appendValueInput("color_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOR);   
  this.appendValueInput("rotate_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);     
  this.appendValueInput("globalAlpha_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);     
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(270);
  }
};

Blockly.Blocks['canvas_arc'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_ARC);      
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("linewidth_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)   
      .appendField(Blockly.Msg.CANVAS_LINEWIDTH);    
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("r_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_R);    
  this.appendValueInput("sAngle_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SANGLE);  
  this.appendValueInput("eAngle_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_EANGLE);
  this.appendValueInput("counterclockwise_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_COUNTERCLOCKWISE);
  this.appendValueInput("fill_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_FILL);      
  this.appendValueInput("color_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOR);  
  this.appendValueInput("rotate_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);     
  this.appendValueInput("globalAlpha_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);     
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(270);
  }
};

Blockly.Blocks['canvas_img_url'] = {
  init: function() {
  this.appendDummyInput() 
      .appendField(Blockly.Msg.CANVAS_IMG);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.URL,"url"], [Blockly.Msg.IMAGE+Blockly.Msg.ID,"imageid"]]), "source_");
  this.appendValueInput("url_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(270);
  }
};

Blockly.Blocks['canvas_img'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_IMG);      
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);  
  this.appendValueInput("sx_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SX);
  this.appendValueInput("sy_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SY);
  this.appendValueInput("swidth_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SWIDTH);
  this.appendValueInput("sheight_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SHEIGHT);     
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT); 
  this.appendValueInput("rotate_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);     
  this.appendValueInput("globalAlpha_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);     
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(270);
  }
};

Blockly.Blocks['canvas_capturevideo'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_CAPTUREVIDEO);      
  this.appendValueInput("canvasid_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_ID); 
  this.appendValueInput("videoid_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VIDEO_ID);   
  this.appendValueInput("sx_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SX);
  this.appendValueInput("sy_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SY);
  this.appendValueInput("swidth_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SWIDTH);
  this.appendValueInput("sheight_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SHEIGHT);     
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT); 
  this.appendValueInput("rotate_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);     
  this.appendValueInput("globalAlpha_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);     
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(270);
  }
};

Blockly.Blocks['canvas_text'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_TEXT);     
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("text_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)   
      .appendField(Blockly.Msg.CONTEXT);    
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("fontname_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTNAME);    
  this.appendValueInput("fontsize_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTSIZE);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEXTALIGN)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_START,"start"], [Blockly.Msg.PROPERTY_END,"end"], [Blockly.Msg.PROPERTY_CENTER,"center"], [Blockly.Msg.PROPERTY_LEFT,"left"], [Blockly.Msg.PROPERTY_RIGHT,"right"]]), "textalign_");
  this.appendValueInput("fill_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_FILL);     
  this.appendValueInput("color_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTCOLOR); 
  this.appendValueInput("rotate_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);     
  this.appendValueInput("globalAlpha_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);     
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(270);
  }
};

Blockly.Blocks['canvas_quadraticcurve'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_QUADRATICCURVE);     
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.ID);  
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)     
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("cp1x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_CP1X);
  this.appendValueInput("cp1y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_CP1Y);    
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X);    
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y);  
  this.appendValueInput("linewidth_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.CANVAS_LINEWIDTH);      
  this.appendValueInput("color_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOR);  
  this.appendValueInput("fill_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_FILL);      
  this.appendValueInput("rotate_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);     
  this.appendValueInput("globalAlpha_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);     
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(270);
  }
};

Blockly.Blocks['canvas_beziercurve'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_BEZIERCURVE);     
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.ID);  
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("cp1x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_CP1X);
  this.appendValueInput("cp1y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_CP1Y); 
  this.appendValueInput("cp2x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_CP2X);
  this.appendValueInput("cp2y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_CP2Y);    
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X);    
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y);  
  this.appendValueInput("linewidth_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.CANVAS_LINEWIDTH);      
  this.appendValueInput("color_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOR);
  this.appendValueInput("fill_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_FILL);      
  this.appendValueInput("rotate_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);     
  this.appendValueInput("globalAlpha_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);     
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(270);
  }
};

Blockly.Blocks['canvas_clearrect'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_CLEARRECT);     
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)     
      .appendField(Blockly.Msg.ID);  
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0); 
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT); 
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(270);
  }
};

Blockly.Blocks['canvas_clear'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_CLEAR);      
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.ID);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(270);
  }
};

Blockly.Blocks['canvas_delete'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_DELETE);      
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.ID);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(270);
  }
};

Blockly.Blocks['canvas_onclick_do'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CANVAS_ID);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_ONCLICK_DO_IF); 
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(270);
  }
};

Blockly.Blocks['canvas_onclick_dom'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CANVAS_ID);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_ONCLICK_DO); 
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(270);
  }
};

Blockly.Blocks['canvas_onclick_get'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CANVAS_ID)
  this.appendDummyInput()
      .appendField(Blockly.Msg.ONCLICK);    
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(270);
  }
};

Blockly.Blocks['canvas_getcolor'] = {
  init: function() {  
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.CANVAS_ID); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_GETCOLOR);       
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(270);
  }
};

Blockly.Blocks['canvas_getimagedata'] = {
  init: function() {  
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.CANVAS_ID); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_GETIMAGEDATA);	  
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);	   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(270);
  }
};

Blockly.Blocks['canvas_setimagedata'] = {
  init: function() {  
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.CANVAS_ID);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_SETIMAGEDATA);	  
  this.appendValueInput("data_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(270);
  }
};

Blockly.Blocks['image_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.IMAGE_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID); 
  this.appendValueInput("url_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.URL);
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);  
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);      
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_create_stream'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.IMAGE_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID); 
  this.appendValueInput("url_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.STREAMURL);
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);  
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);      
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);    
  this.appendDummyInput() 
      .appendField(Blockly.Msg.SET)    
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.URL,"url"], 
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_ROTATE,"rotate"], 
	  [Blockly.Msg.PROPERTY_ROTATEX,"rotateX"], 
	  [Blockly.Msg.PROPERTY_ROTATEY,"rotateY"], 
	  [Blockly.Msg.PROPERTY_ROTATEZ,"rotateZ"], 
	  [Blockly.Msg.PROPERTY_MOVEX,"moveX"], 
	  [Blockly.Msg.PROPERTY_MOVEY,"moveY"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.PROPERTY_STYLE,"style"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_get'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.GET)    
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.PROPERTY_EXIST,"exist"], 
	  [Blockly.Msg.URL,"url"], 
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.PROPERTY_NATURALWIDTH,"naturalwidth"], 
	  [Blockly.Msg.PROPERTY_NATURALHEIGHT,"naturalheight"], 
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_ROTATE,"rotate"], 
	  [Blockly.Msg.PROPERTY_ROTATEX,"rotateX"], 
	  [Blockly.Msg.PROPERTY_ROTATEY,"rotateY"], 
	  [Blockly.Msg.PROPERTY_ROTATEZ,"rotateZ"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.ELEMENTID,"id"]
	  ]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(60);
  }
};

Blockly.Blocks['image_delete'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.DELETE);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(60);
  }
};

Blockly.Blocks['elements_collision'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ELEMENT_TABLE,"table"],[Blockly.Msg.ELEMENT_IMAGE,"image"],[Blockly.Msg.ELEMENT_CANVAS,"canvas"]]), "element1_");    
  this.appendValueInput("id1_")
      .setCheck(null)
      .appendField(Blockly.Msg.ID); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AND)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ELEMENT_TABLE,"table"],[Blockly.Msg.ELEMENT_IMAGE,"image"],[Blockly.Msg.ELEMENT_CANVAS,"canvas"]]), "element2_");    
  this.appendValueInput("id2_")
      .setCheck(null)
      .appendField(Blockly.Msg.ID);    
  this.appendDummyInput()
      .appendField(Blockly.Msg.COLLISION_SIDE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_ANY,"any"], [Blockly.Msg.PROPERTY_UP,"up"], [Blockly.Msg.PROPERTY_DOWN,"down"], [Blockly.Msg.PROPERTY_LEFT,"left"], [Blockly.Msg.PROPERTY_RIGHT,"right"]]), "position_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(350);
  }
};

Blockly.Blocks['elements_collision_color'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ELEMENT_TABLE,"table"],[Blockly.Msg.ELEMENT_IMAGE,"image"],[Blockly.Msg.ELEMENT_CANVAS,"canvas"]]), "element1_");    
  this.appendValueInput("id1_")
      .setCheck(null)
      .appendField(Blockly.Msg.ID); 
  this.appendValueInput("id2_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.AND)     
      .appendField(Blockly.Msg.CANVAS_ID);      
  this.appendValueInput("color_")
      .setCheck(null) 
      .setAlign(Blockly.ALIGN_RIGHT)   
      .appendField(Blockly.Msg.COLOR);
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(350);
  }
};

Blockly.Blocks['point_in_element'] = {
  init: function() {
  this.appendValueInput("x_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField("X");
  this.appendValueInput("y_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField("Y");
  this.appendDummyInput()  
	  .appendField(Blockly.Msg.POINT_IN_ELEMENT)
      .appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg.ELEMENT_TABLE,"table"],
		  [Blockly.Msg.ELEMENT_IMAGE,"image"],
		  [Blockly.Msg.ELEMENT_CANVAS,"canvas"],
		  [Blockly.Msg.ELEMENT_BUTTON,"button"],
		  [Blockly.Msg.ELEMENT_COLOR,"color"],
		  [Blockly.Msg.ELEMENT_SELECT,"select"],
		  [Blockly.Msg.ELEMENT_RANGE,"range"],
		  [Blockly.Msg.ELEMENT_TEXT,"text"],[
		  Blockly.Msg.ELEMENT_DIV,"div"],
		  [Blockly.Msg.ELEMENT_IFRAME,"iframe"],
		  [Blockly.Msg.ELEMENT_A,"a"],
		  [Blockly.Msg.ELEMENT_RADIO,"radio"],
		  [Blockly.Msg.ELEMENT_CHECKBOX,"checkbox"],
		  [Blockly.Msg.ELEMENT_TEXTAREA,"textarea"],
		  [Blockly.Msg.ELEMENT_NUMBER,"number"],
		  [Blockly.Msg.ELEMENT_DATE,"date"],
		  [Blockly.Msg.ELEMENT_TIME,"time"],
		  [Blockly.Msg.ELEMENT_DATETIME,"datetime"],
		  [Blockly.Msg.ELEMENT_PROGRESS,"progress"],
		  [Blockly.Msg.ELEMENT_PASSWORD,"password"]
	  ]), "element_");    
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.ID); 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(350);
  }
};

Blockly.Blocks['image_collision'] = {
  init: function() {
  this.appendValueInput("id1_")
      .setCheck(null)
      .appendField(Blockly.Msg.COLLISION)
      .appendField(Blockly.Msg.ID); 
  this.appendValueInput("id2_")
      .setCheck(null)
      .appendField(Blockly.Msg.AND)
      .appendField(Blockly.Msg.ID);    
  this.appendDummyInput()
      .appendField(Blockly.Msg.COLLISION_SIDE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_ANY,"any"], [Blockly.Msg.PROPERTY_UP,"up"], [Blockly.Msg.PROPERTY_DOWN,"down"], [Blockly.Msg.PROPERTY_LEFT,"left"], [Blockly.Msg.PROPERTY_RIGHT,"right"]]), "position_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(60);
  }
};

Blockly.Blocks['image_boundary'] = {
  init: function() {
  this.appendValueInput("left_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.BOUNDARY)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("top_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.HEIGHT);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(350);
  }
};

Blockly.Blocks['image_boundary_collision'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);       
  this.appendDummyInput()
      .appendField(Blockly.Msg.BOUNDARY_COLLISION)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_ANY,"any"], [Blockly.Msg.PROPERTY_UP,"up"], [Blockly.Msg.PROPERTY_DOWN,"down"], [Blockly.Msg.PROPERTY_LEFT,"left"], [Blockly.Msg.PROPERTY_RIGHT,"right"]]), "property_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(60);
  }
};

Blockly.Blocks['image_boundary_collision_do'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);      
  this.appendDummyInput()
      .appendField(Blockly.Msg.BOUNDARY_COLLISION_DO) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_ANY,"any"], [Blockly.Msg.PROPERTY_UP,"up"], [Blockly.Msg.PROPERTY_DOWN,"down"], [Blockly.Msg.PROPERTY_LEFT,"left"], [Blockly.Msg.PROPERTY_RIGHT,"right"]]), "property_");
  this.appendStatementInput("do_");
  this.setInputsInline(true);    
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_sys_get'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.SYS_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.WIDTH,"screen_width"], [Blockly.Msg.HEIGHT,"screen_height"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(350);
  }
};

Blockly.Blocks['image_onclick_listener'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ONCLICK_LISTENER);
    this.appendStatementInput("do_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['image_onload_listener'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ONCLICK_LISTENER);
    this.appendStatementInput("do_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['image_onclick_do'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);
  this.appendDummyInput()
      .appendField(Blockly.Msg.IMAGE_ONCLICK_DO_IF);  
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_onclick_dom'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);
  this.appendDummyInput()
      .appendField(Blockly.Msg.IMAGE_ONCLICK_DO);  
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_onload_dom'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);
  this.appendDummyInput()
      .appendField(Blockly.Msg.IMAGE_ONLOAD_DO);  
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_onclick_get'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.ONCLICK);    
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(60);
  }
};

Blockly.Blocks['image_move'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);
  this.appendDummyInput()
      .appendField(Blockly.Msg.IMAGE_MOVE_DIRECTION)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_UP,"up"], [Blockly.Msg.PROPERTY_DOWN,"down"], [Blockly.Msg.PROPERTY_LEFT,"left"], [Blockly.Msg.PROPERTY_RIGHT,"right"]]), "property_");   
  this.appendValueInput("step_")
      .setCheck("Number")
      .appendField(Blockly.Msg.IMAGE_MOVE_STEP);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_resize'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);
  this.appendValueInput("percentage_")
      .setCheck("Number")
      .appendField(Blockly.Msg.IMAGE_RESIZE); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.PERCENTAGE);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['mouse_coordinate_get_start'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOUSE_COORDINATE_GET_START);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(290);
  }
};

Blockly.Blocks['mouse_coordinate_get'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOUSE_COORDINATE_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_PAGEX,"pageX"], [Blockly.Msg.PROPERTY_PAGEY,"pageY"], [Blockly.Msg.PROPERTY_OFFSETX,"offsetX"], [Blockly.Msg.PROPERTY_OFFSETY,"offsetY"], [Blockly.Msg.PROPERTY_CLIENTX,"clientX"], [Blockly.Msg.PROPERTY_CLIENTY,"clientY"], [Blockly.Msg.PROPERTY_SCREENX,"screenX"], [Blockly.Msg.PROPERTY_SCREENY,"screenY"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(290);
  this.setHelpUrl("https://www.w3schools.com/jsref/obj_mouseevent.asp");
  }
};

Blockly.Blocks['document_timer_novar'] = {
  init: function () {
    this.appendValueInput("intervals_")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(Blockly.Msg.DOCUMENT_TIMER);
    this.setInputsInline(true);    
    this.appendStatementInput("do_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(110);
  }
};

Blockly.Blocks['document_timer_once_novar'] = {
  init: function () {
    this.appendValueInput("intervals_")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(Blockly.Msg.DOCUMENT_TIMER_ONCE);
    this.setInputsInline(true);    
    this.appendStatementInput("do_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(110);
  }
};

Blockly.Blocks['document_timer'] = {
  init: function () {
    this.appendValueInput("intervals_")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(new Blockly.FieldVariable(), 'myTimer_')
        .appendField(Blockly.Msg.DOCUMENT_TIMER);  
    this.setInputsInline(true);    
    this.appendStatementInput("do_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(110);
  }
};

Blockly.Blocks['document_timer_once'] = {
  init: function () {
    this.appendValueInput("intervals_")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(new Blockly.FieldVariable(), 'myTimerOnce_')
        .appendField(Blockly.Msg.DOCUMENT_TIMER_ONCE);   
    this.setInputsInline(true);    
    this.appendStatementInput("do_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(110);
  }
};

Blockly.Blocks['document_timer_stop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DOCUMENT_TIMER_STOP)
      .appendField(new Blockly.FieldVariable(), 'myTimer_');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(110);
  }
};

Blockly.Blocks['text_to_number'] = {
  init: function() {
    this.appendValueInput("value_text_")
        .setCheck(null);	  
	this.appendDummyInput()
		  .appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg.TEXT_TO_NUMBER,"number"],
		  [Blockly.Msg.TEXT_TO_BASE64,"btoa"],
		  [Blockly.Msg.BASE64_TO_TEXT,"atob"]
		]), "type");	  
    this.setInputsInline(true); 		
    this.setOutput(true);  
    this.setColour(Blockly.Msg["TEXTS_HUE"]);
  }  
};

Blockly.Blocks['aes_encryption'] = {
  init: function() {
    this.appendValueInput("value_text_")
        .setCheck(null);	  
	this.appendDummyInput()
		  .appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg.AES_ENCODE,"encode"],
		  [Blockly.Msg.AES_DECODE,"decode"]
		]), "type");
    this.appendValueInput("value_key_")
        .setCheck(null)
		.appendField(Blockly.Msg.AES_KEY);		
    this.setInputsInline(true); 		
    this.setOutput(true);  
    this.setColour(Blockly.Msg["TEXTS_HUE"]);
  }  
};

Blockly.Blocks['loop_break'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOOP_BREAK);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['loop_continue'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOOP_CONTINUE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['function_return'] = {
  init: function () {
    this.appendValueInput("value_")
        .setCheck(null)
        .appendField(Blockly.Msg.FUNCTION_RETURN);   
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Msg["PROCEDURES_HUE"]);
  }
};

Blockly.Blocks['gameelements_1'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOAD_JS); 
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['move_to_mouse'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOVE_TO_MOUSE);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_CENTER,"center"], [Blockly.Msg.PROPERTY_UP,"up"], [Blockly.Msg.PROPERTY_DOWN,"down"], [Blockly.Msg.PROPERTY_LEFT,"left"], [Blockly.Msg.PROPERTY_RIGHT,"right"], [Blockly.Msg.PROPERTY_UPPERLEFT,"upperLeft"], [Blockly.Msg.PROPERTY_LOWERLEFT,"lowerLeft"], [Blockly.Msg.PROPERTY_UPPERRIGHT,"upperRight"], [Blockly.Msg.PROPERTY_LOWERRIGHT,"lowerRight"]]), "position");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['move_to_coordinate'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOVE_TO_COORDINATE);
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP); 
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['rotatez_degrees'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);  
  this.appendValueInput("degrees_")
      .setCheck("Number"); 
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['rotate_vertical_flip'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.ROTATE_VERTICAL_FLIP);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['rotate_horizontal_flip'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.ROTATE_HORIZONTAL_FLIP);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['button_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.BUTTON_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE); 
  this.appendValueInput("fontsize_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTSIZE); 	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);  
  this.appendValueInput("bgcolor_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.BACKCOLOR);     
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(90);
  }
};

Blockly.Blocks['button_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.BUTTON_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BUTTON_SET) 
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.PROPERTY_BORDERRADIUS,"borderradius"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_BACKGROUND,"background"], 
	  [Blockly.Msg.PROPERTY_VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], 
	  [Blockly.Msg.FONTCOLOR,"color"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.PROPERTY_STYLE,"style"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(90);
  }
};

Blockly.Blocks['button_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.BUTTON_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BUTTON_GET)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_BACKGROUND,"background"], 
	  [Blockly.Msg.PROPERTY_VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], 
	  [Blockly.Msg.FONTCOLOR,"color"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.ELEMENTID,"id"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(90);
  }
};

Blockly.Blocks['button_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.BUTTON_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.BUTTON_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(90);
  }
};

Blockly.Blocks['button_onclick_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.BUTTON_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.BUTTON_ONCLICK);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(90);
  }
};

Blockly.Blocks['async_function'] = {
  init: function () {
  this.appendValueInput("name_")
      .setCheck("String")   
      .appendField(Blockly.Msg.ASYNC_FUNCTION);
  this.appendDummyInput()  
      .appendField("(");    
  this.appendValueInput("parameter_")
      .setCheck(null);    
  this.appendDummyInput()  
      .appendField(")");    
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["PROCEDURES_HUE"]);
  }
};

Blockly.Blocks['call_async_function'] = {
  init: function () {
  this.appendValueInput("name_")
      .setCheck("String")   
      .appendField(Blockly.Msg.CALL_ASYNC_FUNCTION);
  this.appendDummyInput()  
      .appendField("(");
  this.appendValueInput("parameter_")
      .setCheck(null);   
  this.appendDummyInput()  
      .appendField(")");    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["PROCEDURES_HUE"]);
  }
};

Blockly.Blocks['transform_async_function'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TRANSFORM_ASYNC_FUNCTION);    
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["PROCEDURES_HUE"]);
  }
};


Blockly.Blocks['element_event'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.ELEMENT)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.ELEMENT_WINDOW,"window"],
	  [Blockly.Msg.ELEMENT_DOCUMENT,"document"],
	  [Blockly.Msg.ELEMENT_TABLE,"table"],
	  [Blockly.Msg.ELEMENT_IMAGE,"image"],
	  [Blockly.Msg.ELEMENT_CANVAS,"canvas"],
	  [Blockly.Msg.ELEMENT_BUTTON,"button"],
	  [Blockly.Msg.ELEMENT_COLOR,"color"],
	  [Blockly.Msg.ELEMENT_SELECT,"select"],
	  [Blockly.Msg.ELEMENT_RANGE,"range"],
	  [Blockly.Msg.ELEMENT_TEXT,"text"],[
	  Blockly.Msg.ELEMENT_DIV,"div"],
	  [Blockly.Msg.ELEMENT_IFRAME,"iframe"],
	  [Blockly.Msg.ELEMENT_A,"a"],
	  [Blockly.Msg.ELEMENT_RADIO,"radio"],
	  [Blockly.Msg.ELEMENT_CHECKBOX,"checkbox"],
	  [Blockly.Msg.ELEMENT_TEXTAREA,"textarea"],
	  [Blockly.Msg.ELEMENT_NUMBER,"number"],
	  [Blockly.Msg.ELEMENT_DATE,"date"],
	  [Blockly.Msg.ELEMENT_TIME,"time"],
	  [Blockly.Msg.ELEMENT_DATETIME,"datetime"],
	  [Blockly.Msg.ELEMENT_PROGRESS,"progress"],
	  [Blockly.Msg.ELEMENT_PASSWORD,"password"]
	  ],this.validate), "element");
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.ID); 
  this.getInput("id_").setVisible(false);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.ELEMENT_EVENT)
      .appendField(new Blockly.FieldDropdown([
		["abort","abort"],
		["afterprint","afterprint"],
		["animationend","animationend"],
		["animationiteration","animationiteration"],
		["animationstart","animationstart"],
		["beforeprint","beforeprint"],
		["beforeunload","beforeunload"],
		["blur","blur"],
		["canplay","canplay"],
		["canplaythrough","canplaythrough"],
		["change","change"],
		["click","click"],
		["contextmenu","contextmenu"],
		["copy","copy"],
		["cut","cut"],
		["dblclick","dblclick"],
		["drag","drag"],
		["dragend","dragend"],
		["dragenter","dragenter"],
		["dragleave","dragleave"],
		["dragover","dragover"],
		["dragstart","dragstart"],
		["drop","drop"],
		["durationchange","durationchange"],
		["ended","ended"],
		["error","error"],
		["focus","focus"],
		["focusin","focusin"],
		["focusout","focusout"],
		["fullscreenchange","fullscreenchange"],
		["fullscreenerror","fullscreenerror"],
		["hashchange","hashchange"],
		["input","input"],
		["invalid","invalid"],
		["keydown","keydown"],
		["keypress","keypress"],
		["keyup","keyup"],
		["load","load"],
		["loadeddata","loadeddata"],
		["loadedmetadata","loadedmetadata"],
		["loadstart","loadstart"],
		["message","message"],
		["mousedown","mousedown"],
		["mouseenter","mouseenter"],
		["mouseleave","mouseleave"],
		["mousemove","mousemove"],
		["mouseover","mouseover"],
		["mouseout","mouseout"],
		["mouseup","mouseup"],
		["mousewheel","mousewheel"],
		["offline","offline"],
		["online","online"],
		["open","open"],
		["pagehide","pagehide"],
		["pageshow","pageshow"],
		["paste","paste"],
		["pause","pause"],
		["play","play"],
		["playing","playing"],
		["popstate","popstate"],
		["progress","progress"],
		["ratechange","ratechange"],
		["resize","resize"],
		["reset","reset"],
		["scroll","scroll"],
		["search","search"],
		["seeked","seeked"],
		["seeking","seeking"],
		["select","select"],
		["show","show"],
		["stalled","stalled"],
		["storage","storage"],
		["submit","submit"],
		["suspend","suspend"],
		["timeupdate","timeupdate"],
		["toggle","toggle"],
		["touchcancel","touchcancel"],
		["touchend","touchend"],
		["touchmove","touchmove"],
		["touchstart","touchstart"],
		["transitionend","transitionend"],
		["unload","unload"],
		["volumechange","volumechange"],
		["waiting","waiting"],
		["wheel","wheel"]
	  ]), "event");
  this.appendStatementInput("statement");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(170);
  this.setHelpUrl("https://fustyles.github.io/webduino/GameElements_20190131/HTML%20DOM%20EVENTS.txt");
  },
  validate: function(newValue) {
	const block = this.sourceBlock_;
	if (!block) return;
	if (newValue=="window"||newValue=="document") {
		block.getInput("id_").setVisible(false);
	}
	else {
		block.getInput("id_").setVisible(true);
	}
  }
};

Blockly.Blocks['element_event_stop'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.ELEMENT)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.ELEMENT_WINDOW,"window"],
	  [Blockly.Msg.ELEMENT_DOCUMENT,"document"],
	  [Blockly.Msg.ELEMENT_TABLE,"table"],
	  [Blockly.Msg.ELEMENT_IMAGE,"image"],
	  [Blockly.Msg.ELEMENT_CANVAS,"canvas"],
	  [Blockly.Msg.ELEMENT_BUTTON,"button"],
	  [Blockly.Msg.ELEMENT_COLOR,"color"],
	  [Blockly.Msg.ELEMENT_SELECT,"select"],
	  [Blockly.Msg.ELEMENT_RANGE,"range"],
	  [Blockly.Msg.ELEMENT_TEXT,"text"],
	  [Blockly.Msg.ELEMENT_DIV,"div"],
	  [Blockly.Msg.ELEMENT_IFRAME,"iframe"],
	  [Blockly.Msg.ELEMENT_A,"a"],
	  [Blockly.Msg.ELEMENT_RADIO,"radio"],
	  [Blockly.Msg.ELEMENT_CHECKBOX,"checkbox"],
	  [Blockly.Msg.ELEMENT_TEXTAREA,"textarea"],
	  [Blockly.Msg.ELEMENT_NUMBER,"number"],
	  [Blockly.Msg.ELEMENT_DATE,"date"],
	  [Blockly.Msg.ELEMENT_TIME,"time"],
	  [Blockly.Msg.ELEMENT_DATETIME,"datetime"],
	  [Blockly.Msg.ELEMENT_PROGRESS,"progress"],
	  [Blockly.Msg.ELEMENT_PASSWORD,"password"]
	  ],this.validate), "element");
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.ID); 
  this.getInput("id_").setVisible(false);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.ELEMENT_EVENT_STOP)
      .appendField(new Blockly.FieldDropdown([
		["abort","abort"],
		["afterprint","afterprint"],
		["animationend","animationend"],
		["animationiteration","animationiteration"],
		["animationstart","animationstart"],
		["beforeprint","beforeprint"],
		["beforeunload","beforeunload"],
		["blur","blur"],
		["canplay","canplay"],
		["canplaythrough","canplaythrough"],
		["change","change"],
		["click","click"],
		["contextmenu","contextmenu"],
		["copy","copy"],
		["cut","cut"],
		["dblclick","dblclick"],
		["drag","drag"],
		["dragend","dragend"],
		["dragenter","dragenter"],
		["dragleave","dragleave"],
		["dragover","dragover"],
		["dragstart","dragstart"],
		["drop","drop"],
		["durationchange","durationchange"],
		["ended","ended"],
		["error","error"],
		["focus","focus"],
		["focusin","focusin"],
		["focusout","focusout"],
		["fullscreenchange","fullscreenchange"],
		["fullscreenerror","fullscreenerror"],
		["hashchange","hashchange"],
		["input","input"],
		["invalid","invalid"],
		["keydown","keydown"],
		["keypress","keypress"],
		["keyup","keyup"],
		["load","load"],
		["loadeddata","loadeddata"],
		["loadedmetadata","loadedmetadata"],
		["loadstart","loadstart"],
		["message","message"],
		["mousedown","mousedown"],
		["mouseenter","mouseenter"],
		["mouseleave","mouseleave"],
		["mousemove","mousemove"],
		["mouseover","mouseover"],
		["mouseout","mouseout"],
		["mouseup","mouseup"],
		["mousewheel","mousewheel"],
		["offline","offline"],
		["online","online"],
		["open","open"],
		["pagehide","pagehide"],
		["pageshow","pageshow"],
		["paste","paste"],
		["pause","pause"],
		["play","play"],
		["playing","playing"],
		["popstate","popstate"],
		["progress","progress"],
		["ratechange","ratechange"],
		["resize","resize"],
		["reset","reset"],
		["scroll","scroll"],
		["search","search"],
		["seeked","seeked"],
		["seeking","seeking"],
		["select","select"],
		["show","show"],
		["stalled","stalled"],
		["storage","storage"],
		["submit","submit"],
		["suspend","suspend"],
		["timeupdate","timeupdate"],
		["toggle","toggle"],
		["touchcancel","touchcancel"],
		["touchend","touchend"],
		["touchmove","touchmove"],
		["touchstart","touchstart"],
		["transitionend","transitionend"],
		["unload","unload"],
		["volumechange","volumechange"],
		["waiting","waiting"],
		["wheel","wheel"]
	  ]), "event");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(170);
  this.setHelpUrl("https://fustyles.github.io/webduino/GameElements_20190131/HTML%20DOM%20EVENTS.txt");
  },
  validate: function(newValue) {
	const block = this.sourceBlock_;
	if (!block) return;
	if (newValue=="window"||newValue=="document") {
		block.getInput("id_").setVisible(false);
	}
	else {
		block.getInput("id_").setVisible(true);
	}
  }
};

Blockly.Blocks['colorpicker_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.COLORPICKER_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLORPICKER_COLOR); 	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);   
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(120);
  }
};

Blockly.Blocks['colorpicker_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.COLORPICKER_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COLORPICKER_SET) 
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.PROPERTY_STYLE,"style"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(120);
  }
};

Blockly.Blocks['colorpicker_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.COLORPICKER_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COLORPICKER_GET)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.ELEMENTID,"id"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(120);
  }
};

Blockly.Blocks['colorpicker_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.COLORPICKER_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.COLORPICKER_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(120);
  }
};

Blockly.Blocks['colorpicker_onchange_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.COLORPICKER_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.COLORPICKER_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(120);
  }
};

Blockly.Blocks['select_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.SELECT_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.SELECT_VALUE);  
  this.appendValueInput("option_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.SELECT_OPTION); 
  this.appendValueInput("fontsize_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.FONTSIZE);
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendValueInput("background_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.BACKCOLOR);
  this.appendValueInput("color_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.FONTCOLOR);    
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);     
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(150);
  }
};

Blockly.Blocks['select_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.SELECT_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.SELECT_SET) 
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.PROPERTY_BACKGROUND,"background"], 
	  [Blockly.Msg.PROPERTY_COLOR,"color"], 
	  [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_OPTION,"option"], 
	  [Blockly.Msg.PROPERTY_VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.PROPERTY_STYLE,"style"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(150);
  }
};

Blockly.Blocks['select_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.SELECT_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.SELECT_GET)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.PROPERTY_BACKGROUND,"background"], 
	  [Blockly.Msg.PROPERTY_COLOR,"color"], 
	  [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_SELECTEDVALUE,"selectedValue"], 
	  [Blockly.Msg.PROPERTY_SELECTEDTEXT,"selectedText"], 
	  [Blockly.Msg.PROPERTY_SELECTEDINDEX,"selectedIndex"], 
	  [Blockly.Msg.PROPERTY_LENGTH,"length"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.ELEMENTID,"id"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(150);
  }
};

Blockly.Blocks['select_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.SELECT_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.SELECT_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(150);
  }
};

Blockly.Blocks['select_onchange_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.SELECT_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.SELECT_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(150);
  }
};

Blockly.Blocks['range_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.RANGE_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID); 
  this.appendValueInput("value_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE);
  this.appendValueInput("min_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MIN); 
  this.appendValueInput("max_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MAX); 
  this.appendValueInput("step_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.STEP); 	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(180);
  }
};

Blockly.Blocks['range_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.RANGE_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.RANGE_SET) 
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_MAX,"max"], 
	  [Blockly.Msg.PROPERTY_MIN,"min"], 
	  [Blockly.Msg.PROPERTY_STEP,"step"], 
	  [Blockly.Msg.PROPERTY_VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.PROPERTY_STYLE,"style"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(180);
  }
};

Blockly.Blocks['range_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.RANGE_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.RANGE_GET)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_MAX,"max"], 
	  [Blockly.Msg.PROPERTY_MIN,"min"], 
	  [Blockly.Msg.PROPERTY_STEP,"step"], 
	  [Blockly.Msg.PROPERTY_VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.ELEMENTID,"id"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(180);
  }
};

Blockly.Blocks['range_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.RANGE_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.RANGE_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(180);
  }
};

Blockly.Blocks['range_onchange_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.RANGE_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.RANGE_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(180);
  }
};

Blockly.Blocks['text_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TEXT_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TEXT_VALUE);
  this.appendValueInput("fontsize_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.FONTSIZE); 	  
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("background_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.BACKCOLOR);
  this.appendValueInput("color_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.FONTCOLOR);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(210);
  }
};

Blockly.Blocks['text_set'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TEXT);
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TEXT_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEXT_SET) 
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.PROPERTY_BACKGROUND,"background"], 
	  [Blockly.Msg.PROPERTY_COLOR,"color"], 
	  [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.PROPERTY_STYLE,"style"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(210);
  }
};

Blockly.Blocks['text_get'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TEXT);
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TEXT_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEXT_GET)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.PROPERTY_BACKGROUND,"background"], 
	  [Blockly.Msg.PROPERTY_COLOR,"color"], 
	  [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.ELEMENTID,"id"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(210);
  }
};

Blockly.Blocks['text_delete'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TEXT);
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TEXT_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TEXT_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(210);
  }
};

Blockly.Blocks['text_onchange_do'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TEXT);
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.TEXT_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.TEXT_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(210);
  }
};

Blockly.Blocks['div_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.DIV_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("innerHTML_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DIV_VALUE); 
  this.appendValueInput("fontsize_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.FONTSIZE);
  this.appendValueInput("color_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.FONTCOLOR);	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TABLE_BORDERSTYLE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_NONE,"none"], [Blockly.Msg.PROPERTY_SOLID,"solid"], [Blockly.Msg.PROPERTY_DASHED,"dashed"], [Blockly.Msg.PROPERTY_DOUBLE,"double"], [Blockly.Msg.PROPERTY_DOTTED,"dotted"], [Blockly.Msg.PROPERTY_GROOVE,"groove"], [Blockly.Msg.PROPERTY_RIDGE,"ridge"], [Blockly.Msg.PROPERTY_INSET,"inset"], [Blockly.Msg.PROPERTY_OUTSET,"outset"], [Blockly.Msg.PROPERTY_HIDDEN,"hidden"]]), "borderstyle_");  
  this.appendValueInput("borderwidth_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERWIDTH);       
  this.appendValueInput("bordercolor_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERCOLOR);         
  this.appendValueInput("background_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.BACKCOLOR);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(300);
  }
};

Blockly.Blocks['div_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DIV_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DIV_SET) 
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.PROPERTY_BORDERSTYLE,"borderstyle"], 
	  [Blockly.Msg.PROPERTY_BORDERWIDTH,"borderwidth"], 
	  [Blockly.Msg.PROPERTY_BORDERCOLOR,"bordercolor"], 
	  [Blockly.Msg.PROPERTY_BORDERRADIUS,"borderradius"], 
	  [Blockly.Msg.PROPERTY_BACKGROUND,"background"], 
	  [Blockly.Msg.PROPERTY_COLOR,"color"], 
	  [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_SCROLLX,"scrollX"], 
	  [Blockly.Msg.PROPERTY_SCROLLY,"scrollY"], 
	  [Blockly.Msg.PROPERTY_SCROLLLEFT,"scrollLeft"], 
	  [Blockly.Msg.PROPERTY_SCROLLTOP,"scrollTop"], 
	  [Blockly.Msg.PROPERTY_INNERHTML,"innerHTML"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.PROPERTY_STYLE,"style"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(300);
  }
};

Blockly.Blocks['div_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DIV_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DIV_GET)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.PROPERTY_BORDERSTYLE,"borderstyle"], 
	  [Blockly.Msg.PROPERTY_BORDERWIDTH,"borderwidth"], 
	  [Blockly.Msg.PROPERTY_BORDERCOLOR,"bordercolor"], 
	  [Blockly.Msg.PROPERTY_SCROLLX,"scrollX"], 
	  [Blockly.Msg.PROPERTY_SCROLLY,"scrollY"], 
	  [Blockly.Msg.PROPERTY_COLOR,"color"], 
	  [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_SCROLLX,"scrollX"], 
	  [Blockly.Msg.PROPERTY_SCROLLY,"scrollY"], 
	  [Blockly.Msg.PROPERTY_SCROLLLEFT,"scrollLeft"], 
	  [Blockly.Msg.PROPERTY_SCROLLTOP,"scrollTop"], 
	  [Blockly.Msg.PROPERTY_SCROLLWIDTH,"scrollWidth"], 
	  [Blockly.Msg.PROPERTY_SCROLLHEIGHT,"scrollHeight"], 
	  [Blockly.Msg.PROPERTY_INNERHTML,"innerHTML"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.ELEMENTID,"id"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(300);
  }
};

Blockly.Blocks['div_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DIV_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.DIV_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(300);
  }
};

Blockly.Blocks['color_hextorgb'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COLOR_HEXTORGB);
  this.appendValueInput("color_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(120);
  }
};

Blockly.Blocks['time_delay'] = {
  init: function () {
    this.appendValueInput("seconds")
        .setCheck("Number")
        .appendField(Blockly.Msg.TIME_DELAY);   
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(30);
  }
};

Blockly.Blocks['body_set'] = {
  init: function() {    
  this.appendDummyInput()  
      .appendField(Blockly.Msg.SETWINDOW)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.PROPERTY_BACKGROUNDCOLOR,"backgroundColor"], 
	  [Blockly.Msg.PROPERTY_BACKGROUNDIMAGE,"backgroundImage"], 
	  [Blockly.Msg.PROPERTY_BACKGROUNDREPEAT,"backgroundRepeat"], 
	  [Blockly.Msg.PROPERTY_OVERFLOW,"overflow"], 
	  [Blockly.Msg.PROPERTY_FULLSCREEN,"fullscreen"], 
	  [Blockly.Msg.PROPERTY_STYLE,"style"], 
	  [Blockly.Msg.PROPERTY_DROPPABLE,"droppable"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.appendValueInput("value_")
      .setCheck(null)
	  .appendField(Blockly.Msg.PROPERTY_VALUE);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(50);
  }
};  

Blockly.Blocks['position_distance'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSITION_DISTANCE);
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.Y0); 
  this.appendValueInput("x1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)  
	  .appendField("  ")
      .appendField(Blockly.Msg.X1);
  this.appendValueInput("y1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.Y1);     
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(350);
  }
};

Blockly.Blocks['position_angle'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSITION_ANGLE);
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.Y0); 
  this.appendValueInput("x1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("  ")
      .appendField(Blockly.Msg.X1);
  this.appendValueInput("y1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.Y1);     
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(350);
  }
};

Blockly.Blocks['iframe_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.IFRAME_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("src_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.IFRAME_SRC); 
  this.appendValueInput("srcdoc_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.IFRAME_SRCDOC); 	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.IFRAME_FRAMEBORDER)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_NO,"0"], [Blockly.Msg.PROPERTY_YES,"1"]]), "frameborder_");  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.IFRAME_SCROLLING)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_YES,"yes"], [Blockly.Msg.PROPERTY_NO,"no"], [Blockly.Msg.PROPERTY_AUTO,"auto"]]), "scrolling_");     
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(330);
  }
};

Blockly.Blocks['iframe_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IFRAME_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.IFRAME_SET) 
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.PROPERTY_FRAMEBORDER,"frameborder"], 
	  [Blockly.Msg.PROPERTY_SCROLLING,"scrolling"], 
	  [Blockly.Msg.PROPERTY_SCROLLLEFT,"scrollLeft"], 
	  [Blockly.Msg.PROPERTY_SCROLLTOP,"scrollTop"], 
	  [Blockly.Msg.PROPERTY_SRC,"src"], 
	  [Blockly.Msg.PROPERTY_SRCDOC,"srcdoc"], 
	  [Blockly.Msg.PROPERTY_SANDBOX,"sandbox"], 
	  [Blockly.Msg.PROPERTY_ALLOW,"allow"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.PROPERTY_STYLE,"style"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(330);
  }
};

Blockly.Blocks['iframe_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IFRAME_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.IFRAME_GET)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.PROPERTY_FRAMEBORDER,"frameborder"], 
	  [Blockly.Msg.PROPERTY_SCROLLING,"scrolling"], 
	  [Blockly.Msg.PROPERTY_SCROLLLEFT,"scrollLeft"], 
	  [Blockly.Msg.PROPERTY_SCROLLTOP,"scrollTop"], 
	  [Blockly.Msg.PROPERTY_SCROLLWIDTH,"scrollWidth"], 
	  [Blockly.Msg.PROPERTY_SCROLLHEIGHT,"scrollHeight"], 
	  [Blockly.Msg.PROPERTY_SRC,"src"], 
	  [Blockly.Msg.PROPERTY_SRCDOC,"srcdoc"], 
	  [Blockly.Msg.PROPERTY_SANDBOX,"sandbox"], 
	  [Blockly.Msg.PROPERTY_ALLOW,"allow"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.ELEMENTID,"id"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(330);
  }
};

Blockly.Blocks['iframe_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IFRAME_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.IFRAME_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(330);
  }
};

Blockly.Blocks['ajax_get'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.AJAX);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.AJAX_ID); 
  this.appendValueInput("url_")
      .setCheck(null)
      .appendField(Blockly.Msg.AJAX_URL); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AJAX_TYPE)
      .appendField(new Blockly.FieldDropdown([["GET","GET"], ["POST","POST"], ["DELETE","DELETE"]]), "type_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AJAX_DATATYPE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_TEXT_SHOW,"text"],["html","html"], ["xml","xml"], ["script","script"], ["json","json"], ["jsonp","jsonp"]]), "datatype_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AJAX_ASYNC)
      .appendField(new Blockly.FieldDropdown([["false","false"], ["true","true"]]), "async_"); 
  this.appendStatementInput("do")
      .appendField(Blockly.Msg.AJAX_RESPONSE);	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(350);
  }
};

Blockly.Blocks['ajax_getdata'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.AJAX);
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.AJAX_ID);
  this.appendDummyInput()   
      .appendField(Blockly.Msg.AJAX_GETDATA);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AJAX_FORMAT)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.AJAX_FORMAT_DEFAULT,""], [Blockly.Msg.AJAX_FORMAT_JSON,"JSON to String"], [Blockly.Msg.AJAX_FORMAT_XML,"XML to String"]]), "format_"); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(350);
  }
};

Blockly.Blocks['ajax_getdata_json'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.AJAX);
  this.appendValueInput("json_")
      .setCheck(null) 
      .appendField(Blockly.Msg.AJAX_DATA);
  this.appendValueInput("index_")
      .setCheck("Number") 
      .appendField(Blockly.Msg.AJAX_INDEX);	  
  this.appendValueInput("fieldname_")
      .setCheck("String") 
      .appendField(Blockly.Msg.AJAX_FIELDNAME);
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(350);
  }
};

Blockly.Blocks['ajax_getdata_json_count'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.AJAX);
  this.appendValueInput("json_")
      .setCheck(null) 
      .appendField(Blockly.Msg.AJAX_DATA);
  this.appendDummyInput()   	  
      .appendField(Blockly.Msg.AJAX_DATA_COUNT);	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(350);
  }
};

Blockly.Blocks['ajax_cleardata'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.AJAX);
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.AJAX_ID);
  this.appendDummyInput()   
      .appendField(Blockly.Msg.AJAX_CLEARDATA);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(350);
  }
};

Blockly.Blocks['a_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.A_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("innerHTML_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DIV_VALUE); 
  this.appendValueInput("href_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.A_HREF);
  this.appendValueInput("fontsize_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.FONTSIZE); 	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendValueInput("background_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.BACKCOLOR);
  this.appendValueInput("color_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.FONTCOLOR);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TABLE_BORDERSTYLE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_NONE,"none"], [Blockly.Msg.PROPERTY_SOLID,"solid"], [Blockly.Msg.PROPERTY_DASHED,"dashed"], [Blockly.Msg.PROPERTY_DOUBLE,"double"], [Blockly.Msg.PROPERTY_DOTTED,"dotted"], [Blockly.Msg.PROPERTY_GROOVE,"groove"], [Blockly.Msg.PROPERTY_RIDGE,"ridge"], [Blockly.Msg.PROPERTY_INSET,"inset"], [Blockly.Msg.PROPERTY_OUTSET,"outset"],   [Blockly.Msg.PROPERTY_HIDDEN,"hidden"]]), "borderstyle_");  
  this.appendValueInput("borderwidth_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERWIDTH);       
  this.appendValueInput("bordercolor_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERCOLOR);         
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.A_TARGET)
      .appendField(new Blockly.FieldDropdown([["_blank","_blank"], ["_parent","_parent"], ["_self","_self"], ["_top","_top"]]), "target_"); 
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(360);
  }
};

Blockly.Blocks['a_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.A_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.A_SET) 
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.PROPERTY_BORDERSTYLE,"borderstyle"], 
	  [Blockly.Msg.PROPERTY_BORDERWIDTH,"borderwidth"], 
	  [Blockly.Msg.PROPERTY_BORDERCOLOR,"bordercolor"], 
	  [Blockly.Msg.PROPERTY_BORDERRADIUS,"borderradius"], 
	  [Blockly.Msg.PROPERTY_BACKGROUND,"background"], 
	  [Blockly.Msg.PROPERTY_COLOR,"color"], 
	  [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_HREF,"href"], 
	  [Blockly.Msg.PROPERTY_TARGET,"target"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.PROPERTY_STYLE,"style"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(360);
  }
};

Blockly.Blocks['a_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.A_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.A_GET)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.PROPERTY_BORDERSTYLE,"borderstyle"], 
	  [Blockly.Msg.PROPERTY_BORDERWIDTH,"borderwidth"], 
	  [Blockly.Msg.PROPERTY_BORDERCOLOR,"bordercolor"], 
	  [Blockly.Msg.PROPERTY_BACKGROUND,"background"], 
	  [Blockly.Msg.PROPERTY_COLOR,"color"], 
	  [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_HREF,"href"], 
	  [Blockly.Msg.PROPERTY_TARGET,"target"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.ELEMENTID,"id"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(360);
  }
};

Blockly.Blocks['a_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.A_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.A_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(360);
  }
};

Blockly.Blocks['radio_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.RADIO_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("name_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_NAME);
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_VALUE);
  this.appendValueInput("checked_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_CHECKED);
  this.appendValueInput("size_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.SIZE);	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(390);
  }
};

Blockly.Blocks['radio_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.RADIO_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.RADIO_SET) 
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.SIZE,"size"], 
	  [Blockly.Msg.PROPERTY_VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_CHECKED,"checked"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.PROPERTY_STYLE,"style"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(390);
  }
};

Blockly.Blocks['radio_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.RADIO_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.RADIO_GET)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.SIZE,"size"], 
	  [Blockly.Msg.PROPERTY_VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_CHECKED,"checked"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.ELEMENTID,"id"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(390);
  }
};

Blockly.Blocks['radio_name_get'] = {
  init: function () {
  this.appendValueInput("name_")
      .setCheck(null)
	  .appendField(Blockly.Msg.ELEMENT_RADIO)
	  .appendField(Blockly.Msg.PROPERTY_NAME_GET)
      .appendField(Blockly.Msg.PROPERTY_NAME);  
  this.appendDummyInput()   
      .appendField(Blockly.Msg.VALUE); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(390);
  }
};


Blockly.Blocks['radio_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.RADIO_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.RADIO_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(390);
  }
};

Blockly.Blocks['radio_onclick_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.RADIO_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.RADIO_ONCLICK);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(390);
  }
};


Blockly.Blocks['checkbox_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.CHECKBOX_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_VALUE);
  this.appendValueInput("checked_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_CHECKED);
  this.appendValueInput("size_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.SIZE);	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(420);
  }
};

Blockly.Blocks['checkbox_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CHECKBOX_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CHECKBOX_SET) 
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.SIZE,"size"], 
	  [Blockly.Msg.PROPERTY_VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_CHECKED,"checked"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.PROPERTY_STYLE,"style"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(420);
  }
};

Blockly.Blocks['checkbox_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CHECKBOX_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CHECKBOX_GET)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.SIZE,"size"], 
	  [Blockly.Msg.PROPERTY_VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_CHECKED,"checked"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.ELEMENTID,"id"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(420);
  }
};

Blockly.Blocks['checkbox_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CHECKBOX_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.CHECKBOX_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(420);
  }
};

Blockly.Blocks['checkbox_onclick_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.CHECKBOX_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.CHECKBOX_ONCLICK);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(420);
  }
};

Blockly.Blocks['textarea_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TEXTAREA_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_INNERHTML);		  
  this.appendValueInput("cols_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_COLUMNS);
  this.appendValueInput("rows_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_ROWS);
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(40);
  }
};

Blockly.Blocks['textarea_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TEXTAREA_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEXTAREA_SET) 
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.PROPERTY_COLUMNS,"cols"], 
	  [Blockly.Msg.PROPERTY_ROWS,"rows"], 
	  [Blockly.Msg.PROPERTY_VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_INNERHTML,"innerHTML"], 
	  [Blockly.Msg.PROPERTY_READONLY,"readonly"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.PROPERTY_STYLE,"style"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(40);
  }
};

Blockly.Blocks['textarea_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TEXTAREA_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEXTAREA_GET)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.PROPERTY_COLUMNS,"cols"], 
	  [Blockly.Msg.PROPERTY_ROWS,"rows"], 
	  [Blockly.Msg.PROPERTY_VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_INNERHTML,"innerHTML"], 
	  [Blockly.Msg.PROPERTY_READONLY,"readonly"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.ELEMENTID,"id"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(40);
  }
};

Blockly.Blocks['textarea_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TEXTAREA_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TEXTAREA_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(40);
  }
};

Blockly.Blocks['textarea_onchange_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.TEXTAREA_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.TEXTAREA_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(40);
  }
};

Blockly.Blocks['number_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.NUMBER_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("value_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE);
  this.appendValueInput("min_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MIN); 
  this.appendValueInput("max_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MAX); 
  this.appendValueInput("step_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.STEP); 	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);  
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendValueInput("fontsize_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.FONTSIZE);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(70);
  }
};

Blockly.Blocks['number_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.NUMBER_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.NUMBER_SET) 
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.PROPERTY_BACKGROUND,"background"], 
	  [Blockly.Msg.PROPERTY_COLOR,"color"], 
	  [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], 
	  [Blockly.Msg.PROPERTY_MAX,"max"], 
	  [Blockly.Msg.PROPERTY_MIN,"min"], 
	  [Blockly.Msg.PROPERTY_STEP,"step"], 
	  [Blockly.Msg.PROPERTY_VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.PROPERTY_STYLE,"style"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(70);
  }
};

Blockly.Blocks['number_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.NUMBER_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.NUMBER_GET)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.PROPERTY_MAX,"max"], 
	  [Blockly.Msg.PROPERTY_MIN,"min"], 
	  [Blockly.Msg.PROPERTY_STEP,"step"], 
	  [Blockly.Msg.PROPERTY_VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.ELEMENTID,"id"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(70);
  }
};

Blockly.Blocks['number_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.NUMBER_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.NUMBER_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(70);
  }
};

Blockly.Blocks['number_onchange_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.NUMBER_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.NUMBER_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(70);
  }
};

Blockly.Blocks['date_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.DATE_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE+"(YYYY-MM-DD)");
  this.appendValueInput("min_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MIN+"(YYYY-MM-DD)"); 
  this.appendValueInput("max_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MAX+"(YYYY-MM-DD)"); 	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(110);
  }
};

Blockly.Blocks['date_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DATE_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DATE_SET) 
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.PROPERTY_MAX,"max"], 
	  [Blockly.Msg.PROPERTY_MIN,"min"], 
	  [Blockly.Msg.PROPERTY_VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.PROPERTY_STYLE,"style"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(110);
  }
};

Blockly.Blocks['date_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DATE_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DATE_GET)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.PROPERTY_MAX,"max"], 
	  [Blockly.Msg.PROPERTY_MIN,"min"], 
	  [Blockly.Msg.PROPERTY_VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.ELEMENTID,"id"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(110);
  }
};

Blockly.Blocks['date_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DATE_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.DATE_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(110);
  }
};

Blockly.Blocks['date_onchange_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.DATE_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.DATE_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(110);
  }
};

Blockly.Blocks['time_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TIME_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE+"(HH:mm:ss)"); 	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(140);
  }
};

Blockly.Blocks['time_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TIME_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TIME_SET) 
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.PROPERTY_VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.PROPERTY_STYLE,"style"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(140);
  }
};

Blockly.Blocks['time_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TIME_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TIME_GET)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.PROPERTY_VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.ELEMENTID,"id"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(140);
  }
};

Blockly.Blocks['time_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TIME_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TIME_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(140);
  }
};

Blockly.Blocks['time_onchange_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.TIME_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.TIME_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(140);
  }
};

Blockly.Blocks['datetime_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.DATETIME_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE+"(yyyy-mm-dd HH:mm)");  	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(170);
  }
};

Blockly.Blocks['datetime_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DATETIME_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DATETIME_SET) 
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.PROPERTY_VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.PROPERTY_STYLE,"style"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(170);
  }
};

Blockly.Blocks['datetime_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DATETIME_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DATETIME_GET)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.PROPERTY_VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.ELEMENTID,"id"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(170);
  }
};

Blockly.Blocks['datetime_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DATETIME_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.DATETIME_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(170);
  }
};

Blockly.Blocks['datetime_onchange_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.DATETIME_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.DATETIME_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(170);
  }
};

Blockly.Blocks['progress_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.PROGRESS_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE);
  this.appendValueInput("max_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MAX);  	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(200);
  }
};

Blockly.Blocks['progress_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.PROGRESS_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PROGRESS_SET) 
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.PROPERTY_MAX,"max"], 
	  [Blockly.Msg.PROPERTY_VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.PROPERTY_STYLE,"style"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(200);
  }
};

Blockly.Blocks['progress_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.PROGRESS_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PROGRESS_GET)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.PROPERTY_MAX,"max"], 
	  [Blockly.Msg.PROPERTY_VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.ELEMENTID,"id"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['progress_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.PROGRESS_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.PROGRESS_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(200);
  }
};

Blockly.Blocks['password_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.PASSWORD_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE); 
  this.appendValueInput("maxlength_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MAXLENGTH);
  this.appendValueInput("fontsize_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.FONTSIZE);	  
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("background_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.BACKCOLOR);
  this.appendValueInput("color_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.FONTCOLOR);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(230);
  }
};

Blockly.Blocks['password_set'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.PASSWORD);
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.PASSWORD_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PASSWORD_SET) 
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.PROPERTY_BACKGROUND,"background"], 
	  [Blockly.Msg.PROPERTY_COLOR,"color"], 
	  [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.MAXLENGTH,"maxlength"], 
	  [Blockly.Msg.VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.PROPERTY_STYLE,"style"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(230);
  }
};

Blockly.Blocks['password_get'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.PASSWORD);
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.PASSWORD_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PASSWORD_GET)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.PROPERTY_BACKGROUND,"background"], 
	  [Blockly.Msg.PROPERTY_COLOR,"color"], 
	  [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.MAXLENGTH,"maxlength"], 
	  [Blockly.Msg.VALUE,"value"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.ELEMENTID,"id"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(230);
  }
};

Blockly.Blocks['password_delete'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.PASSWORD);
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.PASSWORD_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.PASSWORD_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(230);
  }
};


Blockly.Blocks['form_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.FORM_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("action_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FORM_ACTION); 
  this.appendValueInput("target_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FORM_TARGET);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FORM_METHOD)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_GET,"get"], [Blockly.Msg.PROPERTY_POST,"post"]]), "method_");
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FORM_ENCTYPE) 
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_APPLICATION,"application/x-www-form-urlencoded"], [Blockly.Msg.PROPERTY_MULTIPART,"multipart/form-data"], [Blockly.Msg.PROPERTY_TEXT,"text/plain"]]), "enctype_");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(260);
  }
};

Blockly.Blocks['form_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.FORM_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FORM_SET) 
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.FORM_ACTION,"action"], 
	  [Blockly.Msg.FORM_TARGET,"target"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(260);
  }
};

Blockly.Blocks['form_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.FORM_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FORM_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.FORM_ACTION,"action"], [Blockly.Msg.FORM_TARGET,"target"], [Blockly.Msg.ELEMENTID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"], [Blockly.Msg.PROPERTY_CLASS,"class"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(260);
  }
};

Blockly.Blocks['form_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.FORM_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.FORM_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(260);
  }
};

Blockly.Blocks['form_insert'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.FORM_ID);
  this.appendDummyInput()   
      .appendField(Blockly.Msg.FORM_INSERT);
 this.appendDummyInput()  
      .appendField(Blockly.Msg.ELEMENT)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ELEMENT_SELECT,"select"],[Blockly.Msg.ELEMENT_RANGE,"range"],[Blockly.Msg.ELEMENT_TEXT,"text"],[Blockly.Msg.ELEMENT_RADIO,"radio"],[Blockly.Msg.ELEMENT_CHECKBOX,"checkbox"],[Blockly.Msg.ELEMENT_TEXTAREA,"textarea"],[Blockly.Msg.ELEMENT_NUMBER,"number"],[Blockly.Msg.ELEMENT_DATE,"date"],[Blockly.Msg.ELEMENT_TIME,"time"],[Blockly.Msg.ELEMENT_DATETIME,"datetime"],[Blockly.Msg.ELEMENT_PROGRESS,"progress"],[Blockly.Msg.ELEMENT_PASSWORD,"password"],[Blockly.Msg.ELEMENT_COLOR,"color"]]), "element_");
  this.appendValueInput("elementid_")
      .setCheck(null)
      .appendField(Blockly.Msg.ELEMENT_ID);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(260);
  }
};

Blockly.Blocks['form_submit'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.FORM_ID);
  this.appendDummyInput()   
      .appendField(Blockly.Msg.FORM_SUBMIT);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(260);
  }
};

Blockly.Blocks['head_add_viewport'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.VIEWPORT);
  this.appendValueInput("initialscale_")
      .setCheck(null)
      .appendField(Blockly.Msg.INITIALSCALE);
  this.appendValueInput("minimumscale_")
      .setCheck(null)
      .appendField(Blockly.Msg.MINIMUMSCALE);
  this.appendValueInput("maximumscale_")
      .setCheck(null)
      .appendField(Blockly.Msg.MAXIMUMSCALE);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.SCALABLE)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_YES,"yes"], [Blockly.Msg.PROPERTY_NO,"no"]]), "scalable_");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(50);
  }
};

Blockly.Blocks['video_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.VIDEO_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);	  
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PROPERTY_CAM)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_YES,"true"], [Blockly.Msg.PROPERTY_NO,"false"]], this.validate), "cam_");
  this.appendValueInput("src_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_SRC); 	  
  this.appendDummyInput("v1")  
      .appendField(Blockly.Msg.PROPERTY_AUTOPLAY)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_NO,"false"], [Blockly.Msg.PROPERTY_YES,"true"]]), "autoplay_");
  this.appendDummyInput("v2")  
      .appendField(Blockly.Msg.PROPERTY_LOOP)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_NO,"false"], [Blockly.Msg.PROPERTY_YES,"true"]]), "loop_");
  this.appendDummyInput("v3")  
      .appendField(Blockly.Msg.PROPERTY_MUTED)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_NO,"false"], [Blockly.Msg.PROPERTY_YES,"true"]]), "muted_");
  this.appendDummyInput("v4")  
      .appendField(Blockly.Msg.PROPERTY_CONTROLS)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_YES,"true"], [Blockly.Msg.PROPERTY_NO,"false"]]), "controls_");
  this.appendDummyInput("v5")  
      .appendField(Blockly.Msg.PROPERTY_PRELOAD)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_YES,"true"], [Blockly.Msg.PROPERTY_NO,"false"]]), "preload_");
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(290);
  },
  validate: function(newValue) {
	 const block = this.sourceBlock_;
	 if (!block) return;
	 if (newValue=="true") {
		 block.getInput("src_").setVisible(false);
		 block.getInput("v1").setVisible(false);
		 block.getInput("v2").setVisible(false);
		 block.getInput("v3").setVisible(false);
		 block.getInput("v4").setVisible(false);
		 block.getInput("v5").setVisible(false);
	 }
	 else {
		 block.getInput("src_").setVisible(true);
		 block.getInput("v1").setVisible(true);
		 block.getInput("v2").setVisible(true);
		 block.getInput("v3").setVisible(true);
		 block.getInput("v4").setVisible(true);
		 block.getInput("v5").setVisible(true);		 
	 }	 
  } 
};

Blockly.Blocks['video_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.VIDEO_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.VIDEO_SET) 
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.PROPERTY_SRC,"src"], 
	  [Blockly.Msg.PROPERTY_AUTOPLAY,"autoplay"], 
	  [Blockly.Msg.PROPERTY_LOOP,"loop"], 
	  [Blockly.Msg.PROPERTY_MUTED,"muted"], 
	  [Blockly.Msg.PROPERTY_CONTROLS,"controls"], 
	  [Blockly.Msg.PROPERTY_PRELOAD,"preload"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.PROPERTY_STYLE,"style"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(290);
  }
};

Blockly.Blocks['video_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.VIDEO_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.VIDEO_GET)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.WIDTH,"width"], 
	  [Blockly.Msg.HEIGHT,"height"], 
	  [Blockly.Msg.PROPERTY_SRC,"src"], 
	  [Blockly.Msg.PROPERTY_AUTOPLAY,"autoplay"], 
	  [Blockly.Msg.PROPERTY_LOOP,"loop"], 
	  [Blockly.Msg.PROPERTY_MUTED,"muted"], 
	  [Blockly.Msg.PROPERTY_CONTROLS,"controls"], 
	  [Blockly.Msg.PROPERTY_PRELOAD,"preload"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DISABLED,"disabled"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.PROPERTY_STYLE,"style"], 
	  [Blockly.Msg.ELEMENTID,"id"], 
	  [Blockly.Msg.PROPERTY_NAME,"name"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(290);
  }
};

Blockly.Blocks['video_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.VIDEO_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.VIDEO_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(290);
  }
};

Blockly.Blocks['video_base64'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VIDEO,"video"], [Blockly.Msg.CANVAS,"canvas"], [Blockly.Msg.IMAGE,"image"]]), "source_");
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.VIDEO_BASE64);
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(290);
  }
};

Blockly.Blocks['video_base64_spreadsheet'] = {
  init: function () {
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)		  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VIDEO,"video"], [Blockly.Msg.CANVAS,"canvas"], [Blockly.Msg.IMAGE,"image"]]), "source_");
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.VIDEO_BASE64_SPREADSHEET);
  this.appendValueInput("spreadsheeturl_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_SPREADSHEETURL);
  this.appendValueInput("spreadsheetname_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_SPREADSHEETNAME);
  this.appendValueInput("column_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_COLUMN);
  this.appendValueInput("row_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_ROW);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.TABLE_TD_HEIGHT);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.VIDEO_BASE64_FORMAT)
	  .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldDropdown([["image","image"], ["base64","string"]]), "format_");	  
  this.appendValueInput("spreadsheet_script_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VIDEO_BASE64_SCRIPTURL); 	  
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(290);
  }
};

Blockly.Blocks['video_base64_drive'] = {
  init: function () {
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)		  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VIDEO,"video"], [Blockly.Msg.CANVAS,"canvas"], [Blockly.Msg.IMAGE,"image"]]), "source_");
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.VIDEO_BASE64_DRIVE);
  this.appendValueInput("foldername_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_FOLDERNAME);	  
  this.appendValueInput("filename_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_FILENAME);	  	  
  this.appendValueInput("drive_script_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VIDEO_BASE64_SCRIPTURL); 
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/gs/WebduinoDrive.gs");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(290);
  }
};

Blockly.Blocks['video_base64_email'] = {
  init: function () {
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)		  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VIDEO,"video"], [Blockly.Msg.CANVAS,"canvas"], [Blockly.Msg.IMAGE,"image"]]), "source_");
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.VIDEO_BASE64_EMAIL);
  this.appendValueInput("recipient_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_RECIPIENT);		  
  this.appendValueInput("subject_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_SUBJECT);		  
  this.appendValueInput("email_script_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	
      .appendField(Blockly.Msg.VIDEO_BASE64_SCRIPTURL); 
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/gs/SendCapturedImageByGmail_doPost.gs");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(290);
  }
};

Blockly.Blocks['custom_comment'] = {
  init: function() {
  this.appendValueInput("text")
      .setCheck(null)
      .appendField(Blockly.Msg.CUSTOM_COMMENT_SHOW); 
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true); 
  }
};

Blockly.Blocks['variable_board'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.VARIABLE_BOARD);
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['custom_style'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.CUSTOM_STYLE_SHOW);
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ELEMENT_WINDOW,"window"],[Blockly.Msg.ELEMENT_DOCUMENT,"document"],[Blockly.Msg.ELEMENT_TABLE,"table"],[Blockly.Msg.ELEMENT_IMAGE,"image"],[Blockly.Msg.ELEMENT_CANVAS,"canvas"],[Blockly.Msg.ELEMENT_BUTTON,"button"],[Blockly.Msg.ELEMENT_COLOR,"color"],[Blockly.Msg.ELEMENT_SELECT,"select"],[Blockly.Msg.ELEMENT_RANGE,"range"],[Blockly.Msg.ELEMENT_TEXT,"text"],[Blockly.Msg.ELEMENT_DIV,"div"],[Blockly.Msg.ELEMENT_IFRAME,"iframe"],[Blockly.Msg.ELEMENT_A,"a"],[Blockly.Msg.ELEMENT_RADIO,"radio"],[Blockly.Msg.ELEMENT_CHECKBOX,"checkbox"],[Blockly.Msg.ELEMENT_TEXTAREA,"textarea"],[Blockly.Msg.ELEMENT_NUMBER,"number"],[Blockly.Msg.ELEMENT_DATE,"date"],[Blockly.Msg.ELEMENT_TIME,"time"],[Blockly.Msg.ELEMENT_DATETIME,"datetime"],[Blockly.Msg.ELEMENT_PROGRESS,"progress"],[Blockly.Msg.ELEMENT_PASSWORD,"password"]]), "element");
  this.appendValueInput("id")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.ID);   
  this.appendDummyInput()
	  .appendField(".")  
      .appendField(new Blockly.FieldDropdown([["style","style"],["　",""]]), "style");    
  this.appendValueInput("property")
      .setCheck("String")
	  .appendField(".");
  this.appendValueInput("val")
      .setCheck(null)
	  .appendField(" = ");	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(50);   
  }
};

Blockly.Blocks['font_text'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_TEXT_SHOW);
  this.appendValueInput("size_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
	  .appendField(Blockly.Msg.FONT_SIZE_SHOW);
  this.appendValueInput("color_")
      .setCheck(null)
	  .appendField(Blockly.Msg.PROPERTY_COLOR);
  this.appendValueInput("face_")
      .setCheck("String")
	  .appendField(Blockly.Msg.FONT_FACE_SHOW);	  
  this.appendValueInput("text_")
      .setCheck(null)
	  .appendField(Blockly.Msg.PROPERTY_TEXT_SHOW);	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(320); 
  }
};

Blockly.Blocks['font_b'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_B_SHOW);
  this.appendValueInput("text_")
      .setCheck(null);	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(320);  
  }
};

Blockly.Blocks['font_i'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_I_SHOW);
  this.appendValueInput("text_")
      .setCheck(null); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(320); 
  }
};

Blockly.Blocks['font_u'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_U_SHOW);
  this.appendValueInput("text_")
      .setCheck(null); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(320);
  }
};

Blockly.Blocks['font_sup'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_SUP_SHOW);
  this.appendValueInput("text_")
      .setCheck(null);  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(320); 
  }
};

Blockly.Blocks['font_sub'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_SUB_SHOW);
  this.appendValueInput("text_")
      .setCheck(null);  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(320);  
  }
};

Blockly.Blocks['font_em'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_EM_SHOW);
  this.appendValueInput("text_")
      .setCheck(null);  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(320);  
  }
};

Blockly.Blocks['font_strong'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_STRONG_SHOW);
  this.appendValueInput("text_")
      .setCheck(null);  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(320);  
  }
};

Blockly.Blocks['font_code'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_CODE_SHOW);
  this.appendValueInput("text_")
      .setCheck(null);  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(320); 
  }
};

Blockly.Blocks['location'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.LOCATION_SHOW)
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.LOCATION_HOSTURL_SHOW,"hosturl"],	
          [Blockly.Msg.LOCATION_HOST_SHOW,"host"],
          [Blockly.Msg.LOCATION_HOSTNAME_SHOW,"hostname"],    
          [Blockly.Msg.LOCATION_HREF_SHOW,"href"],
          [Blockly.Msg.LOCATION_PATHNAME_SHOW,"pathname"],    
          [Blockly.Msg.LOCATION_PORT_SHOW,"port"],
          [Blockly.Msg.LOCATION_PROTOCAL_SHOW,"protocol"],    
          [Blockly.Msg.LOCATION_SEARCH_SHOW,"search"],
          [Blockly.Msg.LOCATION_HASH_SHOW,"hash"]		  
        ]), "value_property");
	this.setInputsInline(true);
	this.setOutput(true, null); 
	this.setColour(50); 
    this.setHelpUrl("https://developer.mozilla.org/zh-TW/docs/Web/API/Window/location");
  }  
};

Blockly.Blocks['console_log'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.CONSOLE_LOG);
  this.appendValueInput("text_")
      .setCheck(null);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(50);  
  }
};

Blockly.Blocks['button_ouput_file_text'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.BUTTON_ID);  	  
  this.appendDummyInput()
	  .appendField(Blockly.Msg.BUTTON_OUTPUT_FILE_TEXT);
  this.appendValueInput("text_")
      .setCheck(null);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(90);  
  }
};

Blockly.Blocks['video_output_jpg'] = {
  init: function() {
this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.VIDEO_ID);	  
  this.appendDummyInput()
	  .appendField(Blockly.Msg.VEDIO_OUTPUT_JPG);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(290);  
  }
};

Blockly.Blocks['window_open'] = {
  init: function() {
  this.appendValueInput("url_")
      .setCheck(null)
      .appendField(Blockly.Msg.WINDOW_OPEN);  	  
  this.appendDummyInput()
	  .appendField(Blockly.Msg.WINDOW_NAME)
	  .appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg.WINDOW_NAME_NEW,"_blank"],
		  [Blockly.Msg.WINDOW_NAME_PARENT,"_parent"],
		  [Blockly.Msg.WINDOW_NAME_SELF,"_self"],
		  [Blockly.Msg.WINDOW_NAME_TOP,"_top"]
	  ]),"name_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(50);  
  }
};

Blockly.Blocks['span_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.SPAN_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);  
  this.appendValueInput("innerHTML_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.SPAN_VALUE);
  this.appendValueInput("fontsize_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.FONTSIZE);	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(30);
  }
};

Blockly.Blocks['span_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.SPAN_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.SPAN_SET) 
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.PROPERTY_BORDERSTYLE,"borderstyle"], 
	  [Blockly.Msg.PROPERTY_BORDERWIDTH,"borderwidth"], 
	  [Blockly.Msg.PROPERTY_BORDERCOLOR,"bordercolor"], 
	  [Blockly.Msg.PROPERTY_BORDERRADIUS,"borderradius"], 
	  [Blockly.Msg.PROPERTY_BACKGROUND,"background"], 
	  [Blockly.Msg.PROPERTY_COLOR,"color"], 
	  [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_INNERHTML,"innerHTML"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.PROPERTY_STYLE,"style"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(30);
  }
};

Blockly.Blocks['span_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.SPAN_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.SPAN_GET)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.LEFT,"left"], 
	  [Blockly.Msg.TOP,"top"], 
	  [Blockly.Msg.PROPERTY_BORDERSTYLE,"borderstyle"], 
	  [Blockly.Msg.PROPERTY_BORDERWIDTH,"borderwidth"], 
	  [Blockly.Msg.PROPERTY_BORDERCOLOR,"bordercolor"], 
	  [Blockly.Msg.PROPERTY_BACKGROUND,"background"], 
	  [Blockly.Msg.PROPERTY_COLOR,"color"], 
	  [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], 
	  [Blockly.Msg.PROPERTY_OPACITY,"opacity"], 
	  [Blockly.Msg.PROPERTY_INNERHTML,"innerHTML"], 
	  [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], 
	  [Blockly.Msg.PROPERTY_DISPLAY,"display"], 
	  [Blockly.Msg.PROPERTY_POSITION,"position"], 
	  [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], 
	  [Blockly.Msg.ELEMENTID,"id"], 
	  [Blockly.Msg.PROPERTY_CLASS,"class"]
	  ]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(30);
  }
};

Blockly.Blocks['span_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.SPAN_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.SPAN_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(30);
  }
};

Blockly.Blocks['image_binarytobase64'] = {
  init: function() {
  this.appendValueInput("array_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_BINARY_TO_BASE64);
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(60);   
  }
};

Blockly.Blocks['fetch_get'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.FETCH);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FETCH_ID); 
  this.appendValueInput("url_")
      .setCheck(null)
      .appendField(Blockly.Msg.FETCH_URL); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FETCH_DATATYPE)
      .appendField(new Blockly.FieldDropdown([["json","json"],["text","text"], ["blob","blob"]]), "datatype_"); 
  this.appendStatementInput("do")
      .appendField(Blockly.Msg.FETCH_RESPONSE);	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(350);
  }
};

Blockly.Blocks['fetch_getdata'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.FETCH);
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.FETCH_ID);
  this.appendDummyInput()   
      .appendField(Blockly.Msg.FETCH_GETDATA);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FETCH_FORMAT)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.FETCH_FORMAT_DEFAULT,""], [Blockly.Msg.FETCH_FORMAT_JSON,"JSON to String"], [Blockly.Msg.FETCH_FORMAT_BLOB,"BLOB to ObjectURL"]]), "format_"); 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(350);
  }
};

Blockly.Blocks['text_br'] = {
  init: function() {	
    this.appendDummyInput()
        .appendField(Blockly.Msg["MSG_NEWLINE"]);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
	  ["<br>","<br>"]
	  ,["\\n","\\n"]
	  ,["\\\\n","\\\\n"]
	  ]), "newline"); 		
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(160);  
  }
};

Blockly.Blocks['procedures_return'] = {
  init: function () {
    this.appendValueInput("value_")
        .setCheck(null)
        .appendField(Blockly.Msg["PROCEDURES_DEFRETURN_RETURN"]);   
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Msg["PROCEDURES_HUE"]);
  }
};

Blockly.Blocks['urlcode'] = {
  init: function () {	  
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["ENCODEURI"],"encodeURI"],
		[Blockly.Msg["DECODEURI"],"decodeURI"]	
	  ]), "command");
  this.appendValueInput("url")
      .setCheck(null);	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(80);
  }
};

Blockly.Blocks['code_text'] = {
  init: function () {
  this.appendValueInput("code")
      .appendField(Blockly.Msg["CODE_TEXT"])
      .setCheck(null);	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  }
};

Blockly.Blocks['code_text_input'] = {
  init: function () {
  this.appendValueInput("code")
      .appendField(Blockly.Msg["CODE_TEXT"])
      .setCheck(null);	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  }
};

Blockly.Blocks['document_exitFullscreen'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg["DOCUMENT_EXITFULLSCREEN"]);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(180);
  }
};

Blockly.Blocks['window_messagebox'] = {
  init: function () {
  this.appendValueInput("message")
	  .appendField(Blockly.Msg["WINDOW_MESSAGEBOX"])
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(250);
  }
};

Blockly.Blocks['window_confirm'] = {
  init: function () {
  this.appendValueInput("message")
	  .appendField(Blockly.Msg["WINDOW_CONFIRM"])
      .setCheck("String");
  this.appendDummyInput()
	  .appendField(Blockly.Msg["WINDOW_CONFIRM_YES"]); 
  this.appendStatementInput("yes");
  this.appendDummyInput()
      .appendField(Blockly.Msg["WINDOW_CONFIRM_NO"]);   
  this.appendStatementInput("no");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(250);
  }
};

Blockly.Blocks['system_datetime_get'] = {
  init: function () {
  this.appendDummyInput()
      .appendField(new Blockly.FieldVariable(), 'newdate');	  
  this.appendDummyInput()
      .appendField(Blockly.Msg.GET);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["SYSTEM_DATETIME_DATETIME"],"datetime"],
		[Blockly.Msg["SYSTEM_DATETIME_DATE"],"date"],
		[Blockly.Msg["SYSTEM_DATETIME_TIME"],"time"],
		[Blockly.Msg["SYSTEM_DATETIME_YEAR"],"year"],
		[Blockly.Msg["SYSTEM_DATETIME_MONTH"],"month"],
		[Blockly.Msg["SYSTEM_DATETIME_DAY"],"day"],
		[Blockly.Msg["SYSTEM_DATETIME_WEEK"],"week"],
		[Blockly.Msg["SYSTEM_DATETIME_HOUR"],"hour"],
		[Blockly.Msg["SYSTEM_DATETIME_MINUTE"],"minute"],
		[Blockly.Msg["SYSTEM_DATETIME_SECOND"],"second"]		
	  ]), "type");	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(50);
  }
};

Blockly.Blocks['system_datetime_set'] = {
  init: function () {
  this.appendDummyInput()
      .appendField(Blockly.Msg.SET);	  
  this.appendDummyInput()
	  .appendField(new Blockly.FieldVariable(), 'newdate')
      .appendField(Blockly.Msg["SYSTEM_DATETIME"]); 
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		["　",""],
		[Blockly.Msg["SYSTEM_DATETIME_ADD"],"add"]	
	  ],this.validate), "type");	  
  this.appendValueInput("years")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["SYSTEM_DATETIME_YEARS"]);
  this.appendValueInput("months")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["SYSTEM_DATETIME_MONTHS"]); 	  
  this.appendValueInput("days")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["SYSTEM_DATETIME_DAYS"]);
  this.appendValueInput("hours")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["SYSTEM_DATETIME_HOURS"]);
  this.appendValueInput("minutes")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["SYSTEM_DATETIME_MINUTES"]);	 
  this.appendValueInput("seconds")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["SYSTEM_DATETIME_SECONDS"]);	  	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(50);
  },
  validate: function(newValue) {
	const block = this.sourceBlock_;
	if (!block) return;
	if (newValue=="add") {
		block.getInput("years").setVisible(true);
		block.getInput("months").setVisible(true);
		block.getInput("days").setVisible(true);
		block.getInput("hours").setVisible(true);
		block.getInput("minutes").setVisible(true);
		block.getInput("seconds").setVisible(true);		
	}
	else if (newValue=="") {
		block.getInput("years").setVisible(false);
		block.getInput("months").setVisible(false);
		block.getInput("days").setVisible(false);
		block.getInput("hours").setVisible(false);
		block.getInput("minutes").setVisible(false);
		block.getInput("seconds").setVisible(false);	
	}
  }
};

Blockly.Blocks['include_file'] = {
  init: function() {
  this.appendDummyInput() 
      .appendField(Blockly.Msg.INCLUDE);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.INCLUDE_TYPE) 
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.INCLUDE_JS,"js"], [Blockly.Msg.INCLUDE_CSS,"css"]],this.validate), "type");
  this.appendDummyInput("pos")  
      .appendField(Blockly.Msg.INCLUDE_POSITION)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.INCLUDE_HEADER,"header"], [Blockly.Msg.INCLUDE_HERE,"here"]]), "position");	  
  this.appendValueInput("value")
      .appendField(Blockly.Msg.INCLUDE_URL)   
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(50);
  },
  validate: function(newValue) {
	const block = this.sourceBlock_;
	if (!block) return;
	if (newValue=="js") {
		block.getInput("pos").setVisible(true);
	}
	else if (newValue=="css") {
		block.getInput("pos").setVisible(false);
	}
  }
};
