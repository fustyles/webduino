var catTextToSpeech = '<xml>'+
'<category name="%{BKY_TEXTTOSPEECH}" colour="%{BKY_TEXTTOSPEECH_HUE}">'+
'  <block type="TextToSpeech_run">'+  
'    <value name="volume_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+  
'    </value>'+    
'    <value name="rate_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+  
'    </value>'+  
'    <value name="pitch_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+      
'    <value name="lang_">'+
'      <block type="text">'+
'        <field name="TEXT">en-us</field>'+
'      </block>'+    
'    </value>'+  
'    <value name="voice_">'+
'      <block type="text">'+
'        <field name="TEXT">en-us</field>'+
'      </block>'+    
'    </value>'+  
'    <value name="text_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+    
'    </value>'+      
'  </block>'+           
'</category>'+
'</xml>';
