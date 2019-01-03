var catSetScreen = '<xml>'+
'<category name="%{BKY_SETSCREEN}" colour="%{BKY_SETSCREEN_HUE}">'+
'  <block type="setscreen">'+
'    <value name="left">'+
'      <block type="math_number">'+
'        <field name="NUM">300</field>'+
'      </block>'+
'    </value>'+
'    <value name="top">'+
'      <block type="math_number">'+
'        <field name="NUM">20</field>'+
'      </block>'+
'    </value>'+
'    <value name="width">'+
'      <block type="math_number">'+
'        <field name="NUM">500</field>'+
'      </block>'+
'    </value>'+
'    <value name="height">'+
'      <block type="math_number">'+
'        <field name="NUM">500</field>'+
'      </block>'+
'    </value>'+
'  </block>'+    
'  <block type="body_set">'+ 
'    <value name="value_">'+
'      <block type="colour_picker">'+
'        <field name="COLOUR">#ffffff</field>'+
'      </block>'+
'    </value>'+    
'  </block>'+     
'  <block type="window_reload">'+  
'  </block>'+     
'</category>'+
'</xml>';
