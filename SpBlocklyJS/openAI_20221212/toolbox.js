var catOpenAI = '<xml>'+
'<category name="%{BKY_CATOPENAI}" id="CATOPENAI" colour="150">'+
'  <block type="openai_chat_initial">'+
'    <value name="token">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="role">'+
'      <block type="text">'+
'        <field name="TEXT">You are a helpful assistant.</field>'+
'      </block>'+
'    </value>'+
'    <field name="temperature">0.5</field>'+  
'  </block>'+
'  <block type="openai_chat_response">'+
'  </block>'+  
'  <block type="openai_chat_set">'+
'    <value name="val">'+
'    	 <block type="math_number">'+
'    		 <field name="NUM">0.5</field>'+
'    	 </block>'+
'    </value>'+
'  </block>'+  
'  <block type="openai_chat_request">'+
'    <value name="words">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+ 
'  <block type="openai_chat_image_request">'+
'    <value name="words">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="url">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+ 
  '  <block type="openai_chat_image_request">'+
'    <value name="words">'+
'      <block type="text">'+
'        <field name="TEXT">請比較兩張影像</field>'+
'      </block>'+
'    </value>'+
'    <value name="url">'+
'      <block type="lists_create_with">'+
'        <mutation items="2"></mutation>'+
'        <value name="ADD0">'+
'          <block type="text">'+
'            <field name="TEXT">Image URL1</field>'+
'          </block>'+
'        </value>'+
'        <value name="ADD1">'+
'          <block type="text">'+
'            <field name="TEXT">Image URL2</field>'+
'          </block>'+
'        </value>'+
'      </block>'+
'    </value>'+
'  </block>'+  
'  <block type="openai_chat_response_get">'+
'  </block>'+
'  <block type="openai_chat_content_clear">'+
'  </block>'+
'  <block type="openai_vision_content_clear">'+
'  </block>'+
'  <block type="openai_chat_insert">'+
'    <value name="words">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="openai_chat_content_file_remote_insert">'+
'    <value name="url">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+   
'  <block type="openai_chat_content_file">'+
'  </block>'+
'  <block type="openai_chat_content_file_remote">'+
'    <value name="url">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="openai_image_initial">'+
'    <value name="key">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="openai_image_request">'+
'    <field name="size">1024x1024</field>'+  
'    <value name="words">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="openai_image_response">'+
'  </block>'+
'  <block type="openai_image_response_get">'+
'  </block>'+
'  <block type="openai_image_response_clear">'+
'  </block>'+
'</category>'+
'</xml>';
