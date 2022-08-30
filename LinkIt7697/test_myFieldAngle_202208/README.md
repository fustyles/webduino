Blockly.Blocks["test"] = {
	init:  function() {
		var field = new myFieldAngle(30);
		field.options = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360];
		this.appendDummyInput()
			.appendField(field, "test");
		//etc...
	}
}
<img src="https://fustyles.github.io/webduino/LinkIt7697/test_myFieldAngle_202208/myFieldAngle.png">
