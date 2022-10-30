var catTextToSpeech = '<xml>'+
'<category name="%{BKY_CATTEXTTOSPEECH}" id="CATTEXTTOSPEECH" colour="290">'+
'  <block type="TextToSpeech_initial">'+  
'    <value name="volume_">'+
'      <block type="math_number">'+
'        <field name="NUM">1</field>'+
'      </block>'+  
'    </value>'+    
'    <value name="rate_">'+
'      <block type="math_number">'+
'        <field name="NUM">1</field>'+
'      </block>'+  
'    </value>'+  
'    <value name="pitch_">'+
'      <block type="math_number">'+
'        <field name="NUM">1</field>'+
'      </block>'+
'    </value>'+       
'  </block>'+  
'  <block type="TextToSpeech_run">'+ 
'    <value name="voice_">'+
'      <block type="TextToSpeech_voice">'+
'        <field name="voice_">Google US English</field>'+
'      </block>'+
'    </value>'+    
'    <value name="text_">'+
'      <block type="text">'+
'        <field name="TEXT">Hello World</field>'+
'      </block>'+    
'    </value>'+      
'  </block>'+  
'  <block type="TextToSpeech_switch">'+
'  </block>'+  
'  <block type="TextToSpeech_control">'+  
'  </block>'+
'  <block type="TextToSpeech_speaking">'+  
'  </block>'+          
'</category>'+
'</xml>';
