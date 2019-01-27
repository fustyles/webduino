var catESP8266 = '<xml><category name="%{BKY_ESP8266}" colour="%{BKY_ESP8266_HUE}">'+
'    <block type="esp8266_system">'+
'        <value name="url">'+
'          <block type="text">'+
'            <field name="TEXT">http://</field>'+
'          </block>'+
'        </value>'+    
'        <field name="cmd">inputpullup</field>'+
'        <value name="P1">'+
'          <block type="math_number">'+
'            <field name="NUM">2</field>'+
'          </block>'+
'        </value>'+
'        <value name="P2">'+
'          <block type="math_number">'+
'            <field name="NUM">1</field>'+
'          </block>'+
'        </value>'+
'    </block>'+
'    <block type="esp8266_custom">'+
'        <value name="url">'+
'          <block type="text">'+
'            <field name="TEXT">http://</field>'+
'          </block>'+
'        </value>'+    
'        <value name="cmd">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'        <value name="P1">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'        <value name="P2">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'        <value name="P3">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'        <value name="P4">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'        <value name="P5">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'        <value name="P6">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'        <value name="P7">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'        <value name="P8">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'        <value name="P9">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'    </block>'+
'    <block type="esp8266_car">'+
'        <value name="url">'+
'          <block type="text">'+
'            <field name="TEXT">http://</field>'+
'          </block>'+
'        </value>'+    
'        <value name="cmd">'+
'          <block type="text">'+
'            <field name="TEXT">car</field>'+
'          </block>'+
'        </value>'+
'        <value name="P1">'+
'          <block type="math_number">'+
'            <field name="NUM">3</field>'+
'          </block>'+
'        </value>'+
'        <value name="P2">'+
'          <block type="math_number">'+
'            <field name="NUM">5</field>'+
'          </block>'+
'        </value>'+
'        <value name="P3">'+
'          <block type="math_number">'+
'            <field name="NUM">6</field>'+
'          </block>'+
'        </value>'+
'        <value name="P4">'+
'          <block type="math_number">'+
'            <field name="NUM">9</field>'+
'          </block>'+
'        </value>'+
'        <value name="P5">'+
'          <block type="math_number">'+
'            <field name="NUM">200</field>'+
'          </block>'+
'        </value>'+
'        <value name="P6">'+
'          <block type="math_number">'+
'            <field name="NUM">200</field>'+
'          </block>'+
'        </value>'+
'        <value name="P7">'+
'          <block type="math_number">'+
'            <field name="NUM">200</field>'+
'          </block>'+
'        </value>'+
'    </block>'+    
'    <variables>'+ 
'      <variable type="" id="+Oog~D)0D,I*Y5(g]2r1">TimerESP8266</variable>'+ 
'      <variable type="" id="ij_ZS;5L7fPB{t3^~CEl">data</variable>'+ 
'    </variables>'+ 
'    <block type="document_timer" id="mi/z6I4OGW!r-?w:dktl" x="57" y="57">'+ 
'      <field name="fuTimer_" id="+Oog~D)0D,I*Y5(g]2r1" variabletype="">TimerESP8266</field>'+ 
'      <value name="intervals_">'+ 
'        <block type="math_number" id=";yP~x1l8Ovs6JfUe6u0C">'+ 
'          <field name="NUM">10</field>'+ 
'        </block>'+ 
'      </value>'+ 
'      <statement name="do_">'+ 
'        <block type="variables_set" id="Sh:0%7~`mHXezT$HAE*w">'+ 
'          <field name="VAR" id="ij_ZS;5L7fPB{t3^~CEl" variabletype="">data</field>'+ 
'          <value name="VALUE">'+ 
'            <block type="esp8266_getresponse" id="KE3ci[=9F6s6fOnlqASf"></block>'+ 
'          </value>'+ 
'        </block>'+ 
'      </statement>'+ 
'    </block>'+     
'    <block type="esp8266_cmd">'+
'    </block>'+    
'</category></xml>';
