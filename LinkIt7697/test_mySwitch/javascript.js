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
 
 Blockly.Arduino.mySwitch=function(a){
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