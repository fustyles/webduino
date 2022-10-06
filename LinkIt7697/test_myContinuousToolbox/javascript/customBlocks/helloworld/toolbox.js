'use strict';

if (typeof toolbox_custom == 'undefined')
	var toolbox_custom = [];

toolbox_custom.push(''
+'    <category name="%{BKY_HELLOWORLD_NAME}" categorystyle="logic_category">'
+'      <block type="test1">'
+'			<value name="message">'
+'				<block type="text">'
+'					<field name="TEXT">Hello World</field>'
+'				</block>'
+'			</value>'
+'		</block>'
+'	  	<block type="test2"></block>'
+'      <block type="test3">'
+'			<value name="seconds">'
+'				<block type="math_number">'
+'					<field name="NUM">1</field>'
+'				</block>'
+'			</value>'
+'		</block>'
+'    </category>'
);