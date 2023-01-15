var catPosenet = '<xml>'+
'<category name="%{BKY_CATPOSENET}" id="posenet" colour="280">'+
'  <block type="posenet_video">'+
'  	<field name="scorelimit_">0.6</field>'+
'  </block>'+
'  <block type="posenet_startvideo_media">'+
'    <value name="width_">'+
'      <block type="math_number">'+
'        <field name="NUM">320</field>'+
'      </block>'+
'    </value>'+
'    <value name="height_">'+
'      <block type="math_number">'+
'        <field name="NUM">240</field>'+
'      </block>'+
'    </value>'+
'    <value name="index_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'    <block type="posenet_startvideo_stream">'+
'    <value name="src_">'+
'      <block type="text">'+
'        <field name="TEXT">http://192.168.1.199:81/stream</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="posenet_recognitied">'+
'  </block>'+  
'  <block type="posenet_person">'+
'    <value name="person_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="posenet_persons">'+
'  </block>'+
'  <block type="posenet_state">'+
'  </block>'+
'  <block type="posenet_video_position">'+
'    <value name="left_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="top_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="posenet_distance">'+
'    <value name="x0_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="y0_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="x1_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="y1_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="posenet_angle">'+
'    <value name="x0_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="y0_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="x1_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="y1_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'</category>'+
'</xml>';
