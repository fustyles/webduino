var catWebBluetooth ='<xml>'+
'<category name="%{BKY_CATBLUETOOTH}" id="catwebbluetooth" colour="140">'+
	'<block type="webbluetooth_button">'+ 
	'</block>'+	
	'<block type="webbluetooth_button_position">'+
		'<value name="left_">'+
			'<block type="math_number">'+
				'<field name="NUM">0</field>'+
			'</block>'+
		'</value>'+ 
		'<value name="top_">'+
			'<block type="math_number">'+
				'<field name="NUM">0</field>'+
			'</block>'+
		'</value>'+ 
	'</block>'+
	'<block type="webbluetooth_button_onclick">'+
		'<value name="id_">'+
			'<block type="text">'+
				'<field name="TEXT"></field>'+
			'</block>'+
		'</value>'+
	'</block>'+ 
	'<block type="webbluetooth_uuid">'+
		'<value name="service">'+
			'<block type="text">'+
				'<field name="TEXT">4fafc201-1fb5-459e-8fcc-c5c9c331914b</field>'+
			'</block>'+
		'</value>'+
		'<value name="tx">'+
			'<block type="text">'+
				'<field name="TEXT">beb5483e-36e1-4688-b7f5-ea07361b26a8</field>'+
			'</block>'+
		'</value>'+
		'<value name="rx">'+
			'<block type="text">'+
				'<field name="TEXT">498c599b-2601-4600-bb7e-3aa295a92842</field>'+
			'</block>'+
		'</value>'+		
	'</block>'+
	'<block type="webbluetooth_getdata">'+
	'</block>'+	
	'<block type="webbluetooth_get">'+ 
	'</block>'+	
	'<block type="webbluetooth_getstate">'+ 
	'</block>'+ 	
	'<block type="webbluetooth_wait">'+ 
	'</block>'+ 
	'<block type="webbluetooth_sendtext">'+
		'<value name="cmd_">'+
			'<block type="text">'+
				'<field name="TEXT"></field>'+
			'</block>'+
		'</value>'+
	'</block>'+	
	'<block type="webbluetooth_stop">'+ 
	'</block>'+ 	
'</category>'+
'</xml>';	
