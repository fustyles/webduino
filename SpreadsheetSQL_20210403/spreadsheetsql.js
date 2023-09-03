/*
Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu
*/

+(function (window, document) {

  'use strict';
  
  var spreadsheetsql_response = {};
  var spreadsheetsql_head_response = {};
  var spreadsheetsql_id = {};
  var spreadsheetsql_name = {};
  
  function spreadsheetsql_settings(spreadsheetid, spreadsheetname, task_id) {
    spreadsheetsql_id[task_id] = spreadsheetid;
    spreadsheetsql_name[task_id] = spreadsheetname;
  }
  
  function spreadsheetsql_executeSql(spreadsheet_sql, task_id) {
	//google.load("visualization", "1", {packages:["corechart"]});
    //var input_url="https://docs.google.com/spreadsheets/d/"+spreadsheetsql_id[task_id]+"/gviz/tq?tqx=out:json&sheet="+spreadsheetsql_name+"&tq="+spreadsheet_sql;
    google.load('visualization', '1', {
	  packages: ['corechart'],
	  callback: function () {
		var query = new google.visualization.Query("https://docs.google.com/spreadsheets/d/"+spreadsheetsql_id[task_id]+"/gviz/tq?tqx=out:json&sheet="+spreadsheetsql_name[task_id]);
		//console.log(query);
		query.setQuery(spreadsheet_sql);
		query.send(eval("spreadsheetsql_QueryResponse_"+task_id));
	  }
	});
  }
  
  function spreadsheetsql_QueryResponse(res, task_id) {
	  //console.log(res.qb.fg);
	  //console.log(res.qb.fg.length);
	  //console.log(res);
	  spreadsheetsql_response[task_id] = [];
	  spreadsheetsql_head_response[task_id] = [];
	  var arr = []; 
	  if (res.aY=="error") {
		  if (typeof eval("spreadsheetsql_getDataFinish_"+task_id) === 'function') eval("spreadsheetsql_getDataFinish_"+task_id+"()");
		  return;
	  }
	  if (res.qb.If.length>0) {
		  for (var i=0;i<res.qb.If.length;i++) {
			  if (res.qb.If[i].label)
				arr.push("<font color='#AE0000'>"+res.qb.If[i].label+"</font>");
			  else
				arr.push("<font color='#AE0000'>Column_"+(i+1)+"</font>");
		  }
		  spreadsheetsql_head_response[task_id].push(arr);
		  arr = [];
	  }
	  if (res.qb.fg.length>0) {
		  for (var i=0;i<res.qb.fg.length;i++) {
			  for (var j=0;j<res.qb.fg[i].c.length;j++) {
				if (res.qb.fg[i].c[j]) {
					if (res.qb.fg[i].c[j].v!==undefined) {
						arr.push((res.qb.fg[i].c[j].f!==undefined)?res.qb.fg[i].c[j].f:res.qb.fg[i].c[j].v);
					}
					else
						arr.push("");
				}
				else
					arr.push("");
			  }
			  spreadsheetsql_response[task_id].push(arr);
			  arr = [];
		  }
	  } 
	  if (typeof eval("spreadsheetsql_getDataFinish_"+task_id) === 'function') eval("spreadsheetsql_getDataFinish_"+task_id+"()");
	  //console.log(spreadsheetsql_response[task_id]);
	  //console.log(spreadsheetsql_head_response[task_id]);
  }

  function spreadsheetsql_getData(task_id) {
	  return spreadsheetsql_response[task_id];
  }
  
  function spreadsheetsql_getCell(col, row, task_id) {
	  if (row<=spreadsheetsql_response[task_id].length) {
		  if (col<=spreadsheetsql_response[task_id][0].length) {
			return spreadsheetsql_response[task_id][row-1][col-1];
		  }
	  }
	  return "";
  }  
  
  function spreadsheetsql_getDataTable(input_id, input_width, input_fontsize, input_left, input_top, input_column, task_id) {
	if (document.getElementById("gametable_"+input_id))
		document.getElementById("gametable_"+input_id).parentNode.removeChild(document.getElementById("gametable_"+input_id));
		
	if (spreadsheetsql_response[task_id].length>0) {
		var obj = document.createElement('table');
		obj.id = "gametable_"+input_id;
		obj.style.position = "absolute";
		obj.style.width = input_width + 'px';
		obj.style.left = input_left + 'px';
		obj.style.top = input_top + 'px';
		obj.style.fontSize = input_fontsize + "px";
		obj.style.border = "1px solid black";
		obj.style.borderCollapse = "collapse";
		obj.style.zIndex = 9999;
		
		var innerData = "";
	  
		var k = 0;
		if (input_column) {
			for (var i=0;i<spreadsheetsql_head_response[task_id].length;i++) {
				k++;
				innerData += "<tr style='border:1px solid black;border-collapse: collapse;'>";
				for (var j=0;j<spreadsheetsql_head_response[task_id][i].length;j++) {
					innerData += "<td id='gametable_td_"+input_id+"_"+i+"_"+j+"' style='border:1px solid black;border-collapse: collapse;' onclick='javascript:onclickid_set(this);'>"+spreadsheetsql_head_response[task_id][i][j]+"</td>";
				}
				innerData += "</tr>";
			}
		}
		for (var i=0;i<spreadsheetsql_response[task_id].length;i++) {
			innerData += "<tr style='border:1px solid black;border-collapse: collapse;'>";
			for (var j=0;j<spreadsheetsql_response[task_id][i].length;j++) {
				innerData += "<td id='gametable_td_"+input_id+"_"+(i+k)+"_"+j+"' style='border:1px solid black;border-collapse: collapse;' onclick='javascript:onclickid_set(this);'>"+spreadsheetsql_response[task_id][i][j]+"</td>";
			}
			innerData += "</tr>";
		}
		obj.innerHTML = innerData;
		document.body.appendChild(obj);  
	}
  }  
  
  function spreadsheetsql_clearDataTable(input_id) {
	if (document.getElementById("gametable_"+input_id))
		document.getElementById("gametable_"+input_id).parentNode.removeChild(document.getElementById("gametable_"+input_id));
  }    

  function spreadsheetsql_getDataCount(count, task_id) {
	if (count=="ROWS")
		return spreadsheetsql_response[task_id].length;
	else if (count=="COLS") {
		var cols = 0;
		if (spreadsheetsql_response[task_id].length>0)
			cols = spreadsheetsql_response[task_id][0].length;
		return cols;
	}
	return 0;
  }  
  
  function spreadsheetsql_clearData(task_id) {
	  spreadsheetsql_response[task_id] = [];
  }   
  
  function spreadsheet_insert(func, myData, myRow, myCol, myText, mySpreadsheeturl, mySpreadsheetname, myScript) {
	  myScript += "?func="+func+"&data="+myData+"&spreadsheeturl="+mySpreadsheeturl+"&spreadsheetname="+mySpreadsheetname+"&row="+myRow+"&col="+myCol+"&text="+myText;
	  console.log(myScript);
	  
      $.ajax({			
      	type: "GET",
      	url: myScript,
      	dataType: "text",
		crossOrigin: true,
      	contentType: "application/x-www-form-urlencoded; charset=utf-8",
      	success: function (response) {
      		//console.log(response.data);			
      	},
      	error: function (thrownError) {
      		console.log(thrownError);
      	}
      });
  }	  
  
  window.spreadsheetsql_settings = spreadsheetsql_settings;
  window.spreadsheetsql_executeSql = spreadsheetsql_executeSql;
  window.spreadsheetsql_QueryResponse = spreadsheetsql_QueryResponse;
  window.spreadsheetsql_getData = spreadsheetsql_getData;
  window.spreadsheetsql_getCell = spreadsheetsql_getCell;
  window.spreadsheetsql_getDataTable = spreadsheetsql_getDataTable;
  window.spreadsheetsql_clearDataTable = spreadsheetsql_clearDataTable;  
  window.spreadsheetsql_getDataCount = spreadsheetsql_getDataCount;
  window.spreadsheetsql_clearData = spreadsheetsql_clearData;
  window.spreadsheet_insert = spreadsheet_insert;
  
}(window, window.document));
