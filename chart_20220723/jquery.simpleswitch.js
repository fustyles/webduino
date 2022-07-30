/*
The MIT License (MIT)

Copyright (c) 2016 Nelson Kuang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var simpleSwitchOptions = {};

var simpleSwitch = function(options) {
	
	if (typeof simpleSwitchOptions[options.id]==="undefined") {
		simpleSwitchOptions[options.id] = options;	
	}
	else if (!options.hasOwnProperty('color')) {
		simpleSwitchOptions[options.id].val = options.val;
		options = simpleSwitchOptions[options.id];
	}

	if ($("#gamelabel_"+options.id).length)
		$("#gamelabel_"+options.id).remove();

	var chk = document.createElement("input");
	chk.setAttribute("type", "checkbox");
	chk.id = "gamecheckbox_"+options.id;
	chk.value = options.val;
	chk.style.zIndex = 9999;
	chk.className = "mybox";
	
	var This = $(chk);
	This.addClass("simple-switch");
	var outerHTML = This.prop("outerHTML"),
	html = "";
	html += '<label id="gamelabel_'+options.id+'" class="simple-switch-outter" style="left:'+options.left+'px; top:'+options.top+'px; width:'+options.width+'px; height:'+options.height+'px">';
	html += outerHTML;
	html += '<span id="gamespan_'+options.id+'" class="simple-switch-circle" style="width:'+options.height+'px; height:'+options.height+'px"></span><span style="font-weight:bold; font-size:'+options.size+'pt; font-family:arial; position:relative; color: '+options.color+'; left: '+(options.width/2-getTextWidth(options.text,"bold "+options.size+"pt arial")/2)+'px; top:'+(options.height+5)+'px;">'+options.text+'</span></label>';
	This.replaceWith(html);
	
	var div = document.createElement("div");
	div.id = "gamediv_"+options.id;	
	div.style.left = options.left+"px";
	div.style.top = options.top+"px";
	div.style.position = "absolute";
	div.style.zIndex = 9999;
	div.innerHTML = html;
	$(document.body).append(div);
	
	$("#gamelabel_"+options.id).css("border-radius", options.height+"px");
	This = $("#gamecheckbox_"+options.id);
	if (options.val==1)
	  This.prop("checked", true);
	else
	  This.prop("checked", false);
  
	_switch(This);
	
	//bind click event
	This.click(options.func);
	This.change(function () {
		_switch($(this));
	});
	
	
	//bind swipe events
	var startPos = { x: 0, y: 0 },
		currentPos = { x: 0, y: 0 };
		
	var el = document.getElementById("gamespan_"+options.id);	
	el.addEventListener('touchstart', function (event) {
		startPos = { x: event.changedTouches[0].pageX, y: event.changedTouches[0].pageY };
	}, false);
	el.addEventListener('touchmove', function (event) {
		event.preventDefault();
		currentPos = { x: event.changedTouches[0].pageX, y: event.changedTouches[0].pageY };
	}, false);
	el.addEventListener('touchend', function (event) {
		currentPos = { x: event.changedTouches[0].pageX, y: event.changedTouches[0].pageY };
		if (currentPos.x != startPos.x) {
			This.trigger("click");
		}
		startPos = { x: 0, y: 0 },
			currentPos = { x: 0, y: 0 };
	}, false);
	
	//switch
	function _switch($obj) {
		var This = $obj,
			isChecked = This.prop("checked");
		if (isChecked) {
			This.attr("data-switch", true);
			This.parent().removeClass("unchecked").addClass("checked");
			$("#gamespan_"+options.id).css("left",(options.width - options.height) + "px");
			$("#gamelabel_"+options.id).css("border-color", options.color);
			$("#gamelabel_"+options.id).css("box-shadow", options.color+" 0px 0px 0px 1000px inset");
		} else {
			This.attr("data-switch", false);
			This.parent().removeClass("checked").addClass("unchecked");
			$("#gamespan_"+options.id).css("left","0px");
			$("#gamelabel_"+options.id).css("border-color", "#dfdfdf");
			$("#gamelabel_"+options.id).css("box-shadow", "#dfdfdf 0px 0px 0px 0px inset");  
		}
	}
	
	function getTextWidth(text, font) {
	  const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
	  const context = canvas.getContext("2d");
	  context.font = font;
	  const metrics = context.measureText(text);
	  return metrics.width;
	}
}

function switchReset() {
	return this.prop('checked', false).parent().removeClass('checked').addClass('unchecked');
}

function switchToggle($state) {
   return $state ? this.prop('checked', $state).parent().removeClass('unchecked').addClass('checked') : this.prop('checked', $state).parent().removeClass('checked').addClass('unchecked');
}


