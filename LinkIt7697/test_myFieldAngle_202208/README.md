Blockly.Blocks["test"] = {<br>
	init:  function() {<br>
		var field = new myFieldAngle(30);<br>
		field.options = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360];<br>
		this.appendDummyInput()<br>
			.appendField(field, "test");<br><br>
			
		//etc...<br>
	}<br>
}<br>

<br><br>
<img src="https://fustyles.github.io/webduino/LinkIt7697/test_myFieldAngle_202208/myFieldAngle.png">
