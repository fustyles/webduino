var catOpenAI = '<xml>'+
'<category name="%{BKY_CATOPENAITEXT}" id="CATOPENAITEXT" colour="150">'+
'  <block type="openai_text_initial">'+
'    <value name="token">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="tokens">'+
'      <block type="math_number">'+
'        <field name="NUM">256</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="openai_text_request">'+
'    <value name="words">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+  
'  <block type="openai_text_response">'+
'  </block>'+
'  <block type="openai_text_response_get">'+
'  </block>'+
'  <block type="openai_text_response_clear">'+
'  </block>'+
'</category>'+
'</xml>';
