var catSpeechRecognition = '<xml>'+
'<category name="%{BKY_CATSPEECHRECOGNITION}" id="%{CATSPEECHRECOGNITION}" colour="360">'+
'  <block type="SpeechRecognition_run">'+ 
'    <field name="language_">cmn-Hant-TW</field>'+
'  </block>'+       
'  <variables>'+
'  <variable type="" id="XET3`{C@a}F7i!;%jtKr">Result</variable></variables>'+
'  <block type="SpeechRecognition_listener" id="5@9068yeP@+Lv8J6dt[;" x="58" y="50">'+
'    <statement name="do_">'+
'      <block type="variables_set" id="WgoSc$V{4smbOP8+jr80">'+
'        <field name="VAR" id="XET3`{C@a}F7i!;%jtKr" variabletype="">Result</field>'+
'        <value name="VALUE">'+
'          <block type="SpeechRecognition_get" id="]VM_67C(_2(3TXND*~)+">'+
'          </block>'+
'        </value>'+
'      </block>'+
'    </statement>'+
'  </block>'+ 
'  <variables>'+
'  <variable type="" id="XET3`{C@a}F7i!;%jtKr">Result</variable></variables>'+
'  <block type="SpeechRecognition_keyword" id="uHnsYoYyi41B{]=^27?t" x="112" y="142">'+
'  <value name="myVar_"><block type="variables_get" id="9xK~IcyR[i~}Z,a/U{cQ">'+
'  <field name="VAR" id="XET3`{C@a}F7i!;%jtKr" variabletype="">Result</field>'+
'  </block>'+
'  </value>'+
'  <value name="keyword">'+
'  <block type="text">'+
'  <field name="TEXT"></field>'+
'  </block>'+
'  </value>'+
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
'  <block type="SpeechRecognition_switch">'+
'  </block>'+
'  <block type="SpeechRecognition_state">'+
'  </block>'+
'</category>'+
'</xml>';
