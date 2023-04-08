//main.html<br>
<script src="myMutator.js"></script><br><br>
// Initialize plugin.<br>
Blockly.Blocks['ifttt'] = {<br>
  init: function() {<br>
	//etc<br>
	this.setMutator(new myMutator([], this));	<br>
  } <br>
};<br>
