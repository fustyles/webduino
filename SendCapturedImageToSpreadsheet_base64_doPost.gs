/*
  Author : ChungYi Fu (Kaohsiung, Taiwan)   2022/5/27 18:00
  https://www.facebook.com/francefu
*/

function doPost(e) {
  var myFile = e.parameter.file;
  var mySpreadsheeturl = e.parameter.spreadsheeturl;
  var mySpreadsheetname = e.parameter.spreadsheetname;
  var myPosition = e.parameter.position;  
  var myColumn = e.parameter.column;
  var myRow = e.parameter.row; 
  
  var ss = SpreadsheetApp.openByUrl(mySpreadsheeturl)
  var sheet = ss.getSheetByName(mySpreadsheetname);
  var lastRow = sheet.getLastRow();

  if (myPosition=="custom") {
    sheet.getRange(myRow, myColumn).setValue(myFile);
  } else if (myPosition=="first") {
    sheet.getRange(1, myColumn).setValue(myFile);
  } else if (myPosition=="second") {
    sheet.getRange(2, myColumn).setValue(myFile);    
  } else if (myPosition=="insertfirst") {
    sheet.insertRowsBefore(1, 1);
    sheet.getRange(1, myColumn).setValue(myFile);
  } else if (myPosition=="last") {
    sheet.getRange(lastRow, myColumn).setValue(myFile);
  } else if (myPosition=="insertlast") {
    sheet.getRange(lastRow+1, myColumn).setValue(myFile);
  }
  return  ContentService.createTextOutput("ok");
}
