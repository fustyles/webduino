var catGameAuxiliary = '<xml><category name="%{BKY_GAMEAUXILIARY}" colour="%{BKY_GAMEAUXILIARY_HUE}">'+
'  <block type="time_delay">'+
'    <value name="seconds">'+
'      <block type="math_number">'+
'        <field name="NUM">1</field>'+
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
'  <block type="mouse_coordinate_get_start">'+
'  </block>'+    
'  <block type="mouse_coordinate_get">'+
'  </block>'+        
'  <block type="document_timer_novar">'+
'    <value name="intervals_">'+
'      <block type="math_number">'+
'        <field name="NUM">100</field>'+
'      </block>'+
'    </value>'+  
'  </block>'+  
'  <block type="document_timer_once_novar">'+
'    <value name="intervals_">'+
'      <block type="math_number">'+
'        <field name="NUM">1000</field>'+
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
'  <block type="element_event">'+  
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+    
'    </value>'+     
'  </block>'+   
'  <block type="element_event_stop">'+  
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+    
'    </value>'+     
'  </block>'+    
'  <block type="elements_collision">'+
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
'  <block type="color_hextorgb">'+
'    <value name="color_">'+
'      <block type="colour_picker">'+
'       <field name="COLOUR">#ff0000</field>'+
'     </block>'+
'    </value>'+     
'  </block>'+ 
'  <block type="color_hextorgb">'+
'    <value name="color_">'+
'      <block type="colour_random">'+
'     </block>'+
'    </value>'+     
'  </block>'+      
'  <block type="color_hextorgb">'+
'    <value name="color_">'+
'      <block type="colour_rgb" id="~:cvP%,`n_{%23dgQNT=G|" x="222" y="93">'+
'        <value name="RED">'+
'          <block type="math_number" id="F-%*wH]f,^W0B3(UADA-">'+
'            <field name="NUM">100</field>'+
'          </block>'+
'        </value>'+
'        <value name="GREEN">'+
'          <block type="math_number" id=";FX7DY9fUJg!1sC:~*-j">'+
'            <field name="NUM">50</field>'+
'          </block>'+
'        </value>'+
'        <value name="BLUE">'+
'          <block type="math_number" id=",sFPNSlB?~qk,vHJ9rO?">'+
'            <field name="NUM">0</field>'+
'          </block>'+
'        </value>'+
'      </block>'+
'    </value>'+     
'  </block>'+ 
'<block type="color_hextorgb" id="6Nn(m:}$P303Rr=AsiP9" x="41" y="37">'+
'	<value name="color_">'+
'		<block type="colour_blend" id="(ec%23123jY5HWe/G@@$ro">'+
'			<value name="COLOUR1">'+
'				<block type="colour_picker" id="j9BOR;4D,ygU]nZRCBQk">'+
'				<field name="COLOUR">#ff0000</field>'+
'				</block>'+
'			</value>'+
'			<value name="COLOUR2">'+
'				<block type="colour_picker" id="R}Ag5juIem]qfP%[=F9N">'+
'				<field name="COLOUR">#3333ff</field>'+
'				</block>'+
'			</value>'+
'			<value name="RATIO">'+
'				<block type="math_number" id="FotbO*W2k-rT7(l7?GI=">'+
'				<field name="NUM">0.5</field>'+
'				</block>'+
'			</value>'+
'		</block>'+
'	</value>'+
'</block>'+    
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
'  <block type="transform_async_function">'+      
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
' </category></xml>';
