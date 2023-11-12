var catTesseract = '<xml>'+
'    <category name="%{BKY_CATTESSERACT}" id="catTesseract" colour="330">'+
'      <block type="tesseract_video">'+
'      </block>'+
'      <block type="tesseract_startvideo_media">'+
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
'      <block type="tesseract_startvideo_stream">'+
'        <value name="src_">'+
'          <block type="text">'+
'            <field name="TEXT">http://192.168.***.***:81/stream</field>'+
'          </block>'+
'        </value>'+
'      </block>'+
'      <block type="tesseract_imageprocessing">'+
'          <value name="reference_">'+
'          <block type="math_number">'+
'            <field name="NUM">100</field>'+
'          </block>'+
'        </value>'+
'      </block>'+
'      <block type="tesseract_video_position">'+
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
'      <block type="tesseract_recognitied">'+
'      </block>'+
'      <block type="tesseract_recognition">'+
'      </block>'+
'      <block type="tesseract_get">'+
'      </block>'+
'      <block type="tesseract_clear">'+
'      </block>'+
'      <block type="tesseract_canvas_get">'+
'      </block>'+
'    </category>'+
'</xml>';
