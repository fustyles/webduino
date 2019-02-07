var catWebUSB = '<xml><category name="%{BKY_WEBUSB}" colour="%{BKY_WEBUSB_HUE}">'+
'    <block type="webusb_system">'+  
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
'    <block type="webusb_custom">'+  
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
'    <block type="webusb_car">'+   
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
'          <block type="webusb_car_state">'+
'          </block>'+  
'        </value>'+    
'    </block>'+   
'    <block type="webusb_car_state">'+
'    </block>'+ 
'    <block type="webusb_getresponse">'+
'    </block>'+     
'    <variables>'+ 
'    <variable type="" id="ij_ZS;5L7fPB{t3^~CEl">data</variable>'+ 
'    </variables>'+ 
'    <block type="variables_set" id="Sh:0%7~`mHXezT$HAE*w" x="72" y="326">'+ 
'    <field name="VAR" id="ij_ZS;5L7fPB{t3^~CEl" variabletype="">data</field>'+ 
'    <value name="VALUE">'+ 
'    <block type="lists_getIndex" id="YC4ZmrE@j8(9B.R(-EZ^">'+ 
'    <mutation statement="false" at="true"></mutation>'+ 
'    <field name="MODE">GET</field>'+ 
'    <field name="WHERE">FROM_START</field>'+ 
'    <value name="VALUE">'+ 
'    <block type="webusb_getresponse" id="H@8o|Zo0Ug4PZa}mF1+/"></block>'+ 
'    </value>'+ 
'    <value name="AT">'+ 
'    <block type="math_number" id="E,X52GB~!hog$TAPLq%X">'+ 
'    <field name="NUM">1</field>'+ 
'    </block>'+ 
'    </value>'+ 
'    </block>'+ 
'    </value>'+ 
'    <next>'+ 
'    <block type="controls_whileUntil" id=";)pwI$s-qv$UjgZ=jc%+">'+ 
'    <field name="MODE">WHILE</field>'+ 
'    <value name="BOOL">'+ 
'    <block type="logic_compare" id="D7f)Ttdk`{FgxL:z0.qd">'+ 
'    <field name="OP">EQ</field>'+ 
'    <value name="A">'+ 
'    <block type="text_indexOf" id="W,B#y$H*|/=mVYD@,d*Y">'+ 
'    <field name="END">FIRST</field>'+ 
'    <value name="VALUE">'+ 
'    <block type="variables_get" id="9UYb-];gAMB#tEHD2+Mk">'+ 
'    <field name="VAR" id="ij_ZS;5L7fPB{t3^~CEl" variabletype="">data</field>'+ 
'    </block>'+ 
'    </value>'+ 
'    <value name="FIND">'+ 
'    <block type="text" id="JgcY,U3=qMzoJ(PdraDm">'+ 
'    <field name="TEXT">is connected</field>'+ 
'    </block>'+ 
'    </value>'+ 
'    </block>'+ 
'    </value>'+ 
'    <value name="B">'+ 
'    <block type="math_number" id="bkQ[5F;DdLrgbA1Mt?bi">'+ 
'    <field name="NUM">0</field>'+ 
'    </block>'+ 
'    </value>'+ 
'    </block>'+ 
'    </value>'+ 
'    <statement name="DO">'+ 
'    <block type="time_delay" id="f[qI4U%I0fat]AKlD%)W">'+ 
'    <value name="seconds">'+ 
'    <block type="math_number" id="u4NnoJIP%u5eOB~HL/F{">'+ 
'    <field name="NUM">0.1</field>'+ 
'    </block>'+ 
'    </value>'+ 
'    <next>'+ 
'    <block type="variables_set" id="P%xFG4!D|8H#j]W:Gf?6">'+ 
'    <field name="VAR" id="ij_ZS;5L7fPB{t3^~CEl" variabletype="">data</field>'+ 
'    <value name="VALUE">'+ 
'    <block type="lists_getIndex" id="Fbw4BC|zSKXO*$5O:TNV">'+ 
'    <mutation statement="false" at="true"></mutation>'+ 
'    <field name="MODE">GET</field>'+ 
'    <field name="WHERE">FROM_START</field>'+ 
'    <value name="VALUE">'+ 
'    <block type="webusb_getresponse" id=",`ye|0J~]0uRx`TPazU3"></block>'+ 
'    </value>'+ 
'    <value name="AT">'+ 
'    <block type="math_number" id="Vt(E+zy!*=g^U!q,-VgC">'+ 
'    <field name="NUM">1</field>'+ 
'    </block>'+ 
'    </value>'+ 
'    </block>'+ 
'    </value>'+ 
'    </block>'+ 
'    </next>'+ 
'    </block>'+ 
'    </statement>'+ 
'    </block>'+ 
'    </next>'+ 
'    </block>'+   
'    <variables>'+
'    <variable type="" id="+Oog~D)0D,I*Y5(g]2r1">TimerWEBUSB</variable>'+
'    <variable type="" id="ij_ZS;5L7fPB{t3^~CEl">data</variable>'+
'    </variables>'+
'    <block type="document_timer" id="mi/z6I4OGW!r-?w:dktl" x="54" y="61">'+
'    <field name="fuTimer_" id="+Oog~D)0D,I*Y5(g]2r1" variabletype="">TimerWEBUSB</field>'+
'    <value name="intervals_">'+
'    <block type="math_number" id=";yP~x1l8Ovs6JfUe6u0C">'+
'    <field name="NUM">10</field>'+
'    </block>'+
'    </value>'+
'    <statement name="do_">'+
'    <block type="variables_set" id="3^35KjD6wU1n8qiP7qFf">'+
'    <field name="VAR" id="ij_ZS;5L7fPB{t3^~CEl" variabletype="">data</field>'+
'    <value name="VALUE">'+
'    <block type="webusb_getresponse" id="KE3ci[=9F6s6fOnlqASf"></block>'+
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
'    <block type="webusb_cmd">'+
'    </block>'+    
'    <block type="webusb_clearresponse">'+
'    </block>'+  
'    <block type="webusb_custom_cmd">'+  
'        <value name="cmd">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'    </block>'+    
'</category></xml>';
