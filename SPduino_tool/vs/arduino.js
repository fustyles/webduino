/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.29.2(df04357573e045be658960bd50ff0a45d6d1eadb)
 * Released under the MIT license
 * https://github.com/microsoft/vscode/blob/main/LICENSE.txt
 *-----------------------------------------------------------*/

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
 
 "use strict";

var editor = null;

$(document).ready(function() {
	require(['vs/editor/editor.main'], function () {
		if (!editor) {
			$('#editor').empty();
			editor = monaco.editor.create(document.getElementById('editor'), {
				model: null,
				minimap: {
				  enabled: false,
				},
				cursorStyle: 'block',
			});
		}

		var oldModel = editor.getModel();
		var newModel = monaco.editor.createModel("", "cpp");
		editor.setModel(newModel);
		if (oldModel) {
			oldModel.dispose();
		}
		$('.loading.editor').fadeOut({ duration: 300 });

		$(".theme-picker").change(function() {
			changeTheme(this.selectedIndex);
		});
			
		monaco.editor.setTheme('vs-dark');
	});

	window.onresize = function () {
		if (editor) {
			editor.layout();
		}
	};
});

var preloaded = {};
(function() {
	var elements = Array.prototype.slice.call(document.querySelectorAll('pre[data-preload]'), 0);

	elements.forEach(function(el) {
		var path = el.getAttribute('data-preload');
		preloaded[path] = el.innerText || el.textContent;
		el.parentNode.removeChild(el);
	});
})();

function changeTheme(theme) {
	var newTheme = (theme === 1 ? 'vs-dark' : ( theme === 0 ? 'vs' : 'hc-black' ));
	monaco.editor.setTheme(newTheme);
}
