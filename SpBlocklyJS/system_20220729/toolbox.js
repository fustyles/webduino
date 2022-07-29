var catWindow ='<xml>'+
'    <category name="%{BKY_CATWINDOW}" id="catWindow" colour="80">'+
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
'    <block type="location">'+
'    </block>'+
'    <block type="system_datetime_get">'+
'    </block>'+
'    <block type="console_log">'+
'    <value name="text_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="window_open">'+
'    <value name="url_">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    <block type="custom_comment">'+
'    <value name="text">'+
'    <block type="text">'+
'    <field name="TEXT"></field>'+
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
'    <block type="text_to_number">'+
'    <value name="value_text_">'+
'    </value>'+
'    </block>'+
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
'    <block type="function_return">'+
'    <value name="value_">'+
'    <block type="math_number">'+
'    <field name="NUM">0</field>'+
'    </block>'+
'    </value>'+
'    </block>'+
'    </category>'+
'</xml>';
