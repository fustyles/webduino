var catKeyboard = '<xml>'+
'<category name="%{BKY_CATKEYBOARD}" id="CATKEYBOARD" colour="140">'+ 
'  <block type="keyboard_listener">'+
'    <field name="event">keydown</field>'+
'    <statement name="statement">'+
'      <block type="controls_if">'+
'        <value name="IF0">'+
'          <block type="keyboard_keycode">'+
'            <field name="keycode">32</field>'+
'          </block>'+
'        </value>'+
'      </block>'+
'    </statement>'+
'  </block>'+
'  <block type="stop_keyboard_listener">'+
'  </block>'+    
'  <block type="get_keycode">'+
'  </block>'+      
'  <block type="hotkey"><field name="keycode">Ctrl</field></block>'+
'  <block type="keyboard_keycode"><field name="keycode">32</field></block>'+
'</category>'+
'</xml>';
