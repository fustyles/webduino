// Inject Blockly.<br>
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolboxCategories,
});<br><br>

// Initialize plugin. (appendChild)<br>
const myBackpack = new MyBackpack(workspace);<br><br>

// Initialize plugin.  (parameter 3 -> true: inserAfter, false:insertBefore, null:appendChild)<br>
const myBackpack = new MyBackpack(workspace, "category_functions" , true);   
