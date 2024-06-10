//*************** toolbox initial ******************	
let workspace = null;
var python = "3.10.0";
var toolboxXmlString = "";

function start() {
	
	if (typeof require !== "undefined") {	
		//NWJS功能選單
		var menubar = new nw.Menu({ type: 'menubar' });
		
		var submenu1 = new nw.Menu();
		submenu1.append(new nw.MenuItem({ label: Blockly.Msg["WORKSPACE_LANGUAGE_JAVASCRIPT"] }));
		submenu1.items[0].click = function () {
			location.href = 'index.html?lang=zh-hant&core=javascript';
		}
		submenu1.append(new nw.MenuItem({ label: Blockly.Msg["WORKSPACE_LANGUAGE_PYTHON"] }));
		submenu1.items[1].click = function () {
			location.href = 'index.html?lang=zh-hant&core=python';
		}
		submenu1.append(new nw.MenuItem({ label: Blockly.Msg["WORKSPACE_LANGUAGE_ARDUINO"] }));
		submenu1.items[2].click = function () {
			location.href = 'js/arduino/index.html?lang=zh-hant';
		}
		submenu1.append(new nw.MenuItem({ type: 'separator' }));
		submenu1.append(new nw.MenuItem({ label: Blockly.Msg["WORKSPACE_BLOCKFACTORY"] }));
		submenu1.items[4].click = function () {
			location.href = 'js/blockfactory/index.html?lang=zh-hant';
		}
		submenu1.append(new nw.MenuItem({ label: Blockly.Msg["WORKSPACE_BLOCKTOOL"] }));
		submenu1.items[5].click = function () {
			location.href = 'js/blocktool/index.html?lang=zh-hant';
		}		
		submenu1.append(new nw.MenuItem({ type: 'separator' }));
		submenu1.append(new nw.MenuItem({ label: Blockly.Msg["WORKSPACE_RELOAD"] }));
		submenu1.items[7].click = function () {
			location.reload();
		}		
		menubar.append(new nw.MenuItem({
		  label: Blockly.Msg["WORKSPACE_LANGUAGE"],
		  submenu: submenu1
		}));
		
		var submenu2 = new nw.Menu();
		submenu2.append(new nw.MenuItem({ label: version }));
		menubar.append(new nw.MenuItem({
		  label: Blockly.Msg["WORKSPACE_VERSION"],
		  submenu: submenu2
		}));
		
		nw.Window.get().menu = menubar;
	}
	
	//積木工具箱初始化
	toolboxXmlString='<xml id="toolbox">';
	if (typeof toolbox_system != 'undefined')	
		toolboxXmlString+=toolbox_system;
	if (typeof toolbox_custom != 'undefined')	
		toolboxXmlString+=toolbox_custom.join("\n");
	toolboxXmlString+='</xml>';
	
	var media = 'media/';
	workspace = Blockly.inject('blocklyDiv',
      	{
		media: media,
		//renderer: 'zelos',
		toolbox: toolboxXmlString,
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
					var code = Blockly.Python.workspaceToCode(workspace);
					document.getElementById("code").value = code;		
				}, 200);
			}			
		}
		if ((event.type=="create"||event.type=="click")&&continuousFlyout.isVisible_==true) {
			continuousFlyout.setVisible(false);
		}
		else if (event.type=="toolbox_item_select"&&continuousFlyout.isVisible_==false) {
			continuousFlyout.setVisible(true);
		}
		else if (event.type=="toolbox_item_select"&&(!event.newItem)&&continuousFlyout.isVisible_==true) {
			workspace.toolbox_.clearSelection();
			setTimeout(function(){
				if (continuousFlyout.isVisible_ == true)
					continuousFlyout.setVisible(false);
			}, 20);
		}
	}
	workspace.addChangeListener(onWorkspaceChanged);
	
	//初始積木匯入工作區
	function startBlocks() {
		var xmlDoc = Blockly.utils.xml.textToDom('<xml xmlns="https://developers.google.com/blockly/xml"></xml>');
		Blockly.getMainWorkspace().clear();
		Blockly.Xml.domToWorkspace(xmlDoc, workspace);
	}

	//更新首頁語系文字
	function updateMessage() {
		if (typeof message_sys != "undefined") {
			var element;
			for (var i=0;i<message_sys.length;i++) {
				element = document.getElementById(message_sys[i][0]);
				if (element) {
					if (message_sys[i][1]=="innerHTML")
						element.innerHTML=message_sys[i][3];
					else if (message_sys[i][1]=="title")
						element.title=message_sys[i][3];
					else if (message_sys[i][1]=="select") {
						element.options[message_sys[i][2]].text=message_sys[i][3];
					}
				}				
			}
		}
	}
	updateMessage();

	//iframe顯示內容
	function iframeWrite(message, bottom) {
		var stage = document.getElementById("stage");
		stage.contentWindow.document.open();
		stage.contentWindow.document.write(message);
		stage.contentWindow.document.close();
		if (bottom)
			stage.contentWindow.scrollTo(0, stage.contentDocument.body.scrollHeight);
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
	
	//安裝Python模組
	function installPackage(package) {
		if (typeof require !== "undefined") {

			var code = "";
			var filePath = "temp.bat";
			const fs = require('fs');
			const Path = require('path')
			
			if(!package) {
				code = prompt(Blockly.Msg["WORKSPACE_INSTALL_PACKAGE_NAME"], "pip install ");
				if (code== null) 
					return;
			}
			else 
				code = package;
			
			fs.writeFile(filePath, code, (err) => { 
				if (err) { 
					console.log(err);
				} else {
					var message = "";
					var iconv = require('iconv-lite');
					var exec = require('child_process').exec;
	
					if (fs.existsSync('python-'+python+'\\App\\Python\\python.exe')&&!pythonEnvironment) {
						var res = exec('python-'+python+'\\App\\Python\\python -m '+code, {encoding: 'arraybuffer'});
					}
					else
						var res = exec('%SystemRoot%\\System32\\cmd.exe /c '+filePath, {encoding: 'arraybuffer'});

					var myTimer;
					res.stdout.on('data', function(data) {
						clearTimeout(myTimer);
						data = iconv.decode(data, 'big5');
						message += data.replace(/\n/g,'<br>');
						myTimer = setTimeout(function(){
							iframeWrite(message, true);
						}, 100);						
					});

					res.stderr.on('data', function(data) {
						data = iconv.decode(data, 'big5');
						message += data.replace(/\n/g,'<br>');
						setTimeout(function(){
							iframeWrite(message, false);
						}, 100);							
					});

					res.on('exit', function(code, signal) {					
					});						
				}
			}); 			
		}
		else
			alert(Blockly.Msg["WORKSPACE_SORRY"]);
	}

	//工作區執行程式碼
	function runCode(source) {
		if (typeof require !== "undefined") {
			
			/*
			var lines = document.getElementById("code").value.split("\n");
			var package = [];
			for (var i=0;i<lines.length;i++) {
				if (lines[i].indexOf("from")!=-1)
					lines[i] = lines[i].split("import")[0].replace("from","").trim();
				else if (lines[i].indexOf("import")!=-1)
					lines[i] = lines[i].split("as")[0].replace("import","").trim();
				else
					lines[i] = "";
				if (lines[i] != "") {
					if (!package.includes("pip install "+lines[i]+"\\n"))
						package.push("pip install "+lines[i]+"\\n");	
				}
			}
			if (package.leng>0)
				installPackage(package.join(""));
			*/
			
			const fs = require('fs');
			var filePath = "temp.py";
					
			if (source)
				var code = document.getElementById("code").value;
			else
				var code = Blockly.Python.workspaceToCode(workspace);
			
			var showWindow = (code.indexOf("input(")!=-1)?"start ":"";
			var closeWindow = (code.indexOf("input(")!=-1)?"\nprint()\nprint()\nprint()\ncloseWindow = input('Press Enter to exit')\nexit(0)":"";
			code += closeWindow;
			
			fs.writeFile(filePath, code, (err) => { 
				if (err) { 
					console.log(err);
				} else {
					var message = "";
					
					var exec = require('child_process').exec;
					 
					const Path = require('path')
					if (fs.existsSync('python-'+python+'\\App\\Python\\python.exe')&&!pythonEnvironment)
						var res = exec(showWindow + 'python-'+python+'\\App\\Python\\python '+filePath, {encoding: 'arraybuffer'});
					else
						var res = exec(showWindow + 'py '+filePath, {encoding: 'arraybuffer'});
					
					var iconv = require('iconv-lite');
					stage.src = "about:blank";
					
					res.stdout.on('data', function(data) {
						data = iconv.decode(data, 'big5');
						message += data.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/ /g,"&ensp;");
						setTimeout(function(){
							iframeWrite(message, false);
						}, 100);						
					});

					res.stderr.on('data', function(data) {
						data = iconv.decode(data, 'big5');
						message += data.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/ /g,"&ensp;");
						setTimeout(function(){
							iframeWrite(message, false);
						}, 100);							
					});

					res.on('exit', function(code, signal) {
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
						var blocks = Blockly.utils.xml.textToDom(event.target.result);
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
			var stageWidth = 5;
		else if	(h==2)
			var stageWidth = workspaceWidth - 300;
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
		resize_e.style.top = (headerHeight+90)+"px";
		resize_e.style.left = (workspaceWidth-stageWidth-65)+"px";			
		
		Blockly.svgResize(workspace);
	}
	
	var layout_h = 0;
	var layout_v = 0;
	document.getElementById('resize_h').addEventListener('click', function(event){
		layout_h++;
		layout_h = layout_h%2;
		workspaceResize(layout_h, layout_v);
	});	

	document.getElementById('resize_v').addEventListener('click', function(event){
		layout_v++;
		layout_v = layout_v%3;
		workspaceResize(layout_h, layout_v);
	});	
	document.getElementById('resize_e').addEventListener('click', function(event){
		layout_h = (layout_h==2?0:2);
		workspaceResize(layout_h, layout_v);
	});	
	
	//監聽鍵盤控制	
	window.addEventListener('keydown', function(event){
		if (event.key == 'Tab'&&event.srcElement.localName=="textarea") {
			event.preventDefault();
			var startPos = event.srcElement.selectionStart;
			var endPos = event.srcElement.selectionEnd;
			event.srcElement.value =event.srcElement.value.substring(0, startPos)
				+ "    "
				+ event.srcElement.value.substring(endPos, event.srcElement.value.length);
			event.srcElement.selectionStart = startPos+4;
			event.srcElement.selectionEnd = startPos+4;			
		}
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
	
	document.getElementById('button_run').addEventListener("click", function(event) {
		runCode(true);
	})
	document.getElementById('button_import_module').addEventListener("click", function(event) {
		installPackage();
	})
	document.getElementById('button_reset').addEventListener("click", function(event) {
		startBlocks();
	})
	document.getElementById('button_export_xml').addEventListener("click", function(event) {
		workspaceExportToXML();
	})	
	document.getElementById('button_import_xml').addEventListener("click", function(event) {
		workspaceImportFromXML();
	})
	document.getElementById('button_export_code').addEventListener("click", function(event) {
		workspaceExportToPY();
	})	
	//切換語言
	document.getElementById('lang-selector').onchange = function () {
		if (this.selectedIndex>0) 
			location.href = "?lang=" + this.options[this.selectedIndex].value + "&core=" + core;
	}
	
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

	//新增工作區功能選單 安裝Python模組
	function registerInstallPackage() {
	  if (Blockly.ContextMenuRegistry.registry.getItem('workspace_install_package')) {
		return;
	  }
	  const workspaceInstallPackage = {
		displayText: function(){
			return Blockly.Msg["WORKSPACE_INSTALL_PACKAGE"];
		},
		preconditionFn: function(a) {
			return 'enabled';
		},
		callback: function(a) {
				installPackage();
		},
		scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,id: 'workspace_install_package',
		weight: 201,
	  };
	  Blockly.ContextMenuRegistry.registry.register(workspaceInstallPackage);
	} 
	registerInstallPackage(); 

	//新增工作區功能選單 切換Python環境
	var pythonEnvironment = false;
	(pythonEnvironment)?iframeWrite(Blockly.Msg["WORKSPACE_ENVIRONMENT_LOCAL"], false):iframeWrite(Blockly.Msg["WORKSPACE_ENVIRONMENT_PORTABLE"], false);

	function registerPythonEnvironment() {
	  if (Blockly.ContextMenuRegistry.registry.getItem('workspace_python_environment')) {
		return;
	  }
	  const workspacePythonEnvironment = {
		displayText: function(){
			if (pythonEnvironment) 
				return Blockly.Msg["WORKSPACE_ENVIRONMENT_PORTABLE_CHANGE"];
			else
				return Blockly.Msg["WORKSPACE_ENVIRONMENT_LOCAL_CHANGE"];
		},
		preconditionFn: function(a) {
			return 'enabled';
		},
		callback: function(a) {
			pythonEnvironment = !pythonEnvironment;
			(pythonEnvironment)?iframeWrite(Blockly.Msg["WORKSPACE_ENVIRONMENT_LOCAL"], false):iframeWrite(Blockly.Msg["WORKSPACE_ENVIRONMENT_PORTABLE"], false);	
		},
		scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,id: 'workspace_python_environment',
		weight: 202,
	  };
	  Blockly.ContextMenuRegistry.registry.register(workspacePythonEnvironment);
	} 
	registerPythonEnvironment(); 	

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
		weight: 203,
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
		weight: 204,
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
		weight: 205,
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
		weight: 206,
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
		weight: 207,
	  };
	  Blockly.ContextMenuRegistry.registry.register(workspaceBlocksToCode);
	}
	registerWorkspaceBlocksToCode();	
	
}
