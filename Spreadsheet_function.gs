/*
  Author : ChungYi Fu (Kaohsiung, Taiwan)   2022/7/22 00:00
  https://www.facebook.com/francefu
*/

function doPost(e) {
  var mySpreadsheeturl = decodeURIComponent(e.parameter.spreadsheeturl);
  var mySpreadsheetname = decodeURIComponent(e.parameter.spreadsheetname);
  var myFunction = e.parameter.func;
  var myData = decodeURIComponent(e.parameter.data);
  var myRow = e.parameter.row;
  var myCol = e.parameter.col;
  var myText = decodeURIComponent(e.parameter.text);
  myData = myData.replace(/gmt_datetime/g, Utilities.formatDate(new Date(), "GMT+8", "yyyy/MM/dd HH:mm:ss"));
  myData = myData.replace(/gmt_date/g, Utilities.formatDate(new Date(), "GMT+8", "yyyy/MM/dd"));
  myData = myData.replace(/gmt_time/g, Utilities.formatDate(new Date(), "GMT+8", "HH:mm:ss"));
  myData = myData.split("|");
  myText = myText.replace(/gmt_datetime/g, Utilities.formatDate(new Date(), "GMT+8", "yyyy/MM/dd HH:mm:ss"));
  myText = myText.replace(/gmt_date/g, Utilities.formatDate(new Date(), "GMT+8", "yyyy/MM/dd"));
  myText = myText.replace(/gmt_time/g, Utilities.formatDate(new Date(), "GMT+8", "HH:mm:ss"));
  
  var spreadsheet = SpreadsheetApp.openByUrl(mySpreadsheeturl)
  var sheet = spreadsheet.getSheetByName(mySpreadsheetname);
  var lastRow = sheet.getLastRow();

  if (myFunction=="insertfirst") {
    sheet.insertRowsBefore(1, 1);
    for (var i=0;i<myData.length;i++) {
      sheet.getRange(1, i+1).setValue(myData[i]);
    }
  } else if (myFunction=="insertrow2") {
    sheet.insertRowsBefore(2, 1);
    for (var i=0;i<myData.length;i++) {
      sheet.getRange(2, i+1).setValue(myData[i]);
    }
  } else if (myFunction=="insertlast") {
    for (var i=0;i<myData.length;i++) {
      sheet.getRange(lastRow+1, i+1).setValue(myData[i]);
    }
  } else if (myFunction=="setcell") {
    sheet.getRange(myRow, myCol).setValue(myText);  
  } else if (myFunction=="clearcell") {
    sheet.getRange(myRow, myCol).setValue("");
  } else if (myFunction=="clearrow") {
    var range = sheet.getRange(myRow, 1, 1, sheet.getMaxColumns()).getA1Notation();
    sheet.getRange(range).activate();
    spreadsheet.getActiveRangeList().clear({contentsOnly: true, commentsOnly: true, skipFilteredRows: true});
  } else if (myFunction=="clearcol") {
    var range = sheet.getRange(1, myCol, sheet.getMaxRows(), 1).getA1Notation();
    sheet.getRange(range).activate();
    spreadsheet.getActiveRangeList().clear({contentsOnly: true, commentsOnly: true, skipFilteredRows: true});        
  } else if (myFunction=="clearafterrow2") {
    sheet.getRange(2, 1, sheet.getMaxRows(), sheet.getMaxColumns()).activate();
    spreadsheet.getActiveRangeList().clear({contentsOnly: true, commentsOnly: true, skipFilteredRows: true});
  } else if (myFunction=="clearsheet") {
    sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).activate();
    spreadsheet.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true});
  }      
  return  ContentService.createTextOutput("ok");
}


function doGet(e) {
  var mySpreadsheeturl = decodeURIComponent(e.parameter.spreadsheeturl);
  var mySpreadsheetname = decodeURIComponent(e.parameter.spreadsheetname);
  var myFunction = e.parameter.func;
  var myData = decodeURIComponent(e.parameter.data);
  var myRow = e.parameter.row;
  var myCol = e.parameter.col;
  var myText = decodeURIComponent(e.parameter.text);
  myData = myData.replace(/gmt_datetime/g, Utilities.formatDate(new Date(), "GMT+8", "yyyy/MM/dd HH:mm:ss"));
  myData = myData.replace(/gmt_date/g, Utilities.formatDate(new Date(), "GMT+8", "yyyy/MM/dd"));
  myData = myData.replace(/gmt_time/g, Utilities.formatDate(new Date(), "GMT+8", "HH:mm:ss"));
  myData = myData.split("|");
  myText = myText.replace(/gmt_datetime/g, Utilities.formatDate(new Date(), "GMT+8", "yyyy/MM/dd HH:mm:ss"));
  myText = myText.replace(/gmt_date/g, Utilities.formatDate(new Date(), "GMT+8", "yyyy/MM/dd"));
  myText = myText.replace(/gmt_time/g, Utilities.formatDate(new Date(), "GMT+8", "HH:mm:ss"));
  
  var spreadsheet = SpreadsheetApp.openByUrl(mySpreadsheeturl)
  var sheet = spreadsheet.getSheetByName(mySpreadsheetname);
  var lastRow = sheet.getLastRow();

  if (myFunction=="insertfirst") {
    sheet.insertRowsBefore(1, 1);
    for (var i=0;i<myData.length;i++) {
      sheet.getRange(1, i+1).setValue(myData[i]);
    }
  } else if (myFunction=="insertrow2") {
    sheet.insertRowsBefore(2, 1);
    for (var i=0;i<myData.length;i++) {
      sheet.getRange(2, i+1).setValue(myData[i]);
    }
  } else if (myFunction=="insertlast") {
    for (var i=0;i<myData.length;i++) {
      sheet.getRange(lastRow+1, i+1).setValue(myData[i]);
    }
  } else if (myFunction=="setcell") {
    sheet.getRange(myRow, myCol).setValue(myText);  
  } else if (myFunction=="clearcell") {
    sheet.getRange(myRow, myCol).setValue("");
  } else if (myFunction=="clearrow") {
    var range = sheet.getRange(myRow, 1, 1, sheet.getMaxColumns()).getA1Notation();
    sheet.getRange(range).activate();
    spreadsheet.getActiveRangeList().clear({contentsOnly: true, commentsOnly: true, skipFilteredRows: true});
  } else if (myFunction=="clearcol") {
    var range = sheet.getRange(1, myCol, sheet.getMaxRows(), 1).getA1Notation();
    sheet.getRange(range).activate();
    spreadsheet.getActiveRangeList().clear({contentsOnly: true, commentsOnly: true, skipFilteredRows: true});        
  } else if (myFunction=="clearafterrow2") {
    sheet.getRange(2, 1, sheet.getMaxRows(), sheet.getMaxColumns()).activate();
    spreadsheet.getActiveRangeList().clear({contentsOnly: true, commentsOnly: true, skipFilteredRows: true});
  } else if (myFunction=="clearsheet") {
    sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).activate();
    spreadsheet.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true});
  }      
  return  ContentService.createTextOutput("ok");
}
