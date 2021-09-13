// Inject Blockly.<br>
const workspace = Blockly.inject('blocklyDiv', {<br>
&nbsp;&nbsp;&nbsp;&nbsp;toolbox: toolboxCategories,<br>
});<br><br>

// Initialize plugin.<br>
const myBackpack = new MyBackpack(workspace);<br><br>

// Initialize plugin.<br>
const myBackpack = new MyBackpack(workspace, "category_functions" , true);&nbsp;&nbsp;&nbsp;&nbsp;//true (insert After "category_functions"), false (insert Before "category_functions")
