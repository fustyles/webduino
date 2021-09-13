// Inject Blockly.
const workspace = Blockly.inject('blocklyDiv', {
  toolbox: toolboxCategories,
});

// Initialize plugin. (appendChild)
const myBackpack = new MyBackpack(workspace);

// Initialize plugin.  (parameter 3 -> true: inserAfter, false:insertBefore, null:appendChild)
const myBackpack = new MyBackpack(workspace, "category_functions" , true);   
