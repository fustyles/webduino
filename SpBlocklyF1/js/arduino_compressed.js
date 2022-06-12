/*
@license
Copyright 2022 Taiwan (ChungYi Fu)
SPDX-License-Identifier: Apache-2.0

@fileoverview Blocklyduino F1 (online)
@author https://www.facebook.com/francefu/
@Update 1/1/2022 00:00 (Taiwan Standard Time)
*/

  'use strict';

Blockly.Arduino=new Blockly.Generator("Arduino");
Blockly.Arduino.addReservedWords("setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger, constants,floating,point,void,bookean,char,unsigned,byte,int,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts,map,mapFloat");

Blockly.Arduino.ORDER_ATOMIC=0;Blockly.Arduino.ORDER_NEW=1.1;Blockly.Arduino.ORDER_MEMBER=1.2;Blockly.Arduino.ORDER_FUNCTION_CALL=2;Blockly.Arduino.ORDER_INCREMENT=3;Blockly.Arduino.ORDER_DECREMENT=3;Blockly.Arduino.ORDER_BITWISE_NOT=4.1;Blockly.Arduino.ORDER_UNARY_PLUS=4.2;Blockly.Arduino.ORDER_UNARY_NEGATION=4.3;Blockly.Arduino.ORDER_LOGICAL_NOT=4.4;Blockly.Arduino.ORDER_TYPEOF=4.5;Blockly.Arduino.ORDER_VOID=4.6;Blockly.Arduino.ORDER_DELETE=4.7;Blockly.Arduino.ORDER_AWAIT=4.8;Blockly.Arduino.ORDER_EXPONENTIATION=5;Blockly.Arduino.ORDER_MULTIPLICATION=5.1;Blockly.Arduino.ORDER_DIVISION=5.2;Blockly.Arduino.ORDER_MODULUS=5.3;Blockly.Arduino.ORDER_SUBTRACTION=6.1;Blockly.Arduino.ORDER_ADDITION=6.2;Blockly.Arduino.ORDER_BITWISE_SHIFT=7;Blockly.Arduino.ORDER_RELATIONAL=8;Blockly.Arduino.ORDER_IN=8;Blockly.Arduino.ORDER_INSTANCEOF=8;Blockly.Arduino.ORDER_EQUALITY=9;Blockly.Arduino.ORDER_BITWISE_AND=10;Blockly.Arduino.ORDER_BITWISE_XOR=11;Blockly.Arduino.ORDER_BITWISE_OR=12;Blockly.Arduino.ORDER_LOGICAL_AND=13;Blockly.Arduino.ORDER_LOGICAL_OR=14;Blockly.Arduino.ORDER_CONDITIONAL=15;Blockly.Arduino.ORDER_ASSIGNMENT=16;Blockly.Arduino.ORDER_YIELD=17;Blockly.Arduino.ORDER_COMMA=18;Blockly.Arduino.ORDER_NONE=99;

Blockly.Arduino.ORDER_OVERRIDES=[[Blockly.Arduino.ORDER_FUNCTION_CALL,Blockly.Arduino.ORDER_MEMBER],[Blockly.Arduino.ORDER_FUNCTION_CALL,Blockly.Arduino.ORDER_FUNCTION_CALL],[Blockly.Arduino.ORDER_MEMBER,Blockly.Arduino.ORDER_MEMBER],[Blockly.Arduino.ORDER_MEMBER,Blockly.Arduino.ORDER_FUNCTION_CALL],[Blockly.Arduino.ORDER_LOGICAL_NOT,Blockly.Arduino.ORDER_LOGICAL_NOT],[Blockly.Arduino.ORDER_MULTIPLICATION,Blockly.Arduino.ORDER_MULTIPLICATION],[Blockly.Arduino.ORDER_ADDITION,
Blockly.Arduino.ORDER_ADDITION],[Blockly.Arduino.ORDER_LOGICAL_AND,Blockly.Arduino.ORDER_LOGICAL_AND],[Blockly.Arduino.ORDER_LOGICAL_OR,Blockly.Arduino.ORDER_LOGICAL_OR]];
Blockly.Arduino.isInitialized=!1;

var profile={common:{number_type:"Number Byte Unsigned_Int Long Unsigned_Long Word Char Float Double Volatile_Int".split(" ")},arduino:{description:"Arduino standard-compatible board",digital:[["0 - UART","0"],["1 - UART","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8 - I2C","8"],["9 - I2C","9"],["10 - SPI","10"],["11 - SPI","11"],["12 - SPI","12"],["13 - SPI","13"],["14","14"],["15","15"],["16","16"],["17","17"]],grove_digital:[["D2","2"],["D3","3"],["D4","4"],["D5","5"],["D6",
"6"],["D7","7"],["D8","8"],["D10","10"],["D11","11"],["D12","12"],["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"]],analog:[["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"],["A6","A6"],["A7","A7"]],grove_analog:[["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"]],pwm:[["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"],["14","14"],["15","15"],["16","16"],["17","17"]],serial:9600,tone:[["C:Do",
"262"],["D:Re","294"],["E:Mi","330"],["F:Fa","349"],["G:So","392"],["A:La","440"],["B:Ti","494"],["C:Do","523"]],lcd:[["-","-"],["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"],["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"]],dht:[["DHT11","DHT11"],["DHT21","DHT21"],["DHT22","DHT22"]],i2c_matrix_type:[["8x8","8x8matrix"],["16x8","8x16matrix"],["bi_color8x8","BicolorMatrix"]],
led_backpack_address:[["0x70","0x70"],["0x71","0x71"],["0x72","0x72"],["0x73","0x73"]],blynk_merge_index:[["0","0"],["1","1"],["2","2"]],shield_bot_sensor:[["1","1"],["2","2"],["3","3"],["4","4"],["5","5"]],interrupt:[["6","6"],["1","1"],["2","2"],["3","3"]],ir_remote_button:[["Power","POWER"],["A","A"],["B","B"],["C","C"],["Up","UP"],["Down","DOWN"],["Left","LEFT"],["Right","RIGHT"],["Select","SELECT"]]},arduino_mega:{description:"Arduino Mega-compatible board",analog:[["A0","A0"],["A1","A1"],["A2",
"A2"],["A3","A3"],["A4","A4"],["A5","A5"],["A6","A6"],["A7","A7"],["A8","A8"],["A9","A9"],["A10","A10"],["A11","A11"],["A12","A12"],["A13","A13"],["A14","A14"],["A15","A15"]]}};profile["default"]=profile.arduino;

Blockly.Arduino.init=function(a){

	Object.getPrototypeOf(this).init.call(this);
	
	this.nameDB_?this.nameDB_.reset():this.nameDB_=new Blockly.Names(this.RESERVED_WORDS_);
	this.nameDB_.setVariableMap(a.getVariableMap());
	this.nameDB_.populateVariables(a);
	this.nameDB_.populateProcedures(a);
	
	this.variableDB_?this.variableDB_.reset():this.variableDB_=new Blockly.Names(this.RESERVED_WORDS_);
	this.variableDB_.setVariableMap(a.getVariableMap());
	this.variableDB_.populateVariables(a);
	this.variableDB_.populateProcedures(a);
	
	this.definitions_=Object.create(null);
	this.setups_=Object.create(null);
	this.functions_=Object.create(null);

	this.isInitialized=!0	
};

Blockly.Arduino.finish=function(a){
	a="  "+a.replace(/\n/g,"\n");
	a=a.replace(/\n\s+$/,"\n");
	a="void loop() \n{\n"+a+"\n}";
	var b=[],c=[];
	for(e in Blockly.Arduino.definitions_){
		var d=Blockly.Arduino.definitions_[e];
		d.match(/^#include/)?b.push(d):c.push(d)
	}
	d=[];
	for(e in Blockly.Arduino.setups_)
		d.push(Blockly.Arduino.setups_[e]);
	var f=[];
	for(e in Blockly.Arduino.functions_)
		f.push(Blockly.Arduino.functions_[e]);		
	var e=new Date((new Date).getTime());
	b=b.join("\n")+"\n\n"+c.join("\n")+"\n\nvoid setup() \n{\n  "+d.join("\n  ")+"\n}";
	b=b.replace(/\n\n+/g,"\n\n").replace(/\n*$/,"\n\n")+a+"\n\n"+f.join("\n\n");
	b=b.replace(/\n\n+/g,"\n\n").replace(/\n*$/,"\n\n");
	
	this.isInitialized=!1;
	this.nameDB_.reset();
	this.variableDB_.reset();
	
	return b
};
Blockly.Arduino.scrubNakedValue=function(a){return a+";\n"};
Blockly.Arduino.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/\$/g,"\\$").replace(/'/g,"\\'");return'"'+a+'"'};
Blockly.Arduino.quote_quotationmark_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/\$/g,"\\$").replace(/'/g,"\\'");return"'"+a+"'"};
Blockly.Arduino.scrub_=function(a,b){
	if(null===b)return"";
	var c="";
	if(!a.outputConnection||!a.outputConnection.targetConnection){
		var d=a.getCommentText();
		d&&(c+=Blockly.Arduino.prefixLines(d,"// ")+"\n");
		for(var e=0;e<a.inputList.length;e++)
			a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=Blockly.Arduino.allNestedComments(d))&&(c+=Blockly.Arduino.prefixLines(d,"// "))
	}
	e=a.nextConnection&&a.nextConnection.targetBlock();
	e=Blockly.Arduino.blockToCode(e);
	return c+b+e
};


Blockly.Arduino.initializes={};
Blockly.Arduino.initializes_setup=function(){var a=Blockly.Arduino.statementToCode(this,"CONTENT");a=a.replace(/(^\s+)|(\s+$)/g,"");
	Blockly.Arduino.setups_.manual_add=a;
	return ""
};
Blockly.Arduino.initializes_loop=function(){
	var a=Blockly.Arduino.statementToCode(this,"CONTENT");
	return a=a.replace(/(^\s+)|(\s+$)/g,"")
};
Blockly.Arduino.initializes_temp=function(){
	return ""
};


Blockly.Arduino.lists={};
Blockly.Arduino.lists_create_empty=function(a){return["{}",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.lists_create_with=function(a){
	for(var b=Array(a.itemCount_),c=0;c<a.itemCount_;c++)
		b[c]=Blockly.Arduino.valueToCode(a,"ADD"+c,Blockly.Arduino.ORDER_NONE)||"null";
	return["{"+b.join(", ")+"}",Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino.lists_repeat=function(a){var b=Blockly.Arduino.provideFunction_("listsRepeat",["function "+Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_+"(value, n) {","  var array = {};","  for (int i = 0; i < n; i++) {","    array[i] = value;","  }","  return array;","}"]),c=Blockly.Arduino.valueToCode(a,"ITEM",Blockly.Arduino.ORDER_NONE)||"null";a=Blockly.Arduino.valueToCode(a,"NUM",Blockly.Arduino.ORDER_NONE)||"0";return[b+"("+c+", "+a+")",Blockly.Arduino.ORDER_FUNCTION_CALL]};
Blockly.Arduino.lists_length=function(a){var v=Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_MEMBER)||"";return["sizeof("+v+")/sizeof("+v+"[0])",Blockly.Arduino.ORDER_MEMBER]};
Blockly.Arduino.lists_isEmpty=function(a){return["!"+"sizeof("+(Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_MEMBER)||"''")+")",Blockly.Arduino.ORDER_LOGICAL_NOT]};
Blockly.Arduino.lists_indexOf=function(a){
	var b="FIRST"==a.getFieldValue("END")?true:false;
	var c=Blockly.Arduino.valueToCode(a,"FIND",Blockly.Arduino.ORDER_NONE);
	var d=Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_MEMBER);
	if (b==true)
		var code = d+"["+c+"]";
	else
		var code = d+"[(sizeof("+d+")/sizeof("+d+"[0])-1)-"+c+"]";		
	return [code, Blockly.Arduino.ORDER_MEMBER];
};
Blockly.Arduino.lists_getIndex=function(a){
	var b=a.getFieldValue("MODE")||"GET",c=a.getFieldValue("WHERE")||"FROM_START",d=Blockly.Arduino.valueToCode(a,"VALUE","RANDOM"==c?Blockly.Arduino.ORDER_NONE:Blockly.Arduino.ORDER_MEMBER)||"[]";
	switch(c){
		case "FIRST":
			if("GET"==b)return[d+"[0]",Blockly.Arduino.ORDER_MEMBER];
			if("GET_REMOVE"==b)return[d+".shift()",Blockly.Arduino.ORDER_MEMBER];
			if("REMOVE"==b)return d+".shift();\n";
			break;
		case "LAST":
			if("GET"==b)return[d+".slice(-1)[0]",Blockly.Arduino.ORDER_MEMBER];
			if("GET_REMOVE"==b)return[d+".pop()",Blockly.Arduino.ORDER_MEMBER];
			if("REMOVE"==b)return d+".pop();\n";
			break;
		case "FROM_START":
			a=Blockly.Arduino.valueToCode(a,"AT",Blockly.Arduino.ORDER_NONE);
			if("GET"==b)return[d+"["+a+"]",Blockly.Arduino.ORDER_MEMBER];
			if("GET_REMOVE"==b)return[d+".splice("+a+", 1)[0]",Blockly.Arduino.ORDER_FUNCTION_CALL];
			if("REMOVE"==b)return d+".splice("+a+", 1);\n";
			break;
		case "FROM_END":
			a=Blockly.Arduino.valueToCode(a,"AT",Blockly.Arduino.ORDER_NONE);
			if("GET"==b)return[d+".slice("+a+")[0]",Blockly.Arduino.ORDER_FUNCTION_CALL];
			if("GET_REMOVE"==b)return[d+".splice("+a+", 1)[0]",Blockly.Arduino.ORDER_FUNCTION_CALL];
			if("REMOVE"==b)return d+".splice("+a+", 1);";
			break;
		case "RANDOM":
			d=Blockly.Arduino.provideFunction_("listsGetRandomItem",["function "+Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_+"(list, remove) {","  var x = Math.floor(Math.random() * list.length);","  if (remove) {","    return list.splice(x, 1)[0];","  } else {","    return list[x];","  }","}"])+"("+d+", "+("GET"!=b)+")";
			if("GET"==b||"GET_REMOVE"==b)return[d,Blockly.Arduino.ORDER_FUNCTION_CALL];if("REMOVE"==b)return d+";\n"
	}
	throw Error("Unhandled combination (lists_getIndex).");
};
Blockly.Arduino.lists_setIndex=function(a){
	function b(){
		if(c.match(/^\w+$/))return"";
		var g=Blockly.Arduino.variableDB_.getDistinctName("tmpList",Blockly.VARIABLE_CATEGORY_NAME),h="int "+g+" = "+c+";\n";
		c=g;
		return h
	}
	var c=Blockly.Arduino.valueToCode(a,"LIST",Blockly.Arduino.ORDER_MEMBER)||"[]",d=a.getFieldValue("MODE")||"GET",e=a.getFieldValue("WHERE")||"FROM_START",f=Blockly.Arduino.valueToCode(a,"TO",Blockly.Arduino.ORDER_ASSIGNMENT)||"null";
	switch(e){
		case "FIRST":
			if("SET"==d)return c+"[0] = "+f+";\n";
			if("INSERT"==d)return c+".unshift("+f+");\n";
			break;
		case "LAST":
			if("SET"==d)return a=b(),a+(c+"["+c+".length - 1] = "+f+";\n");
			if("INSERT"==d)return c+".push("+f+");\n";
			break;
		case "FROM_START":
			e=Blockly.Arduino.valueToCode(a,"AT",Blockly.Arduino.ORDER_NONE);
			if("SET"==d)return c+"["+e+"] = "+f+";\n";
			if("INSERT"==d)return c+".splice("+e+", 0, "+f+");\n";
			break;
		case "FROM_END":
			e=Blockly.Arduino.valueToCode(a,"AT",Blockly.Arduino.ORDER_NONE);
			a=b();
			if("SET"==d)return a+(c+"["+c+".length - "+e+"] = "+f+";\n");
			if("INSERT"==d)return a+(c+".splice("+c+".length - "+e+", 0, "+f+");\n");
			break;
		case "RANDOM":
			a=b();
			e=Blockly.Arduino.variableDB_.getDistinctName("tmpX",Blockly.VARIABLE_CATEGORY_NAME);
			a+="int "+e+" = Math.floor(Math.random() * "+c+".length);\n";
			if("SET"==d)return a+(c+"["+e+"] = "+f+";\n");
			if("INSERT"==d)return a+(c+".splice("+e+", 0, "+f+");\n")
	}
	throw Error("Unhandled combination (lists_setIndex).");
};
Blockly.Arduino.lists.getIndex_=function(a,b,c){return"FIRST"==b?"0":"FROM_END"==b?"sizeof("+a+") - 1 - "+c:"LAST"==b?"sizeof("+a+") - 1":c};
	
Blockly.Arduino.lists_getSublist=function(a){var b=Blockly.Arduino.valueToCode(a,"LIST",Blockly.Arduino.ORDER_MEMBER)||"[]",c=a.getFieldValue("WHERE1"),d=a.getFieldValue("WHERE2");if("FIRST"==c&&"LAST"==d)b+=".slice(0)";else if(b.match(/^\w+$/)||"FROM_END"!=c&&"FROM_START"==d){switch(c){case "FROM_START":var e=Blockly.Arduino.getAdjusted(a,"AT1");break;case "FROM_END":e=Blockly.Arduino.getAdjusted(a,"AT1",1,!1,Blockly.Arduino.ORDER_SUBTRACTION);e=b+".length - "+e;break;case "FIRST":e=
"0";break;default:throw Error("Unhandled option (lists_getSublist).");}switch(d){case "FROM_START":a=Blockly.Arduino.getAdjusted(a,"AT2",1);break;case "FROM_END":a=Blockly.Arduino.getAdjusted(a,"AT2",0,!1,Blockly.Arduino.ORDER_SUBTRACTION);a=b+".length - "+a;break;case "LAST":a=b+".length";break;default:throw Error("Unhandled option (lists_getSublist).");}b=b+".slice("+e+", "+a+")"}else{e=Blockly.Arduino.getAdjusted(a,"AT1");a=Blockly.Arduino.getAdjusted(a,"AT2");var f=Blockly.Arduino.lists.getIndex_,
g={FIRST:"First",LAST:"Last",FROM_START:"FromStart",FROM_END:"FromEnd"};b=Blockly.Arduino.provideFunction_("subsequence"+g[c]+g[d],["function "+Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_+"(sequence"+("FROM_END"==c||"FROM_START"==c?", at1":"")+("FROM_END"==d||"FROM_START"==d?", at2":"")+") {","  var start = "+f("sequence",c,"at1")+";","  var end = "+f("sequence",d,"at2")+" + 1;","  return sequence.slice(start, end);","}"])+"("+b+("FROM_END"==c||"FROM_START"==c?", "+e:"")+("FROM_END"==d||"FROM_START"==
d?", "+a:"")+")"}return[b,Blockly.Arduino.ORDER_FUNCTION_CALL]};
Blockly.Arduino.lists_sort=function(a){var b=Blockly.Arduino.valueToCode(a,"LIST",Blockly.Arduino.ORDER_FUNCTION_CALL)||"[]",c="1"===a.getFieldValue("DIRECTION")?1:-1;a=a.getFieldValue("TYPE");var d=Blockly.Arduino.provideFunction_("listsGetSortCompare",["function "+Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_+"(type, direction) {","  var compareFuncs = {",'    "NUMERIC": function(a, b) {',"        return Number(a) - Number(b); },",'    "TEXT": function(a, b) {',"        return a.toString() > b.toString() ? 1 : -1; },",
'    "IGNORE_CASE": function(a, b) {',"        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },","  };","  var compare = compareFuncs[type];","  return function(a, b) { return compare(a, b) * direction; }","}"]);return[b+".slice().sort("+d+'("'+a+'", '+c+"))",Blockly.Arduino.ORDER_FUNCTION_CALL]};
Blockly.Arduino.lists_split=function(a){var b=Blockly.Arduino.valueToCode(a,"INPUT",Blockly.Arduino.ORDER_MEMBER),c=Blockly.Arduino.valueToCode(a,"DELIM",Blockly.Arduino.ORDER_NONE)||"''";a=a.getFieldValue("MODE");if("SPLIT"==a)b||(b="''"),a="split";else if("JOIN"==a)b||(b="[]"),a="join";else throw Error("Unknown mode: "+a);return[b+"."+a+"("+c+")",Blockly.Arduino.ORDER_FUNCTION_CALL]};
Blockly.Arduino.lists_reverse=function(a){return[(Blockly.Arduino.valueToCode(a,"LIST",Blockly.Arduino.ORDER_FUNCTION_CALL)||"[]")+".slice().reverse()",Blockly.Arduino.ORDER_FUNCTION_CALL]};




Blockly.Arduino.array={};
Blockly.Arduino.array_create_with=function(){for(var a=Array(this.itemCount_),b=0;b<this.itemCount_;b++)a[b]=Blockly.Arduino.valueToCode(this,"ADD"+b,Blockly.Arduino.ORDER_COMMA)||"null";a="{"+a.join(", ")+"}";return[a,Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.array_modify = function(block) {
  var value_indice = Blockly.Arduino.valueToCode(block, 'indice', Blockly.Arduino.ORDER_ATOMIC)||"0";
  var value_name = Blockly.Arduino.valueToCode(block, 'name', Blockly.Arduino.ORDER_ATOMIC);
  var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);
  var code = value_name+'['+value_indice+'] = '+value_value+';\n';
  return code;
};
Blockly.Arduino.array_getIndex=function(){
  var a=Blockly.Arduino.valueToCode(this,"AT",Blockly.Arduino.ORDER_UNARY_NEGATION)||"0",
      b=Blockly.Arduino.valueToCode(this,"ITEM",Blockly.Arduino.ORDER_MEMBER)||"[]";
  Blockly.isNumber(a)&&(a=parseFloat(a));
  return[b+"["+a+"]",Blockly.Arduino.ORDER_MEMBER]
};
Blockly.Arduino.array_sizeof=function(){
  var a=Blockly.Arduino.valueToCode(this,"ITEM",Blockly.Arduino.ORDER_MEMBER)||"[]";
  Blockly.a=parseFloat(a);
  return["sizeof("+a+")/sizeof("+a+"[0])",Blockly.Arduino.ORDER_MEMBER]

};
Blockly.Arduino.array_for = function() {
  // For loop.
  var variable0 = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  var argument0 = Blockly.Arduino.valueToCode(this, 'FROM',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var argument1 = Blockly.Arduino.valueToCode(this, 'TO',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
    branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + this.id + '\'') + branch;
  }
  var code;
  if (argument0.match(/^-?\d+(\.\d+)?$/) &&
      argument1.match(/^-?\d+(\.\d+)?$/)) {
    // Both arguments are simple numbers.
    var up = parseFloat(argument0) <= parseFloat(argument1);
    code = 'for (' + variable0 + ' = ' + argument0 + '; ' +
        variable0 + (up ? ' <= ' : ' >= ') + argument1 + '; ' +
        variable0 + (up ? '++' : '--') + ') {\n' +
        branch + '}\n';
  } else {
    code = '';
    // Cache non-trivial values to variables to prevent repeated look-ups.
    var startVar = argument0;
    if (!argument0.match(/^\w+$/) && !argument0.match(/^-?\d+(\.\d+)?$/)) {
      var startVar = Blockly.Arduino.variableDB_.getDistinctName(
          variable0 + '_start', Blockly.Variables.NAME_TYPE);
      code += 'int ' + startVar + ' = ' + argument0 + ';\n';
    }
    var endVar = argument1;
    var endVar = Blockly.Arduino.variableDB_.getDistinctName(
        variable0 + '_end', Blockly.Variables.NAME_TYPE);
    code += 'int ' + endVar + "= (sizeof("+ argument1 +")/sizeof("+ argument1 + "[0]));\n";

    code += 'for (' + variable0 + ' = ' + startVar + ';\n' +
        '    (' + startVar + ' <= ' + endVar + ') ? ' +
        variable0 + ' < ' + endVar + ' : ' +
        variable0 + ' > ' + endVar + ';\n' +
        '    ' + variable0 + ' += (' + startVar + ' <= ' + endVar +') ? 1 : -1) {\n' +
        branch + '}\n';
  }
  return code;
};





Blockly.Arduino.logic={};
Blockly.Arduino.logic_compare=function(a){var b={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[a.getFieldValue("OP")],c="=="==b||"!="==b?Blockly.Arduino.ORDER_EQUALITY:Blockly.Arduino.ORDER_RELATIONAL,d=Blockly.Arduino.valueToCode(a,"A",c)||"0";a=Blockly.Arduino.valueToCode(a,"B",c)||"0";return[d+" "+b+" "+a,c]};
Blockly.Arduino.logic_operation=function(a){var b="AND"==a.getFieldValue("OP")?"&&":"||",c="&&"==b?Blockly.Arduino.ORDER_LOGICAL_AND:Blockly.Arduino.ORDER_LOGICAL_OR,d=Blockly.Arduino.valueToCode(a,"A",c);a=Blockly.Arduino.valueToCode(a,"B",c);if(d||a){var e="&&"==b?"true":"false";d||(d=e);a||(a=e)}else a=d="false";return[d+" "+b+" "+a,c]};
Blockly.Arduino.logic_negate=function(a){var b=Blockly.Arduino.ORDER_LOGICAL_NOT;return["!"+(Blockly.Arduino.valueToCode(a,"BOOL",b)||"true"),b]};
Blockly.Arduino.logic_boolean=function(a){return["TRUE"==a.getFieldValue("BOOL")?"true":"false",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.logic_null=function(a){return["null",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.logic_ternary=function(a){var b=Blockly.Arduino.valueToCode(a,"IF",Blockly.Arduino.ORDER_CONDITIONAL)||"false",c=Blockly.Arduino.valueToCode(a,"THEN",Blockly.Arduino.ORDER_CONDITIONAL)||"null";a=Blockly.Arduino.valueToCode(a,"ELSE",Blockly.Arduino.ORDER_CONDITIONAL)||"null";return["("+b+") ? "+c+" : "+a,Blockly.Arduino.ORDER_CONDITIONAL]};

Blockly.Arduino.controls_if=function(a){
	var b=0,c="";
	Blockly.Arduino.STATEMENT_PREFIX&&(c+=Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_PREFIX,a));
	do{var d=Blockly.Arduino.valueToCode(a,"IF"+b,Blockly.Arduino.ORDER_NONE)||"false";var e=Blockly.Arduino.statementToCode(a,"DO"+b);
		Blockly.Arduino.STATEMENT_SUFFIX&&(e=Blockly.Arduino.prefixLines(Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_SUFFIX,a),Blockly.Arduino.INDENT)+e);
		c+=(0<b?" else ":"")+"if ("+d+") {\n"+e+"}";
		++b
	} while(a.getInput("IF"+b));
	if(a.getInput("ELSE")||Blockly.Arduino.STATEMENT_SUFFIX)e=Blockly.Arduino.statementToCode(a,"ELSE"),Blockly.Arduino.STATEMENT_SUFFIX&&(e=Blockly.Arduino.prefixLines(Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_SUFFIX,a),Blockly.Arduino.INDENT)+e),c+=" else {\n"+e+"}";return c+"\n"
};
Blockly.Arduino.controls_ifelse=Blockly.Arduino.controls_if;


Blockly.Arduino.controls_switch=function(a){
	var value=Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_NONE)||""
	var b=0,c="switch ("+value+") {\n";
	Blockly.Arduino.STATEMENT_PREFIX&&(c+=Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_PREFIX,a));
	do{
		var d=Blockly.Arduino.valueToCode(a,"CASE"+b,Blockly.Arduino.ORDER_NONE)||"";
		//d=d.replace(/"/g,"'");
		var e=Blockly.Arduino.statementToCode(a,"DO"+b)||"";
		Blockly.Arduino.STATEMENT_SUFFIX&&(e=Blockly.Arduino.prefixLines(Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_SUFFIX,a),Blockly.Arduino.INDENT)+e);
		c+="  case "+d+":\n";
		c+=e!=""?"  "+e.replace(/\n/g,"\n  ")+"  break;\n":"    break;\n";
		++b
	}while(a.getInput("CASE"+b));
	if(a.getInput("DEFAULT")||Blockly.Arduino.STATEMENT_SUFFIX) {
		e=Blockly.Arduino.statementToCode(a,"DEFAULT")
		,Blockly.Arduino.STATEMENT_SUFFIX&&(e=Blockly.Arduino.prefixLines(Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_SUFFIX,a),Blockly.Arduino.INDENT)+e)
		c+="  default:\n";
		c+=e!=""?"  "+e.replace(/\n/g,"\n  ")+"  break;\n":"    break;\n";		
	}
	c+="}";
	return c+"\n"
};
Blockly.Arduino.controls_switch_case=Blockly.Arduino.controls_switch;


Blockly.Arduino.controls_repeat_ext=function(a){var b=a.getField("TIMES")?String(Number(a.getFieldValue("TIMES"))):Blockly.Arduino.valueToCode(a,"TIMES",Blockly.Arduino.ORDER_ASSIGNMENT)||"0",c=Blockly.Arduino.statementToCode(a,"DO");c=Blockly.Arduino.addLoopTrap(c,a);a="";var d=Blockly.Arduino.variableDB_.getDistinctName("count",Blockly.VARIABLE_CATEGORY_NAME),e=b;b.match(/^\w+$/)||Blockly.isNumber(b)||(e=Blockly.Arduino.variableDB_.getDistinctName("repeat_end",Blockly.VARIABLE_CATEGORY_NAME),
a+="int "+e+" = "+b+";\n");return a+("for (int "+d+" = 0; "+d+" < "+e+"; "+d+"++) {\n"+c+"}\n")};Blockly.Arduino.controls_repeat=Blockly.Arduino.controls_repeat_ext;
Blockly.Arduino.controls_whileUntil=function(a){var b="UNTIL"==a.getFieldValue("MODE"),c=Blockly.Arduino.valueToCode(a,"BOOL",b?Blockly.Arduino.ORDER_LOGICAL_NOT:Blockly.Arduino.ORDER_NONE)||"false",d=Blockly.Arduino.statementToCode(a,"DO");d=Blockly.Arduino.addLoopTrap(d,a);b&&(c="!"+c);return"while ("+c+") {\n"+d+"}\n"};
Blockly.Arduino.controls_for=function(a){
	var b=Blockly.Arduino.variableDB_.getName(a.getFieldValue("VAR"),Blockly.VARIABLE_CATEGORY_NAME)
	,c=Blockly.Arduino.valueToCode(a,"FROM",Blockly.Arduino.ORDER_ASSIGNMENT)
	,d=Blockly.Arduino.valueToCode(a,"TO",Blockly.Arduino.ORDER_ASSIGNMENT)
	,e=Blockly.Arduino.valueToCode(a,"BY",Blockly.Arduino.ORDER_ASSIGNMENT)||"1"
	,f=Blockly.Arduino.statementToCode(a,"DO");f=Blockly.Arduino.addLoopTrap(f,a);
	
	if(Blockly.isNumber(c)&&Blockly.isNumber(d)&&Blockly.isNumber(e)){
		var g=Number(c)<=Number(d);
		a="for (int "+b+" = "+c+"; "+b+(g?" <= ":" >= ")+d+"; "+b;
		b=Math.abs(Number(e));
		a=(1==b?a+(g?"++":"--"):a+((g?" += ":" -= ")+b))+(") {\n"+f+"}\n")
	}
	else {
		var g=Number(e)>=0;
		a="for (int "+b+" = "+c+"; "+b+(g?" <= ":" >= ")+d+"; "+b;
		b=Math.abs(Number(e));
		a=(1==b?a+(g?"++":"--"):a+((g?" += ":" -= ")+b))+(") {\n"+f+"}\n")
	}
	/*	
	else {
		a=""
		,g=c,c.match(/^\w+$/)||Blockly.isNumber(c)||(g=Blockly.Arduino.variableDB_.getDistinctName(b+"_start",Blockly.VARIABLE_CATEGORY_NAME),a+="int "+g+" = "+c+";\n")
		,c=d
		,d.match(/^\w+$/)||Blockly.isNumber(d)||(c=Blockly.Arduino.variableDB_.getDistinctName(b+"_end",Blockly.VARIABLE_CATEGORY_NAME),a+="int "+c+" = "+d+";\n")
		,d=Blockly.Arduino.variableDB_.getDistinctName(b+"_inc",Blockly.VARIABLE_CATEGORY_NAME)
		,a+="int "+d+" = ",a=Blockly.isNumber(e)?a+(Math.abs(e)+";\n"):a+("Math.abs("+e+");\n")
		,a=a+("if ("+g+" > "+c+") {\n")+(Blockly.Arduino.INDENT+d+" = -"+d+";\n")
		,a+="}\n"
		,a+="for ("+b+" = "+g+"; "+d+" >= 0 ? "+b+" <= "+c+" : "+b+" >= "+c+"; "+b+" += "+d+") {\n"+f+"}\n";
	}
	*/	
	return a
};
Blockly.Arduino.controls_forEach=function(a){var b=Blockly.Arduino.nameDB_.getName(a.getFieldValue("VAR"),Blockly.VARIABLE_CATEGORY_NAME),c=Blockly.Arduino.valueToCode(a,"LIST",Blockly.Arduino.ORDER_ASSIGNMENT)||"[]",d=Blockly.Arduino.statementToCode(a,"DO");d=Blockly.Arduino.addLoopTrap(d,a);a="";var e=c;c.match(/^\w+$/)||(e=Blockly.Arduino.nameDB_.getDistinctName(b+"_list",Blockly.VARIABLE_CATEGORY_NAME),a+="var "+e+" = "+c+";\n");c=Blockly.Arduino.nameDB_.getDistinctName(b+
"_index",Blockly.VARIABLE_CATEGORY_NAME);d=Blockly.Arduino.INDENT+b+" = "+e+"["+c+"];\n"+d;return a+("for (var "+c+" in "+e+") {\n"+d+"}\n")};
Blockly.Arduino.controls_flow_statements=function(a){var b="";Blockly.Arduino.STATEMENT_PREFIX&&(b+=Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_PREFIX,a));Blockly.Arduino.STATEMENT_SUFFIX&&(b+=Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_SUFFIX,a));if(Blockly.Arduino.STATEMENT_PREFIX){var c=Blockly.Constants.Loops.CONTROL_FLOW_IN_LOOP_CHECK_MIXIN.getSurroundLoop(a);c&&!c.suppressPrefixSuffix&&(b+=Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_PREFIX,
c))}switch(a.getFieldValue("FLOW")){case "BREAK":return b+"break;\n";case "CONTINUE":return b+"continue;\n"}throw Error("Unknown flow statement.");};

Blockly.Arduino.getAdjusted=function(a,b,c,d,e){c=c||0;e=e||this.ORDER_NONE;a.workspace.options.oneBasedIndex&&c--;var f=a.workspace.options.oneBasedIndex?"1":"0";a=0<c?this.valueToCode(a,b,this.ORDER_ADDITION)||f:0>c?this.valueToCode(a,b,this.ORDER_SUBTRACTION)||f:d?this.valueToCode(a,b,this.ORDER_UNARY_NEGATION)||f:this.valueToCode(a,b,e)||f;if(Blockly.isNumber(a))a=Number(a)+c,d&&(a=-a);else{if(0<c){a=a+" + "+c;var g=this.ORDER_ADDITION}else 0>c&&(a=a+" - "+-c,g=this.ORDER_SUBTRACTION);d&&(a=
c?"-("+a+")":"-"+a,g=this.ORDER_UNARY_NEGATION);g=Math.floor(g);e=Math.floor(e);g&&e>=g&&(a="("+a+")")}return a};


Blockly.Arduino.math={};
Blockly.Arduino.math_number=function(){
	var a=window.parseFloat(this.getFieldValue("NUM"));
	return[a,Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino.math_change=function(a){
	var b=Blockly.Arduino.valueToCode(a,"DELTA",Blockly.Arduino.ORDER_ATOMIC)||"0";
	a=Blockly.Arduino.valueToCode(a,"VAR",Blockly.Arduino.ORDER_ATOMIC)||"";
	return a+" = "+a+" + "+b+";\n"
};
Blockly.Arduino.math_arithmetic=function(a){
	var b={ADD:[" + ",Blockly.Arduino.ORDER_ADDITION],MINUS:[" - ",Blockly.Arduino.ORDER_SUBTRACTION],MULTIPLY:[" * ",Blockly.Arduino.ORDER_MULTIPLICATION],DIVIDE:[" / ",Blockly.Arduino.ORDER_DIVISION],MODULO:[" % ",Blockly.Arduino.ORDER_MODULO]}[a.getFieldValue("OP")];
	var c=b[0];
	var d=Blockly.Arduino.valueToCode(a,"A",Blockly.Arduino.ORDER_ATOMIC);
	var a=Blockly.Arduino.valueToCode(a,"B",Blockly.Arduino.ORDER_ATOMIC);
	return [d+c+a,Blockly.Arduino.ORDER_FUNCTION_CALL]
};
Blockly.Arduino.math_random_max_min=function(a){
	var MIN=Blockly.Arduino.valueToCode(a,"MIN",Blockly.Arduino.ORDER_ATOMIC);
	var MAX=Blockly.Arduino.valueToCode(a,"MAX",Blockly.Arduino.ORDER_ATOMIC);
	return["random("+MIN+", "+MAX+")",Blockly.Arduino.ORDER_NONE]
};
Blockly.Arduino.math_map_int=function(){var a=Blockly.Arduino.valueToCode(this,"VALUE",Blockly.Arduino.ORDER_NONE),b=this.getFieldValue("FROMLOW")||"0",c=this.getFieldValue("FROMHIGH")||"1024",d=this.getFieldValue("TOLOW")||"0",e=this.getFieldValue("TOHIGH")||"255";return["map("+a+","+b+","+c+","+d+","+e+")",Blockly.Arduino.ORDER_NONE]};
Blockly.Arduino.math_map_float=function(){Blockly.Arduino.definitions_.mapFloat="float mapFloat(float x, float in_min, float in_max, float out_min, float out_max) {\n  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;\n}\n";var a=Blockly.Arduino.valueToCode(this,"VALUE",Blockly.Arduino.ORDER_NONE),b=this.getFieldValue("FROMLOW")||"0",c=this.getFieldValue("FROMHIGH")||"1024",d=this.getFieldValue("TOLOW")||"0",e=this.getFieldValue("TOHIGH")||"255";return["mapFloat("+a+","+b+","+
c+","+d+","+e+")",Blockly.Arduino.ORDER_NONE]};Blockly.Arduino.math_constrain=function(a){var b=Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_NONE)||"0",c=Blockly.Arduino.valueToCode(a,"LOW",Blockly.Arduino.ORDER_NONE)||"0";a=Blockly.Arduino.valueToCode(a,"HIGH",Blockly.Arduino.ORDER_NONE)||"255";return["constrain("+b+", "+c+","+a+")",Blockly.Arduino.ORDER_NONE]};
Blockly.Arduino.math_pow=function(a){var b=Blockly.Arduino.valueToCode(a,"base",Blockly.Arduino.ORDER_NONE)||"1";a=Blockly.Arduino.valueToCode(a,"exp",Blockly.Arduino.ORDER_NONE)||"1";return["pow("+b+", "+a+")",Blockly.Arduino.ORDER_NONE]};
Blockly.Arduino.math_single=function(a){		
	var op=a.getFieldValue("OP");
	var num=Blockly.Arduino.valueToCode(a,"NUM",Blockly.Arduino.ORDER_ATOMIC);
	switch(op){
		case "NEG":
			var c="-("+num+")";
			break;		
		case "ABS":
			var c="abs("+num+")";
			break;
		case "SQRT":
			c="sqrt("+num+")";
			break;
		case "LOG":
			c="log("+num+")";
			break;	
		case "LOG10":
			c="log10("+num+")";
			break;				
		case "LN":
			c="ln("+num+")";
			break;
		case "EXP":
			c="exp("+num+")";
			break;
		case "POW10":
			c="pow(10,"+num+")";
			break;
		case "SQ":
			c="sq("+num+")";
			break;			
		case "SIN":
			c="sin("+num+")";
			break;
		case "COS":
			c="cos("+num+")";
			break;
		case "TAN":
			c="tan("+num+")";
			break;
		case "ATAN":
			c="atan("+num+")";
			break;			
		case "FABS":
			c="fabs("+num+")";
			break;
		case "SQUARE":
			c="square("+num+")";
			break;
		case "RANDOM":
			c="random("+num+")";
			break;
		case "RANDOMSEED":
			c="randomSeed("+num+")";
			break;			
		default:
	throw Error("Unknown math operator: "+op);}
	return[c,Blockly.Arduino.ORDER_DIVISION]
};
Blockly.Arduino.math_degree_to_radian=function(a){
	a=Blockly.Arduino.valueToCode(a,"DEGREE",Blockly.Arduino.ORDER_NONE);
	return["("+a+" * 71) / 4068",Blockly.Arduino.ORDER_NONE]
};
Blockly.Arduino.math_radian_to_degree=function(a){
	a=Blockly.Arduino.valueToCode(a,"DEGREE",Blockly.Arduino.ORDER_NONE);
	return["("+a+" * 4068) / 71",Blockly.Arduino.ORDER_NONE]
};



Blockly.Arduino.text={};
Blockly.Arduino.text=function(a){
	/*
	if (this.parentBlock_) {
		if (this.parentBlock_.type=="text_join") {
				return["String("+Blockly.Arduino.quote_(a.getFieldValue("TEXT"))+")",Blockly.Arduino.ORDER_ATOMIC]
		}
	}
	*/
	return[Blockly.Arduino.quote_(a.getFieldValue("TEXT")),Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino.text_quotationmark=function(a){
	return[Blockly.Arduino.quote_quotationmark_(a.getFieldValue("TEXT")),Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino.text_multiline=function(a){a=Blockly.Arduino.multiline_quote_(a.getFieldValue("TEXT"));var b=-1!=a.indexOf("+")?Blockly.Arduino.ORDER_ADDITION:Blockly.Arduino.ORDER_ATOMIC;return[a,b]};
Blockly.Arduino.text.forceString_=function(a){return Blockly.Arduino.text.forceString_.strRegExp.test(a)?[a,Blockly.Arduino.ORDER_ATOMIC]:["String("+a+")",Blockly.Arduino.ORDER_FUNCTION_CALL]};Blockly.Arduino.text.forceString_.strRegExp=/^\s*'([^']|\\')*'\s*$/;
Blockly.Arduino.text_join=function(a){
	switch(a.itemCount_){
		case 0:
			return["''",Blockly.Arduino.ORDER_ATOMIC];
		case 1:
			return a=Blockly.Arduino.valueToCode(a,"ADD0",Blockly.Arduino.ORDER_NONE)||"''",Blockly.Arduino.text.forceString_(a);
		default:
			var code = "";
			for(var c=0;c<a.itemCount_;c++) {
				if ((c+1)<a.itemCount_)
					code+="String("+Blockly.Arduino.valueToCode(a,"ADD"+c,Blockly.Arduino.ORDER_NONE)+")+";
				else
					code+="String("+Blockly.Arduino.valueToCode(a,"ADD"+c,Blockly.Arduino.ORDER_NONE)+")";
			}
			return[code,Blockly.Arduino.ORDER_FUNCTION_CALL]
	}
};
Blockly.Arduino.text_append=function(a){var b=Blockly.Arduino.nameDB_.getName(a.getFieldValue("VAR"),Blockly.VARIABLE_CATEGORY_NAME);a=Blockly.Arduino.valueToCode(a,"TEXT",Blockly.Arduino.ORDER_NONE)||"''";return b+" += "+a+";\n"};
Blockly.Arduino.text_length=function(a){return[(Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_MEMBER)||"''")+".length()",Blockly.Arduino.ORDER_MEMBER]};
Blockly.Arduino.text_isEmpty=function(a){return["!"+(Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_MEMBER)||"''"),Blockly.Arduino.ORDER_LOGICAL_NOT]};
Blockly.Arduino.text_with=function(a){
	var b=a.getFieldValue("WHERE");
	var c=Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_NONE);
	var at=Blockly.Arduino.valueToCode(a,"FIND",Blockly.Arduino.ORDER_NONE);
	switch(b){
		case "FIRST":
			return[c+".startsWith("+at+")",Blockly.Arduino.ORDER_NONE];
		case "LAST":
			return[c+".endsWith("+at+")",Blockly.Arduino.ORDER_NONE];
	}
	throw Error("Unhandled option (text_with).");			
	return[(Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_MEMBER)||"''"),Blockly.Arduino.ORDER_LOGICAL_NOT]
	
};
Blockly.Arduino.text_replace=function(a){
	var VAR=Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
	var from=Blockly.Arduino.valueToCode(a,"FROM",Blockly.Arduino.ORDER_NONE);
	var to=Blockly.Arduino.valueToCode(a,"TO",Blockly.Arduino.ORDER_NONE);
				
	return VAR+".replace("+from+", "+to+");\n";
	
};
Blockly.Arduino.text_indexOf=function(a){var b="FIRST"==a.getFieldValue("END")?"indexOf":"lastIndexOf",c=Blockly.Arduino.valueToCode(a,"FIND",Blockly.Arduino.ORDER_NONE)||"''";b=(Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_MEMBER)||"''")+"."+b+"("+c+")";return a.workspace.options.oneBasedIndex?[b,Blockly.Arduino.ORDER_ADDITION]:[b,Blockly.Arduino.ORDER_FUNCTION_CALL]};
Blockly.Arduino.text_charAt=function(a){
	var b=a.getFieldValue("WHERE")||"FROM_START",c=Blockly.Arduino.valueToCode(a,"VALUE","RANDOM"==b?Blockly.Arduino.ORDER_NONE:Blockly.Arduino.ORDER_MEMBER)||"''";
	switch(b){
		case "FIRST":
			return[c+".charAt(0)",Blockly.Arduino.ORDER_FUNCTION_CALL];
		case "LAST":
			return[c+".charAt("+c+".length()-1)",Blockly.Arduino.ORDER_FUNCTION_CALL];
		case "FROM_START":
			return a=Blockly.Arduino.getAdjusted(a,"AT"),[c+".charAt("+a+")",Blockly.Arduino.ORDER_FUNCTION_CALL];
		case "FROM_END":
			return a=Blockly.Arduino.getAdjusted(a,"AT",1,!0),[c+".charAt("+c+".length()"+a+")",Blockly.Arduino.ORDER_FUNCTION_CALL];
		case "RANDOM":
			return[Blockly.Arduino.provideFunction_("textRandomLetter",["char "+Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_+"(String text) {","  int x = random(text.length());","  return text[x];","}"])+"("+c+")",Blockly.Arduino.ORDER_FUNCTION_CALL]
	}
	throw Error("Unhandled option (text_charAt).");
};
Blockly.Arduino.text.getIndex_=function(a,b,c){return"FIRST"==b?"0":"FROM_END"==b?a+".length - 1 - "+c:"LAST"==b?a+".length - 1":c};
Blockly.Arduino.text_getSubstring=function(a){
	var b=a.getFieldValue("WHERE1"),c=a.getFieldValue("WHERE2"),d="FROM_END"!=b&&"LAST"!=b&&"FROM_END"!=c&&"LAST"!=c,e=Blockly.Arduino.valueToCode(a,"STRING",d?Blockly.Arduino.ORDER_MEMBER:Blockly.Arduino.ORDER_NONE)||"''";if("FIRST"==b&&"LAST"==c)
		return[e,Blockly.Arduino.ORDER_NONE];
	if(e.match(/^'?\w+'?$/)||d){
		switch(b){
			case "FROM_START":
				d=Blockly.Arduino.valueToCode(a,"AT1",Blockly.Arduino.ORDER_NONE) + "-1";
				break;
			case "FROM_END":
				d=Blockly.Arduino.valueToCode(a,"AT1",Blockly.Arduino.ORDER_NONE);
				d=e+".length() - "+d;
				break;
			case "FIRST":
				d="0";
				break;
			default:
				throw Error("Unhandled option (text_getSubstring).");
		}
		switch(c){
			case "FROM_START":
				a=Number(Blockly.Arduino.valueToCode(a,"AT2",Blockly.Arduino.ORDER_NONE));
				break;
			case "FROM_END":
				a=Blockly.Arduino.valueToCode(a,"AT2",Blockly.Arduino.ORDER_NONE);
				a=e+".length() + 1- "+a;
				break;
			case "LAST":
				a=e+".length()";
				break;
			default:
				throw Error("Unhandled option (text_getSubstring).");
		}
		b=e+".substring("+d+", "+a+")"
	}
	else
	{
		d=Blockly.Arduino.getAdjusted(a,"AT1");
		a=Blockly.Arduino.getAdjusted(a,"AT2");
		var f=Blockly.Arduino.text.getIndex_,g={FIRST:"First",LAST:"Last",FROM_START:"FromStart",FROM_END:"FromEnd"};
		b=Blockly.Arduino.provideFunction_("subsequence"+g[b]+g[c],["String "+Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_+"(sequence"+("FROM_END"==b||"FROM_START"==b?", at1":"")+("FROM_END"==c||"FROM_START"==c?", at2":"")+") {","  var start = "+f("sequence",b,"at1")+";","  var end = "+f("sequence",c,"at2")+" + 1;","  return sequence.substring(start, end);","}"])+"("+e+("FROM_END"==b||"FROM_START"==b?", "+d:"")+("FROM_END"==c||"FROM_START"==c?", "+a:"")+")"
	}
	return[b,Blockly.Arduino.ORDER_FUNCTION_CALL]
};
Blockly.Arduino.text_changeCase=function(a){
	var CASE=a.getFieldValue("CASE");
	var TEXT=Blockly.Arduino.valueToCode(a,"TEXT",Blockly.Arduino.ORDER_NONE);
	if (CASE=="UPPERCASE")
		var code = TEXT+".toUpperCase()";
	else
		var code = TEXT+".toLowerCase()";	
	return [code,Blockly.Arduino.ORDER_FUNCTION_CALL]
}
Blockly.Arduino.variable_changeCase=function(a){
	var CASE=a.getFieldValue("CASE");
	var VAR=Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
	if (CASE=="UPPERCASE")
		var code = VAR+".toUpperCase();\n";
	else
		var code = VAR+".toLowerCase();\n";	
	return code;
}
Blockly.Arduino.text_trim=function(a){var b={LEFT:".replace(/^[\\s\\xa0]+/, '')",RIGHT:".replace(/[\\s\\xa0]+$/, '')",BOTH:".trim()"}[a.getFieldValue("MODE")];return (Blockly.Arduino.valueToCode(a,"TEXT",Blockly.Arduino.ORDER_MEMBER)||"''")+b+";\n"};
Blockly.Arduino.text_print=function(a){return"window.alert("+(Blockly.Arduino.valueToCode(a,"TEXT",Blockly.Arduino.ORDER_NONE)||"''")+");\n"};
Blockly.Arduino.text_prompt_ext=function(a){var b="window.prompt("+(a.getField("TEXT")?Blockly.Arduino.quote_(a.getFieldValue("TEXT")):Blockly.Arduino.valueToCode(a,"TEXT",Blockly.Arduino.ORDER_NONE)||"''")+")";"NUMBER"==a.getFieldValue("TYPE")&&(b="Number("+b+")");return[b,Blockly.Arduino.ORDER_FUNCTION_CALL]};Blockly.Arduino.text_prompt=Blockly.Arduino.text_prompt_ext;
Blockly.Arduino.text_count=function(a){var b=Blockly.Arduino.valueToCode(a,"TEXT",Blockly.Arduino.ORDER_NONE)||"''";a=Blockly.Arduino.valueToCode(a,"SUB",Blockly.Arduino.ORDER_NONE)||"''";return[Blockly.Arduino.provideFunction_("textCount",["function "+Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_+"(haystack, needle) {","  if (needle.length === 0) {","    return haystack.length + 1;","  } else {","    return haystack.split(needle).length - 1;","  }","}"])+"("+b+", "+a+")",Blockly.Arduino.ORDER_FUNCTION_CALL]};
Blockly.Arduino.text_reverse=function(a){return[(Blockly.Arduino.valueToCode(a,"TEXT",Blockly.Arduino.ORDER_MEMBER)||"''")+".split('').reverse().join('')",Blockly.Arduino.ORDER_FUNCTION_CALL]};



Blockly.Arduino.variables={};
Blockly.Arduino.variables_get=function(a){
  var varName = Blockly.Arduino.nameDB_.getName(this.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  var varName1 = this.getFieldValue('VAR');	
  var v = Blockly.Variables.allVariables(a);

  return varName;
};
Blockly.Arduino.variables_set = function(block) {
  // Variable setter.
  var varPosition = this.getFieldValue('POSITION');
  var varType = this.getFieldValue('TYPE');
  var varName = Blockly.Arduino.nameDB_.getName(this.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  var varName1 = this.getFieldValue('VAR');
  var argument0 = Blockly.Arduino.valueToCode(block, 'VALUE',Blockly.Arduino.ORDER_ASSIGNMENT);
  if (varPosition=="global") {
	  if (argument0!="") {
		Blockly.Arduino.definitions_[varName1] = varType+ ' ' + varName + ' = ' + argument0 + ';';		  
		var code = '';
	  } else {
		Blockly.Arduino.definitions_[varName1] = varType+ ' ' + varName + ';';
		var code = '';
	  }
  }
  else {
	  //Blockly.Arduino.definitions_[varName1] = '';
	  if (argument0!="")
		var code = varType+ ' ' + varName + ' = ' + argument0 + ';\n';
	  else
		var code = varType+ ' ' + varName + ';\n';
  }
  return code;
};
Blockly.Arduino.variables_set1 = function(block) {
  // Variable setter.
  var varPosition = this.getFieldValue('POSITION');  
  var varType = this.getFieldValue('TYPE');
  var varName = Blockly.Arduino.nameDB_.getName(this.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  var varName1 = this.getFieldValue('VAR');
  var variableLen = Blockly.Arduino.valueToCode(block, 'LEN',Blockly.Arduino.ORDER_ASSIGNMENT);
  var argument0 = Blockly.Arduino.valueToCode(block, 'VALUE',Blockly.Arduino.ORDER_ASSIGNMENT);  
  if (variableLen=="0") variableLen="";
  if (varPosition=="global") {
	  if (argument0!=""&&argument0!="{null}") {
		Blockly.Arduino.definitions_[varName1] = varType+ ' ' + varName + '['+ variableLen +'] = ' + argument0 + ';';		  
		var code = '';
	  } else {
		Blockly.Arduino.definitions_[varName1] = varType+ ' ' + varName + '['+ variableLen +'] = {};';	  
		var code = '';
	  }
  }
  else {
	  //Blockly.Arduino.definitions_[varName1] = '';
	  if (argument0!=""&&argument0!="{null}")
		var code = varType+ ' ' + varName + '['+ variableLen +'] = ' + argument0 + ';\n';
	  else
		var code = varType+ ' ' + varName + '['+ variableLen +'] = {};\n';
  }
  return code;
};
Blockly.Arduino.variables_set2 = function(block) {
  var varType = this.getFieldValue('TYPE');
  var varName = Blockly.Arduino.nameDB_.getName(this.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);

  return [varType+ ' ' + varName, Blockly.Arduino.ORDER_FUNCTION_CALL];
};
Blockly.Arduino.variables_set3=function(a) {
  var varName = Blockly.Arduino.nameDB_.getName(this.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  var argument0 = Blockly.Arduino.valueToCode(this, 'DELTA', Blockly.Arduino.ORDER_NONE) || '0';

  return varName + ' = ' + argument0 + ';\n';
};
Blockly.Arduino.variables_set4 = function(block) {
  var varName = Blockly.Arduino.nameDB_.getName(this.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  var variableIndex = Blockly.Arduino.valueToCode(block, 'INDEX',Blockly.Arduino.ORDER_ASSIGNMENT);
  var argument0 = Blockly.Arduino.valueToCode(block, 'VALUE',Blockly.Arduino.ORDER_ASSIGNMENT);

  return varName + '['+variableIndex+'] = ' + argument0 + ';\n';
};
Blockly.Arduino.variables_set5 = function(block) {
  var varName = Blockly.Arduino.nameDB_.getName(this.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  var variableIndex = Blockly.Arduino.valueToCode(block, 'INDEX',Blockly.Arduino.ORDER_ASSIGNMENT);

  return [varName + '['+variableIndex+']',Blockly.Arduino.ORDER_NONE]
};
Blockly.Arduino.variables_set6 = function(block) {
  var varType = this.getFieldValue('TYPE');
  var varName = Blockly.Arduino.nameDB_.getName(this.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  var variableLen = Blockly.Arduino.valueToCode(block, 'LEN',Blockly.Arduino.ORDER_ASSIGNMENT);
  if (variableLen=="0") variableLen="";
  
  return [varType+ ' ' + varName + '['+ variableLen +']', Blockly.Arduino.ORDER_FUNCTION_CALL];
};
Blockly.Arduino.variables_set7 = function(block) {
  var varName = Blockly.Arduino.nameDB_.getName(this.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  var varName1 = this.getFieldValue('VAR');
  var argument0 = Blockly.Arduino.valueToCode(block, 'VALUE',Blockly.Arduino.ORDER_ASSIGNMENT);
  Blockly.Arduino.definitions_[varName1] = '#define ' + varName + ' ' + argument0;
  return "";
};



Blockly.Arduino.procedures={};
Blockly.Arduino.procedures_defreturn=function(){
	var a=Blockly.Arduino.nameDB_.getName(this.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE);
	var b=Blockly.Arduino.statementToCode(this,"STACK");
	Blockly.Arduino.INFINITE_LOOP_TRAP&&(b=Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+b);
	var c=Blockly.Arduino.valueToCode(this,"RETURN",Blockly.Arduino.ORDER_NONE)||"";
	var d=this.getFieldValue("TYPE");
	var g=Blockly.Arduino.valueToCode(this,"VAR",Blockly.Arduino.ORDER_NONE)||"";
	g=g.replace("{","").replace("}","");
	
	b=d+" "+a+"("+g+") {\n"+b+c+"}\n";
	b=Blockly.Arduino.scrub_(this,b);
	Blockly.Arduino.functions_[a]=b;
	return null
};
Blockly.Arduino.procedures_return=function(){
	var a=Blockly.Arduino.valueToCode(this,"RETURN",Blockly.Arduino.ORDER_NONE)||"";
	if (a=="")
		var code="return "+a+";\n";
	else
		var code="return ("+a+");\n";
	return code;
};
Blockly.Arduino.procedures_defnoreturn=function(){
	var a=Blockly.Arduino.nameDB_.getName(this.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE);
	var b=Blockly.Arduino.statementToCode(this,"STACK");
	Blockly.Arduino.INFINITE_LOOP_TRAP&&(b=Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+b);
	var c=Blockly.Arduino.valueToCode(this,"RETURN",Blockly.Arduino.ORDER_NONE)||"";
	var d=this.getFieldValue("TYPE");
	var g=Blockly.Arduino.valueToCode(this,"VAR",Blockly.Arduino.ORDER_NONE)||"";
	g=g.replace("{","").replace("}","");
	
	b="void "+a+"("+g+") {\n"+b+c+"}\n";
	b=Blockly.Arduino.scrub_(this,b);
	Blockly.Arduino.functions_[a]=b;
	return null
};
Blockly.Arduino.procedures_callnoreturn=function(){
	var a=Blockly.Arduino.nameDB_.getName(this.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE);
	var g=Blockly.Arduino.valueToCode(this,"VAR",Blockly.Arduino.ORDER_NONE)||"";

	g=g.replace("{","").replace("}","");
	return a+"("+g+");\n"
};
Blockly.Arduino.procedures_ifreturn=function(){
	var a="if ("+(Blockly.Arduino.valueToCode(this,"CONDITION",Blockly.Arduino.ORDER_NONE)||"false")+") {\n";if(this.hasReturnValue_){var b=Blockly.Arduino.valueToCode(this,"VALUE",Blockly.Arduino.ORDER_NONE)||"null";a+="  return "+b+";\n"}else a+="  return;\n";return a+"}\n"
};
Blockly.Arduino.procedures_callreturn=function(){
	var a=Blockly.Arduino.nameDB_.getName(this.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE);
	var g=Blockly.Arduino.valueToCode(this,"VAR",Blockly.Arduino.ORDER_NONE)||"";

	g=g.replace("{","").replace("}","");
	return[a+"("+g+")",Blockly.Arduino.ORDER_NONE]
};


Blockly.Arduino.cast={};
Blockly.Arduino.cast_number=function(){
	var a=this.getFieldValue("TYPE")
	,b=Blockly.Arduino.valueToCode(this,"VAR",Blockly.Arduino.ORDER_ATOMIC)||"";
	return[(a.indexOf("String")!=-1)?a.replace("%1",b):a+" "+b,Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino.cast_type=function(){
	var a=this.getFieldValue("TYPE"),b=Blockly.Arduino.valueToCode(this,"VAR",Blockly.Arduino.ORDER_ATOMIC)||"";
	return b+"."+a+";\n";
};
Blockly.Arduino.cast_type1=function(){
	var a=this.getFieldValue("TYPE"),b=Blockly.Arduino.valueToCode(this,"VAR",Blockly.Arduino.ORDER_ATOMIC)||"";
	return [b+"."+a,Blockly.Arduino.ORDER_NONE]
};

Blockly.Arduino.involt={};Blockly.Arduino.involt_directmode=function(){var a="TRUE"==this.getFieldValue("BOOL")?"true":"false";Blockly.Arduino.definitions_.define_directmode="boolean directMode = "+a+";\n";return""};
Blockly.Arduino.involt_chromereceive=function(){Blockly.Arduino.definitions_.define_chromeDigital="int chromeDigital[] = {};\n";Blockly.Arduino.definitions_.define_stringV='String V = "V";\n';Blockly.Arduino.setups_["setup_serial_"+profile["default"].serial]="Serial.begin(115200);\n";Blockly.Arduino.definitions_.define_chromeSend='void chromeSend(int pinNumber, int sendValue)\n{\n  String A = "A";\n  String E = "E";\n  Serial.println(A+pinNumber+V+sendValue+E);\n}\n\n';Blockly.Arduino.definitions_.define_chromeReceive=
'void chromeReceive()\n{\n  String chrome;\n  String pwm = "P";\n  String dig = "D";\n  int pin;\n  int val;\n  int chromeLen;\n  if(Serial.available() > 0){\n    String chrome = Serial.readStringUntil(\'\u00a5n\');\n    int chromeLen = chrome.length();\n    String pinRaw = chrome.substring(1,chrome.indexOf(V));\n    String valRaw = chrome.substring(chrome.indexOf(V)+1,chromeLen);\n    pin = pinRaw.toInt();\n    val = valRaw.toInt();\n    \n    if(directMode){\n      if (chrome.indexOf(dig) == 0){\n        digitalWrite(pin, val);\n      }\n      else if (chrome.indexOf(pwm) == 0 ){\n        analogWrite(pin, val);\n      }\n    }\n    else{\n      chromeDigital[pin]=val;\n    }\n  }\n}\n\n';
return"chromeReceive();\n"};
Blockly.Arduino.involt_sendvalue=function(){
  return"pinMode("+this.getFieldValue("PIN")+",OUTPUT);\n"
};
Blockly.Arduino.involt_receivevalue=function(){
  return"chromeSend(0, analogRead("+this.getFieldValue("PIN")+"));\n"
};


Blockly.Arduino.i2c_sevenseg={};
Blockly.Arduino.i2c_sevenseg_begin=function(){var a=this.getFieldValue("ADDRESS");Blockly.Arduino.definitions_.define_wire="#include <Wire.h>";Blockly.Arduino.definitions_.define_adafruit_ledbackpack='#include "Adafruit_LEDBackpack.h"';Blockly.Arduino.definitions_.define_adafruit_gfx='#include "Adafruit_GFX.h"';Blockly.Arduino.definitions_.define_sevenseg="Adafruit_7segment sevenseg = Adafruit_7segment();\n";Blockly.Arduino.setups_["setup_sevenseg_"+a]="sevenseg.begin("+a+");";return""};
Blockly.Arduino.i2c_sevenseg_print=function(){var a=Blockly.Arduino.valueToCode(this,"NUM",Blockly.Arduino.ORDER_ATOMIC)||"7777";9999<a?a=9999:0>a&&(a=1);return"sevenseg.print("+a+");\n"};Blockly.Arduino.i2c_sevenseg_writedisplay=function(){return"sevenseg.writeDisplay();\n"};
Blockly.Arduino.i2c_sevenseg_writedigitnum=function(){var a=Blockly.Arduino.valueToCode(this,"POSITION",Blockly.Arduino.ORDER_ATOMIC)||"0",b=Blockly.Arduino.valueToCode(this,"NUM",Blockly.Arduino.ORDER_ATOMIC)||"0",c=Blockly.Arduino.valueToCode(this,"DOTS",Blockly.Arduino.ORDER_NONE)||"false";9<b&&(b=9);return"sevenseg.writeDigitNum("+a+","+b+","+c+");\n"};
Blockly.Arduino.i2c_sevenseg_drawcolon=function(){return"sevenseg.drawColon("+(Blockly.Arduino.valueToCode(this,"DOTS",Blockly.Arduino.ORDER_NONE)||"false")+");\n"};Blockly.Arduino.i2c_sevenseg_boolean=function(){return["TRUE"==this.getFieldValue("BOOL")?"true":"false",Blockly.Arduino.ORDER_ATOMIC]};


Blockly.Arduino.times={};
Blockly.Arduino.delay=function(){return"delay("+this.getFieldValue("DELAY_TIME")+");\n"};
Blockly.Arduino.delay_custom=function(){return"delay("+(Blockly.Arduino.valueToCode(this,"DELAY_TIME",Blockly.Arduino.ORDER_ATOMIC)||"1000")+");\n"};
Blockly.Arduino.delayMicroseconds_custom=function(){return"delayMicroseconds("+(Blockly.Arduino.valueToCode(this,"DELAY_TIME",Blockly.Arduino.ORDER_ATOMIC)||"1000")+");\n"};
Blockly.Arduino.delayMicroseconds=function(){return"delayMicroseconds("+this.getFieldValue("DELAY_TIME")+");\n"};
Blockly.Arduino.millis=function(){return["millis()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.micros=function(){return["micros()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.rtc_get_time=function(){Blockly.Arduino.definitions_.define_rtc="#include <LRTC.h>";Blockly.Arduino.setups_.setup_rtc="LRTC.begin();";Blockly.Arduino.definitions_.define_rtc_get_time='\nString get_time_from_RTC() {\n  // get time from the RTC module\n  LRTC.get();\n\n  // format to time string \n  static char buffer[] = "YYYY-MM-DDTHH:MM:SS+08";\n  sprintf(buffer, "%04ld-%02ld-%02ldT%02ld:%02ld:%02ld+08",\n    LRTC.year(),\n    LRTC.month(),\n    LRTC.day(),\n    LRTC.hour(),\n    LRTC.minute(),\n    LRTC.second());\n\n  return String(buffer);\n}\n';return["get_time_from_RTC()",
Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.rtc_set_time_from_number=function(){Blockly.Arduino.definitions_.define_rtc="#include <LRTC.h>";Blockly.Arduino.setups_.setup_rtc="LRTC.begin();";var a=Blockly.Arduino.valueToCode(this,"YEAR",Blockly.Arduino.ORDER_ATOMIC)||"0",b=Blockly.Arduino.valueToCode(this,"MONTH",Blockly.Arduino.ORDER_ATOMIC)||"0",c=Blockly.Arduino.valueToCode(this,"DAY",Blockly.Arduino.ORDER_ATOMIC)||"0",d=Blockly.Arduino.valueToCode(this,"HOUR",Blockly.Arduino.ORDER_ATOMIC)||"0",e=Blockly.Arduino.valueToCode(this,
"MIN",Blockly.Arduino.ORDER_ATOMIC)||"0",f=Blockly.Arduino.valueToCode(this,"SEC",Blockly.Arduino.ORDER_ATOMIC)||"0";return"LRTC.set("+a+", "+b+", "+c+", "+d+", "+e+", "+f+");\n"};
Blockly.Arduino.rtc_set_time_from_string=function(){Blockly.Arduino.definitions_.define_rtc="#include <LRTC.h>";Blockly.Arduino.setups_.setup_rtc="LRTC.begin();";Blockly.Arduino.definitions_.define_rtc_set_rtc_from_time_string='\nvoid set_rtc_from_time_string(const String& time_str) {\n  // field_index [0,1,2,3,4,5] = [Year,Month,Day,Hour,Minute,Sec]\n  int fields[6] = {0};\n  sscanf(time_str.c_str(), "%d-%d-%dT%d:%d:%d+08", \n          &fields[0], &fields[1], &fields[2],\n          &fields[3], &fields[4], &fields[5]);\n  LRTC.set(fields[0], fields[1], fields[2],\n           fields[3], fields[4], fields[5]);\n}\n';return"set_rtc_from_time_string("+
(Blockly.Arduino.valueToCode(this,"TIME_STRING",Blockly.Arduino.ORDER_ATOMIC)||'"1900-00-00T00:00:00+08"')+");\n"};
Blockly.Arduino.rtc_get_time_field=function(){Blockly.Arduino.definitions_.define_rtc="#include <LRTC.h>";Blockly.Arduino.setups_.setup_rtc="LRTC.begin();";Blockly.Arduino.definitions_.define_rtc_get_field_from_time_string='\nint get_field_from_time_string(const String& time_str, int field_index) {\n  // field_index [0,1,2,3,4,5] = [Year,Month,Day,Hour,Minute,Sec]\n  int fields[6] = {0};\n  sscanf(time_str.c_str(), "%d-%d-%dT%d:%d:%d+08", \n          &fields[0], &fields[1], &fields[2],\n          &fields[3], &fields[4], &fields[5]);\n  if(field_index < 0 || field_index > 5) {\n    return 0;\n  } else {\n    return fields[field_index];\n  }\n}\n';var a=
Blockly.Arduino.valueToCode(this,"TIME_STRING",Blockly.Arduino.ORDER_ATOMIC)||'"1900-00-00T00:00:00+08"',b=this.getFieldValue("FIELD");return["get_field_from_time_string("+a+", "+b+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.ntp_get_datetime=function(){Blockly.Arduino.definitions_.define_udp="#include <WiFiUdp.h>";Blockly.Arduino.definitions_.define_ctime="#include <ctime>";Blockly.Arduino.definitions_.define_ntp_get_datetime='\nconst char *NTP_server = "time.stdtime.gov.tw";  \nconst int NTP_PACKET_SIZE = 48;                   // NTP time stamp is in the first 48 bytes of the message  \nstatic byte packetBuffer[NTP_PACKET_SIZE] = {0};  //buffer to hold incoming and outgoing packets\nconst unsigned int localPort = 2390;              // local port to listen for UDP packets\nstatic WiFiUDP Udp;                               // A UDP instance to let us send and receive packets over UDP\n\nString getNetworkTime() {\n  Udp.begin(localPort);\n  sendNTPpacket(NTP_server); // send an NTP packet to a time server\n  // wait to see if a reply is available\n  delay(1000);\n  if (Udp.parsePacket()) {\n    // We\'ve received a packet, read the data from it\n    Udp.read(packetBuffer, NTP_PACKET_SIZE); // read the packet into the buffer\n\n    //the timestamp starts at byte 40 of the received packet and is four bytes,\n    // or two words, long. First, esxtract the two words:\n    const unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);\n    const unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);\n    // combine the four bytes (two words) into a long integer\n    // this is NTP time (seconds since Jan 1 1900):\n    const unsigned long secsSince1900 = highWord << 16 | lowWord;\n    // Unix time starts on Jan 1 1970. In seconds, that\'s 2208988800:\n    const unsigned long seventyYears = 2208988800UL;\n    // subtract seventy years:\n    const unsigned long epoch = secsSince1900 - seventyYears;\n    // Taiwan is UTC+8 = 8 * 60 * 60 seconds\n    const time_t taiwan_time = epoch + (8 * 60 * 60);\n    // const tm* pTime = gmtime(&taiwan_time);\n    static char time_text[] = "YYYY-MM-DDTHH:MM:SS+08";\n    strftime(time_text, sizeof(time_text), "%Y-%m-%dT%H:%M:%S+08", gmtime(&taiwan_time));\n    return String((const char*)time_text);\n  }\n\n  return String("Connection error");\n}\n\n// send an NTP request to the time server at the given address\nunsigned long sendNTPpacket(const char* host) {\n\t//Serial.println("1");\n\t// set all bytes in the buffer to 0\n\tmemset(packetBuffer, 0, NTP_PACKET_SIZE);\n\t// Initialize values needed to form NTP request\n\t// (see URL above for details on the packets)\n\t//Serial.println("2");\n\tpacketBuffer[0] = 0b11100011;   // LI, Version, Mode\n\tpacketBuffer[1] = 0;     // Stratum, or type of clock\n\tpacketBuffer[2] = 6;     // Polling Interval\n\tpacketBuffer[3] = 0xEC;  // Peer Clock Precision\n\t// 8 bytes of zero for Root Delay & Root Dispersion\n\tpacketBuffer[12]  = 49;\n\tpacketBuffer[13]  = 0x4E;\n\tpacketBuffer[14]  = 49;\n\tpacketBuffer[15]  = 52;\n\n\t//Serial.println("3");\n\n\t// all NTP fields have been given values, now\n\t// you can send a packet requesting a timestamp:\n\tUdp.beginPacket(host, 123); //NTP requests are to port 123\n\t//Serial.println("4");\n\tUdp.write(packetBuffer, NTP_PACKET_SIZE);\n\t//Serial.println("5");\n\tUdp.endPacket();\n\t//Serial.println("6");\n\n\treturn 0;\n}\n';return["getNetworkTime()",
Blockly.Arduino.ORDER_ATOMIC]};

/*

 Blocks for LinkIt 7697

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
Blockly.Arduino.oled_display={};
Blockly.Arduino.oled_display_setting=function(){
  Blockly.Arduino.definitions_.define_wire='#include "Wire.h"';
  Blockly.Arduino.definitions_.define_u8g2_oled_include='#include "U8g2lib.h"';
  var a=this.getFieldValue("CHIPSET");
  Blockly.Arduino.definitions_.define_u8g2_oled_declare="U8G2_"+a+"_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);";
  Blockly.Arduino.setups_.setup_define_u8g2_oled="u8g2.begin();\n  u8g2.setFont(u8g2_font_6x10_tf);\n  u8g2.setFontRefHeightExtendedText();\n  u8g2.setDrawColor(1);\n  u8g2.setFontPosTop();\n  u8g2.setFontDirection(0);\n";return""
};
Blockly.Arduino.oled_display_clear=function(){return"u8g2.clearDisplay();\n"};
Blockly.Arduino.oled_display_draw_commands=function(){return"u8g2.firstPage();\ndo {\n"+Blockly.Arduino.statementToCode(this,"DRAW_CMD")+"\n  u8g2.sendBuffer();\n} while (u8g2.nextPage());\n"};
Blockly.Arduino.oled_display_draw_line=function(){var a=Blockly.Arduino.valueToCode(this,"START_X",Blockly.Arduino.ORDER_NONE)||"0",b=Blockly.Arduino.valueToCode(this,"START_Y",Blockly.Arduino.ORDER_NONE)||"0",c=Blockly.Arduino.valueToCode(this,"END_X",Blockly.Arduino.ORDER_NONE)||"0",d=Blockly.Arduino.valueToCode(this,"END_Y",Blockly.Arduino.ORDER_NONE)||"0";return"u8g2.drawLine("+a+", "+b+", "+c+", "+d+");\n"};
Blockly.Arduino.oled_display_draw_box=function(){var a=Blockly.Arduino.valueToCode(this,"START_X",Blockly.Arduino.ORDER_NONE)||"0",b=Blockly.Arduino.valueToCode(this,"START_Y",Blockly.Arduino.ORDER_NONE)||"0",c=Blockly.Arduino.valueToCode(this,"END_X",Blockly.Arduino.ORDER_NONE)||"0",d=Blockly.Arduino.valueToCode(this,"END_Y",Blockly.Arduino.ORDER_NONE)||"0";return"u8g2.drawBox("+a+", "+b+", "+c+", "+d+");\n"};
Blockly.Arduino.oled_display_draw_frame=function(){var a=Blockly.Arduino.valueToCode(this,"START_X",Blockly.Arduino.ORDER_NONE)||"0",b=Blockly.Arduino.valueToCode(this,"START_Y",Blockly.Arduino.ORDER_NONE)||"0",c=Blockly.Arduino.valueToCode(this,"END_X",Blockly.Arduino.ORDER_NONE)||"0",d=Blockly.Arduino.valueToCode(this,"END_Y",Blockly.Arduino.ORDER_NONE)||"0";return"u8g2.drawFrame("+a+", "+b+", "+c+", "+d+");\n"};
Blockly.Arduino.oled_display_draw_disc=function(){var a=Blockly.Arduino.valueToCode(this,"CENTER_X",Blockly.Arduino.ORDER_NONE)||"0",b=Blockly.Arduino.valueToCode(this,"CENTER_Y",Blockly.Arduino.ORDER_NONE)||"0",c=Blockly.Arduino.valueToCode(this,"RADIUS",Blockly.Arduino.ORDER_NONE)||"0";return"u8g2.drawDisc("+a+", "+b+", "+c+");\n"};
Blockly.Arduino.oled_display_draw_circle=function(){var a=Blockly.Arduino.valueToCode(this,"CENTER_X",Blockly.Arduino.ORDER_NONE)||"0",b=Blockly.Arduino.valueToCode(this,"CENTER_Y",Blockly.Arduino.ORDER_NONE)||"0",c=Blockly.Arduino.valueToCode(this,"RADIUS",Blockly.Arduino.ORDER_NONE)||"0";return"u8g2.drawCircle("+a+", "+b+", "+c+");\n"};
Blockly.Arduino.oled_display_draw_text=function(){var a=Blockly.Arduino.valueToCode(this,"START_X",Blockly.Arduino.ORDER_NONE)||"0",b=Blockly.Arduino.valueToCode(this,"START_Y",Blockly.Arduino.ORDER_NONE)||"0",c=Blockly.Arduino.valueToCode(this,"CONTENT",Blockly.Arduino.ORDER_NONE)||'""';return"u8g2.drawStr("+a+", "+b+", String("+c+").c_str());\n"};
Blockly.Arduino.oled_display_set_font=function(){
  return"u8g2.setFont("+this.getFieldValue("FONT")+");\n"
};
Blockly.Arduino.aerobot={};Blockly.Arduino.aerobot_move=function(){var a=this.getFieldValue("DIRECTION");Blockly.Arduino.definitions_.include_aerobot="#include <AERobot.h>";Blockly.Arduino.setups_.init_aerobot="initAERobot();";Blockly.Arduino.setups_.seed_aerobot="randomSeed(1);\n";return"move_"+a+"();\n"};
Blockly.Arduino.aerobot_rotate=function(){var a=this.getFieldValue("DIRECTION");Blockly.Arduino.definitions_.include_aerobot="#include <AERobot.h>";Blockly.Arduino.setups_.init_aerobot="initAERobot();";Blockly.Arduino.setups_.seed_aerobot="randomSeed(1);\n";return"rotate_"+a+"();\n"};
Blockly.Arduino.aerobot_lightsens=function(){var a=this.getFieldValue("SENS");Blockly.Arduino.definitions_.include_aerobot="#include <AERobot.h>";Blockly.Arduino.setups_.init_aerobot="initAERobot();\n";Blockly.Arduino.setups_.seed_aerobot="randomSeed(1);\n";return"lightSens("+a+");\n"};
Blockly.Arduino.aerobot_distsens=function(){var a=this.getFieldValue("SENS");Blockly.Arduino.definitions_.include_aerobot="#include <AERobot.h>";Blockly.Arduino.setups_.init_aerobot="initAERobot();";Blockly.Arduino.setups_.seed_aerobot="randomSeed(1);\n";return"distSens("+a+");\n"};
Blockly.Arduino.aerobot_linesens=function(){this.getFieldValue("SENS");Blockly.Arduino.definitions_.include_aerobot="#include <AERobot.h>";Blockly.Arduino.setups_.init_aerobot="initAERobot();";Blockly.Arduino.setups_.seed_aerobot="randomSeed(1);\n";return["lineSens();\n",Blockly.Arduino.ORDER_ATOMIC]};function hexToR(a){return parseInt(cutHex(a).substring(0,2),16)}function hexToG(a){return parseInt(cutHex(a).substring(2,4),16)}function hexToB(a){return parseInt(cutHex(a).substring(4,6),16)}
function cutHex(a){return"#"==a.charAt(0)?a.substring(1,7):a}Blockly.Arduino.aerobot_setled=function(){var a=this.getFieldValue("RGB");Blockly.Arduino.definitions_.include_aerobot="#include <AERobot.h>";Blockly.Arduino.setups_.init_aerobot="initAERobot();";Blockly.Arduino.setups_.seed_aerobot="randomSeed(1);\n";return"setLED("+hexToR(a)+","+hexToG(a)+","+hexToB(a)+");\n"};Blockly.Arduino.grove={};Blockly.Arduino.grove_led=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("STAT");Blockly.Arduino.setups_["setup_green_led_"+a]="pinMode("+a+", OUTPUT);";return"digitalWrite("+a+","+b+");\n"};Blockly.Arduino.grove_button=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.setups_["setup_button_"+a]="pinMode("+a+", INPUT);";return["digitalRead("+a+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.grove_touch=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.setups_["setup_touch_"+a]="pinMode("+a+", INPUT);";return["digitalRead("+a+")",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.grove_light_sensor=function(){return["analogRead("+this.getFieldValue("PIN")+")",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.grove_rotary_angle=function(){return["analogRead("+this.getFieldValue("PIN")+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.grove_tilt_switch=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.setups_["setup_tilt_switch_"+a]="pinMode("+a+", INPUT);";return["digitalRead("+a+")",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.grove_buzzer=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("STAT");Blockly.Arduino.setups_["setup_piezo_buzzer_"+a]="pinMode("+a+", OUTPUT);";return"digitalWrite("+a+","+b+");\n"};
Blockly.Arduino.grove_relay=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("STAT");Blockly.Arduino.setups_["setup_relay_"+a]="pinMode("+a+", OUTPUT);";return"digitalWrite("+a+", "+b+");\n"};Blockly.Arduino.grove_temporature_sensor=function(){var a=this.getFieldValue("PIN");return["round(1/(log(((float)(1023-analogRead("+a+"))*10000/analogRead("+a+"))/10000)/3975+1/298.15)-273.15)",Blockly.Arduino.ORDER_ATOMIC]};
var _get_next_pin=function(a){var b=a;b=parseInt(b)?parseInt(a)+1:"A"+(parseInt(b.slice(1,b.length))+1);a=profile["default"].digital.length;for(var c=!0,d=0;d<a;d++)profile["default"].digital[d][1]==b&&(c=!1);return c?(alert("Grove Sensor needs PIN#+1 port, current setting is out of bound."),null):b};
Blockly.Arduino.grove_serial_lcd_print=function(){var a=this.getFieldValue("PIN"),b=Blockly.Arduino.valueToCode(this,"TEXT",Blockly.Arduino.ORDER_UNARY_POSTFIX)||"''",c=Blockly.Arduino.valueToCode(this,"TEXT2",Blockly.Arduino.ORDER_UNARY_POSTFIX)||"''",d=Blockly.Arduino.valueToCode(this,"DELAY_TIME",Blockly.Arduino.ORDER_ATOMIC)||"1000";Blockly.Arduino.definitions_.define_seriallcd="#include <SerialLCD.h>\n";Blockly.Arduino.definitions_.define_softwareserial="#include <SoftwareSerial.h>\n";var e=
_get_next_pin(a);Blockly.Arduino.definitions_["var_lcd_"+a]="SerialLCD slcd_"+a+"("+a+","+e+");\n";Blockly.Arduino.setups_["setup_lcd_"+a]="slcd_"+a+".begin();\n";a="slcd_"+a+".backlight();\n"+("slcd_"+a+".setCursor(0,0);\n")+("slcd_"+a+".print("+b+");\n")+("slcd_"+a+".setCursor(0,1);\n")+("slcd_"+a+".print("+c+");\n");return a+="delay("+d+");\n"};
Blockly.Arduino.grove_serial_lcd_power=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("STAT");Blockly.Arduino.definitions_.define_seriallcd="#include <SerialLCD.h>\n";Blockly.Arduino.definitions_.define_softwareserial="#include <SoftwareSerial.h>\n";var c=_get_next_pin(a);Blockly.Arduino.definitions_["var_lcd"+a]="SerialLCD slcd_"+a+"("+a+","+c+");\n";a="slcd_"+a;return"ON"===b?a+".Power();\n":a+".noPower();\n"};
Blockly.Arduino.grove_serial_lcd_effect=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("STAT");Blockly.Arduino.definitions_.define_seriallcd="#include <SerialLCD.h>\n";Blockly.Arduino.definitions_.define_softwareserial="#include <SoftwareSerial.h>\n";var c=_get_next_pin(a);Blockly.Arduino.definitions_["var_lcd"+a]="SerialLCD slcd_"+a+"("+a+","+c+");\n";a="slcd_"+a;return"LEFT"===b?a+".scrollDisplayLeft();\n":"RIGHT"===b?a+".scrollDisplayRight();\n":a+".autoscroll();\n"};
Blockly.Arduino.grove_sound_sensor=function(){return["analogRead("+this.getFieldValue("PIN")+")",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.grove_pir_motion_sensor=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.setups_["setup_input_"+a]="pinMode("+a+", INPUT);";return["digitalRead("+a+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.grove_line_finder=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.setups_["setup_input_"+a]="pinMode("+a+", INPUT);";return["digitalRead("+a+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.grove_ultrasonic_ranger=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("UNIT");Blockly.Arduino.definitions_.define_ultrasonic='#include "Ultrasonic.h"\n';Blockly.Arduino.definitions_["var_ultrasonic"+a]="Ultrasonic __ultrasonic"+a+"("+a+");\n";return["cm"===b?"__ultrasonic"+a+".MeasureInCentimeters()":"__ultrasonic"+a+".MeasureInInches()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.grove_motor_shield=function(){var a=this.getFieldValue("DIRECTION");Blockly.Arduino.setups_.setup_motor="pinMode(8,OUTPUT);//I1\n  pinMode(11,OUTPUT);//I2\n  pinMode(9,OUTPUT);//speedPinA\n  pinMode(12,OUTPUT);//I3\n  pinMode(13,OUTPUT);//i4\n  pinMode(10,OUTPUT);//speedPinB\n";var b="";"forward"===a?(Blockly.Arduino.definitions_.define_forward="void forward()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,HIGH);//turn DC Motor B move clockwise\n  digitalWrite(12,LOW);\n  digitalWrite(11,LOW);//turn DC Motor A move anticlockwise\n  digitalWrite(8,HIGH);\n}\n",
b="forward();\n"):"right"===a?(Blockly.Arduino.definitions_.define_right="void right()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,LOW);//turn DC Motor B move anticlockwise\n  digitalWrite(12,HIGH);\n  digitalWrite(11,LOW);//turn DC Motor A move anticlockwise\n  digitalWrite(8,HIGH);\n}\n\n",b="right();\n"):"left"===a?(Blockly.Arduino.definitions_.define_left="void left()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,HIGH);//turn DC Motor B move clockwise\n  digitalWrite(12,LOW);\n  digitalWrite(11,HIGH);//turn DC Motor A move clockwise\n  digitalWrite(8,LOW);\n}\n\n",
b="left();\n"):"backward"===a?(Blockly.Arduino.definitions_.define_backward="void backward()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,LOW);//turn DC Motor B move anticlockwise\n  digitalWrite(12,HIGH);\n  digitalWrite(11,HIGH);//turn DC Motor A move clockwise\n  digitalWrite(8,LOW);\n}\n\n",b="backward();\n"):"stop"===a&&(Blockly.Arduino.definitions_.define_stop="void stop()\n{\ndigitalWrite(9,LOW);// Unenble the pin, to stop the motor. this should be done to avid damaging the motor.\ndigitalWrite(10,LOW);\ndelay(1000);\n}\n\n",
b="stop();\n");return b};Blockly.Arduino.grove_thumb_joystick=function(){var a=this.getFieldValue("PIN");return["analogRead("+("y"===this.getFieldValue("AXIS")?_get_next_pin(a):a)+")",Blockly.Arduino.ORDER_ATOMIC]};function hexToR(a){return parseInt(cutHex(a).substring(0,2),16)}function hexToG(a){return parseInt(cutHex(a).substring(2,4),16)}function hexToB(a){return parseInt(cutHex(a).substring(4,6),16)}function cutHex(a){return"#"==a.charAt(0)?a.substring(1,7):a}
Blockly.Arduino.grove_rgb_led=function(){var a=this.getFieldValue("PIN"),b=_get_next_pin(a);Blockly.Arduino.setups_["setup_input_"+a]="pinMode("+a+", OUTPUT);";Blockly.Arduino.setups_["setup_input_"+b]="pinMode("+b+", OUTPUT);";Blockly.Arduino.definitions_.define_uint8="#define uint8 unsigned char";Blockly.Arduino.definitions_.define_uint16="#define uint16 unsigned int";Blockly.Arduino.definitions_.define_uint32="#define uint32 unsigned long int";Blockly.Arduino.definitions_["define_clkproduce_"+
a]="void ClkProduce_"+a+"(void)\n{\n  digitalWrite("+a+", LOW);\n  delayMicroseconds(20);\n  digitalWrite("+a+", HIGH);\n  delayMicroseconds(20);\n}\n";Blockly.Arduino.definitions_["define_send32zero_"+a]="void Send32Zero_"+a+"(void)\n{\n  uint8 i;\n  for (i=0; i<32; i++)\n  {\n    digitalWrite("+b+", LOW);\n    ClkProduce_"+a+"();\n  }\n}\n";Blockly.Arduino.definitions_.define_taskanticode="uint8 TakeAntiCode(uint8 dat)\n{\n  uint8 tmp = 0;\n  if ((dat & 0x80) == 0)\n  {\n    tmp |= 0x02;\n  }\n  \n  if ((dat & 0x40) == 0)\n  {\n    tmp |= 0x01;\n  }\n  return tmp;\n}\n";
Blockly.Arduino.definitions_["define_datasend_"+a]="// gray data\nvoid DatSend_"+a+"(uint32 dx)\n{\n  uint8 i;\n  for (i=0; i<32; i++)\n  {\n    if ((dx & 0x80000000) != 0)\n    {\n      digitalWrite("+b+", HIGH);\n    }\n    else\n    {\n      digitalWrite("+b+", LOW);\n    }\n  dx <<= 1;\n  ClkProduce_"+a+"();\n  }\n}\n";Blockly.Arduino.definitions_["define_datadealwithsend_"+a]="// data processing\nvoid DataDealWithAndSend_"+a+"(uint8 r, uint8 g, uint8 b)\n{\n  uint32 dx = 0;\n  dx |= (uint32)0x03 << 30;             // highest two bits 1\uff0cflag bits\n  dx |= (uint32)TakeAntiCode(b) << 28;\n  dx |= (uint32)TakeAntiCode(g) << 26;\n  dx |= (uint32)TakeAntiCode(r) << 24;\n\n  dx |= (uint32)b << 16;\n  dx |= (uint32)g << 8;\n  dx |= r;\n\n  DatSend_"+
a+"(dx);\n}\n";b="Send32Zero_"+a+"(); // begin\n";if(0==this.itemCount_)return"";for(var c=0;c<this.itemCount_;c++){var d=this.getFieldValue("RGB"+c);b+="DataDealWithAndSend_"+a+"("+hexToR(d)+", "+hexToG(d)+", "+hexToB(d)+"); // first node data\n"}return b+("Send32Zero_"+a+"();  // send to update data\n")};
Blockly.Arduino.grove_bluetooth_slave=function(){var a=this.getFieldValue("PIN"),b=_get_next_pin(a),c=this.getFieldValue("NAME");this.getFieldValue("PINCODE");var d=Blockly.Arduino.statementToCode(this,"RCV"),e=Blockly.Arduino.statementToCode(this,"SNT");Blockly.Arduino.definitions_.define_softwareserial="#include <SoftwareSerial.h>\n";Blockly.Arduino.definitions_["var_bluetooth_"+a]="SoftwareSerial blueToothSerial_"+a+"("+a+","+b+");\n";Blockly.Arduino.setups_["setup_bluetooth_"+a]="Serial.begin(9600);\n";
Blockly.Arduino.setups_["setup_bluetooth_"+a]+="  pinMode("+a+", INPUT);\n";Blockly.Arduino.setups_["setup_bluetooth_"+a]+="  pinMode("+b+", OUTPUT);\n";Blockly.Arduino.setups_["setup_bluetooth_"+a]+="  setupBlueToothConnection_"+a+"();\n";Blockly.Arduino.definitions_["define_setupBlueToothConnection_"+a]="void setupBlueToothConnection_"+a+"()\n{\n  blueToothSerial_"+a+".begin(38400); //Set BluetoothBee BaudRate to default baud rate 38400\n  blueToothSerial_"+a+'.print("\\r\\n+STWMOD=0\\r\\n"); //set the bluetooth work in slave mode\n  blueToothSerial_'+
a+'.print("\\r\\n+STNA='+c+'\\r\\n"); //set the bluetooth name as "'+c+'"\n  blueToothSerial_'+a+'.print("\\r\\n+STPIN=0000\\r\\n");//Set SLAVE pincode"0000"\n  blueToothSerial_'+a+'.print("\\r\\n+STOAUT=1\\r\\n"); // Permit Paired device to connect me\n  blueToothSerial_'+a+'.print("\\r\\n+STAUTO=0\\r\\n"); // Auto-connection should be forbidden here\n  delay(2000); // This delay is required.\n  blueToothSerial_'+a+'.print("\\r\\n+INQ=1\\r\\n"); //make the slave bluetooth inquirable \n  Serial.println("The slave bluetooth is inquirable!");\n  delay(2000); // This delay is required.\n  blueToothSerial_'+
a+".flush();\n}\n";return"char recvChar_"+a+";\nwhile(1) {\n  if(blueToothSerial_"+a+".available()) {//check if there is any data sent from the remote bluetooth shield\n    recvChar_"+a+" = blueToothSerial_"+a+".read();\n    Serial.print(recvChar_"+a+");\n"+d+"  }\n  if(Serial.available()){//check if there is any data sent from the local serial terminal, you can add the other applications here\n    recvChar_"+a+" = Serial.read();\n    blueToothSerial_"+a+".print(recvChar_"+a+");\n"+e+"  }\n}\n"};
Blockly.Arduino.grove_rgb_lcd_setcolor=function(){Blockly.Arduino.definitions_.define_wire="#include <Wire.h>\n";Blockly.Arduino.definitions_.define_rgb_lcd='#include "rgb_lcd.h"\nrgb_lcd grove_lcd;\n';var a=this.getFieldValue("RGB");return"grove_lcd.setRGB("+hexToR(a)+", "+hexToG(a)+", "+hexToB(a)+");\n"};
Blockly.Arduino.grove_rgb_lcd_begin=function(){var a=this.getFieldValue("COLS"),b=this.getFieldValue("ROWS");Blockly.Arduino.definitions_.define_wire="#include <Wire.h>\n";Blockly.Arduino.definitions_.define_rgb_lcd='#include "rgb_lcd.h"\nrgb_lcd grove_lcd;\n';return"grove_lcd.begin("+a+","+b+");\n"};
Blockly.Arduino.grove_rgb_lcd_print=function(){var a=Blockly.Arduino.valueToCode(this,"PRINT",Blockly.Arduino.ORDER_NONE);Blockly.Arduino.definitions_.define_wire="#include <Wire.h>\n";Blockly.Arduino.definitions_.define_rgb_lcd='#include "rgb_lcd.h"\nrgb_lcd grove_lcd;\n';return"grove_lcd.print("+a+");\n"};
Blockly.Arduino.grove_rgb_lcd_setcursor=function(){var a=this.getFieldValue("COL"),b=this.getFieldValue("ROW");Blockly.Arduino.definitions_.define_wire="#include <Wire.h>\n";Blockly.Arduino.definitions_.define_rgb_lcd='#include "rgb_lcd.h"\nrgb_lcd grove_lcd;\n';return"grove_lcd.setCursor("+a+","+b+");\n"};
Blockly.Arduino.grove_rgb_lcd_custom_setcursor=function(){var a=Blockly.Arduino.valueToCode(this,"COL",Blockly.Arduino.ORDER_NONE)||"0",b=Blockly.Arduino.valueToCode(this,"ROW",Blockly.Arduino.ORDER_NONE)||"0";Blockly.Arduino.definitions_.define_wire="#include <Wire.h>\n";Blockly.Arduino.definitions_.define_rgb_lcd='#include "rgb_lcd.h"\nrgb_lcd grove_lcd;\n';return"grove_lcd.setCursor("+a+","+b+");\n"};
Blockly.Arduino.grove_rgb_lcd_clear=function(){Blockly.Arduino.definitions_.define_wire="#include <Wire.h>\n";Blockly.Arduino.definitions_.define_rgb_lcd='#include "rgb_lcd.h"\nrgb_lcd grove_lcd;\n';return"grove_lcd.clear();\n"};Blockly.Arduino.grove_rgb_lcd_scrolldisplayleft=function(){Blockly.Arduino.definitions_.define_wire="#include <Wire.h>\n";Blockly.Arduino.definitions_.define_rgb_lcd='#include "rgb_lcd.h"\nrgb_lcd grove_lcd;\n';return"grove_lcd.scrollDisplayLeft();\n"};
Blockly.Arduino.grove_rgb_lcd_scrolldisplayright=function(){Blockly.Arduino.definitions_.define_wire="#include <Wire.h>\n";Blockly.Arduino.definitions_.define_rgb_lcd='#include "rgb_lcd.h"\nrgb_lcd grove_lcd;\n';return"grove_lcd.scrollDisplayRight();\n"};Blockly.Arduino.grove_rgb_lcd_switch_scroll=function(){var a="grove_lcd.";return a=1==this.getFieldValue("SW")?a+"autoscroll();\n":a+"noAutoscroll();\n"};Blockly.Arduino.grove_rgb_lcd_autoscroll=function(){return"grove_lcd.autoscroll();\n"};
Blockly.Arduino.grove_rgb_lcd_noautoscroll=function(){return"grove_lcd.noAutoscroll();\n"};Blockly.Arduino.grove_rgb_lcd_lefttoright=function(){return"grove_lcd.leftToRight();\n"};Blockly.Arduino.grove_rgb_lcd_righttoleft=function(){return"grove_lcd.rightToLeft();\n"};Blockly.Arduino.grove_ir_receiver_init=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.definitions_.define_irsendrev="#include <IRSendRev.h>\n";Blockly.Arduino.setups_["setup_ir_init_"+a]="IR.Init("+a+");\n";return""};
Blockly.Arduino.grove_ir_receiver_check_data=function(){return["IR.IsDta()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.grove_ir_receiver_receive=function(){Blockly.Arduino.definitions_.define_receive_datalength="unsigned char dta[20];\n";return"IR.Recv(dta);\n"};Blockly.Arduino.grove_ir_receiver_data=function(){Blockly.Arduino.definitions_.define_irsendrev="#include <IRSendRev.h>\n";return["dta[6]",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.grove_ir_emitter_send=function(){var a=Blockly.Arduino.valueToCode(this,"DATA",Blockly.Arduino.ORDER_NONE)||0;0>a?a=0:255<a&&(a=255);Blockly.Arduino.definitions_.define_irsendrev="#include <IRSendRev.h>\n";Blockly.Arduino.definitions_.define_emmiter_datalength="unsigned char dtaSend[20];\n";Blockly.Arduino.definitions_.define_dtainit="void dtaInit()\n{\n  dtaSend[0] = 11;\n  dtaSend[1] = 180;\n  dtaSend[2] = 91;\n  dtaSend[3] = 11;\n  dtaSend[4] = 33;\n  dtaSend[5] = 1;\n}\n";return"dtaInit();\n"+
("dtaSend[6] = "+a+";\n")+"IR.Send(dtaSend,38);\n"};
Blockly.Arduino.grove_temporature_humidity_sensor=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("UNIT");Blockly.Arduino.definitions_.include_temporature_humidity='#include "DHT.h"\n';Blockly.Arduino.definitions_["define_temporature_humidity"+a]="DHT __dht"+a+"("+a+", DHT22);\n";Blockly.Arduino.setups_["setup_temporature_humidity"+a]="__dht"+a+".begin();\n";return["h"===b?"__dht"+a+".readHumidity()":"c"===b?"__dht"+a+".readTemperature()":"__dht"+a+".convertCtoF(__dht"+a+".readTemperature())",
Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.grove_led_bar=function(){var a=this.getFieldValue("PIN"),b=_get_next_pin(a),c=Blockly.Arduino.valueToCode(this,"LEVEL",Blockly.Arduino.ORDER_ATOMIC)||0;Blockly.Arduino.definitions_.include_grove_led_bar="#include <Grove_LED_Bar.h>\n";Blockly.Arduino.definitions_["define_grove_led_bar"+a]="Grove_LED_Bar __bar"+a+"("+b+", "+a+", 0);\n";Blockly.Arduino.setups_["setup_grove_led_bar"+a]="__bar"+a+".begin();\n";return"__bar"+a+".setLevel("+c+");\n"};
Blockly.Arduino.grove_oled_display_clear=function(){Blockly.Arduino.definitions_.include_wire_lib="#include <Wire.h>\n";Blockly.Arduino.definitions_.include_seeedoled_lib="#include <SeeedOLED.h>\n";Blockly.Arduino.setups_.setup_wire_lib="Wire.begin();\n";Blockly.Arduino.setups_.setup_seeedoled_lib_init="SeeedOled.init();\n";Blockly.Arduino.setups_.setup_seeedoled_lib_deactivatescroll="SeeedOled.deactivateScroll();\n";Blockly.Arduino.setups_.setup_seeedoled_lib_setmode="SeeedOled.setPageMode();\n";
return"SeeedOled.clearDisplay();\n"};
Blockly.Arduino.grove_oled_display_set_cursor=function(){var a=Blockly.Arduino.valueToCode(this,"ROW",Blockly.Arduino.ORDER_ATOMIC)||0,b=Blockly.Arduino.valueToCode(this,"COL",Blockly.Arduino.ORDER_ATOMIC)||0;Blockly.Arduino.definitions_.include_wire_lib="#include <Wire.h>\n";Blockly.Arduino.definitions_.include_seeedoled_lib="#include <SeeedOLED.h>\n";Blockly.Arduino.setups_.setup_wire_lib="Wire.begin();\n";Blockly.Arduino.setups_.setup_seeedoled_lib_init="SeeedOled.init();\n";Blockly.Arduino.setups_.setup_seeedoled_lib_deactivatescroll=
"SeeedOled.deactivateScroll();\n";Blockly.Arduino.setups_.setup_seeedoled_lib_setmode="SeeedOled.setPageMode();\n";return"SeeedOled.setTextXY("+a+", "+b+");\n"};
Blockly.Arduino.grove_oled_display_put=function(){var a=this.getFieldValue("TYPE");var b="Number"===a||"Float"===a?Blockly.Arduino.valueToCode(this,"VALUE",Blockly.Arduino.ORDER_ATOMIC)||0:Blockly.Arduino.valueToCode(this,"VALUE",Blockly.Arduino.ORDER_ATOMIC)||"";Blockly.Arduino.definitions_.include_wire_lib="#include <Wire.h>\n";Blockly.Arduino.definitions_.include_seeedoled_lib="#include <SeeedOLED.h>\n";Blockly.Arduino.setups_.setup_wire_lib="Wire.begin();\n";Blockly.Arduino.setups_.setup_seeedoled_lib_init=
"SeeedOled.init();\n";Blockly.Arduino.setups_.setup_seeedoled_lib_deactivatescroll="SeeedOled.deactivateScroll();\n";Blockly.Arduino.setups_.setup_seeedoled_lib_setmode="SeeedOled.setPageMode();\n";return"SeeedOled.put"+a+"("+b+");\n"};
Blockly.Arduino.grove_imu_9dof_setup=function(){Blockly.Arduino.definitions_.define_wire="#include <Wire.h>";Blockly.Arduino.definitions_.define_sensor_include="#include <mpu9250_blockly.h>";Blockly.Arduino.definitions_.define_mpu9250_inst="MPU9250Block mpu9250;";Blockly.Arduino.setups_.setup_mpu9250="mpu9250.begin();"};Blockly.Arduino.grove_imu_9dof_read_acc=function(){Blockly.Arduino.grove_imu_9dof_setup();return["mpu9250.getAcc"+this.getFieldValue("AXIS")+"()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.grove_imu_9dof_read_gyro=function(){Blockly.Arduino.grove_imu_9dof_setup();return["mpu9250.getGyro"+this.getFieldValue("AXIS")+"()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.grove_imu_9dof_read_mag=function(){Blockly.Arduino.grove_imu_9dof_setup();return["mpu9250.getMag"+this.getFieldValue("AXIS")+"()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.grove_imu_9dof_read_attitude=function(){Blockly.Arduino.grove_imu_9dof_setup();return["mpu9250.get"+this.getFieldValue("ATTITUDE")+"()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.grove_imu_9dof_read_north=function(){Blockly.Arduino.grove_imu_9dof_setup();return["mpu9250.getDegreeToMagNorth()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.pms={};
Blockly.Arduino.pms_read=function(){var a=this.getFieldValue("RX_PIN"),b=this.getFieldValue("TX_PIN"),c=this.getFieldValue("PM_LEVEL");Blockly.Arduino.definitions_.define_pms_include="#include <PMS.h>\n#include <SoftwareSerial.h>\n";Blockly.Arduino.definitions_.define_pms_receive_inst="SoftwareSerial pmsSerial("+a+", "+b+");\nPMS pms(pmsSerial);\nPMS::DATA pmsData;\n";Blockly.Arduino.definitions_.define_pms_receive_helper_func_pm1="int pms_read_PM1()\n{\n  pms.read(pmsData);\n  return pmsData.PM_AE_UG_1_0;\n}\n";Blockly.Arduino.definitions_.define_pms_receive_helper_func_pm2=
"int pms_read_PM2()\n{\n  pms.read(pmsData);\n  return pmsData.PM_AE_UG_2_5;\n}\n";Blockly.Arduino.definitions_.define_pms_receive_helper_func_pm10="int pms_read_PM10()\n{\n  pms.read(pmsData);\n  return pmsData.PM_AE_UG_10_0;\n}\n";Blockly.Arduino.setups_.setup_pms_receive_inst="pmsSerial.begin(9600);\n";return[c+"()",Blockly.Arduino.ORDER_ATOMIC]};/*

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
Blockly.Arduino.htu={};Blockly.Arduino.htu21d_read=function(){Blockly.Arduino.definitions_.define_wire="#include <Wire.h>";Blockly.Arduino.definitions_.define_htu_include="#include <SHT2x.h>";Blockly.Arduino.setups_.setup_htu_inst="Wire.begin();";var a="";switch(this.getFieldValue("MEASUREMENT")){case "HUMIDITY":a+="SHT2x.GetHumidity()";break;case "TEMPERATURE_C":a+="SHT2x.GetTemperature()"}return[a,Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.i2c_matrix={};
Blockly.Arduino.i2c_matrix_begin=function(){var a=this.getFieldValue("ADDRESS"),b=this.getFieldValue("TYPE");Blockly.Arduino.definitions_.define_wire="#include <Wire.h>\n";Blockly.Arduino.definitions_.define_adafruit_ledbackpack='#include "Adafruit_LEDBackpack.h"\n';Blockly.Arduino.definitions_.define_adafruit_gfx='#include "Adafruit_GFX.h"\n';Blockly.Arduino.definitions_["define_"+b]="Adafruit_"+b+" matrix = Adafruit_"+b+"();\n";Blockly.Arduino.setups_["setup_"+b+"_"+a]="matrix.begin("+a+");";return""};
Blockly.Arduino.i2c_matrix_clear=function(){return"matrix.clear();\n"};Blockly.Arduino.i2c_matrix_setcursor=function(){var a=Blockly.Arduino.valueToCode(this,"COL",Blockly.Arduino.ORDER_ATOMIC)||"0",b=Blockly.Arduino.valueToCode(this,"ROW",Blockly.Arduino.ORDER_ATOMIC)||"0";return"matrix.setCursor("+a+","+b+");\n"};Blockly.Arduino.i2c_matrix_print=function(){return"matrix.print("+(Blockly.Arduino.valueToCode(this,"CONTENT",Blockly.Arduino.ORDER_ATOMIC)||"")+");\n"};
Blockly.Arduino.i2c_matrix_settextsize=function(){return"matrix.setTextSize("+this.getFieldValue("SIZE")+");\n"};Blockly.Arduino.i2c_matrix_settextcolor=function(){return"matrix.setTextColor("+this.getFieldValue("COLOR")+");\n"};Blockly.Arduino.i2c_matrix_settextwrap=function(){return"matrix.setTextWrap("+("TRUE"==this.getFieldValue("BOOL")?"true":"false")+");\n"};
Blockly.Arduino.i2c_matrix_drawpixel=function(){var a=Blockly.Arduino.valueToCode(this,"X",Blockly.Arduino.ORDER_ATOMIC)||"0",b=Blockly.Arduino.valueToCode(this,"Y",Blockly.Arduino.ORDER_ATOMIC)||"0",c=this.getFieldValue("COLOR");return"matrix.drawPixel("+a+","+b+","+c+");\n"};
Blockly.Arduino.i2c_matrix_drawcircle=function(){var a=Blockly.Arduino.valueToCode(this,"X",Blockly.Arduino.ORDER_ATOMIC)||"0",b=Blockly.Arduino.valueToCode(this,"Y",Blockly.Arduino.ORDER_ATOMIC)||"0",c=Blockly.Arduino.valueToCode(this,"D",Blockly.Arduino.ORDER_ATOMIC)||"0",d=this.getFieldValue("COLOR");return"matrix.drawCircle("+a+","+b+","+c+","+d+");\n"};
Blockly.Arduino.i2c_matrix_drawrect=function(){var a=Blockly.Arduino.valueToCode(this,"X0",Blockly.Arduino.ORDER_ATOMIC)||"0",b=Blockly.Arduino.valueToCode(this,"Y0",Blockly.Arduino.ORDER_ATOMIC)||"0",c=Blockly.Arduino.valueToCode(this,"X1",Blockly.Arduino.ORDER_ATOMIC)||"0",d=Blockly.Arduino.valueToCode(this,"Y1",Blockly.Arduino.ORDER_ATOMIC)||"0",e=this.getFieldValue("COLOR");return"matrix.drawRect("+a+","+b+","+c+","+d+","+e+");\n"};
Blockly.Arduino.i2c_matrix_drawline=function(){var a=Blockly.Arduino.valueToCode(this,"X0",Blockly.Arduino.ORDER_ATOMIC)||"0",b=Blockly.Arduino.valueToCode(this,"Y0",Blockly.Arduino.ORDER_ATOMIC)||"0",c=Blockly.Arduino.valueToCode(this,"X1",Blockly.Arduino.ORDER_ATOMIC)||"0",d=Blockly.Arduino.valueToCode(this,"Y1",Blockly.Arduino.ORDER_ATOMIC)||"0",e=this.getFieldValue("COLOR");return"matrix.drawLine("+a+","+b+","+c+","+d+","+e+");\n"};
Blockly.Arduino.i2c_matrix_fillrect=function(){var a=Blockly.Arduino.valueToCode(this,"X0",Blockly.Arduino.ORDER_ATOMIC)||"0",b=Blockly.Arduino.valueToCode(this,"Y0",Blockly.Arduino.ORDER_ATOMIC)||"0",c=Blockly.Arduino.valueToCode(this,"X1",Blockly.Arduino.ORDER_ATOMIC)||"0",d=Blockly.Arduino.valueToCode(this,"Y1",Blockly.Arduino.ORDER_ATOMIC)||"0",e=this.getFieldValue("COLOR");return"matrix.fillRect("+a+","+b+","+c+","+d+","+e+");\n"};
Blockly.Arduino.i2c_matrix_setrotation=function(){return"matrix.setRotation("+this.getFieldValue("ANGLE")+");\n"};Blockly.Arduino.i2c_matrix_writedisplay=function(){return"matrix.writeDisplay();\n"};Blockly.Arduino.i2c_matrix_writedigitnum=function(){var a=this.getFieldValue("POSITION"),b=Blockly.Arduino.valueToCode(this,"NUM",Blockly.Arduino.ORDER_ATOMIC)||"0",c=Blockly.Arduino.valueToCode(this,"DOTS",Blockly.Arduino.ORDER_NONE)||"false";return"matrix.writeDigitNum("+a+","+b+","+c+");\n"};
Blockly.Arduino.i2c_matrix_drawcolon=function(){return"matrix.drawColon("+(Blockly.Arduino.valueToCode(this,"DOTS",Blockly.Arduino.ORDER_NONE)||"false")+");\n"};

// Copyright 2012 Google Inc.  Apache License 2.0
Blockly.Arduino.shield_bot={};Blockly.Arduino.shield_bot_setmaxspeed=function(){var a=this.getFieldValue("SPEED");a=a.replace(/[(|)]/g,"");255<a?a=255:0>a&&(a=0);Blockly.Arduino.definitions_.include_shield_bot="#include <Shieldbot.h>";Blockly.Arduino.definitions_.define_shield_bot="Shieldbot shieldbot = Shieldbot();\n";return"shieldbot.setMaxSpeed("+String(a)+");\n"};
Blockly.Arduino.shield_bot_setmaxspeed_lr=function(){var a=this.getFieldValue("LEFT"),b=this.getFieldValue("RIGHT");a=a.replace(/[(|)]/g,"");b=b.replace(/[(|)]/g,"");255<a?a=255:0>a&&(a=0);255<b?b=255:0>b&&(b=0);Blockly.Arduino.definitions_.include_shield_bot="#include <Shieldbot.h>";Blockly.Arduino.definitions_.define_shield_bot="Shieldbot shieldbot = Shieldbot();\n";return"shieldbot.setMaxSpeed("+String(a)+","+String(b)+");\n"};
Blockly.Arduino.shield_bot_motor=function(){var a=this.getFieldValue("RL"),b=Blockly.Arduino.valueToCode(this,"DIRECTION",Blockly.Arduino.ORDER_ATOMIC)||"0";b=b.replace(/[(|)]/g,"");127<b?b=127:-128>b&&(b=-128);Blockly.Arduino.definitions_.include_shield_bot="#include <Shieldbot.h>";Blockly.Arduino.definitions_.define_shield_bot="Shieldbot shieldbot = Shieldbot();\n";return"shieldbot."+a+"("+String(b)+");\n"};
Blockly.Arduino.shield_bot_move=function(){var a=this.getFieldValue("MOVE");Blockly.Arduino.definitions_.include_shield_bot="#include <Shieldbot.h>";Blockly.Arduino.definitions_.define_shield_bot="Shieldbot shieldbot = Shieldbot();\n";return"shieldbot."+a+"();\n"};
Blockly.Arduino.shield_bot_drive=function(){var a=Blockly.Arduino.valueToCode(this,"LEFT",Blockly.Arduino.ORDER_ATOMIC)||"127",b=Blockly.Arduino.valueToCode(this,"RIGHT",Blockly.Arduino.ORDER_ATOMIC)||"127";a=a.replace(/[(|)]/g,"");b=b.replace(/[(|)]/g,"");127<a?a=127:-128>a&&(a=-128);127<b?b=127:-128>b&&(b=-128);Blockly.Arduino.definitions_.include_shield_bot="#include <Shieldbot.h>";Blockly.Arduino.definitions_.define_shield_bot="Shieldbot shieldbot = Shieldbot();\n";return"shieldbot.drive("+String(a)+
","+String(b)+");\n"};Blockly.Arduino.shield_bot_faststop=function(){Blockly.Arduino.definitions_.include_shield_bot="#include <Shieldbot.h>";Blockly.Arduino.definitions_.define_shield_bot="Shieldbot shieldbot = Shieldbot();\n";return"shieldbot.fastStop();\n"};Blockly.Arduino.shield_bot_faststop_left=function(){Blockly.Arduino.definitions_.include_shield_bot="#include <Shieldbot.h>";Blockly.Arduino.definitions_.define_shield_bot="Shieldbot shieldbot = Shieldbot();\n";return"shieldbot.fastStopLeft();\n"};
Blockly.Arduino.shield_bot_faststop_right=function(){Blockly.Arduino.definitions_.include_shield_bot="#include <Shieldbot.h>";Blockly.Arduino.definitions_.define_shield_bot="Shieldbot shieldbot = Shieldbot();\n";return"shieldbot.fastStopRight();\n"};
Blockly.Arduino.shield_bot_readsensor=function(){var a=this.getFieldValue("SENSOR");Blockly.Arduino.definitions_.include_shield_bot="#include <Shieldbot.h>";Blockly.Arduino.definitions_.define_shield_bot="Shieldbot shieldbot = Shieldbot();\n";return["shieldbot.readS"+a+"()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.ultrasonic={};Blockly.Arduino.ultrasonic_read=function(){var a=this.getFieldValue("TRIG"),b=this.getFieldValue("ECHO"),c=this.getFieldValue("MEASUREMENT"),d="ultrasonic_"+a+"_"+b;Blockly.Arduino.definitions_.define_ultrasonic_include="#include <Ultrasonic.h>\n";Blockly.Arduino.definitions_["define_ultrasonic_inst_"+d]="Ultrasonic "+d+"("+a+", "+b+");\n";return["CM"==c?d+".convert("+d+".timing(), Ultrasonic::CM)":d+".convert("+d+".timing(), Ultrasonic::IN)",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.lcd={};Blockly.Arduino.lcd_init=function(){var a=this.getFieldValue("RS"),b=this.getFieldValue("ENABLE"),c=this.getFieldValue("RW"),d=this.getFieldValue("D4"),e=this.getFieldValue("D5"),f=this.getFieldValue("D6"),g=this.getFieldValue("D7");Blockly.Arduino.definitions_.liquidcrystal="#include <LiquidCrystal.h>\n"+("-"==c?"LiquidCrystal lcd("+a+","+b+","+d+","+e+","+f+","+g+");\n":"LiquidCrystal lcd("+a+","+c+","+b+","+d+","+e+","+f+","+g+");\n");return""};
Blockly.Arduino.lcd_begin=function(){var a=this.getFieldValue("COLS"),b=this.getFieldValue("ROWS");return"lcd.begin("+a+","+b+");\n"};Blockly.Arduino.lcd_print=function(){return"lcd.print("+Blockly.Arduino.valueToCode(this,"PRINT",Blockly.Arduino.ORDER_NONE)+");\n"};Blockly.Arduino.lcd_setcursor=function(){var a=this.getFieldValue("COL"),b=this.getFieldValue("ROW");return"lcd.setCursor("+a+","+b+");\n"};
Blockly.Arduino.lcd_custom_setcursor=function(){var a=Blockly.Arduino.valueToCode(this,"COL",Blockly.Arduino.ORDER_NONE)||"0",b=Blockly.Arduino.valueToCode(this,"ROW",Blockly.Arduino.ORDER_NONE)||"0";return"lcd.setCursor("+a+","+b+");\n"};Blockly.Arduino.lcd_clear=function(){return"lcd.clear();\n"};Blockly.Arduino.lcd_scrolldisplayleft=function(){return"lcd.scrollDisplayLeft();\n"};Blockly.Arduino.lcd_scrolldisplayright=function(){return"lcd.scrollDisplayRight();\n"};
Blockly.Arduino.lcd_switch_scroll=function(){var a="lcd.";return a=1==this.getFieldValue("SW")?a+"autoscroll();\n":a+"noAutoscroll();\n"};Blockly.Arduino.lcd_autoscroll=function(){return"lcd.autoscroll();\n"};Blockly.Arduino.lcd_noautoscroll=function(){return"lcd.noAutoscroll();\n"};Blockly.Arduino.lcd_lefttoright=function(){return"lcd.leftToRight();\n"};Blockly.Arduino.lcd_righttoleft=function(){return"lcd.rightToLeft();\n"};Blockly.Arduino.servo={};Blockly.Arduino.servo_attach=function(){var a=this.getFieldValue("PIN"),b="";Blockly.Arduino.definitions_.define_servo="#include <Servo.h>";Blockly.Arduino.definitions_["define_class_servo_"+a]="Servo __myservo"+a+";";void 0===Blockly.Arduino.setups_["servo_"+a]?Blockly.Arduino.setups_["servo_"+a]="__myservo"+a+".attach("+a+");":b="__myservo"+a+".attach("+a+");\n";return b};
Blockly.Arduino.servo_custom_attach=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("MAX"),c=this.getFieldValue("MIN"),d="";Blockly.Arduino.definitions_.define_servo="#include <Servo.h>";Blockly.Arduino.definitions_["define_class_servo_"+a]="Servo __myservo"+a+";";void 0===Blockly.Arduino.setups_["servo_"+a]?Blockly.Arduino.setups_["servo_"+a]="__myservo"+a+".attach("+a+","+c+","+b+");":d="__myservo"+a+".attach("+a+","+c+","+b+");\n";return d};
Blockly.Arduino.servo_write=function(){var a=this.getFieldValue("PIN"),b=Blockly.Arduino.valueToCode(this,"ANGLE",Blockly.Arduino.ORDER_ATOMIC)||"90";Blockly.Arduino.definitions_.define_servo="#include <Servo.h>";Blockly.Arduino.definitions_["define_class_servo_"+a]="Servo __myservo"+a+";";Blockly.Arduino.setups_["servo_"+a]||(Blockly.Arduino.setups_["servo_"+a]="__myservo"+a+".attach("+a+");");return"__myservo"+a+".write("+b+");\n"};
Blockly.Arduino.servo_writeus=function(){var a=this.getFieldValue("PIN"),b=Blockly.Arduino.valueToCode(this,"ANGLE_US",Blockly.Arduino.ORDER_ATOMIC)||"1500";Blockly.Arduino.definitions_.define_servo="#include <Servo.h>";Blockly.Arduino.definitions_["define_class_servo_"+a]="Servo __myservo"+a+";";void 0===Blockly.Arduino.setups_["servo_"+a]&&(Blockly.Arduino.setups_["servo_"+a]="__myservo"+a+".attach("+a+");");return"__myservo"+a+".writeMicroseconds("+b+");\n"};
Blockly.Arduino.servo_read=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.definitions_.define_servo="#include <Servo.h>";Blockly.Arduino.definitions_["define_class_servo_"+a]="Servo __myservo"+a+";";return["__myservo"+a+".read()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.servo_attached=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.definitions_.define_servo="#include <Servo.h>";Blockly.Arduino.definitions_["define_class_servo_"+a]="Servo __myservo"+a+";";void 0===Blockly.Arduino.setups_["servo_"+a]&&(Blockly.Arduino.setups_["servo_"+a]="__myservo"+a+".attach("+a+");");return["__myservo"+a+".attached()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.servo_detach=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.definitions_.define_servo="#include <Servo.h>";Blockly.Arduino.definitions_["define_class_servo_"+a]="Servo __myservo"+a+";";return"__myservo"+a+".detach();\n"};Blockly.Arduino.ir_remote={};
Blockly.Arduino.ir_remote_get=function(a){a=a.getFieldValue("PIN");Blockly.Arduino.definitions_.include_IR_remote="#include <IRremote.h>\n";Blockly.Arduino.definitions_.define_IR_buttons="#define POWER 0x10EFD827\n#define A 0x10EFF807\n#define B 0x10EF7887\n#define C 0x10EF58A7\n#define UP 0x10EFA05F\n#define DOWN 0x10EF00FF\n#define LEFT 0x10EF10EF\n#define RIGHT 0x10EF807F\n#define SELECT 0x10EF20DF\n";Blockly.Arduino.definitions_["setup_ir_reader_"+a]="IRrecv irrecv"+a+"("+a+");\ndecode_results results"+
a+";\n";Blockly.Arduino.definitions_.ir_remote_shell="unsigned long getDecodedValue(IRrecv receiver, decode_results results) {\n  if (receiver.decode(&results)) {\n      receiver.resume();\n      return results.value;\n    }\n  return 0;\n}\n";Blockly.Arduino.setups_["setup_ir_reader_"+a]="irrecv"+a+".enableIRIn(); // Start the receiver\n";return["getDecodedValue(irrecv"+a+",results"+a+")",Blockly.Arduino.ORDER_MEMBER]};
Blockly.Arduino.ir_remote_button=function(a){return[a.getFieldValue("BUTTON"),Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.m2x={};
Blockly.Arduino.m2x_begin=function(){var a=this.getFieldValue("VERSION"),b=Blockly.Arduino.valueToCode(this,"ID",Blockly.Arduino.ORDER_ATOMIC)||"",c=Blockly.Arduino.valueToCode(this,"STREAM_NAME",Blockly.Arduino.ORDER_ATOMIC)||"",d=Blockly.Arduino.valueToCode(this,"KEY",Blockly.Arduino.ORDER_ATOMIC)||"";Blockly.Arduino.definitions_.define_spi="#include <SPI.h>";Blockly.Arduino.definitions_.define_ethernet="#include <Ethernet"+a+".h>";Blockly.Arduino.definitions_.define_jsonlite="#include <jsonlite.h>";
Blockly.Arduino.definitions_.define_M2XStreamClient="#include <M2XStreamClient.h>";Blockly.Arduino.definitions_.define_ethernet_client="EthernetClient client;";Blockly.Arduino.definitions_.define_m2x_id="char m2xId[] = "+b+";";Blockly.Arduino.definitions_.define_m2x_stream_name="char m2xStream[] = "+c+";";Blockly.Arduino.definitions_.define_m2x_key="char m2xKey[] = "+d+";";Blockly.Arduino.definitions_.define_m2xstreamclient="M2XStreamClient m2xClient(&client, m2xKey);\n";return""};
Blockly.Arduino.m2x_update_value=function(){return["m2xClient.updateStreamValue(m2xId, m2xStream, "+(Blockly.Arduino.valueToCode(this,"VALUE",Blockly.Arduino.ORDER_ATOMIC)||"0")+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.m2x_list_value=function(){Blockly.Arduino.setups_["setup_serial_"+profile["default"].serial]="Serial.begin("+profile["default"].serial+");\n";Blockly.Arduino.definitions_.define_on_data_point_found='void on_data_point_found(const char* at, const char* value, int index, void* context, int type) {\n  Serial.print("Found a data point, index:");\n  Serial.println(index);\n  Serial.print("Type:");\n  Serial.println(type);\n  Serial.print("At:");\n  Serial.println(at);\n  Serial.print("Value:");\n  Serial.println(value);\n}\n';return"m2xClient.listStreamValues(m2xId, m2xStream, on_data_point_found, NULL);\n"};
Blockly.Arduino.m2x_custom_list_value=function(){var a=this.getFieldValue("DATE0"),b=this.getFieldValue("HOUR0"),c=this.getFieldValue("MIN0"),d=this.getFieldValue("SEC0"),e=this.getFieldValue("DATE1"),f=this.getFieldValue("HOUR1"),g=this.getFieldValue("MIN1"),h=this.getFieldValue("SEC1");Blockly.Arduino.setups_["setup_serial_"+profile["default"].serial]="Serial.begin("+profile["default"].serial+");\n";Blockly.Arduino.definitions_.define_on_data_point_found='void on_data_point_found(const char* at, const char* value, int index, void* context, int type) {\n  Serial.print("Found a data point, index:");\n  Serial.println(index);\n  Serial.print("Type:");\n  Serial.println(type);\n  Serial.print("At:");\n  Serial.println(at);\n  Serial.print("Value:");\n  Serial.println(value);\n}\n';
return'm2xClient.listStreamValues(m2xId, m2xStream, on_data_point_found, NULL, "start='+a+"T"+b+":"+c+":"+d+"Z&end="+e+"T"+f+":"+g+":"+h+'Z");\n'};
Blockly.Arduino.m2x_delete_values=function(){var a=this.getFieldValue("DATE0"),b=this.getFieldValue("HOUR0"),c=this.getFieldValue("MIN0"),d=this.getFieldValue("SEC0"),e=this.getFieldValue("DATE1"),f=this.getFieldValue("HOUR1"),g=this.getFieldValue("MIN1"),h=this.getFieldValue("SEC1");return['m2xClient.deleteValues(m2xId, m2xStream, "'+a+"T"+b+":"+c+":"+d+'Z","'+e+"T"+f+":"+g+":"+h+'Z")',Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.m2x_update_location=function(){var a=Blockly.Arduino.valueToCode(this,"LOCATION_NAME",Blockly.Arduino.ORDER_ATOMIC)||"0",b=Blockly.Arduino.valueToCode(this,"LATITUDE",Blockly.Arduino.ORDER_ATOMIC)||"0",c=Blockly.Arduino.valueToCode(this,"LONGITUDE",Blockly.Arduino.ORDER_ATOMIC)||"0",d=Blockly.Arduino.valueToCode(this,"ELEVATION",Blockly.Arduino.ORDER_ATOMIC)||"0";return["m2xClient.updateLocation(m2xId, "+a+", (double)"+b+", (double)"+c+", (double)"+d+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.m2x_read_location=function(){Blockly.Arduino.setups_["setup_serial_"+profile["default"].serial]="Serial.begin("+profile["default"].serial+");\n";Blockly.Arduino.definitions_.define_on_location_found='void on_location_found(const char* name,\n                       double latitude,\n                       double longitude,\n                       double elevation,\n                       const char* timestamp,\n                       int index,\n                       void* context) {\n  Serial.print("Found a location, index:");\n  Serial.println(index);\n  Serial.print("Name: ");\n  Serial.println(name);\n  Serial.print("Latitude: ");\n  Serial.println(latitude);\n  Serial.print("Longitude: ");\n  Serial.println(longitude);\n  Serial.print("Elevation: ");\n  Serial.println(elevation);\n  Serial.print("Timestamp: ");\n  Serial.println(timestamp);\n}\n';
return["m2xClient.readLocation(m2xId, on_location_found, NULL)",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.rgbled={};
Blockly.Arduino.rgbled_begin=function(){
  var a=this.getFieldValue("NUM"),
      b=this.getFieldValue("PIN"),c=this.getFieldValue("BRIGHTNESS");
  Blockly.Arduino.definitions_.define_include_neopixel="#include <Adafruit_NeoPixel.h>\n";
  Blockly.Arduino.definitions_.define_rgbled="Adafruit_NeoPixel rgbled = Adafruit_NeoPixel("+a+","+b+",NEO_RGB + NEO_KHZ400);\n";
  Blockly.Arduino.setups_.setup_rgbled_begin="rgbled.begin();\n";
  Blockly.Arduino.setups_.setup_rgbled_brightness="rgbled.setBrightness("+c+");\n";
  return""
};
function hexToR(a){
  return parseInt(cutHex(a).substring(0,2),16)
}
function hexToG(a){
  return parseInt(cutHex(a).substring(2,4),16)
}
function hexToB(a){
  return parseInt(cutHex(a).substring(4,6),16)
}
function cutHex(a){
  return"#"==a.charAt(0)?a.substring(1,7):a
}
Blockly.Arduino.rgbled_setpixelcolor=function(){
  var a=this.getFieldValue("TARGET"),
      b=this.getFieldValue("RGB");
  return"rgbled.setPixelColor("+a+",rgbled.Color("+hexToR(b)+","+hexToG(b)+","+hexToB(b)+"));\n"
};
Blockly.Arduino.rgbled_setpixelcolor2=function(){
  var a=Blockly.Arduino.valueToCode(this,"TARGET",Blockly.Arduino.ORDER_ATOMIC)||"0",
      b=this.getFieldValue("RGB");
  return"rgbled.setPixelColor("+a+",rgbled.Color("+hexToR(b)+","+hexToG(b)+","+hexToB(b)+"));\n"
};
Blockly.Arduino.rgbled_custom_setpixelcolor=function(){
  var a=Blockly.Arduino.valueToCode(this,"TARGET",Blockly.Arduino.ORDER_ATOMIC)||"0",
      b=Blockly.Arduino.valueToCode(this,"R",Blockly.Arduino.ORDER_ATOMIC)||"255",
      c=Blockly.Arduino.valueToCode(this,"G",Blockly.Arduino.ORDER_ATOMIC)||"0",
      d=Blockly.Arduino.valueToCode(this,"B",Blockly.Arduino.ORDER_ATOMIC)||"0";
      return"rgbled.setPixelColor("+a+", rgbled.Color("+b+","+c+","+d+"));\n"
};
Blockly.Arduino.rgbled_show=function(){
  return"rgbled.show();\n"
};
Blockly.Arduino.otto={};
Blockly.Arduino.otto_init=function(){var a=this.getFieldValue("YL"),b=this.getFieldValue("YR"),c=this.getFieldValue("RL"),d=this.getFieldValue("RR");Blockly.Arduino.definitions_.define_include_otto="#include <Otto.h>\n";Blockly.Arduino.definitions_.define_define_otto_item="Otto __otto;\n";Blockly.Arduino.definitions_.define_define_otto_ascii="/*\n                  --------------- \n                 |     O   O     |\n                 |---------------|\n  RIGHT LEG ==>  |               | <== LEFT LEG \n                  --------------- \n                     ||     ||\n                     ||     ||\n RIGHT FOOT ==>   -----     -----  <== LEFT FOOT \n                 |-----     -----|\n*/\n";Blockly.Arduino.definitions_.define_define_otto_init_yl=
"#define OTTO_PIN_LEFT_LEG "+a;Blockly.Arduino.definitions_.define_define_otto_init_yr="#define OTTO_PIN_RIGHT_LEG "+b;Blockly.Arduino.definitions_.define_define_otto_init_rl="#define OTTO_PIN_LEFT_FOOT "+c;Blockly.Arduino.definitions_.define_define_otto_init_rr="#define OTTO_PIN_RIGHT_FOOT "+d;Blockly.Arduino.setups_.setup_otto_init="__otto.initLegs(OTTO_PIN_LEFT_LEG, OTTO_PIN_RIGHT_LEG, OTTO_PIN_LEFT_FOOT, OTTO_PIN_RIGHT_FOOT, false);";return""};
Blockly.Arduino.otto_calibrate=function(){var a=Blockly.Arduino.valueToCode(this,"YL",Blockly.Arduino.ORDER_ATOMIC)||0,b=Blockly.Arduino.valueToCode(this,"YR",Blockly.Arduino.ORDER_ATOMIC)||0,c=Blockly.Arduino.valueToCode(this,"RL",Blockly.Arduino.ORDER_ATOMIC)||0,d=Blockly.Arduino.valueToCode(this,"RR",Blockly.Arduino.ORDER_ATOMIC)||0;Blockly.Arduino.definitions_.define_include_otto="#include <Otto.h>\n";Blockly.Arduino.definitions_.define_define_otto_item="Otto __otto;\n";Blockly.Arduino.definitions_.define_define_otto_trim_yl=
"#define OTTO_TRIM_LEFT_LEG "+a;Blockly.Arduino.definitions_.define_define_otto_trim_yr="#define OTTO_TRIM_RIGHT_LEG "+b;Blockly.Arduino.definitions_.define_define_otto_trim_rl="#define OTTO_TRIM_LEFT_FOOT "+c;Blockly.Arduino.definitions_.define_define_otto_trim_rr="#define OTTO_TRIM_RIGHT_FOOT "+d;"setup_otto_init"in Blockly.Arduino.setups_&&(Blockly.Arduino.setups_.setup_otto_init="__otto.initLegs(OTTO_PIN_LEFT_LEG, OTTO_PIN_RIGHT_LEG, OTTO_PIN_LEFT_FOOT, OTTO_PIN_RIGHT_FOOT, true);");Blockly.Arduino.setups_.setup_otto_trim=
"__otto.setTrims(OTTO_TRIM_LEFT_LEG, OTTO_TRIM_RIGHT_LEG, OTTO_TRIM_LEFT_FOOT, OTTO_TRIM_RIGHT_FOOT);";return""};Blockly.Arduino.otto_home=function(){Blockly.Arduino.definitions_.define_include_otto="#include <Otto.h>\n";Blockly.Arduino.definitions_.define_define_otto_item="Otto __otto;\n";return"__otto.home();\n"};
Blockly.Arduino.otto_walk=function(){var a=this.getFieldValue("DIRECTION"),b=Blockly.Arduino.valueToCode(this,"DISTANCE",Blockly.Arduino.ORDER_ATOMIC)||4,c=Blockly.Arduino.valueToCode(this,"DURATION",Blockly.Arduino.ORDER_ATOMIC)||1E3;Blockly.Arduino.definitions_.define_include_otto="#include <Otto.h>\n";Blockly.Arduino.definitions_.define_define_otto_item="Otto __otto;\n";return"__otto.walk("+b+", "+c+", "+a+");\n"};
Blockly.Arduino.otto_turn=function(){var a=this.getFieldValue("DIRECTION"),b=Blockly.Arduino.valueToCode(this,"DISTANCE",Blockly.Arduino.ORDER_ATOMIC)||4,c=Blockly.Arduino.valueToCode(this,"DURATION",Blockly.Arduino.ORDER_ATOMIC)||1E3;Blockly.Arduino.definitions_.define_include_otto="#include <Otto.h>\n";Blockly.Arduino.definitions_.define_define_otto_item="Otto __otto;\n";return"__otto.turn("+b+", "+c+", "+a+");\n"};
Blockly.Arduino.otto_bend=function(){var a=this.getFieldValue("DIRECTION"),b=Blockly.Arduino.valueToCode(this,"DISTANCE",Blockly.Arduino.ORDER_ATOMIC)||1,c=Blockly.Arduino.valueToCode(this,"DURATION",Blockly.Arduino.ORDER_ATOMIC)||1400;Blockly.Arduino.definitions_.define_include_otto="#include <Otto.h>\n";Blockly.Arduino.definitions_.define_define_otto_item="Otto __otto;\n";return"__otto.bend("+b+", "+c+", "+a+");\n"};
Blockly.Arduino.otto_shake_leg=function(){var a=this.getFieldValue("DIRECTION"),b=Blockly.Arduino.valueToCode(this,"DISTANCE",Blockly.Arduino.ORDER_ATOMIC)||1,c=Blockly.Arduino.valueToCode(this,"DURATION",Blockly.Arduino.ORDER_ATOMIC)||2E3;Blockly.Arduino.definitions_.define_include_otto="#include <Otto.h>\n";Blockly.Arduino.definitions_.define_define_otto_item="Otto __otto;\n";return"__otto.shakeLeg("+b+", "+c+", "+a+");\n"};
Blockly.Arduino.otto_freestyle=function(){var a=this.getFieldValue("STYLE"),b=Blockly.Arduino.valueToCode(this,"DISTANCE",Blockly.Arduino.ORDER_ATOMIC)||1,c=Blockly.Arduino.valueToCode(this,"DURATION",Blockly.Arduino.ORDER_ATOMIC)||1E3,d=Blockly.Arduino.valueToCode(this,"HEIGHT",Blockly.Arduino.ORDER_ATOMIC)||20;Blockly.Arduino.definitions_.define_include_otto="#include <Otto.h>\n";Blockly.Arduino.definitions_.define_define_otto_item="Otto __otto;\n";return"__otto."+a+"("+b+", "+c+", "+d+");\n"};
Blockly.Arduino.otto_moonwalk=function(){var a=this.getFieldValue("DIRECTION"),b=Blockly.Arduino.valueToCode(this,"DISTANCE",Blockly.Arduino.ORDER_ATOMIC)||4,c=Blockly.Arduino.valueToCode(this,"DURATION",Blockly.Arduino.ORDER_ATOMIC)||1E3,d=Blockly.Arduino.valueToCode(this,"HEIGHT",Blockly.Arduino.ORDER_ATOMIC)||20;Blockly.Arduino.definitions_.define_include_otto="#include <Otto.h>\n";Blockly.Arduino.definitions_.define_define_otto_item="Otto __otto;\n";return"__otto.moonwalker("+b+", "+c+", "+d+
", "+a+");\n"};
Blockly.Arduino.otto_crusaito=function(){var a=this.getFieldValue("DIRECTION"),b=Blockly.Arduino.valueToCode(this,"DISTANCE",Blockly.Arduino.ORDER_ATOMIC)||4,c=Blockly.Arduino.valueToCode(this,"DURATION",Blockly.Arduino.ORDER_ATOMIC)||1E3,d=Blockly.Arduino.valueToCode(this,"HEIGHT",Blockly.Arduino.ORDER_ATOMIC)||20;Blockly.Arduino.definitions_.define_include_otto="#include <Otto.h>\n";Blockly.Arduino.definitions_.define_define_otto_item="Otto __otto;\n";return"__otto.crusaito("+b+", "+c+", "+d+", "+
a+");\n"};
Blockly.Arduino.otto_flapping=function(){var a=this.getFieldValue("DIRECTION"),b=Blockly.Arduino.valueToCode(this,"DISTANCE",Blockly.Arduino.ORDER_ATOMIC)||4,c=Blockly.Arduino.valueToCode(this,"DURATION",Blockly.Arduino.ORDER_ATOMIC)||1E3,d=Blockly.Arduino.valueToCode(this,"HEIGHT",Blockly.Arduino.ORDER_ATOMIC)||20;Blockly.Arduino.definitions_.define_include_otto="#include <Otto.h>\n";Blockly.Arduino.definitions_.define_define_otto_item="Otto __otto;\n";return"__otto.flapping("+b+", "+c+", "+d+", "+
a+");\n"};Blockly.Arduino.otto_height=function(){return[this.getFieldValue("HEIGHT"),Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.otto_ultrasonic_init=function(){var a=this.getFieldValue("TRIGGER_PIN"),b=this.getFieldValue("ECHO_PIN");Blockly.Arduino.definitions_.define_include_otto="#include <Otto.h>\n";Blockly.Arduino.definitions_.define_define_otto_item="Otto __otto;\n";Blockly.Arduino.definitions_.define_define_otto_ultrasonic_init_trigger="#define OTTO_PIN_ULTRASONIC_TRIGGER "+a;Blockly.Arduino.definitions_.define_define_otto_ultrasonic_init_echo="#define OTTO_PIN_ULTRASONIC_ECHO "+b;Blockly.Arduino.setups_.setup_otto_ultrasonic_init=
"__otto.initUltrasonic(OTTO_PIN_ULTRASONIC_TRIGGER, OTTO_PIN_ULTRASONIC_ECHO);";return""};Blockly.Arduino.otto_ultrasonic_distance=function(){Blockly.Arduino.definitions_.define_include_otto="#include <Otto.h>\n";Blockly.Arduino.definitions_.define_define_otto_item="Otto __otto;\n";return["__otto.getDistance()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.otto_buzzer_init=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.definitions_.define_include_otto="#include <Otto.h>\n";Blockly.Arduino.definitions_.define_define_otto_item="Otto __otto;\n";Blockly.Arduino.definitions_.define_define_otto_buzzer_init="#define OTTO_PIN_BUZZER "+a;Blockly.Arduino.setups_.setup_otto_buzzer_init="__otto.initBuzzer(OTTO_PIN_BUZZER);";return""};
Blockly.Arduino.otto_buzzer_sing=function(){var a=this.getFieldValue("SING");Blockly.Arduino.definitions_.define_include_otto="#include <Otto.h>\n";Blockly.Arduino.definitions_.define_define_otto_item="Otto __otto;\n";return"__otto.sing("+a+");\n"};Blockly.Arduino.otto_mouth=function(){var a=this.getFieldValue("MOUTH");Blockly.Arduino.definitions_.define_include_otto="#include <Otto.h>\n";Blockly.Arduino.definitions_.define_define_otto_item="Otto __otto;\n";return"__otto.putMouth("+a+");\n"};
Blockly.Arduino.otto_led_matrix_init=function(){var a=this.getFieldValue("DIN"),b=this.getFieldValue("CS"),c=this.getFieldValue("CLK"),d=this.getFieldValue("DIR");Blockly.Arduino.definitions_.define_include_otto="#include <Otto.h>\n";Blockly.Arduino.definitions_.define_define_otto_item="Otto __otto;\n";Blockly.Arduino.definitions_.define_define_otto_led_matrix_init_din="#define OTTO_PIN_LED_DIN "+a;Blockly.Arduino.definitions_.define_define_otto_led_matrix_init_din="#define OTTO_PIN_LED_CS_PIN "+
b;Blockly.Arduino.definitions_.define_define_otto_led_matrix_init_din="#define OTTO_PIN_LED_CLK_PIN "+c;Blockly.Arduino.setups_.setup_otto_led_matrix_init="__otto.initLEDMatrix(OTTO_PIN_LED_DIN, OTTO_PIN_LED_CS_PIN, "+d+");";return""};Blockly.Arduino.lcd_i2c={};Blockly.Arduino.lcd_i2c_setting=function(){var a=this.getFieldValue("LCD_DIM"),b=this.getFieldValue("I2C_ADDRESS");Blockly.Arduino.definitions_.lcd_i2c_def="#include <LiquidCrystal_I2C.h>\n"+("LiquidCrystal_I2C lcd_i2c("+b+");\n");b=2;var c=16;switch(a){case "1602":c=16;b=2;break;case "2004":c=20,b=4}Blockly.Arduino.setups_.lcd_i2c_setup="lcd_i2c.begin("+c+", "+b+");";return""};
Blockly.Arduino.lcd_i2c_light=function(){return"ON"==this.getFieldValue("BACKLIGHT_STATE")?"lcd_i2c.backlight();\n":"lcd_i2c.noBacklight();\n"};Blockly.Arduino.lcd_i2c_clear=function(){return"lcd_i2c.clear();\n"};Blockly.Arduino.lcd_i2c_set_cursor=function(){var a=Blockly.Arduino.valueToCode(this,"ROW",Blockly.Arduino.ORDER_NONE)||"0";return"lcd_i2c.setCursor("+(Blockly.Arduino.valueToCode(this,"COL",Blockly.Arduino.ORDER_NONE)||"0")+","+a+");\n"};
Blockly.Arduino.lcd_i2c_put=function(){return"lcd_i2c.print("+Blockly.Arduino.valueToCode(this,"VALUE",Blockly.Arduino.ORDER_ATOMIC)+");\n"};


Blockly.Arduino.mfrc522={};
Blockly.Arduino.mfrc522_read=function(){Blockly.Arduino.definitions_.define_spi_include="#include <SPI.h>\n";Blockly.Arduino.definitions_.define_mfrc522_include="#include <MFRC522.h>\n";Blockly.Arduino.definitions_.define_mfrc522_inst="MFRC522 rfid(/*SS_PIN*/ 10, /*RST_PIN*/ UINT8_MAX);\n";Blockly.Arduino.definitions_.define_mfrc522_readid='\nString mfrc522_readID()\n{\n  String ret;\n  if (rfid.PICC_IsNewCardPresent() && rfid.PICC_ReadCardSerial())\n  {\n    MFRC522::PICC_Type piccType = rfid.PICC_GetType(rfid.uid.sak);\n\n    for (byte i = 0; i < rfid.uid.size; i++) {\n      ret += (rfid.uid.uidByte[i] < 0x10 ? "0" : "");\n      ret += String(rfid.uid.uidByte[i], HEX);\n    }\n  }\n  \n  // Halt PICC\n  rfid.PICC_HaltA();\n\n  // Stop encryption on PCD\n  rfid.PCD_StopCrypto1();\n  return ret;\n}\n';Blockly.Arduino.setups_.setup_mfrc522=
"SPI.begin();\n  rfid.PCD_Init();\n";return["mfrc522_readID()",Blockly.Arduino.ORDER_ATOMIC]};


Blockly.Arduino.interrupts_attach=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("MODE"),c=Blockly.Arduino.statementToCode(this,"CONTENT");Blockly.Arduino.setups_["setup_interrupt_"+a]="attachInterrupt("+a+",interrupt_"+a+","+b+");";Blockly.Arduino.definitions_["define_interrupt_"+a]="void interrupt_"+a+"(){\n"+c+"}\n";return""};Blockly.Arduino.interrupts_detach=function(){return"detachInterrupt("+this.getFieldValue("PIN")+");\n"};Blockly.Arduino.interrupts=function(){return"interrupts();\n"};
Blockly.Arduino.interrupts_no=function(){return"noInterrupts();\n"};Blockly.Arduino.mpr121={};Blockly.Arduino.mpr121_begin=function(){Blockly.Arduino.definitions_.define_wire="#include <Wire.h>";Blockly.Arduino.definitions_.define_mpr121="#include <Adafruit_MPR121.h>\nAdafruit_MPR121 cap = Adafruit_MPR121();\nuint16_t lasttouched = 0;\nuint16_t currtouched = 0;";Blockly.Arduino.setups_.setup_cap_begin="cap.begin(0x5A);\n";return"currtouched = cap.touched();\n"};
Blockly.Arduino.mpr121_touched=function(){var a=Blockly.Arduino.valueToCode(this,"CH",Blockly.Arduino.ORDER_ATOMIC)||"0";Blockly.Arduino.definitions_.define_wire="#include <Wire.h>";Blockly.Arduino.definitions_.define_mpr121="#include <Adafruit_MPR121.h>\nAdafruit_MPR121 cap = Adafruit_MPR121();\nuint16_t lasttouched = 0;\nuint16_t currtouched = 0;";Blockly.Arduino.setups_.setup_cap_begin="cap.begin(0x5A);\n";return["(currtouched & _BV("+a+")) && !(lasttouched & _BV("+a+"))",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.mpr121_released=function(){var a=Blockly.Arduino.valueToCode(this,"CH",Blockly.Arduino.ORDER_ATOMIC)||"0";Blockly.Arduino.definitions_.define_wire="#include <Wire.h>";Blockly.Arduino.definitions_.define_mpr121="#include <Adafruit_MPR121.h>\nAdafruit_MPR121 cap = Adafruit_MPR121();\nuint16_t lasttouched = 0;\nuint16_t currtouched = 0;";Blockly.Arduino.setups_.setup_cap_begin="cap.begin(0x5A);\n";return["!(currtouched & _BV("+a+")) && (lasttouched & _BV("+a+"))",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.mpr121_value=function(){var a=Blockly.Arduino.valueToCode(this,"CH",Blockly.Arduino.ORDER_ATOMIC)||"0";Blockly.Arduino.definitions_.define_wire="#include <Wire.h>";Blockly.Arduino.definitions_.define_mpr121="#include <Adafruit_MPR121.h>\nAdafruit_MPR121 cap = Adafruit_MPR121();\nuint16_t lasttouched = 0;\nuint16_t currtouched = 0;";Blockly.Arduino.setups_.setup_cap_begin="cap.begin(0x5A);\n";return["cap.filteredData("+a+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.mpr121_reset=function(){Blockly.Arduino.definitions_.define_wire="#include <Wire.h>";Blockly.Arduino.definitions_.define_mpr121="#include <Adafruit_MPR121.h>\nAdafruit_MPR121 cap = Adafruit_MPR121();\nuint16_t lasttouched = 0;\nuint16_t currtouched = 0;";Blockly.Arduino.setups_.setup_cap_begin="cap.begin(0x5A);\n";return"lasttouched = currtouched;\n"};Blockly.Arduino.blynk={};
Blockly.Arduino.blynk_ethernet_begin=function(){this.getFieldValue("VERSION");var a=Blockly.Arduino.valueToCode(this,"AUTH",Blockly.Arduino.ORDER_ATOMIC)||"",b=Blockly.Arduino.valueToCode(this,"MAC_ADDRESS",Blockly.Arduino.ORDER_ATOMIC)||"0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED";b=b.replace(/"/g,"");Blockly.Arduino.definitions_.define_spi="#include <SPI.h>";Blockly.Arduino.definitions_.define_ethernet="#include <Ethernet.h>";Blockly.Arduino.definitions_.define_blynk_simple_ethernet="#define BLYNK_PRINT Serial\n#include <BlynkSimpleEthernet.h>\n";
Blockly.Arduino.definitions_.define_arduino_mac="byte mac[] = {"+b+"};\n";Blockly.Arduino.setups_["setup_serial_"+profile["default"].serial]="Serial.begin("+profile["default"].serial+");\n";Blockly.Arduino.setups_.setup_blynk_begin="Blynk.begin("+a+", BLYNK_DEFAULT_DOMAIN,BLYNK_DEFAULT_PORT,mac);\n";return"Blynk.run();\n"};
Blockly.Arduino.blynk_write=function(){var a=this.getFieldValue("PIN"),b=Blockly.Arduino.statementToCode(this,"ACTION");Blockly.Arduino.definitions_["define_blynk_virtual_"+a]="BLYNK_WRITE(V"+a+")\n{\n"+b+"}\n";return""};Blockly.Arduino.blynk_param=function(){return["param."+this.getFieldValue("TYPE")+"()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.blynk_merge_param=function(){var a=this.getFieldValue("INDEX"),b=this.getFieldValue("TYPE");return["param["+a+"]."+b+"()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.blynk_virtual_write=function(){var a=this.getFieldValue("PIN"),b=Blockly.Arduino.valueToCode(this,"VALUE",Blockly.Arduino.ORDER_ATOMIC)||"0";return"Blynk.virtualWrite(V"+a+", "+b+");\n"};
Blockly.Arduino.blynk_email=function(){var a=Blockly.Arduino.valueToCode(this,"ADDRESS",Blockly.Arduino.ORDER_ATOMIC)||"",b=Blockly.Arduino.valueToCode(this,"TITLE",Blockly.Arduino.ORDER_ATOMIC)||"",c=Blockly.Arduino.valueToCode(this,"BODY",Blockly.Arduino.ORDER_ATOMIC)||"";return"Blynk.email("+a+", "+b+", "+c+");\n"};Blockly.Arduino.blynk_notify=function(){return"Blynk.notify("+(Blockly.Arduino.valueToCode(this,"TEXT",Blockly.Arduino.ORDER_ATOMIC)||"")+");\n"};
Blockly.Arduino.blynk_tweet=function(){return"Blynk.tweet("+(Blockly.Arduino.valueToCode(this,"TEXT",Blockly.Arduino.ORDER_ATOMIC)||"")+");\n"};Blockly.Arduino.blynk_connect=function(){return["Blynk.connect()",Blockly.Arduino.ORDER_ATOMIC]};


Blockly.Arduino.ifttt={};
Blockly.Arduino.ifttt_get_url=function(){Blockly.Arduino.definitions_.define_linkit_wifi_include="#include <LWiFi.h>";Blockly.Arduino.definitions_.define_ifttt_invoke='\nvoid invokeIFTTT(const String& key, const String& event, const String& p1, const String& p2, const String& p3)\n{\n  // Initialize the Ethernet client library\n  // with the IP address and port of the server\n  // that you want to connect to (port 80 is default for HTTP):\n  static TLSClient client;\n\n  // This is the root certificate(CA) for https://maker.ifttt.com/\n  // Different host server may use different root CA.\n  static const char rootCA[] = "-----BEGIN CERTIFICATE-----\\r\\n"\n  "MIIFJjCCBA6gAwIBAgIIRJxbLJxAihkwDQYJKoZIhvcNAQELBQAwgbQxCzAJBgNV\\r\\n"\n  "BAYTAlVTMRAwDgYDVQQIEwdBcml6b25hMRMwEQYDVQQHEwpTY290dHNkYWxlMRow\\r\\n"\n  "GAYDVQQKExFHb0RhZGR5LmNvbSwgSW5jLjEtMCsGA1UECxMkaHR0cDovL2NlcnRz\\r\\n"\n  "LmdvZGFkZHkuY29tL3JlcG9zaXRvcnkvMTMwMQYDVQQDEypHbyBEYWRkeSBTZWN1\\r\\n"\n  "cmUgQ2VydGlmaWNhdGUgQXV0aG9yaXR5IC0gRzIwHhcNMTYwNzI1MTc0NTM4WhcN\\r\\n"\n  "MTgwOTI4MjIxMzU0WjA5MSEwHwYDVQQLExhEb21haW4gQ29udHJvbCBWYWxpZGF0\\r\\n"\n  "ZWQxFDASBgNVBAMMCyouaWZ0dHQuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A\\r\\n"\n  "MIIBCgKCAQEA8c1HRaRBFWER/SG2eXN++ykWLSoCyJ1xcxOXy15Bk57WXGLIBZHn\\r\\n"\n  "Y8/SN+H1KuUcN40KC35NuGhaQP43cELcBSG/BiYTlFPIAizauX2K9VZh+zWhwkgq\\r\\n"\n  "y8bJ5+yvZKH5gwqNL248Y4gjwaPeU8o2K1xrFYWSfM/7kFQFul2goWOA3HIn5qE3\\r\\n"\n  "NUsgxF8uLh2BSuJKQF73WDvM1zE86MIU20M9+PEo/pV5orIPZX/54cAZgXnr+59t\\r\\n"\n  "KPL14Rl9qqTiptMJC8y2CIqKC9zHBwIwX4uYPOquom1oqAuItWgqAJwtC3z5a20r\\r\\n"\n  "wbI2eNbDPdbeweT/4RtCjTwKlQuHmzeLbwIDAQABo4IBtDCCAbAwDAYDVR0TAQH/\\r\\n"\n  "BAIwADAdBgNVHSUEFjAUBggrBgEFBQcDAQYIKwYBBQUHAwIwDgYDVR0PAQH/BAQD\\r\\n"\n  "AgWgMDcGA1UdHwQwMC4wLKAqoCiGJmh0dHA6Ly9jcmwuZ29kYWRkeS5jb20vZ2Rp\\r\\n"\n  "ZzJzMS0yNzMuY3JsMF0GA1UdIARWMFQwSAYLYIZIAYb9bQEHFwEwOTA3BggrBgEF\\r\\n"\n  "BQcCARYraHR0cDovL2NlcnRpZmljYXRlcy5nb2RhZGR5LmNvbS9yZXBvc2l0b3J5\\r\\n"\n  "LzAIBgZngQwBAgEwdgYIKwYBBQUHAQEEajBoMCQGCCsGAQUFBzABhhhodHRwOi8v\\r\\n"\n  "b2NzcC5nb2RhZGR5LmNvbS8wQAYIKwYBBQUHMAKGNGh0dHA6Ly9jZXJ0aWZpY2F0\\r\\n"\n  "ZXMuZ29kYWRkeS5jb20vcmVwb3NpdG9yeS9nZGlnMi5jcnQwHwYDVR0jBBgwFoAU\\r\\n"\n  "QMK9J47MNIMwojPX+2yz8LQsgM4wIQYDVR0RBBowGIILKi5pZnR0dC5jb22CCWlm\\r\\n"\n  "dHR0LmNvbTAdBgNVHQ4EFgQUTv/uQ1GFjIW3WdcM3sn8fwtzoKQwDQYJKoZIhvcN\\r\\n"\n  "AQELBQADggEBAA0L5s4DXdeyx2rsVKljSq7CsDUbl1w8AgyxO0o1JAdYoPwZOlUT\\r\\n"\n  "Yl6xL+jYtlgdINAOi/SDsEXtTQSMNb6xrGN0AfPgCRlKEBSEIluiRQc97H/AOmwp\\r\\n"\n  "6HVeMQm/BVdQtp+i9MauwKJclB7ljReS0vlqMfk5FnlD3AT9eT61HUGcBVuyR37p\\r\\n"\n  "vbHP2yRg+5uZnw5BqUOL1Y0asuK0vqlizllpRxikq9kMKsR8KaesRyHkVX/FAC9u\\r\\n"\n  "uxxYke0T3f+dGlGzxm/ly6g5gQVbjdZGeoNma8qXjJ9o5BhZuAll7SajSLiXWERu\\r\\n"\n  "n4PtYxVA4KsvJNDabHea1zF3pGyKzv7HAUc=\\r\\n"\n  "-----END CERTIFICATE-----\\r\\n";\n\n  // We must set root CA before connecting to host\n  // Note that the lenght includes the terminating NULL,\n  // so use sizeof() instead of strlen().\n  client.setRootCA(rootCA, sizeof(rootCA));\n  if (client.connect("maker.ifttt.com", 443)) {\n      // Make a HTTP request over SSL (HTTPS)\n\n      const String payload = String() + "{\\"value1\\":\\"" + p1\n                        + "\\",\\"value2\\":\\"" + p2\n                        + "\\",\\"value3\\":\\"" + p3\n                        + "\\"}";\n\n      const String url = String() + "https://maker.ifttt.com/trigger/" + event + "/with/key/" + key;\n\n      client.println(String() + "POST " + url + " HTTP/1.1");\n      client.println("Host: maker.ifttt.com");\n      client.println("User-Agent: BlocklyDuino/1.0");\n      client.println("Content-Type: application/json;charset=utf-8");\n      client.print("Content-Length: ");\n      client.println(payload.length());\n      client.println("User-Agent: BlocklyDuino/1.0");\n      client.println("Accept: */*");\n      client.println("Connection: close");\n\n      client.println();\n      client.print(payload);\n\n      client.println();\n      delay(300);\n  } else {\n    // Serial.println("failed to connect to IFTTT");\n  }\n\n  // wait for server response\n  // if there are incoming bytes available\n  // from the server, read them and print them:\n  while (client.available()) {\n      char c = client.read();\n      // Serial.print(c);\n      delay(1);\n  }\n\n  // if the server\'s disconnected, stop the client:\n  if (!client.connected()) {\n      //Serial.println();\n      //Serial.println("disconnecting from server passively.");\n      client.stop();\n  } else {\n    // otherwise we actively stop the connection. we\'ll reconnect next time.\n    //Serial.println("disconnecting from server.");\n    client.stop();\n  }\n}  \n';var a=
Blockly.Arduino.valueToCode(this,"EVENT",Blockly.Arduino.ORDER_ATOMIC)||'"event"',b=Blockly.Arduino.valueToCode(this,"KEY",Blockly.Arduino.ORDER_ATOMIC)||'"---"',c=Blockly.Arduino.valueToCode(this,"VALUE1",Blockly.Arduino.ORDER_ATOMIC)||"0",d=Blockly.Arduino.valueToCode(this,"VALUE2",Blockly.Arduino.ORDER_ATOMIC)||"0",e=Blockly.Arduino.valueToCode(this,"VALUE3",Blockly.Arduino.ORDER_ATOMIC)||"0";return"invokeIFTTT("+[b,a,"String("+c+")","String("+d+")","String("+e+")"].join(", ")+");\n"};Blockly.Arduino.infra_red={};Blockly.Arduino.infra_red_send=function(){var a=Blockly.Arduino.valueToCode(this,"COMMAND_INT",Blockly.Arduino.ORDER_ATOMIC)||"0";Blockly.Arduino.definitions_.define_infra_red_include="#include <IRremote.h>\n";Blockly.Arduino.definitions_.define_infra_red_send_inst="IRsend irsend;\n";return"irsend.sendRC5("+a+", 32);\n"};
Blockly.Arduino.infra_red_receive=function(){this.getFieldValue("COMMAND_INT");var a=this.getFieldValue("PIN"),b="irrecv_"+a,c=b+"_result";Blockly.Arduino.definitions_.define_infra_red_include="#include <IRremote.h>\n";Blockly.Arduino.definitions_["define_infra_red_receive_inst_pin"+a]="IRrecv "+b+"("+a+");\ndecode_results "+c+";\n";Blockly.Arduino.definitions_.define_infra_red_receive_helper_func="int infra_red_decode(IRrecv& recv, decode_results& results, int default_value) {\n  if (recv.decode(&results)) {\n    recv.resume(); // Receive the next value\n    return results.value;\n  }\n  return default_value;\n}\n";
Blockly.Arduino.setups_["setup_infra_red_receive_inst_pin"+a]=b+".enableIRIn();\n";return["infra_red_decode("+b+", "+c+", 0)",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.base={};Blockly.Arduino.base_delay=function(){return"delay("+(Blockly.Arduino.valueToCode(this,"DELAY_TIME",Blockly.Arduino.ORDER_ATOMIC)||"1000")+");\n"};Blockly.Arduino.base_map=function(){var a=Blockly.Arduino.valueToCode(this,"NUM",Blockly.Arduino.ORDER_NONE),b=Blockly.Arduino.valueToCode(this,"DMAX",Blockly.Arduino.ORDER_ATOMIC);return["map("+a+", 0, 1024, 0, "+b+")",Blockly.Arduino.ORDER_NONE]};Blockly.Arduino.eeprom={};Blockly.Arduino.eeprom_getsize=function(){Blockly.Arduino.definitions_.define_eeprom="#include <EEPROM.h>\n";return["EEPROM.length()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.eeprom_read=function(){Blockly.Arduino.definitions_.define_eeprom="#include <EEPROM.h>\n";return["EEPROM.read("+(Blockly.Arduino.valueToCode(this,"ADDRESS",Blockly.Arduino.ORDER_ATOMIC)||"0")+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.eeprom_write=function(){Blockly.Arduino.definitions_.define_eeprom="#include <EEPROM.h>\n";var a=Blockly.Arduino.valueToCode(this,"ADDRESS",Blockly.Arduino.ORDER_ATOMIC)||"0",b=Blockly.Arduino.valueToCode(this,"CONTENT",Blockly.Arduino.ORDER_ATOMIC)||"0";return"EEPROM.write("+a+", "+b+");\n"};Blockly.Arduino.dht={};
Blockly.Arduino.dht_read=function(){var a=this.getFieldValue("SENSOR"),b=this.getFieldValue("PIN"),c=this.getFieldValue("TYPE"),d=a.toLowerCase()+"_p"+b;Blockly.Arduino.definitions_.define_dht_include="#include <DHT.h>";Blockly.Arduino.definitions_["define_dht_"+d]="DHT "+d+"("+b+", "+a+");";Blockly.Arduino.setups_["setup_dht_"+b+"_"+a]=d+".begin();";a="";switch(c){case "h":a+=d+".readHumidity()";break;case "C":a+=d+".readTemperature()";break;case "F":a+=d+".readTemperature(true)"}return[a,Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.inout={};Blockly.Arduino.inout_buildin_led=function(){var a=this.getFieldValue("STAT");Blockly.Arduino.setups_.setup_output_led_builtin="pinMode(LED_BUILTIN, OUTPUT);";return"digitalWrite(LED_BUILTIN, "+a+");\n"};Blockly.Arduino.inout_digital_write=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("STAT");Blockly.Arduino.setups_["setup_output_"+a]="pinMode("+a+", OUTPUT);";return"digitalWrite("+a+", "+b+");\n"};
Blockly.Arduino.inout_custom_digital_write=function(){var a=Blockly.Arduino.valueToCode(this,"PIN",Blockly.Arduino.ORDER_ATOMIC)||"13",b=Blockly.Arduino.valueToCode(this,"STAT",Blockly.Arduino.ORDER_ATOMIC)||"HIGH";Blockly.Arduino.setups_["setup_output_"+a]="pinMode("+a+", OUTPUT);";return"digitalWrite("+a+", "+b+");\n"};
Blockly.Arduino.inout_digital_read=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.setups_["setup_input_"+a]||(Blockly.Arduino.setups_["setup_input_"+a]="pinMode("+a+", INPUT);");return["digitalRead("+a+")",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.inout_digital_buildin_read=function(){Blockly.Arduino.setups_.setup_output_led_builtin||(Blockly.Arduino.setups_.setup_output_led_builtin="pinMode(LED_BUILTIN, OUTPUT);");return["digitalRead(LED_BUILTIN)",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.inout_custom_digital_read=function(){var a=Blockly.Arduino.valueToCode(this,"PIN_READ",Blockly.Arduino.ORDER_ATOMIC);Blockly.Arduino.setups_["setup_output_"+a]="pinMode("+a+", INPUT);";return["digitalRead("+a+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.inout_custom_digital_read_pullup=function(){var a=Blockly.Arduino.valueToCode(this,"PIN_READ",Blockly.Arduino.ORDER_ATOMIC);Blockly.Arduino.setups_["setup_output_"+a]="pinMode("+a+", INPUT_PULLUP);";return["digitalRead("+a+")",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.inout_enable_pullup=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.setups_["setup_input_"+a]="pinMode("+a+", INPUT_PULLUP);";return["",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.inout_analog_write=function(){var a=this.getFieldValue("PIN"),b=Blockly.Arduino.valueToCode(this,"NUM",Blockly.Arduino.ORDER_ATOMIC)||"255";Blockly.Arduino.setups_["setup_output_"+a]="pinMode("+a+", OUTPUT);";return"analogWrite("+a+", "+b+");\n"};
Blockly.Arduino.inout_custom_analog_write=function(){var a=Blockly.Arduino.valueToCode(this,"PIN_ANALOGWRITE",Blockly.Arduino.ORDER_ATOMIC),b=Blockly.Arduino.valueToCode(this,"NUM",Blockly.Arduino.ORDER_ATOMIC)||"255";Blockly.Arduino.setups_["setup_output_"+a]="pinMode("+a+", OUTPUT);";return"analogWrite("+a+", "+b+");\n"};Blockly.Arduino.inout_analog_read=function(){return["analogRead("+this.getFieldValue("PIN")+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.inout_custom_analog_read=function(){return["analogRead("+Blockly.Arduino.valueToCode(this,"PIN_ANALOGREAD",Blockly.Arduino.ORDER_ATOMIC)+")",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.inout_highlow=function(){return["HIGH"==this.getFieldValue("BOOL")?"HIGH":"LOW",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.pulsein=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("TIMEOUT"),c="HIGH"==this.getFieldValue("type")?"HIGH":"LOW";console.log(b);Blockly.Arduino.setups_["setup_output_"+a]="pinMode("+a+", INPUT);";return[0<b?"pulseIn("+a+","+c+","+b+")":"pulseIn("+a+","+c+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.custom_tone=function(){
  var a=Blockly.Arduino.valueToCode(this,"PIN",Blockly.Arduino.ORDER_ATOMIC)||0,
      b=Blockly.Arduino.valueToCode(this,"FREQ",Blockly.Arduino.ORDER_ATOMIC)||0,
      c=Blockly.Arduino.valueToCode(this,"DURATION",Blockly.Arduino.ORDER_ATOMIC)||0;
  return"tone("+a+", "+b+", "+c+");\n"
};
Blockly.Arduino.tone=function(){
  var a=this.getFieldValue("PIN"),
      b=this.getFieldValue("FREQ");
  return"tone("+a+", "+b+");\n"
};
Blockly.Arduino.no_tone=function(){
  return"noTone("+this.getFieldValue("PIN")+");\n"
};

Blockly.Arduino.inout_digitalpin=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.setups_["setup_output_"+a]="pinMode("+a+", OUTPUT);";return[a,Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.inout_analogpin=function(){return[this.getFieldValue("PIN"),Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.linkit={};var controlch;Blockly.Arduino.linkit_ble_periphral_is_written=function(){var a=Blockly.Arduino.valueToCode(this,"CHARACTERISTIC",Blockly.Arduino.ORDER_ATOMIC)||"";this.getFieldValue("TYPE");a=a.replace(/"/g,"");a=a.replace(/-/g,"_");a=a.toLowerCase();return["__"+a+".isWritten()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.linkit_ble_periphral_write=function(){var a=Blockly.Arduino.valueToCode(this,"CHARACTERISTIC",Blockly.Arduino.ORDER_ATOMIC)||"",b=Blockly.Arduino.valueToCode(this,"VALUE",Blockly.Arduino.ORDER_ATOMIC)||"",c=this.getFieldValue("TYPE");a=a.replace(/"/g,"");a=a.replace(/-/g,"_");a=a.toLowerCase();return("int"==c?"__"+a+".setValue("+b+");":"__"+a+'.setValue("'+b+'");')+"\n"};
Blockly.Arduino.linkit_ble_periphral_get_value=function(){var a=Blockly.Arduino.valueToCode(this,"CHARACTERISTIC",Blockly.Arduino.ORDER_ATOMIC)||"";this.getFieldValue("TYPE");a=a.replace(/"/g,"");a=a.replace(/-/g,"_");a=a.toLowerCase();return["__"+a+".getValue()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.linkit_ble_Characteristic=function(){var a=Blockly.Arduino.valueToCode(this,"CHARACTERISTIC",Blockly.Arduino.ORDER_ATOMIC)||"",b=this.getFieldValue("TYPE"),c=this.getFieldValue("CHARACTERISTIC_TYPE");a=a.replace(/"/g,"");var d=a.replace(/-/g,"_");d=d.toLowerCase();Blockly.Arduino.definitions_.define_linkit_ble_include="#include <LBLE.h>";Blockly.Arduino.definitions_.define_linkit_ble_periphral_include="#include <LBLEPeriphral.h>";Blockly.Arduino.definitions_["define_linkit_ble_periphral_include_characteristic"+
d]=""+c+" __"+d+'("'+a+'", '+b+");";Blockly.Arduino.setups_["define_linkit_ble_periphral__service_config"+d]="__periphralService.addAttribute(__"+d+");";return"\n"};
Blockly.Arduino.linkit_ble_eddy=function(){var a=Blockly.Arduino.valueToCode(this,"URL",Blockly.Arduino.ORDER_ATOMIC)||"";this.getFieldValue("TYPE");a=a.replace(/"/g,"");if(11>a.length||!a.startsWith("http://")&&!a.startsWith("https://"))return"// "+Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_EDDY_URL_INVALID;if(a.startsWith("http://")){var b="EDDY_HTTP";a=a.substring(7)}else b="EDDY_HTTPS",a=a.substring(8);17<a.length&&(a=a.substring(0,17));Blockly.Arduino.definitions_.define_linkit_ble_include="#include <LBLE.h>";
Blockly.Arduino.definitions_.define_linkit_ble_periphral_include="#include <LBLEPeriphral.h>";Blockly.Arduino.setups_.define_linkit_ble_setup="LBLE.begin();";Blockly.Arduino.setups_.define_linkit_ble_setup_wait_loop="while (!LBLE.ready()) { delay(100); }\n";Blockly.Arduino.setups_.define_linkit_ble_beacon_advertisement_setup="LBLEAdvertisementData __beaconData;";Blockly.Arduino.setups_.define_linkit_ble_beacon_config_setup="__beaconData.configAsEddystoneURL("+b+', "'+a+'");';Blockly.Arduino.setups_.define_linkit_ble_beacon_advertisement_advertise=
"LBLEPeripheral.advertise(__beaconData);";return""};
Blockly.Arduino.linkit_ble_periphral=function(){var a=Blockly.Arduino.valueToCode(this,"NAME",Blockly.Arduino.ORDER_ATOMIC)||"",b=Blockly.Arduino.valueToCode(this,"SERVICE",Blockly.Arduino.ORDER_ATOMIC)||"";a=a.replace(/"/g,"");b=b.replace(/"/g,"");Blockly.Arduino.definitions_.define_linkit_ble_include="#include <LBLE.h>";Blockly.Arduino.definitions_.define_linkit_ble_periphral_include="#include <LBLEPeriphral.h>";Blockly.Arduino.definitions_.define_linkit_ble_periphral_include_service='LBLEService __periphralService("'+
b+'");';Blockly.Arduino.setups_.define_linkit_ble_setup="LBLE.begin();";Blockly.Arduino.setups_.define_linkit_ble_setup_wait_loop="while (!LBLE.ready()) { delay(100); }\n";b=Blockly.Arduino.statementToCode(this,"BLE_CONTENT");b=b.replace(/(^\s+)|(\s+$)/g,"");Blockly.Arduino.setups_.define_linkit_ble_periphral_service_config=b;Blockly.Arduino.setups_.define_linkit_ble_periphral_config="LBLEPeripheral.addService(__periphralService);";Blockly.Arduino.setups_.define_linkit_ble_periphral_advertisement_name_set=
'LBLEPeripheral.setName("'+a+'");';Blockly.Arduino.setups_.define_linkit_ble_periphral_setup="LBLEPeripheral.begin();";Blockly.Arduino.setups_.define_linkit_ble_periphral_advertisement_setup="LBLEAdvertisementData __advertisement;";Blockly.Arduino.setups_.define_linkit_ble_periphral_advertisement_name_setup='__advertisement.configAsConnectableDevice("'+a+'");';Blockly.Arduino.setups_.define_linkit_ble_periphral_advertisement_advertise="LBLEPeripheral.advertise(__advertisement);";return"\n"};
Blockly.Arduino.linkit_ble_get_address=function(){Blockly.Arduino.definitions_.define_linkit_ble_include="#include <LBLE.h>";Blockly.Arduino.setups_.define_linkit_ble_setup="LBLE.begin();";return["LBLE.getDeviceAddress().toString()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.linkit_ble_central_get_peripheral_with_index=function(){var a=Blockly.Arduino.valueToCode(this,"INDEX",Blockly.Arduino.ORDER_ATOMIC)||"";a=a.replace(/"/g,"");Blockly.Arduino.definitions_.define_linkit_ble_include="#include <LBLE.h>";Blockly.Arduino.definitions_.define_linkit_ble_central_include="#include <LBLECentral.h>";Blockly.Arduino.setups_.define_linkit_ble_setup="LBLE.begin();";Blockly.Arduino.setups_.define_linkit_ble_setup_wait_loop="while (!LBLE.ready()) { delay(100); }\n";
Blockly.Arduino.setups_.define_linkit_ble_setup_central_scan="LBLECentral.scan();";return["__scanner.getName("+a+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.linkit_ble_central_scan_count=function(){Blockly.Arduino.definitions_.define_linkit_ble_include="#include <LBLE.h>";Blockly.Arduino.definitions_.define_linkit_ble_central_include="#include <LBLECentral.h>";Blockly.Arduino.setups_.define_linkit_ble_setup="LBLE.begin();";Blockly.Arduino.setups_.define_linkit_ble_setup_wait_loop="while (!LBLE.ready()) { delay(100); }\n";Blockly.Arduino.setups_.define_linkit_ble_setup_central_scan="LBLECentral.scan();";return["LBLECentral.getPeripheralCount()",
Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.linkit_ble_central_scan=function(){Blockly.Arduino.definitions_.define_linkit_ble_include="#include <LBLE.h>";Blockly.Arduino.definitions_.define_linkit_ble_central_include="#include <LBLECentral.h>";Blockly.Arduino.setups_.define_linkit_ble_setup="LBLE.begin();";Blockly.Arduino.setups_.define_linkit_ble_setup_wait_loop="while (!LBLE.ready()) { delay(100); }\n";Blockly.Arduino.setups_.define_linkit_ble_setup_central_scan="LBLECentral.scan();";return"\n"};
Blockly.Arduino.linkit_ble_ibeacon=function(){var a=Blockly.Arduino.valueToCode(this,"UUID",Blockly.Arduino.ORDER_ATOMIC)||"",b=Blockly.Arduino.valueToCode(this,"MAJOR",Blockly.Arduino.ORDER_ATOMIC)||"",c=Blockly.Arduino.valueToCode(this,"MINOR",Blockly.Arduino.ORDER_ATOMIC)||"",d=Blockly.Arduino.valueToCode(this,"RSSI",Blockly.Arduino.ORDER_ATOMIC)||"";a=a.replace(/"/g,"");b=b.replace(/"/g,"");c=c.replace(/"/g,"");d=d.replace(/"/g,"");Blockly.Arduino.definitions_.define_linkit_ble_include="#include <LBLE.h>";
Blockly.Arduino.definitions_.define_linkit_ble_periphral_include="#include <LBLEPeriphral.h>";Blockly.Arduino.definitions_.define_linkit_ble_ibeacon_init="LBLEAdvertisementData __beaconData;";Blockly.Arduino.setups_.define_linkit_ble_setup="LBLE.begin();";Blockly.Arduino.setups_.define_linkit_ble_setup_wait_loop="while (!LBLE.ready()) { delay(100); }\n";Blockly.Arduino.setups_.define_linkit_ble_ibeacon_config='__beaconData.configAsIBeacon("'+a+'", '+b+", "+c+", "+d+");";Blockly.Arduino.setups_.define_linkit_ble_ibeacon_advertise=
"LBLEPeripheral.advertise(__beaconData);";return"\n"};Blockly.Arduino.linkit_ble_wait_until_ready=function(){Blockly.Arduino.definitions_.define_linkit_ble_include="#include <LBLE.h>";Blockly.Arduino.setups_.define_linkit_ble_setup="LBLE.begin();";Blockly.Arduino.setups_.define_linkit_ble_setup_wait_loop="while (!LBLE.ready()) { delay(100); }\n";return"\n"};
Blockly.Arduino.linkit_ble_ready=function(){Blockly.Arduino.definitions_.define_linkit_ble_include="#include <LBLE.h>";Blockly.Arduino.setups_.define_linkit_ble_setup="LBLE.begin();";return["LBLE.ready()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.mcs=function(){var a=Blockly.Arduino.valueToCode(this,"DEVICEID",Blockly.Arduino.ORDER_ATOMIC)||"",b=Blockly.Arduino.valueToCode(this,"DEVICEKEY",Blockly.Arduino.ORDER_ATOMIC)||"";a=a.replace(/"/g,"");b=b.replace(/"/g,"");Blockly.Arduino.definitions_.define_mcs_include2='#include "MCS.h"\n';Blockly.Arduino.definitions_.set_MCS_device='MCSDevice mcs("'+a+'", "'+b+'");\n';a=Blockly.Arduino.statementToCode(this,"CONTENT");a=a.replace(/(^\s+)|(\s+$)/g,"");return a+"while(!mcs.connected()) { mcs.connect(); }\n"};
Blockly.Arduino.mcs_set_control_channel=function(){var a=Blockly.Arduino.valueToCode(this,"CONTROL_CHANNEL",Blockly.Arduino.ORDER_ATOMIC)||"";a=a.replace(/"/g,"");var b=this.getFieldValue("TYPE");Blockly.Arduino.setups_["mcs_add_channel"+a]="mcs.addChannel("+a+");";Blockly.Arduino.definitions_["set_MCS_control"+a]="boolean"==b?"MCSControllerOnOff "+a+'("'+a+'");':"category"==b?"MCSControllerCategory "+a+'("'+a+'");':"float"==b?"MCSControllerFloat "+a+'("'+a+'");':"String"==b?"MCSControllerString "+
a+'("'+a+'");':"MCSControllerInteger "+a+'("'+a+'");';return""};
Blockly.Arduino.mcs_set_display_channel=function(){var a=Blockly.Arduino.valueToCode(this,"DISPLAY_CHANNEL",Blockly.Arduino.ORDER_ATOMIC)||"";a=a.replace(/"/g,"");Blockly.Arduino.setups_["mcs_add_channel"+a]="mcs.addChannel("+a+");";var b=this.getFieldValue("TYPE");Blockly.Arduino.definitions_["set_MCS_display"+a]="boolean"==b?"MCSDisplayOnOff "+a+'("'+a+'");':"category"==b?"MCSDisplayCategory "+a+'("'+a+'");':"float"==b?"MCSDisplayFloat "+a+'("'+a+'");':"String"==b?"MCSDisplayString "+a+'("'+a+'");':
"MCSDisplayInteger "+a+'("'+a+'");';return""};Blockly.Arduino.mcs_add_channel=function(){var a=Blockly.Arduino.valueToCode(this,"ADD_CHANNEL",Blockly.Arduino.ORDER_ATOMIC)||"";a=a.replace(/"/g,"");Blockly.Arduino.setups_["mcs_add_channel"+a]="mcs.addChannel("+a+");\n";return""};Blockly.Arduino.mcs_connected=function(){return["mcs.connected()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.mcs_reconnect=function(){return"mcs.connect();\n"};
Blockly.Arduino.mcs_wait_until_connected=function(){Blockly.Arduino.setups_.mcs_wait_until_connected="while(!mcs.connected()) { mcs.connect(); }\n";return""};Blockly.Arduino.mcs_channel_valid=function(){var a=Blockly.Arduino.valueToCode(this,"CHANNEL_VALID",Blockly.Arduino.ORDER_ATOMIC)||"";a=a.replace(/"/g,"");return[a+".valid()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.mcs_channel_value=function(){var a=Blockly.Arduino.valueToCode(this,"CHANNEL_VALUE",Blockly.Arduino.ORDER_ATOMIC)||"";controlch=a=a.replace(/"/g,"");return[a+".value()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.mcs_channel2_value=function(){var a=Blockly.Arduino.valueToCode(this,"CHANNEL2_VALUE",Blockly.Arduino.ORDER_ATOMIC)||"";a=a.replace(/"/g,"");var b=Blockly.Arduino.valueToCode(this,"SET_VALUE",Blockly.Arduino.ORDER_ATOMIC)||"";b=b.replace(/"/g,"");return a+".set("+b+");\n"};
Blockly.Arduino.mcs_process=function(){Blockly.Arduino.setups_.add_serialport="Serial.begin(9600);";return'while (!mcs.connected()) {\n  mcs.connect();\n  if (mcs.connected()) { Serial.println("MCS Reconnected."); }\n}\nmcs.process(100);\n'};
Blockly.Arduino.mcs_channel_wait_until_read_value=function(){var a=Blockly.Arduino.valueToCode(this,"CHANNEL",Blockly.Arduino.ORDER_ATOMIC)||"";a=a.replace(/"/g,"");Blockly.Arduino.setups_["mcs_channel_wait_until_read_value"+a]="while(!"+a+".valid()) { "+a+".value(); }\n";return""};Blockly.Arduino.mcs_channel_updated=function(){var a=Blockly.Arduino.valueToCode(this,"CHANNEL_UPDATED",Blockly.Arduino.ORDER_ATOMIC)||"";a=a.replace(/"/g,"");return[a+".updated()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.mcslite=function(){var a=Blockly.Arduino.valueToCode(this,"DEVICEIDL",Blockly.Arduino.ORDER_ATOMIC)||"",b=Blockly.Arduino.valueToCode(this,"DEVICEKEYL",Blockly.Arduino.ORDER_ATOMIC)||"",c=Blockly.Arduino.valueToCode(this,"SERV",Blockly.Arduino.ORDER_ATOMIC)||"",d=Blockly.Arduino.valueToCode(this,"PORT",Blockly.Arduino.ORDER_ATOMIC)||"";a=a.replace(/"/g,"");b=b.replace(/"/g,"");c=c.replace(/"/g,"");Blockly.Arduino.definitions_.define_mcs_include2='#include "MCS.h"\n';Blockly.Arduino.definitions_.set_MCS_device=
'MCSLiteDevice mcs("'+a+'", "'+b+'", "'+c+'", '+d.toString()+");\n";a=Blockly.Arduino.statementToCode(this,"CONTENT");a=a.replace(/(^\s+)|(\s+$)/g,"");return a+"while(!mcs.connected()) { mcs.connect(); }\n"};
Blockly.Arduino.linkit_wifi_wait_until_ready=function(){
	var a=Blockly.Arduino.valueToCode(this,"SSID",Blockly.Arduino.ORDER_ATOMIC)||"",b=Blockly.Arduino.valueToCode(this,"PASSWORD",Blockly.Arduino.ORDER_ATOMIC)||"";
	//a=a.replace(/"/g,"");b=b.replace(/"/g,"");
	Blockly.Arduino.definitions_.define_linkit_wifi_include="#include <LWiFi.h>";Blockly.Arduino.definitions_.define_linkit_wifi_ssid='char _lwifi_ssid[] = '+a+';';Blockly.Arduino.definitions_.define_linkit_wifi_pass='char _lwifi_pass[] = '+b+';';
	return"while (WiFi.begin(_lwifi_ssid, _lwifi_pass) != WL_CONNECTED) { delay(1000); }\n"
};
Blockly.Arduino.linkit_wifi_ready_advanced=function(){var a=Blockly.Arduino.valueToCode(this,"SSID",Blockly.Arduino.ORDER_ATOMIC)||"",b=Blockly.Arduino.valueToCode(this,"PASSWORD",Blockly.Arduino.ORDER_ATOMIC)||"";a=a.replace(/"/g,"");b=b.replace(/"/g,"");Blockly.Arduino.definitions_.define_linkit_wifi_include="#include <LWiFi.h>";Blockly.Arduino.definitions_.define_linkit_wifi_ssid='char _lwifi_ssid[] = "'+a+'";';Blockly.Arduino.definitions_.define_linkit_wifi_pass='char _lwifi_pass[] = "'+b+'";';
return["(WiFi.begin(_lwifi_ssid, _lwifi_pass) == WL_CONNECTED)",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.linkit_wifi_ip_address=function(){return["WiFi.localIP().toString()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.linkit_wifi_ready=function(){return["(WiFi.begin(_lwifi_ssid, _lwifi_pass) == WL_CONNECTED)",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.linkit_wifi=function(){var a=Blockly.Arduino.valueToCode(this,"SSID",Blockly.Arduino.ORDER_ATOMIC)||"",b=Blockly.Arduino.valueToCode(this,"PASSWORD",Blockly.Arduino.ORDER_ATOMIC)||"";a=a.replace(/"/g,"");b=b.replace(/"/g,"");Blockly.Arduino.definitions_.define_linkit_wifi_include="#include <LWiFi.h>";Blockly.Arduino.definitions_.define_linkit_wifi_ssid='char _lwifi_ssid[] = "'+a+'";';Blockly.Arduino.definitions_.define_linkit_wifi_pass='char _lwifi_pass[] = "'+b+'";';return["WiFi.begin(_lwifi_ssid, _lwifi_pass)",
Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.linkit_wifi_disconnect=function(){return"WiFi.disconnect();"};
Blockly.Arduino.linkit_wifi_ignore_result=function(){var a=Blockly.Arduino.valueToCode(this,"SSID",Blockly.Arduino.ORDER_ATOMIC)||"",b=Blockly.Arduino.valueToCode(this,"PASSWORD",Blockly.Arduino.ORDER_ATOMIC)||"";a=a.replace(/"/g,"");b=b.replace(/"/g,"");Blockly.Arduino.definitions_.define_linkit_wifi_include="#include <LWiFi.h>";Blockly.Arduino.definitions_.define_linkit_wifi_ssid='char _lwifi_ssid[] = "'+a+'";';Blockly.Arduino.definitions_.define_linkit_wifi_pass='char _lwifi_pass[] = "'+b+'";';
Blockly.Arduino.setups_.define_linkit_wifi_setup="WiFi.begin(_lwifi_ssid, _lwifi_pass);";return"\n"};Blockly.Arduino.linkit_wifi_status=function(){return[this.getFieldValue("String"),Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.linkit_lremote=function(){var a=this.getFieldValue("ORIENTATION"),b=Blockly.Arduino.valueToCode(this,"DEVICEID",Blockly.Arduino.ORDER_ATOMIC)||"",c=Blockly.Arduino.valueToCode(this,"ROW",Blockly.Arduino.ORDER_ATOMIC)||"",d=Blockly.Arduino.valueToCode(this,"COLUMN",Blockly.Arduino.ORDER_ATOMIC)||"";b=b.replace(/"/g,"");c=c.replace(/"/g,"");d=d.replace(/"/g,"");Blockly.Arduino.definitions_.define_linkit_lremote_include="#include <LRemote.h>";var e=Blockly.Arduino.statementToCode(this,
"CONTENT");e=e.replace(/(^\s+)|(\s+$)/g,"");a='LRemote.setName("'+b+'"); \nLRemote.setOrientation('+("vertical"==a?"RC_PORTRAIT":"horizontal"==a?"RC_LANDSCAPE":"")+"); \nLRemote.setGrid("+d+", "+c+"); \n";a=a+"  "+e+"\n";return a+="LRemote.begin(); \n"};
Blockly.Arduino.linkit_lremote_settext=function(){
  var a=Blockly.Arduino.valueToCode(this,"NAME",Blockly.Arduino.ORDER_ATOMIC)||"",
      b=Blockly.Arduino.valueToCode(this,"CONTENT",Blockly.Arduino.ORDER_ATOMIC)||"",
      c=Blockly.Arduino.valueToCode(this,"COLUMN",Blockly.Arduino.ORDER_ATOMIC)||"",
      d=Blockly.Arduino.valueToCode(this,"ROW",Blockly.Arduino.ORDER_ATOMIC)||"",
      e=Blockly.Arduino.valueToCode(this,"WIDTH",Blockly.Arduino.ORDER_ATOMIC)||"",
      f=Blockly.Arduino.valueToCode(this,"HEIGHT",Blockly.Arduino.ORDER_ATOMIC)||"",
      g=this.getFieldValue("COLOUR");
      a=a.replace(/"/g,"");
      b=b.replace(/"/g,"");
      d=d.replace(/"/g,"");
      c=c.replace(/"/g,"");
      e=e.replace(/"/g,"");
      f=f.replace(/"/g,"");
  Blockly.Arduino.definitions_["define_linkit_lremote_setText_"+a]="LRemoteLabel "+a+"; ";
  b="\n"+a+".setPos("+c+", "+d+"); \n"+a+'.setText("'+b+'"); \n'+a+".setSize("+e+", "+f+"); \n";b=b+a+".setColor("+("orange"==g?"RC_ORANGE":"blue"==g?"RC_BLUE":"green"==g?"RC_GREEN":"pink"==g?"RC_PINK":"gray"==g?"RC_GREY":"yellow"==g?"RC_YELLOW":"")+"); \n";
  return b=b+"LRemote.addControl("+a+"); \n\n"
};
Blockly.Arduino.linkit_lremote_setbuttonsquare=function(){var a=Blockly.Arduino.valueToCode(this,"NAME",Blockly.Arduino.ORDER_ATOMIC)||"",b=Blockly.Arduino.valueToCode(this,"CONTENT",Blockly.Arduino.ORDER_ATOMIC)||"",c=Blockly.Arduino.valueToCode(this,"COLUMN",Blockly.Arduino.ORDER_ATOMIC)||"",d=Blockly.Arduino.valueToCode(this,"ROW",Blockly.Arduino.ORDER_ATOMIC)||"",e=Blockly.Arduino.valueToCode(this,"WIDTH",Blockly.Arduino.ORDER_ATOMIC)||"",f=Blockly.Arduino.valueToCode(this,"HEIGHT",Blockly.Arduino.ORDER_ATOMIC)||
"",g=this.getFieldValue("COLOUR");a=a.replace(/"/g,"");b=b.replace(/"/g,"");d=d.replace(/"/g,"");c=c.replace(/"/g,"");e=e.replace(/"/g,"");f=f.replace(/"/g,"");Blockly.Arduino.definitions_["define_linkit_lremote_setButtonSquare_"+a]="LRemoteButton "+a+"; ";b="\n"+a+".setPos("+c+", "+d+"); \n"+a+'.setText("'+b+'"); \n'+a+".setSize("+e+", "+f+"); \n";b=b+a+".setColor("+("orange"==g?"RC_ORANGE":"blue"==g?"RC_BLUE":"green"==g?"RC_GREEN":"pink"==g?"RC_PINK":"gray"==g?"RC_GREY":"yellow"==g?"RC_YELLOW":
"")+"); \n";return b=b+"LRemote.addControl("+a+"); \n\n"};
Blockly.Arduino.linkit_lremote_setbuttoncircle=function(){var a=Blockly.Arduino.valueToCode(this,"NAME",Blockly.Arduino.ORDER_ATOMIC)||"",b=Blockly.Arduino.valueToCode(this,"CONTENT",Blockly.Arduino.ORDER_ATOMIC)||"",c=Blockly.Arduino.valueToCode(this,"COLUMN",Blockly.Arduino.ORDER_ATOMIC)||"",d=Blockly.Arduino.valueToCode(this,"ROW",Blockly.Arduino.ORDER_ATOMIC)||"",e=Blockly.Arduino.valueToCode(this,"WIDTH",Blockly.Arduino.ORDER_ATOMIC)||"",f=Blockly.Arduino.valueToCode(this,"HEIGHT",Blockly.Arduino.ORDER_ATOMIC)||
"",g=this.getFieldValue("COLOUR");a=a.replace(/"/g,"");b=b.replace(/"/g,"");d=d.replace(/"/g,"");c=c.replace(/"/g,"");e=e.replace(/"/g,"");f=f.replace(/"/g,"");Blockly.Arduino.definitions_["define_linkit_lremote_setButtonCircle_"+a]="LRemoteCircleButton "+a+"; ";b="\n"+a+".setPos("+c+", "+d+"); \n"+a+".setSize("+e+", "+f+"); \n"+a+'.setText("'+b+'"); \n';b=b+a+".setColor("+("orange"==g?"RC_ORANGE":"blue"==g?"RC_BLUE":"green"==g?"RC_GREEN":"pink"==g?"RC_PINK":"gray"==g?"RC_GREY":"yellow"==g?"RC_YELLOW":
"")+"); \n";return b=b+"LRemote.addControl("+a+"); \n\n"};
Blockly.Arduino.linkit_lremote_setswitch=function(){var a=Blockly.Arduino.valueToCode(this,"NAME",Blockly.Arduino.ORDER_ATOMIC)||"",b=Blockly.Arduino.valueToCode(this,"CONTENT",Blockly.Arduino.ORDER_ATOMIC)||"",c=Blockly.Arduino.valueToCode(this,"COLUMN",Blockly.Arduino.ORDER_ATOMIC)||"",d=Blockly.Arduino.valueToCode(this,"ROW",Blockly.Arduino.ORDER_ATOMIC)||"",e=Blockly.Arduino.valueToCode(this,"WIDTH",Blockly.Arduino.ORDER_ATOMIC)||"",f=Blockly.Arduino.valueToCode(this,"HEIGHT",Blockly.Arduino.ORDER_ATOMIC)||
"",g=this.getFieldValue("COLOUR");a=a.replace(/"/g,"");b=b.replace(/"/g,"");d=d.replace(/"/g,"");c=c.replace(/"/g,"");e=e.replace(/"/g,"");f=f.replace(/"/g,"");Blockly.Arduino.definitions_["define_linkit_lremote_setSwitch_"+a]="LRemoteSwitch "+a+"; ";b="\n"+a+".setPos("+c+", "+d+"); \n"+a+".setSize("+e+", "+f+"); \n"+a+'.setText("'+b+'"); \n';b=b+a+".setColor("+("orange"==g?"RC_ORANGE":"blue"==g?"RC_BLUE":"green"==g?"RC_GREEN":"pink"==g?"RC_PINK":"gray"==g?"RC_GREY":"yellow"==g?"RC_YELLOW":"")+"); \n";
return b=b+"LRemote.addControl("+a+"); \n\n"};
Blockly.Arduino.linkit_lremote_setslider=function(){var a=Blockly.Arduino.valueToCode(this,"NAME",Blockly.Arduino.ORDER_ATOMIC)||"",b=Blockly.Arduino.valueToCode(this,"CONTENT",Blockly.Arduino.ORDER_ATOMIC)||"",c=Blockly.Arduino.valueToCode(this,"COLUMN",Blockly.Arduino.ORDER_ATOMIC)||"",d=Blockly.Arduino.valueToCode(this,"ROW",Blockly.Arduino.ORDER_ATOMIC)||"",e=Blockly.Arduino.valueToCode(this,"WIDTH",Blockly.Arduino.ORDER_ATOMIC)||"",f=Blockly.Arduino.valueToCode(this,"HEIGHT",Blockly.Arduino.ORDER_ATOMIC)||
"",g=Blockly.Arduino.valueToCode(this,"MINIMUM",Blockly.Arduino.ORDER_ATOMIC)||"",h=Blockly.Arduino.valueToCode(this,"MAXIMUM",Blockly.Arduino.ORDER_ATOMIC)||"",l=Blockly.Arduino.valueToCode(this,"INITIAL",Blockly.Arduino.ORDER_ATOMIC)||"",k=this.getFieldValue("COLOUR");a=a.replace(/"/g,"");b=b.replace(/"/g,"");d=d.replace(/"/g,"");c=c.replace(/"/g,"");e=e.replace(/"/g,"");f=f.replace(/"/g,"");g=g.replace(/"/g,"");h=h.replace(/"/g,"");l=l.replace(/"/g,"");Blockly.Arduino.definitions_["define_linkit_lremote_setSlider_"+
a]="LRemoteSlider "+a+"; ";b="\n"+a+".setPos("+c+", "+d+"); \n"+a+".setSize("+e+", "+f+"); \n"+a+'.setText("'+b+'"); \n';b=b+a+".setValueRange("+g+", "+h+", "+l+"); \n";b=b+a+".setColor("+("orange"==k?"RC_ORANGE":"blue"==k?"RC_BLUE":"green"==k?"RC_GREEN":"pink"==k?"RC_PINK":"gray"==k?"RC_GREY":"yellow"==k?"RC_YELLOW":"")+"); \n";return b=b+"LRemote.addControl("+a+"); \n\n"};
Blockly.Arduino.linkit_lremote_setjoystick=function(){var a=Blockly.Arduino.valueToCode(this,"NAME",Blockly.Arduino.ORDER_ATOMIC)||"",b=Blockly.Arduino.valueToCode(this,"CONTENT",Blockly.Arduino.ORDER_ATOMIC)||"",c=Blockly.Arduino.valueToCode(this,"COLUMN",Blockly.Arduino.ORDER_ATOMIC)||"",d=Blockly.Arduino.valueToCode(this,"ROW",Blockly.Arduino.ORDER_ATOMIC)||"",e=Blockly.Arduino.valueToCode(this,"WIDTH",Blockly.Arduino.ORDER_ATOMIC)||"",f=Blockly.Arduino.valueToCode(this,"HEIGHT",Blockly.Arduino.ORDER_ATOMIC)||
"",g=this.getFieldValue("COLOUR");a=a.replace(/"/g,"");b=b.replace(/"/g,"");d=d.replace(/"/g,"");c=c.replace(/"/g,"");e=e.replace(/"/g,"");f=f.replace(/"/g,"");Blockly.Arduino.definitions_["define_linkit_lremote_setJoystick_"+a]="LRemoteJoyStick "+a+"; ";b="\n"+a+".setPos("+c+", "+d+"); \n"+a+".setSize("+e+", "+f+"); \n"+a+'.setText("'+b+'"); \n';b=b+a+".setColor("+("orange"==g?"RC_ORANGE":"blue"==g?"RC_BLUE":"green"==g?"RC_GREEN":"pink"==g?"RC_PINK":"gray"==g?"RC_GREY":"yellow"==g?"RC_YELLOW":"")+
"); \n";return b=b+"LRemote.addControl("+a+"); \n\n"};Blockly.Arduino.linkit_lremote_connect_status=function(){return["LRemote.connected()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.linkit_lremote_process=function(){return"LRemote.process();\n"};Blockly.Arduino.linkit_lremote_is_written=function(){var a=this.getFieldValue("NAME");a=a.replace(/"/g,"");return[a+".isValueChanged()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.linkit_lremote_read_value=function(){var a=this.getFieldValue("NAME");a=a.replace(/"/g,"");a=a.split(" ");var b=a[0]+".getValue()";1<a.length&&(b=b+"."+a[1].toLowerCase());return[b,Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.linkit_lremote_update_textlabel=function(){
  var a=this.getFieldValue("NAME"),
      b=Blockly.Arduino.valueToCode(this,"CONTENT",Blockly.Arduino.ORDER_ATOMIC)||"";
      a=a.replace(/"/g,"");
      return a+".updateText(String("+b+"));\n"
};
Blockly.Arduino.ethernet={};
Blockly.Arduino.ethernet_begin_dhcp=function(){var a=this.getFieldValue("VERSION"),b=Blockly.Arduino.valueToCode(this,"MAC_ADDRESS",Blockly.Arduino.ORDER_ATOMIC)||"0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED";b=b.replace(/"/g,"");Blockly.Arduino.definitions_.define_spi="#include <SPI.h>";Blockly.Arduino.definitions_.define_ethernet="#include <Ethernet"+a+".h>";Blockly.Arduino.definitions_.define_ethernet_client="EthernetClient client;";Blockly.Arduino.definitions_.define_arduino_mac="byte mac[] = {"+b+"};\n";
return["Ethernet.begin(mac)",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.ethernet_mac_address=function(){var a=this.getFieldValue("MAC_ADDRESS_1"),b=this.getFieldValue("MAC_ADDRESS_2"),c=this.getFieldValue("MAC_ADDRESS_3"),d=this.getFieldValue("MAC_ADDRESS_4"),e=this.getFieldValue("MAC_ADDRESS_5"),f=this.getFieldValue("MAC_ADDRESS_6");return["0x"+a+", 0x"+b+", 0x"+c+", 0x"+d+", 0x"+e+", 0x"+f,Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.ethernet_localip=function(){return["Ethernet.localIP()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.ethernet_available=function(){return["client.available()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.ethernet_connected=function(){return["client.connected()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.ethernet_connect=function(){var a=Blockly.Arduino.valueToCode(this,"SERVER",Blockly.Arduino.ORDER_ATOMIC)||"",b=this.getFieldValue("PORT");return["client.connect("+a+","+b+")",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.ethernet_print=function(){return"client.print("+(Blockly.Arduino.valueToCode(this,"TEXT",Blockly.Arduino.ORDER_ATOMIC)||"")+");\n"};
Blockly.Arduino.ethernet_println=function(){return"client.println("+(Blockly.Arduino.valueToCode(this,"TEXT",Blockly.Arduino.ORDER_ATOMIC)||"")+");\n"};Blockly.Arduino.ethernet_stop=function(){return"client.stop();\n"};Blockly.Arduino.ethernet_read=function(){return["(char)client.read()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.ethernet_get_request=function(){var a=Blockly.Arduino.valueToCode(this,"URL",Blockly.Arduino.ORDER_ATOMIC)||"",b=Blockly.Arduino.valueToCode(this,"SERVER",Blockly.Arduino.ORDER_ATOMIC)||"";a=a.replace(/"/g,"");b=b.replace(/"/g,"");a='client.println("GET '+a+' HTTP/1.1");\n'+('client.println(F("Host: '+b+'"));\n')+'client.println(F("Connection: close"));\n';return a+="client.println();\n"};
Blockly.Arduino.ethernet_post_request=function(){var a=Blockly.Arduino.valueToCode(this,"URL",Blockly.Arduino.ORDER_ATOMIC)||"",b=Blockly.Arduino.valueToCode(this,"SERVER",Blockly.Arduino.ORDER_ATOMIC)||"",c=Blockly.Arduino.valueToCode(this,"POST_DATA",Blockly.Arduino.ORDER_ATOMIC)||"";a=a.replace(/"/g,"");b=b.replace(/"/g,"");a='client.println("POST '+a+' HTTP/1.1");\n'+('client.print(F("Host: '+b+");\n")+'client.println(F("Connection: close"));\n';a+='client.println(F("Content-Type: application/x-www-form-urlencoded"));\n';
a+='client.println(F("Content-Length: '+c.length-2+'"));\n';return a+="client.print("+c+");\n"};Blockly.Arduino.mpu9250={};Blockly.Arduino.mpu9250_setup=function(){Blockly.Arduino.definitions_.define_wire="#include <Wire.h>";Blockly.Arduino.definitions_.define_sensor_include="#include <mpu9250_blockly.h>";Blockly.Arduino.definitions_.define_mpu9250_inst="MPU9250Block mpu9250;";Blockly.Arduino.setups_.setup_mpu9250="mpu9250.begin();"};Blockly.Arduino.mpu9250_read_acc=function(){Blockly.Arduino.mpu9250_setup();return["mpu9250.getAcc"+this.getFieldValue("AXIS")+"()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.mpu9250_read_gyro=function(){Blockly.Arduino.mpu9250_setup();return["mpu9250.getGyro"+this.getFieldValue("AXIS")+"()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.mpu9250_read_attitude=function(){Blockly.Arduino.mpu9250_setup();return["mpu9250.get"+this.getFieldValue("ATTITUDE")+"()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.mpu9250_read_mag=function(){Blockly.Arduino.mpu9250_setup();return["mpu9250.getMag"+this.getFieldValue("AXIS")+"()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.mpu9250_read_north=function(){Blockly.Arduino.mpu9250_setup();return["mpu9250.getDegreeToMagNorth()",Blockly.Arduino.ORDER_ATOMIC]};


Blockly.Arduino.neopixel={};
Blockly.Arduino.neopixel_begin=function(){
  var a=this.getFieldValue("NUM"),
      b=this.getFieldValue("PIN"),
      c=this.getFieldValue("BRIGHTNESS");
  Blockly.Arduino.definitions_.define_include_neopixel="#include <Adafruit_NeoPixel.h>\n";
  Blockly.Arduino.definitions_.define_neopixel="Adafruit_NeoPixel pixels = Adafruit_NeoPixel("+a+","+b+",NEO_GRB + NEO_KHZ800);\n";
  Blockly.Arduino.setups_.setup_neopixel_begin="pixels.begin();\n";
  Blockly.Arduino.setups_.setup_neopixel_brightness="pixels.setBrightness("+c+");\n";
  return""
};
function hexToR(a){return parseInt(cutHex(a).substring(0,2),16)}function hexToG(a){return parseInt(cutHex(a).substring(2,4),16)}function hexToB(a){return parseInt(cutHex(a).substring(4,6),16)}function cutHex(a){return"#"==a.charAt(0)?a.substring(1,7):a}
Blockly.Arduino.neopixel_setpixelcolor=function(){
  var a=Blockly.Arduino.valueToCode(this,"TARGET",Blockly.Arduino.ORDER_ATOMIC)||"0",
      b=this.getFieldValue("RGB");
  return"pixels.setPixelColor("+a+",pixels.Color("+hexToR(b)+","+hexToG(b)+","+hexToB(b)+"));\n"
};
Blockly.Arduino.neopixel_custom_setpixelcolor=function(){
  var a=Blockly.Arduino.valueToCode(this,"TARGET",Blockly.Arduino.ORDER_ATOMIC)||"0",
      b=Blockly.Arduino.valueToCode(this,"R",Blockly.Arduino.ORDER_ATOMIC)||"255",
      c=Blockly.Arduino.valueToCode(this,"G",Blockly.Arduino.ORDER_ATOMIC)||"0",
      d=Blockly.Arduino.valueToCode(this,"B",Blockly.Arduino.ORDER_ATOMIC)||"0";
  return"pixels.setPixelColor("+a+", pixels.Color("+b+","+c+","+d+"));\n"
};
Blockly.Arduino.neopixel_show=function(){
  return"pixels.show();\n"
};


Blockly.Arduino.adxl={};
Blockly.Arduino.adxl345_setup=function(){Blockly.Arduino.definitions_.define_wire="#include <Wire.h>";Blockly.Arduino.definitions_.define_sensor_include="#include <adxl345_blockly.h>";Blockly.Arduino.definitions_.define_adxl_inst="ADXL345Block adxl345;";Blockly.Arduino.setups_.setup_adxl345="adxl345.begin();"};Blockly.Arduino.adxl345_read=function(){Blockly.Arduino.adxl345_setup();return["adxl345.get"+this.getFieldValue("AXIS")+"()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.adxl345_read_attitude=function(){Blockly.Arduino.adxl345_setup();return["adxl345.get"+this.getFieldValue("ATTITUDE")+"()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.adxl345_detect=function(){Blockly.Arduino.adxl345_setup();return"adxl345.detectGesture();\n"};Blockly.Arduino.adxl345_gesture_detected=function(){Blockly.Arduino.adxl345_setup();return["adxl345.is"+this.getFieldValue("GESTURE")+"Detected()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.serial={};Blockly.Arduino.serial_init=function(){var a=this.getFieldValue("SPEED");void 0==Blockly.Arduino.setups_.setup_serial&&(Blockly.Arduino.setups_.setup_serial="Serial.begin("+a+");\n");return""};
Blockly.Arduino.serial_print=function(){
  var a=Blockly.Arduino.valueToCode(this,"CONTENT",Blockly.Arduino.ORDER_ATOMIC)||"0";
  void 0==Blockly.Arduino.setups_.setup_serial&&(Blockly.Arduino.setups_.setup_serial="Serial.begin("+profile["default"].serial+");\n");return"Serial.print("+a+");\n"};
Blockly.Arduino.serial_read=function(){Blockly.Arduino.valueToCode(this,"CONTENT",Blockly.Arduino.ORDER_ATOMIC);void 0==Blockly.Arduino.setups_.setup_serial&&(Blockly.Arduino.setups_.setup_serial="Serial.begin("+profile["default"].serial+");\n");return["Serial.read()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.serial_byte_number=function(){return[this.getFieldValue("NUM"),Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.serial_available=function(){Blockly.Arduino.valueToCode(this,"CONTENT",Blockly.Arduino.ORDER_ATOMIC);void 0==Blockly.Arduino.setups_.setup_serial&&(Blockly.Arduino.setups_.setup_serial="Serial.begin("+profile["default"].serial+");\n");return["Serial.available()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.serial_println=function(){
	var a=Blockly.Arduino.valueToCode(this,"CONTENT",Blockly.Arduino.ORDER_ATOMIC)||"0";
	var statements_setup = Blockly.Arduino.statementToCode(this, 'setup');
	void 0==Blockly.Arduino.setups_.setup_serial&&(Blockly.Arduino.setups_.setup_serial="Serial.begin("+profile["default"].serial+");\n");
	return "Serial.println("+a+");\n"
};