Blockly.Blocks['mutators_test'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.LINENotify_Set)
        .appendField(new Blockly.FieldVariable("linenotify"), "name_");
    this.appendValueInput("notify_sendmsg")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LINEBot_Sendmsg);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("https://buberhu.blogspot.com/2018/10/webduinolineline-notify.html");
    this.setMutator(new Blockly.Mutator(['linenotify_item_sendstk','linenotify_item_sendimg'])); //add setMutator

    this.sendstk_ = '0';
    this.sendimg_ = '0';
  },
  mutationToDom: function (workspace) {
    var container = document.createElement('mutation');
	container.setAttribute('sendstk', this.sendstk_);
	container.setAttribute('sendimg', this.sendimg_);
    return container;
  },
  domToMutation: function (xmlElement) {
    this.sendstk_ = xmlElement.getAttribute('sendstk');
    this.sendimg_ = xmlElement.getAttribute('sendimg');
    this.updateShape_();
  },
  decompose: function (workspace) {
    var containerBlock = workspace.newBlock('linenotify_item_container');
    containerBlock.initSvg();

    var connection = containerBlock.getInput('STACK').connection;

    if (this.sendstk_=='1') {
        var stkBlock = workspace.newBlock('linenotify_item_sendstk');
	stkBlock.initSvg();
	connection.connect(stkBlock.previousConnection);
    }
    if (this.sendimg_=='1') {
	var imgBlock = workspace.newBlock('linenotify_item_sendimg');
	imgBlock.initSvg();
	connection.connect(imgBlock.previousConnection);
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
