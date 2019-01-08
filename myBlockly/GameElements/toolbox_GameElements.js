var catGameElements = '<xml><category name="%{BKY_GAMEELEMENTS}" colour="%{BKY_GAMEELEMENTS_HUE}">'+
'  <block type="time_delay">'+
'    <value name="seconds">'+
'      <block type="math_number">'+
'        <field name="NUM">1</field>'+
'      </block>'+      
'    </value>'+     
'  </block>'+  
'  <block type="document_timer">'+
'    <value name="intervals_">'+
'      <block type="math_number">'+
'        <field name="NUM">100</field>'+
'      </block>'+
'    </value>'+  
'  </block>'+  
'  <block type="document_timer_once">'+
'    <value name="intervals_">'+
'      <block type="math_number">'+
'        <field name="NUM">1000</field>'+
'      </block>'+
'    </value>'+  
'  </block>'+  
'  <block type="document_timer_stop">'+
'  </block>'+ 
'  <block type="async_function">'+
'    <value name="name_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+    
'    </value>'+   
'    <value name="parameter_">'+  
'    </value>'+      
'  </block>'+    
'  <block type="call_async_function">'+
'    <value name="name_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+    
'    </value>'+
'    <value name="parameter_">'+  
'    </value>'+     
'  </block>'+      
'  <block type="text_to_number">'+
'    <value name="value_text_">'+
'    </value>'+    
'  </block>'+  
'  <block type="loop_break">'+      
'  </block>'+  
'  <block type="loop_continue">'+      
'  </block>'+            
'  <block type="function_return">'+
'    <value name="value_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+      
'    </value>'+     
'  </block>'+        
'  <block type="mouse_coordinate_get">'+
'  </block>'+
'  <block type="music_create">'+ 
'    <value name="url_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="length_">'+
'      <block type="math_number">'+
'        <field name="NUM">20000</field>'+
'      </block>'+
'    </value>'+
'    <value name="loop_">'+
'      <block type="logic_boolean">'+
'        <field name="BOOL">TRUE</field>'+
'      </block>'+
'    </value>'+     
'  </block>'+  
'  <block type="music_delete">'+ 
'  </block>'+    
'  <block type="table_create">'+  
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
'    <value name="borderwidth_">'+
'      <block type="math_number">'+
'        <field name="NUM">1</field>'+
'      </block>'+
'    </value>'+    
'    <value name="bordercolor_">'+
'      <block type="colour_picker">'+
'        <field name="COLOUR">#000000</field>'+
'      </block>'+
'    </value>'+     
'    <value name="trcount_">'+
'      <block type="math_number">'+
'        <field name="NUM">5</field>'+
'      </block>'+
'    </value>'+
'    <value name="tdcount_">'+
'      <block type="math_number">'+
'        <field name="NUM">5</field>'+
'      </block>'+
'    </value>'+   
'    <value name="width_">'+
'      <block type="math_number">'+
'        <field name="NUM">60</field>'+
'      </block>'+
'    </value>'+
'    <value name="height_">'+
'      <block type="math_number">'+
'        <field name="NUM">60</field>'+
'      </block>'+
'    </value>'+    
'    <value name="bgcolor_">'+
'      <block type="logic_null">'+
'      </block>'+
'    </value>'+       
'    <value name="zindex_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+ 
'    <value name="display_">'+
'      <block type="logic_boolean">'+
'        <field name="BOOL">TRUE</field>'+
'      </block>'+
'    </value>'+     
'  </block>'+
'  <block type="table_set">'+
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
'  <block type="image_onclick_listener">'+
'  </block>'+     
'  <block type="table_get">'+   
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+     
'  </block>'+  
'  <block type="table_clear">'+  
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+     
'  </block>'+ 
'  <block type="table_delete">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+     
'  </block>'+
'  <block type="table_td_insert_img">'+ 
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+     
'    <value name="x_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="y_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+  
'    <value name="imgid_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+      
'    <value name="url_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="width_">'+
'      <block type="math_number">'+
'        <field name="NUM">50</field>'+
'      </block>'+
'    </value>'+
'    <value name="height_">'+
'      <block type="math_number">'+
'        <field name="NUM">50</field>'+
'      </block>'+
'    </value>'+   
'  </block>'+
'  <block type="table_td_img_move">'+  
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+     
'    <value name="imgid_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+      
'    <value name="x_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="y_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+  
'  </block>'+    
'  <block type="table_td_copy_move">'+  
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+     
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
'    <value name="x_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="y_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+  
'  </block>'+ 
'  <block type="table_td_img_get">'+    
'    <value name="imgid_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+  
'  </block>'+       
'  <block type="image_onclick_get">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+     
'  </block>'+  
'  <block type="table_td_insert_text">'+  
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+     
'    <value name="x_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="y_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+  
'    <value name="text_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="fontname_">'+
'      <block type="text">'+
'        <field name="TEXT">Arial</field>'+
'      </block>'+
'    </value>'+
'    <value name="fontsize_">'+
'      <block type="math_number">'+
'        <field name="NUM">12</field>'+
'      </block>'+
'    </value>'+
'    <value name="color_">'+
'      <block type="colour_picker">'+
'        <field name="COLOUR">#ff0000</field>'+
'      </block>'+
'    </value>'+       
'  </block>'+
'  <block type="table_td_set">'+  
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+     
'    <value name="x_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="y_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+  
'    <value name="value_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+      
'  </block>'+
'  <block type="table_border_set">'+  
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+     
'    <value name="borderwidth_">'+
'      <block type="math_number">'+
'        <field name="NUM">1</field>'+
'      </block>'+
'    </value>'+    
'    <value name="bordercolor_">'+
'      <block type="colour_picker">'+
'        <field name="COLOUR">#000000</field>'+
'      </block>'+
'    </value>'+
'  </block>'+  
'  <block type="table_td_border_set">'+  
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+     
'    <value name="x_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="y_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+  
'    <value name="borderwidth_">'+
'      <block type="math_number">'+
'        <field name="NUM">1</field>'+
'      </block>'+
'    </value>'+    
'    <value name="bordercolor_">'+
'      <block type="colour_picker">'+
'        <field name="COLOUR">#000000</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="table_td_get">'+    
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+     
'    <value name="x_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="y_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+     
'  </block>'+    
'  <block type="table_td_clear">'+  
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+     
'    <value name="x_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="y_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+    
'  </block>'+
'  <block type="canvas_create">'+ 
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+      
'    <value name="width_">'+
'      <block type="math_number">'+
'        <field name="NUM">500</field>'+
'      </block>'+
'    </value>'+
'    <value name="height_">'+
'      <block type="math_number">'+
'        <field name="NUM">500</field>'+
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
'    <value name="zindex_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+     
'  </block>'+
'  <block type="canvas_line">'+  
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+      
'    <value name="linewidth_">'+
'      <block type="math_number">'+
'        <field name="NUM">5</field>'+
'      </block>'+
'    </value>'+    
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
'        <field name="NUM">100</field>'+
'      </block>'+
'    </value>'+
'    <value name="y1_">'+
'      <block type="math_number">'+
'        <field name="NUM">100</field>'+
'      </block>'+
'    </value>'+  
'    <value name="color_">'+
'      <block type="colour_picker">'+
'        <field name="COLOUR">#ff0000</field>'+
'      </block>'+
'    </value>'+     
'  </block>'+  
'  <block type="canvas_rect">'+ 
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+      
'    <value name="linewidth_">'+
'      <block type="math_number">'+
'        <field name="NUM">5</field>'+
'      </block>'+
'    </value>'+     
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
'    <value name="width_">'+
'      <block type="math_number">'+
'        <field name="NUM">100</field>'+
'      </block>'+
'    </value>'+
'    <value name="height_">'+
'      <block type="math_number">'+
'        <field name="NUM">100</field>'+
'      </block>'+
'    </value>'+  
'    <value name="fill_">'+
'      <block type="logic_boolean">'+
'        <field name="BOOL">FALSE</field>'+
'      </block>'+
'    </value>'+     
'    <value name="color_">'+
'      <block type="colour_picker">'+
'        <field name="COLOUR">#ff0000</field>'+
'      </block>'+
'    </value>'+     
'  </block>'+  
'  <block type="canvas_arc">'+  
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+      
'    <value name="linewidth_">'+
'      <block type="math_number">'+
'        <field name="NUM">5</field>'+
'      </block>'+
'    </value>'+     
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
'    <value name="r_">'+
'      <block type="math_number">'+
'        <field name="NUM">100</field>'+
'      </block>'+
'    </value>'+
'    <value name="sAngle_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+  
'    <value name="eAngle_">'+
'      <block type="math_number">'+
'        <field name="NUM">6.284</field>'+
'      </block>'+
'    </value>'+  
'    <value name="counterclockwise_">'+
'      <block type="logic_boolean">'+
'        <field name="BOOL">FALSE</field>'+
'      </block>'+
'    </value>'+     
'    <value name="fill_">'+
'      <block type="logic_boolean">'+
'        <field name="BOOL">FALSE</field>'+
'      </block>'+
'    </value>'+     
'    <value name="color_">'+
'      <block type="colour_picker">'+
'        <field name="COLOUR">#ff0000</field>'+
'      </block>'+
'    </value>'+     
'  </block>'+  
'  <block type="canvas_img">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+      
'    <value name="url_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="sx_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="sy_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+     
'    <value name="swidth_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="sheight_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+       
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
'    <value name="width_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="height_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+   
'  </block>'+
'  <block type="canvas_text">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+      
'    <value name="text_">'+
'      <block type="text">'+
'        <field name="TEXT">Hello World</field>'+
'      </block>'+
'    </value>'+
'    <value name="x0_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="y0_">'+
'      <block type="math_number">'+
'        <field name="NUM">100</field>'+
'      </block>'+
'    </value>'+     
'    <value name="fontname_">'+
'      <block type="text">'+
'        <field name="TEXT">Arial</field>'+
'      </block>'+
'    </value>'+
'    <value name="fontsize_">'+
'      <block type="math_number">'+
'        <field name="NUM">30</field>'+
'      </block>'+
'    </value>'+      
'    <value name="fill_">'+
'      <block type="logic_boolean">'+
'        <field name="BOOL">TRUE</field>'+
'      </block>'+
'    </value>'+     
'    <value name="color_">'+
'      <block type="colour_picker">'+
'        <field name="COLOUR">#ff0000</field>'+
'      </block>'+
'    </value>'+  
'  </block>'+
'  <block type="canvas_clear">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+      
'  </block>'+  
'  <block type="canvas_delete">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+      
'  </block>'+  
'  <block type="image_create">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+    
'    <value name="url_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="width_">'+
'      <block type="math_number">'+
'        <field name="NUM">200</field>'+
'      </block>'+
'    </value>'+
'    <value name="height_">'+
'      <block type="math_number">'+
'        <field name="NUM">300</field>'+
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
'    </value>'+  
'    <value name="zindex_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+ 
'    <value name="display_">'+
'      <block type="logic_boolean">'+
'        <field name="BOOL">TRUE</field>'+
'      </block>'+
'    </value>'+     
'  </block>'+
'  <block type="image_boundary">'+
'    <value name="left_">'+
'      <block type="math_number">'+
'        <field name="NUM">500</field>'+
'      </block>'+
'    </value>'+ 
'    <value name="top_">'+
'      <block type="math_number">'+
'        <field name="NUM">500</field>'+
'      </block>'+
'    </value>'+    
'  </block>'+  
'  <block type="image_sys_get">'+
'  </block>'+      
'  <block type="image_collision">'+
'    <value name="id1_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+ 
'    <value name="id2_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+     
'  </block>'+       
'  <block type="image_set">'+
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
'  <block type="image_get">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+ 
'  </block>'+
'  <block type="image_onclick_listener">'+
'  </block>'+   
'  <block type="image_onclick_do">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+     
'  </block>'+ 
'  <block type="image_onclick_get">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+     
'  </block>'+  
'  <block type="image_boundary_collision">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+  
'  </block>'+   
'  <block type="image_boundary_collision_do">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+     
'  </block>'+  
'  <block type="image_delete">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+ 
'  </block>'+
'  <block type="image_move">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+ 
'    <value name="step_">'+
'      <block type="math_number">'+
'        <field name="NUM">10</field>'+
'      </block>'+
'    </value>'+     
'  </block>'+      
'  <block type="move_to_mouse">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+     
'  </block>'+     
'  <block type="move_to_coordinate">'+
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
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+      
'  </block>'+        
'  <block type="image_resize">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+ 
'    <value name="percentage_">'+
'      <block type="math_number">'+
'        <field name="NUM">100</field>'+
'      </block>'+
'    </value>'+     
'  </block>'+      
'  <block type="rotatez_degrees">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+   
'    <value name="degrees_">'+
'      <block type="math_number">'+
'        <field name="NUM">30</field>'+
'      </block>'+
'    </value>'+     
'  </block>'+   
'  <block type="rotate_vertical_flip">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+       
'  </block>'+ 
'  <block type="rotate_horizontal_flip">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+       
'  </block>'+      
'  <block type="button_create">'+ 
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
'    <value name="width_">'+
'      <block type="math_number">'+
'        <field name="NUM">60</field>'+
'      </block>'+
'    </value>'+
'    <value name="height_">'+
'      <block type="math_number">'+
'        <field name="NUM">30</field>'+
'      </block>'+
'    </value>'+    
'    <value name="value_">'+
'      <block type="text">'+
'        <field name="TEXT">button</field>'+
'      </block>'+
'    </value>'+       
'    <value name="zindex_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+ 
'    <value name="display_">'+
'      <block type="logic_boolean">'+
'        <field name="BOOL">TRUE</field>'+
'      </block>'+
'    </value>'+     
'  </block>'+
'  <block type="button_set">'+
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
'  <block type="button_get">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+     
'  </block>'+     
'  <block type="button_delete">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+     
'  </block>'+    
'  <block type="button_onclick_do">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+         
'  </block>'+               
' </category></xml>';
