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
'  <variables>'+
'  <variable type="" id="XET3`{C@a}F7i!;%jtKr">Result</variable></variables>'+
'  <block type="SpeechRecognition_keyword" id="uHnsYoYyi41B{]=^27?t" x="112" y="142">'+
'  <value name="myVar_"><block type="variables_get" id="9xK~IcyR[i~}Z,a/U{cQ">'+
'  <field name="VAR" id="XET3`{C@a}F7i!;%jtKr" variabletype="">Result</field>'+
'  </block>'+
'  </value>'+
'  <value name="keyword">'+
'  <block type="text" id="dg@Un3Xd(9p9E]2]=(/@">'+
'  <field name="TEXT"></field>'+
'  </block>'+
'  </value>'+
'  </block>'+
'</category>'+
'</xml>';
