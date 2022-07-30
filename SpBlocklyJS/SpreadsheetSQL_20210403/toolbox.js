var catSpreadsheetsql = '<xml>'+
'    <category name="%{BKY_CATSPREADSHEETSQL}" id="catSpreadsheetsql" colour="360">'+
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
'      </block>'+
'  	   <block type="spreadsheetsql_getdatafinish">'+
'  	   </block>'+
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
