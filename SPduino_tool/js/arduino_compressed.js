/*
@license
Copyright 2022 Taiwan (ChungYi Fu)
SPDX-License-Identifier: Apache-2.0

@fileoverview SpBlockly V1 (Developer tool)
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

Blockly.Arduino.init=function(a){
	Object.getPrototypeOf(this).init.call(this);
	
	this.nameDB_?this.nameDB_.reset():this.nameDB_=new Blockly.Names(this.RESERVED_WORDS_);
	this.nameDB_.setVariableMap(a.getVariableMap());
	this.nameDB_.populateVariables(a);
	this.nameDB_.populateProcedures(a);
	
	this.definitions_=Object.create(null);
	this.setups_=Object.create(null);
	this.setups_bottom_=Object.create(null);
	this.loops_=Object.create(null);
	this.loops_bottom_=Object.create(null);
	this.functions_=Object.create(null);
	
	this.isInitialized=!0
};

Blockly.Arduino.finish=function(a){
	var b=[],c=[],d=[],e,f=[],g=[],h=[],i=[],j=[];
	for(e in this.definitions_){
		var d=this.definitions_[e];
		d.match(/^#include/)?b.push(d):c.push(d)
	}
	
	f=Blockly.utils.object.values(this.setups_);
	g=Blockly.utils.object.values(this.setups_bottom_);
	h=Blockly.utils.object.values(this.loops_);
	i=Blockly.utils.object.values(this.loops_bottom_);
	j=Blockly.utils.object.values(this.functions_);
	
	a=a.replace(" %1 ",f.join("\n")?f.join("\n").replace(/\n/g,"\n  ")+"\n  ":"");
	a=a.replace(" %2 ",g.join("\n")?g.join("\n").replace(/\n/g,"\n  ")+("\n  "):"");
	a=a.replace(" %3 ",h.join("\n")?h.join("\n").replace(/\n/g,"\n  ")+"\n  ":"");
	a=a.replace(" %4 ",i.join("\n")?i.join("\n").replace(/\n/g,"\n  ")+("\n  "):"");
	a=a.replace(/  \n}/g,"}");
	a=Object.getPrototypeOf(this).finish.call(this,a);
	
	b=b.join("\n")+"\n\n"+c.join("\n")+"\n\n"+a+"\n"+j.join("\n\n");
	
	this.isInitialized=!1;
	this.nameDB_.reset();
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


Blockly.Arduino.main=function(){
	var a=Blockly.Arduino.statementToCode(this,"SETUP")||"";
	var b=Blockly.Arduino.statementToCode(this,"LOOP")||"";
	a=a.replace(/(^\s+)|(\s+$)/g,"")+(a!=""?"\n  ":"");
	b=b.replace(/(^\s+)|(\s+$)/g,"")+(b!=""?"\n  ":"");
	var code = "void setup() \n{\n   %1 " + a + " %2 \n}\n\n"+"void loop() \n{\n   %3 "+ b +" %4 \n}\n";
	return code
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
		var g=Blockly.Arduino.nameDB_.getDistinctName("tmpList",Blockly.VARIABLE_CATEGORY_NAME),h="int "+g+" = "+c+";\n";
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
			e=Blockly.Arduino.nameDB_.getDistinctName("tmpX",Blockly.VARIABLE_CATEGORY_NAME);
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
  var variable0 = Blockly.Arduino.nameDB_.getName(this.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
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
      var startVar = Blockly.Arduino.nameDB_.getDistinctName(
          variable0 + '_start', Blockly.Variables.NAME_TYPE);
      code += 'int ' + startVar + ' = ' + argument0 + ';\n';
    }
    var endVar = argument1;
    var endVar = Blockly.Arduino.nameDB_.getDistinctName(
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


Blockly.Arduino.controls_repeat_ext=function(a){var b=a.getField("TIMES")?String(Number(a.getFieldValue("TIMES"))):Blockly.Arduino.valueToCode(a,"TIMES",Blockly.Arduino.ORDER_ASSIGNMENT)||"0",c=Blockly.Arduino.statementToCode(a,"DO");c=Blockly.Arduino.addLoopTrap(c,a);a="";var d=Blockly.Arduino.nameDB_.getDistinctName("count",Blockly.VARIABLE_CATEGORY_NAME),e=b;b.match(/^\w+$/)||Blockly.isNumber(b)||(e=Blockly.Arduino.nameDB_.getDistinctName("repeat_end",Blockly.VARIABLE_CATEGORY_NAME),
a+="int "+e+" = "+b+";\n");return a+("for (int "+d+" = 0; "+d+" < "+e+"; "+d+"++) {\n"+c+"}\n")};Blockly.Arduino.controls_repeat=Blockly.Arduino.controls_repeat_ext;
Blockly.Arduino.controls_whileUntil=function(a){var b="UNTIL"==a.getFieldValue("MODE"),c=Blockly.Arduino.valueToCode(a,"BOOL",b?Blockly.Arduino.ORDER_LOGICAL_NOT:Blockly.Arduino.ORDER_NONE)||"false",d=Blockly.Arduino.statementToCode(a,"DO");d=Blockly.Arduino.addLoopTrap(d,a);b&&(c="!"+c);return"while ("+c+") {\n"+d+"}\n"};
Blockly.Arduino.controls_for=function(a){
	var b=Blockly.Arduino.nameDB_.getName(a.getFieldValue("VAR"),Blockly.VARIABLE_CATEGORY_NAME)
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
		,g=c,c.match(/^\w+$/)||Blockly.isNumber(c)||(g=Blockly.Arduino.nameDB_.getDistinctName(b+"_start",Blockly.VARIABLE_CATEGORY_NAME),a+="int "+g+" = "+c+";\n")
		,c=d
		,d.match(/^\w+$/)||Blockly.isNumber(d)||(c=Blockly.Arduino.nameDB_.getDistinctName(b+"_end",Blockly.VARIABLE_CATEGORY_NAME),a+="int "+c+" = "+d+";\n")
		,d=Blockly.Arduino.nameDB_.getDistinctName(b+"_inc",Blockly.VARIABLE_CATEGORY_NAME)
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
	var VAR=Blockly.Arduino.nameDB_.getName(this.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
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
				a=Blockly.Arduino.valueToCode(a,"AT2",Blockly.Arduino.ORDER_NONE);
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
	var VAR=Blockly.Arduino.nameDB_.getName(this.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
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
