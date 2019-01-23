var catGameCanvas = '<xml><category name="%{BKY_GAMECANVAS}" colour="%{BKY_GAMECANVAS_HUE}">'+
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
'  <block type="canvas_img_url">'+   
'    <value name="url_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+   
'  <block type="canvas_img">'+
'    <value name="id_">'+
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
'  <block type="canvas_quadraticcurve">'+
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
'    <value name="cp1x_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="cp1y_">'+
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
'    <value name="linewidth_">'+
'      <block type="math_number">'+
'        <field name="NUM">5</field>'+
'      </block>'+
'    </value>'+          
'    <value name="color_">'+
'      <block type="colour_picker">'+
'        <field name="COLOUR">#ff0000</field>'+
'      </block>'+
'    </value>'+ 
'    <value name="fill_">'+
'      <block type="logic_boolean">'+
'        <field name="BOOL">FALSE</field>'+
'      </block>'+
'    </value>'+        
'  </block>'+
'  <block type="canvas_beziercurve">'+
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
'    <value name="cp1x_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="cp1y_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+       
'    <value name="cp2x_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="cp2y_">'+
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
'    <value name="linewidth_">'+
'      <block type="math_number">'+
'        <field name="NUM">5</field>'+
'      </block>'+
'    </value>'+          
'    <value name="color_">'+
'      <block type="colour_picker">'+
'        <field name="COLOUR">#ff0000</field>'+
'      </block>'+
'    </value>'+ 
'    <value name="fill_">'+
'      <block type="logic_boolean">'+
'        <field name="BOOL">FALSE</field>'+
'      </block>'+
'    </value>'+        
'  </block>'+
'  <block type="canvas_clearrect">'+
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
'  <block type="image_onclick_listener">'+
'  </block>'+       
'  <block type="canvas_onclick_do">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+     
'  </block>'+ 
'  <block type="canvas_onclick_get">'+
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+     
'  </block>'+  
' </category></xml>';
