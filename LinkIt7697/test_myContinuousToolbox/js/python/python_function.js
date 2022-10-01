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
			myTimer = setTimeout(function(){
				var code = Blockly.Python.workspaceToCode(workspace);
				document.getElementById("code").value = code;		
			}, 200);			
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
		Blockly.getMainWorkspace().clear();
		Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), workspace);
	}	
	
	//工作區匯出PY檔案
	function workspaceExportToPY() {
		  try {
			var code = Blockly.Python.workspaceToCode(workspace);
					
			var link = document.createElement('a');
			link.download="test.py";
			link.href="data:application/octet-stream;utf-8," + encodeURIComponent(code);
			document.body.appendChild(link);
			link.click();
			link.remove();
		  } catch (e) {
			window.location.href="data:application/octet-stream;utf-8," + encodeURIComponent(xml);
			alert(e);
		  }		
	}

	//工作區執行程式碼
	function runCode(source) {
		if (typeof require !== "undefined") {
			var filePath = "temp.py";
			const fs = require('fs');
			if (source)
				var code = document.getElementById("code").value;
			else
				var code = Blockly.Python.workspaceToCode(workspace);
			fs.writeFile(filePath, code, (err) => { 
				if (err) { 
					console.log(err);
				} else {
					var message = "";
					
					var exec = require('child_process').exec;
					var cmd = '';
					var res = exec('py '+filePath+' '+cmd, {encoding: 'arraybuffer'});
					var iconv = require('iconv-lite');					
					
					res.stdout.on('data', function(data) {
						data = iconv.decode(data, 'big5');
						data = data.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/ /g,"&nbsp;");
						message += data.replace(/ /g,"&nbsp;").replace(/\n/g,'<br>');
					});

					res.stderr.on('data', function(data) {
						data = iconv.decode(data, 'big5');
						data = data.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/ /g,"&nbsp;");
						message += data.replace(/ /g,"&nbsp;").replace(/\n/g,'<br>');
					});

					res.on('exit', function(code, signal) {
						var stage = document.getElementById("stage");
						stage.src = "about:blank";
						setTimeout(function(){
							stage.contentWindow.document.open();
							stage.contentWindow.document.write(message);
							stage.contentWindow.document.close();
							document.getElementById("stage").focus();
						}, 300);
					});						
				}
			}); 			
		}
		else
			alert(Blockly.Msg["WORKSPACE_SORRY"]);
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
	function workspaceResize() {
		var header = document.getElementById("header");
		var stage = document.getElementById("stage");
		var code = document.getElementById("code");
		var blocklyDiv = document.getElementById('blocklyDiv');
		
		var headerHeight = Number(header.style.height.replace("px",""));		
		var stageWidth = Number(stage.style.width.replace("px",""));
		var stageHeight = Number(stage.style.height.replace("px",""));
		
		if (document.documentElement.clientWidth)
			var workspaceWidth = document.documentElement.clientWidth;
		else
			var workspaceWidth = document.body.clientWidth;
		if (document.documentElement.clientHeight)
			var workspaceHeight = document.documentElement.clientHeight-headerHeight;
		else
			var workspaceHeight = document.body.clientHeight-headerHeight;
		blocklyDiv.style.width = (workspaceWidth-stageWidth)+"px";
		blocklyDiv.style.height = workspaceHeight+"px";
		
		stage.style.top = (workspaceHeight-stageHeight+headerHeight)+"px";
		stage.style.left = (workspaceWidth-stageWidth)+"px";
		code.style.left = stage.style.left;
		code.style.height = (workspaceHeight-stageHeight)+"px";
		code.style.width = (stageWidth-5) + "px";
		
		Blockly.svgResize(workspace);
	}

	document.addEventListener("DOMContentLoaded", function(event) {
		workspaceResize();
	})

	window.addEventListener("resize", function(){
		workspaceResize();
	})

	workspaceResize();	

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
		weight: 200,
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
		weight: 201,
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
		weight: 202,
	  };
	  Blockly.ContextMenuRegistry.registry.register(workspaceBlocksImportFromXML);
	}
	registerWorkspaceBlocksImportFromXML();
	
	//新增工作區功能選單 匯出PYTHON檔
	function registerWorkspaceBlocksExportToPY() {
	  if (Blockly.ContextMenuRegistry.registry.getItem('workspace_blocks_export_py')) {
		return;
	  }
	  const workspaceBlocksExportToPY = {
		displayText: function(){
			return Blockly.Msg["WORKSPACE_BLOCKS_EXPORT_PY_MSG"];
		},
		preconditionFn: function(a) {
			return 'enabled';
		},
		callback: function(a) {
			workspaceExportToPY();
		},
		scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,id: 'workspace_blocks_export_py',
		weight: 203,
	  };
	  Blockly.ContextMenuRegistry.registry.register(workspaceBlocksExportToPY);
	}
	registerWorkspaceBlocksExportToPY();
	
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
		weight: 204,
	  };
	  Blockly.ContextMenuRegistry.registry.register(workspaceBlocksToCode);
	}
	registerWorkspaceBlocksToCode();	
	
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
			runCode();
		},
		scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,id: 'workspace_run_code',
		weight: 205,
	  };
	  Blockly.ContextMenuRegistry.registry.register(workspaceRunCode);
	} 
	registerRunCode(); 
	
	//新增工作區功能選單 執行文字區塊程式碼
	function registerTextareaRunCode() {
	  if (Blockly.ContextMenuRegistry.registry.getItem('workspace_textarea_run_code')) {
		return;
	  }
	  const workspaceTextareaRunCode = {
		displayText: function(){
			return Blockly.Msg["WORKSPACE_TEXTAREA_RUNCODE"];
		},
		preconditionFn: function(a) {
			return 'enabled';
		},
		callback: function(a) {
			runCode(true);
		},
		scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,id: 'workspace_textarea_run_code',
		weight: 206,
	  };
	  Blockly.ContextMenuRegistry.registry.register(workspaceTextareaRunCode);
	} 
	registerTextareaRunCode(); 	
	
}

