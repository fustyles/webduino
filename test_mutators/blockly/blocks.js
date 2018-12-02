Blockly.Blocks['mutators_test'] = {
  init: function() {
    this.appendValueInput("input_value0")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setMutator(new Blockly.Mutator(['input_value_with_item']));
    this.inputcount = '0';
  },
  mutationToDom: function (workspace) {
    var container = document.createElement('mutation');
    container.setAttribute('inputcount', this.inputcount);
    return container;
  },
  domToMutation: function (xmlElement) {
    this.inputcount = parseInt(xmlElement.getAttribute('inputcount'), 10);
    this.updateShape_();
  },
  decompose: function (workspace) {
    var containerBlock = workspace.newBlock('input_value_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.inputcount ; i++) {
      var itemBlock = workspace.newBlock('input_value_with_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  compose: function (containerBlock) {
    if (this.getInput('notify_sendstkpkg')) 
        this.removeInput("notify_sendstkpkg");
    if (this.getInput('notify_sendstkid')) 
	this.removeInput("notify_sendstkid");
    if (this.getInput('notify_sendimg_s')) 
	this.removeInput("notify_sendimg_s");
    if (this.getInput('notify_sendimg')) 
	this.removeInput("notify_sendimg");

    this.sendstk_ = '0';
    this.sendimg_ = '0';

    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    while (clauseBlock) {
        if(clauseBlock.type=='linenotify_item_sendstk'){
	    this.sendstk_ = '1';
	    var input1 = this.appendValueInput("notify_sendstkpkg")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.LINEBot_Sendstk)
		.appendField("STKPKGID :");
	    var input2 = this.appendValueInput("notify_sendstkid")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField("STKID :");

	    if (clauseBlock.Datastkpkg_ && clauseBlock.Datastkid_) {
		input1.connection.connect(clauseBlock.Datastkpkg_);
		input2.connection.connect(clauseBlock.Datastkid_);
	    }
        }
        else if(clauseBlock.type=='linenotify_item_sendimg'){
	    this.sendimg_ = '1';
	    var input1 = this.appendValueInput("notify_sendimg_s")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.LINEBot_Sendimg)
		.appendField(Blockly.Msg.LINEBot_SendimgP);
	    var input2 = this.appendValueInput("notify_sendimg")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.LINEBot_SendimgO);

	    if (clauseBlock.Dataimgs_ && clauseBlock.Dataimg_) {
		input1.connection.connect(clauseBlock.Dataimgs_);
		input2.connection.connect(clauseBlock.Dataimg_);
	    }
        }
        clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
    }
  },
  saveConnections: function (containerBlock) {
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    while (clauseBlock) {
        var datastkpkg = this.getInput('notify_sendstkpkg');
        var datastkid = this.getInput('notify_sendstkid');
        var dataimgs = this.getInput('notify_sendimg_s');
        var dataimg = this.getInput('notify_sendimg');

        clauseBlock.Datastkpkg_ = datastkpkg && datastkpkg.connection.targetConnection;
        clauseBlock.Datastkid_ = datastkid && datastkid.connection.targetConnection;
        clauseBlock.Dataimgs_ = dataimgs && dataimgs.connection.targetConnection;
        clauseBlock.Dataimg_ = dataimg && dataimg.connection.targetConnection;

        clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
    }
  },
  updateShape_: function() {
    if (this.getInput('notify_sendstkpkg')) 
	this.removeInput("notify_sendstkpkg");
    if (this.getInput('notify_sendstkid')) 
	this.removeInput("notify_sendstkid");
    if (this.getInput('notify_sendimg_s')) 
	this.removeInput("notify_sendimg_s");
    if (this.getInput('notify_sendimg')) 
	this.removeInput("notify_sendimg");

    if (this.sendstk_=='1') {
	this.appendValueInput("notify_sendstkpkg")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.LINEBot_Sendstk)
		.appendField("STKPKGID :");
	this.appendValueInput("notify_sendstkid")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField("STKID :");
    }
    if (this.sendimg_=='1') {
	this.appendValueInput("notify_sendimg_s")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.LINEBot_Sendimg)
		.appendField(Blockly.Msg.LINEBot_SendimgP);
	this.appendValueInput("notify_sendimg")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.LINEBot_SendimgO);
    }
  }
};
