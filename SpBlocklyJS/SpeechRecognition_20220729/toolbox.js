var catSpeechRecognition = '<xml>'+
'<category name="%{BKY_CATSPEECHRECOGNITION}" id="%{CATSPEECHRECOGNITION}" colour="360">'+
'  <block type="SpeechRecognition_run">'+ 
'    <field name="language_">cmn-Hant-TW</field>'+
'  </block>'+
'  <block type="SpeechRecognition_switch">'+
'  </block>'+
'  <block type="SpeechRecognition_listener">'+
'    <statement name="do_">'+
'    </statement>'+
'  </block>'+
'  <block type="SpeechRecognition_get">'+
'  </block>'+ 
'  <block type="SpeechRecognition_state">'+
'  </block>'+
'  <block type="SpeechRecognition_interim">'+
'    <value name="left">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="top">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="fontsize">'+
'      <block type="math_number">'+
'        <field name="NUM">20</field>'+
'      </block>'+
'    </value>'+
'    <value name="zindex">'+
'      <block type="math_number">'+
'        <field name="NUM">999</field>'+
'      </block>'+
'    </value>'+
'    <value name="display">'+
'    	<block type="logic_boolean">'+
'    		<field name="BOOL">TRUE</field>'+
'    	</block>'+
'    </value>'+
'  </block>'+
'  <block type="SpeechRecognition_interim_element">'+
'  </block>'+
'  <block type="SpeechRecognition_texttonumber">'+
'    <value name="text">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'    </value>'+
'  </block>'+
'</category>'+
'</xml>';
