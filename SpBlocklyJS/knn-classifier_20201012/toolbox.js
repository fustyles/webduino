var catKNNclassifier ='<xml>'+
'    <category name="%{BKY_CATKNNCLASSIFIER}" id="knnclassifier" colour="160">'+
'      <block type="knnclassifier_video">'+ 
'      </block>'+
'      <block type="knnclassifier_startvideo_media">'+
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
'      <block type="knnclassifier_startvideo_stream">'+
'        <value name="src_">'+
'          <block type="text">'+
'            <field name="TEXT">http://192.168.***.***:81/stream</field>'+
'          </block>'+
'        </value>'+
'      </block>'+
'      <block type="knnclassifier_class">'+
'        <value name="classname_">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'      </block>'+
'      <block type="knnclassifier_train">'+
'      </block>'+
'      <block type="knnclassifier_detect">'+
'      </block>'+
'      <block type="knnclassifier_recognitied">'+
'      </block>'+
'      <block type="knnclassifier_proportion">'+
'      </block>'+
'      <block type="knnclassifier_proportion_array">'+
'      </block>'+
'      <block type="knnclassifier_clearclasses">'+
'      </block>'+
'      <block type="knnclassifier_savemodel">'+
'      </block>'+
'      <block type="knnclassifier_loadmodel">'+
'      </block>'+
'      <block type="knnclassifier_loadmodelurl">'+
'          <value name="url_">'+
'          <block type="text">'+
'            <field name="TEXT">https://***.***.***.***/*****.json</field>'+
'          </block>'+
'        </value>'+
'      </block>'+
'    </category>'+
'</xml>';