var catESP8266 = '<xml><category name="%{BKY_ESP8266}" colour="%{BKY_ESP8266_HUE}">'+
'    <block type="esp8266_system">'+
'        <value name="url">'+
'          <block type="text">'+
'            <field name="TEXT">http://</field>'+
'          </block>'+
'        </value>'+    
'        <field name="cmd">inputpullup</field>'+
'        <value name="P1">'+
'          <block type="text">'+
'            <field name="TEXT">2</field>'+
'          </block>'+
'        </value>'+
'        <value name="P2">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
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
'          <block type="esp8266_cmd">'+
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
'            <field name="NUM"></field>'+
'          </block>'+
'        </value>'+
'        <value name="P2">'+
'          <block type="math_number">'+
'            <field name="NUM"></field>'+
'          </block>'+
'        </value>'+
'        <value name="P3">'+
'          <block type="math_number">'+
'            <field name="NUM"></field>'+
'          </block>'+
'        </value>'+
'        <value name="P4">'+
'          <block type="math_number">'+
'            <field name="NUM"></field>'+
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
'        <value name="P8">'+
'          <block type="esp8266_car_state">'+
'          </block>'+  
'        </value>'+    
'    </block>'+   
'    <block type="esp8266_car_state">'+
'    </block>'+   
'    <variables>'+
'    <variable type="" id="+Oog~D)0D,I*Y5(g]2r1">myTimer</variable>'+
'    <variable type="" id="ij_ZS;5L7fPB{t3^~CEl">data</variable>'+
'    </variables>'+
'    <block type="document_timer" id="mi/z6I4OGW!r-?w:dktl" x="54" y="61">'+
'    <field name="myTimer_" id="+Oog~D)0D,I*Y5(g]2r1" variabletype="">myTimer</field>'+
'    <value name="intervals_">'+
'    <block type="math_number" id=";yP~x1l8Ovs6JfUe6u0C">'+
'    <field name="NUM">10</field>'+
'    </block>'+
'    </value>'+
'    <statement name="do_">'+
'    <block type="variables_set" id="3^35KjD6wU1n8qiP7qFf">'+
'    <field name="VAR" id="ij_ZS;5L7fPB{t3^~CEl" variabletype="">data</field>'+
'    <value name="VALUE">'+
'    <block type="esp8266_getresponse" id="KE3ci[=9F6s6fOnlqASf"></block>'+
'    </value>'+
'    <next>'+
'    <block type="controls_if" id="w#PldeVhD4}wuNwLI}}}">'+
'    <value name="IF0">'+
'    <block type="logic_compare" id="6Ss]O[X@fZ!pd~[B.ral">'+
'    <field name="OP">NEQ</field>'+
'    <value name="A">'+
'    <block type="variables_get" id=":xZEh2=]2it3WG]8r;ym">'+
'    <field name="VAR" id="ij_ZS;5L7fPB{t3^~CEl" variabletype="">data</field>'+
'    </block>'+
'    </value>'+
'    <value name="B">'+
'    <block type="text" id="jxnQM7BA/It;K|aWaDE`">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </next>'+
'    </block>'+
'    </statement>'+
'    </block>'+    
'    <block type="esp8266_cmd">'+
'    </block>'+    
'    <block type="esp8266_clearresponse">'+
'    </block>'+   
'  <block type="iframe_open">'+
'    <value name="openid_">'+
'      <block type="text">'+
'        <field name="TEXT">ESP8266</field>'+
'      </block>'+
'    </value>'+
'    <value name="url_">'+
'      <block type="text">'+
'        <field name="TEXT">https://fustyles.github.io/webduino/ESP8266_MyFirmata.html</field>'+
'      </block>'+
'    </value>'+
'    <value name="width_">'+
'      <block type="math_number">'+
'        <field name="NUM">650</field>'+
'      </block>'+
'    </value>'+
'    <value name="height_">'+
'      <block type="math_number">'+
'        <field name="NUM">450</field>'+
'      </block>'+
'    </value>'+
'    <value name="left_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="top_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>  '+
'    <value name="zindex_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+    
'</category></xml>';
