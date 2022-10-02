//*************** toolbox initial ******************	
let workspace = null;

function start() {
	
	// Create main workspace.
	var media = 'media/';
	workspace = Blockly.inject('blocklyDiv',
      	{
		media: media,
		//renderer: 'zelos',
        toolbox: document.getElementById('toolbox-categories'),
		zoom:{
			controls: true,
			wheel: false,
			startScale: 1.0,
			maxScale: 3,
			minScale: 0.3,
			scaleSpeed: 1.2
		},
		move: {
			scrollbars: {
			  horizontal: true,
			  vertical: true
			},
			drag: true,
			wheel: true
		},
		trashcan: true,
		plugins: {
		  'flyoutsVerticalToolbox': ContinuousFlyout,
		  'toolbox': ContinuousToolbox,	
		  'metricsManager': ContinuousMetrics,		  
		}
      	});
	
	var continuousFlyout = Blockly.getMainWorkspace().toolbox_.flyout_;
	continuousFlyout.setVisible(false);
	  
	//Double Click關閉彈出積木選單
	var blocklyWorkspace = document.getElementsByClassName("blocklyFlyout");
	for (var f=0;f<blocklyWorkspace.length;f++) {
		blocklyWorkspace[f].addEventListener('dblclick', function(){
			continuousFlyout.setVisible(false);
			Blockly.hideChaff();
		});
	}
	  
	//監聽工作區改變輸出程式碼
	var myTimer;
	function onWorkspaceChanged(event) {
		clearTimeout(myTimer);
		if (workspaceToCodeState) {
			if (event.type!="click"&&event.type!="viewport_change") {
				myTimer = setTimeout(function(){
					var code = Blockly.JavaScript.workspaceToCode(workspace);
					document.getElementById("code").value = code;		
				}, 200);
			}			
		}
		if ((event.type=="create"||event.type=="click"||event.type=="delete")&&continuousFlyout.isVisible_==true) {
			continuousFlyout.setVisible(false);
		}
		else if (event.type=="toolbox_item_select"&&continuousFlyout.isVisible_==false) {
			continuousFlyout.setVisible(true);
		}
	}
	workspace.addChangeListener(onWorkspaceChanged);
	
	//初始積木匯入工作區
	function startBlocks() {
		var xmlDoc = Blockly.Xml.textToDom('<xml xmlns="https://developers.google.com/blockly/xml"><block type="test1" x="100" y="100"><value name="message"><block type="text"><field name="TEXT">Hello World</field></block></value></block></xml>');
		Blockly.getMainWorkspace().clear();
		Blockly.Xml.domToWorkspace(xmlDoc, workspace);
	}

	//執行工作區程式碼
	function runCode(source) {
		if (source)
			var code = document.getElementById("code").value;
		else
			var code = Blockly.JavaScript.workspaceToCode(workspace);
		try {
			var iframe_code = "\<!DOCTYPE html\>\<html\>\<head\>\<meta charset='utf-8'\>\<meta http-equiv='Access-Control-Allow-Origin' content='*'\>\<meta http-equiv='Access-Control-Allow-Credentials' content='true'\>\<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'\>\<\/script\>\<\/head\>\<body\>\<script\>const delay=(seconds)=>{return new Promise((resolve)=>{setTimeout(resolve,seconds*1000);});};const main=async()=>{"
			+code
			+"};main();\<\/script\>\<\/body\>\<\/html\>";
			try {
				var stage = document.getElementById("stage");
				stage.src = "about:blank";
				setTimeout(function(){
					stage.contentWindow.document.open();
					stage.contentWindow.document.write(iframe_code);
					stage.contentWindow.document.close();
					stage.focus();
				}, 300);
			} catch (e) {
				alert(e);
			}			
		} catch (e) {
			alert(e);
		}
	}

	//工作區匯出網頁HTML檔案
	function workspaceExportToHTML() {
		  try {
			var code = Blockly.JavaScript.workspaceToCode(workspace);
			var html ='<!DOCTYPE HTML>\n' +
					  '<html>\n' +
					  '<head>\n' +
					  '  <meta charset="utf-8">\n' +
					  '  <meta charset="utf-8">\n' +					  
					  '  <title>Demo Blockly</title>\n' +
					  '  <meta http-equiv="Access-Control-Allow-Origin" content="*">\n' +
					  '  <meta http-equiv="Access-Control-Allow-Credentials" content="true">\n' +
					  '  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>\n' +
					  '</head>\n' +
					  '<body>\n' +
					  '<script>\n' +
					  'const delay=(seconds)=>{return new Promise((resolve)=>{setTimeout(resolve,seconds*1000);});};const main=async()=>{\n' + code + '};main();\n' +
					  '</script>\n' +
					  '</body>\n' +
					  '</html>';
					
			var link = document.createElement('a');
			link.download="index.html";
			link.href="data:application/octet-stream;utf-8," + encodeURIComponent(html);
			document.body.appendChild(link);
			link.click();
			link.remove();
		  } catch (e) {
			window.location.href="data:application/octet-stream;utf-8," + encodeURIComponent(xml);
			alert(e);
		  }		
	}	

	//工作區匯出積木結構XML檔案
	function workspaceExportToXML() {
		  try {
			var xml = Blockly.Xml.workspaceToDom(workspace);
			xml = Blockly.Xml.domToText(xml);

			var link = document.createElement('a');
			link.download="test.xml";
			link.href="data:application/octet-stream;utf-8," + encodeURIComponent(xml);
			document.body.appendChild(link);
			link.click();
			link.remove();
		  } catch (e) {
			window.location.href="data:application/octet-stream;utf-8," + encodeURIComponent(xml);
			alert(e);
		  }		
	}

	//工作區匯入積木結構XML檔案
	function workspaceImportFromXML() {
		var e = document.getElementById("importBlocks");
		if (e) {
			e.click();
			return;
		}

		var input=document.createElement('input');
		input.type="file";
		input.id="importBlocks";
		input.style.display = "none";
		input.accept=".xml";
		input.onchange = function(element) {
			try {	
				var file = this.files[0];
				if (file) {
					var fr = new FileReader();           
					fr.onload = function (event) {
						Blockly.getMainWorkspace().clear();
						var blocks = Blockly.Xml.textToDom(event.target.result);
						Blockly.Xml.domToWorkspace(blocks, Blockly.mainWorkspace);
					};
					fr.readAsText(file);
				}
			} catch (e) {
				alert(e);
			}	  
		}

		document.body.appendChild(input);
		setTimeout(function(){
			input.click();
		},500);	
	}
	
	//工作區調整大小
	function workspaceResize(h, v) {
		var header = document.getElementById("header");
		var stage = document.getElementById("stage");
		var code = document.getElementById("code");
		var blocklyDiv = document.getElementById('blocklyDiv');
		var resize_h = document.getElementById('resize_h');
		var resize_v = document.getElementById('resize_v');
		
		var headerHeight = Number(header.style.height.replace("px",""));
		if (document.documentElement.clientWidth)
			var workspaceWidth = document.documentElement.clientWidth;
		else
			var workspaceWidth = document.body.clientWidth;
		if (document.documentElement.clientHeight)
			var workspaceHeight = document.documentElement.clientHeight-headerHeight;
		else
			var workspaceHeight = document.body.clientHeight-headerHeight;		

		if	(v==0)
			var stageHeight = 400;
		else if	(v==1)	
			var stageHeight = 5;
		else if	(v==2)	
			var stageHeight = workspaceHeight;		
		stage.style.height = stageHeight+"px";
		
		if	(h==0)
			var stageWidth = 500;
		else if	(h==1)	
			var stageWidth = workspaceWidth - 240;
		else if	(h==2)
			var stageWidth = 5;
		stage.style.width = stageWidth + "px";

		blocklyDiv.style.width = (workspaceWidth-stageWidth)+"px";
		blocklyDiv.style.height = workspaceHeight+"px";	
		
		stage.style.top = (workspaceHeight-stageHeight+headerHeight)+"px";
		stage.style.left = (workspaceWidth-stageWidth)+"px";
		code.style.left = stage.style.left;
		code.style.height = (workspaceHeight-stageHeight)+"px";
		code.style.width = (stageWidth-5) + "px";
		
		resize_h.style.top = (headerHeight+10)+"px";
		resize_h.style.left = (workspaceWidth-stageWidth-65)+"px";
		resize_v.style.top = (headerHeight+50)+"px";
		resize_v.style.left = (workspaceWidth-stageWidth-65)+"px";			
		
		Blockly.svgResize(workspace);
	}
	
	var layout_h = 0;
	var layout_v = 0;
	document.getElementById('resize_h').addEventListener('click', function(event){
		layout_h++;
		layout_h = layout_h%3;
		workspaceResize(layout_h, layout_v);
	});	

	document.getElementById('resize_v').addEventListener('click', function(event){
		layout_v++;
		layout_v = layout_v%3;
		workspaceResize(layout_h, layout_v);
	});		
	
	window.addEventListener('keydown', function(event){
		if (event.ctrlKey&&event.shiftKey&&!event.repeat) {
			runCode(true);
		}
	});	

	document.addEventListener("DOMContentLoaded", function(event) {
		workspaceResize(0, 0);
	})

	window.addEventListener("resize", function(){
		workspaceResize(0, 0);
	})	
	
	workspaceResize(0, 0);
	
	//新增工作區功能選單 執行積木程式碼
	function registerRunCode() {
	  if (Blockly.ContextMenuRegistry.registry.getItem('workspace_run_code')) {
		return;
	  }
	  const workspaceRunCode = {
		displayText: function(){
			return Blockly.Msg["WORKSPACE_RUNCODE"];
		},
		preconditionFn: function(a) {
			return 'enabled';
		},
		callback: function(a) {
			runCode(true);
		},
		scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,id: 'workspace_run_code',
		weight: 200,
	  };
	  Blockly.ContextMenuRegistry.registry.register(workspaceRunCode);
	} 
	registerRunCode();		

	//新增工作區功能選單 重設工作區
	function registerWorkspaceReset() {
	  if (Blockly.ContextMenuRegistry.registry.getItem('workspace_reset')) {
		return;
	  }
	  const workspaceReset = {
		displayText: function(){
			return Blockly.Msg["WORKSPACE_RESET"];
		},
		preconditionFn: function(a) {
			return 'enabled';
		},
		callback: function(a) {
			startBlocks();
		},
		scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,id: 'workspace_reset',
		weight: 201,
	  };
	  Blockly.ContextMenuRegistry.registry.register(workspaceReset);
	}
	registerWorkspaceReset();

	//新增工作區功能選單 匯出積木結構XML檔
	function registerWorkspaceBlocksExportToXML() {
	  if (Blockly.ContextMenuRegistry.registry.getItem('workspace_blocks_export_xml')) {
		return;
	  }
	  const workspaceBlocksExportToXML = {
		displayText: function(){
			return Blockly.Msg["WORKSPACE_BLOCKS_EXPORT_XML_MSG"];
		},
		preconditionFn: function(a) {
			return 'enabled';
		},
		callback: function(a) {
			workspaceExportToXML();
		},
		scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,id: 'workspace_blocks_export_xml',
		weight: 202,
	  };
	  Blockly.ContextMenuRegistry.registry.register(workspaceBlocksExportToXML);
	}
	registerWorkspaceBlocksExportToXML();

	//新增工作區功能選單 匯入積木結構XML檔
	function registerWorkspaceBlocksImportFromXML() {
	  if (Blockly.ContextMenuRegistry.registry.getItem('workspace_blocks_import_xml')) {
		return;
	  }
	  const workspaceBlocksImportFromXML = {
		displayText: function(){
			return Blockly.Msg["WORKSPACE_BLOCKS_IMPORT_XML_MSG"];
		},
		preconditionFn: function(a) {
			return 'enabled';
		},
		callback: function(a) {
			workspaceImportFromXML();
		},
		scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,id: 'workspace_blocks_import_xml',
		weight: 203,
	  };
	  Blockly.ContextMenuRegistry.registry.register(workspaceBlocksImportFromXML);
	}
	registerWorkspaceBlocksImportFromXML();

	//新增工作區功能選單 匯出網頁HTML檔
	function registerWorkspaceBlocksExportToHTML() {
	  if (Blockly.ContextMenuRegistry.registry.getItem('workspace_blocks_export_html')) {
		return;
	  }
	  const workspaceBlocksExportToHTML = {
		displayText: function(){
			return Blockly.Msg["WORKSPACE_BLOCKS_EXPORT_HTML_MSG"];
		},
		preconditionFn: function(a) {
			return 'enabled';
		},
		callback: function(a) {
			workspaceExportToHTML();
		},
		scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,id: 'workspace_blocks_export_html',
		weight: 204,
	  };
	  Blockly.ContextMenuRegistry.registry.register(workspaceBlocksExportToHTML);
	}
	registerWorkspaceBlocksExportToHTML();
	
	//新增工作區功能選單 即時輸出積木程式碼
	var workspaceToCodeState = true;
	function registerWorkspaceBlocksToCode() {
	  if (Blockly.ContextMenuRegistry.registry.getItem('workspace_blocks_to_code')) {
		return;
	  }
	  const workspaceBlocksToCode = {
		displayText: function(){
			if (workspaceToCodeState)
				return Blockly.Msg["WORKSPACE_TO_CODE_N_MSG"];
			else
				return Blockly.Msg["WORKSPACE_TO_CODE_Y_MSG"];
		},
		preconditionFn: function(a) {
			return 'enabled';
		},
		callback: function(a) {
			workspaceToCodeState = !workspaceToCodeState;
		},
		scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,id: 'workspace_blocks_to_code',
		weight: 205,
	  };
	  Blockly.ContextMenuRegistry.registry.register(workspaceBlocksToCode);
	}
	registerWorkspaceBlocksToCode();	
	
}

