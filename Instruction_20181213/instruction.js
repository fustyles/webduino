// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  function myUpdateFunction(event) {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('demo-area-01-show').innerHTML = code;
  }
  workspace.addChangeListener(myUpdateFunction);

  window.myUpdateFunction = myUpdateFunction;

}(window, window.document));
