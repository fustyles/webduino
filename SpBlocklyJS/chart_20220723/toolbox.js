var catChart = '<xml>'+
'<category name="%{BKY_CATCHART}" id="catChart" colour="160">'+	  
	'<category name="%{BKY_CATCANALOGGAUGE}" id="CATCANALOGGAUGE">'+	
	  '<block type="chart_analoggauge_create">'+
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
'            <field name="NUM">300</field>'+
'          </block>'+
'        </value>'+
'        <value name="height">'+	  
'          <block type="math_number">'+
'            <field name="NUM">300</field>'+
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
			'<field name="TEXT">°C</field>'+
		  '</block>'+
		'</value>'+	
	    '<value name="count">'+
'          <block type="math_number">'+
'            <field name="NUM">10</field>'+
'          </block>'+
		'</value>'+	
	    '<value name="angle">'+
'          <block type="math_number">'+
'            <field name="NUM">120</field>'+
'          </block>'+
		'</value>'+		
	    '<value name="color">'+
'		  <block type="lists_create_with">'+
'			<mutation items="1"></mutation>'+
'			<value name="ADD0">'+
'			  <block type="chart_analoggauge_colorset">'+
'				<value name="val">'+
'				  <block type="math_number">'+
'					<field name="NUM">0</field>'+
'				  </block>'+
'				</value>'+
'				<value name="color">'+
'				  <block type="colour_picker">'+
'					<field name="COLOUR">#33ff33</field>'+
'				  </block>'+
'				</value>'+
'			  </block>'+
'			</value>'+
'		  </block>'+
'		</value>'+			
'	  </block>'+
	  '<block type="chart_analoggauge_colorset">'+
'        <value name="val">'+	  
'          <block type="math_number">'+
'            <field name="NUM">0</field>'+
'          </block>'+
'        </value>'+	
	    '<value name="color">'+
'    		<block type="colour_picker">'+
'    			<field name="COLOUR">#ff0000</field>'+
'    		</block>'+
		'</value>'+	
	  '</block>'+ 	  
	  '<block type="chart_analoggauge_set">'+
	    '<value name="id">'+
		  '<block type="text">'+
			'<field name="TEXT"></field>'+
		  '</block>'+
		'</value>'+	
'        <value name="val">'+	  
'          <block type="math_number">'+
'            <field name="NUM">0</field>'+
'          </block>'+
'        </value>'+	
	  '</block>'+  
	  '</category>'+
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
	'<category name="%{BKY_CATCHARTSWITCH}" id="CATCHARTSWITCH">'+	
	  '<block type="chart_switch_create">'+
	    '<value name="id">'+
		  '<block type="text">'+
			'<field name="TEXT"></field>'+
		  '</block>'+
		'</value>'+	
'        <value name="width">'+	  
'          <block type="math_number">'+
'            <field name="NUM">50</field>'+
'          </block>'+
'        </value>'+
'        <value name="height">'+	  
'          <block type="math_number">'+
'            <field name="NUM">20</field>'+
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
	    '<value name="text">'+
		  '<block type="text">'+
			'<field name="TEXT">開關</field>'+
		  '</block>'+
		'</value>'+	
'        <value name="size">'+	  
'          <block type="math_number">'+
'            <field name="NUM">14</field>'+
'          </block>'+
'        </value>'+
	    '<value name="color">'+
'    		<block type="colour_picker">'+
'    			<field name="COLOUR">#ff0000</field>'+
'    		</block>'+
		'</value>'+			
	  '</block>'+	
	  '<block type="chart_switch_set">'+
	    '<value name="id">'+
		  '<block type="text">'+
			'<field name="TEXT"></field>'+
		  '</block>'+
		'</value>'+
	  '</block>'+  
	  '<block type="chart_switch_get">'+
	    '<value name="id">'+
		  '<block type="text">'+
			'<field name="TEXT"></field>'+
		  '</block>'+
		'</value>'+
	  '</block>'+  	  
	  '</category>'+	
	  '<category name="%{BKY_CATLINECHART}" id="CATLINECHART">'+	
	  '    <block type="chart_line_create">'+
	  '        <value name="id">'+
	  '          <block type="text">'+
	  '            <field name="TEXT"></field>'+
	  '          </block>'+
	  '        </value>'+
	  '        <value name="width">'+
	  '          <block type="math_number">'+
	  '            <field name="NUM">600</field>'+
	  '          </block>'+
	  '        </value>'+
	  '        <value name="height">'+
	  '          <block type="math_number">'+
	  '            <field name="NUM">400</field>'+
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
	  '        <value name="count">'+
	  '          <block type="math_number">'+
	  '            <field name="NUM">10</field>'+
	  '          </block>'+
	  '        </value>'+
	  '        <value name="title">'+
	  '          <block type="text">'+
	  '            <field name="TEXT">溫溼度圖表</field>'+
	  '          </block>'+
	  '        </value>'+
	  '        <value name="titlex">'+
	  '          <block type="text">'+
	  '            <field name="TEXT">時間</field>'+
	  '          </block>'+
	  '        </value>'+
	  '        <value name="titley">'+
	  '          <block type="text">'+
	  '            <field name="TEXT">數值</field>'+
	  '          </block>'+
	  '        </value>'+
	  '        <value name="dataset">'+
	  '          <block type="lists_create_with">'+
	  '            <mutation items="2"></mutation>'+
	  '            <value name="ADD0">'+
	  '              <block type="chart_line_dataset" inline="false">'+
	  '                <value name="label">'+
	  '                  <block type="text">'+
	  '                    <field name="TEXT">溫度</field>'+
	  '                  </block>'+
	  '                </value>'+
	  '                <value name="borderColor">'+
	  '                  <block type="colour_picker">'+
	  '                    <field name="COLOUR">#ff0000</field>'+
	  '                  </block>'+
	  '                </value>'+
	  '                <value name="backgroundColor">'+
	  '                  <block type="colour_picker">'+
	  '                    <field name="COLOUR">#000000</field>'+
	  '                  </block>'+
	  '                </value>'+
	  '              </block>'+
	  '            </value>'+
	  '            <value name="ADD1">'+
	  '              <block type="chart_line_dataset" inline="false">'+
	  '                <value name="label">'+
	  '                  <block type="text">'+
	  '                    <field name="TEXT">濕度</field>'+
	  '                  </block>'+
	  '                </value>'+
	  '                <value name="borderColor">'+
	  '                  <block type="colour_picker">'+
	  '                    <field name="COLOUR">#0000ff</field>'+
	  '                  </block>'+
	  '                </value>'+
	  '                <value name="backgroundColor">'+
	  '                  <block type="colour_picker">'+
	  '                    <field name="COLOUR">#000000</field>'+
	  '                  </block>'+
	  '                </value>'+
	  '              </block>'+
	  '            </value>'+
	  '          </block>'+
	  '        </value>'+
	  '      </block>'+
	  '      <block type="chart_line_dataset" inline="false">'+
	  '        <value name="label">'+
	  '          <block type="text">'+
	  '            <field name="TEXT">溫度</field>'+
	  '          </block>'+
	  '        </value>'+
	  '        <value name="borderColor">'+
	  '          <block type="colour_picker">'+
	  '            <field name="COLOUR">#ff0000</field>'+
	  '          </block>'+
	  '        </value>'+
	  '        <value name="backgroundColor">'+
	  '          <block type="colour_picker">'+
	  '            <field name="COLOUR">#000000</field>'+
	  '          </block>'+
	  '        </value>'+
	  '      </block>'+	  
	  '      <block type="chart_line_set" inline="false">'+
	  '        <value name="id">'+
	  '          <block type="text">'+
	  '            <field name="TEXT"></field>'+
	  '          </block>'+
	  '        </value>'+
	  '        <value name="datax">'+
	  '          <block type="system_datetime_get">'+
	  '            <field name="type">time</field>'+
	  '          </block>'+
	  '        </value>'+
	  '        <value name="dataset">'+
	  '      	 <block type="lists_create_with">'+
	  '            <mutation items="2"></mutation>'+
	  '            <value name="ADD0">'+
	  '              <block type="math_number">'+
	  '                <field name="NUM">1</field>'+
	  '              </block>'+
	  '            </value>'+
	  '            <value name="ADD1">'+
	  '              <block type="math_number">'+
	  '                <field name="NUM">2</field>'+
	  '              </block>'+
	  '            </value>'+
	  '          </block>'+
	  '        </value>'+
	  '      </block>'+
	  '      <block type="chart_line_clear">'+
	  '        <value name="id">'+
	  '          <block type="text">'+
	  '            <field name="TEXT"></field>'+
	  '          </block>'+
	  '        </value>'+	  
	  '      </block>'+	  
	'</category>'+		
	
	  '<category name="%{BKY_CATBARCHART}" id="CATBARCHART">'+	
	  '    <block type="chart_bar_create">'+
	  '        <value name="id">'+
	  '          <block type="text">'+
	  '            <field name="TEXT"></field>'+
	  '          </block>'+
	  '        </value>'+
	  '        <value name="width">'+
	  '          <block type="math_number">'+
	  '            <field name="NUM">600</field>'+
	  '          </block>'+
	  '        </value>'+
	  '        <value name="height">'+
	  '          <block type="math_number">'+
	  '            <field name="NUM">400</field>'+
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
	  '        <value name="count">'+
	  '          <block type="math_number">'+
	  '            <field name="NUM">10</field>'+
	  '          </block>'+
	  '        </value>'+
	  '        <value name="title">'+
	  '          <block type="text">'+
	  '            <field name="TEXT">溫溼度圖表</field>'+
	  '          </block>'+
	  '        </value>'+
	  '        <value name="titlex">'+
	  '          <block type="text">'+
	  '            <field name="TEXT">時間</field>'+
	  '          </block>'+
	  '        </value>'+
	  '        <value name="titley">'+
	  '          <block type="text">'+
	  '            <field name="TEXT">數值</field>'+
	  '          </block>'+
	  '        </value>'+
	  '        <value name="dataset">'+
	  '          <block type="lists_create_with">'+
	  '            <mutation items="2"></mutation>'+
	  '            <value name="ADD0">'+
	  '              <block type="chart_bar_dataset" inline="false">'+
	  '                <value name="label">'+
	  '                  <block type="text">'+
	  '                    <field name="TEXT">溫度</field>'+
	  '                  </block>'+
	  '                </value>'+
	  '                <value name="borderColor">'+
	  '                  <block type="colour_picker">'+
	  '                    <field name="COLOUR">#ff0000</field>'+
	  '                  </block>'+
	  '                </value>'+
	  '                <value name="backgroundColor">'+
	  '                  <block type="colour_picker">'+
	  '                    <field name="COLOUR">#ff0000</field>'+
	  '                  </block>'+
	  '                </value>'+
	  '              </block>'+
	  '            </value>'+
	  '            <value name="ADD1">'+
	  '              <block type="chart_bar_dataset" inline="false">'+
	  '                <value name="label">'+
	  '                  <block type="text">'+
	  '                    <field name="TEXT">濕度</field>'+
	  '                  </block>'+
	  '                </value>'+
	  '                <value name="borderColor">'+
	  '                  <block type="colour_picker">'+
	  '                    <field name="COLOUR">#0000ff</field>'+
	  '                  </block>'+
	  '                </value>'+
	  '                <value name="backgroundColor">'+
	  '                  <block type="colour_picker">'+
	  '                    <field name="COLOUR">#0000ff</field>'+
	  '                  </block>'+
	  '                </value>'+
	  '              </block>'+
	  '            </value>'+
	  '          </block>'+
	  '        </value>'+
	  '      </block>'+
	  '      <block type="chart_bar_dataset" inline="false">'+
	  '        <value name="label">'+
	  '          <block type="text">'+
	  '            <field name="TEXT">溫度</field>'+
	  '          </block>'+
	  '        </value>'+
	  '        <value name="borderColor">'+
	  '          <block type="colour_picker">'+
	  '            <field name="COLOUR">#ff0000</field>'+
	  '          </block>'+
	  '        </value>'+
	  '        <value name="backgroundColor">'+
	  '          <block type="colour_picker">'+
	  '            <field name="COLOUR">#ff0000</field>'+
	  '          </block>'+
	  '        </value>'+
	  '      </block>'+	  
	  '      <block type="chart_bar_set" inline="false">'+
	  '        <value name="id">'+
	  '          <block type="text">'+
	  '            <field name="TEXT"></field>'+
	  '          </block>'+
	  '        </value>'+
	  '        <value name="datax">'+
	  '          <block type="system_datetime_get">'+
	  '            <field name="type">time</field>'+
	  '          </block>'+
	  '        </value>'+
	  '        <value name="dataset">'+
	  '      	 <block type="lists_create_with">'+
	  '            <mutation items="2"></mutation>'+
	  '            <value name="ADD0">'+
	  '              <block type="math_number">'+
	  '                <field name="NUM">1</field>'+
	  '              </block>'+
	  '            </value>'+
	  '            <value name="ADD1">'+
	  '              <block type="math_number">'+
	  '                <field name="NUM">2</field>'+
	  '              </block>'+
	  '            </value>'+
	  '          </block>'+
	  '        </value>'+
	  '      </block>'+
	  '      <block type="chart_bar_clear">'+
	  '        <value name="id">'+
	  '          <block type="text">'+
	  '            <field name="TEXT"></field>'+
	  '          </block>'+
	  '        </value>'+	  
	  '      </block>'+	  
	'</category>'+		
'</category>'+	
'</xml>';	
