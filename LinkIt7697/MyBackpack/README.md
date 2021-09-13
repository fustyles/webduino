<script src="mybackpack.js"></script><br><br>

// Inject Blockly.<br>
const workspace = Blockly.inject('blocklyDiv', {<br>
&nbsp;&nbsp;&nbsp;&nbsp;toolbox: toolboxCategories,<br>
});<br><br>

// Initialize plugin.<br>
const myBackpack = new MyBackpack(workspace);<br><br>

// Initialize plugin.<br>
const myBackpack = new MyBackpack(workspace, "category_functions" , true);<br>
//Parameter 2 --> Category ID<br>
//Parameter 3 --> true: insertAfter, false :insertBefore
