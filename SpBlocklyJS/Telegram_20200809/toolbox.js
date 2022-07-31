var catTelegram = '<xml>'+
'<category name="%{BKY_CATTELEGRAM}" id="CATTELEGRAM" colour="50">'+
'  <block type="telegram_message">'+
'    <value name="telegram_token">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="telegram_chatid">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="telegram_msg">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+ 
'  </block>'+
'  <block type="telegram_photo">'+
'    <value name="telegram_token">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="telegram_chatid">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="telegram_url">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+ 
'  </block>'+  
'  <block type="telegram_image">'+
'    <value name="telegram_token">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+ 
'    <value name="telegram_chatid">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+ 
'    <value name="telegram_videoid">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+ 	  
'  </block>'+ 
'  <block type="telegram_getupdates">'+
'    <value name="telegram_token">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="telegram_br">'+
'  </block>'+
'  <block type="telegram_reply_markup">'+
'    <value name="telegram_token">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="telegram_chatid">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'	<value name="telegram_msg">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="telegram_keyboard">'+
'      <block type="lists_create_with">'+
'        <mutation items="2"></mutation>'+
'        <value name="ADD0">'+
'          <block type="text">'+
'            <field name="TEXT">/led_on</field>'+
'          </block>'+
'        </value>'+
'        <value name="ADD1">'+
'          <block type="text">'+
'            <field name="TEXT">/led_off</field>'+
'          </block>'+
'        </value>'+
'      </block>'+
'    </value>'+	
'  </block>'+
'  <block type="telegram_getmessage">'+
'    <field id="D~s:.T0JlLY@#L%wFeda" name="telegram_response">telegram_response</field>'+
'  </block>'+
'</category>'+
'</xml>';
