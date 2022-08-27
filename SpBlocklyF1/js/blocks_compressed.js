/*
@license
Copyright 2022 Taiwan (ChungYi Fu)
SPDX-License-Identifier: Apache-2.0

@fileoverview Blocklyduino F1 (online)
@author https://www.facebook.com/francefu/
@Update 1/1/2022 00:00 (Taiwan Standard Time)
*/

"use strict";

/*

 Visual Blocks Editor

 Copyright 2012 Fred Lin.
 https://github.com/gasolin/BlocklyDuino

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

var filepath = { media: 'media/', msg_zh:"msg/js/zh-hant.js", msg_en: "msg/js/en.js"};

Blockly.Constants={};


Blockly.Blocks.initializes={};
Blockly.Blocks.initializes.HUE=30;
Blockly.Blocks.initializes_setup={
	init:function(){this.setHelpUrl(Blockly.Msg.INITIALIZES_SETUP_HELPURL);this.setStyle("initializes_blocks");this.appendDummyInput().appendField(Blockly.Msg.INITIALIZES_SETUP_APPENDTEXT);this.appendStatementInput("CONTENT");this.setInputsInline(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.INITIALIZES_SETUP_TOOLTIP)
	}
};
Blockly.Blocks.initializes_loop={
	init:function(){
		this.setHelpUrl(Blockly.Msg.INITIALIZES_LOOP_HELPURL);
		this.setStyle("initializes_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.INITIALIZES_LOOP_APPENDTEXT);
		this.appendStatementInput("CONTENT");
		this.setInputsInline(!0);
		this.setPreviousStatement(!0);
		this.setTooltip(Blockly.Msg.INITIALIZES_LOOP_TOOLTIP)
	}
};
Blockly.Blocks.initializes_temp={init:function(){this.setHelpUrl(Blockly.Msg.INITIALIZES_TEMP_HELPURL);this.setColour(Blockly.Blocks.initializes.HUE);this.appendDummyInput().appendField(Blockly.Msg.INITIALIZES_TEMP_APPENDTEXT);this.appendStatementInput("TEMP");this.setInputsInline(!0);this.setTooltip(Blockly.Msg.INITIALIZES_TEMP_TOOLTIP)}};


Blockly.defineBlocksWithJsonArray([{type:"lists_create_empty",message0:"%{BKY_LISTS_CREATE_EMPTY_TITLE}",output:"Array",style:"list_blocks",tooltip:"%{BKY_LISTS_CREATE_EMPTY_TOOLTIP}",helpUrl:"%{BKY_LISTS_CREATE_EMPTY_HELPURL}"},{type:"lists_repeat",message0:"%{BKY_LISTS_REPEAT_TITLE}",args0:[{type:"input_value",name:"ITEM"},{type:"input_value",name:"NUM",check:"Number"}],output:"Array",style:"list_blocks",tooltip:"%{BKY_LISTS_REPEAT_TOOLTIP}",helpUrl:"%{BKY_LISTS_REPEAT_HELPURL}"},{type:"lists_reverse",
message0:"%{BKY_LISTS_REVERSE_MESSAGE0}",args0:[{type:"input_value",name:"LIST",check:"Array"}],output:"Array",inputsInline:!0,style:"list_blocks",tooltip:"%{BKY_LISTS_REVERSE_TOOLTIP}",helpUrl:"%{BKY_LISTS_REVERSE_HELPURL}"},{type:"lists_isEmpty",message0:"%{BKY_LISTS_ISEMPTY_TITLE}",args0:[{type:"input_value",name:"VALUE",check:["String","Array"]}],output:"Boolean",style:"list_blocks",tooltip:"%{BKY_LISTS_ISEMPTY_TOOLTIP}",helpUrl:"%{BKY_LISTS_ISEMPTY_HELPURL}"},{type:"lists_length",message0:"%{BKY_LISTS_LENGTH_TITLE}",args0:[{type:"input_value",name:"VALUE",check:["String","Array"]}],output:"Number",style:"list_blocks",tooltip:"%{BKY_LISTS_LENGTH_TOOLTIP}",helpUrl:"%{BKY_LISTS_LENGTH_HELPURL}"}
]);
Blockly.Blocks.lists_create_with={
	init:function(){
		this.setHelpUrl(Blockly.Msg.LISTS_CREATE_WITH_HELPURL);
		this.setStyle("list_blocks");
		this.itemCount_=3;
		this.updateShape_();
		this.setOutput(!0,"Array");
		this.setMutator(new Blockly.Mutator(["lists_create_with_item"]));
		this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP)
	}
	,mutationToDom:function(){
		var a=Blockly.utils.xml.createElement("mutation");
		a.setAttribute("items",this.itemCount_);
		return a
	}
	,domToMutation:function(a){
		this.itemCount_=parseInt(a.getAttribute("items"),10);
		this.updateShape_()
	}
	,decompose:function(a){
		var b=a.newBlock("lists_create_with_container");
		b.initSvg();
		for(var c=b.getInput("STACK").connection,d=0;d<this.itemCount_;d++){
			var e=a.newBlock("lists_create_with_item");
			e.initSvg();
			c.connect(e.previousConnection);
			c=e.nextConnection}
			return b
	}
	,compose:function(a){
		var b=a.getInputTargetBlock("STACK");
		for(a=[];b&&!b.isInsertionMarker();)
			a.push(b.valueConnection_),b=b.nextConnection&&b.nextConnection.targetBlock();
		for(b=0;b<this.itemCount_;b++){
			var c=this.getInput("ADD"+b).connection.targetConnection;
			c&&-1==a.indexOf(c)&&c.disconnect()
		}
		this.itemCount_=a.length;
		this.updateShape_();
		for(b=0;b<this.itemCount_;b++)
			Blockly.Mutator.reconnect(a[b],this,"ADD"+b)
	}
	,saveConnections:function(a){
		a=a.getInputTargetBlock("STACK");
		for(var b=0;a;){
			var c=this.getInput("ADD"+b);
			a.valueConnection_=c&&c.connection.targetConnection;
			b++;
			a=a.nextConnection&&a.nextConnection.targetBlock()
		}
	}
	,updateShape_:function(){
		this.itemCount_&&this.getInput("EMPTY")?this.removeInput("EMPTY"):this.itemCount_||this.getInput("EMPTY")||this.appendDummyInput("EMPTY").appendField(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE,"TITLE");
		for(var a=0;a<this.itemCount_;a++)
			if(!this.getInput("ADD"+a)){
				var b=this.appendValueInput("ADD"+a).setAlign(Blockly.ALIGN_RIGHT);
				0==a&&b.appendField(Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH,"TITLE")
			}
			for(;this.getInput("ADD"+a);)
				this.removeInput("ADD"+a),a++
	}
	,onchange: function(event) {
		if (!this.workspace) {
		  // Block is deleted.
		  return;
		}
		if (!event.recordUndo) {
		  // Events not generated by user. Skip handling.
		  return;
		}
		if (this.mutator.block_.parentBlock_) {
			if (this.mutator.block_.parentBlock_.type=="procedures_callnoreturn") {
				this.getField("TITLE").setValue(Blockly.Msg["LISTS_CREATE_WITH_INPUT_WITH_PROCEDURE_VALUE"]);
				this.getField("TITLE").isDirty_=true;
				this.workspace.render();
				return;
			}
			else if (this.mutator.block_.parentBlock_.type=="procedures_callreturn") {
				this.getField("TITLE").setValue(Blockly.Msg["LISTS_CREATE_WITH_INPUT_WITH_PROCEDURE_VALUE"]);
				this.getField("TITLE").isDirty_=true;
				this.workspace.render();
				return;
			}
			else if (this.mutator.block_.parentBlock_.type=="procedures_defnoreturn"||this.mutator.block_.parentBlock_.type=="procedures_defreturn") {	
				if (this.inputList[0].name!="EMPTY")
					this.setShadow(false);
				else {
					this.setShadow(true);
					this.setInputsInline(!0);
				}
				
				if (this.itemCount_) {
					for (var i=0;i<this.itemCount_;i++) {
						var targetBlock = this.getInputTargetBlock('ADD'+i);
						if (targetBlock) {
							if (targetBlock.type!="variables_set2"&&targetBlock.type!="variables_set6") {
								targetBlock.unplug();
							}
						}
						else {
							const variables_set2_ = Blockly.getMainWorkspace().newBlock('variables_set2');
							variables_set2_.initSvg();
							Blockly.getMainWorkspace().render();
							this.getInput('ADD'+i).connection.connect(variables_set2_.outputConnection);
						}
					}
				}
				this.getField("TITLE").setValue(Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH_PROCEDURE);
				this.getField("TITLE").isDirty_=true;
				this.workspace.render();
				return;
			}	
		}
		if (this.itemCount_) {
			for (var i=0;i<this.itemCount_;i++) {
				var targetBlock = this.getInputTargetBlock('ADD'+i);
				if (targetBlock) { 
					if (targetBlock.type=="variables_set2"||targetBlock.type=="variables_set6") {
						this.getField("TITLE").setValue(Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH_PROCEDURE);
						this.getField("TITLE").isDirty_=true;
						this.workspace.render();
						return;
					}
				}
			}				
			this.getField("TITLE").setValue(Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH);
		}
		else
			this.getField("TITLE").setValue(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE);
		
		this.getField("TITLE").isDirty_=true;
		this.setInputsInline(0);
		this.workspace.render();
	} 
};



Blockly.Blocks.lists_create_with_container={init:function(){this.setStyle("list_blocks");this.appendDummyInput().appendField(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);this.appendStatementInput("STACK");this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);this.contextMenu=!1}};
Blockly.Blocks.lists_create_with_item={init:function(){this.setStyle("list_blocks");this.appendDummyInput().appendField(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);this.contextMenu=!1}};
Blockly.Blocks.lists_indexOf={init:function(){var a=[[Blockly.Msg.LISTS_INDEX_OF_FIRST,"FIRST"],[Blockly.Msg.LISTS_INDEX_OF_LAST,"LAST"]];this.setHelpUrl(Blockly.Msg.LISTS_INDEX_OF_HELPURL);this.setStyle("list_blocks");this.setOutput(!0,"Number");this.appendValueInput("VALUE").setCheck("Array").appendField(Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST);this.appendValueInput("FIND").appendField(new Blockly.FieldDropdown(a),"END");this.setInputsInline(!0);var b=this;this.setTooltip(function(){return Blockly.Msg.LISTS_INDEX_OF_TOOLTIP.replace("%1",
b.workspace.options.oneBasedIndex?"0":"-1")})}};
Blockly.Blocks.lists_getIndex={init:function(){var a=[[Blockly.Msg.LISTS_GET_INDEX_GET,"GET"]];this.WHERE_OPTIONS=[[Blockly.Msg.LISTS_GET_INDEX_FROM_START,"FROM_START"],[Blockly.Msg.LISTS_GET_INDEX_FROM_END,"FROM_END"],[Blockly.Msg.LISTS_GET_INDEX_FIRST,"FIRST"],[Blockly.Msg.LISTS_GET_INDEX_LAST,"LAST"],[Blockly.Msg.LISTS_GET_INDEX_RANDOM,"RANDOM"]];this.setHelpUrl(Blockly.Msg.LISTS_GET_INDEX_HELPURL);this.setStyle("list_blocks");
a=new Blockly.FieldDropdown(a,function(c){c="REMOVE"==c;this.getSourceBlock().updateStatement_(c)});this.appendValueInput("VALUE").setCheck("Array").appendField(Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST);this.appendDummyInput().appendField(a,"MODE").appendField("","SPACE");this.appendDummyInput("AT");Blockly.Msg.LISTS_GET_INDEX_TAIL&&this.appendDummyInput("TAIL").appendField(Blockly.Msg.LISTS_GET_INDEX_TAIL);this.setInputsInline(!0);this.setOutput(!0);this.updateAt_(!0);var b=this;this.setTooltip(function(){var c=
b.getFieldValue("MODE"),d=b.getFieldValue("WHERE"),e="";switch(c+" "+d){case "GET FROM_START":case "GET FROM_END":e=Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM;break;case "GET FIRST":e=Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST;break;case "GET LAST":e=Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST;break;case "GET RANDOM":e=Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM;break;case "GET_REMOVE FROM_START":case "GET_REMOVE FROM_END":e=Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM;break;case "GET_REMOVE FIRST":e=
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST;break;case "GET_REMOVE LAST":e=Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST;break;case "GET_REMOVE RANDOM":e=Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM;break;case "REMOVE FROM_START":case "REMOVE FROM_END":e=Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM;break;case "REMOVE FIRST":e=Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST;break;case "REMOVE LAST":e=Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST;break;case "REMOVE RANDOM":e=
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM}if("FROM_START"==d||"FROM_END"==d)e+="  "+("FROM_START"==d?Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP:Blockly.Msg.LISTS_INDEX_FROM_END_TOOLTIP).replace("%1",b.workspace.options.oneBasedIndex?"#1":"#0");return e})},mutationToDom:function(){var a=Blockly.utils.xml.createElement("mutation");a.setAttribute("statement",!this.outputConnection);var b=this.getInput("AT").type==Blockly.INPUT_VALUE;a.setAttribute("at",b);return a},domToMutation:function(a){var b=
"true"==a.getAttribute("statement");this.updateStatement_(b);a="false"!=a.getAttribute("at");this.updateAt_(a)},updateStatement_:function(a){a!=!this.outputConnection&&(this.unplug(!0,!0),a?(this.setOutput(!1),this.setPreviousStatement(!0),this.setNextStatement(!0)):(this.setPreviousStatement(!1),this.setNextStatement(!1),this.setOutput(!0)))},updateAt_:function(a){this.removeInput("AT");this.removeInput("ORDINAL",!0);a?(this.appendValueInput("AT").setCheck("Number"),Blockly.Msg.ORDINAL_NUMBER_SUFFIX&&
this.appendDummyInput("ORDINAL").appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)):this.appendDummyInput("AT");var b=new Blockly.FieldDropdown(this.WHERE_OPTIONS,function(c){var d="FROM_START"==c||"FROM_END"==c;if(d!=a){var e=this.getSourceBlock();e.updateAt_(d);e.setFieldValue(c,"WHERE");return null}});this.getInput("AT").appendField(b,"WHERE");Blockly.Msg.LISTS_GET_INDEX_TAIL&&this.moveInputBefore("TAIL",null)}};
Blockly.Blocks.lists_setIndex={init:function(){var a=[[Blockly.Msg.LISTS_SET_INDEX_SET,"SET"]];this.WHERE_OPTIONS=[[Blockly.Msg.LISTS_GET_INDEX_FROM_START,"FROM_START"],[Blockly.Msg.LISTS_GET_INDEX_FROM_END,"FROM_END"],[Blockly.Msg.LISTS_GET_INDEX_FIRST,"FIRST"],[Blockly.Msg.LISTS_GET_INDEX_LAST,"LAST"],[Blockly.Msg.LISTS_GET_INDEX_RANDOM,"RANDOM"]];this.setHelpUrl(Blockly.Msg.LISTS_SET_INDEX_HELPURL);this.setStyle("list_blocks");this.appendValueInput("LIST").setCheck("Array").appendField(Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST);
this.appendDummyInput().appendField(new Blockly.FieldDropdown(a),"MODE").appendField("","SPACE");this.appendDummyInput("AT");this.appendValueInput("TO").appendField(Blockly.Msg.LISTS_SET_INDEX_INPUT_TO);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LISTS_SET_INDEX_TOOLTIP);this.updateAt_(!0);var b=this;this.setTooltip(function(){var c=b.getFieldValue("MODE"),d=b.getFieldValue("WHERE"),e="";switch(c+" "+d){case "SET FROM_START":case "SET FROM_END":e=
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM;break;case "SET FIRST":e=Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST;break;case "SET LAST":e=Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST;break;case "SET RANDOM":e=Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM;break;case "INSERT FROM_START":case "INSERT FROM_END":e=Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM;break;case "INSERT FIRST":e=Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST;break;case "INSERT LAST":e=Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST;
break;case "INSERT RANDOM":e=Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM}if("FROM_START"==d||"FROM_END"==d)e+="  "+Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP.replace("%1",b.workspace.options.oneBasedIndex?"#1":"#0");return e})},mutationToDom:function(){var a=Blockly.utils.xml.createElement("mutation"),b=this.getInput("AT").type==Blockly.INPUT_VALUE;a.setAttribute("at",b);return a},domToMutation:function(a){a="false"!=a.getAttribute("at");this.updateAt_(a)},updateAt_:function(a){this.removeInput("AT");
this.removeInput("ORDINAL",!0);a?(this.appendValueInput("AT").setCheck("Number"),Blockly.Msg.ORDINAL_NUMBER_SUFFIX&&this.appendDummyInput("ORDINAL").appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)):this.appendDummyInput("AT");var b=new Blockly.FieldDropdown(this.WHERE_OPTIONS,function(c){var d="FROM_START"==c||"FROM_END"==c;if(d!=a){var e=this.getSourceBlock();e.updateAt_(d);e.setFieldValue(c,"WHERE");return null}});this.moveInputBefore("AT","TO");this.getInput("ORDINAL")&&this.moveInputBefore("ORDINAL",
"TO");this.getInput("AT").appendField(b,"WHERE")}};
Blockly.Blocks.lists_getSublist={init:function(){this.WHERE_OPTIONS_1=[[Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START,"FROM_START"],[Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END,"FROM_END"],[Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST,"FIRST"]];this.WHERE_OPTIONS_2=[[Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START,"FROM_START"],[Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END,"FROM_END"],[Blockly.Msg.LISTS_GET_SUBLIST_END_LAST,"LAST"]];this.setHelpUrl(Blockly.Msg.LISTS_GET_SUBLIST_HELPURL);this.setStyle("list_blocks");
this.appendValueInput("LIST").setCheck("Array").appendField(Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST);this.appendDummyInput("AT1");this.appendDummyInput("AT2");Blockly.Msg.LISTS_GET_SUBLIST_TAIL&&this.appendDummyInput("TAIL").appendField(Blockly.Msg.LISTS_GET_SUBLIST_TAIL);this.setInputsInline(!0);this.setOutput(!0,"Array");this.updateAt_(1,!0);this.updateAt_(2,!0);this.setTooltip(Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP)},mutationToDom:function(){var a=Blockly.utils.xml.createElement("mutation"),
b=this.getInput("AT1").type==Blockly.INPUT_VALUE;a.setAttribute("at1",b);b=this.getInput("AT2").type==Blockly.INPUT_VALUE;a.setAttribute("at2",b);return a},domToMutation:function(a){var b="true"==a.getAttribute("at1");a="true"==a.getAttribute("at2");this.updateAt_(1,b);this.updateAt_(2,a)},updateAt_:function(a,b){this.removeInput("AT"+a);this.removeInput("ORDINAL"+a,!0);b?(this.appendValueInput("AT"+a).setCheck("Number"),Blockly.Msg.ORDINAL_NUMBER_SUFFIX&&this.appendDummyInput("ORDINAL"+a).appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)):
this.appendDummyInput("AT"+a);var c=new Blockly.FieldDropdown(this["WHERE_OPTIONS_"+a],function(d){var e="FROM_START"==d||"FROM_END"==d;if(e!=b){var f=this.getSourceBlock();f.updateAt_(a,e);f.setFieldValue(d,"WHERE"+a);return null}});this.getInput("AT"+a).appendField(c,"WHERE"+a);1==a&&(this.moveInputBefore("AT1","AT2"),this.getInput("ORDINAL1")&&this.moveInputBefore("ORDINAL1","AT2"));Blockly.Msg.LISTS_GET_SUBLIST_TAIL&&this.moveInputBefore("TAIL",null)}};
Blockly.Blocks.lists_sort={init:function(){this.jsonInit({message0:Blockly.Msg.LISTS_SORT_TITLE,args0:[{type:"field_dropdown",name:"TYPE",options:[[Blockly.Msg.LISTS_SORT_TYPE_NUMERIC,"NUMERIC"],[Blockly.Msg.LISTS_SORT_TYPE_TEXT,"TEXT"],[Blockly.Msg.LISTS_SORT_TYPE_IGNORECASE,"IGNORE_CASE"]]},{type:"field_dropdown",name:"DIRECTION",options:[[Blockly.Msg.LISTS_SORT_ORDER_ASCENDING,"1"],[Blockly.Msg.LISTS_SORT_ORDER_DESCENDING,"-1"]]},{type:"input_value",name:"LIST",check:"Array"}],output:"Array",style:"list_blocks",
tooltip:Blockly.Msg.LISTS_SORT_TOOLTIP,helpUrl:Blockly.Msg.LISTS_SORT_HELPURL})}};
Blockly.Blocks.lists_split={init:function(){var a=this,b=new Blockly.FieldDropdown([[Blockly.Msg.LISTS_SPLIT_LIST_FROM_TEXT,"SPLIT"],[Blockly.Msg.LISTS_SPLIT_TEXT_FROM_LIST,"JOIN"]],function(c){a.updateType_(c)});this.setHelpUrl(Blockly.Msg.LISTS_SPLIT_HELPURL);this.setStyle("list_blocks");this.appendValueInput("INPUT").setCheck("String").appendField(b,"MODE");this.appendValueInput("DELIM").setCheck("String").appendField(Blockly.Msg.LISTS_SPLIT_WITH_DELIMITER);this.setInputsInline(!0);this.setOutput(!0,
"Array");this.setTooltip(function(){var c=a.getFieldValue("MODE");if("SPLIT"==c)return Blockly.Msg.LISTS_SPLIT_TOOLTIP_SPLIT;if("JOIN"==c)return Blockly.Msg.LISTS_SPLIT_TOOLTIP_JOIN;throw Error("Unknown mode: "+c);})},updateType_:function(a){if(this.getFieldValue("MODE")!=a){var b=this.getInput("INPUT").connection;b.setShadowDom(null);var c=b.targetBlock();c&&(b.disconnect(),c.isShadow()?c.dispose():this.bumpNeighbours())}"SPLIT"==a?(this.outputConnection.setCheck("Array"),this.getInput("INPUT").setCheck("String")):
(this.outputConnection.setCheck("String"),this.getInput("INPUT").setCheck("Array"))},mutationToDom:function(){var a=Blockly.utils.xml.createElement("mutation");a.setAttribute("mode",this.getFieldValue("MODE"));return a},domToMutation:function(a){this.updateType_(a.getAttribute("mode"))}};Blockly.Blocks.logic={};Blockly.Constants.Logic={};Blockly.Constants.Logic.HUE=210;


Blockly.defineBlocksWithJsonArray([{type:"logic_boolean",message0:"%1",args0:[{type:"field_dropdown",name:"BOOL",options:[["%{BKY_LOGIC_BOOLEAN_TRUE}","TRUE"],["%{BKY_LOGIC_BOOLEAN_FALSE}","FALSE"]]}],output:"Boolean",style:"logic_blocks",tooltip:"%{BKY_LOGIC_BOOLEAN_TOOLTIP}",helpUrl:"%{BKY_LOGIC_BOOLEAN_HELPURL}"},{type:"controls_ifelse",message0:"%{BKY_CONTROLS_IF_MSG_IF} %1",args0:[{type:"input_value",name:"IF0",check:"Boolean"}],message1:"%{BKY_CONTROLS_IF_MSG_THEN} %1",args1:[{type:"input_statement",name:"DO0"}],message2:"%{BKY_CONTROLS_IF_MSG_ELSE} %1",args2:[{type:"input_statement",name:"ELSE"}],previousStatement:null,nextStatement:null,
style:"logic_blocks",tooltip:"%{BKYCONTROLS_IF_TOOLTIP_2}",helpUrl:"%{BKY_CONTROLS_IF_HELPURL}",extensions:["controls_if_tooltip"]},{type:"logic_compare",message0:"%1 %2 %3",args0:[{type:"input_value",name:"A"},{type:"field_dropdown",name:"OP",options:[["=","EQ"],["\u2260","NEQ"],["\u200f<","LT"],["\u200f\u2264","LTE"],["\u200f>","GT"],["\u200f\u2265","GTE"]]},{type:"input_value",name:"B"}],inputsInline:!0,output:"Boolean",style:"logic_blocks",helpUrl:"%{BKY_LOGIC_COMPARE_HELPURL}",extensions:["logic_compare",
"logic_op_tooltip"]},{type:"logic_operation",message0:"%1 %2 %3",args0:[{type:"input_value",name:"A",check:"Boolean"},{type:"field_dropdown",name:"OP",options:[["%{BKY_LOGIC_OPERATION_AND}","AND"],["%{BKY_LOGIC_OPERATION_OR}","OR"]]},{type:"input_value",name:"B",check:"Boolean"}],inputsInline:!0,output:"Boolean",style:"logic_blocks",helpUrl:"%{BKY_LOGIC_OPERATION_HELPURL}",extensions:["logic_op_tooltip"]},{type:"logic_negate",message0:"%{BKY_LOGIC_NEGATE_TITLE}",args0:[{type:"input_value",name:"BOOL",
check:"Boolean"}],output:"Boolean",style:"logic_blocks",tooltip:"%{BKY_LOGIC_NEGATE_TOOLTIP}",helpUrl:"%{BKY_LOGIC_NEGATE_HELPURL}"},{type:"logic_null",message0:"%{BKY_LOGIC_NULL}",output:null,style:"logic_blocks",tooltip:"%{BKY_LOGIC_NULL_TOOLTIP}",helpUrl:"%{BKY_LOGIC_NULL_HELPURL}"},{type:"logic_ternary",message0:"%{BKY_LOGIC_TERNARY_CONDITION} %1",args0:[{type:"input_value",name:"IF",check:"Boolean"}],message1:"%{BKY_LOGIC_TERNARY_IF_TRUE} %1",args1:[{type:"input_value",name:"THEN"}],message2:"%{BKY_LOGIC_TERNARY_IF_FALSE} %1",
args2:[{type:"input_value",name:"ELSE"}],output:null,style:"logic_blocks",tooltip:"%{BKY_LOGIC_TERNARY_TOOLTIP}",helpUrl:"%{BKY_LOGIC_TERNARY_HELPURL}",extensions:["logic_ternary"]}]);

Blockly.defineBlocksWithJsonArray([
	{type:"controls_if",message0:"%{BKY_CONTROLS_IF_MSG_IF} %1",args0:[{type:"input_value",name:"IF0",check:"Boolean"}],message1:"%{BKY_CONTROLS_IF_MSG_THEN} %1",args1:[{type:"input_statement",
name:"DO0"}],previousStatement:null,nextStatement:null,style:"logic_blocks",helpUrl:"%{BKY_CONTROLS_IF_HELPURL}",mutator:"controls_if_mutator",extensions:["controls_if_tooltip"]}
	,{type:"controls_if_if",message0:"%{BKY_CONTROLS_IF_IF_TITLE_IF}",nextStatement:null,enableContextMenu:!1,style:"logic_blocks",tooltip:"%{BKY_CONTROLS_IF_IF_TOOLTIP}"}
	,{type:"controls_if_elseif",message0:"%{BKY_CONTROLS_IF_ELSEIF_TITLE_ELSEIF}",previousStatement:null,nextStatement:null,enableContextMenu:!1,style:"logic_blocks",tooltip:"%{BKY_CONTROLS_IF_ELSEIF_TOOLTIP}"}
	,{type:"controls_if_else",message0:"%{BKY_CONTROLS_IF_ELSE_TITLE_ELSE}",previousStatement:null,enableContextMenu:!1,style:"logic_blocks",tooltip:"%{BKY_CONTROLS_IF_ELSE_TOOLTIP}"}]);

Blockly.Constants.Logic.TOOLTIPS_BY_OP={EQ:"%{BKY_LOGIC_COMPARE_TOOLTIP_EQ}",NEQ:"%{BKY_LOGIC_COMPARE_TOOLTIP_NEQ}",LT:"%{BKY_LOGIC_COMPARE_TOOLTIP_LT}",LTE:"%{BKY_LOGIC_COMPARE_TOOLTIP_LTE}",GT:"%{BKY_LOGIC_COMPARE_TOOLTIP_GT}",GTE:"%{BKY_LOGIC_COMPARE_TOOLTIP_GTE}",AND:"%{BKY_LOGIC_OPERATION_TOOLTIP_AND}",OR:"%{BKY_LOGIC_OPERATION_TOOLTIP_OR}"};
Blockly.Extensions.register("logic_op_tooltip",Blockly.Extensions.buildTooltipForDropdown("OP",Blockly.Constants.Logic.TOOLTIPS_BY_OP));
Blockly.Constants.Logic.CONTROLS_IF_MUTATOR_MIXIN={elseifCount_:0,elseCount_:0,suppressPrefixSuffix:!0,mutationToDom:function(){if(!this.elseifCount_&&!this.elseCount_)return null;var a=Blockly.utils.xml.createElement("mutation");this.elseifCount_&&a.setAttribute("elseif",this.elseifCount_);this.elseCount_&&a.setAttribute("else",1);return a},domToMutation:function(a){this.elseifCount_=parseInt(a.getAttribute("elseif"),10)||0;this.elseCount_=parseInt(a.getAttribute("else"),10)||0;this.rebuildShape_()},
decompose:function(a){var b=a.newBlock("controls_if_if");b.initSvg();for(var c=b.nextConnection,d=1;d<=this.elseifCount_;d++){var e=a.newBlock("controls_if_elseif");e.initSvg();c.connect(e.previousConnection);c=e.nextConnection}this.elseCount_&&(a=a.newBlock("controls_if_else"),a.initSvg(),c.connect(a.previousConnection));return b},compose:function(a){a=a.nextConnection.targetBlock();this.elseCount_=this.elseifCount_=0;for(var b=[null],c=[null],d=null;a&&!a.isInsertionMarker();){switch(a.type){case "controls_if_elseif":this.elseifCount_++;
b.push(a.valueConnection_);c.push(a.statementConnection_);break;case "controls_if_else":this.elseCount_++;d=a.statementConnection_;break;default:throw TypeError("Unknown block type: "+a.type);}a=a.nextConnection&&a.nextConnection.targetBlock()}this.updateShape_();this.reconnectChildBlocks_(b,c,d)},saveConnections:function(a){a=a.nextConnection.targetBlock();for(var b=1;a;){switch(a.type){case "controls_if_elseif":var c=this.getInput("IF"+b),d=this.getInput("DO"+b);a.valueConnection_=c&&c.connection.targetConnection;
a.statementConnection_=d&&d.connection.targetConnection;b++;break;case "controls_if_else":d=this.getInput("ELSE");a.statementConnection_=d&&d.connection.targetConnection;break;default:throw TypeError("Unknown block type: "+a.type);}a=a.nextConnection&&a.nextConnection.targetBlock()}},rebuildShape_:function(){var a=[null],b=[null],c=null;this.getInput("ELSE")&&(c=this.getInput("ELSE").connection.targetConnection);for(var d=1;this.getInput("IF"+d);){var e=this.getInput("IF"+d),f=this.getInput("DO"+
d);a.push(e.connection.targetConnection);b.push(f.connection.targetConnection);d++}this.updateShape_();this.reconnectChildBlocks_(a,b,c)},updateShape_:function(){this.getInput("ELSE")&&this.removeInput("ELSE");for(var a=1;this.getInput("IF"+a);)this.removeInput("IF"+a),this.removeInput("DO"+a),a++;for(a=1;a<=this.elseifCount_;a++)this.appendValueInput("IF"+a).setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF),this.appendStatementInput("DO"+a).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
this.elseCount_&&this.appendStatementInput("ELSE").appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE)},reconnectChildBlocks_:function(a,b,c){for(var d=1;d<=this.elseifCount_;d++)Blockly.Mutator.reconnect(a[d],this,"IF"+d),Blockly.Mutator.reconnect(b[d],this,"DO"+d);Blockly.Mutator.reconnect(c,this,"ELSE")}};

Blockly.Extensions.registerMutator("controls_if_mutator",Blockly.Constants.Logic.CONTROLS_IF_MUTATOR_MIXIN,null,["controls_if_elseif","controls_if_else"]);



Blockly.defineBlocksWithJsonArray([
	{type:"controls_switch"
	,message0:"%{BKY_CONTROLS_SWITCH}"
	,message1:"%{BKY_CONTROLS_SWITCH_VALUE} %1"	
	,args1:[{type:"input_value",name:"VALUE",check:null,align:"RIGHT"}]
	,message2:"%{BKY_CONTROLS_SWITCH_MSG_CASE} %1"
	,args2:[{type:"input_value",name:"CASE0",check:null,align:"RIGHT"}]
	,message3:"%{BKY_CONTROLS_SWITCH_TO} %1"
	,args3:[{type:"input_statement",name:"DO0",align:"RIGHT"}]
	,previousStatement:null
	,nextStatement:null
	,style:"logic_blocks"
	,mutator:"controls_switch_mutator"
	}
	,{type:"controls_switch_switch"
	,message0:"%{BKY_CONTROLS_SWITCH_CASE}"
	,nextStatement:null
	,enableContextMenu:!1
	,style:"logic_blocks"
	,tooltip:"%{BKY_CONTROLS_IF_IF_TOOLTIP}"
	}
	,{type:"controls_switch_case"
	,message0:"%{BKY_CONTROLS_SWITCH_CASE}"
	,previousStatement:null
	,nextStatement:null
	,enableContextMenu:!1
	,style:"logic_blocks"
	}
	,{type:"controls_switch_default"
	,message0:"%{BKY_CONTROLS_SWITCH_DEFAULT}"
	,previousStatement:null
	,enableContextMenu:!1
	,style:"logic_blocks"
	}
]);

Blockly.Constants.Logic.CONTROLS_SWITCH_MUTATOR_MIXIN={
	caseCount_:0
	,defaultCount_:0
	,suppressPrefixSuffix:!0
	,mutationToDom:function(){
		if(!this.caseCount_&&!this.defaultCount_)return null;
		var a=Blockly.utils.xml.createElement("mutation");
		this.caseCount_&&a.setAttribute("case",this.caseCount_);
		this.defaultCount_&&a.setAttribute("default",1);
		return a
	}
	,domToMutation:function(a){
		this.caseCount_=parseInt(a.getAttribute("case"),10)||0;this.defaultCount_=parseInt(a.getAttribute("default"),10)||0;this.rebuildShape_()
	}
	,decompose:function(a){
		var b=a.newBlock("controls_switch_switch");
		b.initSvg();
		for(var c=b.nextConnection,d=1;d<=this.caseCount_;d++){
			var e=a.newBlock("controls_switch_case");
			e.initSvg();
			c.connect(e.previousConnection);
			c=e.nextConnection
		}
		this.defaultCount_&&(a=a.newBlock("controls_switch_default"),a.initSvg(),c.connect(a.previousConnection));
		return b
	}
	,compose:function(a){
		a=a.nextConnection.targetBlock();
		this.defaultCount_=this.caseCount_=0;
		for(var b=[null],c=[null],d=null;a&&!a.isInsertionMarker();){
			switch(a.type){
				case "controls_switch_case":
					this.caseCount_++;
					b.push(a.valueConnection_);
					c.push(a.statementConnection_);
					break;
				case "controls_switch_default":
					this.defaultCount_++;
					d=a.statementConnection_;
					break;
				default:throw TypeError("Unknown block type: "+a.type);
			}
			a=a.nextConnection&&a.nextConnection.targetBlock()
		}
		this.updateShape_();
		this.reconnectChildBlocks_(b,c,d)
	}
	,saveConnections:function(a){
		a=a.nextConnection.targetBlock();
		for(var b=1;a;){
			switch(a.type){
				case "controls_switch_case":
					var c=this.getInput("CASE"+b),d=this.getInput("DO"+b);
					a.valueConnection_=c&&c.connection.targetConnection;
					a.statementConnection_=d&&d.connection.targetConnection;
					b++;
					break;
				case "controls_switch_default":
					d=this.getInput("DEFAULT");
					a.statementConnection_=d&&d.connection.targetConnection;
					break;
				default:throw TypeError("Unknown block type: "+a.type);
			}
			a=a.nextConnection&&a.nextConnection.targetBlock()
		}
	}
	,rebuildShape_:function(){
		var a=[null],b=[null],c=null;
		this.getInput("DEFAULT")&&(c=this.getInput("DEFAULT").connection.targetConnection);
		for(var d=1;this.getInput("CASE"+d);){
			var e=this.getInput("CASE"+d),f=this.getInput("DO"+d);
			a.push(e.connection.targetConnection);
			b.push(f.connection.targetConnection);d++
		}
		this.updateShape_();
		this.reconnectChildBlocks_(a,b,c)
	}
	,updateShape_:function(){
		this.getInput("DEFAULT")&&this.removeInput("DEFAULT");
		for(var a=1;this.getInput("CASE"+a);)
			this.removeInput("CASE"+a),this.removeInput("DO"+a),a++;
		for(a=1;a<=this.caseCount_;a++)
			this.appendValueInput("CASE"+a)
			.setCheck(null)
			.appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_CASE)
			.setAlign(Blockly.ALIGN_RIGHT)
		,this.appendStatementInput("DO"+a)
			.appendField(Blockly.Msg.CONTROLS_SWITCH_TO)
			.setAlign(Blockly.ALIGN_RIGHT);
		this.defaultCount_&&this.appendStatementInput("DEFAULT")
			.appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_DEFAULT)
			.setAlign(Blockly.ALIGN_RIGHT)
	}
	,reconnectChildBlocks_:function(a,b,c){
		for(var d=1;d<=this.caseCount_;d++)
			Blockly.Mutator.reconnect(a[d],this,"CASE"+d),Blockly.Mutator.reconnect(b[d],this,"DO"+d);
		Blockly.Mutator.reconnect(c,this,"DEFAULT")
	}
};

Blockly.Extensions.registerMutator("controls_switch_mutator",Blockly.Constants.Logic.CONTROLS_SWITCH_MUTATOR_MIXIN,null,["controls_switch_case","controls_switch_default"]);


Blockly.Constants.Logic.CONTROLS_IF_TOOLTIP_EXTENSION=function(){this.setTooltip(function(){if(this.elseifCount_||this.elseCount_){if(!this.elseifCount_&&this.elseCount_)return Blockly.Msg.CONTROLS_IF_TOOLTIP_2;if(this.elseifCount_&&!this.elseCount_)return Blockly.Msg.CONTROLS_IF_TOOLTIP_3;if(this.elseifCount_&&this.elseCount_)return Blockly.Msg.CONTROLS_IF_TOOLTIP_4}else return Blockly.Msg.CONTROLS_IF_TOOLTIP_1;return""}.bind(this))};Blockly.Extensions.register("controls_if_tooltip",Blockly.Constants.Logic.CONTROLS_IF_TOOLTIP_EXTENSION);
Blockly.Constants.Logic.LOGIC_COMPARE_ONCHANGE_MIXIN={onchange:function(a){this.prevBlocks_||(this.prevBlocks_=[null,null]);var b=this.getInputTargetBlock("A"),c=this.getInputTargetBlock("B");b&&c&&!this.workspace.connectionChecker.doTypeChecks(b.outputConnection,c.outputConnection)&&(Blockly.Events.setGroup(a.group),a=this.prevBlocks_[0],a!==b&&(b.unplug(),!a||a.isDisposed()||a.isShadow()||this.getInput("A").connection.connect(a.outputConnection)),b=this.prevBlocks_[1],b!==c&&(c.unplug(),!b||b.isDisposed()||
b.isShadow()||this.getInput("B").connection.connect(b.outputConnection)),this.bumpNeighbours(),Blockly.Events.setGroup(!1));this.prevBlocks_[0]=this.getInputTargetBlock("A");this.prevBlocks_[1]=this.getInputTargetBlock("B")}};Blockly.Constants.Logic.LOGIC_COMPARE_EXTENSION=function(){this.mixin(Blockly.Constants.Logic.LOGIC_COMPARE_ONCHANGE_MIXIN)};Blockly.Extensions.register("logic_compare",Blockly.Constants.Logic.LOGIC_COMPARE_EXTENSION);
Blockly.Constants.Logic.LOGIC_TERNARY_ONCHANGE_MIXIN={prevParentConnection_:null,onchange:function(a){var b=this.getInputTargetBlock("THEN"),c=this.getInputTargetBlock("ELSE"),d=this.outputConnection.targetConnection;if((b||c)&&d)for(var e=0;2>e;e++){var f=1==e?b:c;f&&!f.workspace.connectionChecker.doTypeChecks(f.outputConnection,d)&&(Blockly.Events.setGroup(a.group),d===this.prevParentConnection_?(this.unplug(),d.getSourceBlock().bumpNeighbours()):(f.unplug(),f.bumpNeighbours()),Blockly.Events.setGroup(!1))}this.prevParentConnection_=
d}};Blockly.Extensions.registerMixin("logic_ternary",Blockly.Constants.Logic.LOGIC_TERNARY_ONCHANGE_MIXIN);

Blockly.Blocks.loops={};
Blockly.Constants.Loops={};
Blockly.Constants.Loops.HUE=120;


Blockly.defineBlocksWithJsonArray([{type:"controls_repeat_ext",message0:"%{BKY_CONTROLS_REPEAT_TITLE}",args0:[{type:"input_value",name:"TIMES",check:"Number"}],message1:"%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",args1:[{type:"input_statement",name:"DO"}],previousStatement:null,nextStatement:null,style:"loop_blocks",tooltip:"%{BKY_CONTROLS_REPEAT_TOOLTIP}",helpUrl:"%{BKY_CONTROLS_REPEAT_HELPURL}"},{type:"controls_repeat",message0:"%{BKY_CONTROLS_REPEAT_TITLE}",args0:[{type:"field_number",name:"TIMES",value:10,
min:0,precision:1}],message1:"%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",args1:[{type:"input_statement",name:"DO"}],previousStatement:null,nextStatement:null,style:"loop_blocks",tooltip:"%{BKY_CONTROLS_REPEAT_TOOLTIP}",helpUrl:"%{BKY_CONTROLS_REPEAT_HELPURL}"},{type:"controls_whileUntil",message0:"%1 %2",args0:[{type:"field_dropdown",name:"MODE",options:[["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_WHILE}","WHILE"],["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL}","UNTIL"]]},{type:"input_value",name:"BOOL",check:"Boolean"}],
message1:"%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",args1:[{type:"input_statement",name:"DO"}],previousStatement:null,nextStatement:null,style:"loop_blocks",helpUrl:"%{BKY_CONTROLS_WHILEUNTIL_HELPURL}",extensions:["controls_whileUntil_tooltip"]},{type:"controls_for",message0:"%{BKY_CONTROLS_FOR_TITLE}",args0:[{type:"field_variable",name:"VAR",variable:null},{type:"input_value",name:"FROM",check:"Number",align:"RIGHT"},{type:"input_value",name:"TO",check:"Number",align:"RIGHT"},{type:"input_value",name:"BY",
check:"Number",align:"RIGHT"}],message1:"%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",args1:[{type:"input_statement",name:"DO"}],inputsInline:!0,previousStatement:null,nextStatement:null,style:"loop_blocks",helpUrl:"%{BKY_CONTROLS_FOR_HELPURL}",extensions:["contextMenu_newGetVariableBlock","controls_for_tooltip"]},{type:"controls_forEach",message0:"%{BKY_CONTROLS_FOREACH_TITLE}",args0:[{type:"field_variable",name:"VAR",variable:null},{type:"input_value",name:"LIST",check:"Array"}],message1:"%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
args1:[{type:"input_statement",name:"DO"}],previousStatement:null,nextStatement:null,style:"loop_blocks",helpUrl:"%{BKY_CONTROLS_FOREACH_HELPURL}",extensions:["contextMenu_newGetVariableBlock","controls_forEach_tooltip"]},{type:"controls_flow_statements",message0:"%1",args0:[{type:"field_dropdown",name:"FLOW",options:[["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK}","BREAK"],["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE}","CONTINUE"]]}],previousStatement:null,style:"loop_blocks",helpUrl:"%{BKY_CONTROLS_FLOW_STATEMENTS_HELPURL}",
extensions:["controls_flow_tooltip","controls_flow_in_loop_check"]}]);
Blockly.Constants.Loops.WHILE_UNTIL_TOOLTIPS={WHILE:"%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE}",UNTIL:"%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL}"};Blockly.Extensions.register("controls_whileUntil_tooltip",Blockly.Extensions.buildTooltipForDropdown("MODE",Blockly.Constants.Loops.WHILE_UNTIL_TOOLTIPS));Blockly.Constants.Loops.BREAK_CONTINUE_TOOLTIPS={BREAK:"%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK}",CONTINUE:"%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE}"};
Blockly.Extensions.register("controls_flow_tooltip",Blockly.Extensions.buildTooltipForDropdown("FLOW",Blockly.Constants.Loops.BREAK_CONTINUE_TOOLTIPS));
Blockly.Constants.Loops.CUSTOM_CONTEXT_MENU_CREATE_VARIABLES_GET_MIXIN={customContextMenu:function(a){if(!this.isInFlyout){var b=this.getField("VAR").getVariable(),c=b.name;if(!this.isCollapsed()&&null!=c){var d={enabled:!0};d.text=Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1",c);b=Blockly.Variables.generateVariableFieldDom(b);c=Blockly.utils.xml.createElement("block");c.setAttribute("type","variables_get");c.appendChild(b);d.callback=Blockly.ContextMenu.callbackFactory(this,c);a.push(d)}}}};
Blockly.Extensions.registerMixin("contextMenu_newGetVariableBlock",Blockly.Constants.Loops.CUSTOM_CONTEXT_MENU_CREATE_VARIABLES_GET_MIXIN);Blockly.Extensions.register("controls_for_tooltip",Blockly.Extensions.buildTooltipWithFieldText("%{BKY_CONTROLS_FOR_TOOLTIP}","VAR"));Blockly.Extensions.register("controls_forEach_tooltip",Blockly.Extensions.buildTooltipWithFieldText("%{BKY_CONTROLS_FOREACH_TOOLTIP}","VAR"));
Blockly.Constants.Loops.CONTROL_FLOW_IN_LOOP_CHECK_MIXIN={LOOP_TYPES:["controls_repeat","controls_repeat_ext","controls_forEach","controls_for","controls_whileUntil"],suppressPrefixSuffix:!0,getSurroundLoop:function(a){do{if(-1!=Blockly.Constants.Loops.CONTROL_FLOW_IN_LOOP_CHECK_MIXIN.LOOP_TYPES.indexOf(a.type))return a;a=a.getSurroundParent()}while(a);return null},onchange:function(a){if(this.workspace.isDragging&&!this.workspace.isDragging()&&a.type==Blockly.Events.BLOCK_MOVE){var b=Blockly.Constants.Loops.CONTROL_FLOW_IN_LOOP_CHECK_MIXIN.getSurroundLoop(this);
this.setWarningText(b?null:Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING);if(!this.isInFlyout){var c=Blockly.Events.getGroup();Blockly.Events.setGroup(a.group);this.setEnabled(b);Blockly.Events.setGroup(c)}}}};
Blockly.Extensions.registerMixin("controls_flow_in_loop_check",Blockly.Constants.Loops.CONTROL_FLOW_IN_LOOP_CHECK_MIXIN);Blockly.Blocks.math={};Blockly.Constants.Math={};Blockly.Constants.Math.HUE=230;

Blockly.Blocks.math={};
Blockly.Blocks.math_number={
	init:function(){
		this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
		this.setColour(Blockly.Msg["MATH_HUE"]);
		this.appendDummyInput()
			.appendField(new Blockly.FieldTextInput("0",Blockly.FieldTextInput.numberValidator),"NUM");
		this.setOutput(!0,profile.common.number_type);
		this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP)
	}
};
Blockly.Blocks.math_change={init:function(){
		this.appendValueInput("VAR")
			.appendField(Blockly.Msg.MATH_CHANGE_TITLE_CHANGE);
		this.appendValueInput("DELTA")
			.setCheck("Number")
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg.MATH_CHANGE_INPUT_BY);
		this.setInputsInline(!0);
		this.setPreviousStatement(!0);
		this.setNextStatement(!0);
		this.setHelpUrl(Blockly.Msg.MATH_CHANGE_HELPURL);
		this.setColour(Blockly.Msg["MATH_HUE"]);
	}
}
Blockly.Blocks.math_arithmetic={
	init:function(){
		var a=[[Blockly.Msg.MATH_ADDITION_SYMBOL,"ADD"],[Blockly.Msg.MATH_SUBTRACTION_SYMBOL,"MINUS"],[Blockly.Msg.MATH_MULTIPLICATION_SYMBOL,"MULTIPLY"],[Blockly.Msg.MATH_DIVISION_SYMBOL,"DIVIDE"],[Blockly.Msg.MATH_MODULO_SYMBOL,"MODULO"]];
		this.setHelpUrl(Blockly.Msg.MATH_ARITHMETIC_HELPURL);
		this.setColour(Blockly.Msg["MATH_HUE"]);
		this.setOutput(!0);
		this.appendValueInput("A")
			.setCheck("Number");
		this.appendValueInput("B")
			.setCheck("Number")
			.appendField(new Blockly.FieldDropdown(a),"OP");
		this.setInputsInline(!0);
		var b=this;
		this.setTooltip(function(){
				var a=b.getFieldValue("OP");
				return{ADD:Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD,MINUS:Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS,MULTIPLY:Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,DIVIDE:Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE,MODULO:Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MOFULO,POWER:Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER}[a]
			}
		)
	}
};
Blockly.Blocks.math_single={
	init: function() {
		this.appendDummyInput() 
			.appendField(new Blockly.FieldDropdown(
			  [
				[Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE,"ABS"],
				[Blockly.Msg.VARIABLES_GETNUMBER_RANDOM,"RANDOM"],
				[Blockly.Msg.VARIABLES_GETNUMBER_RANDOMSEED,"RANDOMSEED"],
				[Blockly.Msg.MATH_SINGLE_OP_ROOT,"SQRT"],				
				["-","NEG"],
				["ln","LN"],
				["log","LOG"],				
				["log10","LOG10"],
				["e^","EXP"],
				["10^","POW10"],
				["sq","SQ"],
				["fabs","FABS"],				
				["sin","SIN"],
				["cos","COS"],
				["tan","TAN"],	
				["atan","ATAN"],	
				["square","SQUARE"]
			  ]), "OP");
		this.appendValueInput("NUM")
			.setCheck('Number');
		this.setInputsInline(!0);			
		this.setHelpUrl(Blockly.Msg.MATH_SINGLE_HELPURL);
		this.setColour(Blockly.Msg["MATH_HUE"]);
		this.setOutput(!0,profile.common.number_type);
	}
};
Blockly.Blocks.math_trig={init:function(){var a=[[Blockly.Msg.MATH_TRIG_SIN,"SIN"],[Blockly.Msg.MATH_TRIG_COS,"COS"],[Blockly.Msg.MATH_TRIG_TAN,"TAN"],[Blockly.Msg.MATH_TRIG_ASIN,"ASIN"],[Blockly.Msg.MATH_TRIG_ACOS,"ACOS"],[Blockly.Msg.MATH_TRIG_ATAN,"ATAN"]];this.setHelpUrl(Blockly.Msg.MATH_TRIG_HELPURL);this.setColour(Blockly.Msg["MATH_HUE"]);this.setOutput(!0,"Number");this.appendValueInput("NUM").setCheck("Number").appendField(new Blockly.FieldDropdown(a),"OP");var b=this;this.setTooltip(function(){var a=
b.getFieldValue("OP");return{SIN:Blockly.Msg.MATH_TRIG_TOOLTIP_SIN,COS:Blockly.Msg.MATH_TRIG_TOOLTIP_COS,TAN:Blockly.Msg.MATH_TRIG_TOOLTIP_TAN,ASIN:Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN,ACOS:Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS,ATAN:Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN}[a]})}};
Blockly.Blocks.math_constant={init:function(){this.setHelpUrl(Blockly.Msg.MATH_CONSTANT_HELPURL);this.setColour(Blockly.Msg["MATH_HUE"]);this.setOutput(!0,"Number");this.appendDummyInput().appendField(new Blockly.FieldDropdown([["\u03c0","PI"],["e","E"],["\u03c6","GOLDEN_RATIO"],["sqrt(2)","SQRT2"],["sqrt(\u00bd)","SQRT1_2"],["\u221e","INFINITY"]]),"CONSTANT");this.setTooltip(Blockly.Msg.MATH_CONSTANT_TOOLTIP)}};
Blockly.Blocks.math_number_property={init:function(){var a=[[Blockly.Msg.MATH_IS_EVEN,"EVEN"],[Blockly.Msg.MATH_IS_ODD,"ODD"],[Blockly.Msg.MATH_IS_PRIME,"PRIME"],[Blockly.Msg.MATH_IS_WHOLE,"WHOLE"],[Blockly.Msg.MATH_IS_POSITIVE,"POSITIVE"],[Blockly.Msg.MATH_IS_NEGATIVE,"NEGATIVE"],[Blockly.Msg.MATH_IS_DIVISIBLE_BY,"DIVISIBLE_BY"]];this.setColour(Blockly.Msg["MATH_HUE"]);this.appendValueInput("NUMBER_TO_CHECK").setCheck("Number");a=new Blockly.FieldDropdown(a,function(a){this.sourceBlock_.updateShape_("DIVISIBLE_BY"==
a)});this.appendDummyInput().appendField(a,"PROPERTY");this.setInputsInline(!0);this.setOutput(!0,"Boolean");this.setTooltip(Blockly.Msg.MATH_IS_TOOLTIP)},mutationToDom:function(){var a=document.createElement("mutation"),b="DIVISIBLE_BY"==this.getFieldValue("PROPERTY");a.setAttribute("divisor_input",b);return a},domToMutation:function(a){a="true"==a.getAttribute("divisor_input");this.updateShape_(a)},updateShape_:function(a){var b=this.getInput("DIVISOR");a?b||this.appendValueInput("DIVISOR").setCheck("Number"):
b&&this.removeInput("DIVISOR")}};

Blockly.Blocks.math_round={init:function(){var a=[[Blockly.Msg.MATH_ROUND_OPERATOR_ROUND,"ROUND"],[Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP,"ROUNDUP"],[Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN,"ROUNDDOWN"]];this.setHelpUrl(Blockly.Msg.MATH_ROUND_HELPURL);this.setColour(Blockly.Msg["MATH_HUE"]);this.setOutput(!0,"Number");this.appendValueInput("NUM").setCheck("Number").appendField(new Blockly.FieldDropdown(a),"OP");this.setTooltip(Blockly.Msg.MATH_ROUND_TOOLTIP)}};
Blockly.Blocks.math_on_list={init:function(){var a=[[Blockly.Msg.MATH_ONLIST_OPERATOR_SUM,"SUM"],[Blockly.Msg.MATH_ONLIST_OPERATOR_MIN,"MIN"],[Blockly.Msg.MATH_ONLIST_OPERATOR_MAX,"MAX"],[Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE,"AVERAGE"],[Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN,"MEDIAN"],[Blockly.Msg.MATH_ONLIST_OPERATOR_MODE,"MODE"],[Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV,"STD_DEV"],[Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM,"RANDOM"]],b=this;this.setHelpUrl(Blockly.Msg.MATH_ONLIST_HELPURL);this.setColour(Blockly.Msg["MATH_HUE"]);
this.setOutput(!0,"Number");a=new Blockly.FieldDropdown(a,function(a){"MODE"==a?b.outputConnection.setCheck("Array"):b.outputConnection.setCheck("Number")});this.appendValueInput("LIST").setCheck("Array").appendField(a,"OP");this.setTooltip(function(){var a=b.getFieldValue("OP");return{SUM:Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM,MIN:Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN,MAX:Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX,AVERAGE:Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE,MEDIAN:Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN,
MODE:Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE,STD_DEV:Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV,RANDOM:Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM}[a]})}};Blockly.Blocks.math_modulo={init:function(){this.setHelpUrl(Blockly.Msg.MATH_MODULO_HELPURL);this.setColour(Blockly.Msg["MATH_HUE"]);this.setOutput(!0,"Number");this.interpolateMsg(Blockly.Msg.MATH_MODULO_TITLE,["DIVIDEND","Number",Blockly.ALIGN_RIGHT],["DIVISOR","Number",Blockly.ALIGN_RIGHT],Blockly.ALIGN_RIGHT);this.setInputsInline(!0);this.setTooltip(Blockly.Msg.MATH_MODULO_TOOLTIP)}};
Blockly.Blocks.math_constrain={
	init:function(){
		this.appendValueInput('VALUE')
			.setCheck(Number)
			.appendField(Blockly.Msg.MATH_CONSTRAIN_TITLE1);
		this.appendValueInput('LOW')
			.setCheck(Number)
			.appendField(Blockly.Msg.MATH_CONSTRAIN_TITLE2);
		this.appendValueInput('HIGH')
			.setCheck(Number)
			.appendField(Blockly.Msg.MATH_CONSTRAIN_TITLE3);
		this.setInputsInline(!0);
		this.setTooltip(Blockly.Msg.MATH_CONSTRAIN_TOOLTIP);			
		this.setHelpUrl(Blockly.Msg.MATH_CONSTRAIN_HELPURL);
		this.setColour(Blockly.Msg["MATH_HUE"]);
		this.setOutput(!0,"Number");
	}
};
Blockly.Blocks.math_random_int={init:function(){this.setHelpUrl(Blockly.Msg.MATH_RANDOM_INT_HELPURL);this.setColour(Blockly.Msg["MATH_HUE"]);this.setOutput(!0,"Number");this.interpolateMsg(Blockly.Msg.MATH_RANDOM_INT_TITLE,["FROM","Number",Blockly.ALIGN_RIGHT],["TO","Number",Blockly.ALIGN_RIGHT],Blockly.ALIGN_RIGHT);this.setInputsInline(!0);this.setTooltip(Blockly.Msg.MATH_RANDOM_INT_TOOLTIP)}};
Blockly.Blocks.math_random_float={init:function(){this.setHelpUrl(Blockly.Msg.MATH_RANDOM_FLOAT_HELPURL);this.setColour(Blockly.Msg["MATH_HUE"]);this.setOutput(!0,"Number");this.appendDummyInput().appendField(Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM);this.setTooltip(Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP)}};
Blockly.Blocks.math_random_max_min={init:function(){this.setHelpUrl(Blockly.Msg.MATH_RANDOM_MAX_MIN_HELPURL);this.setColour(Blockly.Msg["MATH_HUE"]);this.appendDummyInput().appendField(Blockly.Msg.MATH_RANDOM_MAX_MIN_APPENDTEXT_RANDOM);this.appendValueInput("MIN").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.MATH_RANDOM_MAX_MIN_APPENDTEXT_MIN);this.appendValueInput("MAX").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.MATH_RANDOM_MAX_MIN_APPENDTEXT_MAX);
this.setInputsInline(!0);this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.MATH_RANDOM_MAX_MIN_TOOLTIP)}};
Blockly.Blocks.math_map_int={init:function(){this.setHelpUrl(Blockly.Msg.MATH_MAP_HELPURL);this.setColour(Blockly.Msg["MATH_HUE"]);this.appendDummyInput().appendField(Blockly.Msg.MATH_MAP_APPENDTEXT_MAP);this.appendValueInput("VALUE").setCheck("Number").appendField(Blockly.Msg.MATH_MAP_APPENDTEXT_VALUE);this.appendDummyInput("FROMLOW").appendField(Blockly.Msg.MATH_MAP_APPENDTEXT_FROMLOW).appendField(new Blockly.FieldTextInput("0"),"FROMLOW");this.appendDummyInput("FROMHIGH").appendField(Blockly.Msg.MATH_MAP_APPENDTEXT_FROMHIGH).appendField(new Blockly.FieldTextInput("1023"),
"FROMHIGH");this.appendDummyInput().appendField(Blockly.Msg.MATH_MAP_APPENDTEXT_TOLOW).appendField(new Blockly.FieldTextInput("0"),"TOLOW");this.appendDummyInput().appendField(Blockly.Msg.MATH_MAP_APPENDTEXT_TOHIGH).appendField(new Blockly.FieldTextInput("255"),"TOHIGH");this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.MATH_MAP_TOOLTIP)}};
Blockly.Blocks.math_map_float={init:function(){this.setHelpUrl(Blockly.Msg.MATH_MAP_HELPURL);this.setColour(Blockly.Msg["MATH_HUE"]);this.appendDummyInput().appendField(Blockly.Msg.MATH_MAP_FLOAT_APPENDTEXT_MAP);this.appendValueInput("VALUE").setCheck("Number").appendField(Blockly.Msg.MATH_MAP_APPENDTEXT_VALUE);this.appendDummyInput("FROMLOW").appendField(Blockly.Msg.MATH_MAP_APPENDTEXT_FROMLOW).appendField(new Blockly.FieldTextInput("0"),"FROMLOW");this.appendDummyInput("FROMHIGH").appendField(Blockly.Msg.MATH_MAP_APPENDTEXT_FROMHIGH).appendField(new Blockly.FieldTextInput("1023"),
"FROMHIGH");this.appendDummyInput().appendField(Blockly.Msg.MATH_MAP_APPENDTEXT_TOLOW).appendField(new Blockly.FieldTextInput("0"),"TOLOW");this.appendDummyInput().appendField(Blockly.Msg.MATH_MAP_APPENDTEXT_TOHIGH).appendField(new Blockly.FieldTextInput("255"),"TOHIGH");this.setOutput(!0);this.setTooltip(Blockly.Msg.MATH_MAP_TOOLTIP)}};
Blockly.Blocks.math_pow={init:function(){this.setHelpUrl(Blockly.Msg.MATH_POW_HELPURL);this.setColour(Blockly.Msg["MATH_HUE"]);this.appendValueInput("pow").setCheck("Number").appendField(Blockly.Msg.MATH_POW_TITLE).appendField(Blockly.Msg.MATH_POW_BASE);this.appendValueInput("exp").setCheck("Number").appendField(Blockly.Msg.MATH_POW_EXP);this.setInputsInline(!0);this.setOutput(!0);this.setTooltip(Blockly.Msg.MATH_POW_TOOLTIP)}};
Blockly.Blocks.math_degree_to_radian={init:function(){this.setHelpUrl(Blockly.Msg.MATH_DEGREE_TO_RADIAN_HELPURL);this.setColour(Blockly.Msg["MATH_HUE"]);this.appendValueInput("DEGREE").setCheck("Number").appendField(Blockly.Msg.MATH_DEGREE_TO_RADIAN_TITLE);this.appendDummyInput().appendField(Blockly.Msg.MATH_DEGREE_TO_RADIAN_APPEND);this.setInputsInline(!0);this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.MATH_DEGREE_TO_RADIAN_TOOLTIP)}};Blockly.Blocks.ifttt={};Blockly.Blocks.ifttt.HUE=65;Blockly.Blocks.ifttt.image=filepath.media+"/ifttt.png";
Blockly.Blocks.math_radian_to_degree={init:function(){this.setHelpUrl(Blockly.Msg.MATH_DEGREE_TO_RADIAN_HELPURL);this.setColour(Blockly.Msg["MATH_HUE"]);this.appendValueInput("DEGREE").setCheck("Number").appendField(Blockly.Msg.MATH_RADIAN_TO_DEGREE_TITLE);this.appendDummyInput().appendField(Blockly.Msg.MATH_RADIAN_TO_DEGREE_APPEND);this.setInputsInline(!0);this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.MATH_RADIAN_TO_DEGREE_TOOLTIP)}};Blockly.Blocks.ifttt={};Blockly.Blocks.ifttt.HUE=65;Blockly.Blocks.ifttt.image=filepath.media+"/ifttt.png";


Blockly.Blocks.texts={};
Blockly.Constants.Text={};
Blockly.Constants.Text.HUE=160;
Blockly.defineBlocksWithJsonArray([
{type:"text",message0:'%1',args0:[{type:"field_input",name:"TEXT",text:""}],output:"String",style:"text_blocks",helpUrl:"%{BKY_TEXT_TEXT_HELPURL}",tooltip:"%{BKY_TEXT_TEXT_TOOLTIP}",extensions:["text_quotes","parent_tooltip_when_inline"]}
,{type:"text_quotationmark",message0:"%1",args0:[{type:"field_input",name:"TEXT",text:""}],output:"String",style:"text_blocks",helpUrl:"%{BKY_TEXT_TEXT_HELPURL}",tooltip:"%{BKY_TEXT_TEXT_TOOLTIP}",extensions:["text_quotes1","parent_tooltip_when_inline"]}
,{type:"text_multiline",message0:"%1 %2",args0:[{type:"field_image",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAdhgAAHYYBXaITgQAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMS42/U4J6AAAAP1JREFUOE+Vks0KQUEYhjmRIja4ABtZ2dm5A3t3Ia6AUm7CylYuQRaUhZSlLZJiQbFAyRnPN33y01HOW08z8873zpwzM4F3GWOCruvGIE4/rLaV+Nq1hVGMBqzhqlxgCys4wJA65xnogMHsQ5lujnYHTejBBCK2mE4abjCgMGhNxHgDFWjDSG07kdfVa2pZMf4ZyMAdWmpZMfYOsLiDMYMjlMB+K613QISRhTnITnsYg5yUd0DETmEoMlkFOeIT/A58iyK5E18BuTBfgYXfwNJv4P9/oEBerLylOnRhygmGdPpTTBZAPkde61lbQe4moWUvYUZYLfUNftIY4zwA5X2Z9AYnQrEAAAAASUVORK5CYII=",width:12,height:17,alt:"\u00b6"}
,{type:"field_multilinetext",name:"TEXT",text:""}],output:"String",style:"text_blocks",helpUrl:"%{BKY_TEXT_TEXT_HELPURL}",tooltip:"%{BKY_TEXT_TEXT_TOOLTIP}",extensions:["parent_tooltip_when_inline"]}
,{type:"text_join",message0:"",output:"String",style:"text_blocks",helpUrl:"%{BKY_TEXT_JOIN_HELPURL}",tooltip:"%{BKY_TEXT_JOIN_TOOLTIP}",mutator:"text_join_mutator"}
,{type:"text_create_join_container",message0:"%{BKY_TEXT_CREATE_JOIN_TITLE_JOIN} %1 %2",args0:[{type:"input_dummy"}
,{type:"input_statement",name:"STACK"}],style:"text_blocks",tooltip:"%{BKY_TEXT_CREATE_JOIN_TOOLTIP}",enableContextMenu:!1},{type:"text_create_join_item",message0:"%{BKY_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM}",previousStatement:null,nextStatement:null,style:"text_blocks",tooltip:"%{BKY_TEXT_CREATE_JOIN_ITEM_TOOLTIP}",enableContextMenu:!1}
,{type:"text_append",message0:"%{BKY_TEXT_APPEND_TITLE}",args0:[{type:"field_variable",name:"VAR"},{type:"input_value",name:"TEXT"}],previousStatement:null,nextStatement:null,style:"text_blocks",extensions:["text_append_tooltip"]}
,{type:"text_length",message0:"%{BKY_TEXT_LENGTH_TITLE}",args0:[{type:"input_value",name:"VALUE",check:["String","Array"]}],output:"Number",style:"text_blocks",tooltip:"%{BKY_TEXT_LENGTH_TOOLTIP}",helpUrl:"%{BKY_TEXT_LENGTH_HELPURL}"}
,{type:"text_isEmpty",message0:"%{BKY_TEXT_ISEMPTY_TITLE}",args0:[{type:"input_value",name:"VALUE",check:["String","Array"]}],output:"Boolean",style:"logic_blocks",tooltip:"%{BKY_TEXT_ISEMPTY_TOOLTIP}",helpUrl:"%{BKY_TEXT_ISEMPTY_HELPURL}"}
,{type:"text_indexOf",message0:"%{BKY_TEXT_INDEXOF_TITLE}",args0:[{type:"input_value",name:"VALUE",check:"String"},{type:"field_dropdown",name:"END",options:[["%{BKY_TEXT_INDEXOF_OPERATOR_FIRST}","FIRST"],["%{BKY_TEXT_INDEXOF_OPERATOR_LAST}","LAST"]]}
,{type:"input_value",name:"FIND",check:"String"}],output:"Number",style:"text_blocks",helpUrl:"%{BKY_TEXT_INDEXOF_HELPURL}",inputsInline:!0,extensions:["text_indexOf_tooltip"]}
,{type:"text_charAt",message0:"%{BKY_TEXT_CHARAT_TITLE}",args0:[{type:"input_value",name:"VALUE",check:"String"},{type:"field_dropdown",name:"WHERE",options:[["%{BKY_TEXT_CHARAT_FROM_START}","FROM_START"],["%{BKY_TEXT_CHARAT_FROM_END}","FROM_END"],["%{BKY_TEXT_CHARAT_FIRST}","FIRST"],["%{BKY_TEXT_CHARAT_LAST}","LAST"],["%{BKY_TEXT_CHARAT_RANDOM}","RANDOM"]]}],output:"String",style:"text_blocks",helpUrl:"%{BKY_TEXT_CHARAT_HELPURL}",inputsInline:!0,mutator:"text_charAt_mutator"}]);
Blockly.Blocks.text_getSubstring={init:function(){this.WHERE_OPTIONS_1=[[Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START,"FROM_START"],[Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END,"FROM_END"],[Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST,"FIRST"]];this.WHERE_OPTIONS_2=[[Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START,"FROM_START"],[Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END,"FROM_END"],[Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST,"LAST"]];this.setHelpUrl(Blockly.Msg.TEXT_GET_SUBSTRING_HELPURL);this.setStyle("text_blocks");
this.appendValueInput("STRING").setCheck("String").appendField(Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT);this.appendDummyInput("AT1");this.appendDummyInput("AT2");Blockly.Msg.TEXT_GET_SUBSTRING_TAIL&&this.appendDummyInput("TAIL").appendField(Blockly.Msg.TEXT_GET_SUBSTRING_TAIL);this.setInputsInline(!0);this.setOutput(!0,"String");this.updateAt_(1,!0);this.updateAt_(2,!0);this.setTooltip(Blockly.Msg.TEXT_GET_SUBSTRING_TOOLTIP)},mutationToDom:function(){var a=Blockly.utils.xml.createElement("mutation"),
b=this.getInput("AT1").type==Blockly.INPUT_VALUE;a.setAttribute("at1",b);b=this.getInput("AT2").type==Blockly.INPUT_VALUE;a.setAttribute("at2",b);return a},domToMutation:function(a){var b="true"==a.getAttribute("at1");a="true"==a.getAttribute("at2");this.updateAt_(1,b);this.updateAt_(2,a)},updateAt_:function(a,b){this.removeInput("AT"+a);this.removeInput("ORDINAL"+a,!0);b?(this.appendValueInput("AT"+a).setCheck("Number"),Blockly.Msg.ORDINAL_NUMBER_SUFFIX&&this.appendDummyInput("ORDINAL"+a).appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)):
this.appendDummyInput("AT"+a);2==a&&Blockly.Msg.TEXT_GET_SUBSTRING_TAIL&&(this.removeInput("TAIL",!0),this.appendDummyInput("TAIL").appendField(Blockly.Msg.TEXT_GET_SUBSTRING_TAIL));var c=new Blockly.FieldDropdown(this["WHERE_OPTIONS_"+a],function(d){var e="FROM_START"==d||"FROM_END"==d;if(e!=b){var f=this.getSourceBlock();f.updateAt_(a,e);f.setFieldValue(d,"WHERE"+a);return null}});this.getInput("AT"+a).appendField(c,"WHERE"+a);1==a&&(this.moveInputBefore("AT1","AT2"),this.getInput("ORDINAL1")&&
this.moveInputBefore("ORDINAL1","AT2"))}};
Blockly.Blocks.text_changeCase={
	init:function(){
		var a=[[Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE,"UPPERCASE"],[Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE,"LOWERCASE"]];
		this.setHelpUrl(Blockly.Msg.TEXT_CHANGECASE_HELPURL);
		this.setStyle("text_blocks");
		this.appendValueInput("TEXT")
			.setCheck("String")
			.appendField(new Blockly.FieldDropdown(a),"CASE");
		this.setOutput(!0,"String");
		this.setTooltip(Blockly.Msg.TEXT_CHANGECASE_TOOLTIP)
	}
};
Blockly.Blocks.variable_changeCase={
	init:function(){
		var a=[[Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE,"UPPERCASE"],[Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE,"LOWERCASE"]];
        this.appendDummyInput()
			.appendField(new Blockly.FieldVariable(null), 'VAR');
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(a),"CASE");
		this.setInputsInline(!0);			
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(330);
	}
};
Blockly.Blocks.text_with={
	init:function(){
		var a=[["%{BKY_TEXT_WITH_OPERATOR_FIRST}","FIRST"],["%{BKY_TEXT_WITH_OPERATOR_LAST}","LAST"]];
        this.appendDummyInput()
			.appendField(Blockly.Msg.TEXT_INDEXOF_INPUT_INTEXT);			
		this.appendValueInput("VALUE")
			.setCheck(null);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(a),"WHERE");
		this.appendValueInput("FIND")
			.setCheck("String");
		this.setInputsInline(!0);
		this.setOutput(!0,"String");
		this.setTooltip(Blockly.Msg.TEXT_WITH_TOOLTIP)
		this.setHelpUrl(Blockly.Msg.TEXT_WITH_HELPURL);
		this.setStyle("text_blocks");	
	}
};
Blockly.Blocks.text_replace={
	init:function(){
        this.appendDummyInput()
			.appendField(Blockly.Msg.TEXT_INDEXOF_INPUT_INTEXT);		
        this.appendDummyInput()
			.appendField(new Blockly.FieldVariable(null), 'VAR');	
		this.appendValueInput("FROM")
			.setCheck("String")
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg.VARIABLES_TO_REPLACE);			
		this.appendValueInput("TO")
			.setCheck("String")
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg.LISTS_SET_INDEX_INPUT_TO);
		this.setInputsInline(!0);			
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setStyle("text_blocks");
	}
};
Blockly.Blocks.text_trim={init:function(){var a=[[Blockly.Msg.TEXT_TRIM_OPERATOR_BOTH,"BOTH"]];this.setInputsInline(!0);this.setHelpUrl(Blockly.Msg.TEXT_TRIM_HELPURL);this.setStyle("text_blocks");this.appendValueInput("TEXT").setCheck("String");this.appendDummyInput().appendField(new Blockly.FieldDropdown(a),"MODE");this.setPreviousStatement(true);this.setNextStatement(true);this.setTooltip(Blockly.Msg.TEXT_TRIM_TOOLTIP)}};
Blockly.Blocks.text_print={init:function(){this.jsonInit({message0:Blockly.Msg.TEXT_PRINT_TITLE,args0:[{type:"input_value",name:"TEXT"}],previousStatement:null,nextStatement:null,style:"text_blocks",tooltip:Blockly.Msg.TEXT_PRINT_TOOLTIP,helpUrl:Blockly.Msg.TEXT_PRINT_HELPURL})}};
Blockly.Blocks.text_prompt_ext={init:function(){var a=[[Blockly.Msg.TEXT_PROMPT_TYPE_TEXT,"TEXT"],[Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER,"NUMBER"]];this.setHelpUrl(Blockly.Msg.TEXT_PROMPT_HELPURL);this.setStyle("text_blocks");var b=this;a=new Blockly.FieldDropdown(a,function(c){b.updateType_(c)});this.appendValueInput("TEXT").appendField(a,"TYPE");this.setOutput(!0,"String");this.setTooltip(function(){return"TEXT"==b.getFieldValue("TYPE")?Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT:Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER})},
updateType_:function(a){this.outputConnection.setCheck("NUMBER"==a?"Number":"String")},mutationToDom:function(){var a=Blockly.utils.xml.createElement("mutation");a.setAttribute("type",this.getFieldValue("TYPE"));return a},domToMutation:function(a){this.updateType_(a.getAttribute("type"))}};
Blockly.Blocks.text_prompt={init:function(){this.mixin(Blockly.Constants.Text.QUOTE_IMAGE_MIXIN);var a=[[Blockly.Msg.TEXT_PROMPT_TYPE_TEXT,"TEXT"],[Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER,"NUMBER"]],b=this;this.setHelpUrl(Blockly.Msg.TEXT_PROMPT_HELPURL);this.setStyle("text_blocks");a=new Blockly.FieldDropdown(a,function(c){b.updateType_(c)});this.appendDummyInput().appendField(a,"TYPE").appendField(this.newQuote_(!0)).appendField(new Blockly.FieldTextInput(""),"TEXT").appendField(this.newQuote_(!1));
this.setOutput(!0,"String");this.setTooltip(function(){return"TEXT"==b.getFieldValue("TYPE")?Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT:Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER})},updateType_:Blockly.Blocks.text_prompt_ext.updateType_,mutationToDom:Blockly.Blocks.text_prompt_ext.mutationToDom,domToMutation:Blockly.Blocks.text_prompt_ext.domToMutation};
Blockly.Blocks.text_count={init:function(){this.jsonInit({message0:Blockly.Msg.TEXT_COUNT_MESSAGE0,args0:[{type:"input_value",name:"SUB",check:"String"},{type:"input_value",name:"TEXT",check:"String"}],output:"Number",inputsInline:!0,style:"text_blocks",tooltip:Blockly.Msg.TEXT_COUNT_TOOLTIP,helpUrl:Blockly.Msg.TEXT_COUNT_HELPURL})}};
Blockly.Blocks.text_reverse={init:function(){this.jsonInit({message0:Blockly.Msg.TEXT_REVERSE_MESSAGE0,args0:[{type:"input_value",name:"TEXT",check:"String"}],output:"String",inputsInline:!0,style:"text_blocks",tooltip:Blockly.Msg.TEXT_REVERSE_TOOLTIP,helpUrl:Blockly.Msg.TEXT_REVERSE_HELPURL})}};
Blockly.Constants.Text.QUOTE_IMAGE_MIXIN={QUOTE_IMAGE_LEFT_DATAURI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC",QUOTE_IMAGE_RIGHT_DATAURI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==",
QUOTE_IMAGE_WIDTH:12,QUOTE_IMAGE_HEIGHT:12,quoteField_:function(a){for(var b=0,c;c=this.inputList[b];b++)for(var d=0,e;e=c.fieldRow[d];d++)if(a==e.name){c.insertFieldAt(d,this.newQuote_(!0));c.insertFieldAt(d+2,this.newQuote_(!1));return}console.warn('field named "'+a+'" not found in '+this.toDevString())},newQuote_:function(a){a=this.RTL?!a:a;return new Blockly.FieldImage(a?this.QUOTE_IMAGE_LEFT_DATAURI:this.QUOTE_IMAGE_RIGHT_DATAURI,this.QUOTE_IMAGE_WIDTH,this.QUOTE_IMAGE_HEIGHT,a?"\u201c":"\u201d")}};
Blockly.Constants.Text.QUOTE1_IMAGE_MIXIN={QUOTE_IMAGE_LEFT_DATAURI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAKCAQAAAA9B+e4AAAABGdBTUEAALGPC/xhBQAAAAJiS0dEAP+Hj8y/AAAAB3RJTUUH5QkFBjYnmAjqfgAAAAFvck5UAc+id5oAAABjSURBVAjXNYqxDcJAFMX8T5QRRQpqJCjCAkiZIBJtpDQswTRsQZk1MgIrnJIBMMXlXPlZDwDw5OxQ9KZm74BXdWG/bK6mog91KjnRAaNve8CXlXPiS+USBr99tIfQI08aPpH/g1EtvtIAR7oAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDktMDVUMDY6NTM6MTkrMDA6MDDcGc8oAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA5LTA1VDA2OjUzOjE5KzAwOjAwrUR3lAAAAABJRU5ErkJggg==",QUOTE_IMAGE_RIGHT_DATAURI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAKCAQAAAA9B+e4AAAABGdBTUEAALGPC/xhBQAAAAJiS0dEAP+Hj8y/AAAAB3RJTUUH5QkFBjgwhVhCNwAAAAFvck5UAc+id5oAAABmSURBVAjXNcixCcJQGADh+x8iJJUBQQMOkB1cwMIys9jZpkktuIQT2QSsXMCAEM7i+b7quADPdEw8QuzNboCDxSbxotivuDNz5MSB+E+fapWzdXHM2aiza8CLX9/WAIkt19jFB+AHAc4yJ9BCb70AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDktMDVUMDY6NTY6MjIrMDA6MDC2uFd1AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA5LTA1VDA2OjU2OjIyKzAwOjAwx+XvyQAAAABJRU5ErkJggg==",
QUOTE_IMAGE_WIDTH:6,QUOTE_IMAGE_HEIGHT:12,quoteField_:function(a){for(var b=0,c;c=this.inputList[b];b++)for(var d=0,e;e=c.fieldRow[d];d++)if(a==e.name){c.insertFieldAt(d,this.newQuote_(!0));c.insertFieldAt(d+2,this.newQuote_(!1));return}console.warn('field named "'+a+'" not found in '+this.toDevString())},newQuote_:function(a){a=this.RTL?!a:a;return new Blockly.FieldImage(a?this.QUOTE_IMAGE_LEFT_DATAURI:this.QUOTE_IMAGE_RIGHT_DATAURI,this.QUOTE_IMAGE_WIDTH,this.QUOTE_IMAGE_HEIGHT,a?"\u201c":"\u201d")}};
Blockly.Constants.Text.TEXT_QUOTES_EXTENSION=function(){this.mixin(Blockly.Constants.Text.QUOTE_IMAGE_MIXIN);this.quoteField_("TEXT")};
Blockly.Constants.Text.TEXT_QUOTES1_EXTENSION=function(){this.mixin(Blockly.Constants.Text.QUOTE1_IMAGE_MIXIN);this.quoteField_("TEXT")};
Blockly.Constants.Text.TEXT_JOIN_MUTATOR_MIXIN={mutationToDom:function(){var a=Blockly.utils.xml.createElement("mutation");a.setAttribute("items",this.itemCount_);return a},domToMutation:function(a){this.itemCount_=parseInt(a.getAttribute("items"),10);this.updateShape_()},decompose:function(a){var b=a.newBlock("text_create_join_container");b.initSvg();for(var c=b.getInput("STACK").connection,d=0;d<this.itemCount_;d++){var e=a.newBlock("text_create_join_item");e.initSvg();c.connect(e.previousConnection);
c=e.nextConnection}return b},compose:function(a){var b=a.getInputTargetBlock("STACK");for(a=[];b&&!b.isInsertionMarker();)a.push(b.valueConnection_),b=b.nextConnection&&b.nextConnection.targetBlock();for(b=0;b<this.itemCount_;b++){var c=this.getInput("ADD"+b).connection.targetConnection;c&&-1==a.indexOf(c)&&c.disconnect()}this.itemCount_=a.length;this.updateShape_();for(b=0;b<this.itemCount_;b++)Blockly.Mutator.reconnect(a[b],this,"ADD"+b)},saveConnections:function(a){a=a.getInputTargetBlock("STACK");
for(var b=0;a;){var c=this.getInput("ADD"+b);a.valueConnection_=c&&c.connection.targetConnection;b++;a=a.nextConnection&&a.nextConnection.targetBlock()}},updateShape_:function(){this.itemCount_&&this.getInput("EMPTY")?this.removeInput("EMPTY"):this.itemCount_||this.getInput("EMPTY")||this.appendDummyInput("EMPTY").appendField(this.newQuote_(!0)).appendField(this.newQuote_(!1));for(var a=0;a<this.itemCount_;a++)if(!this.getInput("ADD"+a)){var b=this.appendValueInput("ADD"+a).setAlign(Blockly.ALIGN_RIGHT);
0==a&&b.appendField(Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH)}for(;this.getInput("ADD"+a);)this.removeInput("ADD"+a),a++}};Blockly.Constants.Text.TEXT_JOIN_EXTENSION=function(){this.mixin(Blockly.Constants.Text.QUOTE_IMAGE_MIXIN);this.itemCount_=2;this.updateShape_();this.setMutator(new Blockly.Mutator(["text_create_join_item"]))};Blockly.Extensions.register("text_append_tooltip",Blockly.Extensions.buildTooltipWithFieldText("%{BKY_TEXT_APPEND_TOOLTIP}","VAR"));
Blockly.Constants.Text.TEXT_INDEXOF_TOOLTIP_EXTENSION=function(){var a=this;this.setTooltip(function(){return Blockly.Msg.TEXT_INDEXOF_TOOLTIP.replace("%1",a.workspace.options.oneBasedIndex?"0":"-1")})};
Blockly.Constants.Text.TEXT_CHARAT_MUTATOR_MIXIN={mutationToDom:function(){var a=Blockly.utils.xml.createElement("mutation");a.setAttribute("at",!!this.isAt_);return a},domToMutation:function(a){a="false"!=a.getAttribute("at");this.updateAt_(a)},updateAt_:function(a){this.removeInput("AT",!0);this.removeInput("ORDINAL",!0);a&&(this.appendValueInput("AT").setCheck("Number"),Blockly.Msg.ORDINAL_NUMBER_SUFFIX&&this.appendDummyInput("ORDINAL").appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX));Blockly.Msg.TEXT_CHARAT_TAIL&&
(this.removeInput("TAIL",!0),this.appendDummyInput("TAIL").appendField(Blockly.Msg.TEXT_CHARAT_TAIL));this.isAt_=a}};
Blockly.Constants.Text.TEXT_CHARAT_EXTENSION=function(){this.getField("WHERE").setValidator(function(b){b="FROM_START"==b||"FROM_END"==b;b!=this.isAt_&&this.getSourceBlock().updateAt_(b)});this.updateAt_(!0);var a=this;this.setTooltip(function(){var b=a.getFieldValue("WHERE"),c=Blockly.Msg.TEXT_CHARAT_TOOLTIP;("FROM_START"==b||"FROM_END"==b)&&(b="FROM_START"==b?Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP:Blockly.Msg.LISTS_INDEX_FROM_END_TOOLTIP)&&(c+="  "+b.replace("%1",a.workspace.options.oneBasedIndex?
"#1":"#0"));return c})};
Blockly.Extensions.register("text_indexOf_tooltip",Blockly.Constants.Text.TEXT_INDEXOF_TOOLTIP_EXTENSION);
Blockly.Extensions.register("text_quotes",Blockly.Constants.Text.TEXT_QUOTES_EXTENSION);
Blockly.Extensions.register("text_quotes1",Blockly.Constants.Text.TEXT_QUOTES1_EXTENSION);
Blockly.Extensions.registerMutator("text_join_mutator",Blockly.Constants.Text.TEXT_JOIN_MUTATOR_MIXIN,Blockly.Constants.Text.TEXT_JOIN_EXTENSION);
Blockly.Extensions.registerMutator("text_charAt_mutator",Blockly.Constants.Text.TEXT_CHARAT_MUTATOR_MIXIN,Blockly.Constants.Text.TEXT_CHARAT_EXTENSION);


Blockly.Blocks.array={};
Blockly.Msg["LISTS_HUE"]=260;
Blockly.Blocks.array_create_with=Blockly.Blocks.lists_create_with;
Blockly.Blocks.array_create_with_item=Blockly.Blocks.lists_create_with_item;
Blockly.Blocks.array_create_with_container=Blockly.Blocks.lists_create_with_container;
Blockly.Blocks.array_modify = {
  init: function() {
	this.setStyle("list_blocks");
    this.setColour(Blockly.Msg["LISTS_HUE"]);
    this.appendValueInput("name")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARRAY_MODIFY_NAME);
    this.appendValueInput("indice")
        .setCheck("Number")
    		.appendField(Blockly.Msg.ARRAY_MODIFY_INDICE);
    this.appendValueInput("value")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARRAY_MODIFY_VALUE);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARRAY_MODIFY_TOOLTIP);
	  this.setHelpUrl('http://www.mon-club-elec.fr/pmwiki_reference_arduino/pmwiki.php?n=Main.Tableaux');
  }
};
Blockly.Blocks.array_getIndex={
  init:function(){
	this.setStyle("list_blocks");
    this.setHelpUrl(Blockly.Msg.ARRAY_GETINDEX);
    this.setColour(Blockly.Msg["LISTS_HUE"]);
    this.appendValueInput("ITEM")
        .setCheck("Array")
        .appendField(Blockly.Msg.ARRAY_GETINDEX_ITEM);
    this.appendValueInput("AT")
        .setCheck("Number")
        .appendField(Blockly.Msg.ARRAY_GETINDEX_AT);
    this.setInputsInline(!0);
    this.setOutput(!0);
    this.setTooltip(Blockly.Msg.ARRAY_GETINDEX_TOOLTIP)
  }
};
Blockly.Blocks.array_sizeof={
  init:function(){
	this.setStyle("list_blocks");
    this.setHelpUrl(Blockly.Msg.ARRAY_GETINDEX);
    this.setColour(Blockly.Msg["LISTS_HUE"]);
    this.appendValueInput("ITEM")
        .setCheck("Array")
        .appendField(Blockly.Msg.ARRAY_GETSIZE_ITEM);
    this.setInputsInline(!0);
    this.setOutput(!0);
    this.setTooltip(Blockly.Msg.ARRAY_GETINDEX_TOOLTIP)
  }
};
Blockly.Blocks.array_for={
  init:function(){
	this.setStyle("list_blocks");
    this.setHelpUrl(Blockly.Msg.CONTROLS_FOR_HELPURL);
    this.setColour(Blockly.Msg["LISTS_HUE"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg.CONTROLS_FOR_INPUT_WITH)
        .appendField(new Blockly.FieldVariable(null),"VAR");
	this.appendValueInput("FROM")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ARRAY_FOR_INPUT_FROM_TO1);   
	this.appendValueInput("TO")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ARRAY_FOR_INPUT_FROM_TO2);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARRAY_FOR_INPUT_FROM_TO3);		
    this.appendStatementInput("DO")
        .appendField(Blockly.Msg.CONTROLS_FOR_INPUT_DO);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setInputsInline(!0);
    var a=this;
    this.setTooltip(function(){
      return Blockly.Msg.CONTROLS_FOR_TOOLTIP.replace("%1",a.getFieldValue("VAR"))})
  },
  getVars:function(){
    return[this.getFieldValue("VAR")]
  },
  renameVar:function(a,b){
    Blockly.Names.equals(a,this.getFieldValue("VAR"))&&this.setFieldValue(b,"VAR")
  },
  customContextMenu:function(a){
    if(!this.isCollapsed()){
      var b={enabled:!0},
          d=this.getFieldValue("VAR");
      b.text=Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1",d);
      d=goog.dom.createDom("field",null,d);
      d.setAttribute("name","VAR");
      d=goog.dom.createDom("block",null,d);
      d.setAttribute("type","variables_get");
      b.callback=Blockly.ContextMenu.callbackFactory(this,d);a.push(b)}
  }
};



// Copyright 2012 Google Inc.  Apache License 2.0
Blockly.Blocks.variables={};
Blockly.Constants.Variables={};
Blockly.Blocks.variables_get={
	init:function(){
		this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
		this.setStyle("variable_blocks");
		this.appendDummyInput()
			.appendField(Blockly.Msg.VARIABLES_GET_TITLE)
			.appendField(new Blockly.FieldVariable(null),"VAR")
			.appendField(Blockly.Msg.VARIABLES_GET_TAIL);
		this.setOutput(!0);
		this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);		
	}
};
Blockly.Blocks.variables_set={
  init:function(){
	this.setStyle("variable_blocks");
	this.appendDummyInput()
		.appendField(Blockly.Msg.VARIABLES_SET_TITLE)	
		.appendField(new Blockly.FieldDropdown(Blockly.Variables.positionTypes()), "POSITION");   
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown(Blockly.Variables.allTypes1()), "TYPE");  
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable(null), 'VAR');	
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField(Blockly.Msg.VARIABLES_SET_TAIL);		
    this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
    this.setColour(50);
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
  }
};
Blockly.Blocks.variables_set1={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.VARIABLES_SET_TITLE)	
			.appendField(new Blockly.FieldDropdown(Blockly.Variables.positionTypes()), "POSITION");    
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(Blockly.Variables.allTypes1()), "TYPE");  
		this.appendDummyInput()
			.appendField(new Blockly.FieldVariable(null), 'VAR');	
		this.appendValueInput("LEN")
			.setCheck("Number")
			.appendField(Blockly.Msg.ARRAY_FOR_INPUT_FROM_TO3);			
		this.appendValueInput("VALUE")
			.setCheck(null)
			.appendField(Blockly.Msg.VARIABLES_SET_TAIL);		
		this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
		this.setInputsInline(true);
		this.setPreviousStatement(!0);
		this.setNextStatement(!0);
		this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
		this.setColour(50);
	}
    ,onchange: function(event) {
		if (!this.workspace || this.workspace.isFlyout) {
		  // Block is deleted or is in a flyout.
		  return;
		}
		if (!event.recordUndo) {
		  // Events not generated by user. Skip handling.
		  return;
		}
		var targetBlock = this.getInputTargetBlock('VALUE');
		if (targetBlock) { 
			if (targetBlock.type=="lists_create_with") {
				var targetBlock1 = this.getInputTargetBlock('LEN');
				if (targetBlock1) {
					if (targetBlock1.type=="math_number") {
						targetBlock1.setFieldValue(targetBlock.itemCount_, 'NUM');
					}
				}
			}
		}
	}
};
Blockly.Blocks.variables_set2={
  init:function(){ 
	this.setStyle("variable_blocks");  
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown(Blockly.Variables.allTypes1()), "TYPE");  
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable(null), 'VAR');		
    this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
	this.setInputsInline(true);
	this.setOutput(!0);
    this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
	this.setColour(50);
  }
};
Blockly.Blocks.variables_set3={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.LISTS_SET_INDEX_SET)
			.appendField(new Blockly.FieldVariable(null), 'VAR');
		this.appendValueInput("DELTA")
			.setCheck(null)
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg.VARIABLES_SET_TAIL);
		this.setHelpUrl(Blockly.Msg.MATH_CHANGE_HELPURL);
		this.setInputsInline(!0);
		this.setPreviousStatement(!0);
		this.setNextStatement(!0);
		this.setStyle("variable_blocks");
	}
};
Blockly.Blocks.variables_set4={
	init:function(){ 
		this.appendDummyInput()
			.appendField(Blockly.Msg.LISTS_SET_INDEX_SET); 
		this.appendDummyInput()
			.appendField(new Blockly.FieldVariable(null), 'VAR');	
		this.appendValueInput("INDEX")
			.setCheck("Number")
			.appendField(Blockly.Msg.ARRAY_GETINDEX_AT2);			
		this.appendValueInput("VALUE")
			.setCheck(null)
			.appendField(Blockly.Msg.VARIABLES_SET_TAIL);		
		this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
		this.setInputsInline(true);
		this.setPreviousStatement(!0);
		this.setNextStatement(!0);
		this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
		this.setStyle("variable_blocks");
	}
};
Blockly.Blocks.variables_set5={
	init:function(){
		this.appendDummyInput()
			.appendField(new Blockly.FieldVariable(null), 'VAR');	
		this.appendValueInput("INDEX")
			.setCheck("Number")
			.appendField(Blockly.Msg.ARRAY_GETINDEX_AT2);
		this.setInputsInline(true);
		this.setOutput(!0);		
		this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
		this.setStyle("variable_blocks");
	}
};
Blockly.Blocks.variables_set6={
	init:function(){    
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown(Blockly.Variables.allTypes1()), "TYPE");  
	this.appendDummyInput()
		.appendField(new Blockly.FieldVariable(null), 'VAR');
	this.appendValueInput("LEN")
		.setCheck("Number")
		.appendField(Blockly.Msg.ARRAY_FOR_INPUT_FROM_TO3);		
	this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
	this.setInputsInline(true);
	this.setOutput(!0);
	this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
	this.setColour(50);
	}
	,onchange: function(event) {
		if (!this.workspace) {
		  // Block is deleted.
		  return;
		}
		if (!event.recordUndo) {
		  // Events not generated by user. Skip handling.
		  return;
		}
		var targetBlock = this.getInputTargetBlock('LEN');
		if (targetBlock) { 
			if (targetBlock.type=="variables_set2") {
				targetBlock.unplug();
			}
		}
	}
};
Blockly.Blocks.variables_set7={
	init:function(){ 
		this.appendDummyInput()
			.appendField(Blockly.Msg.VARIABLES_DEFINE); 
		this.appendDummyInput()
			.appendField(new Blockly.FieldVariable(null), 'VAR');			
		this.appendValueInput("VALUE")
			.setCheck(null)
			.appendField(Blockly.Msg.VARIABLES_SET_TAIL);		
		this.setHelpUrl("https://www.arduino.cc/reference/en/language/structure/further-syntax/define/");
		this.setInputsInline(true);
		this.setPreviousStatement(!0);
		this.setNextStatement(!0);
		this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
		this.setColour(50);
	}
};

Blockly.Constants.Variables.CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN={
	customContextMenu:function(a){
		if(!this.isInFlyout){
			if("variables_get"==this.type)
				var b="variables_set",c=Blockly.Msg.VARIABLES_GET_CREATE_SET;
			else 
				b="variables_get",c=Blockly.Msg.VARIABLES_SET_CREATE_GET;
			var d={enabled:0<this.workspace.remainingCapacity()},e=this.getField("VAR").getText();
			d.text=c.replace("%1",e);
			c=Blockly.utils.xml.createElement("field");
			c.setAttribute("name","VAR");
			c.appendChild(Blockly.utils.xml.createTextNode(e));
			e=Blockly.utils.xml.createElement("block");
			e.setAttribute("type",b);
			e.appendChild(c);
			d.callback=Blockly.ContextMenu.callbackFactory(this,e);
			a.push(d)
		}
		else if("variables_get"==this.type||"variables_get_reporter"==this.type)
			b={text:Blockly.Msg.RENAME_VARIABLE,enabled:!0,callback:Blockly.Constants.Variables.RENAME_OPTION_CALLBACK_FACTORY(this)},e=this.getField("VAR").getText(),d={text:Blockly.Msg.DELETE_VARIABLE.replace("%1",e),enabled:!0,callback:Blockly.Constants.Variables.DELETE_OPTION_CALLBACK_FACTORY(this)},a.unshift(b),a.unshift(d)
	}
};
Blockly.Constants.Variables.RENAME_OPTION_CALLBACK_FACTORY=function(a){
	return function(){var b=a.workspace,c=a.getField("VAR").getVariable();Blockly.Variables.renameVariable(b,c)}
};
Blockly.Constants.Variables.DELETE_OPTION_CALLBACK_FACTORY=function(a){
	return function(){
		var b=a.workspace,c=a.getField("VAR").getVariable();
		b.deleteVariableById(c.getId());
		b.refreshToolboxSelection()
	}
};
Blockly.Extensions.registerMixin("contextMenu_variableSetterGetter",Blockly.Constants.Variables.CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN);

Blockly.Constants.VariablesDynamic={};
Blockly.Constants.VariablesDynamic.HUE=310;
Blockly.defineBlocksWithJsonArray(
	[{type:"variables_get_dynamic",message0:"%1",args0:[{type:"field_variable",name:"VAR",variable:"%{BKY_VARIABLES_DEFAULT_NAME}"}],output:null,style:"variable_dynamic_blocks",helpUrl:"%{BKY_VARIABLES_GET_HELPURL}",tooltip:"%{BKY_VARIABLES_GET_TOOLTIP}",extensions:["contextMenu_variableDynamicSetterGetter"]},{type:"variables_set_dynamic",message0:"%{BKY_VARIABLES_SET}",args0:[{type:"field_variable",name:"VAR",variable:"%{BKY_VARIABLES_DEFAULT_NAME}"},{type:"input_value",name:"VALUE"}],previousStatement:null,nextStatement:null,style:"variable_dynamic_blocks",tooltip:"%{BKY_VARIABLES_SET_TOOLTIP}",helpUrl:"%{BKY_VARIABLES_SET_HELPURL}",extensions:["contextMenu_variableDynamicSetterGetter"]}]
);
Blockly.Constants.VariablesDynamic.CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN={
	customContextMenu:function(a){
		if(!this.isInFlyout){
			var b=this.getFieldValue("VAR");
			var c=this.workspace.getVariableById(b).type;
			if("variables_get_dynamic"==this.type){
				b="variables_set_dynamic";
				var d=Blockly.Msg.VARIABLES_GET_CREATE_SET
			}
			else 
				b="variables_get_dynamic",d=Blockly.Msg.VARIABLES_SET_CREATE_GET;
			var e={enabled:0<this.workspace.remainingCapacity()},f=this.getField("VAR").getText();e.text=d.replace("%1",f);
			d=Blockly.utils.xml.createElement("field");
			d.setAttribute("name","VAR");
			d.setAttribute("variabletype",c);
			d.appendChild(Blockly.utils.xml.createTextNode(f));
			f=Blockly.utils.xml.createElement("block");
			f.setAttribute("type",b);
			f.appendChild(d);
			e.callback=Blockly.ContextMenu.callbackFactory(this,f);
			a.push(e)
		}
		else if("variables_get_dynamic"==this.type||"variables_get_reporter_dynamic"==this.type)
			b={text:Blockly.Msg.RENAME_VARIABLE,enabled:!0,callback:Blockly.Constants.Variables.RENAME_OPTION_CALLBACK_FACTORY(this)},f=this.getField("VAR").getText(),e={text:Blockly.Msg.DELETE_VARIABLE.replace("%1",f),enabled:!0,callback:Blockly.Constants.Variables.DELETE_OPTION_CALLBACK_FACTORY(this)},a.unshift(b),a.unshift(e)},
			onchange:function(a){
				a=this.getFieldValue("VAR");
				a=Blockly.Variables.getVariable(this.workspace,a);
				"variables_get_dynamic"==this.type?this.outputConnection.setCheck(a.type):this.getInput("VALUE").connection.setCheck(a.type)
			}
};
Blockly.Constants.VariablesDynamic.RENAME_OPTION_CALLBACK_FACTORY=function(a){
	return function(){
		var b=a.workspace,c=a.getField("VAR").getVariable();
		Blockly.Variables.renameVariable(b,c)
	}
};
Blockly.Constants.VariablesDynamic.DELETE_OPTION_CALLBACK_FACTORY=function(a){
	return function(){
		var b=a.workspace,c=a.getField("VAR").getVariable();
		b.deleteVariableById(c.getId());
		b.refreshToolboxSelection()}
	};
Blockly.Extensions.registerMixin("contextMenu_variableDynamicSetterGetter",Blockly.Constants.VariablesDynamic.CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN);

//使用舊版
Blockly.Blocks.procedures={};
Blockly.Msg["PROCEDURES_HUE"]=290;
Blockly.Blocks.procedures_defnoreturn={
	init:function(){
		this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL);
		this.setColour(Blockly.Msg["PROCEDURES_HUE"]);
		var a=Blockly.Procedures.findLegalName(Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE,this);
		a=new Blockly.FieldTextInput(a,Blockly.Procedures.rename);
		a.setSpellcheck(!1);
		this.appendDummyInput()
			.appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE)
			.appendField(a,"NAME")
			.appendField("","PARAMS");
		this.appendValueInput("VAR")
			.setCheck(null);				
		this.setTooltip(Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP);
		this.arguments_=[];
		this.setInputsInline(!0);		
		this.setStatements_(!0);
		this.statementConnection_=null
	}
	,onchange: function(event) {
		if (!this.workspace || this.workspace.isFlyout) {
		  // Block is deleted or is in a flyout.
		  return;
		}
		if (!event.recordUndo) {
		  // Events not generated by user. Skip handling.
		  return;
		}
		var targetBlock = this.getInputTargetBlock('VAR');
		if (targetBlock) { 
			if (targetBlock.type!="lists_create_with") {
				targetBlock.unplug();
			}
		}	  
	  } 
	,setStatements_:function(a){this.hasStatements_!==a&&(a?(this.appendStatementInput("STACK").appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_DO),this.getInput("RETURN")&&this.moveInputBefore("STACK","RETURN")):this.removeInput("STACK",!0),this.hasStatements_=a)}
	,updateParams_:function(){for(var a=!1,b={},d=0;d<this.arguments_.length;d++){if(b["arg_"+this.arguments_[d].toLowerCase()]){a=!0;break}b["arg_"+this.arguments_[d].toLowerCase()]=!0}a?this.setWarningText(Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING):this.setWarningText(null);
	a="";
	this.arguments_.length&&(a=Blockly.Msg.PROCEDURES_BEFORE_PARAMS+" "+this.arguments_.join(", "));
	this.setFieldValue(a,"PARAMS")}
	,mutationToDom:function(){for(var a=document.createElement("mutation"),b=0;b<this.arguments_.length;b++){var d=document.createElement("arg");d.setAttribute("name",this.arguments_[b]);a.appendChild(d)}this.hasStatements_||a.setAttribute("statements","false");return a}
	,domToMutation:function(a){this.arguments_=[];for(var b=0,d;d=a.childNodes[b];b++)"arg"==d.nodeName.toLowerCase()&&this.arguments_.push(d.getAttribute("name"));this.updateParams_();this.setStatements_("false"!==a.getAttribute("statements"))}
	,decompose:function(a){var b=Blockly.Block.obtain(a,"procedures_mutatorcontainer");b.initSvg();this.getInput("RETURN")?b.setFieldValue(this.hasStatements_?"TRUE":"FALSE","STATEMENTS"):b.getInput("STATEMENT_INPUT").setVisible(!1);for(var d=b.getInput("STACK").connection,c=0;c<this.arguments_.length;c++){var e=Blockly.Block.obtain(a,"procedures_mutatorarg");e.initSvg();e.setFieldValue(this.arguments_[c],"NAME");e.oldLocation=c;d.connect(e.previousConnection);d=e.nextConnection}Blockly.Procedures.mutateCallers(this.getFieldValue("NAME"),this.workspace,this.arguments_,null);return b}
	,compose:function(a){this.arguments_=[];this.paramIds_=[];for(var b=a.getInputTargetBlock("STACK");b;)this.arguments_.push(b.getFieldValue("NAME")),this.paramIds_.push(b.id),b=b.nextConnection&&b.nextConnection.targetBlock();this.updateParams_();Blockly.Procedures.mutateCallers(this.getFieldValue("NAME"),this.workspace,this.arguments_,this.paramIds_);a=a.getFieldValue("STATEMENTS");if(null!==a&&(a="TRUE"==a,this.hasStatements_!=a))if(a)this.setStatements_(!0),a=this.getInput("STACK").connection,a.targetConnection||!this.statementConnection_||this.statementConnection_.targetConnection||this.statementConnection_.sourceBlock_.workspace!=this.workspace?this.statementConnection_=null:a.connect(this.statementConnection_);else{a=this.getInput("STACK").connection;if(this.statementConnection_=a.targetConnection)a=a.targetBlock(),a.setParent(null),a.bumpNeighbours_();this.setStatements_(!1)}}
	,dispose:function(){var a=this.getFieldValue("NAME");Blockly.Procedures.disposeCallers(a,this.workspace);this.constructor.prototype.dispose.apply(this,arguments)}
	,getProcedureDef:function(){return[this.getFieldValue("NAME"),this.arguments_,!1]}
	,getVars:function(){return this.arguments_}
	,renameVar:function(a,b){for(var d=!1,c=0;c<this.arguments_.length;c++)Blockly.Names.equals(a,this.arguments_[c])&&(this.arguments_[c]=b,d=!0);if(d&&(this.updateParams_(),this.mutator.isVisible())){d=this.mutator.workspace_.getAllBlocks();c=0;for(var e;e=d[c];c++)"procedures_mutatorarg"==e.type&&Blockly.Names.equals(a,e.getFieldValue("NAME"))&&e.setFieldValue(b,"NAME")}}
	,customContextMenu:function(a){
		var b={enabled:!0}
		,d=this.getFieldValue("NAME");
		b.text=Blockly.Msg.PROCEDURES_CREATE_DO.replace("%1",d);		
		var c=goog.dom.createDom("mutation");
		c.setAttribute("name",d);
		for(var e=0;e<this.arguments_.length;e++)
			d=goog.dom.createDom("arg")
			,d.setAttribute("name",this.arguments_[e])
			,c.appendChild(d);
		c=goog.dom.createDom("block",null,c);
		c.setAttribute("type",this.callType_);
		if (this.getInput("VAR").connection.targetBlock()) {
			var t = this.getInput("VAR").connection.targetBlock();
			if (t.type=="lists_create_with") {
				if (t.itemCount_==0)
					c.appendChild(Blockly.Xml.textToDom('<value name="VAR"><shadow type="lists_create_with"><mutation items="0"></mutation></shadow></value>'));
				else
					c.appendChild(Blockly.Xml.textToDom('<value name="VAR"><block type="lists_create_with"><mutation items="'+t.itemCount_+'"></mutation></block></value>'));
			}
		}
		else
			c.appendChild(Blockly.Xml.textToDom('<shadow type="lists_create_with"><mutation items="0"></mutation></shadow>'));
		b.callback=Blockly.ContextMenu.callbackFactory(this,c);
		a.push(b);
		if(!this.isCollapsed())
			for(e=0;e<this.arguments_.length;e++)
				b={enabled:!0}
				,d=this.arguments_[e]
				,b.text=Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1",d)
				,c=goog.dom.createDom("field",null,d)
				,c.setAttribute("name","VAR")
				,c=goog.dom.createDom("block",null,c)
				,c.setAttribute("type","variables_get")
				,b.callback=Blockly.ContextMenu.callbackFactory(this,c)
				,a.push(b)
	}
	,callType_:"procedures_callnoreturn"
};
	
Blockly.Blocks.procedures_defreturn={
	init:function(){
		this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL);
		this.setColour(Blockly.Msg["PROCEDURES_HUE"]);
		var a=Blockly.Procedures.findLegalName(Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE,this);
		a=new Blockly.FieldTextInput(a,Blockly.Procedures.rename);
		a.setSpellcheck(!1);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(Blockly.Variables.allTypes1()), "TYPE");			
		this.appendDummyInput()
			.appendField(a,"NAME")
			.appendField("","PARAMS");
		this.appendValueInput("VAR")
			.setCheck(null);				
		this.setInputsInline(!0);
		this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP);
		this.arguments_=[];
		this.setStatements_(!0);
		this.statementConnection_=null
	}
	,onchange: function(event) {
		if (!this.workspace || this.workspace.isFlyout) {
		  // Block is deleted or is in a flyout.
		  return;
		}
		if (!event.recordUndo) {
		  // Events not generated by user. Skip handling.
		  return;
		}
		var targetBlock = this.getInputTargetBlock('VAR');
		if (targetBlock) { 
			if (targetBlock.type!="lists_create_with") {
				targetBlock.unplug();
			}
		}	  
	  } 
	,setStatements_:function(a){this.hasStatements_!==a&&(a?(this.appendStatementInput("STACK").appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_DO),this.getInput("RETURN")&&this.moveInputBefore("STACK","RETURN")):this.removeInput("STACK",!0),this.hasStatements_=a)}
	,updateParams_:function(){
		for(var a=!1,b={},d=0;d<this.arguments_.length;d++){
			if(b["arg_"+this.arguments_[d].toLowerCase()]){
				a=!0;break
			}
			b["arg_"+this.arguments_[d].toLowerCase()]=!0}a?this.setWarningText(Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING):this.setWarningText(null);
			a="";
			this.arguments_.length&&(a=Blockly.Msg.PROCEDURES_BEFORE_PARAMS+" "+this.arguments_.join(", "));
			this.setFieldValue(a,"PARAMS")
		}
	,mutationToDom:function(){for(var a=document.createElement("mutation"),b=0;b<this.arguments_.length;b++){var d=document.createElement("arg");d.setAttribute("name",this.arguments_[b]);a.appendChild(d)}this.hasStatements_||a.setAttribute("statements","false");return a}
	,domToMutation:function(a){this.arguments_=[];for(var b=0,d;d=a.childNodes[b];b++)"arg"==d.nodeName.toLowerCase()&&this.arguments_.push(d.getAttribute("name"));this.updateParams_();this.setStatements_("false"!==a.getAttribute("statements"))}
	,decompose:function(a){var b=Blockly.Block.obtain(a,"procedures_mutatorcontainer");b.initSvg();this.getInput("RETURN")?b.setFieldValue(this.hasStatements_?"TRUE":"FALSE","STATEMENTS"):b.getInput("STATEMENT_INPUT").setVisible(!1);for(var d=b.getInput("STACK").connection,c=0;c<this.arguments_.length;c++){var e=Blockly.Block.obtain(a,"procedures_mutatorarg");e.initSvg();e.setFieldValue(this.arguments_[c],"NAME");e.oldLocation=c;d.connect(e.previousConnection);d=e.nextConnection}Blockly.Procedures.mutateCallers(this.getFieldValue("NAME"),this.workspace,this.arguments_,null);return b}
	,compose:function(a){this.arguments_=[];this.paramIds_=[];for(var b=a.getInputTargetBlock("STACK");b;)this.arguments_.push(b.getFieldValue("NAME")),this.paramIds_.push(b.id),b=b.nextConnection&&b.nextConnection.targetBlock();this.updateParams_();Blockly.Procedures.mutateCallers(this.getFieldValue("NAME"),this.workspace,this.arguments_,this.paramIds_);a=a.getFieldValue("STATEMENTS");if(null!==a&&(a="TRUE"==a,this.hasStatements_!=a))if(a)this.setStatements_(!0),a=this.getInput("STACK").connection,a.targetConnection||!this.statementConnection_||this.statementConnection_.targetConnection||this.statementConnection_.sourceBlock_.workspace!=this.workspace?this.statementConnection_=null:a.connect(this.statementConnection_);else{a=this.getInput("STACK").connection;if(this.statementConnection_=a.targetConnection)a=a.targetBlock(),a.setParent(null),a.bumpNeighbours_();this.setStatements_(!1)}}
	,dispose:function(){var a=this.getFieldValue("NAME");Blockly.Procedures.disposeCallers(a,this.workspace);this.constructor.prototype.dispose.apply(this,arguments)}
	,getProcedureDef:function(){return[this.getFieldValue("NAME"),this.arguments_,!1]}
	,getVars:function(){return this.arguments_}
	,renameVar:function(a,b){for(var d=!1,c=0;c<this.arguments_.length;c++)Blockly.Names.equals(a,this.arguments_[c])&&(this.arguments_[c]=b,d=!0);if(d&&(this.updateParams_(),this.mutator.isVisible())){d=this.mutator.workspace_.getAllBlocks();c=0;for(var e;e=d[c];c++)"procedures_mutatorarg"==e.type&&Blockly.Names.equals(a,e.getFieldValue("NAME"))&&e.setFieldValue(b,"NAME")}}
	,customContextMenu:function(a){
		var b={enabled:!0}
		,d=this.getFieldValue("NAME");
		b.text=Blockly.Msg.PROCEDURES_CREATE_DO.replace("%1",d);
		var c=goog.dom.createDom("mutation");
		c.setAttribute("name",d);
		for(var e=0;e<this.arguments_.length;e++)
			d=goog.dom.createDom("arg")
		,d.setAttribute("name",this.arguments_[e])
		,c.appendChild(d);
		c=goog.dom.createDom("block",null,c);
		c.setAttribute("type",this.callType_);
		if (this.getInput("VAR").connection.targetBlock()) {
			var t = this.getInput("VAR").connection.targetBlock();
			if (t.type=="lists_create_with") {
				if (t.itemCount_==0)
					c.appendChild(Blockly.Xml.textToDom('<value name="VAR"><shadow type="lists_create_with"><mutation items="0"></mutation></shadow></value>'));
				else
					c.appendChild(Blockly.Xml.textToDom('<value name="VAR"><block type="lists_create_with"><mutation items="'+t.itemCount_+'"></mutation></block></value>'));
			}
		}
		else
			c.appendChild(Blockly.Xml.textToDom('<shadow type="lists_create_with"><mutation items="0"></mutation></shadow>'));		
		b.callback=Blockly.ContextMenu.callbackFactory(this,c);
		a.push(b);
		if(!this.isCollapsed())
			for(e=0;e<this.arguments_.length;e++)
				b={enabled:!0},d=this.arguments_[e]
				,b.text=Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1",d)
				,c=goog.dom.createDom("field",null,d)
				,c.setAttribute("name","VAR")
				,c=goog.dom.createDom("block",null,c)
				,c.setAttribute("type","variables_get")
				,b.callback=Blockly.ContextMenu.callbackFactory(this,c)
				,a.push(b)
	}
	,callType_:"procedures_callreturn"
};
Blockly.Blocks.procedures_return={
	init:function(){ 
		this.appendValueInput("RETURN")
		.setCheck(null)
		.appendField(Blockly.Msg.CONTROLS_RETURN_TITLE);
		this.setInputsInline(true);
		this.setPreviousStatement(!0);
		this.setNextStatement(!0);
		this.setColour(Blockly.Msg["PROCEDURES_HUE"]);		
	}	
};
Blockly.Blocks.procedures_mutatorcontainer={init:function(){this.setColour(Blockly.Msg["PROCEDURES_HUE"]);this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE);this.appendStatementInput("STACK");this.appendDummyInput("STATEMENT_INPUT").appendField(Blockly.Msg.PROCEDURES_ALLOW_STATEMENTS).appendField(new Blockly.FieldCheckbox("TRUE"),"STATEMENTS");this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP);this.contextMenu=!1}};
Blockly.Blocks.procedures_mutatorarg={init:function(){this.setColour(Blockly.Msg["PROCEDURES_HUE"]);this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_MUTATORARG_TITLE).appendField(new Blockly.FieldTextInput("x",this.validator_),"NAME");this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP);this.contextMenu=!1},validator_:function(a){return(a=a.replace(/[\s\xa0]+/g," ").replace(/^ | $/g,""))||null}};
Blockly.Blocks.procedures_callnoreturn={
	init:function(){
		this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL);
		this.setColour(Blockly.Msg["PROCEDURES_HUE"]);
		this.appendDummyInput("TOPROW")
			.appendField(Blockly.Msg.PROCEDURES_CALLNORETURN_CALL)
			.appendField("","NAME");
		this.appendValueInput("VAR")
			.setCheck(null);	
		this.setMutator(new Blockly.myMutator([]));				
		this.setInputsInline(true);
		this.setPreviousStatement(!0);
		this.setNextStatement(!0);
		this.arguments_=[];
		this.quarkArguments_=this.quarkConnections_=null
	},myWorkspaceInitial: function(myWorkspace) {
		var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
		xml = new XMLSerializer().serializeToString(xml);
		xml = new DOMParser().parseFromString(xml,"text/xml").firstChild.childNodes;
		for (var i=0;i<xml.length;i++) {
			if (xml[i].getAttribute("type")=="procedures_defnoreturn") {
				/*
				if (xml[i].childNodes[0].textContent==this.getFieldValue("NAME")) {
					if (xml[i].childNodes[2]) {
						if (xml[i].childNodes[2].childNodes[0]) {
							xml = Blockly.Xml.domToText(xml[i].childNodes[2].childNodes[0], true);
							xml = Blockly.Xml.textToDom('<xml xmlns="https://developers.google.com/blockly/xml">'+xml+'</xml>');
							myWorkspace.clear();
							Blockly.Xml.domToWorkspace(xml, myWorkspace);							
							break;
						}
					}
				}
				*/				
				if (xml[i].childNodes[0].textContent==this.getFieldValue("NAME")) {
					if (xml[i]) {
						xml = Blockly.Xml.domToPrettyText(xml[i]);
						xml = Blockly.Xml.textToDom('<xml xmlns="https://developers.google.com/blockly/xml">'+xml.replace("x=","xx=").replace("y=","yy=")+'</xml>');
						myWorkspace.clear();
						Blockly.Xml.domToWorkspace(xml, myWorkspace);							
						break;
					}
				}
			}
		}
	},myWorkspaceChanged: function(myWorkspace) {}
	,onchange: function(event) {
		if (!this.workspace || this.workspace.isFlyout) {
		  // Block is deleted or is in a flyout.
		  return;
		}
		if (!event.recordUndo) {
		  // Events not generated by user. Skip handling.
		  return;
		}
		var targetBlock = this.getInputTargetBlock('VAR');
		if (targetBlock) { 
			if (targetBlock.type!="lists_create_with") {
				targetBlock.unplug();
			}
		}	  
	}	
	,getProcedureCall:function(){return this.getFieldValue("NAME")}
	,renameProcedure:function(a,b){Blockly.Names.equals(a,this.getProcedureCall())&&(this.setFieldValue(b,"NAME")
	,this.setTooltip((this.outputConnection?Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP:Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1",b)))}
	,setProcedureParameters:function(a,b){if(b)if(goog.array.equals(this.arguments_,a))this.quarkArguments_=b;else{this.setCollapsed(!1);if(b.length!=a.length)throw"Error: paramNames and paramIds must be the same length.";this.quarkArguments_||(this.quarkConnections_={},a.join("\n")==this.arguments_.join("\n")?this.quarkArguments_=b:this.quarkArguments_=[]);var d=this.rendered;this.rendered=!1;for(var c=this.arguments_.length-1;0<=c;c--){var e=this.getInput("ARG"+c);if(e){var f=e.connection.targetConnection;this.quarkConnections_[this.quarkArguments_[c]]=f;this.removeInput("ARG"+c)}}this.arguments_=[].concat(a);this.quarkArguments_=b;for(c=0;c<this.arguments_.length;c++){e=this.appendValueInput("ARG"+c).setAlign(Blockly.ALIGN_RIGHT).appendField(this.arguments_[c]);if(this.quarkArguments_){var g=this.quarkArguments_[c];g in this.quarkConnections_&&(f=this.quarkConnections_[g],!f||f.targetConnection||f.sourceBlock_.workspace!=this.workspace?delete this.quarkConnections_[g]:e.connection.connect(f))}e.init()}if(e=this.getInput("TOPROW"))this.arguments_.length?this.getField_("WITH")||(e.appendField(Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS,"WITH"),e.init()):this.getField_("WITH")&&e.removeField("WITH");(this.rendered=d)&&this.render()}else this.quarkConnections_={},this.quarkArguments_=null}
	,mutationToDom:function(){var a=document.createElement("mutation");a.setAttribute("name",this.getProcedureCall());for(var b=0;b<this.arguments_.length;b++){var d=document.createElement("arg");d.setAttribute("name",this.arguments_[b]);a.appendChild(d)}return a}
	,domToMutation:function(a){var b=a.getAttribute("name");this.setFieldValue(b,"NAME");this.setTooltip((this.outputConnection?Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP:Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1",b));if((b=Blockly.Procedures.getDefinition(b,this.workspace))&&b.mutator&&b.mutator.isVisible())this.setProcedureParameters(b.arguments_,b.paramIds_);else{b=[];for(var d=0,c;c=a.childNodes[d];d++)"arg"==c.nodeName.toLowerCase()&&b.push(c.getAttribute("name"));this.setProcedureParameters(b,b)}}
	,renameVar:function(a,b){for(var d=0;d<this.arguments_.length;d++)Blockly.Names.equals(a,this.arguments_[d])&&(this.arguments_[d]=b,this.getInput("ARG"+d).fieldRow[0].setText(b))}
	,customContextMenu:function(a){var b={enabled:!0};b.text=Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF;var d=this.getProcedureCall(),c=this.workspace;b.callback=function(){var a=Blockly.Procedures.getDefinition(d,c);a&&a.select()};a.push(b)}
};
Blockly.Blocks.procedures_callreturn={
	init:function(){
		this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL);
		this.setColour(Blockly.Msg["PROCEDURES_HUE"]);
		this.appendDummyInput("TOPROW")
			.appendField(Blockly.Msg.PROCEDURES_CALLNORETURN_CALL)
			.appendField("","NAME");
		this.appendValueInput("VAR")
			.setCheck(null);
		this.setMutator(new Blockly.myMutator([]));				
		this.setInputsInline(true);
		this.setOutput(!0);
		this.arguments_=[];
		this.quarkArguments_=this.quarkConnections_=null
	},myWorkspaceInitial: function(myWorkspace) {
		var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
		xml = new XMLSerializer().serializeToString(xml);
		xml = new DOMParser().parseFromString(xml,"text/xml").firstChild.childNodes;
		for (var i=0;i<xml.length;i++) {
			if (xml[i].getAttribute("type")=="procedures_defreturn") {
				/*
				if (xml[i].childNodes[1].textContent==this.getFieldValue("NAME")) {
					if (xml[i].childNodes[3]) {
						if (xml[i].childNodes[3].childNodes[0]) {
							xml = Blockly.Xml.domToText(xml[i].childNodes[3].childNodes[0], true);
							xml = Blockly.Xml.textToDom('<xml xmlns="https://developers.google.com/blockly/xml">'+xml+'</xml>');
							myWorkspace.clear();
							Blockly.Xml.domToWorkspace(xml, myWorkspace);							
							break;
						}
					}
				}
				*/				
				if (xml[i].childNodes[1].textContent==this.getFieldValue("NAME")) {
					if (xml[i]) {
						xml = Blockly.Xml.domToPrettyText(xml[i]);
						xml = Blockly.Xml.textToDom('<xml xmlns="https://developers.google.com/blockly/xml">'+xml.replace("x=","xx=").replace("y=","yy=")+'</xml>');
						myWorkspace.clear();
						Blockly.Xml.domToWorkspace(xml, myWorkspace);							
						break;
					}
				}
			}
		}
	},myWorkspaceChanged: function(myWorkspace) {}	
	,onchange: function(event) {
		if (!this.workspace || this.workspace.isFlyout) {
		  // Block is deleted or is in a flyout.
		  return;
		}
		if (!event.recordUndo) {
		  // Events not generated by user. Skip handling.
		  return;
		}
		var targetBlock = this.getInputTargetBlock('VAR');
		if (targetBlock) { 
			if (targetBlock.type!="lists_create_with") {
				targetBlock.unplug();
			}
		}	  
	}	
	,getProcedureCall:function(){return this.getFieldValue("NAME")}
	,renameProcedure:function(a,b){Blockly.Names.equals(a,this.getProcedureCall())&&(this.setFieldValue(b,"NAME"),this.setTooltip((this.outputConnection?Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP:Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1",b)))}
	,setProcedureParameters:function(a,b){if(b)if(goog.array.equals(this.arguments_,a))this.quarkArguments_=b;else{this.setCollapsed(!1);if(b.length!=a.length)throw"Error: paramNames and paramIds must be the same length.";
	this.quarkArguments_||(this.quarkConnections_={},a.join("\n")==this.arguments_.join("\n")?this.quarkArguments_=b:this.quarkArguments_=[]);
	var d=this.rendered;this.rendered=!1;for(var c=this.arguments_.length-1;0<=c;c--){var e=this.getInput("ARG"+c);
	if(e){var f=e.connection.targetConnection;this.quarkConnections_[this.quarkArguments_[c]]=f;this.removeInput("ARG"+c)}}this.arguments_=[].concat(a);
	this.quarkArguments_=b;for(c=0;c<this.arguments_.length;c++){e=this.appendValueInput("ARG"+c).setAlign(Blockly.ALIGN_RIGHT).appendField(this.arguments_[c]);if(this.quarkArguments_){var g=this.quarkArguments_[c];g in this.quarkConnections_&&(f=this.quarkConnections_[g],!f||f.targetConnection||f.sourceBlock_.workspace!=this.workspace?delete this.quarkConnections_[g]:e.connection.connect(f))}e.init()}if(e=this.getInput("TOPROW"))this.arguments_.length?this.getField_("WITH")||(e.appendField(Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS,"WITH"),e.init()):this.getField_("WITH")&&e.removeField("WITH");(this.rendered=d)&&this.render()}else this.quarkConnections_={},this.quarkArguments_=null}
	,mutationToDom:function(){var a=document.createElement("mutation");a.setAttribute("name",this.getProcedureCall());for(var b=0;b<this.arguments_.length;b++){var d=document.createElement("arg");d.setAttribute("name",this.arguments_[b]);a.appendChild(d)}return a}
	,domToMutation:function(a){var b=a.getAttribute("name");this.setFieldValue(b,"NAME");this.setTooltip((this.outputConnection?Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP:Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1",b));if((b=Blockly.Procedures.getDefinition(b,this.workspace))&&b.mutator&&b.mutator.isVisible())this.setProcedureParameters(b.arguments_,b.paramIds_);else{b=[];for(var d=0,c;c=a.childNodes[d];d++)"arg"==c.nodeName.toLowerCase()&&b.push(c.getAttribute("name"));this.setProcedureParameters(b,b)}}
	,renameVar:function(a,b){for(var d=0;d<this.arguments_.length;d++)Blockly.Names.equals(a,this.arguments_[d])&&(this.arguments_[d]=b,this.getInput("ARG"+d).fieldRow[0].setText(b))}
	,customContextMenu:function(a){var b={enabled:!0};b.text=Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF;var d=this.getProcedureCall(),c=this.workspace;b.callback=function(){var a=Blockly.Procedures.getDefinition(d,c);a&&a.select()};a.push(b)}
};


Blockly.Blocks.involt={};Blockly.Blocks.involt.HUE=65;Blockly.Blocks.involt_directmode={init:function(){this.setHelpUrl("http://www.example.com/");this.setColour(Blockly.Blocks.involt.HUE);this.appendDummyInput().appendField("directMode");this.appendDummyInput().appendField(new Blockly.FieldDropdown([["true","TRUE"],["false","FALSE"]]),"BOOL");this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip("")}};
Blockly.Blocks.involt_chromereceive={init:function(){this.setHelpUrl("http://www.example.com/");this.setColour(Blockly.Blocks.involt.HUE);this.appendDummyInput().appendField("chromeReceive");this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip("")}};
Blockly.Blocks.involt_sendvalue={init:function(){this.setHelpUrl("http://www.example.com/");this.setColour(Blockly.Blocks.involt.HUE);this.appendDummyInput().appendField("Send Value");this.appendDummyInput().appendField(Blockly.Msg.INOUT_DIGITAL_INPUT_APPENDTEXT).appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN");this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip("")}};
Blockly.Blocks.involt_receivevalue={init:function(){this.setHelpUrl("http://www.example.com/");this.setColour(Blockly.Blocks.involt.HUE);this.appendDummyInput().appendField("Receive Value");this.appendDummyInput().appendField(Blockly.Msg.INOUT_ANALOG_READ_APPENDTEXT).appendField(new Blockly.FieldDropdown(profile["default"].analog),"PIN");this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip("")}};


Blockly.Blocks.i2c_sevenseg={};Blockly.Blocks.i2c_sevenseg.HUE=215;Blockly.Blocks.i2c_sevenseg.image=filepath.media+"/sevenseg.jpg";
Blockly.Blocks.i2c_sevenseg.checkBlocks=function(a){var b=null,d=a.type;a=a.workspace.getAllBlocks();for(var c=0;c<a.length;c++)if("i2c_sevenseg_print"!=a[c].type&&"i2c_sevenseg_writedisplay"!=a[c].type&&"i2c_sevenseg_writedigitnum"!=a[c].type&&"i2c_sevenseg_drawcolon"!=a[c].type&&"i2c_sevenseg_boolean"!=a[c].type||null!=b||(b=a[c].type!=d?!0:!1),"i2c_sevenseg_begin"==a[c].type)return!0;return b};
Blockly.Blocks.i2c_sevenseg_begin={init:function(){this.setHelpUrl(Blockly.Msg.I2C_SEVENSEG_HELPURL);this.setColour(Blockly.Blocks.i2c_sevenseg.HUE);this.appendDummyInput().appendField(Blockly.Msg.I2C_SEVENSEG_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.i2c_sevenseg.image,64,64)).appendField(Blockly.Msg.I2C_SEVENSEG_BEGIN_TITLE).appendField(Blockly.Msg.I2C_SEVENSEG_ADDRESS).appendField(new Blockly.FieldDropdown(profile["default"].led_backpack_address),"ADDRESS");this.setPreviousStatement(!0,
null);this.setNextStatement(!0,null);this.setTooltip("")},onchange:function(){this.workspace&&this.setWarningText(Blockly.Msg.I2C_SEVENSEG_BEGIN_WARNING)}};
Blockly.Blocks.i2c_sevenseg_print={init:function(){this.setHelpUrl(Blockly.Msg.I2C_SEVENSEG_HELPURL);this.setColour(Blockly.Blocks.i2c_sevenseg.HUE);this.appendDummyInput().appendField(Blockly.Msg.I2C_SEVENSEG_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.i2c_sevenseg.image,64,64)).appendField(Blockly.Msg.I2C_SEVENSEG_PRINT);this.appendValueInput("NUM").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.I2C_SEVENSEG_NUM);this.setPreviousStatement(!0,null);this.setNextStatement(!0,
null);this.setTooltip("")},onchange:function(){this.workspace&&(Blockly.Blocks.i2c_sevenseg.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.I2C_SEVENSEG_WARNING))}};
Blockly.Blocks.i2c_sevenseg_writedisplay={init:function(){this.setHelpUrl(Blockly.Msg.I2C_SEVENSEG_HELPURL);this.setColour(Blockly.Blocks.i2c_sevenseg.HUE);this.appendDummyInput().appendField(Blockly.Msg.I2C_SEVENSEG_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.i2c_sevenseg.image,64,64)).appendField(Blockly.Msg.I2C_SEVENSEG_WRITEDISPLAY);this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip("")},onchange:function(){this.workspace&&(Blockly.Blocks.i2c_sevenseg.checkBlocks(this)?
this.setWarningText(null):this.setWarningText(Blockly.Msg.I2C_SEVENSEG_WARNING))}};
Blockly.Blocks.i2c_sevenseg_writedigitnum={init:function(){this.setHelpUrl(Blockly.Msg.I2C_SEVENSEG_HELPURL);this.setColour(Blockly.Blocks.i2c_sevenseg.HUE);this.appendDummyInput().appendField(Blockly.Msg.I2C_SEVENSEG_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.i2c_sevenseg.image,64,64)).appendField(Blockly.Msg.I2C_SEVENSEG_WRITEDIGITNUM);this.appendValueInput("POSITION").setCheck("Number").appendField(Blockly.Msg.I2C_SEVENSEG_POSITION);this.appendValueInput("NUM").setCheck("Number").appendField(Blockly.Msg.I2C_SEVENSEG_NUM);
this.appendValueInput("DOTS").setCheck("BOOLEAN").appendField(Blockly.Msg.I2C_SEVENSEG_DOTS);this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip("")},onchange:function(){this.workspace&&(Blockly.Blocks.i2c_sevenseg.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.I2C_SEVENSEG_WARNING))}};
Blockly.Blocks.i2c_sevenseg_drawcolon={init:function(){this.setHelpUrl(Blockly.Msg.I2C_SEVENSEG_HELPURL);this.setColour(Blockly.Blocks.i2c_sevenseg.HUE);this.appendDummyInput().appendField(Blockly.Msg.I2C_SEVENSEG_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.i2c_sevenseg.image,64,64));this.appendValueInput("DOTS").setCheck("BOOLEAN").appendField(Blockly.Msg.I2C_SEVENSEG_COLON);this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip("")},
onchange:function(){this.workspace&&(Blockly.Blocks.i2c_sevenseg.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.I2C_SEVENSEG_WARNING))}};
Blockly.Blocks.i2c_sevenseg_boolean={init:function(){var a=[[Blockly.Msg.I2C_SEVENSEG_BOOLEAN_TRUE,"TRUE"],[Blockly.Msg.I2C_SEVENSEG_BOOLEAN_FALSE,"FALSE"]];this.setColour(Blockly.Blocks.i2c_sevenseg.HUE);this.setOutput(!0,"Boolean");this.appendDummyInput().appendField(new Blockly.FieldDropdown(a),"BOOL")},onchange:function(){this.workspace&&(Blockly.Blocks.i2c_sevenseg.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.I2C_SEVENSEG_WARNING))}};

Blockly.Blocks.times={};
Blockly.Blocks.times.HUE=90;
Blockly.Blocks.delay={init:function(){this.setHelpUrl(Blockly.Msg.TIMES_DELAY_HELPURL);
this.setColour(Blockly.Blocks.times.HUE);
this.appendDummyInput().appendField(Blockly.Msg.TIMES_DELAY_APPENDTEXT).appendField(new Blockly.FieldTextInput("1000"),"DELAY_TIME");this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.TIMES_DELAY_TOOLTIP)}
};
Blockly.Blocks.delayMicroseconds={init:function(){this.setHelpUrl(Blockly.Msg.TIMES_DELAYMICROSECONDS_HELPURL);this.setColour(Blockly.Blocks.times.HUE);this.appendDummyInput().appendField(Blockly.Msg.TIMES_DELAYMICROSECONDS_APPENDTEXT).appendField(new Blockly.FieldTextInput("1000"),"DELAY_TIME");this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.TIMES_DELAYMICROSECONDS_TOOLTIP)}};
Blockly.Blocks.delay_custom={init:function(){this.setHelpUrl(Blockly.Msg.TIMES_DELAY_HELPURL);this.setColour(Blockly.Blocks.times.HUE);this.appendValueInput("DELAY_TIME").setCheck("Number").appendField(Blockly.Msg.TIMES_DELAY_APPENDTEXT);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.TIMES_DELAY_TOOLTIP)}};
Blockly.Blocks.delayMicroseconds_custom={init:function(){this.setHelpUrl(Blockly.Msg.TIMES_DELAYMICROSECONDS_HELPURL);this.setColour(Blockly.Blocks.times.HUE);this.appendValueInput("DELAY_TIME").setCheck("Number").appendField(Blockly.Msg.TIMES_DELAYMICROSECONDS_APPENDTEXT);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.TIMES_DELAYMICROSECONDS_TOOLTIP)}};
Blockly.Blocks.micros={init:function(){this.setHelpUrl(Blockly.Msg.TIMES_MICROS_HELPURL);this.setColour(Blockly.Blocks.times.HUE);this.appendDummyInput().appendField(Blockly.Msg.TIMES_MICROS_APPENDTEXT);this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.TIMES_MICROS_TOOLTIP)}};
Blockly.Blocks.millis={init:function(){this.setHelpUrl(Blockly.Msg.TIMES_MILLIS_HELPURL);this.setColour(Blockly.Blocks.times.HUE);this.appendDummyInput().appendField(Blockly.Msg.TIMES_MILLIS_APPENDTEXT);this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.TIMES_MILLIS_TOOLTIP)}};
Blockly.Blocks.ntp_get_datetime={init:function(){this.setHelpUrl(Blockly.Msg.TIMES_MILLIS_HELPURL);this.setColour(Blockly.Blocks.times.HUE);this.appendDummyInput().appendField(Blockly.Msg.TIMES_DATETIME_FROM_WIFI_APPENDTEXT);this.setOutput(!0,"String");this.setTooltip(Blockly.Msg.TIMES_DATETIME_FROM_WIFI_TOOLTIP)}};
Blockly.Blocks.rtc_set_time_from_string={init:function(){this.setHelpUrl(Blockly.Msg.TIMES_DATETIME_RTC_HELPURL);this.setColour(Blockly.Blocks.times.HUE);this.appendValueInput("TIME_STRING").setCheck(["String","Text"]).appendField(Blockly.Msg.TIMES_DATETIME_SET_RTC_STRING_APPENDTEXT);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.TIMES_DATETIME_SET_RTC_STRING_TOOLTIP)}};
Blockly.Blocks.rtc_get_time={init:function(){this.setHelpUrl(Blockly.Msg.TIMES_DATETIME_RTC_HELPURL);this.setColour(Blockly.Blocks.times.HUE);this.appendDummyInput().appendField(Blockly.Msg.TIMES_DATETIME_GET_RTC);this.setOutput(!0,"String");this.setTooltip(Blockly.Msg.TIMES_DATETIME_GET_RTC_TOOLTIP)}};
Blockly.Blocks.rtc_get_time_field={init:function(){this.setHelpUrl(Blockly.Msg.TIMES_DATETIME_RTC_HELPURL);this.setColour(Blockly.Blocks.times.HUE);this.appendDummyInput().appendField(Blockly.Msg.TIMES_DATETIME_GET_RTC_UNIT).appendField(new Blockly.FieldDropdown([[Blockly.Msg.TIMES_DATETIME_RTC_APPENDTEXT_YEAR,"0"],[Blockly.Msg.TIMES_DATETIME_RTC_APPENDTEXT_MONTH,"1"],[Blockly.Msg.TIMES_DATETIME_RTC_APPENDTEXT_DAY,"2"],[Blockly.Msg.TIMES_DATETIME_RTC_APPENDTEXT_HOUR,"3"],[Blockly.Msg.TIMES_DATETIME_RTC_APPENDTEXT_MIN,
"4"],[Blockly.Msg.TIMES_DATETIME_RTC_APPENDTEXT_SEC,"5"]]),"FIELD");this.appendValueInput("TIME_STRING").setCheck(["String"]);this.setInputsInline(!0);this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.TIMES_DATETIME_GET_RTC_UNIT_TOOLTIP)}};
Blockly.Blocks.rtc_set_time_from_number={init:function(){this.setHelpUrl(Blockly.Msg.TIMES_DATETIME_RTC_HELPURL);this.setColour(Blockly.Blocks.times.HUE);this.appendDummyInput().appendField(Blockly.Msg.TIMES_DATETIME_SET_RTC_NUMBER_APPENDTEXT);this.appendValueInput("YEAR").setCheck(["Number"]).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.TIMES_DATETIME_RTC_APPENDTEXT_YEAR);this.appendValueInput("MONTH").setCheck(["Number"]).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.TIMES_DATETIME_RTC_APPENDTEXT_MONTH);
this.appendValueInput("DAY").setCheck(["Number"]).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.TIMES_DATETIME_RTC_APPENDTEXT_DAY);this.appendValueInput("HOUR").setCheck(["Number"]).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.TIMES_DATETIME_RTC_APPENDTEXT_HOUR);this.appendValueInput("MIN").setCheck(["Number"]).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.TIMES_DATETIME_RTC_APPENDTEXT_MIN);this.appendValueInput("SEC").setCheck(["Number"]).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.TIMES_DATETIME_RTC_APPENDTEXT_SEC);
this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.TIMES_DATETIME_SET_RTC_NUMBER_TOOLTIP)}};/*

 Blockly for LinkIt 7697

 Copyright 2018 MediaTek Inc.
 https://github.com/MediaTek-Labs/BlocklyDuino-for-LinkIt

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
Blockly.Blocks.oled_display={};
Blockly.Blocks.oled_display.HUE=70;
Blockly.Blocks.oled_display_setting={
  init:function(){
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(Blockly.Blocks.oled_display.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.INITIALIZES_SETUP_APPENDTEXT)
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
        .appendField(new Blockly.FieldDropdown([["SSD1306","SSD1306"],["SH1106","SH1106"]]),"CHIPSET")
        .appendField(Blockly.Msg.SIGNAL_PIN)
        .appendField(new Blockly.FieldDropdown([["I2C","PIN"]]),"PIN")
        .appendField(Blockly.Msg.GROVE_OLED_DISPLAY_RESOLUTION)
        .appendField(new Blockly.FieldDropdown([["128x64","128x64"]]),"RESOLUTION");
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP)}
};
Blockly.Blocks.oled_display_clear={
  init:function(){
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(Blockly.Blocks.oled_display.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
        .appendField(Blockly.Msg.OLED_DISPLAY_CLEAR);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP)}
};
Blockly.Blocks.oled_display_draw_commands={
  init:function(){
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(Blockly.Blocks.oled_display.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
        .appendField(Blockly.Msg.OLED_DISPLAY_DRAW_COMMANDS);
    this.appendStatementInput("DRAW_CMD");
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP)}
};
Blockly.Blocks.oled_display_draw_line={
  init:function(){
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(Blockly.Blocks.oled_display.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
        .appendField(Blockly.Msg.OLED_DISPLAY_DRAW_LINE_START);
    this.appendValueInput("START_X")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("START_Y")
        .setCheck("Number")
        .appendField("Y");
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_DRAW_LINE_END);
    this.appendValueInput("END_X")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("END_Y")
        .setCheck("Number")
        .appendField("Y");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP)}
};
Blockly.Blocks.oled_display_draw_box={
  init:function(){
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(Blockly.Blocks.oled_display.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
        .appendField(Blockly.Msg.OLED_DISPLAY_DRAW_BOX_START);
    this.appendValueInput("START_X")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("START_Y")
        .setCheck("Number")
        .appendField("Y");
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_DRAW_BOX_END);
    this.appendValueInput("END_X")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("END_Y")
        .setCheck("Number")
        .appendField("Y");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP)}
};
Blockly.Blocks.oled_display_draw_frame={
  init:function(){
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(Blockly.Blocks.oled_display.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
        .appendField(Blockly.Msg.OLED_DISPLAY_DRAW_FRAME_START);
    this.appendValueInput("START_X")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("START_Y")
        .setCheck("Number")
        .appendField("Y");
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_DRAW_FRAME_END);
    this.appendValueInput("END_X")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("END_Y")
        .setCheck("Number")
        .appendField("Y");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP)}
};
Blockly.Blocks.oled_display_draw_disc={init:function(){this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);this.setColour(Blockly.Blocks.oled_display.HUE);this.appendDummyInput().appendField(Blockly.Msg.OLED_DISPLAY_TITLE).appendField(Blockly.Msg.OLED_DISPLAY_DRAW_DISC_CENTER);this.appendValueInput("CENTER_X").setCheck("Number").appendField("X");this.appendValueInput("CENTER_Y").setCheck("Number").appendField("Y");this.appendDummyInput().appendField(Blockly.Msg.OLED_DISPLAY_DRAW_DISC_RADIUS);this.appendValueInput("RADIUS").setCheck("Number");
this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP)}};
Blockly.Blocks.oled_display_draw_circle={init:function(){this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);this.setColour(Blockly.Blocks.oled_display.HUE);this.appendDummyInput().appendField(Blockly.Msg.OLED_DISPLAY_TITLE).appendField(Blockly.Msg.OLED_DISPLAY_DRAW_CIRCLE_CENTER);this.appendValueInput("CENTER_X").setCheck("Number").appendField("X");this.appendValueInput("CENTER_Y").setCheck("Number").appendField("Y");this.appendDummyInput().appendField(Blockly.Msg.OLED_DISPLAY_DRAW_CIRCLE_RADIUS);
this.appendValueInput("RADIUS").setCheck("Number");this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP)}};
Blockly.Blocks.oled_display_draw_text={init:function(){this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);this.setColour(Blockly.Blocks.oled_display.HUE);this.appendDummyInput().appendField(Blockly.Msg.OLED_DISPLAY_TITLE).appendField(Blockly.Msg.OLED_DISPLAY_DRAW_TEXT_START);this.appendValueInput("START_X").setCheck("Number").appendField("X");this.appendValueInput("START_Y").setCheck("Number").appendField("Y");this.appendDummyInput().appendField(Blockly.Msg.OLED_DISPLAY_DRAW_TEXT_CONTENT);this.appendValueInput("CONTENT").setCheck("String");
this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP)}};
Blockly.Blocks.oled_display_set_font={
  init:function(){
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(Blockly.Blocks.oled_display.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
        .appendField(Blockly.Msg.OLED_DISPLAY_SET_FONT)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.OLED_DISPLAY_SET_FONT_SMALL,"u8g2_font_6x10_mf"],
                                                [Blockly.Msg.OLED_DISPLAY_SET_FONT_LARGE,"u8g2_font_8x13_mf"]
                                              ]),"FONT");
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP)}
};
Blockly.Blocks.aerobot={};Blockly.Blocks.aerobot.HUE=200;Blockly.Blocks.aerobot.image=filepath.media+"/aerobot.jpg";Blockly.Blocks.aerobot.checkBlocks=function(a){var b=!1,d=a.type;a=a.workspace.getAllBlocks();for(var c=0;c<a.length;c++)if("aerobot_move"==a[c].type||"aerobot_rotate"==a[c].type||"aerobot_lightsens"==a[c].type||"aerobot_linesens"==a[c].type||"aerobot_setled"==a[c].type||"aerobot_distsens"==a[c].type){a[c].type!=d&&(b=!0);break}return b};
Blockly.Blocks.aerobot_move={init:function(){this.setHelpUrl(Blockly.Msg.AEROBOT_HELPURL);this.setColour(Blockly.Blocks.aerobot.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.aerobot.image,64,64)).appendField(Blockly.Msg.AEROBOT_MOVE_TITLE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.AEROBOT_FORWARD,"forward"],[Blockly.Msg.AEROBOT_BACKWARD,"backward"],[Blockly.Msg.AEROBOT_STOP,"stop"],[Blockly.Msg.AEROBOT_TURN_LEFT,"cw"],[Blockly.Msg.AEROBOT_TURN_RIGHT,"ccw"]]),
"DIRECTION");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.AEROBOT_MOVE_TOOLTIP)},onchange:function(){this.workspace&&(Blockly.Blocks.aerobot.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.AEROBOT_WARNING))}};
Blockly.Blocks.aerobot_rotate={init:function(){this.setHelpUrl(Blockly.Msg.AEROBOT_HELPURL);this.setColour(Blockly.Blocks.aerobot.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.aerobot.image,64,64)).appendField(Blockly.Msg.AEROBOT_ROTATE_TITLE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.AEROBOT_ROTATE_LEFT,"cw"],[Blockly.Msg.AEROBOT_ROTATE_RIGHT,"ccw"]]),"DIRECTION");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.AEROBOT_ROTATE_TOOLTIP)},
onchange:function(){this.workspace&&(Blockly.Blocks.aerobot.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.AEROBOT_WARNING))}};
Blockly.Blocks.aerobot_lightsens={init:function(){this.setHelpUrl(Blockly.Msg.AEROBOT_HELPURL);this.setColour(Blockly.Blocks.aerobot.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.aerobot.image,64,64)).appendField(Blockly.Msg.AEROBOT_LIGHTSENS_TITLE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.AEROBOT_CENTER,"CENTER"],[Blockly.Msg.AEROBOT_RIGHT,"RIGHT"],[Blockly.Msg.AEROBOT_LEFT,"LEFT"]]),"SENS");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);
this.setTooltip(Blockly.Msg.AEROBOT_LIGHTSENS_TOOLTIP)},onchange:function(){this.workspace&&(Blockly.Blocks.aerobot.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.AEROBOT_WARNING))}};
Blockly.Blocks.aerobot_distsens={init:function(){this.setHelpUrl(Blockly.Msg.AEROBOT_HELPURL);this.setColour(Blockly.Blocks.aerobot.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.aerobot.image,64,64)).appendField(Blockly.Msg.AEROBOT_DISTSENS_TITLE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.AEROBOT_CENTER,"CENTER"],[Blockly.Msg.AEROBOT_RIGHT,"RIGHT"],[Blockly.Msg.AEROBOT_LEFT,"LEFT"]]),"SENS");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);
this.setTooltip(Blockly.Msg.AEROBOT_LIGHTSENS_TOOLTIP)},onchange:function(){this.workspace&&(Blockly.Blocks.aerobot.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.AEROBOT_WARNING))}};
Blockly.Blocks.aerobot_linesens={init:function(){this.setHelpUrl(Blockly.Msg.AEROBOT_HELPURL);this.setColour(Blockly.Blocks.aerobot.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.aerobot.image,64,64)).appendField(Blockly.Msg.AEROBOT_LINESENS_TITLE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.AEROBOT_CENTER,"CENTER"],[Blockly.Msg.AEROBOT_RIGHT,"RIGHT"],[Blockly.Msg.AEROBOT_LEFT,"LEFT"],[Blockly.Msg.AEROBOT_NONE,"NONE"]]),"SENS");this.setInputsInline(!0);this.setOutput(!0,
"Number");this.setTooltip(Blockly.Msg.AEROBOT_LINESENS_TOOLTIP)},onchange:function(){this.workspace&&(Blockly.Blocks.aerobot.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.AEROBOT_WARNING))}};
Blockly.Blocks.aerobot_setled={init:function(){this.setHelpUrl(Blockly.Msg.AEROBOT_HELPURL);this.setColour(Blockly.Blocks.aerobot.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.aerobot.image,64,64)).appendField(Blockly.Msg.AEROBOT_SETLED_TITLE);this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOR).appendField(new Blockly.FieldColour("#00ff00"),"RGB");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.AEROBOT_SETLED_TOOLTIP)},
onchange:function(){this.workspace&&(Blockly.Blocks.aerobot.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.AEROBOT_WARNING))}};Blockly.Blocks.grove={};Blockly.Blocks.grove.HUE=190;Blockly.Blocks.grove.led_image=filepath.media+"/grove_led.jpg";Blockly.Blocks.grove.button_image=filepath.media+"/grove_button.jpg";Blockly.Blocks.grove.touch_image=filepath.media+"/grove_touch.jpg";Blockly.Blocks.grove.rotary_angle_image=filepath.media+"/grove_rotary_angle.jpg";Blockly.Blocks.grove.relay_image=filepath.media+"/grove_relay.jpg";Blockly.Blocks.grove.temperature_sensor_image=filepath.media+"/grove_temperature_sensor.jpg";
Blockly.Blocks.grove.light_sensor_image=filepath.media+"/grove_light_sensor.jpg";Blockly.Blocks.grove.rgb_lcd_image=filepath.media+"/grove_rgb_lcd.jpg";Blockly.Blocks.grove.buzzer_image=filepath.media+"/grove_buzzer.jpg";Blockly.Blocks.grove.sound_sensor_image=filepath.media+"/grove_sound_sensor.jpg";Blockly.Blocks.grove.ir_receiver_image=filepath.media+"/grove_ir_receiver.jpg";Blockly.Blocks.grove.ir_emitter_image=filepath.media+"/grove_ir_emitter.jpg";
Blockly.Blocks.grove.ultrasonic_ranger_image=filepath.media+"/grove_ultrasonic_ranger.jpg";Blockly.Blocks.grove.temporature_humidity_sensor_image=filepath.media+"/grove_temporature_humidity_sensor.jpg";Blockly.Blocks.grove.led_bar_image=filepath.media+"/grove_led_bar.jpg";Blockly.Blocks.grove.oled_display_image=filepath.media+"/grove_oled_display.jpg";Blockly.Blocks.grove.imu_9dof=filepath.media+"/grove_imu_9dof.jpg";
Blockly.Blocks.grove.rgb_lcd_checkBlocks=function(a){var b=null,d=a.type;a=a.workspace.getAllBlocks();for(var c=0;c<a.length;c++)if("grove_rgb_lcd_setcolor"!=a[c].type&&"grove_rgb_lcd_print"!=a[c].type&&"grove_rgb_lcd_setcursor"!=a[c].type&&"grove_rgb_lcd_custom_setcursor"!=a[c].type&&"grove_rgb_lcd_clear"!=a[c].type&&"grove_rgb_lcd_scrolldisplayleft"!=a[c].type&&"grove_rgb_lcd_scrolldisplayright"!=a[c].type&&"grove_rgb_lcd_switch_scroll"!=a[c].type&&"grove_rgb_lcd_autoscroll"!=a[c].type&&"grove_rgb_lcd_noautoscroll"!=
a[c].type&&"grove_rgb_lcd_lefttoright"!=a[c].type&&"grove_rgb_lcd_righttoleft"!=a[c].type||null!=b||(b=a[c].type!=d?!0:!1),"grove_rgb_lcd_begin"==a[c].type)return!0;return b};
Blockly.Blocks.grove.grove_ir_receiver_checkBlocks=function(a){var b=null,d=a.type;a=a.workspace.getAllBlocks();for(var c=0;c<a.length;c++)if("grove_ir_receiver_check_data"!=a[c].type&&"grove_ir_receiver_receive"!=a[c].type&&"grove_ir_receiver_data"!=a[c].type||null!=b||(b=a[c].type!=d?!0:!1),"grove_ir_receiver_init"==a[c].type)return!0;return b};
Blockly.Blocks.grove_led={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_LED_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_LED_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.led_image,64,64)).appendField(Blockly.Msg.GROVE_PORT).appendField(new Blockly.FieldDropdown(profile["default"].grove_digital),"PIN").appendField(Blockly.Msg.GROVE_LED_STAT).appendField(new Blockly.FieldDropdown([[Blockly.Msg.INOUT_HIGH,"HIGH"],[Blockly.Msg.INOUT_LOW,
"LOW"]]),"STAT");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.GROVE_LED_TOOLTIP)}};
Blockly.Blocks.grove_button={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_BUTTON_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_BUTTON_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.button_image,64,64)).appendField(Blockly.Msg.GROVE_PORT).appendField(new Blockly.FieldDropdown(profile["default"].grove_digital),"PIN");this.setOutput(!0,"Boolean");this.setTooltip(Blockly.Msg.GROVE_BUTTON_TOOLTIP)}};
Blockly.Blocks.grove_touch={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_TOUCH_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_TOUCH_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.touch_image,64,64)).appendField(Blockly.Msg.GROVE_PORT).appendField(new Blockly.FieldDropdown(profile["default"].grove_digital),"PIN");this.setOutput(!0,"Boolean");this.setTooltip(Blockly.Msg.GROVE_TOUCH_TOOLTIP)}};
Blockly.Blocks.grove_light_sensor={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_LIGHT_SENSOR_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_LIGHT_SENSOR_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.light_sensor_image,64,64)).appendField(Blockly.Msg.GROVE_PORT).appendField(new Blockly.FieldDropdown(profile["default"].grove_analog),"PIN");this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.GROVE_LIGHT_SENSOR_TOOLTIP)}};
Blockly.Blocks.grove_rotary_angle={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_ROTARY_ANGLE_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_ROTARY_ANGLE_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rotary_angle_image,64,64)).appendField(Blockly.Msg.GROVE_PORT).appendField(new Blockly.FieldDropdown(profile["default"].grove_analog),"PIN");this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.GROVE_ROTARY_ANGLE_TOOLTIP)}};
Blockly.Blocks.grove_tilt_switch={init:function(){this.setHelpUrl("http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Tilt_switch");this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_TILT_SWITCH_TITLE).appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/9/95/Tilt1.jpg/400px-Tilt1.jpg",64,64)).appendField(Blockly.Msg.GROVE_PORT).appendField(new Blockly.FieldDropdown(profile["default"].grove_digital),
"PIN");this.setOutput(!0,"Boolean");this.setTooltip(Blockly.Msg.GROVE_TILT_SWITCH_TOOLTIP)}};
Blockly.Blocks.grove_buzzer={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_BUZZER_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_BUZZER_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.buzzer_image,64,64)).appendField(Blockly.Msg.GROVE_PORT).appendField(new Blockly.FieldDropdown(profile["default"].grove_digital),"PIN").appendField(Blockly.Msg.GROVE_STAT).appendField(new Blockly.FieldDropdown([[Blockly.Msg.INOUT_HIGH,"HIGH"],
[Blockly.Msg.INOUT_LOW,"LOW"]]),"STAT");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.GROVE_BUZZER_TOOLTIP)}};
Blockly.Blocks.grove_relay={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_RELAY_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_RELAY_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.relay_image,64,41)).appendField(Blockly.Msg.GROVE_PORT).appendField(new Blockly.FieldDropdown(profile["default"].grove_digital),"PIN").appendField(Blockly.Msg.GROVE_STAT).appendField(new Blockly.FieldDropdown([[Blockly.Msg.INOUT_HIGH,"HIGH"],[Blockly.Msg.INOUT_LOW,
"LOW"]]),"STAT");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.GROVE_RELAY_TOOLTIP)}};
Blockly.Blocks.grove_temporature_sensor={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_TEMP_SENSOR_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_TEMP_SENSOR_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.temperature_sensor_image,64,64)).appendField(Blockly.Msg.GROVE_PORT).appendField(new Blockly.FieldDropdown(profile["default"].grove_analog),"PIN");this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.GROVE_TEMP_SENSOR_TOOLTIP)}};
Blockly.Blocks.grove_serial_lcd_print={init:function(){this.setHelpUrl("http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Serial_LCD");this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField("Serial LCD").appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/6/6a/LCD1.jpg/400px-LCD1.jpg",64,64)).appendField("PIN#").appendField(new Blockly.FieldDropdown(profile["default"].grove_digital),"PIN");this.appendValueInput("TEXT","String").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField("print line1");
this.appendValueInput("TEXT2","String").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField("print line2");this.appendValueInput("DELAY_TIME","Number").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("Delay");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip("print text on an 16 character by 2 line LCD.")}};
Blockly.Blocks.grove_serial_lcd_power={helpUrl:"http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED",init:function(){this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField("Serial LCD").appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/6/6a/LCD1.jpg/400px-LCD1.jpg",64,64)).appendField("PIN#").appendField(new Blockly.FieldDropdown(profile["default"].grove_digital),"PIN");this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("Power").appendField(new Blockly.FieldDropdown([[Blockly.Msg.INPUT_ON,
"ON"],[Blockly.Msg.INPUT_OFF,"OFF"]]),"STAT");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip("Turn LCD power on/off")}};
Blockly.Blocks.grove_serial_lcd_effect={init:function(){this.setHelpUrl("http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED");this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField("Serial LCD").appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/6/6a/LCD1.jpg/400px-LCD1.jpg",64,64)).appendField("PIN#").appendField(new Blockly.FieldDropdown(profile["default"].grove_digital),"PIN");this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("Effect").appendField(new Blockly.FieldDropdown([["Scroll Left",
"LEFT"],["Scroll Right","RIGHT"],["Scroll Auto","AUTO"]]),"STAT");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip("Turn LCD power on/off")}};
Blockly.Blocks.grove_sound_sensor={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_SOUND_SENSOR_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_SOUND_SENSOR_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.sound_sensor_image,64,64)).appendField(Blockly.Msg.GROVE_PORT).appendField(new Blockly.FieldDropdown(profile["default"].grove_analog),"PIN");this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.GROVE_SOUND_SENSOR_TOOLTIP)}};
Blockly.Blocks.grove_pir_motion_sensor={helpUrl:"http://www.seeedstudio.com/wiki/Grove_-_PIR_Motion_Sensor",init:function(){this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField("PIR Motion Sensor").appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/f/fd/Twig-PIR_Motion_Sensor.jpg/400px-Twig-PIR_Motion_Sensor.jpg",64,64)).appendField("PIN#").appendField(new Blockly.FieldDropdown(profile["default"].grove_digital),"PIN");this.setOutput(!0,"Number");
this.setTooltip("When anyone moves in it's detecting range, the sensor outputs HIGH.")}};
Blockly.Blocks.grove_line_finder={init:function(){this.setHelpUrl("http://www.seeedstudio.com/wiki/Grove_-_Line_Finder");this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField("Line Finder").appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/8/82/Grovelinefinder1.jpg/400px-Grovelinefinder1.jpg",64,64)).appendField("PIN#").appendField(new Blockly.FieldDropdown(profile["default"].grove_digital),"PIN");this.setOutput(!0,"Boolean");this.setTooltip("Output digital signal so the robot can reliably follow a black line on a white background")}};
Blockly.Blocks.grove_ultrasonic_ranger={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_ULTRASONIC_RANGER_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_ULTRASONIC_RANGER_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.ultrasonic_ranger_image,64,46)).appendField(Blockly.Msg.GROVE_PORT).appendField(new Blockly.FieldDropdown(profile["default"].grove_digital),"PIN").appendField(Blockly.Msg.GROVE_ULTRASONIC_RANGER_UNIT).appendField(new Blockly.FieldDropdown([[Blockly.Msg.GROVE_ULTRASONIC_RANGER_UNIT_CM,
"cm"],[Blockly.Msg.GROVE_ULTRASONIC_RANGER_UNIT_INCH,"inch"]]),"UNIT");this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.GROVE_ULTRASONIC_RANGER_TOOLTIP)}};
Blockly.Blocks.grove_motor_shield={init:function(){this.setHelpUrl("http://www.seeedstudio.com/wiki/Motor_Shield");this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField("Motor").appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/4/4d/Smotoshield2.jpg/400px-Smotoshield2.jpg",64,64)).appendField(new Blockly.FieldDropdown([["Stop","stop"],["Forward","forward"],["Right","right"],["Left","left"],["Backward","backward"]]),"DIRECTION");this.setPreviousStatement(!0,
null);this.setNextStatement(!0,null);this.setTooltip("Drive two brushed DC motors")}};
Blockly.Blocks.grove_thumb_joystick={init:function(){this.setHelpUrl("http://www.seeedstudio.com/wiki/Grove_-_Thumb_Joystick");this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField("Thumb Joystick").appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/e/e0/Twig_-_Thumb_Joystick_v0.9b.jpg/200px-Twig_-_Thumb_Joystick_v0.9b.jpg",64,64)).appendField("PIN#").appendField(new Blockly.FieldDropdown(profile["default"].grove_analog),"PIN").appendField("axis").appendField(new Blockly.FieldDropdown([["x",
"x"],["y","y"]]),"AXIS");this.setOutput(!0,"Number");this.setTooltip("output two analog values(200~800) representing two directions")}};
Blockly.Blocks.grove_rgb_led={init:function(){this.setHelpUrl("http://www.seeedstudio.com/wiki/index.php?title=Twig_-_Chainable_RGB_LED");this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField("Chainable RGB LED").appendField(new Blockly.FieldImage("http://www.seeedstudio.com/depot/images/product/chanbalelednb1.jpg",64,64)).appendField("PIN#").appendField(new Blockly.FieldDropdown(profile["default"].grove_digital),"PIN");this.appendDummyInput("COLOR0").setAlign(Blockly.ALIGN_RIGHT).appendField("Color 1").appendField(new Blockly.FieldColour("#00ff00"),
"RGB0");this.setMutator(new Blockly.Mutator(["grove_rgb_led_item"]));this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip("256 color LED, currently Chainable feature is not support");this.itemCount_=1},mutationToDom:function(){var a=document.createElement("mutation");a.setAttribute("items",this.itemCount_);for(var b=0;b<this.itemCount_;b++){var d=this.getFieldValue("RGB0");a.setAttribute("RGB"+b,d)}return a},domToMutation:function(a){for(var b=0;b<this.itemCount_;b++)this.removeInput("COLOR"+
b);this.itemCount_=window.parseInt(a.getAttribute("items"),10);for(b=0;b<this.itemCount_;b++){var d=window.parseInt(a.getAttribute("RGB"+b),"#00ff00");this.appendDummyInput("COLOR"+b).setAlign(Blockly.ALIGN_RIGHT).appendField("Color "+(b+1)).appendField(new Blockly.FieldColour(d),"RGB"+b)}0==this.itemCount_&&this.appendDummyInput("COLOR0").setAlign(Blockly.ALIGN_RIGHT).appendField("Color 1").appendField(new Blockly.FieldColour("#00ff00"),"RGB0")},decompose:function(a){var b=Blockly.Block.obtain(a,
"grove_rgb_led_container");b.initSvg();for(var d=b.getInput("STACK").connection,c=0;c<this.itemCount_;c++){var e=Blockly.Block.obtain(a,"grove_rgb_led_item");e.initSvg();d.connect(e.previousConnection);d=e.nextConnection}return b},compose:function(a){if(0==this.itemCount_)this.removeInput("COLOR0");else for(var b=this.itemCount_-1;0<=b;b--)this.removeInput("COLOR"+b);this.itemCount_=0;for(a=a.getInputTargetBlock("STACK");a;){b=this.getFieldValue("RGB"+this.itemCount_);null==b&&(b="00ff00");var d=
this.appendDummyInput("COLOR"+this.itemCount_);d.setAlign(Blockly.ALIGN_RIGHT).appendField("Color "+(this.itemCount_+1)).appendField(new Blockly.FieldColour(b),"RGB"+this.itemCount_);a.valueConnection_&&d.connection.connect(a.valueConnection_);this.itemCount_++;a=a.nextConnection&&a.nextConnection.targetBlock()}0==this.itemCount_&&this.appendDummyInput("COLOR0").setAlign(Blockly.ALIGN_RIGHT).appendField("Color 1").appendField(new Blockly.FieldColour("#00ff00"),"RGB0")}};
Blockly.Blocks.grove_rgb_led_container={init:function(){this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField("Container");this.appendStatementInput("STACK");this.setTooltip("Add, remove items to reconfigure this chain");this.contextMenu=!1}};
Blockly.Blocks.grove_rgb_led_item={init:function(){this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField("Item");this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip("Add an item to the chain");this.contextMenu=!1}};
Blockly.Blocks.grove_bluetooth_slave={category:"Network",init:function(){this.setHelpUrl("http://www.seeedstudio.com/wiki/Grove_-_Serial_Bluetooth");this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField("Bluetooth Slave").appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/File:Twigbt00.jpg",64,64)).appendField("PIN#").appendField(new Blockly.FieldDropdown(profile["default"].grove_digital),"PIN");this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("Name").appendField(new Blockly.FieldTextInput("blocklyduino"),
"NAME");this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("Pincode").appendField(new Blockly.FieldTextInput("0000"),"PINCODE");this.appendStatementInput("RCV").setAlign(Blockly.ALIGN_RIGHT).appendField("Receive");this.appendStatementInput("SNT").setAlign(Blockly.ALIGN_RIGHT).appendField("Send");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip("Bluetooth V2.0+EDR slave. Support single slave per board")}};
Blockly.Blocks.grove_rgb_lcd_setcolor={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_RGB_LCD_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_RGB_LCD_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rgb_lcd_image,64,64)).appendField(Blockly.Msg.COLOR).appendField(new Blockly.FieldColour("#00ff00"),"RGB");this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.GROVE_RGB_LCD_SETCOLOR_TOOLTIP)},onchange:function(){this.workspace&&
(Blockly.Blocks.grove.rgb_lcd_checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.GROVE_RGB_LCD_WARNING))}};
Blockly.Blocks.grove_rgb_lcd_begin={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_RGB_LCD_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_RGB_LCD_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rgb_lcd_image,64,64)).appendField(Blockly.Msg.GROVE_RGB_LCD_BEGIN_TITLE).appendField(Blockly.Msg.COL).appendField(new Blockly.FieldTextInput("16"),"COLS");this.appendDummyInput().appendField(Blockly.Msg.ROW).appendField(new Blockly.FieldTextInput("2"),
"ROWS");this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.GROVE_RGB_LCD_BEGIN_TOOLTIP)},onchange:function(){this.workspace&&this.setWarningText(Blockly.Msg.GROVE_RGB_LCD_BEGIN_WARNING)}};
Blockly.Blocks.grove_rgb_lcd_print={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_RGB_LCD_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendValueInput("PRINT").appendField(Blockly.Msg.GROVE_RGB_LCD_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rgb_lcd_image,64,64)).appendField(Blockly.Msg.GROVE_RGB_LCD_PRINT_TITLE);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.GROVE_RGB_LCD_PRINT_TOOLTIP)},onchange:function(){this.workspace&&
(Blockly.Blocks.grove.rgb_lcd_checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.GROVE_RGB_LCD_WARNING))}};
Blockly.Blocks.grove_rgb_lcd_setcursor={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_RGB_LCD_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_RGB_LCD_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rgb_lcd_image,64,64)).appendField(Blockly.Msg.GROVE_RGB_LCD_SETCURSOR_TITLE).appendField(Blockly.Msg.COL).appendField(new Blockly.FieldTextInput("0"),"COL");this.appendDummyInput().appendField(Blockly.Msg.ROW).appendField(new Blockly.FieldTextInput("0"),
"ROW");this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.GROVE_RGB_LCD_SETCURSOR_TOOLTIP)},onchange:function(){this.workspace&&(Blockly.Blocks.grove.rgb_lcd_checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.GROVE_RGB_LCD_WARNING))}};
Blockly.Blocks.grove_rgb_lcd_custom_setcursor={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_RGB_LCD_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_RGB_LCD_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rgb_lcd_image,64,64)).appendField(Blockly.Msg.GROVE_RGB_LCD_SETCURSOR_TITLE);this.appendValueInput("COL").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COL);this.appendValueInput("ROW").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ROW);
this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.GROVE_RGB_LCD_SETCURSOR_TOOLTIP)},onchange:function(){this.workspace&&(Blockly.Blocks.grove.rgb_lcd_checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.GROVE_RGB_LCD_WARNING))}};
Blockly.Blocks.grove_rgb_lcd_clear={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_RGB_LCD_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_RGB_LCD_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rgb_lcd_image,64,64)).appendField(Blockly.Msg.GROVE_RGB_LCD_CLEAR_TITLE);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.GROVE_RGB_LCD_CLEAR_TOOLTIP)},onchange:function(){this.workspace&&
(Blockly.Blocks.grove.rgb_lcd_checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.GROVE_RGB_LCD_WARNING))}};
Blockly.Blocks.grove_rgb_lcd_scrolldisplayleft={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_RGB_LCD_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_RGB_LCD_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rgb_lcd_image,64,64)).appendField(Blockly.Msg.GROVE_RGB_LCD_SCROLL_DISPLAY_LEFT_TITLE);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.GROVE_RGB_LCD_SCROLL_DISPLAY_LEFT_TOOLTIP)},
onchange:function(){this.workspace&&(Blockly.Blocks.grove.rgb_lcd_checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.GROVE_RGB_LCD_WARNING))}};
Blockly.Blocks.grove_rgb_lcd_scrolldisplayright={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_LCD_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_RGB_LCD_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rgb_lcd_image,64,64)).appendField(Blockly.Msg.GROVE_LCD_SCROLL_DISPLAY_RIGHT_TITLE);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.GROVE_LCD_SCROLL_DISPLAY_RIGHT_TOOLTIP)},
onchange:function(){this.workspace&&(Blockly.Blocks.grove.rgb_lcd_checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.GROVE_RGB_LCD_WARNING))}};
Blockly.Blocks.grove_rgb_lcd_switch_scroll={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_RGB_LCD_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_RGB_LCD_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rgb_lcd_image,64,64)).appendField(Blockly.Msg.GROVE_RGB_LCD_AUTOSCROLL_TITLE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.ON,"1"],[Blockly.Msg.OFF,"0"]]),"SW");this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);
this.setTooltip(Blockly.Msg.GROVE_RGB_LCD_AUTOSCROLL_TOOLTIP)},onchange:function(){this.workspace&&(Blockly.Blocks.grove.rgb_lcd_checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.GROVE_RGB_LCD_WARNING))}};
Blockly.Blocks.grove_rgb_lcd_autoscroll={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_RGB_LCD_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_RGB_LCD_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rgb_lcd_image,64,64)).appendField(Blockly.Msg.GROVE_RGB_LCD_AUTOSCROLL_TITLE);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.GROVE_RGB_LCD_AUTOSCROLL_TOOLTIP)},onchange:function(){this.workspace&&
(Blockly.Blocks.grove.rgb_lcd_checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.GROVE_RGB_LCD_WARNING))}};
Blockly.Blocks.grove_rgb_lcd_noautoscroll={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_RGB_LCD_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_RGB_LCD_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rgb_lcd_image,64,64)).appendField(Blockly.Msg.GROVE_RGB_LCD_NOAUTOSCROLL_TITLE);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.GROVE_RGB_LCD_NOAUTOSCROLL_TOOLTIP)},
onchange:function(){this.workspace&&(Blockly.Blocks.grove.rgb_lcd_checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.GROVE_RGB_LCD_WARNING))}};
Blockly.Blocks.grove_rgb_lcd_lefttoright={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_RGB_LCD_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_RGB_LCD_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rgb_lcd_image,64,64)).appendField(Blockly.Msg.GROVE_RGB_LCD_LEFTTORIGHT_TITLE);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.GROVE_RGB_LCD_LEFTTORIGHT_TOOLTIP)},onchange:function(){this.workspace&&
(Blockly.Blocks.grove.rgb_lcd_checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.GROVE_RGB_LCD_WARNING))}};
Blockly.Blocks.grove_rgb_lcd_righttoleft={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_LCD_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_RGB_LCD_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rgb_lcd_image,64,64)).appendField(Blockly.Msg.GROVE_RGB_LCD_RIGHTTOLEFT_TITLE);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.GROVE_RGB_LCD_RIGHTTOLEFT_TOOLTIP)},onchange:function(){this.workspace&&
(Blockly.Blocks.grove.rgb_lcd_checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.GROVE_RGB_LCD_WARNING))}};
Blockly.Blocks.grove_ir_receiver_init={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_IR_RECEIVER_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_IR_RECEIVER_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.ir_receiver_image,64,64)).appendField(Blockly.Msg.GROVE_IR_RECEIVER_INIT_TITLE).appendField(Blockly.Msg.PIN).appendField(new Blockly.FieldDropdown(profile["default"].grove_digital),"PIN");this.setInputsInline(!0);this.setPreviousStatement(!0);
this.setNextStatement(!0);this.setTooltip(Blockly.Msg.GROVE_IR_REVEIVER_INIT_TOOLTIP)},onchange:function(){this.workspace&&this.setWarningText(Blockly.Msg.GROVE_IR_RECEIVER_INIT_WARNING)}};
Blockly.Blocks.grove_ir_receiver_check_data={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_IR_RECEIVER_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_IR_RECEIVER_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.ir_receiver_image,64,64)).appendField(Blockly.Msg.GROVE_IR_RECEIVER_CHECK_DATA_TITLE);this.setOutput(!0);this.setTooltip(Blockly.Msg.GROVE_IR_RECEIVER_CHECK_DATA_TOOLTIP)},onchange:function(){this.workspace&&(Blockly.Blocks.grove.grove_ir_receiver_checkBlocks(this)?
this.setWarningText(null):this.setWarningText(Blockly.Msg.GROVE_IR_RECEIVER_WARNING))}};
Blockly.Blocks.grove_ir_receiver_receive={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_IR_RECEIVER_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_IR_RECEIVER_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.ir_receiver_image,64,64)).appendField(Blockly.Msg.GROVE_IR_RECEIVER_RECEIVE_TITLE);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.GROVE_IR_RECEIVER_RECEIVE_TOOLTIP)},
onchange:function(){this.workspace&&(Blockly.Blocks.grove.grove_ir_receiver_checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.GROVE_IR_RECEIVER_WARNING))}};
Blockly.Blocks.grove_ir_receiver_data={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_IR_RECEIVER_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_IR_RECEIVER_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.ir_receiver_image,64,64)).appendField(Blockly.Msg.GROVE_IR_RECEIVER_DATA_TITLE);this.setInputsInline(!0);this.setOutput(!0);this.setTooltip(Blockly.Msg.GROVE_IR_RECEIVER_DATA_TOOLTIP)},onchange:function(){this.workspace&&
(Blockly.Blocks.grove.grove_ir_receiver_checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.GROVE_IR_RECEIVER_WARNING))}};
Blockly.Blocks.grove_ir_emitter_send={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_IR_EMITTER_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_IR_EMITTER_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.ir_emitter_image,64,64)).appendField(Blockly.Msg.GROVE_IR_EMITTER_SEND_TITLE);this.appendValueInput("DATA").setCheck("Number").appendField(Blockly.Msg.DATA);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);
this.setTooltip(Blockly.Msg.GROVE_IR_EMMITER_SEND_TOOLTIP)},onchange:function(){this.workspace&&this.setWarningText(Blockly.Msg.GROVE_IR_EMITTER_WARNING)}};
Blockly.Blocks.grove_temporature_humidity_sensor={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_TEMP_SENSOR_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_TEMP_HUMI_SENSOR_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.temporature_humidity_sensor_image,64,56)).appendField(Blockly.Msg.GROVE_PORT).appendField(new Blockly.FieldDropdown(profile["default"].grove_digital),"PIN").appendField(Blockly.Msg.GROVE_TEMP_HUMI_SENSOR_VALUE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.GROVE_TEMP_HUMI_SENSOR_VALUE_HUMI,
"h"],[Blockly.Msg.GROVE_TEMP_HUMI_SENSOR_VALUE_TEMP_C,"c"],[Blockly.Msg.GROVE_TEMP_HUMI_SENSOR_VALUE_TEMP_F,"f"]]),"UNIT");this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.GROVE_TEMP_HUMI_SENSOR_TOOLTIP)}};
Blockly.Blocks.grove_led_bar={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_LED_BAR_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_LED_BAR_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.led_bar_image,64,48)).appendField(Blockly.Msg.GROVE_PORT).appendField(new Blockly.FieldDropdown(profile["default"].grove_digital),"PIN").appendField(Blockly.Msg.GROVE_LED_BAR_LEVEL);this.appendValueInput("LEVEL").setCheck("Number");this.setInputsInline(!0);
this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.GROVE_LED_BAR_TOOLTIP)}};
Blockly.Blocks.grove_oled_display_clear={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_OLED_DISPLAY_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_OLED_DISPLAY_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.oled_display_image,64,48)).appendField(Blockly.Msg.GROVE_OLED_DISPLAY_CLEAR);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.GROVE_OLED_DISPLAY_TOOLTIP)}};
Blockly.Blocks.grove_oled_display_set_cursor={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_OLED_DISPLAY_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_OLED_DISPLAY_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.oled_display_image,64,48));this.appendValueInput("ROW").setCheck("Number").appendField(Blockly.Msg.GROVE_OLED_DISPLAY_SET_CURSOR);this.appendValueInput("COL").setCheck("Number").appendField(Blockly.Msg.GROVE_OLED_DISPLAY_SET_CURSOR_SEP);
this.appendDummyInput().appendField(Blockly.Msg.GROVE_OLED_DISPLAY_SET_CURSOR_APPEND);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.GROVE_OLED_DISPLAY_TOOLTIP)}};
Blockly.Blocks.grove_oled_display_put={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_OLED_DISPLAY_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.appendDummyInput().appendField(Blockly.Msg.GROVE_OLED_DISPLAY_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.oled_display_image,64,48)).appendField(Blockly.Msg.GROVE_OLED_DISPLAY_PUT).appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_WRITE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.VARIABLES_TYPE_NUMBER,"Number"],[Blockly.Msg.VARIABLES_TYPE_FLOAT,
"Float"],[Blockly.Msg.VARIABLES_TYPE_STRING,"String"]]),"TYPE");this.appendValueInput("VALUE").setCheck(["Number","String"]);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.GROVE_OLED_DISPLAY_TOOLTIP)}};
Blockly.Blocks.grove_imu_9dof_read_acc={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_IMU_9DOF_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.setTooltip(Blockly.Msg.GROVE_IMU_9DOF_TOOLTIP);this.appendDummyInput().appendField(Blockly.Msg.GROVE_IMU_9DOF_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.imu_9dof,64,48));this.appendDummyInput().appendField(Blockly.Msg.GROVE_PORT).appendField(new Blockly.FieldDropdown([["I2C","PIN"]]),"PIN");this.appendDummyInput().appendField(Blockly.Msg.GROVE_IMU_9DOF_ACC).appendField(new Blockly.FieldDropdown([[Blockly.Msg.GROVE_IMU_9DOF_READ_X,
"X"],[Blockly.Msg.GROVE_IMU_9DOF_READ_Y,"Y"],[Blockly.Msg.GROVE_IMU_9DOF_READ_Z,"Z"]]),"AXIS").appendField(Blockly.Msg.GROVE_IMU_9DOF_ACC_UNIT);this.setInputsInline(!0);this.setOutput(!0,"Number")},onchange:function(){}};
Blockly.Blocks.grove_imu_9dof_read_gyro={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_IMU_9DOF_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.setTooltip(Blockly.Msg.GROVE_IMU_9DOF_TOOLTIP);this.appendDummyInput().appendField(Blockly.Msg.GROVE_IMU_9DOF_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.imu_9dof,64,48));this.appendDummyInput().appendField(Blockly.Msg.GROVE_PORT).appendField(new Blockly.FieldDropdown([["I2C","PIN"]]),"PIN");this.appendDummyInput().appendField(Blockly.Msg.GROVE_IMU_9DOF_GYRO).appendField(new Blockly.FieldDropdown([[Blockly.Msg.GROVE_IMU_9DOF_READ_X,
"X"],[Blockly.Msg.GROVE_IMU_9DOF_READ_Y,"Y"],[Blockly.Msg.GROVE_IMU_9DOF_READ_Z,"Z"]]),"AXIS").appendField(Blockly.Msg.GROVE_IMU_9DOF_GYRO_UNIT);this.setInputsInline(!0);this.setOutput(!0,"Number")},onchange:function(){}};
Blockly.Blocks.grove_imu_9dof_read_mag={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_IMU_9DOF_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.setTooltip(Blockly.Msg.GROVE_IMU_9DOF_TOOLTIP);this.appendDummyInput().appendField(Blockly.Msg.GROVE_IMU_9DOF_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.imu_9dof,64,48));this.appendDummyInput().appendField(Blockly.Msg.GROVE_PORT).appendField(new Blockly.FieldDropdown([["I2C","PIN"]]),"PIN");this.appendDummyInput().appendField(Blockly.Msg.GROVE_IMU_9DOF_MAG).appendField(new Blockly.FieldDropdown([[Blockly.Msg.GROVE_IMU_9DOF_READ_X,
"X"],[Blockly.Msg.GROVE_IMU_9DOF_READ_Y,"Y"],[Blockly.Msg.GROVE_IMU_9DOF_READ_Z,"Z"]]),"AXIS").appendField(Blockly.Msg.GROVE_IMU_9DOF_MAG_UNIT);this.setInputsInline(!0);this.setOutput(!0,"Number")},onchange:function(){}};
Blockly.Blocks.grove_imu_9dof_read_north={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_IMU_9DOF_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.setTooltip(Blockly.Msg.GROVE_IMU_9DOF_TOOLTIP);this.appendDummyInput().appendField(Blockly.Msg.GROVE_IMU_9DOF_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.imu_9dof,64,48));this.appendDummyInput().appendField(Blockly.Msg.GROVE_PORT).appendField(new Blockly.FieldDropdown([["I2C","PIN"]]),"PIN");this.appendDummyInput().appendField(Blockly.Msg.GROVE_IMU_9DOF_NORTH);
this.setInputsInline(!0);this.setOutput(!0,"Number")},onchange:function(){}};
Blockly.Blocks.grove_imu_9dof_read_attitude={init:function(){this.setHelpUrl(Blockly.Msg.GROVE_IMU_9DOF_HELPURL);this.setColour(Blockly.Blocks.grove.HUE);this.setTooltip(Blockly.Msg.GROVE_IMU_9DOF_TOOLTIP);this.appendDummyInput().appendField(Blockly.Msg.GROVE_IMU_9DOF_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.grove.imu_9dof,64,48));this.appendDummyInput().appendField(Blockly.Msg.SIGNAL_PIN).appendField(new Blockly.FieldDropdown([["I2C","PIN"]]),"PIN");this.appendDummyInput().appendField(Blockly.Msg.GROVE_IMU_9DOF_ATTITUDE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.GROVE_IMU_9DOF_PITCH,
"Pitch"],[Blockly.Msg.GROVE_IMU_9DOF_ROLL,"Roll"]]),"ATTITUDE").appendField(Blockly.Msg.GROVE_IMU_9DOF_DEGREE);this.setInputsInline(!0);this.setOutput(!0,"Number")},onchange:function(){}};/*

 Blockly for LinkIt 7697
 https://github.com/MediaTek-Labs/BlocklyDuino-for-LinkIt

 Copyright 2018 MediaTek Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
Blockly.Blocks.pms={};
Blockly.Blocks.pms.HUE=70;
Blockly.Blocks.pms_read={init:function(){this.setHelpUrl(Blockly.Msg.PMS_HELPURL);this.setColour(Blockly.Blocks.pms.HUE);this.appendDummyInput().appendField(Blockly.Msg.PMS_RECEIVE_TITLE).appendField(new Blockly.FieldDropdown([["PMS3003","PMS3003"],["PMS5003","PMS5003"],["PMS7003","PMS7003"]]),"MODEL");this.appendDummyInput().appendField("RX").appendField(new Blockly.FieldDropdown([["2","2"],["3","3"]]),"RX_PIN");this.appendDummyInput().appendField("TX").appendField(new Blockly.FieldDropdown(profile["default"].digital),"TX_PIN");
this.appendDummyInput().appendField(Blockly.Msg.PMS_READ_VALIE).appendField(new Blockly.FieldDropdown([["PM1.0","pms_read_PM1"],["PM2.5","pms_read_PM2"],["PM10","pms_read_PM10"]]),"PM_LEVEL").appendField("(ug/m\u00b3)");this.setInputsInline(!0);this.setOutput(!0,"Number")},onchange:function(){}};Blockly.Blocks.htu21d={};Blockly.Blocks.htu21d.HUE=70;
Blockly.Blocks.htu21d_read={init:function(){this.setHelpUrl(Blockly.Msg.HTU21D_HELPURL);this.setColour(Blockly.Blocks.htu21d.HUE);this.setTooltip(Blockly.Msg.HTU21D_TOOLTIP);this.appendDummyInput().appendField(Blockly.Msg.HTU21D_TITLE).appendField(new Blockly.FieldDropdown([["HTU21D","HTU21D"],["SHT21","SHT21"]]),"SENSOR");this.appendDummyInput().appendField(Blockly.Msg.SIGNAL_PIN).appendField(new Blockly.FieldDropdown([["I2C","PIN"]]),"PIN");this.appendDummyInput().appendField(Blockly.Msg.MESUREMENT_TYPE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.HUMIDITY_PERCENT,
"HUMIDITY"],[Blockly.Msg.TEMPERATURE_CELCIUS,"TEMPERATURE_C"]]),"MEASUREMENT");this.setInputsInline(!0);this.setOutput(!0,"Number")},onchange:function(){}};Blockly.Blocks.i2c_matrix={};Blockly.Blocks.i2c_matrix.HUE=215;Blockly.Blocks.mini_matrix_image=filepath.media+"/mini_matrix.jpg";
Blockly.Blocks.i2c_matrix.checkBlocks=function(a){var b=null,d=a.type;a=a.workspace.getAllBlocks();for(var c=0;c<a.length;c++)if("i2c_matrix_clear"!=a[c].type&&"i2c_matrix_setcursor"!=a[c].type&&"i2c_matrix_print"!=a[c].type&&"i2c_matrix_settextsize"!=a[c].type&&"i2c_matrix_settextwrap"!=a[c].type&&"i2c_matrix_settextcolor"!=a[c].type&&"i2c_matrix_drawpixel"!=a[c].type&&"i2c_matrix_drawcircle"!=a[c].type&&"i2c_matrix_drawrect"!=a[c].type&&"i2c_matrix_drawline"!=a[c].type&&"i2c_matrix_fillrect"!=a[c].type&&
"i2c_matrix_setrotation"!=a[c].type&&"i2c_matrix_writedisplay"!=a[c].type||null!=b||(b=a[c].type!=d?!0:!1),"i2c_matrix_begin"==a[c].type)return!0;return b};
Blockly.Blocks.i2c_matrix_begin={init:function(){this.setHelpUrl(Blockly.Msg.I2C_MATRIX_HELPURL);this.setColour(Blockly.Blocks.i2c_matrix.HUE);this.appendDummyInput().appendField(Blockly.Msg.I2C_MATRIX_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image,64,64)).appendField(Blockly.Msg.I2C_MATRIX_BEGIN_TITLE).appendField(Blockly.Msg.I2C_MATRIX_TYPE).appendField(new Blockly.FieldDropdown(profile["default"].i2c_matrix_type),"TYPE").appendField(Blockly.Msg.I2C_MATRIX_ADDRESS).appendField(new Blockly.FieldDropdown(profile["default"].led_backpack_address),
"ADDRESS");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip("")},onchange:function(){this.workspace&&this.setWarningText(Blockly.Msg.I2C_MATRIX_BEGIN_WARNING)}};
Blockly.Blocks.i2c_matrix_clear={init:function(){this.setHelpUrl(Blockly.Msg.I2C_MATRIX_HELPURL);this.setColour(Blockly.Blocks.i2c_matrix.HUE);this.appendDummyInput().appendField(Blockly.Msg.I2C_MATRIX_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image,64,64)).appendField(Blockly.Msg.I2C_MATRIX_CLEAR);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip("")},onchange:function(){this.workspace&&(Blockly.Blocks.i2c_matrix.checkBlocks(this)?this.setWarningText(null):
this.setWarningText(Blockly.Msg.I2C_MATRIX_WARNING))}};
Blockly.Blocks.i2c_matrix_setcursor={init:function(){this.setHelpUrl(Blockly.Msg.I2C_MATRIX_HELPURL);this.setColour(Blockly.Blocks.i2c_matrix.HUE);this.appendDummyInput().appendField(Blockly.Msg.I2C_MATRIX_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image,64,64)).appendField(Blockly.Msg.I2C_MATRIX_SETCURSOR);this.appendValueInput("COL").setCheck("Number").appendField(Blockly.Msg.COL);this.appendValueInput("ROW").setCheck("Number").appendField(Blockly.Msg.ROW);this.setInputsInline(!0);
this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip("")},onchange:function(){this.workspace&&(Blockly.Blocks.i2c_matrix.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.I2C_MATRIX_WARNING))}};
Blockly.Blocks.i2c_matrix_print={init:function(){this.setHelpUrl(Blockly.Msg.I2C_MATRIX_HELPURL);this.setColour(Blockly.Blocks.i2c_matrix.HUE);this.appendDummyInput().appendField(Blockly.Msg.I2C_MATRIX_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image,64,64)).appendField(Blockly.Msg.I2C_MATRIX_PRINT);this.appendValueInput("CONTENT").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.I2C_MATRIX_TEXT);this.setPreviousStatement(!0,null);this.setNextStatement(!0,
null);this.setTooltip("")},onchange:function(){this.workspace&&(Blockly.Blocks.i2c_matrix.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.I2C_MATRIX_WARNING))}};
Blockly.Blocks.i2c_matrix_settextsize={init:function(){this.setHelpUrl(Blockly.Msg.I2C_MATRIX_HELPURL);this.setColour(Blockly.Blocks.i2c_matrix.HUE);this.appendDummyInput().appendField(Blockly.Msg.I2C_MATRIX_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image,64,64)).appendField(Blockly.Msg.I2C_MATRIX_SETTEXTSIZE).appendField(new Blockly.FieldTextInput("1"),"SIZE");this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip("")},
onchange:function(){this.workspace&&(Blockly.Blocks.i2c_matrix.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.I2C_MATRIX_WARNING))}};
Blockly.Blocks.i2c_matrix_settextwrap={init:function(){var a=[[Blockly.Msg.LOGIC_BOOLEAN_TRUE,"TRUE"],[Blockly.Msg.LOGIC_BOOLEAN_FALSE,"FALSE"]];this.setHelpUrl(Blockly.Msg.I2C_MATRIX_HELPURL);this.setColour(Blockly.Blocks.i2c_matrix.HUE);this.appendDummyInput().appendField(Blockly.Msg.I2C_MATRIX_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image,64,64)).appendField(Blockly.Msg.I2C_MATRIX_SETTEXTWRAP);this.appendDummyInput().appendField(new Blockly.FieldDropdown(a),"BOOL");
this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip("")},onchange:function(){this.workspace&&(Blockly.Blocks.i2c_matrix.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.I2C_MATRIX_WARNING))}};
Blockly.Blocks.i2c_matrix_settextcolor={init:function(){this.setHelpUrl(Blockly.Msg.I2C_MATRIX_HELPURL);this.setColour(Blockly.Blocks.i2c_matrix.HUE);this.appendDummyInput().appendField(Blockly.Msg.I2C_MATRIX_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image,64,64)).appendField(Blockly.Msg.I2C_MATRIX_SETTEXTCOLOR);this.appendDummyInput().appendField(Blockly.Msg.COLOR).appendField(new Blockly.FieldDropdown([[Blockly.Msg.I2C_MATRIX_LED_ON,"LED_ON"],[Blockly.Msg.I2C_MATRIX_LED_OFF,
"LED_OFF"],[Blockly.Msg.GREEN,"LED_GREEN"],[Blockly.Msg.YELLOW,"LED_YELLOW"],[Blockly.Msg.RED,"LED_RED"]]),"COLOR");this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip("")},onchange:function(){this.workspace&&(Blockly.Blocks.i2c_matrix.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.I2C_MATRIX_WARNING))}};
Blockly.Blocks.i2c_matrix_drawpixel={init:function(){this.setHelpUrl(Blockly.Msg.I2C_MATRIX_HELPURL);this.setColour(Blockly.Blocks.i2c_matrix.HUE);this.appendDummyInput().appendField(Blockly.Msg.I2C_MATRIX_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image,64,64)).appendField(Blockly.Msg.I2C_MATRIX_DRAWPIXEL);this.appendValueInput("X").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.I2C_MATRIX_X);this.appendValueInput("Y").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.I2C_MATRIX_Y);
this.appendDummyInput().appendField(Blockly.Msg.COLOR).appendField(new Blockly.FieldDropdown([[Blockly.Msg.I2C_MATRIX_LED_ON,"LED_ON"],[Blockly.Msg.I2C_MATRIX_LED_OFF,"LED_OFF"],[Blockly.Msg.GREEN,"LED_GREEN"],[Blockly.Msg.YELLOW,"LED_YELLOW"],[Blockly.Msg.RED,"LED_RED"]]),"COLOR");this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip("")},onchange:function(){this.workspace&&(Blockly.Blocks.i2c_matrix.checkBlocks(this)?this.setWarningText(null):
this.setWarningText(Blockly.Msg.I2C_MATRIX_WARNING))}};
Blockly.Blocks.i2c_matrix_drawcircle={init:function(){this.setHelpUrl(Blockly.Msg.I2C_MATRIX_HELPURL);this.setColour(Blockly.Blocks.i2c_matrix.HUE);this.appendDummyInput().appendField(Blockly.Msg.I2C_MATRIX_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image,64,64)).appendField(Blockly.Msg.I2C_MATRIX_DRAWCIRCLE);this.appendValueInput("X").setCheck("Number").appendField(Blockly.Msg.I2C_MATRIX_X);this.appendValueInput("Y").setCheck("Number").appendField(Blockly.Msg.I2C_MATRIX_Y);this.appendValueInput("D").setCheck("Number").appendField(Blockly.Msg.I2C_MATRIX_DIAMETER);
this.appendDummyInput().appendField(Blockly.Msg.COLOR).appendField(new Blockly.FieldDropdown([[Blockly.Msg.I2C_MATRIX_LED_ON,"LED_ON"],[Blockly.Msg.I2C_MATRIX_LED_OFF,"LED_OFF"],[Blockly.Msg.GREEN,"LED_GREEN"],[Blockly.Msg.YELLOW,"LED_YELLOW"],[Blockly.Msg.RED,"LED_RED"]]),"COLOR");this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip("")},onchange:function(){this.workspace&&(Blockly.Blocks.i2c_matrix.checkBlocks(this)?this.setWarningText(null):
this.setWarningText(Blockly.Msg.I2C_MATRIX_WARNING))}};
Blockly.Blocks.i2c_matrix_drawrect={init:function(){this.setHelpUrl(Blockly.Msg.I2C_MATRIX_HELPURL);this.setColour(Blockly.Blocks.i2c_matrix.HUE);this.appendDummyInput().appendField(Blockly.Msg.I2C_MATRIX_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image,64,64)).appendField(Blockly.Msg.I2C_MATRIX_DRAWRECT);this.appendValueInput("X0").setCheck("Number").appendField(Blockly.Msg.I2C_MATRIX_X0);this.appendValueInput("Y0").setCheck("Number").appendField(Blockly.Msg.I2C_MATRIX_Y0);this.appendValueInput("X1").setCheck("Number").appendField(Blockly.Msg.I2C_MATRIX_X1);
this.appendValueInput("Y1").setCheck("Number").appendField(Blockly.Msg.I2C_MATRIX_Y1);this.appendDummyInput().appendField(Blockly.Msg.COLOR).appendField(new Blockly.FieldDropdown([[Blockly.Msg.I2C_MATRIX_LED_ON,"LED_ON"],[Blockly.Msg.I2C_MATRIX_LED_OFF,"LED_OFF"],[Blockly.Msg.GREEN,"LED_GREEN"],[Blockly.Msg.YELLOW,"LED_YELLOW"],[Blockly.Msg.RED,"LED_RED"]]),"COLOR");this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip("")},onchange:function(){this.workspace&&
(Blockly.Blocks.i2c_matrix.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.I2C_MATRIX_WARNING))}};
Blockly.Blocks.i2c_matrix_drawline={init:function(){this.setHelpUrl(Blockly.Msg.I2C_MATRIX_HELPURL);this.setColour(Blockly.Blocks.i2c_matrix.HUE);this.appendDummyInput().appendField(Blockly.Msg.I2C_MATRIX_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image,64,64)).appendField(Blockly.Msg.I2C_MATRIX_DRAWLINE);this.appendValueInput("X0").setCheck("Number").appendField(Blockly.Msg.I2C_MATRIX_X0);this.appendValueInput("Y0").setCheck("Number").appendField(Blockly.Msg.I2C_MATRIX_Y0);
this.appendValueInput("X1").setCheck("Number").appendField(Blockly.Msg.I2C_MATRIX_X1);this.appendValueInput("Y1").setCheck("Number").appendField(Blockly.Msg.I2C_MATRIX_Y1);this.appendDummyInput().appendField(Blockly.Msg.COLOR).appendField(new Blockly.FieldDropdown([[Blockly.Msg.I2C_MATRIX_LED_ON,"LED_ON"],[Blockly.Msg.I2C_MATRIX_LED_OFF,"LED_OFF"],[Blockly.Msg.GREEN,"LED_GREEN"],[Blockly.Msg.YELLOW,"LED_YELLOW"],[Blockly.Msg.RED,"LED_RED"]]),"COLOR");this.setInputsInline(!0);this.setPreviousStatement(!0,
null);this.setNextStatement(!0,null);this.setTooltip("")},onchange:function(){this.workspace&&(Blockly.Blocks.i2c_matrix.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.I2C_MATRIX_WARNING))}};
Blockly.Blocks.i2c_matrix_fillrect={init:function(){this.setHelpUrl(Blockly.Msg.I2C_MATRIX_HELPURL);this.setColour(Blockly.Blocks.i2c_matrix.HUE);this.appendDummyInput().appendField(Blockly.Msg.I2C_MATRIX_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image,64,64)).appendField(Blockly.Msg.I2C_MATRIX_FILLRECT);this.appendValueInput("X0").setCheck("Number").appendField(Blockly.Msg.I2C_MATRIX_X0);this.appendValueInput("Y0").setCheck("Number").appendField(Blockly.Msg.I2C_MATRIX_Y0);
this.appendValueInput("X1").setCheck("Number").appendField(Blockly.Msg.I2C_MATRIX_X1);this.appendValueInput("Y1").setCheck("Number").appendField(Blockly.Msg.I2C_MATRIX_Y1);this.appendDummyInput().appendField(Blockly.Msg.COLOR).appendField(new Blockly.FieldDropdown([[Blockly.Msg.I2C_MATRIX_LED_ON,"LED_ON"],[Blockly.Msg.I2C_MATRIX_LED_OFF,"LED_OFF"],[Blockly.Msg.GREEN,"LED_GREEN"],[Blockly.Msg.YELLOW,"LED_YELLOW"],[Blockly.Msg.RED,"LED_RED"]]),"COLOR");this.setInputsInline(!0);this.setPreviousStatement(!0,
null);this.setNextStatement(!0,null);this.setTooltip("")},onchange:function(){this.workspace&&(Blockly.Blocks.i2c_matrix.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.I2C_MATRIX_WARNING))}};
Blockly.Blocks.i2c_matrix_setrotation={init:function(){this.setHelpUrl(Blockly.Msg.I2C_MATRIX_HELPURL);this.setColour(Blockly.Blocks.i2c_matrix.HUE);this.appendDummyInput().appendField(Blockly.Msg.I2C_MATRIX_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image,64,64)).appendField(Blockly.Msg.I2C_MATRIX_SETROTATION).appendField(new Blockly.FieldTextInput("1"),"ANGLE");this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip("")},
onchange:function(){this.workspace&&(Blockly.Blocks.i2c_matrix.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.I2C_MATRIX_WARNING))}};
Blockly.Blocks.i2c_matrix_writedisplay={init:function(){this.setHelpUrl(Blockly.Msg.I2C_MATRIX_HELPURL);this.setColour(Blockly.Blocks.i2c_matrix.HUE);this.appendDummyInput().appendField(Blockly.Msg.I2C_MATRIX_TITLE).appendField(new Blockly.FieldImage(Blockly.Blocks.mini_matrix_image,64,64)).appendField(Blockly.Msg.I2C_MATRIX_WRITEDISPLAY);this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip("")},onchange:function(){this.workspace&&(Blockly.Blocks.i2c_matrix.checkBlocks(this)?
this.setWarningText(null):this.setWarningText(Blockly.Msg.I2C_MATRIX_WARNING))}};Blockly.Blocks.cast={};
Blockly.Blocks.cast_number={
  init:function(){
    this.setHelpUrl(Blockly.Msg.CAST_NUMBER_HELPURL);
    this.setColour(Blockly.Msg["CAST_HUE"]);
    this.appendValueInput("VAR")
        .setCheck(null)
        .appendField(Blockly.Msg.VARIALBLE);	
    this.appendDummyInput()
        .appendField(Blockly.Msg.CAST_NUMBER_TITLE)
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.VARIABLES_TYPE_STRING,"String(%1)"],
			[Blockly.Msg.VARIABLES_TO_STRING_BIN,"String(%1, BIN)"],
			[Blockly.Msg.VARIABLES_TO_STRING_OCT,"String(%1, OCT)"],
			[Blockly.Msg.VARIABLES_TO_STRING_DEC,"String(%1, DEC)"],
			[Blockly.Msg.VARIABLES_TO_STRING_HEX,"String(%1, HEX)"],
            [Blockly.Msg.VARIABLES_TYPE_INT,"(int)"],
            [Blockly.Msg.VARIABLES_TYPE_UNSIGNEDINT,"(unsigned int)"],
            [Blockly.Msg.VARIABLES_TYPE_BYTE,"(byte)"],
            [Blockly.Msg.VARIABLES_TYPE_UNSIGNEDWORD,"(word)"],
            [Blockly.Msg.VARIABLES_TYPE_LONG,"(long)"],
            [Blockly.Msg.VARIABLES_TYPE_UNSIGNEDLONG,"(unsigned long)"],
            [Blockly.Msg.VARIABLES_TYPE_FLOAT,"(float)"],
            [Blockly.Msg.VARIABLES_TYPE_DOUBLE,"(double)"],
            [Blockly.Msg.VARIABLES_TYPE_CHAR,"(char)"]	
        ]),"TYPE");
    this.setInputsInline(!0);
    this.setOutput(!0);
    this.setTooltip(Blockly.Msg.CAST_NUMBER_TOOLTIP)
  }
};
Blockly.Blocks.cast_type={
  init:function(){
    this.appendValueInput("VAR")
        .setCheck(null)
		.appendField(Blockly.Msg.STRING);	  
    this.appendDummyInput()
        .appendField(Blockly.Msg.CAST_NUMBER_TITLE)
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.VARIABLES_CHANGETYPE_TOINT,"toInt()"],
			[Blockly.Msg.VARIABLES_CHANGETYPE_TODOUBLE,"toDouble()"],
			[Blockly.Msg.VARIABLES_CHANGETYPE_TOFLOAT,"toFloat()"],
			[Blockly.Msg.VARIABLES_CHANGETYPE_TOLOWERCASE,"toLowerCase()"],
			[Blockly.Msg.VARIABLES_CHANGETYPE_TOUPPERCASE,"toUpperCase()"],
			[Blockly.Msg.VARIABLES_CHANGETYPE_TRIM,"trim()"],
			[Blockly.Msg.VARIABLES_CHANGETYPE_CSTR,"c_str()"],
			[Blockly.Msg.VARIABLES_CHANGETYPE_LENGTH,"length()"]
        ]),"TYPE");
    this.setHelpUrl(Blockly.Msg.CAST_NUMBER_HELPURL);
    this.setColour(Blockly.Msg["CAST_HUE"]-50);		
    this.setInputsInline(!0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.CAST_NUMBER_TOOLTIP)
  }
};
Blockly.Blocks.cast_type1={
  init:function(){
    this.appendValueInput("VAR")
        .setCheck(null)
		.appendField(Blockly.Msg.STRING);	  
    this.appendDummyInput()
        .appendField(Blockly.Msg.CAST_NUMBER_TITLE)
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.VARIABLES_CHANGETYPE_TOINT,"toInt()"],
			[Blockly.Msg.VARIABLES_CHANGETYPE_TODOUBLE,"toDouble()"],
			[Blockly.Msg.VARIABLES_CHANGETYPE_TOFLOAT,"toFloat()"],
			[Blockly.Msg.VARIABLES_CHANGETYPE_TOLOWERCASE,"toLowerCase()"],
			[Blockly.Msg.VARIABLES_CHANGETYPE_TOUPPERCASE,"toUpperCase()"],
			[Blockly.Msg.VARIABLES_CHANGETYPE_TRIM,"trim()"],
			[Blockly.Msg.VARIABLES_CHANGETYPE_CSTR,"c_str()"],
			[Blockly.Msg.VARIABLES_CHANGETYPE_LENGTH,"length()"]		
        ]),"TYPE");
    this.setHelpUrl(Blockly.Msg.CAST_NUMBER_HELPURL);
    this.setColour(Blockly.Msg["CAST_HUE"]-50);		
    this.setInputsInline(!0);
    this.setOutput(!0);	
    this.setTooltip(Blockly.Msg.CAST_NUMBER_TOOLTIP)
  }
};

Blockly.Blocks.shield_bot={};Blockly.Blocks.shield_bot.HUE=190;Blockly.Blocks.shield_bot.image=filepath.media+"/shield_bot.jpg";
Blockly.Blocks.shield_bot.checkBlocks=function(a){var b=!1,d=a.type;a=a.workspace.getAllBlocks();for(var c=0;c<a.length;c++)if("shield_bot_setmaxspeed"==a[c].type||"shield_bot_setmaxspeed_lr"==a[c].type||"shield_bot_right_motor"==a[c].type||"shield_bot_motor"==a[c].type||"shield_bot_drive"==a[c].type||"shield_bot_faststop"==a[c].type||"shield_bot_faststop_left"==a[c].type||"shield_bot_faststop_right"==a[c].type||"shield_bot_move"==a[c].type||"shield_bot_readsensor"==a[c].type){a[c].type!=d&&(b=!0);
break}return b};
Blockly.Blocks.shield_bot_setmaxspeed={init:function(){this.setHelpUrl(Blockly.Msg.SHIELD_BOT_HELPURL);this.setColour(Blockly.Blocks.shield_bot.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.shield_bot.image,64,64)).appendField(Blockly.Msg.SHIELD_BOT_SETMAXSPEED_TITLE).appendField(new Blockly.FieldTextInput("255"),"SPEED");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.SHIELD_BOT_SETMAXSPEED_TOOLTIP)},onchange:function(){this.workspace&&(Blockly.Blocks.shield_bot.checkBlocks(this)?
this.setWarningText(null):this.setWarningText(Blockly.Msg.SHEILD_BOT_WARNING))}};
Blockly.Blocks.shield_bot_setmaxspeed_lr={init:function(){this.setHelpUrl(Blockly.Msg.SHIELD_BOT_HELPURL);this.setColour(Blockly.Blocks.shield_bot.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.shield_bot.image,64,64)).appendField(Blockly.Msg.SHIELD_BOT_SETMAXSPEED_TITLE).appendField(Blockly.Msg.SHIELD_BOT_LEFT_SPEED).appendField(new Blockly.FieldTextInput("255"),"LEFT").appendField(Blockly.Msg.SHIELD_BOT_RIGHT_SPEED).appendField(new Blockly.FieldTextInput("255"),"RIGHT");
this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.SHIELD_BOT_SETMAXSPEED_LR_TOOLTIP)},onchange:function(){this.workspace&&(Blockly.Blocks.shield_bot.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.SHEILD_BOT_WARNING))}};
Blockly.Blocks.shield_bot_right_motor={init:function(){this.setHelpUrl(Blockly.Msg.SHIELD_BOT_HELPURL);this.setColour(Blockly.Blocks.shield_bot.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.shield_bot.image,64,64)).appendField(Blockly.Msg.SHIELD_BOT_RIGHT_MOTOR_TITLE);this.appendValueInput("DIRECTION").setCheck("Number").appendField(Blockly.Msg.DIRECTION);this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.SHIELD_BOT_RIGHT_MOTOR_TOOLTIP)},
onchange:function(){this.workspace&&(Blockly.Blocks.shield_bot.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.SHEILD_BOT_WARNING))}};
Blockly.Blocks.shield_bot_motor={init:function(){this.setHelpUrl(Blockly.Msg.SHIELD_BOT_HELPURL);this.setColour(Blockly.Blocks.shield_bot.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.shield_bot.image,64,64)).appendField(Blockly.Msg.SHIELD_BOT_CONTROL).appendField(new Blockly.FieldDropdown([[Blockly.Msg.RIGHT,"rightMotor"],[Blockly.Msg.LEFT,"leftMotor"]]),"RL");this.appendValueInput("DIRECTION").appendField(Blockly.Msg.SHIELD_BOT_MOTOR).setCheck("Number").appendField(Blockly.Msg.DIRECTION);
this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.SHIELD_BOT_LEFT_MOTOR_TOOLTIP)},onchange:function(){this.workspace&&(Blockly.Blocks.shield_bot.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.SHEILD_BOT_WARNING))}};
Blockly.Blocks.shield_bot_drive={init:function(){this.setHelpUrl(Blockly.Msg.SHIELD_BOT_HELPURL);this.setColour(Blockly.Blocks.shield_bot.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.shield_bot.image,64,64)).appendField(Blockly.Msg.SHIELD_BOT_DRIVE_TITLE);this.appendValueInput("LEFT").setCheck("Number").appendField(Blockly.Msg.LEFT);this.appendValueInput("RIGHT").setCheck("Number").appendField(Blockly.Msg.RIGHT);this.setInputsInline(!0);this.setPreviousStatement(!0,
null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.SHIELD_BOT_DRIVE_TOOLTIP)},onchange:function(){this.workspace&&(Blockly.Blocks.shield_bot.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.SHEILD_BOT_WARNING))}};
Blockly.Blocks.shield_bot_faststop={init:function(){this.setHelpUrl(Blockly.Msg.SHIELD_BOT_HELPURL);this.setColour(Blockly.Blocks.shield_bot.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.shield_bot.image,64,64)).appendField(Blockly.Msg.SHIELD_BOT_faststop_TITLE);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.SHIELD_BOT_FASTSTOP_TOOLTIP)},onchange:function(){this.workspace&&(Blockly.Blocks.shield_bot.checkBlocks(this)?
this.setWarningText(null):this.setWarningText(Blockly.Msg.SHEILD_BOT_WARNING))}};
Blockly.Blocks.shield_bot_faststop_left={init:function(){this.setHelpUrl(Blockly.Msg.SHIELD_BOT_HELPURL);this.setColour(Blockly.Blocks.shield_bot.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.shield_bot.image,64,64)).appendField(Blockly.Msg.SHIELD_BOT_FASTSTOP_LEFT_TITLE);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.SHIELD_BOT_FASTSTOP_LEFT_TOOLTIP)},onchange:function(){this.workspace&&(Blockly.Blocks.shield_bot.checkBlocks(this)?
this.setWarningText(null):this.setWarningText(Blockly.Msg.SHEILD_BOT_WARNING))}};
Blockly.Blocks.shield_bot_faststop_right={init:function(){this.setHelpUrl(Blockly.Msg.SHIELD_BOT_HELPURL);this.setColour(Blockly.Blocks.shield_bot.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.shield_bot.image,64,64)).appendField(Blockly.Msg.SHIELD_BOT_FASTSTOP_RIGHT_TITLE);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.SHIELD_BOT_FASTSTOP_RIGHT_TOOLTIP)},onchange:function(){this.workspace&&(Blockly.Blocks.shield_bot.checkBlocks(this)?
this.setWarningText(null):this.setWarningText(Blockly.Msg.SHEILD_BOT_WARNING))}};
Blockly.Blocks.shield_bot_move={init:function(){this.setHelpUrl(Blockly.Msg.SHIELD_BOT_HELPURL);this.setColour(Blockly.Blocks.shield_bot.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.shield_bot.image,64,64)).appendField(Blockly.Msg.SHIELD_BOT_MOVE_TITLE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.SHIELD_BOT_FORWARD,"forward"],[Blockly.Msg.SHIELD_BOT_BACKWARD,"backward"],[Blockly.Msg.SHIELD_BOT_STOP,"stop"],[Blockly.Msg.SHIELD_BOT_STOPLEFT,"stopLeft"],[Blockly.Msg.SHIELD_BOT_STOPRIGHT,
"stopRight"]]),"MOVE");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.SHIELD_BOT_MOVE_TOOLTIP)},onchange:function(){this.workspace&&(Blockly.Blocks.shield_bot.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.SHEILD_BOT_WARNING))}};
Blockly.Blocks.shield_bot_readsensor={init:function(){this.setHelpUrl(Blockly.Msg.SHIELD_BOT_HELPURL);this.setColour(Blockly.Blocks.shield_bot.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.shield_bot.image,64,64)).appendField(Blockly.Msg.SHIELD_BOT_READ_SENSOR_TITLE).appendField(Blockly.Msg.INDEX).appendField(new Blockly.FieldDropdown(profile["default"].shield_bot_sensor),"SENSOR");this.setOutput(!0);this.setTooltip(Blockly.Msg.SHIELD_BOT_READ_SENSOR_TOOLTIP)},onchange:function(){this.workspace&&
(Blockly.Blocks.shield_bot.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.SHEILD_BOT_WARNING))}};Blockly.Blocks.ultrasonic={};Blockly.Blocks.ultrasonic.HUE=70;
Blockly.Blocks.ultrasonic_read={init:function(){this.setHelpUrl(Blockly.Msg.ULTRASONIC_SETTING_HELPURL);this.setColour(Blockly.Blocks.ultrasonic.HUE);this.appendDummyInput().appendField(Blockly.Msg.ULTRASONIC_SETTING_TITLE).appendField(new Blockly.FieldDropdown([["HC-SR04P","DUMMY"]]),"SENSOR");this.appendDummyInput().appendField(Blockly.Msg.ULTRASONIC_SETTING_TRIG).appendField(new Blockly.FieldDropdown(profile["default"].digital),"TRIG");this.appendDummyInput().appendField(Blockly.Msg.ULTRASONIC_SETTING_ECHO).appendField(new Blockly.FieldDropdown(profile["default"].digital),
"ECHO");this.appendDummyInput().appendField(Blockly.Msg.MESUREMENT_TYPE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.GROVE_ULTRASONIC_RANGER_UNIT_CM,"CM"],[Blockly.Msg.GROVE_ULTRASONIC_RANGER_UNIT_INCH,"INCH"]]),"MEASUREMENT");this.setInputsInline(!0);this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.ULTRASONIC_SETTING_TOOLTIP)},onchange:function(){}};Blockly.Blocks.lcd={};Blockly.Blocks.lcd.HUE=215;Blockly.Blocks.lcd.image=filepath.media+"/lcd.jpg";
Blockly.Blocks.lcd_init={init:function(){this.setHelpUrl(Blockly.Msg.LCD_INIT_HELPURL);this.setColour(Blockly.Blocks.lcd.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.lcd.image,64,64)).appendField(Blockly.Msg.LCD_INIT_TITLE).appendField(Blockly.Msg.LCD_INIT_RS).appendField(new Blockly.FieldDropdown(profile.arduino.digital),"RS");this.appendDummyInput().appendField(Blockly.Msg.LCD_INIT_RW).appendField(new Blockly.FieldDropdown(profile.arduino.lcd),"RW");this.appendDummyInput().appendField(Blockly.Msg.LCD_INIT_ENABLE).appendField(new Blockly.FieldDropdown(profile.arduino.digital),
"ENABLE");this.appendDummyInput().appendField(Blockly.Msg.LCD_INIT_D4).appendField(new Blockly.FieldDropdown(profile.arduino.digital),"D4");this.appendDummyInput().appendField(Blockly.Msg.LCD_INIT_D5).appendField(new Blockly.FieldDropdown(profile.arduino.digital),"D5");this.appendDummyInput().appendField(Blockly.Msg.LCD_INIT_D6).appendField(new Blockly.FieldDropdown(profile.arduino.digital),"D6");this.appendDummyInput().appendField(Blockly.Msg.LCD_INIT_D7).appendField(new Blockly.FieldDropdown(profile.arduino.digital),
"D7");this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LCD_INIT_TOOLTIP)}};
Blockly.Blocks.lcd_begin={init:function(){this.setHelpUrl(Blockly.Msg.LCD_BEGIN_HELPURL);this.setColour(Blockly.Blocks.lcd.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.lcd.image,64,64)).appendField(Blockly.Msg.LCD_BEGIN_TITLE).appendField(Blockly.Msg.COL).appendField(new Blockly.FieldTextInput("16"),"COLS");this.appendDummyInput().appendField(Blockly.Msg.ROW).appendField(new Blockly.FieldTextInput("2"),"ROWS");this.setInputsInline(!0);this.setPreviousStatement(!0);
this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LCD_BEGIN_TOOLTIP)}};Blockly.Blocks.lcd_print={init:function(){this.setHelpUrl(Blockly.Msg.LCD_PRINT_HELPURL);this.setColour(Blockly.Blocks.lcd.HUE);this.appendValueInput("PRINT").appendField(new Blockly.FieldImage(Blockly.Blocks.lcd.image,64,64)).appendField(Blockly.Msg.LCD_PRINT_TITLE);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LCD_PRINT_TOOLTIP)}};
Blockly.Blocks.lcd_setcursor={init:function(){this.setHelpUrl(Blockly.Msg.LCD_SETCURSOR_HELPURL);this.setColour(Blockly.Blocks.lcd.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.lcd.image,64,64)).appendField(Blockly.Msg.LCD_SETCURSOR_TITLE).appendField(Blockly.Msg.COL).appendField(new Blockly.FieldTextInput("0"),"COL");this.appendDummyInput().appendField(Blockly.Msg.ROW).appendField(new Blockly.FieldTextInput("0"),"ROW");this.setInputsInline(!0);this.setPreviousStatement(!0);
this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LCD_SETCURSOR_TOOLTIP)}};
Blockly.Blocks.lcd_custom_setcursor={init:function(){this.setHelpUrl(Blockly.Msg.LCD_SETCURSOR_HELPURL);this.setColour(Blockly.Blocks.lcd.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.lcd.image,64,64)).appendField(Blockly.Msg.LCD_SETCURSOR_TITLE);this.appendValueInput("COL").setCheck("Number").appendField(Blockly.Msg.COL);this.appendValueInput("ROW").setCheck("Number").appendField(Blockly.Msg.ROW);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);
this.setTooltip(Blockly.Msg.LCD_SETCURSOR_TOOLTIP)}};Blockly.Blocks.lcd_clear={init:function(){this.setHelpUrl(Blockly.Msg.LCD_CLEAR_HELPURL);this.setColour(Blockly.Blocks.lcd.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.lcd.image,64,64)).appendField(Blockly.Msg.LCD_CLEAR_TITLE);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LCD_CLEAR_TOOLTIP)}};
Blockly.Blocks.lcd_scrolldisplayleft={init:function(){this.setHelpUrl(Blockly.Msg.LCD_SCROLL_DISPLAY_LEFT_HELPURL);this.setColour(Blockly.Blocks.lcd.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.lcd.image,64,64)).appendField(Blockly.Msg.LCD_SCROLL_DISPLAY_LEFT_TITLE);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LCD_SCROLL_DISPLAY_LEFT_TOOLTIP)}};
Blockly.Blocks.lcd_scrolldisplayright={init:function(){this.setHelpUrl(Blockly.Msg.LCD_SCROLL_DISPLAY_RIGHT_HELPURL);this.setColour(Blockly.Blocks.lcd.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.lcd.image,64,64)).appendField(Blockly.Msg.LCD_SCROLL_DISPLAY_RIGHT_TITLE);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LCD_SCROLL_DISPLAY_RIGHT_TOOLTIP)}};
Blockly.Blocks.lcd_switch_scroll={init:function(){this.setHelpUrl(Blockly.Msg.LCD_AUTOSCROLL_HELPURL);this.setColour(Blockly.Blocks.lcd.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.lcd.image,64,64)).appendField(Blockly.Msg.LCD_AUTOSCROLL_TITLE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.ON,"1"],[Blockly.Msg.OFF,"0"]]),"SW");this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LCD_AUTOSCROLL_TOOLTIP)}};
Blockly.Blocks.lcd_autoscroll={init:function(){this.setHelpUrl(Blockly.Msg.LCD_AUTOSCROLL_HELPURL);this.setColour(Blockly.Blocks.lcd.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.lcd.image,64,64)).appendField(Blockly.Msg.LCD_AUTOSCROLL_TITLE);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LCD_AUTOSCROLL_TOOLTIP)}};
Blockly.Blocks.lcd_noautoscroll={init:function(){this.setHelpUrl(Blockly.Msg.LCD_NOAUTOSCROLL_HELPURL);this.setColour(Blockly.Blocks.lcd.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.lcd.image,64,64)).appendField(Blockly.Msg.LCD_NOAUTOSCROLL_TITLE);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LCD_NOAUTOSCROLL_TOOLTIP)}};
Blockly.Blocks.lcd_lefttoright={init:function(){this.setHelpUrl(Blockly.Msg.LCD_LEFTTORIGHT_HELPURL);this.setColour(Blockly.Blocks.lcd.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.lcd.image,64,64)).appendField(Blockly.Msg.LCD_LEFTTORIGHT_TITLE);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LCD_LEFTTORIGHT_TOOLTIP)}};
Blockly.Blocks.lcd_righttoleft={init:function(){this.setHelpUrl(Blockly.Msg.LCD_RIGHTTOLEFT_HELPURL);this.setColour(Blockly.Blocks.lcd.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.lcd.image,64,64)).appendField(Blockly.Msg.LCD_RIGHTTOLEFT_TITLE);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LCD_RIGHTTOLEFT_TOOLTIP)}};Blockly.Blocks.servo={};Blockly.Blocks.servo.HUE=215;Blockly.Blocks.servo.image=filepath.media+"/servo.jpg";
Blockly.Blocks.servo_attach={init:function(){this.setHelpUrl(Blockly.Msg.SERVO_ATTACH_HELPURL);this.setColour(Blockly.Blocks.servo.HUE);this.appendDummyInput().appendField(Blockly.Msg.SERVO_ATTACH_TEXT1).appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN").appendField(Blockly.Msg.SERVO_ATTACH_TEXT2);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.SERVO_ATTACH_TOOLTIP)}};
Blockly.Blocks.servo_custom_attach={init:function(){this.setHelpUrl(Blockly.Msg.SERVO_ATTACH_HELPURL);this.setColour(Blockly.Blocks.servo.HUE);this.appendDummyInput().appendField(Blockly.Msg.SERVO_ATTACH_TEXT1).appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN").appendField(Blockly.Msg.SERVO_ATTACH_TEXT2);this.appendDummyInput().appendField(Blockly.Msg.SERVO_ATTACH_MIN_TEXT1).appendField(new Blockly.FieldTextInput("544"),"MIN").appendField(Blockly.Msg.SERVO_ATTACH_MIN_TEXT2);
this.appendDummyInput().appendField(Blockly.Msg.SERVO_ATTACH_MAX_TEXT1).appendField(new Blockly.FieldTextInput("2400"),"MAX").appendField(Blockly.Msg.SERVO_ATTACH_MAX_TEXT2);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.SERVO_ATTACH_TOOLTIP)}};
Blockly.Blocks.servo_write={init:function(){this.setHelpUrl(Blockly.Msg.SERVO_WRITE_HELPURL);this.setColour(Blockly.Blocks.servo.HUE);this.appendDummyInput().appendField(Blockly.Msg.SERVO_WRITE_TEXT1).appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN").appendField(Blockly.Msg.SERVO_WRITE_TEXT2);this.appendValueInput("ANGLE").setCheck("Number").appendField(Blockly.Msg.SERVO_ANGLE_TEXT1);this.appendDummyInput().appendField(Blockly.Msg.SERVO_ANGLE_TEXT2);this.setInputsInline(!0);
this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.SERVO_WRITE_TOOLTIP)}};
Blockly.Blocks.servo_writeus={init:function(){this.setHelpUrl(Blockly.Msg.SERVO_WRITE_US_HELPURL);this.setColour(Blockly.Blocks.servo.HUE);this.appendDummyInput().appendField(Blockly.Msg.SERVO_WRITE_TEXT1).appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN").appendField(Blockly.Msg.SERVO_WRITE_TEXT2);this.appendValueInput("ANGLE_US").setCheck("Number").appendField(Blockly.Msg.SERVO_ANGLE_US_TEXT1);this.appendDummyInput().appendField(Blockly.Msg.SERVO_ANGLE_US_TEXT2);this.setInputsInline(!0);
this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.SERVO_WRITE_US_TOOLTIP)}};Blockly.Blocks.servo_read={init:function(){this.setHelpUrl(Blockly.Msg.SERVO_READ_HELPURL);this.setColour(Blockly.Blocks.servo.HUE);this.appendDummyInput().appendField(Blockly.Msg.SERVO_READ_TEXT1).appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN").appendField(Blockly.Msg.SERVO_READ_TEXT2);this.setInputsInline(!0);this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.SERVO_READ_TOOLTIP)}};
Blockly.Blocks.servo_attached={init:function(){this.setHelpUrl(Blockly.Msg.SERVO_ATTACHED_HELPURL);this.setColour(Blockly.Blocks.servo.HUE);this.appendDummyInput().appendField(Blockly.Msg.SERVO_ATTACHED_TEXT1).appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN").appendField(Blockly.Msg.SERVO_ATTACHED_TEXT2);this.setInputsInline(!0);this.setOutput(!0,"Boolean");this.setTooltip(Blockly.Msg.SERVO_ATTACHED_TOOLTIP)}};
Blockly.Blocks.servo_detach={init:function(){this.setHelpUrl(Blockly.Msg.SERVO_DETACH_HELPURL);this.setColour(Blockly.Blocks.servo.HUE);this.appendDummyInput().appendField(Blockly.Msg.SERVO_DETACH_TEXT1).appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN").appendField(Blockly.Msg.SERVO_DETACH_TEXT2);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.SERVO_DETACH_TOOLTIP)}};Blockly.Blocks.ir_remote={};Blockly.Blocks.ir_remote.HUE=225;Blockly.Blocks.ir_remote.image=filepath.media+"/ir_remote.png";
Blockly.Blocks.ir_remote_get={init:function(){this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.ir_remote.image,64,64)).appendField(Blockly.Msg.IR_REMOTE_GET).appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN");this.setOutput(!0,"Unsigned_Long");this.setColour(Blockly.Blocks.ir_remote.HUE);this.setTooltip(Blockly.Msg.IR_REMOTE_TOOLTIP_GET);this.setHelpUrl(Blockly.Msg.IR_REMOTE_BUTTON_HELPURL)}};
Blockly.Blocks.ir_remote_button={init:function(){var a=[[Blockly.Msg.IR_REMOTE_BUTTON_POWER,"POWER"],[Blockly.Msg.IR_REMOTE_BUTTON_A,"A"],[Blockly.Msg.IR_REMOTE_BUTTON_B,"B"],[Blockly.Msg.IR_REMOTE_BUTTON_C,"C"],[Blockly.Msg.IR_REMOTE_BUTTON_UP,"UP"],[Blockly.Msg.IR_REMOTE_BUTTON_DOWN,"DOWN"],[Blockly.Msg.IR_REMOTE_BUTTON_LEFT,"LEFT"],[Blockly.Msg.IR_REMOTE_BUTTON_RIGHT,"RIGHT"],[Blockly.Msg.IR_REMOTE_BUTTON_SELECT,"SELECT"]];this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.ir_remote.image,
64,64)).appendField(new Blockly.FieldDropdown(a),"BUTTON").appendField(Blockly.Msg.IR_REMOTE_BUTTON_BUTTON);this.setOutput(!0,"Unsigned_Long");this.setColour(Blockly.Blocks.ir_remote.HUE);this.setHelpUrl(Blockly.Msg.IR_REMOTE_BUTTON_HELPURL);var b=this;this.setTooltip(function(){var a=b.getFieldValue("BUTTON");return{POWER:Blockly.Msg.IR_REMOTE_TOOLTIP_BUTTON_POWER,A:Blockly.Msg.IR_REMOTE_TOOLTIP_BUTTON_A,B:Blockly.Msg.IR_REMOTE_TOOLTIP_BUTTON_B,C:Blockly.Msg.IR_REMOTE_TOOLTIP_BUTTON_C,UP:Blockly.Msg.IR_REMOTE_TOOLTIP_BUTTON_UP,
DOWN:Blockly.Msg.IR_REMOTE_TOOLTIP_BUTTON_DOWN,LEFT:Blockly.Msg.IR_REMOTE_TOOLTIP_BUTTON_LEFT,RIGHT:Blockly.Msg.IR_REMOTE_TOOLTIP_BUTTON_RIGHT,SELECT:Blockly.Msg.IR_REMOTE_TOOLTIP_BUTTON_SELECT}[a]})}};Blockly.Blocks.m2x={};Blockly.Blocks.m2x.HUE=65;Blockly.Blocks.m2x.image=filepath.media+"/m2x.png";
Blockly.Blocks.m2x_begin={init:function(){this.setHelpUrl(Blockly.Msg.M2X_HELPURL);this.setColour(Blockly.Blocks.m2x.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.m2x.image,64,64)).appendField(Blockly.Msg.M2X_BEGIN_TITLE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.ETHERNET_VERSION_1,""],[Blockly.Msg.ETHERNET_VERSION_2,"2"]]),"VERSION");this.appendValueInput("ID").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.DEVICE_ID);this.appendValueInput("STREAM_NAME").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.M2X_STREAM_NAME);
this.appendValueInput("KEY").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.M2X_KEY);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.M2X_BEGIN_TOOLTIP)}};
Blockly.Blocks.m2x_update_value={init:function(){this.setHelpUrl(Blockly.Msg.M2X_HELPURL);this.setColour(Blockly.Blocks.m2x.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.m2x.image,64,64)).appendField(Blockly.Msg.M2X_UPDATE_VALUE_TITLE);this.appendValueInput("VALUE").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.VALUE);this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.M2X_UPDATE_VALUE_TOOLTIP)}};
Blockly.Blocks.m2x_list_value={init:function(){this.setHelpUrl(Blockly.Msg.M2X_HELPURL);this.setColour(Blockly.Blocks.m2x.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.m2x.image,64,64)).appendField(Blockly.Msg.M2X_LIST_VALUE_TITLE);this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.M2X_LIST_VALUE_TOOLTIP)}};
Blockly.Blocks.m2x_custom_list_value={init:function(){this.setHelpUrl(Blockly.Msg.M2X_HELPURL);this.setColour(Blockly.Blocks.m2x.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.m2x.image,64,64)).appendField(Blockly.Msg.M2X_LIST_VALUE_TITLE);this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.M2X_DATE0_TITLE).appendField(new Blockly.FieldDate("2000-01-01"),"DATE0").appendField(new Blockly.FieldTextInput("00"),"HOUR0").appendField(":").appendField(new Blockly.FieldTextInput("00"),
"MIN0").appendField(":").appendField(new Blockly.FieldTextInput("00"),"SEC0");this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.M2X_DATE1_TITLE).appendField(new Blockly.FieldDate("2000-01-01"),"DATE1").appendField(new Blockly.FieldTextInput("01"),"HOUR1").appendField(":").appendField(new Blockly.FieldTextInput("00"),"MIN1").appendField(":").appendField(new Blockly.FieldTextInput("00"),"SEC1");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.M2X_CUSTOM_LIST_VALUE_TOOLTIP)}};
Blockly.Blocks.m2x_delete_values={init:function(){this.setHelpUrl(Blockly.Msg.M2X_HELPURL);this.setColour(Blockly.Blocks.m2x.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.m2x.image,64,64)).appendField(Blockly.Msg.M2X_DELETE_VALUES_TITLE);this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.M2X_DATE0_TITLE).appendField(new Blockly.FieldDate("2000-01-01"),"DATE0").appendField(new Blockly.FieldTextInput("00"),"HOUR0").appendField(":").appendField(new Blockly.FieldTextInput("00"),
"MIN0").appendField(":").appendField(new Blockly.FieldTextInput("00"),"SEC0");this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.M2X_DATE1_TITLE).appendField(new Blockly.FieldDate("2000-01-01"),"DATE1").appendField(new Blockly.FieldTextInput("01"),"HOUR1").appendField(":").appendField(new Blockly.FieldTextInput("00"),"MIN1").appendField(":").appendField(new Blockly.FieldTextInput("00"),"SEC1");this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.M2X_DELETE_VALUES_TOOLTIP)}};
Blockly.Blocks.m2x_update_location={init:function(){this.setHelpUrl(Blockly.Msg.M2X_HELPURL);this.setColour(Blockly.Blocks.m2x.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.m2x.image,64,64)).appendField(Blockly.Msg.M2X_UPDATE_LOCATION_TITLE);this.appendValueInput("LOCATION_NAME").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.M2X_LOCATION_NAME);this.appendValueInput("LATITUDE").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LATITUDE);
this.appendValueInput("LONGITUDE").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LONGITUDE);this.appendValueInput("ELEVATION").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ELEVATION);this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.M2X_UPDATE_VALUE_TOOLTIP)}};
Blockly.Blocks.m2x_read_location={init:function(){this.setHelpUrl(Blockly.Msg.M2X_HELPURL);this.setColour(Blockly.Blocks.m2x.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.m2x.image,64,64)).appendField(Blockly.Msg.M2X_READ_LOCATION_TITLE);this.setInputsInline(!0);this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.M2X_READ_LOCATION_TOOLTIP)}};Blockly.Blocks.rgbled={};Blockly.Blocks.rgbled.HUE=215;Blockly.Blocks.rgbled.image=filepath.media+"/rgbled.jpg";Blockly.Blocks.rgbled.checkBlocks=function(a){var b=null,d=a.type;a=a.workspace.getAllBlocks();for(var c=0;c<a.length;c++)if("rgbled_setpixelcolor"!=a[c].type&&"rgbled_custom_setpixelcolor"!=a[c].type&&"rgbled_show"!=a[c].type&&"rgbled_setpixelcolor2"!=a[c].type||null!=b||(b=a[c].type!=d?!0:!1),"rgbled_begin"==a[c].type)return!0;return b};
Blockly.Blocks.rgbled_begin={init:function(){this.setHelpUrl(Blockly.Msg.RGBLED_BEGIN_HELPURL);this.setColour(Blockly.Blocks.rgbled.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.rgbled.image,64,64)).appendField(Blockly.Msg.RGBLED_BEGIN_SETTING).appendField(Blockly.Msg.RGBLED_BEGIN_NUM).appendField(new Blockly.FieldTextInput("16"),"NUM");this.appendDummyInput().appendField(Blockly.Msg.RGBLED_BEGIN_PIN).appendField(new Blockly.FieldDropdown(profile["default"].digital),
"PIN");this.appendDummyInput().appendField(Blockly.Msg.RGBLED_BEGIN_BRIGHTNESS).appendField(new Blockly.FieldTextInput("50"),"BRIGHTNESS");this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.RGBLED_BEGIN_TOOLTIP)},onchange:function(){this.workspace&&this.setWarningText(Blockly.Msg.RGBLED_BEGIN_WARNING)}};
Blockly.Blocks.rgbled_setpixelcolor={init:function(){this.setHelpUrl(Blockly.Msg.RGBLED_SETPIXELCOLOR_HELPURL);this.setColour(Blockly.Blocks.rgbled.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.rgbled.image,64,64)).appendField(Blockly.Msg.RGBLED_SETPIXELCOLOR_TARGET).appendField(new Blockly.FieldTextInput("0"),"TARGET");this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOR).appendField(new Blockly.FieldColour("#00ff00"),"RGB");this.setInputsInline(!0);
this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.RGBLED_SETPIXELCOLOR_TOOLTIP)},onchange:function(){this.workspace&&(Blockly.Blocks.rgbled.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.RGBLED_WARNING))}};
Blockly.Blocks.rgbled_setpixelcolor2={init:function(){this.setHelpUrl(Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_HELPURL);this.setColour(Blockly.Blocks.rgbled.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.rgbled.image,64,64));this.appendValueInput("TARGET").setCheck("Number").appendField(Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_TARGET);this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOR).appendField(new Blockly.FieldColour("#00ff00"),"RGB");
this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_TOOLTIP)},onchange:function(){this.workspace&&(Blockly.Blocks.rgbled.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.RGBLED_WARNING))}};
Blockly.Blocks.rgbled_custom_setpixelcolor={init:function(){this.setHelpUrl(Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_HELPURL);this.setColour(Blockly.Blocks.rgbled.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.rgbled.image,64,64));this.appendValueInput("TARGET").setCheck("Number").appendField(Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_TARGET);this.appendValueInput("R").setCheck("Number").appendField(Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_R);this.appendValueInput("G").setCheck("Number").appendField(Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_G);
this.appendValueInput("B").setCheck("Number").appendField(Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_B);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_TOOLTIP)},onchange:function(){this.workspace&&(Blockly.Blocks.rgbled.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.RGBLED_WARNING))}};
Blockly.Blocks.rgbled_show={init:function(){this.setHelpUrl(Blockly.Msg.RGBLED_SHOW_HELPURL);this.setColour(Blockly.Blocks.rgbled.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.rgbled.image,64,64)).appendField(Blockly.Msg.RGBLED_SHOW);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.RGBLED_SHOW_TOOLTIP)},onchange:function(){this.workspace&&(Blockly.Blocks.rgbled.checkBlocks(this)?this.setWarningText(null):
this.setWarningText(Blockly.Msg.RGBLED_WARNING))}};Blockly.Blocks.otto={};Blockly.Blocks.otto.HUE=100;
Blockly.Blocks.otto_init={init:function(){this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);this.setColour(Blockly.Blocks.otto.HUE);this.appendDummyInput().appendField(Blockly.Msg.OTTO_INIT_TITLE).appendField(Blockly.Msg.OTTO_LEFT_LEG).appendField(new Blockly.FieldDropdown(profile["default"].digital),"YL").appendField(Blockly.Msg.OTTO_RIGHT_LEG).appendField(new Blockly.FieldDropdown(profile["default"].digital),"YR").appendField(Blockly.Msg.OTTO_LEFT_FOOT).appendField(new Blockly.FieldDropdown(profile["default"].digital),"RL").appendField(Blockly.Msg.OTTO_RIGHT_FOOT).appendField(new Blockly.FieldDropdown(profile["default"].digital),
"RR");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.OTTO_INIT_TOOLTIP)}};
Blockly.Blocks.otto_calibrate={init:function(){this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);this.setColour(Blockly.Blocks.otto.HUE);this.appendDummyInput().appendField(Blockly.Msg.OTTO_CALIBRATE_TITLE);this.appendValueInput("YL").setCheck("Number").appendField(Blockly.Msg.OTTO_LEFT_LEG);this.appendValueInput("YR").setCheck("Number").appendField(Blockly.Msg.OTTO_RIGHT_LEG);this.appendValueInput("RL").setCheck("Number").appendField(Blockly.Msg.OTTO_LEFT_FOOT);this.appendValueInput("RR").setCheck("Number").appendField(Blockly.Msg.OTTO_RIGHT_FOOT);
this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.OTTO_CALIBRATE_TOOLTIP)}};Blockly.Blocks.otto_home={init:function(){this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);this.setColour(Blockly.Blocks.otto.HUE);this.appendDummyInput().appendField(Blockly.Msg.OTTO_HOME_TITLE);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.OTTO_CALIBRATE_TOOLTIP)}};
Blockly.Blocks.otto_walk={init:function(){this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);this.setColour(Blockly.Blocks.otto.HUE);this.appendDummyInput().appendField(Blockly.Msg.OTTO_WALK_TITLE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.OTTO_DIRECTION_FORWARD,"FORWARD"],[Blockly.Msg.OTTO_DIRECTION_BACKWARD,"BACKWARD"]]),"DIRECTION");this.appendValueInput("DISTANCE").setCheck("Number");this.appendDummyInput().appendField(Blockly.Msg.OTTO_DISTANCE_UNIT);this.appendValueInput("DURATION").setCheck("Number");
this.appendDummyInput().appendField(Blockly.Msg.OTTO_DURATION_UNIT);this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.OTTO_WALK_TOOLTIP)}};
Blockly.Blocks.otto_turn={init:function(){this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);this.setColour(Blockly.Blocks.otto.HUE);this.appendDummyInput().appendField(Blockly.Msg.OTTO_TURN_TITLE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.OTTO_DIRECTION_LEFT,"LEFT"],[Blockly.Msg.OTTO_DIRECTION_RIGHT,"RIGHT"]]),"DIRECTION");this.appendValueInput("DISTANCE").setCheck("Number");this.appendDummyInput().appendField(Blockly.Msg.OTTO_DISTANCE_UNIT);this.appendValueInput("DURATION").setCheck("Number");
this.appendDummyInput().appendField(Blockly.Msg.OTTO_DURATION_UNIT);this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.OTTO_TURN_TOOLTIP)}};
Blockly.Blocks.otto_bend={init:function(){this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);this.setColour(Blockly.Blocks.otto.HUE);this.appendDummyInput().appendField(Blockly.Msg.OTTO_BEND_TITLE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.OTTO_DIRECTION_LEFT,"LEFT"],[Blockly.Msg.OTTO_DIRECTION_RIGHT,"RIGHT"]]),"DIRECTION");this.appendValueInput("DISTANCE").setCheck("Number");this.appendDummyInput().appendField(Blockly.Msg.OTTO_DISTANCE_UNIT);this.appendValueInput("DURATION").setCheck("Number");
this.appendDummyInput().appendField(Blockly.Msg.OTTO_DURATION_UNIT);this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.OTTO_BEND_TOOLTIP)}};
Blockly.Blocks.otto_shake_leg={init:function(){this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);this.setColour(Blockly.Blocks.otto.HUE);this.appendDummyInput().appendField(Blockly.Msg.OTTO_SHAKE_LEG_TITLE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.OTTO_DIRECTION_LEFT,"LEFT"],[Blockly.Msg.OTTO_DIRECTION_RIGHT,"RIGHT"]]),"DIRECTION");this.appendValueInput("DISTANCE").setCheck("Number");this.appendDummyInput().appendField(Blockly.Msg.OTTO_DISTANCE_UNIT);this.appendValueInput("DURATION").setCheck("Number");
this.appendDummyInput().appendField(Blockly.Msg.OTTO_DURATION_UNIT);this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.OTTO_SHAKE_LEG_TOOLTIP)}};
Blockly.Blocks.otto_freestyle={init:function(){this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);this.setColour(Blockly.Blocks.otto.HUE);this.appendDummyInput().appendField(Blockly.Msg.OTTO_FREESTYLE_TITLE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.OTTO_STYLE_UP_DOWN,"updown"],[Blockly.Msg.OTTO_STYLE_ASC_TURN,"ascendingTurn"],[Blockly.Msg.OTTO_STYLE_SWING,"swing"],[Blockly.Msg.OTTO_STYLE_TIP_TOE_SWING,"tiptoeSwing"],[Blockly.Msg.OTTO_STYLE_JITTER,"jitter"]]),"STYLE");this.appendValueInput("DISTANCE").setCheck("Number");
this.appendDummyInput().appendField(Blockly.Msg.OTTO_DISTANCE_UNIT);this.appendValueInput("DURATION").setCheck("Number");this.appendDummyInput().appendField(Blockly.Msg.OTTO_DURATION_UNIT);this.appendValueInput("HEIGHT").setCheck("Number");this.appendDummyInput().appendField(Blockly.Msg.OTTO_HEIGHT_UNIT);this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.OTTO_FREESTYLE_TOOLTIP)}};
Blockly.Blocks.otto_flapping={init:function(){this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);this.setColour(Blockly.Blocks.otto.HUE);this.appendDummyInput().appendField(Blockly.Msg.OTTO_FLAPPING_TITLE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.OTTO_DIRECTION_FORWARD,"FORWARD"],[Blockly.Msg.OTTO_DIRECTION_BACKWARD,"BACKWARD"]]),"DIRECTION");this.appendValueInput("DISTANCE").setCheck("Number");this.appendDummyInput().appendField(Blockly.Msg.OTTO_DISTANCE_UNIT);this.appendValueInput("DURATION").setCheck("Number");
this.appendDummyInput().appendField(Blockly.Msg.OTTO_DURATION_UNIT);this.appendValueInput("HEIGHT").setCheck("Number");this.appendDummyInput().appendField(Blockly.Msg.OTTO_HEIGHT_UNIT);this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.OTTO_FLAPPING_TOOLTIP)}};
Blockly.Blocks.otto_crusaito={init:function(){this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);this.setColour(Blockly.Blocks.otto.HUE);this.appendDummyInput().appendField(Blockly.Msg.OTTO_CRUSAITO_TITLE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.OTTO_DIRECTION_FORWARD,"FORWARD"],[Blockly.Msg.OTTO_DIRECTION_BACKWARD,"BACKWARD"]]),"DIRECTION");this.appendValueInput("DISTANCE").setCheck("Number");this.appendDummyInput().appendField(Blockly.Msg.OTTO_DISTANCE_UNIT);this.appendValueInput("DURATION").setCheck("Number");
this.appendDummyInput().appendField(Blockly.Msg.OTTO_DURATION_UNIT);this.appendValueInput("HEIGHT").setCheck("Number");this.appendDummyInput().appendField(Blockly.Msg.OTTO_HEIGHT_UNIT);this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.OTTO_CRUSAITO_TOOLTIP)}};
Blockly.Blocks.otto_moonwalk={init:function(){this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);this.setColour(Blockly.Blocks.otto.HUE);this.appendDummyInput().appendField(Blockly.Msg.OTTO_MOONWALK_TITLE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.OTTO_DIRECTION_LEFT,"LEFT"],[Blockly.Msg.OTTO_DIRECTION_RIGHT,"RIGHT"]]),"DIRECTION");this.appendValueInput("DISTANCE").setCheck("Number");this.appendDummyInput().appendField(Blockly.Msg.OTTO_DISTANCE_UNIT);this.appendValueInput("DURATION").setCheck("Number");
this.appendDummyInput().appendField(Blockly.Msg.OTTO_DURATION_UNIT);this.appendValueInput("HEIGHT").setCheck("Number");this.appendDummyInput().appendField(Blockly.Msg.OTTO_HEIGHT_UNIT);this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.OTTO_MOONWALK_TOOLTIP)}};
Blockly.Blocks.otto_height={init:function(){this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);this.setColour(Blockly.Blocks.otto.HUE);this.appendDummyInput().appendField(Blockly.Msg.OTTO_HEIGHT_TITLE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.OTTO_HEIGHT_SMALL,"SMALL"],[Blockly.Msg.OTTO_DIRECTION_MEDIUM,"MEDIUM"],[Blockly.Msg.OTTO_DIRECTION_BIG,"BIG"]]),"HEIGHT");this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.OTTO_HEIGHT_TOOLTIP)}};
Blockly.Blocks.otto_ultrasonic_init={init:function(){this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);this.setColour(Blockly.Blocks.otto.HUE);this.appendDummyInput().appendField(Blockly.Msg.OTTO_ULTRASONIC_INIT_TITLE).appendField(Blockly.Msg.OTTO_TRIGGER_PIN).appendField(new Blockly.FieldDropdown(profile["default"].digital),"TRIGGER_PIN").appendField(Blockly.Msg.OTTO_ECHO_PIN).appendField(new Blockly.FieldDropdown(profile["default"].digital),"ECHO_PIN");this.setPreviousStatement(!0,null);this.setNextStatement(!0,
null);this.setTooltip(Blockly.Msg.OTTO_ULTRASONIC_INIT_TOOLTIP)}};Blockly.Blocks.otto_ultrasonic_distance={init:function(){this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);this.setColour(Blockly.Blocks.otto.HUE);this.appendDummyInput().appendField(Blockly.Msg.OTTO_ULTRASONIC_DISTANCE_TITLE);this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.OTTO_ULTRASONIC_DISTANCE_TOOLTIP)}};
Blockly.Blocks.otto_buzzer_init={init:function(){this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);this.setColour(Blockly.Blocks.otto.HUE);this.appendDummyInput().appendField(Blockly.Msg.OTTO_BUZZER_INIT_TITLE).appendField(Blockly.Msg.OTTO_BUZZER_PIN).appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.OTTO_BUZZER_INIT_TOOLTIP)}};
Blockly.Blocks.otto_buzzer_sing={init:function(){this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);this.setColour(Blockly.Blocks.otto.HUE);this.appendDummyInput().appendField(Blockly.Msg.OTTO_BUZZER_SING_TITLE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.OTTO_BUZZER_SING_CONNECTION,"S_connection"],[Blockly.Msg.OTTO_BUZZER_SING_DISCONNECTION,"S_disconnection"],[Blockly.Msg.OTTO_BUZZER_SING_BUTTON_PUSHED,"S_buttonPushed"],[Blockly.Msg.OTTO_BUZZER_SING_MODEL_1,"S_mode1"],[Blockly.Msg.OTTO_BUZZER_SING_MODEL_2,
"S_mode2"],[Blockly.Msg.OTTO_BUZZER_SING_MODEL_3,"S_mode3"],[Blockly.Msg.OTTO_BUZZER_SING_SUPRISE,"S_surprise"],[Blockly.Msg.OTTO_BUZZER_SING_OH_OH_1,"S_OhOoh"],[Blockly.Msg.OTTO_BUZZER_SING_OH_OH_2,"S_OhOoh2"],[Blockly.Msg.OTTO_BUZZER_SING_CUDDLY,"S_cuddly"],[Blockly.Msg.OTTO_BUZZER_SING_SLEEPING,"S_sleeping"],[Blockly.Msg.OTTO_BUZZER_SING_HAPPY,"S_happy"],[Blockly.Msg.OTTO_BUZZER_SING_SUPER_HAPPY,"S_superHappy"],[Blockly.Msg.OTTO_BUZZER_SING_HAPPY_SHORT,"S_happy_short"],[Blockly.Msg.OTTO_BUZZER_SING_SAD,
"S_sad"],[Blockly.Msg.OTTO_BUZZER_SING_CONFUSED,"S_confused"],[Blockly.Msg.OTTO_BUZZER_SING_FART_1,"S_fart1"],[Blockly.Msg.OTTO_BUZZER_SING_FART_2,"S_fart2"],[Blockly.Msg.OTTO_BUZZER_SING_FART_3,"S_fart3"]]),"SING");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.OTTO_BUZZER_INIT_TOOLTIP)}};
Blockly.Blocks.otto_mouth={init:function(){this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);this.setColour(Blockly.Blocks.otto.HUE);this.appendDummyInput().appendField(Blockly.Msg.OTTO_MOUTH_TITLE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.OTTO_MOUTH_ZERO,"zero"],[Blockly.Msg.OTTO_MOUTH_ONE,"one"],[Blockly.Msg.OTTO_MOUTH_TWO,"two"],[Blockly.Msg.OTTO_MOUTH_THREE,"three"],[Blockly.Msg.OTTO_MOUTH_FOUR,"four"],[Blockly.Msg.OTTO_MOUTH_FIVE,"five"],[Blockly.Msg.OTTO_MOUTH_SIX,"six"],[Blockly.Msg.OTTO_MOUTH_SEVEN,
"seven"],[Blockly.Msg.OTTO_MOUTH_EIGHT,"eight"],[Blockly.Msg.OTTO_MOUTH_NINE,"nine"],[Blockly.Msg.OTTO_MOUTH_SMILE,"smile"],[Blockly.Msg.OTTO_MOUTH_HAPPY_OPEN,"happyOpen"],[Blockly.Msg.OTTO_MOUTH_HAPPY_CLOSED,"happyClosed"],[Blockly.Msg.OTTO_MOUTH_HEART,"heart"],[Blockly.Msg.OTTO_MOUTH_BIG_SUPRISE,"bigSurprise"],[Blockly.Msg.OTTO_MOUTH_SMALL_SUPRISE,"smallSurprise"],[Blockly.Msg.OTTO_MOUTH_TONGUE_OUT,"tongueOut"],[Blockly.Msg.OTTO_MOUTH_VAMP_1,"vamp1"],[Blockly.Msg.OTTO_MOUTH_VAMP_2,"vamp2"],[Blockly.Msg.OTTO_MOUTH_LINE_MOUTH,
"lineMouth"],[Blockly.Msg.OTTO_MOUTH_CONFUSED,"confused"],[Blockly.Msg.OTTO_MOUTH_DIAGONAL,"diagonal"],[Blockly.Msg.OTTO_MOUTH_SAD,"sad"],[Blockly.Msg.OTTO_MOUTH_SAD_OPEN,"sadOpen"],[Blockly.Msg.OTTO_MOUTH_SAD_CLOSED,"sadClosed"],[Blockly.Msg.OTTO_MOUTH_OK_MOUTH,"okMouth"],[Blockly.Msg.OTTO_MOUTH_X_MOUTH,"xMouth"],[Blockly.Msg.OTTO_MOUTH_INTERROGATION,"interrogation"],[Blockly.Msg.OTTO_MOUTH_THUNDER,"thunder"],[Blockly.Msg.OTTO_MOUTH_CULITO,"culito"],[Blockly.Msg.OTTO_MOUTH_ANGRY,"angry"]]),"MOUTH");
this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.OTTO_MOUTH_INIT_TOOLTIP)}};
Blockly.Blocks.otto_led_matrix_init={init:function(){this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);this.setColour(Blockly.Blocks.otto.HUE);this.appendDummyInput().appendField(Blockly.Msg.OTTO_LED_MATRIX_INIT_TITLE).appendField(Blockly.Msg.OTTO_LED_MATRIX_DIN).appendField(new Blockly.FieldDropdown(profile["default"].digital),"DIN").appendField(Blockly.Msg.OTTO_LED_MATRIX_CS).appendField(new Blockly.FieldDropdown(profile["default"].digital),"CS").appendField(Blockly.Msg.OTTO_LED_MATRIX_CLK).appendField(new Blockly.FieldDropdown(profile["default"].digital),
"CLK").appendField(Blockly.Msg.OTTO_LED_MATRIX_DIR).appendField(new Blockly.FieldDropdown([[Blockly.Msg.OTTO_MATRIX_DIR_0,"MATRIX_DIR_0"],[Blockly.Msg.OTTO_MATRIX_DIR_90,"MATRIX_DIR_90"],[Blockly.Msg.OTTO_MATRIX_DIR_180,"MATRIX_DIR_180"],[Blockly.Msg.OTTO_MATRIX_DIR_270,"MATRIX_DIR_270"]]),"DIR");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.OTTO_LED_MATRIX_INIT_TOOLTIP)}};Blockly.Blocks.lcd_i2c={};Blockly.Blocks.lcd_i2c.HUE=70;
Blockly.Blocks.lcd_i2c_setting={init:function(){this.setHelpUrl(Blockly.Msg.LCD_I2C_HELPURL);this.setColour(Blockly.Blocks.lcd_i2c.HUE);this.appendDummyInput().appendField(Blockly.Msg.INITIALIZES_SETUP_APPENDTEXT).appendField(Blockly.Msg.LCD_I2C_TITLE).appendField(new Blockly.FieldDropdown([["1602","1602"],["2004","2004"]]),"LCD_DIM").appendField(Blockly.Msg.SIGNAL_PIN).appendField(new Blockly.FieldDropdown([["I2C","PIN"]]),"PIN").appendField(Blockly.Msg.LCD_I2C_I2C_ADDRESS).appendField(new Blockly.FieldDropdown([["0x27","0x27"],
["0x3F","0x3F"]]),"I2C_ADDRESS");this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LCD_I2C_TOOLTIP)}};
Blockly.Blocks.lcd_i2c_light={init:function(){this.setHelpUrl(Blockly.Msg.LCD_I2C_HELPURL);this.setColour(Blockly.Blocks.lcd_i2c.HUE);this.appendDummyInput().appendField(Blockly.Msg.LCD_I2C_TITLE).appendField(Blockly.Msg.LCD_I2C_LIGHT).appendField(new Blockly.FieldDropdown([[Blockly.Msg.LCD_I2C_ON,"ON"],[Blockly.Msg.LCD_I2C_OFF,"OFF"]]),"BACKLIGHT_STATE");this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LCD_I2C_TOOLTIP)}};
Blockly.Blocks.lcd_i2c_clear={init:function(){this.setHelpUrl(Blockly.Msg.LCD_I2C_HELPURL);this.setColour(Blockly.Blocks.lcd_i2c.HUE);this.appendDummyInput().appendField(Blockly.Msg.LCD_I2C_TITLE).appendField(Blockly.Msg.LCD_I2C_CLEAR);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LCD_I2C_TOOLTIP)}};
Blockly.Blocks.lcd_i2c_set_cursor={init:function(){this.setHelpUrl(Blockly.Msg.LCD_I2C_HELPURL);this.setColour(Blockly.Blocks.lcd_i2c.HUE);this.appendDummyInput().appendField(Blockly.Msg.LCD_I2C_TITLE);this.appendValueInput("COL").setCheck("Number").appendField(Blockly.Msg.LCD_I2C_SET_CURSOR);this.appendValueInput("ROW").setCheck("Number").appendField(Blockly.Msg.LCD_I2C_SET_CURSOR_SEP);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LCD_I2C_TOOLTIP)}};
Blockly.Blocks.lcd_i2c_put={init:function(){this.setHelpUrl(Blockly.Msg.LCD_I2C_HELPURL);this.setColour(Blockly.Blocks.lcd_i2c.HUE);this.appendValueInput("VALUE").appendField(Blockly.Msg.LCD_I2C_TITLE).appendField(Blockly.Msg.LCD_I2C_PUT).setCheck(["Number","String"]);this.setInputsInline(!1);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LCD_I2C_TOOLTIP)}};

Blockly.Blocks.mfrc522={};Blockly.Blocks.mfrc522.HUE=70;
Blockly.Blocks.mfrc522_read={init:function(){this.setHelpUrl(Blockly.Msg.MFRC522_RFID_HELPURL);this.setColour(Blockly.Blocks.mfrc522.HUE);this.appendDummyInput().appendField(Blockly.Msg.MFRC522_RFID_TITLE).appendField(new Blockly.FieldDropdown([["MFRC522","DUMMY"]]),"SENSOR");this.appendDummyInput().appendField(Blockly.Msg.SIGNAL_PIN).appendField(new Blockly.FieldDropdown([["SPI","SPI"]]),"SIGNAL");this.appendDummyInput().appendField(Blockly.Msg.MFRC522_RFID_READ);this.setInputsInline(!0);this.setOutput(!0,
"String");this.setTooltip(Blockly.Msg.MFRC522_RFID_TOOLTIP)},onchange:function(){}};

Blockly.Blocks.interrupts={};
Blockly.Blocks.interrupts_attach={init:function(){this.setHelpUrl(Blockly.Msg.INTERRUPTS_ATTACH_HELPURL);this.setColour(290);this.appendDummyInput().appendField(Blockly.Msg.INTERRUPTS_ATTACH_TITLE);this.appendDummyInput().appendField(Blockly.Msg.PIN).appendField(new Blockly.FieldDropdown(profile["default"].interrupt),"PIN");this.appendDummyInput().appendField(Blockly.Msg.MODE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.CHANGE,"CHANGE"],[Blockly.Msg.RISING,"RISING"],[Blockly.Msg.FALLING,"FALLING"],
[Blockly.Msg.LOW,"LOW"],[Blockly.Msg.HIGH,"HIGH"]]),"MODE");this.appendStatementInput("CONTENT");this.setInputsInline(!0);this.setTooltip(Blockly.Msg.INTERRUPTS_ATTACH_TOOLTIP)}};
Blockly.Blocks.interrupts_detach={init:function(){this.setHelpUrl(Blockly.Msg.INTERRUPTS_DETACH_HELPURL);this.setColour(290);this.appendDummyInput().appendField(Blockly.Msg.INTERRUPTS_DETACH_TITLE);this.appendDummyInput().appendField(new Blockly.FieldDropdown(profile["default"].interrupt),"PIN");this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.INTERRUPTS_DETACH_TOOLTIP)}};
Blockly.Blocks.interrupts={init:function(){this.setHelpUrl(Blockly.Msg.INTERRUPTS_HELPURL);this.setColour(290);this.appendDummyInput().appendField(Blockly.Msg.INTERRUPTS_TITLE);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.INTERRUPTS_TOOLTIP)}};
Blockly.Blocks.interrupts_no={init:function(){this.setHelpUrl(Blockly.Msg.INTERRUPTS_NO_HELPURL);this.setColour(290);this.appendDummyInput().appendField(Blockly.Msg.INTERRUPTS_NO_TITLE);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.INTERRUPTS_NO_TOOLTIP)}};Blockly.Blocks.mpr121={};Blockly.Blocks.mpr121.HUE=215;Blockly.Blocks.mpr121.image=filepath.media+"/mpr121.jpg";Blockly.Blocks.mpr121.checkBlocks=function(a){var b=null,d=a.type;a=a.workspace.getAllBlocks();for(var c=0;c<a.length;c++)if("mpr121_touched"!=a[c].type&&"mpr121_released"!=a[c].type&&"mpr121_value"!=a[c].type&&"mpr121_reset"!=a[c].type||null!=b||(b=a[c].type!=d?!0:!1),"mpr121_begin"==a[c].type)return!0;return b};
Blockly.Blocks.mpr121_begin={init:function(){this.setHelpUrl(Blockly.Msg.MPR121_HELPURL);this.setColour(Blockly.Blocks.mpr121.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.mpr121.image,64,64)).appendField(Blockly.Msg.MPR121_BEGIN_TITLE);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.MPR121_BEGIN_TOOLTIP)},onchange:function(){this.workspace&&this.setWarningText(Blockly.Msg.MPR121_BEGIN_WARNING)}};
Blockly.Blocks.mpr121_touched={init:function(){this.setHelpUrl(Blockly.Msg.MPR121_HELPURL);this.setColour(Blockly.Blocks.mpr121.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.mpr121.image,64,64));this.appendValueInput("CH").setCheck("Number");this.appendDummyInput().appendField(Blockly.Msg.MPR121_TOUCHED_TITLE);this.setInputsInline(!0);this.setOutput(!0,"Boolean");this.setTooltip(Blockly.Msg.MPR121_TOUCHED_TOOLTIP)},onchange:function(){this.workspace&&(Blockly.Blocks.mpr121.checkBlocks(this)?
this.setWarningText(null):this.setWarningText(Blockly.Msg.MPR121_WARNING))}};
Blockly.Blocks.mpr121_released={init:function(){this.setHelpUrl(Blockly.Msg.MPR121_HELPURL);this.setColour(Blockly.Blocks.mpr121.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.mpr121.image,64,64));this.appendValueInput("CH").setCheck("Number");this.appendDummyInput().appendField(Blockly.Msg.MPR121_RELEASED_TITLE);this.setInputsInline(!0);this.setOutput(!0,"Boolean");this.setTooltip(Blockly.Msg.MPR121_RELEASED_TOOLTIP)},onchange:function(){this.workspace&&(Blockly.Blocks.mpr121.checkBlocks(this)?
this.setWarningText(null):this.setWarningText(Blockly.Msg.MPR121_WARNING))}};
Blockly.Blocks.mpr121_value={init:function(){this.setHelpUrl(Blockly.Msg.MPR121_HELPURL);this.setColour(Blockly.Blocks.mpr121.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.mpr121.image,64,64)).appendField(Blockly.Msg.MPR121_VALUE_TITLE);this.appendValueInput("CH").setCheck("Number").appendField(Blockly.Msg.MPR121_POSITION);this.appendDummyInput();this.setInputsInline(!0);this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.MPR121_VALUE_TOOLTIP)},onchange:function(){this.workspace&&
(Blockly.Blocks.mpr121.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.MPR121_WARNING))}};
Blockly.Blocks.mpr121_reset={init:function(){this.setHelpUrl(Blockly.Msg.MPR121_HELPURL);this.setColour(Blockly.Blocks.mpr121.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.mpr121.image,64,64)).appendField(Blockly.Msg.MPR121_RESET_TITLE);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.MPR121_RESET_TOOLTIP)},onchange:function(){this.workspace&&(Blockly.Blocks.mpr121.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.MPR121_WARNING))}};Blockly.Blocks.blynk={};Blockly.Blocks.blynk.HUE=65;Blockly.Blocks.blynk.image=filepath.media+"/blynk.png";
Blockly.Blocks.blynk_ethernet_begin={init:function(){this.setHelpUrl(Blockly.Msg.BLYNK_HELPURL);this.setColour(Blockly.Blocks.blynk.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.blynk.image,64,64)).appendField(Blockly.Msg.BLYNK_ETHERNET_BEGIN_TITLE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.ETHERNET_VERSION_1,""]],"VERSION"));this.appendValueInput("AUTH").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.BLYNK_AUTH);this.appendValueInput("MAC_ADDRESS").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.MAC_ADDRESS);
this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.BLYNK_ETHERNET_BEGIN_TOOLTIP)}};
Blockly.Blocks.blynk_write={init:function(){this.setHelpUrl(Blockly.Msg.BLYNK_HELPURL);this.setColour(Blockly.Blocks.blynk.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.blynk.image,64,64)).appendField(Blockly.Msg.BLYNK_WRITE_TITLE);this.appendDummyInput().appendField("V").appendField(new Blockly.FieldTextInput("0"),"PIN");this.appendStatementInput("ACTION").setCheck(null);this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.BLYNK_WRITE_TOOLTIP)}};
Blockly.Blocks.blynk_param={init:function(){this.setHelpUrl(Blockly.Msg.BLYNK_HELPURL);this.setColour(Blockly.Blocks.blynk.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.blynk.image,64,64)).appendField(Blockly.Msg.BLYNK_PARAM_TITLE).appendField(Blockly.Msg.DATA_TYPE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.INTEGER,"asInt"],[Blockly.Msg.DOUBLE,"asDouble"],[Blockly.Msg.STRING,"asStr"]]),"TYPE");this.setInputsInline(!0);this.setOutput(!0,["Number","Boolean"]);
this.setTooltip(Blockly.Msg.BLYNK_PARAM_TOOLTIP)}};
Blockly.Blocks.blynk_merge_param={init:function(){this.setHelpUrl(Blockly.Msg.BLYNK_HELPURL);this.setColour(Blockly.Blocks.blynk.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.blynk.image,64,64)).appendField(Blockly.Msg.BLYNK_MERGE_PARAM_TITLE).appendField(Blockly.Msg.INDEX).appendField(new Blockly.FieldDropdown(profile["default"].blynk_merge_index),"INDEX").appendField(Blockly.Msg.DATA_TYPE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.INTEGER,"asInt"],[Blockly.Msg.DOUBLE,
"asDouble"],[Blockly.Msg.STRING,"asStr"]]),"TYPE");this.setOutput(!0,["Number","Boolean"]);this.setTooltip(Blockly.Msg.BLYNK_MERGE_PARAM_TOOLTIP)}};
Blockly.Blocks.blynk_virtual_write={init:function(){this.setHelpUrl(Blockly.Msg.BLYNK_HELPURL);this.setColour(Blockly.Blocks.blynk.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.blynk.image,64,64)).appendField(Blockly.Msg.BLYNK_VIRTUAL_WRITE_TITLE);this.appendDummyInput().appendField("V").appendField(new Blockly.FieldTextInput("0"),"PIN");this.appendValueInput("VALUE").setCheck("Number","Boolean").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.VALUE);this.setInputsInline(!0);
this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.BLYNK_VIRTUAL_WRITE_TOOLTIP)}};
Blockly.Blocks.blynk_email={init:function(){this.setHelpUrl(Blockly.Msg.BLYNK_HELPURL);this.setColour(Blockly.Blocks.blynk.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.blynk.image,64,64)).appendField(Blockly.Msg.BLYNK_EMAIL_TITLE);this.appendValueInput("ADDRESS").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.EMAIL_ADDRESS);this.appendValueInput("TITLE").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.EMAIL_TITLE);
this.appendValueInput("BODY").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.EMAIL_BODY);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.BLYNK_EMAIL_TOOLTIP)}};
Blockly.Blocks.blynk_notify={init:function(){this.setHelpUrl(Blockly.Msg.BLYNK_HELPURL);this.setColour(Blockly.Blocks.blynk.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.blynk.image,64,64)).appendField(Blockly.Msg.BLYNK_NOTIFY_TITLE);this.appendValueInput("TEXT").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.TEXT);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.BLYNK_EMAIL_TOOLTIP)}};
Blockly.Blocks.blynk_tweet={init:function(){this.setHelpUrl(Blockly.Msg.BLYNK_HELPURL);this.setColour(Blockly.Blocks.blynk.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.blynk.image,64,64)).appendField(Blockly.Msg.BLYNK_TWEET_TITLE);this.appendValueInput("TEXT").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.TEXT);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.BLYNK_TWEET_TOOLTIP)}};
Blockly.Blocks.blynk_connect={init:function(){this.setHelpUrl(Blockly.Msg.BLYNK_HELPURL);this.setColour(Blockly.Blocks.blynk.HUE);this.appendDummyInput().appendField(new Blockly.FieldImage(Blockly.Blocks.blynk.image,64,64)).appendField(Blockly.Msg.BLYNK_CONNECT_TITLE);this.setOutput(!0);this.setTooltip(Blockly.Msg.BLYNK_CONNECT_TOOLTIP)}};

Blockly.Blocks.ifttt_get_url={init:function(){this.setHelpUrl(Blockly.Msg.IFTTT_GET_URL_HELPURL);this.setColour(Blockly.Blocks.ifttt.HUE);this.appendDummyInput().appendField(Blockly.Msg.IFTTT_GET_URL_TITLE);this.appendValueInput("EVENT").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.IFTTT_EVENT);this.appendValueInput("KEY").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.IFTTT_KEY);this.appendValueInput("VALUE1").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.IFTTT_VALUE1);
this.appendValueInput("VALUE2").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.IFTTT_VALUE2);this.appendValueInput("VALUE3").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.IFTTT_VALUE3);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.IFTTT_GET_URL_TOOLTIP)}};Blockly.Blocks.infra_red={};Blockly.Blocks.infra_red.HUE=70;Blockly.Blocks.infra_red_send={init:function(){this.setHelpUrl(Blockly.Msg.INFRA_RED_HELPURL);this.setColour(Blockly.Blocks.infra_red.HUE);this.appendValueInput("COMMAND_INT").appendField(Blockly.Msg.INFRA_RED_SEND_TITLE).setCheck("Number").appendField(Blockly.Msg.INFRA_RED_SEND_TEXT_PARAM);this.setInputsInline(!1);this.setPreviousStatement(!0);this.setNextStatement(!0)},onchange:function(){}};
Blockly.Blocks.infra_red_receive={init:function(){this.setHelpUrl(Blockly.Msg.INFRA_RED_HELPURL);this.setColour(Blockly.Blocks.infra_red.HUE);this.appendDummyInput().appendField(Blockly.Msg.INFRA_RED_RECEIVE_TITLE).appendField(Blockly.Msg.INFRA_RED_RECEIVE_TEXT_PARAM);this.appendDummyInput().appendField(Blockly.Msg.SIGNAL_PIN).appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN");this.setInputsInline(!0);this.setOutput(!0,"Number")},onchange:function(){}};Blockly.Blocks.base={};Blockly.Blocks.base_delay={helpUrl:"http://arduino.cc/en/Reference/delay",init:function(){this.setColour(120);this.appendValueInput("DELAY_TIME","Number").appendField("Delay").setCheck("Number");this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip("Delay specific time")}};
Blockly.Blocks.base_map={helpUrl:"http://arduino.cc/en/Reference/map",init:function(){this.setColour(230);this.appendValueInput("NUM","Number").appendField("Map ").setCheck("Number");this.appendValueInput("DMAX","Number").appendField("value to [0-").setCheck("Number");this.appendDummyInput().appendField("]");this.setInputsInline(!0);this.setOutput(!0);this.setTooltip("Re-maps a number from [0-1024] to another.")}};Blockly.Blocks.eeprom={};Blockly.Blocks.eeprom.HUE=200;Blockly.Blocks.eeprom_getsize={init:function(){this.setHelpUrl(Blockly.Msg.EEPROM_LENGTH_HELPURL);this.setColour(Blockly.Blocks.eeprom.HUE);this.appendDummyInput().appendField(Blockly.Msg.EEPROM_LENGTH_TITLE);this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.EEPROM_LENGTH_TOOLTIP)}};
Blockly.Blocks.eeprom_write={init:function(){this.setHelpUrl(Blockly.Msg.EEPROM_WRITE_HELPURL);this.setColour(Blockly.Blocks.eeprom.HUE);this.appendValueInput("ADDRESS").setCheck(["Number"]).appendField(Blockly.Msg.EEPROM_WRITE_TITLE);this.appendValueInput("CONTENT").setCheck(["Number","Boolean"]).appendField(Blockly.Msg.EEPROM_VALUE);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setInputsInline(!0);this.setTooltip(Blockly.Msg.EEPROM_WRITE_TOOLTIP)}};
Blockly.Blocks.eeprom_read={init:function(){this.setHelpUrl(Blockly.Msg.EEPROM_READ_HELPURL);this.setColour(Blockly.Blocks.eeprom.HUE);this.appendValueInput("ADDRESS").setCheck(["Number"]).appendField(Blockly.Msg.EEPROM_READ_TITLE);this.setInputsInline(!0);this.setOutput(!0,["Number"]);this.setTooltip(Blockly.Msg.EEPROM_READ_TOOLTIP)}};
Blockly.Blocks.colour={};Blockly.Msg["COLOUR_HUE"]=20;Blockly.Blocks.colour_picker={init:function(){this.setHelpUrl(Blockly.Msg.COLOUR_PICKER_HELPURL);this.setColour(Blockly.Msg["COLOUR_HUE"]);this.appendDummyInput().appendField(new Blockly.FieldColour("#ff0000"),"COLOUR");this.setOutput(!0,"Colour");this.setTooltip(Blockly.Msg.COLOUR_PICKER_TOOLTIP)}};
Blockly.Blocks.colour_random={init:function(){this.setHelpUrl(Blockly.Msg.COLOUR_RANDOM_HELPURL);this.setColour(Blockly.Msg["COLOUR_HUE"]);this.appendDummyInput().appendField(Blockly.Msg.COLOUR_RANDOM_TITLE);this.setOutput(!0,"Colour");this.setTooltip(Blockly.Msg.COLOUR_RANDOM_TOOLTIP)}};
Blockly.Blocks.colour_rgb={init:function(){this.setHelpUrl(Blockly.Msg.COLOUR_RGB_HELPURL);this.setColour(Blockly.Msg["COLOUR_HUE"]);this.appendValueInput("RED").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_RGB_TITLE).appendField(Blockly.Msg.COLOUR_RGB_RED);this.appendValueInput("GREEN").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_RGB_GREEN);this.appendValueInput("BLUE").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_RGB_BLUE);
this.setOutput(!0,"Colour");this.setTooltip(Blockly.Msg.COLOUR_RGB_TOOLTIP)}};
Blockly.Blocks.colour_blend={init:function(){this.setHelpUrl(Blockly.Msg.COLOUR_BLEND_HELPURL);this.setColour(Blockly.Msg["COLOUR_HUE"]);this.appendValueInput("COLOUR1").setCheck("Colour").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_BLEND_TITLE).appendField(Blockly.Msg.COLOUR_BLEND_COLOUR1);this.appendValueInput("COLOUR2").setCheck("Colour").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_BLEND_COLOUR2);this.appendValueInput("RATIO").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_BLEND_RATIO);
this.setOutput(!0,"Colour");this.setTooltip(Blockly.Msg.COLOUR_BLEND_TOOLTIP)}};

Blockly.Blocks.dht={};
Blockly.Blocks.dht.HUE=70;
Blockly.Blocks.dht.image=filepath.media+"/dht11.jpg";
Blockly.Blocks.dht_read={init:function(){this.setHelpUrl(Blockly.Msg.DHT_HELPURL);this.setColour(Blockly.Blocks.dht.HUE);this.appendDummyInput().appendField(Blockly.Msg.DHT_TITLE).appendField(new Blockly.FieldDropdown(profile["default"].dht),"SENSOR");this.appendDummyInput().appendField(Blockly.Msg.SIGNAL_PIN).appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN");this.appendDummyInput().appendField(Blockly.Msg.MESUREMENT_TYPE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.HUMIDITY_PERCENT,"h"],
[Blockly.Msg.TEMPERATURE_CELCIUS,"C"]]),"TYPE");this.setInputsInline(!0);this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.DHT_TOOLTIP)},onchange:function(){}};
Blockly.Blocks.inout={};Blockly.Blocks.inout.HUE=230;Blockly.Blocks.inout_buildin_led={init:function(){this.setHelpUrl("http://arduino.cc/en/Reference/DigitalWrite");this.setColour(Blockly.Blocks.inout.HUE);this.appendDummyInput().appendField(Blockly.Msg.INOUT_LED_BUINTIN).appendField(new Blockly.FieldDropdown([[Blockly.Msg.INOUT_HIGH,"HIGH"],[Blockly.Msg.INOUT_LOW,"LOW"]]),"STAT");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.INOUT_LED_BUINTIN_TOOLTIP)}};
Blockly.Blocks.inout_digital_write={init:function(){this.setHelpUrl(Blockly.Msg.INOUT_DIGITAL_WRITE_HELPURL);this.setColour(Blockly.Blocks.inout.HUE);this.appendDummyInput().appendField(Blockly.Msg.INOUT_DIGITAL_WRITE_APPENDTEXT_PIN).appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN").appendField(Blockly.Msg.INOUT_DIGITAL_WRITE_APPENDTEXT_STAT).appendField(new Blockly.FieldDropdown([[Blockly.Msg.INOUT_HIGH,"HIGH"],[Blockly.Msg.INOUT_LOW,"LOW"]]),"STAT");this.setPreviousStatement(!0,
null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.INOUT_DIGITAL_WRITE_TOOLTIP)}};
Blockly.Blocks.inout_custom_digital_write={init:function(){this.setHelpUrl(Blockly.Msg.INOUT_DIGITAL_WRITE_HELPURL);this.setColour(Blockly.Blocks.inout.HUE);this.appendValueInput("PIN").setCheck("Number").appendField(Blockly.Msg.INOUT_DIGITAL_WRITE_APPENDTEXT_PIN);this.appendValueInput("STAT").setCheck("Boolean").appendField(Blockly.Msg.INOUT_DIGITAL_WRITE_APPENDTEXT_STAT);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.INOUT_DIGITAL_WRITE_TOOLTIP)}};
Blockly.Blocks.inout_digital_read={init:function(){this.setHelpUrl(Blockly.Msg.INOUT_DIGITAL_READ_HELPURL);this.setColour(Blockly.Blocks.inout.HUE);this.appendDummyInput().appendField(Blockly.Msg.INOUT_DIGITAL_READ_APPENDTEXT_PIN).appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN");this.setInputsInline(!0);this.setOutput(!0,"Boolean");this.setTooltip(Blockly.Msg.INOUT_DIGITAL_READ_TOOLTIP)}};
Blockly.Blocks.inout_digital_buildin_read={init:function(){this.setHelpUrl(Blockly.Msg.INOUT_LED_BUINTIN_READ_HELPURL);this.setColour(Blockly.Blocks.inout.HUE);this.appendDummyInput().appendField(Blockly.Msg.INOUT_LED_BUINTIN_READ);this.setOutput(!0,"Boolean");this.setTooltip(Blockly.Msg.INOUT_LED_BUINTIN_READ_TOOLTIP)}};
Blockly.Blocks.inout_custom_digital_read={init:function(){this.setHelpUrl(Blockly.Msg.INOUT_DIGITAL_READ_HELPURL);this.setColour(Blockly.Blocks.inout.HUE);this.appendValueInput("PIN_READ").setCheck("Number").appendField(Blockly.Msg.INOUT_DIGITAL_READ_APPENDTEXT_PIN);this.setInputsInline(!0);this.setOutput(!0,"Boolean");this.setTooltip(Blockly.Msg.INOUT_DIGITAL_READ_TOOLTIP)}};
Blockly.Blocks.inout_custom_digital_read_pullup={init:function(){this.setHelpUrl(Blockly.Msg.INOUT_ENABLE_INTERNAL_PULLUP_HELPURL);this.setColour(Blockly.Blocks.inout.HUE);this.appendValueInput("PIN_READ").setCheck("Number").appendField(Blockly.Msg.INOUT_DIGITAL_READ_PULLUP_APPENDTEXT_PIN);this.setInputsInline(!0);this.setOutput(!0,"Boolean");this.setTooltip(Blockly.Msg.INOUT_DIGITAL_READ_TOOLTIP)}};
Blockly.Blocks.inout_enable_pullup={init:function(){this.setHelpUrl(Blockly.Msg.INOUT_ENABLE_INTERNAL_PULLUP_HELPURL);this.setColour(Blockly.Blocks.inout.HUE);this.appendDummyInput().appendField(Blockly.Msg.INOUT_ENABLE_INTERNAL_PULLUP_PIN).appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN");this.setInputsInline(!0);this.setTooltip(Blockly.Msg.INOUT_ENABLE_INTERNAL_PULLUP_TOOLTIP)}};
Blockly.Blocks.inout_analog_write={init:function(){this.setHelpUrl(Blockly.Msg.INOUT_ANALOG_WRITE_HELPURL);this.setColour(Blockly.Blocks.inout.HUE);this.appendDummyInput().appendField(Blockly.Msg.INOUT_ANALOG_WRITE_APPENDTEXT_PIN).appendField(new Blockly.FieldDropdown(profile["default"].pwm),"PIN");this.appendValueInput("NUM").setCheck("Number").appendField(Blockly.Msg.INOUT_ANALOG_WRITE_APPENDTEXT_VALUE);this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.INOUT_ANALOG_WRITE_TOOLTIP)}};
Blockly.Blocks.inout_custom_analog_write={init:function(){this.setHelpUrl(Blockly.Msg.INOUT_ANALOG_WRITE_HELPURL);this.setColour(Blockly.Blocks.inout.HUE);this.appendValueInput("PIN_ANALOGWRITE").setCheck("Number").appendField(Blockly.Msg.INOUT_ANALOG_WRITE_APPENDTEXT_PIN);this.appendValueInput("NUM").setCheck("Number").appendField(Blockly.Msg.INOUT_ANALOG_WRITE_APPENDTEXT_VALUE);this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.INOUT_ANALOG_WRITE_TOOLTIP)}};
Blockly.Blocks.inout_analog_read={init:function(){this.setHelpUrl(Blockly.Msg.INOUT_ANALOG_READ_HELPURL);this.setColour(Blockly.Blocks.inout.HUE);this.appendDummyInput().appendField(Blockly.Msg.INOUT_ANALOG_READ_APPENDTEXT).appendField(new Blockly.FieldDropdown(profile["default"].analog),"PIN");this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.INOUT_ANALOG_READ_TOOLTIP)}};
Blockly.Blocks.inout_custom_analog_read={init:function(){this.setHelpUrl(Blockly.Msg.INOUT_ANALOG_READ_HELPURL);this.setColour(Blockly.Blocks.inout.HUE);this.appendValueInput("PIN_ANALOGREAD").setCheck("Number").appendField(Blockly.Msg.INOUT_ANALOG_READ_APPENDTEXT);this.setInputsInline(!0);this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.INOUT_ANALOG_READ_TOOLTIP)}};
Blockly.Blocks.inout_highlow={init:function(){this.setHelpUrl("http://arduino.cc/en/Reference/Constants");this.setColour(Blockly.Blocks.inout.HUE);this.appendDummyInput().appendField(new Blockly.FieldDropdown([[Blockly.Msg.INOUT_HIGH,"HIGH"],[Blockly.Msg.INOUT_LOW,"LOW"]]),"BOOL");this.setOutput(!0,"Boolean");this.setTooltip("")}};
Blockly.Blocks.pulsein={init:function(){this.setHelpUrl(Blockly.Msg.INOUT_PULSEIN_HELPURL);this.setColour(Blockly.Blocks.inout.HUE);this.appendDummyInput().appendField(Blockly.Msg.INOUT_PULSEIN_APPENDTEXT_PIN).appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN");this.appendDummyInput().appendField(Blockly.Msg.INOUT_PULSEIN_APPENDTEXT_TYPE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.INOUT_HIGH,"HIGH"],[Blockly.Msg.INOUT_LOW,"LOW"]]),"type");this.appendDummyInput().appendField(Blockly.Msg.INOUT_PULSEIN_APPENDTEXT_TIMEOUT).appendField(new Blockly.FieldTextInput("300"),
"TIMEOUT");this.setInputsInline(!0);this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.INOUT_PULSEIN_TOOLTIP)}};


Blockly.Blocks.custom_tone={
  init:function(){
    this.setHelpUrl(Blockly.Msg.INOUT_TONE_HELPURL);
    this.setColour(30);
    this.appendValueInput("PIN")
        .setCheck("Number")
        .appendField(Blockly.Msg.INOUT_TONE_APPENDTEXT_PIN);
    this.appendValueInput("FREQ")
        .setCheck("Number")
        .appendField(Blockly.Msg.INOUT_TONE_APPENDTEXT_FREQ);
    this.appendValueInput("DURATION")
        .setCheck("Number")
        .appendField(Blockly.Msg.INOUT_TONE_APPENDTEXT_DURATION);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.INOUT_TONE_TOOLTIP)}
};
Blockly.Blocks.tone={
  init:function(){
    this.setHelpUrl(Blockly.Msg.INOUT_TONE_HELPURL);
    this.setColour(30);
    this.appendDummyInput()
        .appendField(Blockly.Msg.INOUT_TONE_APPENDTEXT_PIN)
        .appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN");
    this.appendDummyInput()
        .appendField(Blockly.Msg.INOUT_TONE_APPENDTEXT_FREQ)
        .appendField(new Blockly.FieldDropdown(profile["default"].tone),"FREQ");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.INOUT_TONE_TOOLTIP)}
};
Blockly.Blocks.no_tone={
  init:function(){
    this.setHelpUrl(Blockly.Msg.INOUT_TONE_HELPURL);
    this.setColour(30);
    this.appendDummyInput()
        .appendField(Blockly.Msg.INOUT_NO_TONE_APPENDTEXT_PIN)
        .appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.INOUT_TONE_TOOLTIP)}
};
Blockly.Blocks.inout_digitalpin={init:function(){this.setHelpUrl("");this.setColour(Blockly.Blocks.inout.HUE);this.appendDummyInput().appendField(Blockly.Msg.INOUT_DIGITALPIN_TEXT).appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN");this.setOutput(!0,"Number");this.setTooltip("")}};
Blockly.Blocks.inout_analogpin={init:function(){this.setHelpUrl("");this.setColour(Blockly.Blocks.inout.HUE);this.appendDummyInput().appendField(Blockly.Msg.INOUT_ANALOGPIN_TEXT).appendField(new Blockly.FieldDropdown(profile["default"].analog),"PIN");this.setOutput(!0,"Number");this.setTooltip("")}};Blockly.Blocks.linkit={};Blockly.Blocks.linkit.HUE=35;Blockly.Blocks.linkit.image=filepath.media+"/linkit_7697.png";
Blockly.Blocks.linkit_ble_periphral_get_value={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendValueInput("CHARACTERISTIC").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_GET_VALUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_GET_VALUE_TAIL);this.setInputsInline(!0);this.setOutput(!0,["Number","String"]);this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_TOOLTIP)}};
Blockly.Blocks.linkit_ble_periphral_write={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_WRITE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.VARIABLES_TYPE_NUMBER,"int"],[Blockly.Msg.VARIABLES_TYPE_STRING,"String"]]),"TYPE");this.appendValueInput("CHARACTERISTIC").setCheck("String").appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_IS_WRITTEN);this.appendValueInput("VALUE").appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_GET_VALUE_TAIL);
this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_TOOLTIP)}};
Blockly.Blocks.linkit_ble_periphral_is_written={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendValueInput("CHARACTERISTIC").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_IS_WRITTEN);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_IS_WRITTEN_TAIL);this.setInputsInline(!0);this.setOutput(!0,"Boolean");this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_TOOLTIP)}};
Blockly.Blocks.linkit_ble_Characteristic={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_CHARACTERISTIC);this.appendValueInput("CHARACTERISTIC").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_SEC);this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_CHARACTERISTIC_TYPE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.VARIABLES_TYPE_NUMBER,
"LBLECharacteristicInt"],[Blockly.Msg.VARIABLES_TYPE_STRING,"LBLECharacteristicString"]]),"CHARACTERISTIC_TYPE");this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_LBLE_ATTRIBUTE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.LINKIT_SET_LBLE_READ_WRITE,"LBLE_READ | LBLE_WRITE"],[Blockly.Msg.LINKIT_SET_LBLE_READ,"LBLE_READ"],[Blockly.Msg.LINKIT_SET_LBLE_WRITE,"LBLE_WRITE"]]),"TYPE");this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_CHARACTERISTIC_TOOLTIP)}};
Blockly.Blocks.linkit_ble_eddy={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_EDDY);this.appendValueInput("URL").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_URL);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_CHARACTERISTIC_TOOLTIP)}};
Blockly.Blocks.linkit_ble_periphral={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_TITLE);this.appendValueInput("NAME").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_NAME);this.appendValueInput("SERVICE").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_SERVICE);
this.appendStatementInput("BLE_CONTENT");this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_TOOLTIP)}};Blockly.Blocks.linkit_ble_get_address={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_GET_BLE_ADDRESS);this.setOutput(!0,"String");this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_TOOLTIP)}};
Blockly.Blocks.linkit_ble_central_get_peripheral_with_index={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.interpolateMsg(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_GET_PERIPHERAL_WITH_INDEX,["INDEX","Number",Blockly.ALIGN_RIGHT],Blockly.ALIGN_RIGHT);this.setOutput(!0,"String");this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_SCAN_TOOLTIP)}};
Blockly.Blocks.linkit_ble_central_scan_count={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_SCAN_COUNT);this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_SCAN_TOOLTIP)}};
Blockly.Blocks.linkit_ble_central_scan={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_SCAN_TITLE);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_SCAN_TOOLTIP)}};
Blockly.Blocks.linkit_ble_ibeacon={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_IBEACON_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_SET_IBEACON_TITLE).setAlign(Blockly.ALIGN_RIGHT);this.appendValueInput("UUID").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_IBEACON_UUID);this.appendValueInput("MAJOR").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_IBEACON_MAJOR);
this.appendValueInput("MINOR").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_IBEACON_MINOR);this.appendValueInput("RSSI").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_IBEACON_RSSI);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LINKIT_SET_IBEACON_TOOLTIP)}};
Blockly.Blocks.linkit_ble_wait_until_ready={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_SET_BLE_UNTIL_READY_TITLE);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_TOOLTIP)}};
Blockly.Blocks.linkit_ble_ready={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_SET_BLE_READY_TITLE);this.setOutput(!0,"Boolean");this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_TOOLTIP)}};
Blockly.Blocks.mcs={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_SET_MCS_WIFI);this.appendValueInput("DEVICEID").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_MCS_DEVICEID);this.appendValueInput("DEVICEKEY").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_MCS_DEVICEKEY);this.appendStatementInput("CONTENT");
this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP)}};
Blockly.Blocks.mcs_set_control_channel={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_SET_MCS_CHANNEL1_TITLE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.VARIABLES_TYPE_ONOFF,"boolean"],[Blockly.Msg.VARIABLES_TYPE_CATEGORY,"category"],[Blockly.Msg.VARIABLES_TYPE_NUMBER,"int"],[Blockly.Msg.VARIABLES_TYPE_FLOAT,"float"],[Blockly.Msg.VARIABLES_TYPE_STRING,"String"]]),"TYPE").appendField(Blockly.Msg.LINKIT_SET_MCS_CHANNEL1_TAIL);
this.appendValueInput("CONTROL_CHANNEL").setCheck("String");this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP)}};
Blockly.Blocks.mcs_set_display_channel={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_SET_MCS_CHANNEL1_TITLE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.VARIABLES_TYPE_ONOFF,"boolean"],[Blockly.Msg.VARIABLES_TYPE_CATEGORY,"category"],[Blockly.Msg.VARIABLES_TYPE_NUMBER,"int"],[Blockly.Msg.VARIABLES_TYPE_FLOAT,"float"],[Blockly.Msg.VARIABLES_TYPE_STRING,"String"]]),"TYPE").appendField(Blockly.Msg.LINKIT_SET_MCS_CHANNEL2_TAIL);
this.appendValueInput("DISPLAY_CHANNEL").setCheck("String");this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP)}};
Blockly.Blocks.mcs_add_channel={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendValueInput("ADD_CHANNEL").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_ADD_MCS_CHANNEL_TITLE);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP)}};
Blockly.Blocks.mcs_connected={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_CHECK_MCS_CONNECTED_TITLE);this.setOutput(!0,"Boolean");this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP)}};
Blockly.Blocks.mcs_reconnect={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_CHECK_MCS_RECONNECT_TITLE);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP)}};
Blockly.Blocks.mcs_wait_until_connected={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_MCS_WAIT_UNTIL_CONNECTED_TITLE);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP)}};
Blockly.Blocks.mcs_channel_valid={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendValueInput("CHANNEL_VALID").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_CHECK_MCS_LED_VALID_TITLE);this.setInputsInline(!0);this.setOutput(!0,"Boolean");this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP)}};
Blockly.Blocks.mcs_channel_value={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendValueInput("CHANNEL_VALUE").appendField(Blockly.Msg.LINKIT_CHECK_MCS_LED_VALUE_TITLE).setCheck("String");this.appendDummyInput().appendField(Blockly.Msg.LINKIT_CHECK_MCS_LED_VALUE_TAIL);this.setInputsInline(!0);this.setOutput(!0);this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP)}};
Blockly.Blocks.mcs_channel2_value={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendValueInput("CHANNEL2_VALUE").appendField(Blockly.Msg.LINKIT_CHECK_MCS_REMOTE_VALUE_TITLE).setAlign(Blockly.ALIGN_RIGHT).setCheck("String");this.appendDummyInput().appendField(Blockly.Msg.LINKIT_CHECK_MCS_REMOTE_VALUE_TAIL);this.appendValueInput("SET_VALUE");this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP)}};
Blockly.Blocks.mcs_process={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_MCS_PROCESS_TITLE);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP)}};
Blockly.Blocks.mcs_channel_wait_until_read_value={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendValueInput("CHANNEL").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_MCS_LED_WAIT_UNTIL_READ_VALUE_TITLE);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP)}};
Blockly.Blocks.mcs_channel_updated={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendValueInput("CHANNEL_UPDATED").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CATEGORY_LINKIT_MCS);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_MCS_LED_UPDATED);this.setInputsInline(!0);this.setOutput(!0,"Boolean");this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP)}};
Blockly.Blocks.mcslite={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCSLITE_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_SET_MCSLITE_WIFI);this.appendValueInput("DEVICEIDL").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_MCSLITE_DEVICEID);this.appendValueInput("DEVICEKEYL").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_MCSLITE_DEVICEKEY);this.appendValueInput("SERV").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_MCSLITE_SERV);
this.appendValueInput("PORT").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_MCSLITE_PORT);this.appendStatementInput("CONTENT");this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP)}};
Blockly.Blocks.linkit_wifi_wait_until_ready={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_SET_WIFI_UNTIL_READY_TITLE);this.appendValueInput("SSID").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_WIFI_SSID);this.appendValueInput("PASSWORD").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_WIFI_PASSWORD);this.setPreviousStatement(!0);
this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP)}};Blockly.Blocks.linkit_wifi_disconnect={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.CATEGORY_LINKIT_WIFI_DISCONNECT);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP)}};
Blockly.Blocks.linkit_wifi_ready_advanced={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_SET_WIFI_READY_TITLE);this.appendValueInput("SSID").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_WIFI_SSID);this.appendValueInput("PASSWORD").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_WIFI_PASSWORD);this.setOutput(!0,
"Boolean");this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP)}};Blockly.Blocks.linkit_wifi_ready={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_SET_WIFI_READY_TITLE);this.setOutput(!0,"Boolean");this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP)}};
Blockly.Blocks.linkit_wifi_ip_address={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_GET_WIFI_IP_TITLE);this.setOutput(!0,"String");this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP)}};
Blockly.Blocks.linkit_wifi={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_SET_WIFI_TITLE);this.appendValueInput("SSID").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_WIFI_SSID);this.appendValueInput("PASSWORD").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_WIFI_PASSWORD);this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP)}};
Blockly.Blocks.linkit_wifi_ignore_result={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_SET_WIFI_TITLE);this.appendValueInput("SSID").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_WIFI_SSID);this.appendValueInput("PASSWORD").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_WIFI_PASSWORD);this.setPreviousStatement(!0);
this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP)}};
Blockly.Blocks.linkit_wifi_status={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(new Blockly.FieldDropdown([[Blockly.Msg.LINKIT_SET_WIFI_STATUS_NO_SHIELD,"WL_NO_SHIELD"],[Blockly.Msg.LINKIT_SET_WIFI_STATUS_IDLE,"WL_IDLE_STATUS"],[Blockly.Msg.LINKIT_SET_WIFI_STATUS_NO_SSID_AVAIL,"WL_NO_SSID_AVAIL"],[Blockly.Msg.LINKIT_SET_WIFI_STATUS_SCAN_COMPLETED,"WL_SCAN_COMPLETED"],[Blockly.Msg.LINKIT_SET_WIFI_STATUS_CONNECTED,
"WL_CONNECTED"],[Blockly.Msg.LINKIT_SET_WIFI_STATUS_CONNECT_FAILED,"WL_CONNECT_FAILED"],[Blockly.Msg.LINKIT_SET_WIFI_STATUS_CONNECTION_LOST,"WL_CONNECTION_LOST"],[Blockly.Msg.LINKIT_SET_WIFI_STATUS_DISCONNECTED,"WL_DISCONNECTED"]]),"String");this.setOutput(!0,"String");this.setTooltip("")}};
Blockly.Blocks.linkit_lremote={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_SET_LREMOTE_HELPFUL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_SET_LREMOTE_ADD).appendField(new Blockly.FieldDropdown([[Blockly.Msg.LINKIT_SET_LREMOTE_TYPE_VERTICAL,"vertical"],[Blockly.Msg.LINKIT_SET_LREMOTE_TYPE_HORIZONTAL,"horizontal"]]),"ORIENTATION").appendField(Blockly.Msg.LINKIT_SET_LREMOTE);this.appendValueInput("DEVICEID").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_LREMOTE_DEVICEID);
this.appendValueInput("COLUMN").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_LREMOTE_COLUMN);this.appendValueInput("ROW").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LINKIT_SET_LREMOTE_ROW);this.appendStatementInput("CONTENT");this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LINKIT_SET_LREMOTE_TOOLTIP)}};
Blockly.Blocks.linkit_lremote_settext={
  init:function(){
    this.setHelpUrl(Blockly.Msg.LINKIT_LREMOTE_CONTROL_HELPFUL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LINKIT_LREMOTE_ADD)
        .appendField(Blockly.Msg.LINKIT_LREMOTE_SETTEXT);
    this.appendValueInput("NAME")
        .setCheck("String");
    this.appendValueInput("CONTENT")
        .setCheck("String")
        .appendField(Blockly.Msg.LINKIT_LREMOTE_SETTEXT_CONTENT);
    this.appendValueInput("COLUMN")
        .setCheck("Number")
        .appendField(Blockly.Msg.LINKIT_LREMOTE_SETTEXT_SITE);
    this.appendValueInput("ROW")
        .setCheck("Number");
    this.appendValueInput("WIDTH")
        .setCheck("Number")
        .appendField(Blockly.Msg.LINKIT_LREMOTE_SETTEXT_SIZE);
    this.appendValueInput("HEIGHT")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg.LINKIT_LREMOTE_COLOUR)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LINKIT_LREMOTE_COLOUR_ORANGE,"orange"],
                        [Blockly.Msg.LINKIT_LREMOTE_COLOUR_BLUE,"blue"],
                        [Blockly.Msg.LINKIT_LREMOTE_COLOUR_GREEN,"green"],
                        [Blockly.Msg.LINKIT_LREMOTE_COLOUR_PINK,"pink"],
                        [Blockly.Msg.LINKIT_LREMOTE_COLOUR_GRAY,"gray"],
                        [Blockly.Msg.LINKIT_LREMOTE_COLOUR_YELLOW,"yellow"]]),"COLOUR");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.LINKIT_LREMOTE_SETTEXT_TOOLTIP)
  }
};
Blockly.Blocks.linkit_lremote_setbuttonsquare={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_LREMOTE_CONTROL_HELPFUL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_LREMOTE_ADD).appendField(Blockly.Msg.LINKIT_LREMOTE_SETBUTTONSQUARE);this.appendValueInput("NAME").setCheck("String");this.appendValueInput("CONTENT").setCheck("String").appendField(Blockly.Msg.LINKIT_LREMOTE_SETBUTTONSQUARE_CONTENT);this.appendValueInput("COLUMN").setCheck("Number").appendField(Blockly.Msg.LINKIT_LREMOTE_SETBUTTONSQUARE_SITE);
this.appendValueInput("ROW").setCheck("Number");this.appendDummyInput();this.appendValueInput("WIDTH").setCheck("Number").appendField(Blockly.Msg.LINKIT_LREMOTE_SETBUTTONSQUARE_SIZE);this.appendValueInput("HEIGHT").setCheck("Number");this.appendDummyInput().appendField(Blockly.Msg.LINKIT_LREMOTE_COLOUR).appendField(new Blockly.FieldDropdown([[Blockly.Msg.LINKIT_LREMOTE_COLOUR_ORANGE,"orange"],[Blockly.Msg.LINKIT_LREMOTE_COLOUR_BLUE,"blue"],[Blockly.Msg.LINKIT_LREMOTE_COLOUR_GREEN,"green"],[Blockly.Msg.LINKIT_LREMOTE_COLOUR_PINK,
"pink"],[Blockly.Msg.LINKIT_LREMOTE_COLOUR_GRAY,"gray"],[Blockly.Msg.LINKIT_LREMOTE_COLOUR_YELLOW,"yellow"]]),"COLOUR");this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LINKIT_LREMOTE_SETBUTTONSQUARE_TOOLTIP)}};
Blockly.Blocks.linkit_lremote_setbuttoncircle={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_LREMOTE_CONTROL_HELPFUL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_LREMOTE_ADD).appendField(Blockly.Msg.LINKIT_LREMOTE_SETBUTTONCIRCLE);this.appendValueInput("NAME").setCheck("String");this.appendValueInput("CONTENT").setCheck("String").appendField(Blockly.Msg.LINKIT_LREMOTE_SETBUTTONCIRCLE_CONTENT);this.appendValueInput("COLUMN").setCheck("Number").appendField(Blockly.Msg.LINKIT_LREMOTE_SETBUTTONCIRCLE_SITE);
this.appendValueInput("ROW").setCheck("Number");this.appendValueInput("WIDTH").setCheck("Number").appendField(Blockly.Msg.LINKIT_LREMOTE_SETBUTTONCIRCLE_SIZE);this.appendValueInput("HEIGHT").setCheck("Number");this.appendDummyInput().appendField(Blockly.Msg.LINKIT_LREMOTE_COLOUR).appendField(new Blockly.FieldDropdown([[Blockly.Msg.LINKIT_LREMOTE_COLOUR_ORANGE,"orange"],[Blockly.Msg.LINKIT_LREMOTE_COLOUR_BLUE,"blue"],[Blockly.Msg.LINKIT_LREMOTE_COLOUR_GREEN,"green"],[Blockly.Msg.LINKIT_LREMOTE_COLOUR_PINK,
"pink"],[Blockly.Msg.LINKIT_LREMOTE_COLOUR_GRAY,"gray"],[Blockly.Msg.LINKIT_LREMOTE_COLOUR_YELLOW,"yellow"]]),"COLOUR");this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LINKIT_LREMOTE_SETBUTTONCIRCLE_TOOLTIP)}};
Blockly.Blocks.linkit_lremote_setswitch={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_LREMOTE_CONTROL_HELPFUL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_LREMOTE_ADD).appendField(Blockly.Msg.LINKIT_LREMOTE_SETSWITCH);this.appendValueInput("NAME").setCheck("String");this.appendValueInput("CONTENT").setCheck("String").appendField(Blockly.Msg.LINKIT_LREMOTE_SETSWITCH_CONTENT);this.appendValueInput("COLUMN").setCheck("Number").appendField(Blockly.Msg.LINKIT_LREMOTE_SETSWITCH_SITE);
this.appendValueInput("ROW").setCheck("Number");this.appendValueInput("WIDTH").setCheck("Number").appendField(Blockly.Msg.LINKIT_LREMOTE_SETSWITCH_SIZE);this.appendValueInput("HEIGHT").setCheck("Number");this.appendDummyInput().appendField(Blockly.Msg.LINKIT_LREMOTE_COLOUR).appendField(new Blockly.FieldDropdown([[Blockly.Msg.LINKIT_LREMOTE_COLOUR_ORANGE,"orange"],[Blockly.Msg.LINKIT_LREMOTE_COLOUR_BLUE,"blue"],[Blockly.Msg.LINKIT_LREMOTE_COLOUR_GREEN,"green"],[Blockly.Msg.LINKIT_LREMOTE_COLOUR_PINK,
"pink"],[Blockly.Msg.LINKIT_LREMOTE_COLOUR_GRAY,"gray"],[Blockly.Msg.LINKIT_LREMOTE_COLOUR_YELLOW,"yellow"]]),"COLOUR");this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LINKIT_LREMOTE_SETSWITCH_TOOLTIP)}};
Blockly.Blocks.linkit_lremote_setslider={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_LREMOTE_CONTROL_HELPFUL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_LREMOTE_ADD).appendField(Blockly.Msg.LINKIT_LREMOTE_SETSLIDER);this.appendValueInput("NAME").setCheck("String");this.appendValueInput("CONTENT").setCheck("String").appendField(Blockly.Msg.LINKIT_LREMOTE_SETSLIDER_CONTENT);this.appendValueInput("COLUMN").setCheck("Number").appendField(Blockly.Msg.LINKIT_LREMOTE_SETSLIDER_SITE);
this.appendValueInput("ROW").setCheck("Number");this.appendValueInput("WIDTH").setCheck("Number").appendField(Blockly.Msg.LINKIT_LREMOTE_SETSLIDER_SIZE);this.appendValueInput("HEIGHT").setCheck("Number");this.appendValueInput("MINIMUM").setCheck("Number").appendField(Blockly.Msg.LINKIT_LREMOTE_SETSLIDER_MINIMUM);this.appendValueInput("MAXIMUM").setCheck("Number").appendField(Blockly.Msg.LINKIT_LREMOTE_SETSLIDER_MAXIMUM);this.appendValueInput("INITIAL").setCheck("Number").appendField(Blockly.Msg.LINKIT_LREMOTE_SETSLIDER_INITIAL);
this.appendDummyInput().appendField(Blockly.Msg.LINKIT_LREMOTE_COLOUR).appendField(new Blockly.FieldDropdown([[Blockly.Msg.LINKIT_LREMOTE_COLOUR_ORANGE,"orange"],[Blockly.Msg.LINKIT_LREMOTE_COLOUR_BLUE,"blue"],[Blockly.Msg.LINKIT_LREMOTE_COLOUR_GREEN,"green"],[Blockly.Msg.LINKIT_LREMOTE_COLOUR_PINK,"pink"],[Blockly.Msg.LINKIT_LREMOTE_COLOUR_GRAY,"gray"],[Blockly.Msg.LINKIT_LREMOTE_COLOUR_YELLOW,"yellow"]]),"COLOUR");this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);
this.setTooltip(Blockly.Msg.LINKIT_LREMOTE_SETSLIDER_TOOLTIP)}};
Blockly.Blocks.linkit_lremote_setjoystick={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_LREMOTE_CONTROL_HELPFUL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_LREMOTE_ADD).appendField(Blockly.Msg.LINKIT_LREMOTE_SETJOYSTICK);this.appendValueInput("NAME").setCheck("String");this.appendValueInput("CONTENT").setCheck("String").appendField(Blockly.Msg.LINKIT_LREMOTE_SETJOYSTICK_CONTENT);this.appendValueInput("COLUMN").setCheck("Number").appendField(Blockly.Msg.LINKIT_LREMOTE_SETJOYSTICK_SITE);
this.appendValueInput("ROW").setCheck("Number");this.appendValueInput("WIDTH").setCheck("Number").appendField(Blockly.Msg.LINKIT_LREMOTE_SETJOYSTICK_SIZE);this.appendValueInput("HEIGHT").setCheck("Number");this.appendDummyInput().appendField(Blockly.Msg.LINKIT_LREMOTE_COLOUR).appendField(new Blockly.FieldDropdown([[Blockly.Msg.LINKIT_LREMOTE_COLOUR_ORANGE,"orange"],[Blockly.Msg.LINKIT_LREMOTE_COLOUR_BLUE,"blue"],[Blockly.Msg.LINKIT_LREMOTE_COLOUR_GREEN,"green"],[Blockly.Msg.LINKIT_LREMOTE_COLOUR_PINK,
"pink"],[Blockly.Msg.LINKIT_LREMOTE_COLOUR_GRAY,"gray"],[Blockly.Msg.LINKIT_LREMOTE_COLOUR_YELLOW,"yellow"]]),"COLOUR");this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LINKIT_LREMOTE_SETJOYSTICK_TOOLTIP)}};
Blockly.Blocks.linkit_lremote_connect_status={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_LREMOTE_CONNECT_STATUS_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_LREMOTE_CONNECT_STATUS);this.setOutput(!0,"Boolean");this.setTooltip(Blockly.Msg.LINKIT_LREMOTE_CONNECT_STATUS_TOOLTIP)}};
Blockly.Blocks.linkit_lremote_process={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_LREMOTE_PROCESS_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_LREMOTE_PROCESS);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LINKIT_LREMOTE_PROCESS_TOOLTIP)}};
function getLRemoteControls(a){var b=[];Blockly.mainWorkspace.getAllBlocks().forEach(function(d){!d.isInFlyout&&a(d.type)&&(console.log("type="+d.type),d=Blockly.Arduino.valueToCode(d,"NAME",Blockly.Arduino.ORDER_ATOMIC)||"",d=d.slice(1,-1),d=d.trim(),console.log("blockName="+d),b.push([d,d]))});0==b.length&&b.push(["-","-"]);return b}function getLRemoteBlocks(){return getLRemoteControls(function(a){return a.includes("linkit_lremote_set")&&!a.includes("linkit_lremote_settext")})}
function getLRemoteLables(){return getLRemoteControls(function(a){return a.includes("linkit_lremote_settext")})}
function getLRemoteReadValues(){var a=[];Blockly.mainWorkspace.getAllBlocks().forEach(function(b){var d=b.type;b.isInFlyout||!d.includes("linkit_lremote_set")||d.includes("linkit_lremote_settext")||(console.log("type="+b.type),b=Blockly.Arduino.valueToCode(b,"NAME",Blockly.Arduino.ORDER_ATOMIC)||"",b=b.slice(1,-1),b=b.trim(),d.includes("linkit_lremote_setjoystick")?(console.log("joystickName="+b),a.push([b+" X",b+" X"]),a.push([b+" Y",b+" Y"])):(console.log("blockName="+b),a.push([b,b])))});0==a.length&&
a.push(["-","-"]);return a}Blockly.Blocks.linkit_lremote_is_written={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_LREMOTE_IS_WRITTEN_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(new Blockly.FieldDropdown(getLRemoteBlocks),"NAME").appendField(Blockly.Msg.LINKIT_LREMOTE_IS_WRITTEN);this.setInputsInline(!0);this.setOutput(!0,"Boolean");this.setTooltip(Blockly.Msg.LINKIT_LREMOTE_IS_WRITTEN_TOOLTIP)}};
Blockly.Blocks.linkit_lremote_read_value={init:function(){this.setHelpUrl(Blockly.Msg.LINKIT_LREMOTE_READ_VALUE_HELPURL);this.setColour(Blockly.Blocks.linkit.HUE);this.appendDummyInput().appendField(Blockly.Msg.LINKIT_LREMOTE_READ_FROM).appendField(new Blockly.FieldDropdown(getLRemoteReadValues),"NAME").appendField(Blockly.Msg.LINKIT_LREMOTE_READ_VALUE);this.setInputsInline(!0);this.setOutput(!0,["Number","String"]);this.setTooltip(Blockly.Msg.LINKIT_LREMOTE_READ_VALUE_TOOLTIP)}};
Blockly.Blocks.linkit_lremote_update_textlabel={
  init:function(){
    this.setHelpUrl(Blockly.Msg.LINKIT_LREMOTE_UPDATE_TEXTLABEL_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LINKIT_LREMOTE_UPDATE_TEXTLABEL)
        .appendField(new Blockly.FieldDropdown(getLRemoteLables),"NAME");
    this.appendDummyInput()
        .appendField(Blockly.Msg.LINKIT_LREMOTE_TEXTLABEL);
    this.appendValueInput("CONTENT")
        .setCheck("String")
        .appendField(Blockly.Msg.LINKIT_LREMOTE_UPDATE_TEXTLABEL_CONTENT);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.LINKIT_LREMOTE_UPDATE_TEXTLABEL_TOOLTIP)
  }
};
Blockly.Blocks.ethernet={};Blockly.Blocks.ethernet.HUE=225;Blockly.Blocks.ethernet.image=filepath.media+"/ethernet.jpg";
Blockly.Blocks.ethernet_begin_dhcp={init:function(){this.setHelpUrl(Blockly.Msg.ETHERNET_BEGIN_HELPURL);this.setColour(Blockly.Blocks.ethernet.HUE);this.appendDummyInput().appendField(Blockly.Msg.ETHERNET_BEGIN_DHCP_TITLE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.ETHERNET_VERSION_1,""],[Blockly.Msg.ETHERNET_VERSION_2,"2"]]),"VERSION");this.appendValueInput("MAC_ADDRESS").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.MAC_ADDRESS);this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.ETHERNET_BEGIN_DHCP_TOOLTIP)}};
Blockly.Blocks.ethernet_mac_address={init:function(){this.setHelpUrl(Blockly.Msg.ETHERNET_BEGIN_HELPURL);this.setColour(Blockly.Blocks.ethernet.HUE);this.appendDummyInput().appendField(new Blockly.FieldTextInput("DE"),"MAC_ADDRESS_1").appendField("-").appendField(new Blockly.FieldTextInput("AD"),"MAC_ADDRESS_2").appendField("-").appendField(new Blockly.FieldTextInput("BE"),"MAC_ADDRESS_3").appendField("-").appendField(new Blockly.FieldTextInput("EF"),"MAC_ADDRESS_4").appendField("-").appendField(new Blockly.FieldTextInput("FE"),
"MAC_ADDRESS_5").appendField("-").appendField(new Blockly.FieldTextInput("ED"),"MAC_ADDRESS_6");this.setInputsInline(!0);this.setOutput(!0,"String");this.setTooltip(Blockly.Msg.ETHERNET_MAC_ADDRESS_TOOLTIP)}};Blockly.Blocks.ethernet_localip={init:function(){this.setHelpUrl(Blockly.Msg.ETHERNET_LOCALIP_HELPURL);this.setColour(Blockly.Blocks.ethernet.HUE);this.appendDummyInput().appendField(Blockly.Msg.ETHERNET_LOCALIP_TITLE);this.setOutput(!0,"String");this.setTooltip(Blockly.Msg.ETHERNET_LOCALIP_TOOLTIP)}};
Blockly.Blocks.ethernet_available={init:function(){this.setHelpUrl(Blockly.Msg.ETHERNET_AVAILABLE_HELPURL);this.setColour(Blockly.Blocks.ethernet.HUE);this.appendDummyInput().appendField(Blockly.Msg.ETHERNET_AVAILABLE_TITLE);this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.ETHERNET_AVAILABLE_TOOLTIP)}};
Blockly.Blocks.ethernet_connected={init:function(){this.setHelpUrl(Blockly.Msg.ETHERNET_CONNECTED_HELPURL);this.setColour(Blockly.Blocks.ethernet.HUE);this.appendDummyInput().appendField(Blockly.Msg.ETHERNET_CONNECTED_TITLE);this.setOutput(!0,"Boolean");this.setTooltip(Blockly.Msg.ETHERNET_CONNECTED_TOOLTIP)}};
Blockly.Blocks.ethernet_connect={init:function(){this.setHelpUrl(Blockly.Msg.ETHERNET_CONNECT_HELPURL);this.setColour(Blockly.Blocks.ethernet.HUE);this.appendDummyInput().appendField(Blockly.Msg.ETHERNET_CONNECT_TITLE);this.appendValueInput("SERVER").setCheck("String").appendField(Blockly.Msg.SERVER);this.appendDummyInput().appendField(Blockly.Msg.PORT).appendField(new Blockly.FieldTextInput("80"),"PORT");this.setOutput(!0,"Number");this.setInputsInline(!0);this.setTooltip(Blockly.Msg.ETHERNET_CONNECT_TOOLTIP)}};
Blockly.Blocks.ethernet_print={init:function(){this.setHelpUrl(Blockly.Msg.ETHERNET_CLIENT_PRINT_HELPURL);this.setColour(Blockly.Blocks.ethernet.HUE);this.appendDummyInput().appendField(Blockly.Msg.ETHERNET_CLIENT_PRINT_TITLE);this.appendValueInput("TEXT").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.TEXT);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.ETHERNET_CLIENT_PRINT_TOOLTIP)}};
Blockly.Blocks.ethernet_println={init:function(){this.setHelpUrl(Blockly.Msg.ETHERNET_CLIENT_PRINTLN_HELPURL);this.setColour(Blockly.Blocks.ethernet.HUE);this.appendDummyInput().appendField(Blockly.Msg.ETHERNET_CLIENT_PRINTLN_TITLE);this.appendValueInput("TEXT").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.TEXT);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.ETHERNET_CLIENT_PRINTLN_TOOLTIP)}};
Blockly.Blocks.ethernet_stop={init:function(){this.setHelpUrl(Blockly.Msg.ETHERNET_STOP_HELPURL);this.setColour(Blockly.Blocks.ethernet.HUE);this.appendDummyInput().appendField(Blockly.Msg.ETHERNET_STOP_TITLE);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.ETHERNET_STOP_TOOLTIP)}};
Blockly.Blocks.ethernet_read={init:function(){this.setHelpUrl(Blockly.Msg.ETHERNET_READ_HELPURL);this.setColour(Blockly.Blocks.ethernet.HUE);this.appendDummyInput().appendField(Blockly.Msg.ETHERNET_READ_TITLE);this.setOutput(!0,"String");this.setTooltip(Blockly.Msg.ETHERNET_READ_TOOLTIP)}};
Blockly.Blocks.ethernet_get_request={init:function(){this.setHelpUrl(Blockly.Msg.ETHERNET_GET_REQUEST_HELPURL);this.setColour(Blockly.Blocks.ethernet.HUE);this.appendDummyInput().appendField(Blockly.Msg.ETHERNET_GET_REQUEST_TITLE);this.appendValueInput("URL").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.URL);this.appendValueInput("SERVER").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.SERVER);this.setPreviousStatement(!0,null);this.setNextStatement(!0,
null);this.setTooltip(Blockly.Msg.ETHERNET_GET_REQUEST_TOOLTIP)}};
Blockly.Blocks.ethernet_post_request={init:function(){this.setHelpUrl(Blockly.Msg.ETHERNET_POST_REQUEST_HELPURL);this.setColour(Blockly.Blocks.ethernet.HUE);this.appendDummyInput().appendField(Blockly.Msg.ETHERNET_POST_REQUEST_TITLE);this.appendValueInput("URL").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.URL);this.appendValueInput("SERVER").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.SERVER);this.appendValueInput("POST_DATA").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ETHERNET_POST_DATA);
this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setTooltip(Blockly.Msg.ETHERNET_POST_REQUEST_TOOLTIP)}};

Blockly.Msg["LOOPS_HUE"]=120;

Blockly.Blocks.mpu9250={};
Blockly.Blocks.mpu9250.HUE=70;
Blockly.Blocks.mpu9250_read_acc={init:function(){this.setHelpUrl(Blockly.Msg.MPU9250_HELPURL);this.setColour(Blockly.Blocks.mpu9250.HUE);this.setTooltip(Blockly.Msg.MPU9250_TOOLTIP);this.appendDummyInput().appendField(Blockly.Msg.MPU9250_TITLE).appendField(new Blockly.FieldDropdown([["MPU9250","DUMMY"]]),"SENSOR");this.appendDummyInput().appendField(Blockly.Msg.SIGNAL_PIN).appendField(new Blockly.FieldDropdown([["I2C","PIN"]]),"PIN");this.appendDummyInput().appendField(Blockly.Msg.MPU9250_ACC).appendField(new Blockly.FieldDropdown([[Blockly.Msg.MPU9250_READ_X,"X"],
[Blockly.Msg.MPU9250_READ_Y,"Y"],[Blockly.Msg.MPU9250_READ_Z,"Z"]]),"AXIS").appendField(Blockly.Msg.MPU9250_ACC_UNIT);this.setInputsInline(!0);this.setOutput(!0,"Number")},onchange:function(){}};
Blockly.Blocks.mpu9250_read_gyro={init:function(){this.setHelpUrl(Blockly.Msg.MPU9250_HELPURL);this.setColour(Blockly.Blocks.mpu9250.HUE);this.setTooltip(Blockly.Msg.MPU9250_TOOLTIP);this.appendDummyInput().appendField(Blockly.Msg.MPU9250_TITLE).appendField(new Blockly.FieldDropdown([["MPU9250","DUMMY"]]),"SENSOR");this.appendDummyInput().appendField(Blockly.Msg.SIGNAL_PIN).appendField(new Blockly.FieldDropdown([["I2C","PIN"]]),"PIN");this.appendDummyInput().appendField(Blockly.Msg.MPU9250_GYRO).appendField(new Blockly.FieldDropdown([[Blockly.Msg.MPU9250_READ_X,
"X"],[Blockly.Msg.MPU9250_READ_Y,"Y"],[Blockly.Msg.MPU9250_READ_Z,"Z"]]),"AXIS").appendField(Blockly.Msg.MPU9250_GYRO_UNIT);this.setInputsInline(!0);this.setOutput(!0,"Number")},onchange:function(){}};
Blockly.Blocks.mpu9250_read_attitude={init:function(){this.setHelpUrl(Blockly.Msg.MPU9250_HELPURL);this.setColour(Blockly.Blocks.adxl.HUE);this.setTooltip(Blockly.Msg.MPU9250_TOOLTIP);this.appendDummyInput().appendField(Blockly.Msg.MPU9250_TITLE).appendField(new Blockly.FieldDropdown([["MPU9250","DUMMY"]]),"SENSOR");this.appendDummyInput().appendField(Blockly.Msg.SIGNAL_PIN).appendField(new Blockly.FieldDropdown([["I2C","PIN"]]),"PIN");this.appendDummyInput().appendField(Blockly.Msg.MPU9250_ATTITUDE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.MPU9250_PITCH,
"Pitch"],[Blockly.Msg.MPU9250_ROLL,"Roll"]]),"ATTITUDE").appendField(Blockly.Msg.MPU9250_DEGREE);this.setInputsInline(!0);this.setOutput(!0,"Number")},onchange:function(){}};
Blockly.Blocks.mpu9250_read_mag={init:function(){this.setHelpUrl(Blockly.Msg.MPU9250_HELPURL);this.setColour(Blockly.Blocks.mpu9250.HUE);this.setTooltip(Blockly.Msg.MPU9250_TOOLTIP);this.appendDummyInput().appendField(Blockly.Msg.MPU9250_TITLE).appendField(new Blockly.FieldDropdown([["MPU9250","DUMMY"]]),"SENSOR");this.appendDummyInput().appendField(Blockly.Msg.SIGNAL_PIN).appendField(new Blockly.FieldDropdown([["I2C","PIN"]]),"PIN");this.appendDummyInput().appendField(Blockly.Msg.MPU9250_MAG).appendField(new Blockly.FieldDropdown([[Blockly.Msg.MPU9250_READ_X,
"X"],[Blockly.Msg.MPU9250_READ_Y,"Y"],[Blockly.Msg.MPU9250_READ_Z,"Z"]]),"AXIS").appendField(Blockly.Msg.MPU9250_MAG_UNIT);this.setInputsInline(!0);this.setOutput(!0,"Number")},onchange:function(){}};
Blockly.Blocks.mpu9250_read_north={init:function(){this.setHelpUrl(Blockly.Msg.MPU9250_HELPURL);this.setColour(Blockly.Blocks.mpu9250.HUE);this.setTooltip(Blockly.Msg.MPU9250_TOOLTIP);this.appendDummyInput().appendField(Blockly.Msg.MPU9250_TITLE).appendField(new Blockly.FieldDropdown([["MPU9250","DUMMY"]]),"SENSOR");this.appendDummyInput().appendField(Blockly.Msg.SIGNAL_PIN).appendField(new Blockly.FieldDropdown([["I2C","PIN"]]),"PIN");this.appendDummyInput().appendField(Blockly.Msg.MPU9250_NORTH);
this.setInputsInline(!0);this.setOutput(!0,"Number")},onchange:function(){}};


Blockly.Blocks.neopixel={};
Blockly.Blocks.neopixel.HUE=70;
Blockly.Blocks.neopixel.checkBlocks=function(a){
  var b=null,
      d=a.type;
      a=a.workspace.getAllBlocks();
  for(var c=0;c<a.length;c++)if("neopixel_setpixelcolor"!=a[c].type&&"neopixel_custom_setpixelcolor"!=a[c].type&&"neopixel_show"!=a[c].type&&"neopixel_setpixelcolor2"!=a[c].type||null!=b||(b=a[c].type!=d?!0:!1),"neopixel_begin"==a[c].type)return!0;return b};
Blockly.Blocks.neopixel_begin={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NEOPIXEL_BEGIN_HELPURL);
    this.setColour(Blockly.Blocks.neopixel.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.INITIALIZES_SETUP_APPENDTEXT)
        .appendField(Blockly.Msg.NEOPIXEL_TITLE)
        .appendField(Blockly.Msg.NEOPIXEL_BEGIN_NUM)
        .appendField(new Blockly.FieldTextInput("16"),"NUM");
    this.appendDummyInput()
        .appendField(Blockly.Msg.NEOPIXEL_BEGIN_PIN)
        .appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN");
    this.appendDummyInput()
        .appendField(Blockly.Msg.NEOPIXEL_BEGIN_BRIGHTNESS)
        .appendField(new Blockly.FieldTextInput("30"),"BRIGHTNESS");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.NEOPIXEL_BEGIN_TOOLTIP)},
  onchange:function(){}
};
Blockly.Blocks.neopixel_setpixelcolor={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_HELPURL);
    this.setColour(Blockly.Blocks.neopixel.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.NEOPIXEL_TITLE);
    this.appendValueInput("TARGET")
        .setCheck("Number")
        .appendField(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_TARGET);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR)
        .appendField(new Blockly.FieldColour("#00ff00"),"RGB");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_TOOLTIP)},
  onchange:function(){
    this.workspace&&(Blockly.Blocks.neopixel.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.NEOPIXEL_WARNING))
  }
};
Blockly.Blocks.neopixel_custom_setpixelcolor={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_HELPURL);
    this.setColour(Blockly.Blocks.neopixel.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.NEOPIXEL_TITLE);
    this.appendValueInput("TARGET")
        .setCheck("Number")
        .appendField(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_TARGET);
    this.appendValueInput("R")
        .setCheck("Number")
        .appendField(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_R);
    this.appendValueInput("G")
        .setCheck("Number")
        .appendField(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_G);
    this.appendValueInput("B")
        .setCheck("Number")
        .appendField(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_B);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_TOOLTIP)},
  onchange:function(){
    this.workspace&&(Blockly.Blocks.neopixel.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.NEOPIXEL_WARNING))
  }
};
Blockly.Blocks.neopixel_show={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NEOPIXEL_SHOW_HELPURL);
    this.setColour(Blockly.Blocks.neopixel.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.NEOPIXEL_TITLE)
        .appendField(Blockly.Msg.NEOPIXEL_SHOW);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.NEOPIXEL_SHOW_TOOLTIP)},
  onchange:function(){
    this.workspace&&(Blockly.Blocks.neopixel.checkBlocks(this)?this.setWarningText(null):this.setWarningText(Blockly.Msg.NEOPIXEL_WARNING))
  }
};


Blockly.Blocks.adxl={};
Blockly.Blocks.adxl.HUE=70;
Blockly.Blocks.adxl345_read={init:function(){this.setHelpUrl(Blockly.Msg.ADXL345_HELPURL);this.setColour(Blockly.Blocks.adxl.HUE);this.setTooltip(Blockly.Msg.ADXL345_TOOLTIP);this.appendDummyInput().appendField(Blockly.Msg.ADXL345_TITLE).appendField(new Blockly.FieldDropdown([["ADXL345","DUMMY"]]),"SENSOR");this.appendDummyInput().appendField(Blockly.Msg.SIGNAL_PIN).appendField(new Blockly.FieldDropdown([["I2C","PIN"]]),"PIN");this.appendDummyInput().appendField(Blockly.Msg.MESUREMENT_TYPE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.ADXL345_READ_X,"X"],
[Blockly.Msg.ADXL345_READ_Y,"Y"],[Blockly.Msg.ADXL345_READ_Z,"Z"]]),"AXIS").appendField(Blockly.Msg.ADXL345_UNIT);this.setInputsInline(!0);this.setOutput(!0,"Number")},onchange:function(){}};
Blockly.Blocks.adxl345_read_attitude={init:function(){this.setHelpUrl(Blockly.Msg.ADXL345_HELPURL);this.setColour(Blockly.Blocks.adxl.HUE);this.setTooltip(Blockly.Msg.ADXL345_TOOLTIP);this.appendDummyInput().appendField(Blockly.Msg.ADXL345_TITLE).appendField(new Blockly.FieldDropdown([["ADXL345","DUMMY"]]),"SENSOR");this.appendDummyInput().appendField(Blockly.Msg.SIGNAL_PIN).appendField(new Blockly.FieldDropdown([["I2C","PIN"]]),"PIN");this.appendDummyInput().appendField(Blockly.Msg.ADXL345_ATTITUDE).appendField(new Blockly.FieldDropdown([[Blockly.Msg.ADXL345_PITCH,
"Pitch"],[Blockly.Msg.ADXL345_ROLL,"Roll"]]),"ATTITUDE").appendField(Blockly.Msg.ADXL345_DEGREE);this.setInputsInline(!0);this.setOutput(!0,"Number")},onchange:function(){}};
Blockly.Blocks.adxl345_detect={init:function(){this.setHelpUrl(Blockly.Msg.ADXL345_HELPURL);this.setColour(Blockly.Blocks.adxl.HUE);this.appendDummyInput().appendField(Blockly.Msg.ADXL345_TITLE).appendField(new Blockly.FieldDropdown([["ADXL345","DUMMY"]]),"SENSOR").appendField(Blockly.Msg.ADXL345_DETECT);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0)},onchange:function(){}};
Blockly.Blocks.adxl345_gesture_detected={init:function(){this.setHelpUrl(Blockly.Msg.ADXL345_HELPURL);this.setColour(Blockly.Blocks.adxl.HUE);this.appendDummyInput().appendField(Blockly.Msg.ADXL345_TITLE).appendField(new Blockly.FieldDropdown([["ADXL345","DUMMY"]]),"SENSOR").appendField(Blockly.Msg.ADXL345_GESTURE_DETECTED);this.appendDummyInput().appendField(new Blockly.FieldDropdown([[Blockly.Msg.ADXL345_TAP,"Tap"],[Blockly.Msg.ADXL345_DOUBLE_TAP,"DoubleTap"],[Blockly.Msg.ADXL345_MOTION,"Activity"]]),
"GESTURE");this.setInputsInline(!0);this.setOutput(!0,"Boolean")},onchange:function(){}};Blockly.Blocks.serial={};Blockly.Blocks.serial.HUE=200;
Blockly.Blocks.serial_init={init:function(){this.setHelpUrl(Blockly.Msg.SERIAL_INIT_HELPURL);this.setColour(Blockly.Blocks.serial.HUE);this.appendDummyInput().appendField(Blockly.Msg.SERIAL_INIT).appendField(new Blockly.FieldDropdown([["9600","9600"],["19200","19200"],["38400","38400"],["57600","57600"],["115200","115200"],["230400","230400"],["460800","460800"],["921600","921600"],["4800","4800"]]),"SPEED");this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.SERIAL_INIT_TOOLTIP)}};
Blockly.Blocks.serial_print={
  init:function(){
    this.setHelpUrl(Blockly.Msg.SERIAL_PRINT_HELPURL);
    this.setColour(Blockly.Blocks.serial.HUE);
    this.appendValueInput("CONTENT")
        .setCheck(["Number","String","Boolean"])
        .appendField(Blockly.Msg.SERIAL_PRINT_APPENDTEXT);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.SERIAL_PRINT_TOOLTIP)
  }
};
Blockly.Blocks.serial_read={init:function(){this.setHelpUrl(Blockly.Msg.SERIAL_READ_HELPURL);this.setColour(Blockly.Blocks.serial.HUE);this.appendDummyInput().appendField(Blockly.Msg.SERIAL_READ_APPENDTEXT);this.setOutput(!0,["Number","String"]);this.setTooltip(Blockly.Msg.SERIAL_READ_TOOLTIP)}};
Blockly.Blocks.serial_byte_number={init:function(){this.setHelpUrl(Blockly.Msg.SERIAL_READ_HELPURL);this.setColour(Blockly.Blocks.serial.HUE);this.appendDummyInput().appendField(Blockly.Msg.SERIAL_BYTE_NUMBER_TEXT1).appendField(new Blockly.FieldDropdown([["0","48"],["1","49"],["2","50"],["3","51"],["4","52"],["5","53"],["6","54"],["7","55"],["8","56"],["9","57"]]),"NUM").appendField(Blockly.Msg.SERIAL_BYTE_NUMBER_TEXT2);this.setOutput(!0,"NUMBER");this.setTooltip(Blockly.Msg.SERIAL_READ_TOOLTIP)}};
Blockly.Blocks.serial_available={init:function(){this.setHelpUrl(Blockly.Msg.SERIAL_AVAILABLE_HELPURL);this.setColour(Blockly.Blocks.serial.HUE);this.appendDummyInput().appendField(Blockly.Msg.SERIAL_AVAILABLE_APPENDTEXT);this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.SERIAL_AVAILABLE_TOOLTIP)}};
Blockly.Blocks.serial_println={init:function(){this.setHelpUrl(Blockly.Msg.SERIAL_PRINTLN_HELPURL);this.setColour(Blockly.Blocks.serial.HUE);this.appendValueInput("CONTENT").setCheck(["Number","String","Boolean"]).appendField(Blockly.Msg.SERIAL_PRINTLN_APPENDTEXT);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.SERIAL_PRINTLN_TOOLTIP)}};
