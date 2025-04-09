var catLLM = '<xml>'+
'<category name="%{BKY_CATLLM}" id="CATLLM" colour="180">'+
'  <block type="llm_chat_initial">'+
'    <value name="domain">'+
'      <block type="text">'+
'        <field name="TEXT">api.groq.com</field>'+
'      </block>'+
'    </value>'+
'    <value name="path">'+
'      <block type="text">'+
'        <field name="TEXT">/openai/v1/chat/completions</field>'+
'      </block>'+
'    </value>'+
'    <value name="model">'+
'      <block type="text">'+
'        <field name="TEXT">meta-llama/llama-4-scout-17b-16e-instruct</field>'+
'      </block>'+
'    </value>'+
'    <value name="apikey">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="role">'+
'      <block type="text">'+
'        <field name="TEXT">You are a helpful assistant.</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="llm_chat_set">'+
'    <value name="val">'+
'    	 <block type="math_number">'+
'    		 <field name="NUM">0.5</field>'+
'    	 </block>'+
'    </value>'+
'  </block>'+
'  <block type="llm_chat_response">'+
'  </block>'+  
'  <block type="llm_chat_request">'+
'    <value name="words">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+ 
'  <block type="llm_chat_image_request">'+
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
'  <block type="llm_chat_response_get">'+
'  </block>'+
'  <block type="llm_chat_content_clear">'+
'  </block>'+
'  <block type="llm_chat_insert">'+
'    <value name="words">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="llm_chat_content_file_remote_insert">'+
'    <value name="url">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+   
'  <block type="llm_chat_content_file">'+
'  </block>'+
'  <block type="llm_chat_content_file_remote">'+
'    <value name="url">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'</category>'+
'</xml>';
