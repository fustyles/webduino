var catGEMINI = '<xml>'+
'<category name="%{BKY_CATGEMINI}" id="CATGEMINI" colour="190">'+
'  <block type="gemini_chat_initial">'+
'    <value name="token">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="tokens">'+
'    	<block type="math_number">'+
'    		<field name="NUM">1000</field>'+
'    	</block>'+
'    </value>'+
'    <field name="temperature">1.0</field>'+
'    <value name="role">'+
'      <block type="text">'+
'        <field name="TEXT">你是繁體中文的助理，請簡短回覆我的問題。</field>'+
'      </block>'+
'    </value>'+  
'  </block>'+
'  <block type="gemini_chat_set">'+
'    <value name="val">'+
'    	<block type="math_number">'+
'    		<field name="NUM">1.0</field>'+
'    	</block>'+
'    </value>'+
'  </block>'+ 
'  <block type="gemini_chat_response">'+
'  </block>'+   
'  <block type="gemini_chat_request">'+
'    <value name="words">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+ 
'  <block type="gemini_chat_response_data">'+
'  </block>'+
'  <block type="gemini_chat_insert">'+
'    <value name="words">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+   
'  </block>'+
'  <block type="gemini_chat_content_file_remote_insert">'+
'    <value name="url">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="gemini_chat_content_file_remote_read">'+
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
'  <block type="gemini_chat_clear">'+
'  </block>'+
'  <block type="gemini_chat_content_file">'+
'  </block>'+
'  <block type="gemini_chat_content_file_remote">'+
'    <value name="url">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="gemini_chat_image_request">'+
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
'  <block type="gemini_chat_image_request">'+
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
'  <block type="gemini_generate_image">'+
'    <value name="words">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="gemini_generate_image_mix">'+
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
'  <block type="gemini_search">'+
'    <value name="words">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+ 
'  <block type="gemini_youtube">'+
'    <value name="url">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+  
'    <value name="words">'+
'      <block type="text">'+
'        <field name="TEXT">Can you summarize this video?</field>'+
'      </block>'+
'    </value>'+
'  </block>'+   
'</category>'+
'</xml>';
