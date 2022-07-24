var catChart = '<xml>'+
'<category name="%{BKY_CATCHART}" id="catChart" colour="350">'+	  
	'<category name="%{BKY_CATCHARTDOUGHNUT}" id="CATCHARTDOUGHNUT">'+	
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
	  '<category name="%{BKY_CATCHARTGAUGE}" id="CATCHARTGAUGE">'+	
	  '<block type="chart_gauge_create">'+
	    '<value name="id">'+
		  '<block type="text">'+
			'<field name="TEXT"></field>'+
		  '</block>'+
		'</value>'+		  
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
	  '<block type="chart_gauge_set">'+
	    '<value name="id">'+
		  '<block type="text">'+
			'<field name="TEXT"></field>'+
		  '</block>'+
		'</value>'+	
'        <value name="val">'+	  
'          <block type="math_number">'+
'            <field name="NUM">28</field>'+
'          </block>'+
'        </value>'+	
	  '</block>'+  
	'</category>'+		  
	
	
	  '<category name="%{BKY_CATCHARTWATERBUBBLE}" id="CATCHARTWATERBUBBLE">'+	
	  '<block type="chart_waterbubble_create">'+
	    '<value name="id">'+
		  '<block type="text">'+
			'<field name="TEXT"></field>'+
		  '</block>'+
		'</value>'+		  
	    '<value name="name">'+
		  '<block type="text">'+
			'<field name="TEXT">水位</field>'+
		  '</block>'+
		'</value>'+	
'        <value name="radius">'+	  
'          <block type="math_number">'+
'            <field name="NUM">100</field>'+
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
	    '<value name="unit">'+
		  '<block type="text">'+
			'<field name="TEXT">%</field>'+
		  '</block>'+
		'</value>'+	
	    '<value name="watercolor">'+
'    		<block type="colour_picker">'+
'    			<field name="COLOUR">#0000ff</field>'+
'    		</block>'+
		'</value>'+	
	    '<value name="textcolor">'+
'    		<block type="colour_picker">'+
'    			<field name="COLOUR">#000000</field>'+
'    		</block>'+
		'</value>'+			
	  '</block>'+	
	  '<block type="chart_waterbubble_set">'+
	    '<value name="id">'+
		  '<block type="text">'+
			'<field name="TEXT"></field>'+
		  '</block>'+
		'</value>'+	
'        <value name="val">'+	  
'          <block type="math_number">'+
'            <field name="NUM">60</field>'+
'          </block>'+
'        </value>'+	
	  '</block>'+  
	'</category>'+		  	
'</category>'+	
'</xml>';	
