var catWebBit = '<xml>'+
'<category name="%{BKY_WEBBIT}" colour="%{BKY_WEBBIT_HUE}">'+
'  <block type="BitMatrixLed_host">'+
'    <value name="host_">'+
'      <block type="text">'+
'        <field name="TEXT">http://</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_showstate">'+
'    <field name="value_showstate_">1</field>'+
'  </block>'+
'  <block type="BitMatrixLed_matrix_color">'+
'    <field name="L01">#000000</field>'+
'    <field name="L06">#000000</field>'+
'    <field name="L11">#000000</field>'+
'    <field name="L16">#000000</field>'+
'    <field name="L21">#000000</field>'+
'    <field name="L02">#000000</field>'+
'    <field name="L07">#000000</field>'+
'    <field name="L12">#000000</field>'+
'    <field name="L17">#000000</field>'+
'    <field name="L22">#000000</field>'+
'    <field name="L03">#000000</field>'+
'    <field name="L08">#000000</field>'+
'    <field name="L13">#000000</field>'+
'    <field name="L18">#000000</field>'+
'    <field name="L23">#000000</field>'+
'    <field name="L04">#000000</field>'+
'    <field name="L09">#000000</field>'+
'    <field name="L14">#000000</field>'+
'    <field name="L19">#000000</field>'+
'    <field name="L24">#000000</field>'+
'    <field name="L05">#000000</field>'+
'    <field name="L10">#000000</field>'+
'    <field name="L15">#000000</field>'+
'    <field name="L20">#000000</field>'+
'    <field name="L25">#000000</field>'+
'  </block>'+
'  <block type="BitMatrixLed_matrixcode_color">'+
'    <field name="L01">#000000</field>'+
'    <field name="L06">#000000</field>'+
'    <field name="L11">#000000</field>'+
'    <field name="L16">#000000</field>'+
'    <field name="L21">#000000</field>'+
'    <field name="L02">#000000</field>'+
'    <field name="L07">#000000</field>'+
'    <field name="L12">#000000</field>'+
'    <field name="L17">#000000</field>'+
'    <field name="L22">#000000</field>'+
'    <field name="L03">#000000</field>'+
'    <field name="L08">#000000</field>'+
'    <field name="L13">#000000</field>'+
'    <field name="L18">#000000</field>'+
'    <field name="L23">#000000</field>'+
'    <field name="L04">#000000</field>'+
'    <field name="L09">#000000</field>'+
'    <field name="L14">#000000</field>'+
'    <field name="L19">#000000</field>'+
'    <field name="L24">#000000</field>'+
'    <field name="L05">#000000</field>'+
'    <field name="L10">#000000</field>'+
'    <field name="L15">#000000</field>'+
'    <field name="L20">#000000</field>'+
'    <field name="L25">#000000</field>'+
'  </block>'+
'  <block type="BitMatrixLed_matrixcode_line_color">'+
'    <field name="L01">#000000</field>'+
'    <field name="L02">#000000</field>'+
'    <field name="L03">#000000</field>'+
'    <field name="L04">#000000</field>'+
'    <field name="L05">#000000</field>'+
'  </block>'+
'  <block type="BitMatrixLed_color_on">'+
'    <value name="value_x_on_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_y_on_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_color_on_">'+
'      <block type="colour_picker">'+
'        <field name="COLOUR">#ff0000</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_state">'+
'    <value name="value_x_state_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_y_state_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_getcolor">'+
'    <value name="value_x_state_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_y_state_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_clear">'+
'  </block>'+
'  <block type="BitMatrixLed_marquee_time">'+
'    <value name="value_marquee_time_">'+
'      <block type="math_number">'+
'        <field name="NUM">500</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_clockwise">'+
'  </block>'+
'  <block type="BitMatrixLed_counterclockwise">'+
'  </block>'+
'  <block type="BitMatrixLed_verticalflip">'+
'  </block>'+
'  <block type="BitMatrixLed_horizontalflip">'+
'  </block>'+
'  <block type="BitMatrixLed_marquee_color">'+
'    <value name="value_marquee_">'+
'      <block type="text_join">'+
'        <mutation items="2"></mutation>'+
'        <value name="ADD0">'+
'          <block type="BitMatrixLed_matrixcode_color">'+
'            <field name="L01">#000000</field>'+
'            <field name="L06">#000000</field>'+
'            <field name="L11">#000000</field>'+
'            <field name="L16">#000000</field>'+
'            <field name="L21">#000000</field>'+
'            <field name="L02">#000000</field>'+
'            <field name="L07">#000000</field>'+
'            <field name="L12">#000000</field>'+
'            <field name="L17">#000000</field>'+
'            <field name="L22">#000000</field>'+
'            <field name="L03">#000000</field>'+
'            <field name="L08">#000000</field>'+
'            <field name="L13">#000000</field>'+
'            <field name="L18">#000000</field>'+
'            <field name="L23">#000000</field>'+
'            <field name="L04">#000000</field>'+
'            <field name="L09">#000000</field>'+
'            <field name="L14">#000000</field>'+
'            <field name="L19">#000000</field>'+
'            <field name="L24">#000000</field>'+
'            <field name="L05">#000000</field>'+
'            <field name="L10">#000000</field>'+
'            <field name="L15">#000000</field>'+
'            <field name="L20">#000000</field>'+
'            <field name="L25">#000000</field>'+
'          </block>'+
'        </value>'+
'        <value name="ADD1">'+
'          <block type="BitMatrixLed_matrixcode_color">'+
'            <field name="L01">#000000</field>'+
'            <field name="L06">#000000</field>'+
'            <field name="L11">#000000</field>'+
'            <field name="L16">#000000</field>'+
'            <field name="L21">#000000</field>'+
'            <field name="L02">#000000</field>'+
'            <field name="L07">#000000</field>'+
'            <field name="L12">#000000</field>'+
'            <field name="L17">#000000</field>'+
'            <field name="L22">#000000</field>'+
'            <field name="L03">#000000</field>'+
'            <field name="L08">#000000</field>'+
'            <field name="L13">#000000</field>'+
'            <field name="L18">#000000</field>'+
'            <field name="L23">#000000</field>'+
'            <field name="L04">#000000</field>'+
'            <field name="L09">#000000</field>'+
'            <field name="L14">#000000</field>'+
'            <field name="L19">#000000</field>'+
'            <field name="L24">#000000</field>'+
'            <field name="L05">#000000</field>'+
'            <field name="L10">#000000</field>'+
'            <field name="L15">#000000</field>'+
'            <field name="L20">#000000</field>'+
'            <field name="L25">#000000</field>'+
'          </block>'+
'        </value>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_marquee_color_once">'+
'    <value name="value_marquee_">'+
'      <block type="text_join">'+
'        <mutation items="2"></mutation>'+
'        <value name="ADD0">'+
'          <block type="BitMatrixLed_matrixcode_color">'+
'            <field name="L01">#000000</field>'+
'            <field name="L06">#000000</field>'+
'            <field name="L11">#000000</field>'+
'            <field name="L16">#000000</field>'+
'            <field name="L21">#000000</field>'+
'            <field name="L02">#000000</field>'+
'            <field name="L07">#000000</field>'+
'            <field name="L12">#000000</field>'+
'            <field name="L17">#000000</field>'+
'            <field name="L22">#000000</field>'+
'            <field name="L03">#000000</field>'+
'            <field name="L08">#000000</field>'+
'            <field name="L13">#000000</field>'+
'            <field name="L18">#000000</field>'+
'            <field name="L23">#000000</field>'+
'            <field name="L04">#000000</field>'+
'            <field name="L09">#000000</field>'+
'            <field name="L14">#000000</field>'+
'            <field name="L19">#000000</field>'+
'            <field name="L24">#000000</field>'+
'            <field name="L05">#000000</field>'+
'            <field name="L10">#000000</field>'+
'            <field name="L15">#000000</field>'+
'            <field name="L20">#000000</field>'+
'            <field name="L25">#000000</field>'+
'          </block>'+
'        </value>'+
'        <value name="ADD1">'+
'          <block type="BitMatrixLed_matrixcode_color">'+
'            <field name="L01">#000000</field>'+
'            <field name="L06">#000000</field>'+
'            <field name="L11">#000000</field>'+
'            <field name="L16">#000000</field>'+
'            <field name="L21">#000000</field>'+
'            <field name="L02">#000000</field>'+
'            <field name="L07">#000000</field>'+
'            <field name="L12">#000000</field>'+
'            <field name="L17">#000000</field>'+
'            <field name="L22">#000000</field>'+
'            <field name="L03">#000000</field>'+
'            <field name="L08">#000000</field>'+
'            <field name="L13">#000000</field>'+
'            <field name="L18">#000000</field>'+
'            <field name="L23">#000000</field>'+
'            <field name="L04">#000000</field>'+
'            <field name="L09">#000000</field>'+
'            <field name="L14">#000000</field>'+
'            <field name="L19">#000000</field>'+
'            <field name="L24">#000000</field>'+
'            <field name="L05">#000000</field>'+
'            <field name="L10">#000000</field>'+
'            <field name="L15">#000000</field>'+
'            <field name="L20">#000000</field>'+
'            <field name="L25">#000000</field>'+
'          </block>'+
'        </value>'+
'      </block>'+ 
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_marquee_color_degree">'+
'    <field name="value_marquee_direction_">1</field>'+
'    <value name="value_marquee_degree_">'+
'      <block type="math_number">'+
'        <field name="NUM">1</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_marquee_stop">'+
'  </block>'+
'  <block type="BitMatrixLed_marquee_resume">'+
'  </block>'+
'  <block type="BitMatrixLed_marquee_reverse">'+
'  </block>'+
'  <block type="BitMatrixLed_backcolor">'+
'    <value name="value_color_">'+
'      <block type="colour_picker">'+
'        <field name="COLOUR">#000000</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_color">'+
'    <value name="value_color_">'+
'      <block type="colour_picker">'+
'        <field name="COLOUR">#ff0000</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_matrix">'+
'    <field name="L01">FALSE</field>'+
'    <field name="L06">FALSE</field>'+
'    <field name="L11">FALSE</field>'+
'    <field name="L16">FALSE</field>'+
'    <field name="L21">FALSE</field>'+
'    <field name="L02">FALSE</field>'+
'    <field name="L07">FALSE</field>'+
'    <field name="L12">FALSE</field>'+
'    <field name="L17">FALSE</field>'+
'    <field name="L22">FALSE</field>'+
'    <field name="L03">FALSE</field>'+
'    <field name="L08">FALSE</field>'+
'    <field name="L13">FALSE</field>'+
'    <field name="L18">FALSE</field>'+
'    <field name="L23">FALSE</field>'+
'    <field name="L04">FALSE</field>'+
'    <field name="L09">FALSE</field>'+
'    <field name="L14">FALSE</field>'+
'    <field name="L19">FALSE</field>'+
'    <field name="L24">FALSE</field>'+
'    <field name="L05">FALSE</field>'+
'    <field name="L10">FALSE</field>'+
'    <field name="L15">FALSE</field>'+
'    <field name="L20">FALSE</field>'+
'    <field name="L25">FALSE</field>'+
'  </block>'+
'  <block type="BitMatrixLed_matrixcode">'+
'    <field name="L01">FALSE</field>'+
'    <field name="L06">FALSE</field>'+
'    <field name="L11">FALSE</field>'+
'    <field name="L16">FALSE</field>'+
'    <field name="L21">FALSE</field>'+
'    <field name="L02">FALSE</field>'+
'    <field name="L07">FALSE</field>'+
'    <field name="L12">FALSE</field>'+
'    <field name="L17">FALSE</field>'+
'    <field name="L22">FALSE</field>'+
'    <field name="L03">FALSE</field>'+
'    <field name="L08">FALSE</field>'+
'    <field name="L13">FALSE</field>'+
'    <field name="L18">FALSE</field>'+
'    <field name="L23">FALSE</field>'+
'    <field name="L04">FALSE</field>'+
'    <field name="L09">FALSE</field>'+
'    <field name="L14">FALSE</field>'+
'    <field name="L19">FALSE</field>'+
'    <field name="L24">FALSE</field>'+
'    <field name="L05">FALSE</field>'+
'    <field name="L10">FALSE</field>'+
'    <field name="L15">FALSE</field>'+
'    <field name="L20">FALSE</field>'+
'    <field name="L25">FALSE</field>'+
'  </block>'+
'  <block type="BitMatrixLed_matrixcode_line">'+
'    <field name="L01">FALSE</field>'+
'    <field name="L02">FALSE</field>'+
'    <field name="L03">FALSE</field>'+
'    <field name="L04">FALSE</field>'+
'    <field name="L05">FALSE</field>'+
'  </block>'+
'  <block type="BitMatrixLed_sample">'+
'    <field name="value_sample_">♥</field>'+
'  </block>'+
'  <block type="BitMatrixLed_char">'+
'    <value name="value_char_">'+
'      <block type="text">'+
'        <field name="TEXT">♥</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_code">'+
'    <value name="value_code_">'+
'      <block type="text">'+
'        <field name="TEXT">0110011110011111111001100</field>'+
'      </block>'+
'    </value>'+
'  </block>'+ 
'  <block type="BitMatrixLed_on">'+
'    <value name="value_x_on_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_y_on_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_off">'+
'    <value name="value_x_off_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_y_off_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_reverse">'+
'    <value name="value_x_reverse_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_y_reverse_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_texttocode">'+
'    <value name="value_text_">'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_indentcode">'+
'    <value name="value_indentcode_">'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_marquee">'+
'    <value name="value_marquee_">'+
'        <block type="BitMatrixLed_indentcode">'+
'          <value name="value_indentcode_">'+
'            <block type="BitMatrixLed_texttocode">'+
'              <value name="value_text_">'+
'                <block type="text">'+
'                  <field name="TEXT"> ♥ webduino ♡ </field>'+
'                </block>'+
'            </value>'+
'          </block>'+
'        </value>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_marquee_once">'+
'    <value name="value_times_">'+
'      <block type="math_number">'+
'        <field name="NUM">1</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_marquee_">'+
'      <block type="BitMatrixLed_indentcode">'+
'          <value name="value_indentcode_">'+
'            <block type="BitMatrixLed_texttocode">'+
'              <value name="value_text_">'+
'                <block type="text">'+
'                  <field name="TEXT"> ♥ webduino ♡ </field>'+
'                </block>'+
'            </value>'+
'          </block>'+
'        </value>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_marquee_degree">'+
'    <field name="value_marquee_direction_">1</field>'+
'    <value name="value_marquee_degree_">'+
'      <block type="math_number">'+
'        <field name="NUM">1</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_invert">'+
'  </block>'+
'  <block type="BitMatrixLed_linechart">'+
'    <value name="value_value1">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_value2">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_value3">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_value4">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_value5">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_barchart">'+
'    <value name="value_value1">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_value2">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_value3">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_value4">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_value5">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'    <block type="BitMatrixLed_custom">'+  
'        <value name="cmd">'+
'          <block type="BitMatrixLed_cmd">'+
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
'    <block type="BitMatrixLed_car">'+   
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
'          <block type="BitMatrixLed_car_state">'+
'          </block>'+  
'        </value>'+    
'    </block>'+   
'    <block type="BitMatrixLed_car_state">'+
'    </block>'+ 
'    <block type="BitMatrixLed_getresponse">'+
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
'    <block type="BitMatrixLed_getresponse" id="KE3ci[=9F6s6fOnlqASf"></block>'+
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
'    <block type="BitMatrixLed_cmd">'+
'    </block>'+    
'    <block type="BitMatrixLed_clearresponse">'+
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
'</category>'+
'</xml>';
