//*************** toolbox initial ******************	
let workspace = null;

function start() {
	
	  // Create main workspace.
	  var media = 'media/';
	  workspace = Blockly.inject('blocklyDiv',
      {
		media: media,
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
	function onWorkspaceChanged(event) {
		if (workspaceToCodeState) {
			var code = Blockly.Python.workspaceToCode(workspace);
			console.clear();
			console.log(code);
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
	startBlocks();		

	//執行工作區程式碼
	function runCode() {
		var code = Blockly.Python.workspaceToCode(workspace);
		try {
			eval(code);
		} catch (e) {
			alert(e);
		}
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
	Blockly.Msg["WORKSPACE_SORRY"] = "此功能須建置在node.js環境下與安裝Python環境。";
	function workspaceExecutePY() {
		if (typeof require !== "undefined") {
			var filePath = "temp.py";
			const fs = require('fs'); 
			var code = Blockly.Python.workspaceToCode(workspace); 
			fs.writeFile(filePath, code, (err) => { 
				if (err) { 
					console.log(err);
				} else {
					
					var exec = require('child_process').exec;
					var cmd = '';
					var res = exec('python '+filePath+' '+cmd);	
					
					
					res.stdout.on('data', function(data) {
						console.log(data);
					});

					res.stderr.on('data', function(data) {
						console.log(data);
					});

					res.on('exit', function(code, signal) {
						//console.log("exit");
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

	//新增工作區功能選單 重設工作區
	Blockly.Msg["WORKSPACE_RESET"] = "重設工作區";
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
	Blockly.Msg["WORKSPACE_BLOCKS_EXPORT_XML_MSG"] = "工作區匯出積木結構XML檔案";
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
	Blockly.Msg["WORKSPACE_BLOCKS_IMPORT_XML_MSG"] = "工作區匯入積木結構XML檔案";
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
	Blockly.Msg["WORKSPACE_BLOCKS_EXPORT_PY_MSG"] = "工作區匯出PY檔";
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
	Blockly.Msg["WORKSPACE_TO_CODE_Y_MSG"] = "即時輸出積木程式碼";
	Blockly.Msg["WORKSPACE_TO_CODE_N_MSG"] = "停止輸出積木程式碼";
	var workspaceToCodeState = false;
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
	
	//新增工作區功能選單 匯出PYTHON檔並執行
	Blockly.Msg["WORKSPACE_BLOCKS_EXECUTE_PY_MSG"] = "執行積木程式碼";
	function registerWorkspaceBlocksExecutePY() {
	  if (Blockly.ContextMenuRegistry.registry.getItem('workspace_blocks_execute_py')) {
		return;
	  }
	  const workspaceBlocksExecutePY = {
		displayText: function(){
			return Blockly.Msg["WORKSPACE_BLOCKS_EXECUTE_PY_MSG"];
		},
		preconditionFn: function(a) {
			return 'enabled';
		},
		callback: function(a) {
			workspaceExecutePY();
		},
		scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,id: 'workspace_blocks_execute_py',
		weight: 205,
	  };
	  Blockly.ContextMenuRegistry.registry.register(workspaceBlocksExecutePY);
	}
	registerWorkspaceBlocksExecutePY();
	
}

