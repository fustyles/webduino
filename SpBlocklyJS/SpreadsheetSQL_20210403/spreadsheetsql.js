/*
Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu
*/

+(function (window, document) {

  'use strict';
  
  var spreadsheetsql_response = [];
  var spreadsheet_id = "";
  var spreadsheet_name = "";
  
  function spreadsheetsql_settings(spreadsheetid, spreadsheetname) {
    spreadsheet_id = spreadsheetid;
    spreadsheet_name = spreadsheetname;
  }
  
  function spreadsheetsql_executeSql(spreadsheet_sql) {
	spreadsheetsql_response = [];
	//google.load("visualization", "1", {packages:["corechart"]});
    //var input_url="https://docs.google.com/spreadsheets/d/"+spreadsheet_id+"/gviz/tq?tqx=out:json&sheet="+spreadsheet_name+"&tq="+spreadsheet_sql;
    google.load('visualization', '1', {
	  packages: ['corechart'],
	  callback: function () {
		var query = new google.visualization.Query("https://docs.google.com/spreadsheets/d/"+spreadsheet_id+"/gviz/tq?tqx=out:json&sheet="+spreadsheet_name);
		//console.log(query);
		query.setQuery(spreadsheet_sql);
		query.send(spreadsheetsql_QueryResponse);
	  }
	});
  }
  
  function spreadsheetsql_QueryResponse(res) {
	  //console.log(res.qb.fg);
	  //console.log(res.qb.fg.length);
	  var arr = [];
	  if (res.qb.fg.length>0) {
		  for (var i=0;i<res.qb.fg.length;i++) {
			  for (var j=0;j<res.qb.fg[i].c.length;j++) {
				//console.log(res.qb.fg[i].c[j].v);
				arr.push(res.qb.fg[i].c[j].v);
			  }
			  spreadsheetsql_response.push(arr);
			  arr = [];
		  }
		  if (typeof spreadsheetsql_getDataFinish === 'function') spreadsheetsql_getDataFinish();
	  }
	  //console.log(spreadsheetsql_response);
  }

  function spreadsheetsql_getData() {
	  return spreadsheetsql_response;
  }
  
  function spreadsheetsql_getDataCount() {
	  return spreadsheetsql_response.length;
  }

  function spreadsheetsql_getDataCount(count) {
	if (count=="ROWS")
		return spreadsheetsql_response.length;
	else if (count=="COLS") {
		var cols = 0;
		if (spreadsheetsql_response.length>0)
			cols = spreadsheetsql_response[0].length;
		return cols;
	}
	return 0;
  }  
  
  function spreadsheetsql_clearData() {
	  spreadsheetsql_response = [];
  }   
  
  function spreadsheet_insert(func, myData, myRow, myCol, myText, mySpreadsheeturl, mySpreadsheetname, myScript) {
      $.ajax({
      	headers: {'Access-Control-Allow-Origin': '*'},			
      	type: "POST",
      	url: myScript,
      	dataType: "json",
      	contentType: "application/json; charset=utf-8",
      	payload: JSON.stringify({
      		"func":func,
      		"data":myData,
      		"spreadsheeturl":mySpreadsheeturl,
      		"spreadsheetname":mySpreadsheetname,
      		"row":myRow,
      		"col":myCol,
      		"text":myText				
      	}),
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
  window.spreadsheetsql_getDataCount = spreadsheetsql_getDataCount;
  window.spreadsheetsql_clearData = spreadsheetsql_clearData;
  window.spreadsheet_insert = spreadsheet_insert;
  
}(window, window.document));
