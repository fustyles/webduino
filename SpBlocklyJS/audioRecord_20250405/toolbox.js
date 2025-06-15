var catAudioRecording ='<xml>'+
'<category name="%{BKY_CATAUDIORECORD}" id="cataudiorecording" colour="250">'+
	'<block type="audiorecord_save_initial">'+
		'<value name="index_">'+
			'<block type="math_number">'+
				'<field name="NUM">0</field>'+
			'</block>'+
		'</value>'+ 		
	'</block>'+	
	'<block type="audiorecord_openai_initial">'+
		'<value name="index_">'+
			'<block type="math_number">'+
				'<field name="NUM">0</field>'+
			'</block>'+
		'</value>'+ 	
		'<value name="key_">'+
		'    <block type="text">'+
		'        <field name="TEXT"></field>'+
		'    </block>'+
		'</value>'+
		'<value name="prompt_">'+
		'    <block type="text">'+
		'        <field name="TEXT">Please transcribe the audio into text.</field>'+
		'    </block>'+
		'</value>'+			
	'</block>'+		
	'<block type="audiorecord_openai_get">'+
	'</block>'+		
	'<block type="audiorecord_gemini_initial">'+
		'<value name="index_">'+
			'<block type="math_number">'+
				'<field name="NUM">0</field>'+
			'</block>'+
		'</value>'+ 	
		'<value name="key_">'+
		'    <block type="text">'+
		'        <field name="TEXT"></field>'+
		'    </block>'+
		'</value>'+
		'<value name="prompt_">'+
		'    <block type="text">'+
		'        <field name="TEXT">Please transcribe the audio into text.</field>'+
		'    </block>'+
		'</value>'+			
	'</block>'+	
	'<block type="audiorecord_gemini_get">'+
	'</block>'+
	'<block type="audiorecord_run">'+
	'</block>'+	
	'<block type="audiorecord_audio_get">'+
	'</block>'+		
'</category>'+
'</xml>';	
