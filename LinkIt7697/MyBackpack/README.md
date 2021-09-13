// Inject Blockly.<br>
const workspace = Blockly.inject('blocklyDiv', <br>&nbsp;&nbsp;{<br>
&nbsp;&nbsp;&nbsp;&nbsp;toolbox: toolboxCategories,<br>
&nbsp;&nbsp;}<br>
);<br><br>

// Initialize plugin.<br>
const myBackpack = new MyBackpack(workspace);<br><br>

// Initialize plugin.<br>
const myBackpack = new MyBackpack(workspace, "category_functions" , true);    //true(insertAfter), false(insertBefore)
