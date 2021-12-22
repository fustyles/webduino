/**
 * @license
 * Copyright 2021 Taiwan (ChungYi Fu)
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview my Switch.
 * @author https://www.facebook.com/francefu/
 * @Update 12/22/2021 11:00 (Taiwan Standard Time)
 */

Blockly.Msg["MYSWITCH_TITLE"] = "Switch";
Blockly.Msg["MYSWITCH_VALUE"] = "Value";
Blockly.Msg["MYSWITCH_CASE"] = "Case";
Blockly.Msg["MYSWITCH_STATEMENT"] = "Statement";
Blockly.Msg["MYSWITCH_DEFAULT"] = "Default";
 
 Blockly.defineBlocksWithJsonArray([
	{type:"mySwitch"
	,message0:Blockly.Msg["MYSWITCH_TITLE"]
	,message1:Blockly.Msg["MYSWITCH_VALUE"] + " %1"	
	,args1:[{type:"input_value",name:"VALUE",check:null,align:"RIGHT"}]
	,message2:Blockly.Msg["MYSWITCH_CASE"] + " %1"
	,args2:[{type:"input_value",name:"CASE0",check:null,align:"RIGHT"}]
	,message3:Blockly.Msg["MYSWITCH_STATEMENT"] + " %1"
	,args3:[{type:"input_statement",name:"DO0",align:"RIGHT"}]
	,previousStatement:null
	,nextStatement:null
	,style:"logic_blocks"
	,mutator:"mySwitch_mutator"
	}
	,{type:"mySwitch_switch"
	,message0:Blockly.Msg["MYSWITCH_CASE"]
	,nextStatement:null
	,enableContextMenu:!1
	,style:"logic_blocks"
	}
	,{type:"mySwitch_case"
	,message0:Blockly.Msg["MYSWITCH_CASE"]
	,previousStatement:null
	,nextStatement:null
	,enableContextMenu:!1
	,style:"logic_blocks"
	}
	,{type:"mySwitch_default"
	,message0:Blockly.Msg["MYSWITCH_DEFAULT"]
	,previousStatement:null
	,enableContextMenu:!1
	,style:"logic_blocks"
	}
]);

Blockly.Constants.Logic.mySwitch_MUTATOR_MIXIN={
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
		var b=a.newBlock("mySwitch_switch");
		b.initSvg();
		for(var c=b.nextConnection,d=1;d<=this.caseCount_;d++){
			var e=a.newBlock("mySwitch_case");
			e.initSvg();
			c.connect(e.previousConnection);
			c=e.nextConnection
		}
		this.defaultCount_&&(a=a.newBlock("mySwitch_default"),a.initSvg(),c.connect(a.previousConnection));
		return b
	}
	,compose:function(a){
		a=a.nextConnection.targetBlock();
		this.defaultCount_=this.caseCount_=0;
		for(var b=[null],c=[null],d=null;a&&!a.isInsertionMarker();){
			switch(a.type){
				case "mySwitch_case":
					this.caseCount_++;
					b.push(a.valueConnection_);
					c.push(a.statementConnection_);
					break;
				case "mySwitch_default":
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
				case "mySwitch_case":
					var c=this.getInput("CASE"+b),d=this.getInput("DO"+b);
					a.valueConnection_=c&&c.connection.targetConnection;
					a.statementConnection_=d&&d.connection.targetConnection;
					b++;
					break;
				case "mySwitch_default":
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
			.appendField(Blockly.Msg["MYSWITCH_CASE"])
			.setAlign(Blockly.ALIGN_RIGHT)
		,this.appendStatementInput("DO"+a)
			.appendField(Blockly.Msg["MYSWITCH_STATEMENT"])
			.setAlign(Blockly.ALIGN_RIGHT);
		this.defaultCount_&&this.appendStatementInput("DEFAULT")
			.appendField(Blockly.Msg["MYSWITCH_DEFAULT"])
			.setAlign(Blockly.ALIGN_RIGHT)
	}
	,reconnectChildBlocks_:function(a,b,c){
		for(var d=1;d<=this.caseCount_;d++)
			Blockly.Mutator.reconnect(a[d],this,"CASE"+d),Blockly.Mutator.reconnect(b[d],this,"DO"+d);
		Blockly.Mutator.reconnect(c,this,"DEFAULT")
	}
};

Blockly.Extensions.registerMutator("mySwitch_mutator",Blockly.Constants.Logic.mySwitch_MUTATOR_MIXIN,null,["mySwitch_case","mySwitch_default"]);
