var catFaceDetect ='<xml>'+
'    <category name="%{BKY_CATFACEAPIDETECT}" id="faceapidetect" colour="290">'+
'      <block type="faceapidetect_video">'+
'      </block>'+
'      <block type="faceapidetect_startvideo_media">'+
'        <value name="width_">'+
'          <block type="math_number">'+
'            <field name="NUM">320</field>'+
'          </block>'+
'        </value>'+
'        <value name="height_">'+
'          <block type="math_number">'+
'            <field name="NUM">240</field>'+
'          </block>'+
'        </value>'+
'        <value name="index_">'+
'          <block type="math_number">'+
'            <field name="NUM">0</field>'+
'          </block>'+
'        </value>'+
'      </block>'+
'      <block type="faceapidetect_startvideo_stream">'+
'        <value name="src_">'+
'          <block type="text">'+
'            <field name="TEXT">http://192.168.***.***:81/stream</field>'+
'          </block>'+
'        </value>'+
'      </block>'+
'      <block type="faceapidetect_recognitied">'+
'      </block>'+
'      <block type="faceapidetect_face">'+
'        <value name="face_">'+
'          <block type="math_number">'+
'            <field name="NUM">0</field>'+
'          </block>'+
'        </value>'+
'      </block>'+
'      <block type="faceapidetect_faces">'+
'      </block>'+
'      <block type="faceapidetect_number">'+
'      </block>'+
'      <block type="faceapidetect_clear">'+
'      </block>'+
'      <block type="faceapidetect_video_position">'+
'        <value name="left_">'+
'          <block type="math_number">'+
'            <field name="NUM">0</field>'+
'          </block>'+
'        </value>'+
'        <value name="top_">'+
'          <block type="math_number">'+
'            <field name="NUM">0</field>'+
'          </block>'+
'        </value>'+
'      </block>'+
'      <block type="faceapidetect_pause">'+
'        <value name="time_">'+
'          <block type="math_number">'+
'            <field name="NUM">1000</field>'+
'          </block>'+
'        </value>'+
'      </block>'+
'      <block type="faceapidetect_canvas_get">'+			  
'      </block>'+
'    </category>'+
'</xml>';