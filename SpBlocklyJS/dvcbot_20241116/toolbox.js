var catDvcbot = '<xml>'+
'<category name="%{BKY_CATDVCBOT}" id="CATDVCBOT" colour="150">'+
'  <block type="dvcbot_initial">'+
'    <value name="apiKey">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="assistantId">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="dvcbot_result">'+
'    <value name="userMessage">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+ 
'  <block type="dvcbot_response">'+
'  </block>'+ 
'</category>'+
'</xml>';