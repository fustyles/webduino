var catRobotFly = '<xml>'+
'<category name="%{BKY_CATROBOTFLY}" id="CATROBOTFLY" colour="180">'+
'  <block type="robotfly_initial">'+
'    <value name="roll_">'+
'      <block type="math_number">'+
'        <field name="NUM">1500</field>'+
'      </block>'+
'    </value>'+
'    <value name="pitch_">'+
'      <block type="math_number">'+
'        <field name="NUM">1500</field>'+
'      </block>'+
'    </value>'+
'    <value name="yaw_">'+
'      <block type="math_number">'+
'        <field name="NUM">1500</field>'+
'      </block>'+
'    </value>'+
'    <value name="throttle_">'+
'      <block type="math_number">'+
'        <field name="NUM">1500</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="robotfly_command1">'+
'    <value name="roll_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="pitch_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="yaw_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="throttle_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="webserial_senduint8">'+
'    <value name="cmd_">'+
'      <block type="robotfly_command2">'+
'        <field name="func_">unlock</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="webserial_senduint8">'+
'    <value name="cmd_">'+
'  		<block type="robotfly_command7">'+
'    		<value name="val_">'+
'      		<block type="math_number">'+
'        		<field name="NUM">1500</field>'+
'      		</block>'+
'    		</value>'+
'  		</block>'+
'    </value>'+
'  </block>'+
'  <block type="webserial_senduint8">'+
'    <value name="cmd_">'+
'      <block type="robotfly_command3">'+
'        <field name="func_">unlock</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="robotfly_command6">'+
'  </block>'+
'  <block type="robotfly_command4">'+
'    <value name="distance_">'+
'      <block type="math_number">'+
'        <field name="NUM">30</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="robotfly_command5">'+
'    <value name="val_">'+
'      <block type="math_number">'+
'        <field name="NUM">1500</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'</category>'+
'</xml>';