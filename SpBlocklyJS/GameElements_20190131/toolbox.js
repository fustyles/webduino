var catPageElements ='<xml>'+
'    <category name="%{BKY_CATPAGEELEMENTS}" id="catPageElements" colour="120">'+
'    <category name="%{BKY_CATPAGEELEMENTS_GENERAL}" id="catPageElements_general">'+
'    <block type="time_delay">'+
'    <value name="seconds">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="head_add_viewport">'+
'    <value name="initialscale_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="minimumscale_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="maximumscale_">'+
'    <block type="math_number">'+
'    <field name="NUM">2</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="include_file">'+
'    	<value name="value">'+
'    	  <block type="text">'+
'    		<field name="TEXT"></field>'+
'    	  </block>'+
'    	</value>'+
'    </block> '+
'    <block type="body_set">'+
'    <value name="value_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#ffffff</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="custom_style">'+
'    <value name="id">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="property">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="val">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="custom_googleicon">'+
'    <value name="id">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="val">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="location">'+
'    </block>'+
'    <block type="system_datetime_set">'+
'    <value name="years">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="months">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="days">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="hours">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="minutes">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="seconds">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="system_datetime_get">'+
'    </block>'+
'    <block type="console_log">'+
'    <value name="text_">'+
'    <shadow type="text">'+
'    <field name="TEXT"></field>'+
'    </shadow>'+
'    </value>'+
'    </block>'+
'    <block type="window_open">'+
'    <value name="url_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="window_stop">'+
'    </block>'+	
'    <block type="window_messagebox">'+
'    <value name="message">'+
'    <shadow type="text">'+
'    <field name="TEXT"></field>'+
'    </shadow>'+
'    </value>'+
'    </block>'+
'    <block type="window_prompt">'+
'    <value name="title">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="window_confirm">'+
'    <value name="message">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'	 <block type="try_catch_finally">'+
'	 </block>'+
'    <block type="document_exitFullscreen">'+
'    </block>'+ 
'    <block type="custom_comment">'+
'    <value name="text">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+   
'    <block type="function_return">'+
'    <value name="value_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="color_hextorgb">'+
'    <value name="color_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#ff0000</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'		  <block type="text_to_number">'+
'			<value name="value_text_">'+
'			</value>'+
'		  </block>'+
'		  <block type="aes_encryption">'+
'			<value name="value_text_">'+
'			</value>'+
'			<value name="value_key_">'+
'			  <block type="text">'+
'				<field name="TEXT"></field>'+
'			  </block>'+
'			</value>'+
'		  </block>'+
'    <block type="document_timer_novar">'+
'    <value name="intervals_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="document_timer_once_novar">'+
'    <value name="intervals_">'+
'    <block type="math_number">'+
'    <field name="NUM">1000</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="document_timer">'+
'    <value name="intervals_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="document_timer_once">'+
'    <value name="intervals_">'+
'    <block type="math_number">'+
'    <field name="NUM">1000</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="document_timer_stop">'+
'    </block>'+
'    <block type="element_event">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="element_event_stop">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="mouse_coordinate_get_start">'+
'    </block>'+
'    <block type="mouse_coordinate_get">'+
'    </block>'+
'    <block type="urlcode">'+
'    <value name="url">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="image_boundary">'+
'    <value name="left_">'+
'    <block type="math_number">'+
'    <field name="NUM">500</field>'+
'    </block>'+
'    </value>'+
'    <value name="top_">'+
'    <block type="math_number">'+
'    <field name="NUM">500</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="position_distance">'+
'    <value name="x0_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y0_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="x1_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y1_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="position_angle">'+
'    <value name="x0_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y0_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="x1_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y1_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="image_sys_get">'+
'    </block>'+
'    <block type="elements_collision">'+
'    <value name="id1_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="id2_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="elements_collision_color">'+
'    <value name="id1_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="id2_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="color_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#000000</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="point_in_element">'+
'    <value name="x_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="music_create">'+
'    <value name="url_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="length_">'+
'    <block type="math_number">'+
'    <field name="NUM">20000</field>'+
'    </block>'+
'    </value>'+
'    <value name="loop_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">TRUE</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="music_delete">'+
'    </block>'+
'    <block type="code_text">'+
'    <value name="code">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="code_text_input">'+
'    <value name="code">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+	
'    <block type="video_base64_spreadsheet">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="spreadsheeturl">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="spreadsheetname">'+
'    <block type="text">'+
'    <field name="TEXT">工作表1</field>'+
'    </block>'+
'    </value>'+
'    <value name="column">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="row">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="spreadsheet_script">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+			  
'    </block>'+
'    </value> '+
'    </block>'+
'    <block type="video_base64_drive">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="foldername_">'+
'    <block type="text">'+
'    <field name="TEXT">capture</field>'+
'    </block>'+
'    </value>'+
'    <value name="filename_">'+
'    <block type="text">'+
'    <field name="TEXT">capture.jpg</field>'+
'    </block>'+
'    </value>'+
'    <value name="drive_script_">'+
'    <block type="text">'+
'    <field name="TEXT">https:\/\/script.google.com\/macros\/s\/AKfycbzDT6-TxfHoWiV5tR6gGZctj5HchjHOFOL0ukgAKzmw3DwFTjc123\/exec</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="video_base64_email">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="recipient_">'+
'    <block type="text">'+
'    <field name="TEXT">***@***.com</field>'+
'    </block>'+
'    </value>'+
'    <value name="subject_">'+
'    <block type="text">'+
'    <field name="TEXT">Hello World</field>'+
'    </block>'+
'    </value>'+
'    <value name="email_script_">'+
'    <block type="text">'+
'    <field name="TEXT">https:\/\/script.google.com\/macros\/s\/AKfycbw7skDzXZhAoMNWU22FvmoS5TewKmB7xMmoftq9PVqeum95yeo\/exec123</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="video_base64">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'  <category  name="%{BKY_CATPAGEELEMENTS_SPAN}" id="catGameElements_sub26">'+
'  <block type="span_create">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="left_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="top_">'+
'      <block type="math_number">'+
'        <field name="NUM">100</field>'+
'      </block>'+
'    </value>'+
'    <value name="fontsize_">'+
'      <block type="math_number">'+
'        <field name="NUM">14</field>'+
'      </block>'+
'    </value>'+
'    <value name="innerHTML_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="zindex_">'+
'      <block type="math_number">'+
'        <field name="NUM">999</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="custom_googleicon">'+
'    <field name="element">span</field>'+
'    <value name="id">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="val">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="span_set">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="value_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="span_get">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="span_delete">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  </category>'+
'    <category name="%{BKY_CATPAGEELEMENTS_IMAGE}" id="catPageElements_image">'+
'    <block type="image_create">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="url_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="width_">'+
'    <block type="math_number">'+
'    <field name="NUM">200</field>'+
'    </block>'+
'    </value>'+
'    <value name="height_">'+
'    <block type="math_number">'+
'    <field name="NUM">300</field>'+
'    </block>'+
'    </value>'+
'    <value name="left_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="top_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="zindex_">'+
'    <block type="math_number">'+
'    <field name="NUM">999</field>'+
'    </block>'+
'    </value>'+
'    <value name="display_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">TRUE</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="image_create_stream">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="url_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="left_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="top_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="zindex_">'+
'    <block type="math_number">'+
'    <field name="NUM">999</field>'+
'    </block>'+
'    </value>'+
'    <value name="display_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">TRUE</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="image_collision">'+
'    <value name="id1_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="id2_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="image_set">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="image_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="image_onclick_listener">'+
'    <statement name="do_">'+
'    <block type="image_onclick_do">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </statement>'+
'    </block>'+
'    <block type="image_onclick_dom">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="image_onload_dom">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="image_onclick_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="image_boundary_collision">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="image_boundary_collision_do">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="image_delete">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="image_move">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="step_">'+
'    <block type="math_number">'+
'    <field name="NUM">10</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="move_to_mouse">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="move_to_coordinate">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="left_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="top_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="image_resize">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="percentage_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="rotatez_degrees">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="degrees_">'+
'    <block type="math_number">'+
'    <field name="NUM">30</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="rotate_vertical_flip">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="rotate_horizontal_flip">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="image_binarytobase64">'+
'    <value name="array_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+  
'    </category>'+
'    <category name="%{BKY_CATPAGEELEMENTS_BUTTON}" id="catPageElements_button">'+
'    <block type="button_create">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="left_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="top_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="width_">'+
'    <block type="math_number">'+
'    <field name="NUM">60</field>'+
'    </block>'+
'    </value>'+
'    <value name="height_">'+
'    <block type="math_number">'+
'    <field name="NUM">30</field>'+
'    </block>'+
'    </value>'+
'    <value name="opacity_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="bgcolor_">'+
'    <block type="logic_null">'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT">button</field>'+
'    </block>'+
'    </value>'+
'    <value name="fontsize_">'+
'    <block type="math_number">'+
'    <field name="NUM">12</field>'+
'    </block>'+
'    </value>'+
'    <value name="zindex_">'+
'    <block type="math_number">'+
'    <field name="NUM">999</field>'+
'    </block>'+
'    </value>'+
'    <value name="display_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">TRUE</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'  <block type="button_toolbox">'+
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
'    <value name="width_">'+
'      <block type="math_number">'+
'        <field name="NUM">30</field>'+
'      </block>'+
'    </value>'+
'    <value name="height_">'+
'      <block type="math_number">'+
'        <field name="NUM">30</field>'+
'      </block>'+
'    </value>'+
'    <value name="fontsize_">'+
'      <block type="math_number">'+
'        <field name="NUM">18</field>'+
'      </block>'+
'    </value>'+
'			<value name="spacing_">'+
'			  <block type="math_number">'+
'				<field name="NUM">5</field>'+
'			  </block>'+
'			</value>'+
'    <value name="color_">'+
'      <block type="colour_picker">'+
'        <field name="COLOUR">#ffffff</field>'+
'      </block>'+
'    </value>'+
'    <value name="bgcolor_">'+
'      <block type="colour_picker">'+
'        <field name="COLOUR">#ff6666</field>'+
'      </block>'+
'    </value>'+
'    <value name="list_">'+
'      <block type="lists_create_with">'+
'        <mutation items="3"></mutation>'+
'        <value name="ADD0">'+
'          <block type="lists_create_with">'+
'            <mutation items="2"></mutation>'+
'            <value name="ADD0">'+
'              <block type="text">'+
'                <field name="TEXT">file_open</field>'+
'              </block>'+
'            </value>'+
'            <value name="ADD1">'+
'              <block type="text">'+
'                <field name="TEXT">開啟檔案</field>'+
'              </block>'+
'            </value>'+
'          </block>'+
'        </value>'+
'        <value name="ADD1">'+
'          <block type="lists_create_with">'+
'            <mutation items="2"></mutation>'+
'            <value name="ADD0">'+
'              <block type="text">'+
'                <field name="TEXT">save</field>'+
'              </block>'+
'            </value>'+
'            <value name="ADD1">'+
'              <block type="text">'+
'                <field name="TEXT">儲存檔案</field>'+
'              </block>'+
'            </value>'+
'          </block>'+
'        </value>'+
'        <value name="ADD2">'+
'          <block type="lists_create_with">'+
'            <mutation items="2"></mutation>'+
'            <value name="ADD0">'+
'              <block type="text">'+
'                <field name="TEXT">close</field>'+
'              </block>'+
'            </value>'+
'            <value name="ADD1">'+
'              <block type="text">'+
'                <field name="TEXT">關閉視窗</field>'+
'              </block>'+
'            </value>'+
'          </block>'+
'        </value>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="custom_googleicon">'+
'    <field name="element">button</field>'+
'    <value name="id">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="val">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'    <block type="button_set">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="button_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="button_delete">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="button_onclick_do">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="button_ouput_file_text">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="text_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'    <category name="%{BKY_CATPAGEELEMENTS_COLORPICKER}" id="catPageElements_colorpicker">'+
'    <block type="colorpicker_create">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="left_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="top_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="width_">'+
'    <block type="math_number">'+
'    <field name="NUM">60</field>'+
'    </block>'+
'    </value>'+
'    <value name="height_">'+
'    <block type="math_number">'+
'    <field name="NUM">30</field>'+
'    </block>'+
'    </value>'+
'    <value name="opacity_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#000000</field>'+
'    </block>'+
'    </value>'+
'    <value name="zindex_">'+
'    <block type="math_number">'+
'    <field name="NUM">999</field>'+
'    </block>'+
'    </value>'+
'    <value name="display_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">TRUE</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="colorpicker_set">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="colorpicker_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="colorpicker_delete">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="colorpicker_onchange_do">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'    <category name="%{BKY_CATPAGEELEMENTS_SELECT}" id="catPageElements_select">'+
'    <block type="select_create">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="left_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="top_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="width_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="height_">'+
'    <block type="math_number">'+
'    <field name="NUM">30</field>'+
'    </block>'+
'    </value>'+
'    <value name="background_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#ffffff</field>'+
'    </block>'+
'    </value>'+
'    <value name="color_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#000000</field>'+
'    </block>'+
'    </value>'+
'    <value name="fontsize_">'+
'    <block type="math_number">'+
'    <field name="NUM">14</field>'+
'    </block>'+
'    </value>'+
'    <value name="opacity_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="option_">'+
'    <block type="lists_create_with">'+
'    <mutation items="2"></mutation>'+
'    <value name="ADD0">'+
'    <block type="lists_create_with">'+
'    <mutation items="2"></mutation>'+
'    <value name="ADD0">'+
'    <block type="text"><field name="TEXT">TPE</field></block>'+
'    </value>'+
'    <value name="ADD1">'+
'    <block type="text"><field name="TEXT">Taipei</field></block>'+
'    </value>'+
'    </block>'+
'    </value>'+
'    <value name="ADD1">'+
'    <block type="lists_create_with">'+'    <mutation items="2"></mutation>'+
'    <value name="ADD0">'+
'    <block type="text"><field name="TEXT">KHH</field></block></value>'+
'    <value name="ADD1">'+
'    <block type="text"><field name="TEXT">Kaohsiung</field></block>'+
'    </value>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="zindex_">'+
'    <block type="math_number">'+
'    <field name="NUM">999</field>'+
'    </block>'+
'    </value>'+
'    <value name="display_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">TRUE</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="select_set">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="select_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="select_delete">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="select_onchange_do">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'    <category name="%{BKY_CATPAGEELEMENTS_RANGE}" id="catPageElements_range">'+
'    <block type="range_create">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="left_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="top_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="width_">'+
'    <block type="math_number">'+
'    <field name="NUM">60</field>'+
'    </block>'+
'    </value>'+
'    <value name="height_">'+
'    <block type="math_number">'+
'    <field name="NUM">30</field>'+
'    </block>'+
'    </value>'+
'    <value name="min_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="max_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="step_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="opacity_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="zindex_">'+
'    <block type="math_number">'+
'    <field name="NUM">999</field>'+
'    </block>'+
'    </value>'+
'    <value name="display_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">TRUE</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="range_set">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="range_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="range_delete">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="range_onchange_do">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'    <category name="%{BKY_CATPAGEELEMENTS_TEXT}" id="catPageElements_text">'+
'    <block type="text_create">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="width_">'+
'    <block type="math_number">'+
'    <field name="NUM">60</field>'+
'    </block>'+
'    </value>'+
'    <value name="height_">'+
'    <block type="math_number">'+
'    <field name="NUM">30</field>'+
'    </block>'+
'    </value>'+
'    <value name="left_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="top_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="background_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#ffffff</field>'+
'    </block>'+
'    </value>'+
'    <value name="color_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#000000</field>'+
'    </block>'+
'    </value>'+
'    <value name="fontsize_">'+
'    <block type="math_number">'+
'    <field name="NUM">14</field>'+
'    </block>'+
'    </value>'+
'    <value name="opacity_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="zindex_">'+
'    <block type="math_number">'+
'    <field name="NUM">999</field>'+
'    </block>'+
'    </value>'+
'    <value name="display_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">TRUE</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="text_set">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="element_select">'+
'    <field name="source_">text</field>'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="text_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="text_delete">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="text_onchange_do">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'    <category name="%{BKY_CATPAGEELEMENTS_TABLE}" id="catPageElements_table">'+
'    <block type="table_create">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="left_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="top_">'+
'    <block type="math_number">'+
'    <field name="NUM">50</field>'+
'    </block>'+
'    </value>'+
'    <value name="borderwidth_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="bordercolor_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#000000</field>'+
'    </block>'+
'    </value>'+
'    <value name="trcount_">'+
'    <block type="math_number">'+
'    <field name="NUM">5</field>'+
'    </block>'+
'    </value>'+
'    <value name="tdcount_">'+
'    <block type="math_number">'+
'    <field name="NUM">5</field>'+
'    </block>'+
'    </value>'+
'    <value name="width_">'+
'    <block type="math_number">'+
'    <field name="NUM">60</field>'+
'    </block>'+
'    </value>'+
'    <value name="height_">'+
'    <block type="math_number">'+
'    <field name="NUM">60</field>'+
'    </block>'+
'    </value>'+
'    <value name="bgcolor_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#00ff00</field>'+
'    </block>'+
'    </value>'+
'    <value name="zindex_">'+
'    <block type="math_number">'+
'    <field name="NUM">999</field>'+
'    </block>'+
'    </value>'+
'    <value name="display_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">TRUE</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="table_border_set">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="borderwidth_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="bordercolor_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#000000</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="table_td_copy_move">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="x0_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y0_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="x_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="table_insert_row">'+
'    <value name="id">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="row">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="table_insert_col">'+
'    <value name="id">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="col">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="table_td_insert_text">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="x_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="text_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="fontname_">'+
'    <block type="text">'+
'    <field name="TEXT">Arial</field>'+
'    </block>'+
'    </value>'+
'    <value name="fontsize_">'+
'    <block type="math_number">'+
'    <field name="NUM">4</field>'+
'    </block>'+
'    </value>'+
'    <value name="color_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#ff0000</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="table_td_insert_element">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="x_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="table_td_insert_element_function">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="x_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="table_td_insert_element_function_get">'+
'    </block>'+
'    <block type="table_change_colsrows">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="index_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="table_set">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="table_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="table_clear">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="table_delete">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'      <block type="image_onclick_listener">'+
'        <statement name="do_">'+
'          <block type="variables_set">'+
'            <field name="OP">LOCAL</field>'+
'            <field name="VAR">arr</field>'+
'            <value name="VALUE">'+
'              <block type="table_get">'+
'                <field name="property_">onclick[Column,Row]</field>'+
'                <value name="id_">'+
'                  <block type="text">'+
'                    <field name="TEXT"></field>'+
'                  </block>'+
'                </value>'+
'              </block>'+
'            </value>'+
'          </block>'+
'        </statement>'+
'      </block>'+
'    <block type="image_onclick_listener">'+
'    <statement name="do_">'+
'    <block type="table_td_onclick_do">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="x_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </statement>'+
'    </block>'+
'    <block type="table_td_border_set">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="x_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="borderwidth_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="bordercolor_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#000000</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="table_td_set">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="x_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="table_td_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="x_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="table_td_clear">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="x_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="table_td_insert_img">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="x_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="imgid_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="url_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="width_">'+
'    <block type="math_number">'+
'    <field name="NUM">50</field>'+
'    </block>'+
'    </value>'+
'    <value name="height_">'+
'    <block type="math_number">'+
'    <field name="NUM">50</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="table_td_img_move">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="imgid_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="x_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="table_td_img_get">'+
'    <value name="imgid_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="image_onclick_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'    <category name="%{BKY_CATPAGEELEMENTS_CANVAS}" id="catPageElements_canvas">'+
'    <block type="canvas_create">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="width_">'+
'    <block type="math_number">'+
'    <field name="NUM">500</field>'+
'    </block>'+
'    </value>'+
'    <value name="height_">'+
'    <block type="math_number">'+
'    <field name="NUM">500</field>'+
'    </block>'+
'    </value>'+
'    <value name="left_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="top_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="zindex_">'+
'    <block type="math_number">'+
'    <field name="NUM">999</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="canvas_set">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="canvas_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="canvas_clearrect">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="x_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="width_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="height_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="canvas_clear">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="canvas_delete">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="variables_set">'+
'    <field name="VAR">imageData</field>'+
'    <value name="VALUE">'+
'    <block type="canvas_getimagedata">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="x0_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y0_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="width_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="height_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="canvas_setimagedata">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="data_">'+
'    <block type="variables_get">'+
'    <field name="VAR" id="{}=:kAN[Oiy:WY6$6?=n">imageData</field>'+
'    </block>'+
'    </value>'+
'    <value name="x0_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y0_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="canvas_capturevideo">'+
'    <value name="canvasid_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="videoid_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="sx_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="sy_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="swidth_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="sheight_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="x0_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y0_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="width_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="height_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="rotate_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="globalAlpha_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="canvas_img_url">'+
'    <value name="url_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="canvas_img">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="sx_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="sy_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="swidth_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="sheight_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="x0_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y0_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="width_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="height_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="rotate_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="globalAlpha_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="canvas_line">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="linewidth_">'+
'    <block type="math_number">'+
'    <field name="NUM">5</field>'+
'    </block>'+
'    </value>'+
'    <value name="x0_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y0_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="x1_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="y1_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="color_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#ff0000</field>'+
'    </block>'+
'    </value>'+
'    <value name="rotate_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="globalAlpha_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="canvas_rect">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="linewidth_">'+
'    <block type="math_number">'+
'    <field name="NUM">5</field>'+
'    </block>'+
'    </value>'+
'    <value name="x0_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y0_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="width_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="height_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="fill_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">FALSE</field>'+
'    </block>'+
'    </value>'+
'    <value name="color_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#ff0000</field>'+
'    </block>'+
'    </value>'+
'    <value name="rotate_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="globalAlpha_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="canvas_arc">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="linewidth_">'+
'    <block type="math_number">'+
'    <field name="NUM">5</field>'+
'    </block>'+
'    </value>'+
'    <value name="x0_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y0_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="r_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="sAngle_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="eAngle_">'+
'    <block type="math_number">'+
'    <field name="NUM">6.284</field>'+
'    </block>'+
'    </value>'+
'    <value name="counterclockwise_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">FALSE</field>'+
'    </block>'+
'    </value>'+
'    <value name="fill_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">FALSE</field>'+
'    </block>'+
'    </value>'+
'    <value name="color_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#ff0000</field>'+
'    </block>'+
'    </value>'+
'    <value name="rotate_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="globalAlpha_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="canvas_text">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="text_">'+
'    <block type="text">'+
'    <field name="TEXT">Hello World</field>'+
'    </block>'+
'    </value>'+
'    <value name="x0_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y0_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="fontname_">'+
'    <block type="text">'+
'    <field name="TEXT">Arial</field>'+
'    </block>'+
'    </value>'+
'    <value name="fontsize_">'+
'    <block type="math_number">'+
'    <field name="NUM">30</field>'+
'    </block>'+
'    </value>'+
'    <value name="fill_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">TRUE</field>'+
'    </block>'+
'    </value>'+
'    <value name="color_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#ff0000</field>'+
'    </block>'+
'    </value>'+
'    <value name="rotate_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="globalAlpha_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="canvas_quadraticcurve">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="x0_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y0_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="cp1x_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="cp1y_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="x_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="linewidth_">'+
'    <block type="math_number">'+
'    <field name="NUM">5</field>'+
'    </block>'+
'    </value>'+
'    <value name="color_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#ff0000</field>'+
'    </block>'+
'    </value>'+
'    <value name="fill_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">FALSE</field>'+
'    </block>'+
'    </value>'+
'    <value name="rotate_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="globalAlpha_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="canvas_beziercurve">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="x0_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y0_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="cp1x_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="cp1y_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="cp2x_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="cp2y_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="x_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="y_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="linewidth_">'+
'    <block type="math_number">'+
'    <field name="NUM">5</field>'+
'    </block>'+
'    </value>'+
'    <value name="color_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#ff0000</field>'+
'    </block>'+
'    </value>'+
'    <value name="fill_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">FALSE</field>'+
'    </block>'+
'    </value>'+
'    <value name="rotate_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="globalAlpha_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="canvas_onclick_do">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="canvas_onclick_dom">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="canvas_onclick_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="canvas_getcolor">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="left_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="top_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'    <category name="%{BKY_CATPAGEELEMENTS_DIV}" id="catPageElements_div">'+
'    <block type="div_create">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="left_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="top_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="width_">'+
'    <block type="math_number">'+
'    <field name="NUM">60</field>'+
'    </block>'+
'    </value>'+
'    <value name="height_">'+
'    <block type="math_number">'+
'    <field name="NUM">30</field>'+
'    </block>'+
'    </value>'+
'    <value name="borderwidth_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="bordercolor_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#000000</field>'+
'    </block>'+
'    </value>'+
'    <value name="background_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#ffffff</field>'+
'    </block>'+
'    </value>'+
'    <value name="color_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#000000</field>'+
'    </block>'+
'    </value>'+
'    <value name="fontsize_">'+
'    <block type="math_number">'+
'    <field name="NUM">14</field>'+
'    </block>'+
'    </value>'+
'    <value name="opacity_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="innerHTML_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="zindex_">'+
'    <block type="math_number">'+
'    <field name="NUM">999</field>'+
'    </block>'+
'    </value>'+
'    <value name="display_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">TRUE</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="div_set">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="div_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="div_delete">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="div_add">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="addid_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'    <category name="%{BKY_CATPAGEELEMENTS_IFRAME}" id="catPageElements_iframe">'+
'    <block type="iframe_create">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="left_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="top_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="width_">'+
'    <block type="math_number">'+
'    <field name="NUM">60</field>'+
'    </block>'+
'    </value>'+
'    <value name="height_">'+
'    <block type="math_number">'+
'    <field name="NUM">30</field>'+
'    </block>'+
'    </value>'+
'    <value name="src_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="srcdoc_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="opacity_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="zindex_">'+
'    <block type="math_number">'+
'    <field name="NUM">999</field>'+
'    </block>'+
'    </value>'+
'    <value name="display_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">TRUE</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="iframe_set">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="iframe_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="iframe_delete">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'    <category name="%{BKY_CATPAGEELEMENTS_A}" id="catPageElements_a">'+
'    <block type="a_create">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="left_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="top_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="width_">'+
'    <block type="math_number">'+
'    <field name="NUM">60</field>'+
'    </block>'+
'    </value>'+
'    <value name="height_">'+
'    <block type="math_number">'+
'    <field name="NUM">30</field>'+
'    </block>'+
'    </value>'+
'    <value name="borderwidth_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="bordercolor_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#000000</field>'+
'    </block>'+
'    </value>'+
'    <value name="background_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#ffffff</field>'+
'    </block>'+
'    </value>'+
'    <value name="color_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#000000</field>'+
'    </block>'+
'    </value>'+
'    <value name="fontsize_">'+
'    <block type="math_number">'+
'    <field name="NUM">14</field>'+
'    </block>'+
'    </value>'+
'    <value name="opacity_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="innerHTML_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="href_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="zindex_">'+
'    <block type="math_number">'+
'    <field name="NUM">999</field>'+
'    </block>'+
'    </value>'+
'    <value name="display_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">TRUE</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'  <block type="custom_googleicon">'+
'    <field name="element">a</field>'+
'    <value name="id">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="val">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'    <block type="a_set">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="a_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="a_delete">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'    <category name="%{BKY_CATPAGEELEMENTS_RADIO}" id="catPageElements_radio">'+
'    <block type="radio_create">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="name_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="left_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="top_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="size_">'+
'    <block type="math_number">'+
'    <field name="NUM">12</field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="checked_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">FALSE</field>'+
'    </block>'+
'    </value>'+
'    <value name="opacity_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="zindex_">'+
'    <block type="math_number">'+
'    <field name="NUM">999</field>'+
'    </block>'+
'    </value>'+
'    <value name="display_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">TRUE</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="radio_set">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="radio_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="radio_name_get">'+
'    <value name="name_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="radio_delete">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="radio_onclick_do">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'    <category name="%{BKY_CATPAGEELEMENTS_CHECKBOX}" id="catPageElements_checkbox">'+
'    <block type="checkbox_create">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="left_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="top_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="size_">'+
'    <block type="math_number">'+
'    <field name="NUM">12</field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="checked_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">FALSE</field>'+
'    </block>'+
'    </value>'+
'    <value name="opacity_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="zindex_">'+
'    <block type="math_number">'+
'    <field name="NUM">999</field>'+
'    </block>'+
'    </value>'+
'    <value name="display_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">TRUE</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="checkbox_set">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="checkbox_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="checkbox_delete">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="checkbox_onclick_do">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'    <category name="%{BKY_CATPAGEELEMENTS_TEXTAREA}" id="catPageElements_textarea">'+
'    <block type="textarea_create">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="left_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="top_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="cols_">'+
'    <block type="math_number">'+
'    <field name="NUM">20</field>'+
'    </block>'+
'    </value>'+
'    <value name="rows_">'+
'    <block type="math_number">'+
'    <field name="NUM">10</field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="opacity_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="zindex_">'+
'    <block type="math_number">'+
'    <field name="NUM">999</field>'+
'    </block>'+
'    </value>'+
'    <value name="display_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">TRUE</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="textarea_set">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="element_select">'+
'    <field name="source_">textarea</field>'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="textarea_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="textarea_delete">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="textarea_onchange_do">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'    <category name="%{BKY_CATPAGEELEMENTS_NUMBER}" id="catPageElements_number">'+
'    <block type="number_create">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="left_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="top_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="width_">'+
'    <block type="math_number">'+
'    <field name="NUM">50</field>'+
'    </block>'+
'    </value>'+
'    <value name="height_">'+
'    <block type="math_number">'+
'    <field name="NUM">30</field>'+
'    </block>'+
'    </value>'+
'    <value name="fontsize_">'+
'    <block type="math_number">'+
'    <field name="NUM">12</field>'+
'    </block>'+
'    </value>'+
'    <value name="min_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="max_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="step_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="opacity_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="zindex_">'+
'    <block type="math_number">'+
'    <field name="NUM">999</field>'+
'    </block>'+
'    </value>'+
'    <value name="display_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">TRUE</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="number_set">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="number_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="number_delete">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="number_onchange_do">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'    <category name="%{BKY_CATPAGEELEMENTS_DATE}" id="catPageElements_date">'+
'    <block type="date_create">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="left_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="top_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="min_">'+
'    <block type="text">'+
'    <field name="TEXT">1900-01-01</field>'+
'    </block>'+
'    </value>'+
'    <value name="max_">'+
'    <block type="text">'+
'    <field name="TEXT">2100-12-31</field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT">2020-09-28</field>'+
'    </block>'+
'    </value>'+
'    <value name="opacity_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="zindex_">'+
'    <block type="math_number">'+
'    <field name="NUM">999</field>'+
'    </block>'+
'    </value>'+
'    <value name="display_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">TRUE</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="date_set">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="date_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="date_delete">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="date_onchange_do">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'    <category name="%{BKY_CATPAGEELEMENTS_TIME}" id="catPageElements_time">'+
'    <block type="time_create">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="left_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="top_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT">00:00:00</field>'+
'    </block>'+
'    </value>'+
'    <value name="opacity_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="zindex_">'+
'    <block type="math_number">'+
'    <field name="NUM">999</field>'+
'    </block>'+
'    </value>'+
'    <value name="display_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">TRUE</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="time_set">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="time_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="time_delete">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="time_onchange_do">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'    <category name="%{BKY_CATPAGEELEMENTS_DATETIME}" id="catPageElements_datetime">'+
'    <block type="datetime_create">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="left_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="top_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT">2020-09-28T00:00</field>'+
'    </block>'+
'    </value>'+
'    <value name="opacity_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="zindex_">'+
'    <block type="math_number">'+
'    <field name="NUM">999</field>'+
'    </block>'+
'    </value>'+
'    <value name="display_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">TRUE</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="datetime_set">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="datetime_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="datetime_delete">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="datetime_onchange_do">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'    <category name="%{BKY_CATPAGEELEMENTS_PROGRESS}" id="catPageElements_progress">'+
'    <block type="progress_create">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="left_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="top_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="max_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="opacity_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="zindex_">'+
'    <block type="math_number">'+
'    <field name="NUM">999</field>'+
'    </block>'+
'    </value>'+
'    <value name="display_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">TRUE</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="progress_set">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="progress_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="progress_delete">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'    <category name="%{BKY_CATPAGEELEMENTS_PASSWORD}" id="catPageElements_password">'+
'    <block type="password_create">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="width_">'+
'    <block type="math_number">'+
'    <field name="NUM">60</field>'+
'    </block>'+
'    </value>'+
'    <value name="height_">'+
'    <block type="math_number">'+
'    <field name="NUM">30</field>'+
'    </block>'+
'    </value>'+
'    <value name="left_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="top_">'+
'    <block type="math_number">'+
'    <field name="NUM">100</field>'+
'    </block>'+
'    </value>'+
'    <value name="maxlength_">'+
'    <block type="math_number">'+
'    <field name="NUM">20</field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="background_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#ffffff</field>'+
'    </block>'+
'    </value>'+
'    <value name="color_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#000000</field>'+
'    </block>'+
'    </value>'+
'    <value name="fontsize_">'+
'    <block type="math_number">'+
'    <field name="NUM">14</field>'+
'    </block>'+
'    </value>'+
'    <value name="opacity_">'+
'    <block type="math_number">'+
'    <field name="NUM">1</field>'+
'    </block>'+
'    </value>'+
'    <value name="zindex_">'+
'    <block type="math_number">'+
'    <field name="NUM">999</field>'+
'    </block>'+
'    </value>'+
'    <value name="display_">'+
'    <block type="logic_boolean">'+
'    <field name="BOOL">TRUE</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="password_set">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="password_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="password_delete">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'    <category name="%{BKY_CATPAGEELEMENTS_FORM}" id="catPageElements_form">'+
'    <block type="form_create">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="action_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="target_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="form_set">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="form_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="form_delete">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="form_insert">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="elementid_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="form_submit">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'    <category name="%{BKY_CATPAGEELEMENTS_VIDEO}" id="catPageElements_video">'+
'	  <block type="video_create1">'+
'		<value name="id_">'+
'		  <block type="text">'+
'			<field name="TEXT"></field>'+
'		  </block>'+
'		</value>'+
'		<value name="left_">'+
'		  <block type="math_number">'+
'			<field name="NUM">0</field>'+
'		  </block>'+
'		</value>'+
'		<value name="top_">'+
'		  <block type="math_number">'+
'			<field name="NUM">100</field>'+
'		  </block>'+
'		</value>'+
'		<value name="width_">'+
'		  <block type="math_number">'+
'			<field name="NUM">320</field>'+
'		  </block>'+
'		</value>'+
'		<value name="height_">'+
'		  <block type="math_number">'+
'			<field name="NUM">240</field>'+
'		  </block>'+
'		</value>'+
'		<value name="index_">'+
'		  <block type="math_number">'+
'			<field name="NUM">0</field>'+
'		  </block>'+
'		</value>'+
'		<value name="src_">'+
'		  <block type="text">'+
'			<field name="TEXT"></field>'+
'		  </block>'+
'		</value>'+
'		<value name="opacity_">'+
'		  <block type="math_number">'+
'			<field name="NUM">1</field>'+
'		  </block>'+
'		</value>'+
'		<value name="zindex_">'+
'		  <block type="math_number">'+
'			<field name="NUM">999</field>'+
'		  </block>'+
'		</value>'+
'		<value name="display_">'+
'		  <block type="logic_boolean">'+
'			<field name="BOOL">TRUE</field>'+
'		  </block>'+
'		</value>'+
'	  </block>'+
'    <block type="video_set">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="value_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="video_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="video_delete">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="video_output_jpg">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'		  <category name="%{BKY_CATPAGEELEMENTS_AUDIO}" id="catPageElements_audio">'+
'		  <block type="audio_create">'+
'			<value name="id_">'+
'			  <block type="text">'+
'				<field name="TEXT"></field>'+
'			  </block>'+
'			</value>'+
'			<value name="src_">'+
'			  <block type="text">'+
'				<field name="TEXT"></field>'+
'			  </block>'+
'			</value>'+		
'			<value name="left_">'+
'			  <block type="math_number">'+
'				<field name="NUM">0</field>'+
'			  </block>'+
'			</value>'+
'			<value name="top_">'+
'			  <block type="math_number">'+
'				<field name="NUM">100</field>'+
'			  </block>'+
'			</value>'+
'			<value name="zindex_">'+
'			  <block type="math_number">'+
'				<field name="NUM">999</field>'+
'			  </block>'+
'			</value>'+
'		  </block>'+
'		  <block type="audio_set">'+
'			<value name="id_">'+
'			  <block type="text">'+
'				<field name="TEXT"></field>'+
'			  </block>'+
'			</value>'+
'			<value name="value_">'+
'			  <block type="text">'+
'				<field name="TEXT"></field>'+
'			  </block>'+
'			</value>'+
'		  </block>'+
'		  <block type="audio_get">'+
'			<value name="id_">'+
'			  <block type="text">'+
'				<field name="TEXT"></field>'+
'			  </block>'+
'			</value>'+ 
'		  </block>'+
'		  <block type="audio_control">'+
'			<value name="id_">'+
'			  <block type="text">'+
'				<field name="TEXT"></field>'+
'			  </block>'+
'			</value>'+
'		  </block>'+
'		  <block type="audio_play_googleTTS">'+
'			<value name="id_">'+
'			  <block type="text">'+
'				<field name="TEXT"></field>'+
'			  </block>'+
'			</value>'+
'			<value name="text_">'+
'			  <block type="text">'+
'				<field name="TEXT"></field>'+
'			  </block>'+
'			</value>'+		
'		  </block>'+
'		  <block type="audio_delete">'+
'			<value name="id_">'+
'			  <block type="text">'+
'				<field name="TEXT"></field>'+
'			  </block>'+
'			</value>'+
'		  </block>'+
'	</category>'+
'    <category name="%{BKY_CATPAGEELEMENTS_FONT}" id="catPageElements_font">'+
'    <block type="font_text">'+
'    <value name="size_">'+
'    <block type="math_number">'+
'    <field name="NUM">2</field>'+
'    </block>'+
'    </value>'+
'    <value name="color_">'+
'    <block type="colour_picker">'+
'    <field name="COLOUR">#ff0000</field>'+
'    </block>'+
'    </value>'+
'    <value name="face_">'+
'    <block type="text">'+
'    <field name="TEXT">Arial</field>'+
'    </block>'+
'    </value>'+
'    <value name="text_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="font_b">'+
'    <value name="text_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="font_i">'+
'    <value name="text_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="font_u">'+
'    <value name="text_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="font_sup">'+
'    <value name="text_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="font_sub">'+
'    <value name="text_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="font_em">'+
'    <value name="text_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="font_strong">'+
'    <value name="text_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="font_code">'+
'    <value name="text_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'    <category name="%{BKY_CATPAGEELEMENTS_FETCH}" id="catPageElements_fetch">'+
'    <block type="fetch_get">'+
	'    <value name="id_">'+
		'    <block type="text">'+
			'    <field name="TEXT"></field>'+
		'    </block>'+
	'    </value>'+
	'    <value name="url_">'+
		'    <block type="text">'+
			'    <field name="TEXT"></field>'+
		'    </block>'+
	'    </value>'+
'    </block>'+
'    <block type="fetch_getdata">'+
	'    <value name="id_">'+
		'    <block type="text">'+
			'    <field name="TEXT"></field>'+
		'    </block>'+
	'    </value>'+
'    </block>'+
'    </category>'+
'    <category name="%{BKY_CATPAGEELEMENTS_AJAX}" id="catPageElements_ajax">'+
'    <block type="ajax_get">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    <value name="url_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="ajax_getdata">'+
'    <value name="id_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="ajax_getdata_json">'+
'    <value name="json_">'+
'    </value>'+
'    <value name="index_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    <value name="fieldname_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="ajax_getdata_json_count">'+
'    <value name="json_">'+
'    </value>'+
'    </block>'+
'    </category>'+
'	  <category name="%{BKY_CATPAGEELEMENTS_JSON}" id="catPageElements_json">'+
'		  <block type="json_variable">'+
'			<value name="OBJ">'+
'			  <block type="text">'+
'				<field name="TEXT">{"a":1, "b":[{"c":2}, {"d":3}]}</field>'+
'			  </block>'+
'			</value>'+
'		  </block>'+
'		  <block type="json_get_index">'+
'			<value name="INDEX">'+
'			  <block type="math_number">'+
'				<field name="NUM">0</field>'+
'			  </block>'+
'			</value>'+
'		  </block>'+
'		  <block type="json_get_column">'+
'			<value name="COLUMN">'+
'			  <block type="text">'+
'				<field name="TEXT"></field>'+
'			  </block>'+
'			</value>'+
'		  </block>'+
'		  <block type="json_get_column_index">'+
'			<value name="COLUMN">'+
'			  <block type="text">'+
'				<field name="TEXT"></field>'+
'			  </block>'+
'			</value>'+
'			<value name="INDEX">'+
'			  <block type="math_number">'+
'				<field name="NUM">0</field>'+
'			  </block>'+
'			</value>'+
'		  </block>'+
'		  <block type="json_string">'+
'		  </block>'+
'		  <block type="json_get_length">'+
'		  </block>'+
'		  <block type="json_get_column_length">'+
'			<value name="COLUMN">'+
'			  <block type="text">'+
'				<field name="TEXT"></field>'+
'			  </block>'+
'			</value>'+
'		  </block>'+
'		  <block type="json_get_column_index_length">'+
'			<value name="COLUMN">'+
'			  <block type="text">'+
'				<field name="TEXT"></field>'+
'			  </block>'+
'			</value>'+
'			<value name="INDEX">'+
'			  <block type="math_number">'+
'				<field name="NUM">0</field>'+
'			  </block>'+
'			</value>'+
'		  </block>'+
'	  </category>'+
'    </category>'+
'</xml>';
