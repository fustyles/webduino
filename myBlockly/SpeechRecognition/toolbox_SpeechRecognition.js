var catSpeechRecognition = '<xml>'+
'<category name="%{BKY_SPEECHRECOGNITION}" colour="%{BKY_SPEECHRECOGNITION_HUE}">'+
'  <block type="SpeechRecognition_run">'+  
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
'</category>'+
'</xml>';
