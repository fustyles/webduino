var catFaceRecognize = '<xml>'+
'<category name="%{BKY_CATFACEAPIRECOGNIZE}" id="faceapirecognize" colour="200">'+
'  <block type="faceapirecognize_video">'+
'    <value name="facelabel">'+
'      <block type="text">'+
'        <field name="TEXT">France;Chiling</field>'+
'      </block>'+
'    </value>'+
'    <value name="faceimagepath">'+
'      <block type="text">'+
'        <field name="TEXT">https:\/\/fustyles.github.io/webduino\/faceapi_recognize_20201012\/facelist\/</field>'+
'      </block>'+
'    </value>'+
'    <value name="faceimagecount">'+
'      <block type="math_number">'+
'        <field name="NUM">1</field>'+
'      </block>'+
'    </value>'+
'    <value name="distancelimit">'+
'      <block type="math_number">'+
'        <field name="NUM">0.4</field>'+
'      </block>'+
'    </value>'+
'    <value name="timer">'+
'      <block type="math_number">'+
'        <field name="NUM">3</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="faceapirecognize_video_one">'+
'    <value name="facelabel">'+
'      <block type="text">'+
'        <field name="TEXT">France;Chiling</field>'+
'      </block>'+
'    </value>'+
'    <value name="faceimagepath">'+
'      <block type="text">'+
'        <field name="TEXT">https:\/\/aaa\/bbb.jpg;https:\/\/ccc\/ddd.jpg</field>'+
'      </block>'+
'    </value>'+
'    <value name="distancelimit">'+
'      <block type="math_number">'+
'        <field name="NUM">0.4</field>'+
'      </block>'+
'    </value>'+
'    <value name="timer">'+
'      <block type="math_number">'+
'        <field name="NUM">3</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="faceapirecognize_video_capture">'+
'    <value name="faceimagecount">'+
'      <block type="math_number">'+
'        <field name="NUM">1</field>'+
'      </block>'+
'    </value>'+
'    <value name="distancelimit">'+
'      <block type="math_number">'+
'        <field name="NUM">0.4</field>'+
'      </block>'+
'    </value>'+
'    <value name="timer">'+
'      <block type="math_number">'+
'        <field name="NUM">3</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="faceapirecognize_startvideo_media">'+
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
'  <block type="faceapirecognize_startvideo_stream">'+
'    <value name="src_">'+
'      <block type="text">'+
'        <field name="TEXT">http:\/\/192.168.***.***:81\/stream</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="faceapirecognize_recognitied">'+
'  </block>'+
'  <block type="faceapirecognize_detect">'+
'  </block>'+
'  <block type="faceapirecognize_number">'+
'  </block>'+
'  <block type="faceapirecognize_get">'+
'    <value name="index">'+
'      <block type="math_number">'+
'        <field name="NUM">1</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="faceapirecognize_unknown">'+
'    <value name="index">'+
'      <block type="math_number">'+
'        <field name="NUM">1</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="faceapirecognize_video_position">'+
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
'  <block type="faceapirecognize_state">'+
'  </block>'+
'  <block type="faceapirecognize_clear">'+
'  </block>'+
'  <block type="faceapirecognize_canvas_get">'+
'  </block>'+
'</category>'+
'</xml>';
