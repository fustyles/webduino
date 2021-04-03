/*
Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu
*/

+(function (window, document) {

  'use strict';
  
  var spreadsheetsql_response = [];

  function spreadsheetsql_queryData(spreadsheet_id, spreadsheet_name, spreadsheet_sql) {
	spreadsheetsql_response = [];
	google.load("visualization", "1", {packages:["corechart"]});
    var input_url="https://docs.google.com/spreadsheets/d/"+spreadsheet_id+"/gviz/tq?tqx=out:json&sheet="+spreadsheet_name+"&tq="+spreadsheet_sql;
    google.load('visualization', '1', {
	  packages: ['corechart'],
	  callback: function () {
		var query = new google.visualization.Query("https://docs.google.com/spreadsheets/d/"+spreadsheet_id+"/gviz/tq?tqx=out:json&sheet="+spreadsheet_name);
		console.log(query);
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
				console.log(res.qb.fg[i].c[j].v);
				arr.push(res.qb.fg[i].c[j].v);
			  }
			  spreadsheetsql_response.push(arr);
			  arr = [];
		  }
	  }
	  console.log(spreadsheetsql_response);
  }

  function spreadsheetsql_getData() {
	  return spreadsheetsql_response;
  }
  
  function spreadsheetsql_clearData() {
	  spreadsheetsql_response = [];
  }  

  window.spreadsheetsql_queryData = spreadsheetsql_queryData;
  window.spreadsheetsql_QueryResponse = spreadsheetsql_QueryResponse;
  window.spreadsheetsql_getData = spreadsheetsql_getData;
  window.spreadsheetsql_clearData = spreadsheetsql_clearData;

}(window, window.document));
