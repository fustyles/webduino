var catSpreadsheetsql = '<xml>'+
'    <category name="%{BKY_CATSPREADSHEETSQL}" id="catSpreadsheetsql" colour="360">'+
'		<block type="controls_spreadsheet_function">'+
'			<value name="spreadsheeturl">'+
'			  <block type="text">'+
'				<field name="TEXT"></field>'+
'			  </block>'+
'			</value>'+
'			<value name="spreadsheetname">'+
'			  <block type="text">'+
'				<field name="TEXT">工作表1</field>'+
'			  </block>'+
'			</value>'+
'			<value name="row">'+
'			  <block type="math_number">'+
'				<field name="NUM">1</field>'+
'			  </block>'+
'			</value>'+
'			<value name="col">'+
'			  <block type="math_number">'+
'				<field name="NUM">1</field>'+
'			  </block>'+
'			</value>'+
'			<value name="text">'+
'			  <block type="text">'+
'				<field name="TEXT">World Peace</field>'+
'			  </block>'+
'			</value>'+			
'		</block>'+
'      <block type="spreadsheetsql_queryData">'+
'        <value name="spreadsheet_id">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'        <value name="spreadsheet_name">'+
'          <block type="text">'+
'            <field name="TEXT">工作表1</field>'+
'          </block>'+
'        </value>'+
'      </block>'+
'      <block type="spreadsheetsql_executeSql">'+
'        <value name="spreadsheet_sql">'+
'          <block type="text">'+
'            <field name="TEXT">select A limit 1 offset 0</field>'+
'          </block>'+
'        </value>'+
'        <value name="task_id">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'      </block>'+
'      <block type="spreadsheetsql_getCellSQL">'+
'		 <value name="row">'+
'		   <block type="math_number">'+
'			 <field name="NUM">1</field>'+
'		   </block>'+
'		 </value>'+
'      </block>'+
'  	   <block type="spreadsheetsql_getdatafinish">'+
'        <value name="task_id">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'  	   </block>'+
'      <block type="spreadsheetsql_getCell">'+
'		 <value name="row">'+
'		   <block type="math_number">'+
'			 <field name="NUM">1</field>'+
'		   </block>'+
'		 </value>'+
'		 <value name="col">'+
'		   <block type="math_number">'+
'			 <field name="NUM">1</field>'+
'		   </block>'+
'		 </value>'+
'      </block>'+
'      <block type="spreadsheetsql_getDataTable">'+
'        <value name="id">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'		 <value name="width">'+
'		   <block type="math_number">'+
'			 <field name="NUM">400</field>'+
'		   </block>'+
'		 </value>'+
'		 <value name="fontsize">'+
'		   <block type="math_number">'+
'			 <field name="NUM">12</field>'+
'		   </block>'+
'		 </value>'+
'		 <value name="left">'+
'		   <block type="math_number">'+
'			 <field name="NUM">0</field>'+
'		   </block>'+
'		 </value>'+
'		 <value name="top">'+
'		   <block type="math_number">'+
'			 <field name="NUM">0</field>'+
'		   </block>'+
'		 </value>'+
'		 <value name="column">'+
'			<block type="logic_boolean">'+
'				<field name="BOOL">FALSE</field>'+
'			</block>'+
'		 </value>'+
'      </block>'+
'      <block type="spreadsheetsql_clearDataTable">'+
'        <value name="id">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'      </block>'+
'      <block type="spreadsheetsql_getData">'+
'      </block>'+
'      <block type="spreadsheetsql_getDataCount">'+
'      </block>'+
'      <block type="spreadsheetsql_clearData">'+
'      </block>'+
'      <block type="controls_spreadsheet">'+
'      	<value name="spreadsheeturl">'+
'      	  <block type="text">'+
'      		<field name="TEXT"></field>'+
'      	  </block>'+
'      	</value>'+
'      	<value name="spreadsheetname">'+
'      	  <block type="text">'+
'      		<field name="TEXT">工作表1</field>'+
'      	  </block>'+
'      	</value>'+
'      </block>'+
'      <block type="controls_spreadsheet_datetime">'+
'      </block>'+
'    </category>'+
'</xml>';
