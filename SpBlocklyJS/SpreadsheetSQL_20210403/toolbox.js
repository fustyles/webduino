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
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'      </block>'+
'      <block type="spreadsheetsql_executeSql">'+
'        <value name="spreadsheet_sql">'+
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
'    </category>'+
'</xml>';