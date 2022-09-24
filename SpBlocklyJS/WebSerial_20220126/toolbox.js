var catWebSerial ='<xml>'+
'<category name="%{BKY_CATSERIAL}" id="catwebserial" colour="250">'+
	'<block type="webserial_button">'+ 
	'</block>'+	
	'<block type="webserial_button_position">'+
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
	'<block type="webserial_button_onclick">'+
		'<value name="id_">'+
			'<block type="text">'+
				'<field name="TEXT"></field>'+
			'</block>'+
		'</value>'+
	'</block>'+ 
	'<block type="webserial_baudrate">'+ 
		'<field name="baudrate_">9600</field>'+
	'</block>'+ 
	'<block type="webserial_getdata">'+
	'</block>'+	
	'<block type="webserial_get">'+ 
	'</block>'+
	'<block type="webserial_getstate">'+ 
	'</block>'+ 
	'<block type="webserial_wait">'+ 
	'</block>'+ 
	'<block type="webserial_sendtext">'+
		'<value name="cmd_">'+
			'<block type="text">'+
				'<field name="TEXT"></field>'+
			'</block>'+
		'</value>'+
	'</block>'+
	'<block type="webserial_senduint8">'+
		'<value name="cmd_">'+
			'<block type="text">'+
				'<field name="TEXT"></field>'+
			'</block>'+
		'</value>'+
	'</block>'+
'</category>'+
'</xml>';	
