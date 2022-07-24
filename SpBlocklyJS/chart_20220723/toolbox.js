var catChartDoughnut = '<xml>'+
'<category name="%{BKY_CATCHART}" id="catChart" colour="350">'+	
	'<category name="%{BKY_CATCHARTDOUGHNUT}" id="catChartDoughnut">'+	  
	  '<block type="chart_doughnut_create">'+
	    '<value name="name">'+
		  '<block type="text">'+
			'<field name="TEXT">溫度</field>'+
		  '</block>'+
		'</value>'+	
'        <value name="width">'+	  
'          <block type="math_number">'+
'            <field name="NUM">150</field>'+
'          </block>'+
'        </value>'+
'        <value name="height">'+	  
'          <block type="math_number">'+
'            <field name="NUM">150</field>'+
'          </block>'+
'        </value>'+
'        <value name="left">'+	  
'          <block type="math_number">'+
'            <field name="NUM">0</field>'+
'          </block>'+
'        </value>'+
'        <value name="top">'+	  
'          <block type="math_number">'+
'            <field name="NUM">0</field>'+
'          </block>'+
'        </value>'+
'        <value name="val">'+	  
'          <block type="math_number">'+
'            <field name="NUM">0</field>'+
'          </block>'+
'        </value>'+
'        <value name="min">'+	  
'          <block type="math_number">'+
'            <field name="NUM">0</field>'+
'          </block>'+
'        </value>'+
'        <value name="max">'+	  
'          <block type="math_number">'+
'            <field name="NUM">100</field>'+
'          </block>'+
'        </value>'+
'        <value name="decimal">'+	  
'          <block type="math_number">'+
'            <field name="NUM">0</field>'+
'          </block>'+
'        </value>'+
'        <value name="labelsize">'+	  
'          <block type="math_number">'+
'            <field name="NUM">14</field>'+
'          </block>'+
'        </value>'+
'        <value name="valuesize">'+	  
'          <block type="math_number">'+
'            <field name="NUM">10</field>'+
'          </block>'+
'        </value>'+
	    '<value name="unit">'+
		  '<block type="text">'+
			'<field name="TEXT">°C</field>'+
		  '</block>'+
		'</value>'+	
	    '<value name="color">'+
'    		<block type="colour_picker">'+
'    			<field name="COLOUR">#ff0000</field>'+
'    		</block>'+
		'</value>'+			
	  '</block>'+	
	  '<block type="chart_doughnut_set">'+
	    '<value name="name">'+
		  '<block type="text">'+
			'<field name="TEXT">溫度</field>'+
		  '</block>'+
		'</value>'+	
'        <value name="val">'+	  
'          <block type="math_number">'+
'            <field name="NUM">28</field>'+
'          </block>'+
'        </value>'+	
	  '</block>'+  
    '</category>'+
'</category>'+	
'</xml>';	
