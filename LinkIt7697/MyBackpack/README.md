// Inject Blockly.<br>
const workspace = Blockly.inject('blocklyDiv', {<br>
    toolbox: toolboxCategories,<br>
});<br><br>

// Initialize plugin.<br>
const myBackpack = new MyBackpack(workspace);<br><br>

// Initialize plugin.<br>
const myBackpack = new MyBackpack(workspace, "category_functions" , true);    //parameter 3 -> true: inserAfter, false: insertBefore
