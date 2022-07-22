/*
  Author : ChungYi Fu (Kaohsiung, Taiwan)   2022/7/22 20:00
  https://www.facebook.com/francefu
*/

function doPost(e) {
  var myFile = e.parameter.file;
  var mySpreadsheeturl = decodeURIComponent(e.parameter.spreadsheeturl);
  var mySpreadsheetname = decodeURIComponent(e.parameter.spreadsheetname);
  var myDatetime = e.parameter.datetime;  
  var myPosition = e.parameter.position;  
  var myColumn = e.parameter.column;
  var myRow = e.parameter.row;
  var myDate = Utilities.formatDate(new Date(), "GMT+8", "yyyy/MM/dd");
  var myTime = Utilities.formatDate(new Date(), "GMT+8", "HH:mm:ss");
  var myDatetimeRow = 1;   
  
  var ss = SpreadsheetApp.openByUrl(mySpreadsheeturl)
  var sheet = ss.getSheetByName(mySpreadsheetname);
  var lastRow = sheet.getLastRow();

  if (myPosition=="custom") {
    myDatetimeRow = myRow;     
    sheet.getRange(myRow, myColumn).setValue(myFile);
  } else if (myPosition=="first") {
    myDatetimeRow = 1;    
    sheet.getRange(1, myColumn).setValue(myFile);
  } else if (myPosition=="second") {
    myDatetimeRow = 2;     
    sheet.getRange(2, myColumn).setValue(myFile); 
  } else if (myPosition=="insertfirst") {
    sheet.insertRowsBefore(1, 1);
    myDatetimeRow = 1;      
    sheet.getRange(1, myColumn).setValue(myFile);
  } else if (myPosition=="last") {
    myDatetimeRow = lastRow;     
    sheet.getRange(lastRow, myColumn).setValue(myFile);
  } else if (myPosition=="insertlast") { 
    myDatetimeRow = lastRow+1;   
    sheet.getRange(lastRow+1, myColumn).setValue(myFile);
  }

  if (myDatetime=="gmt_datetime") {
    sheet.getRange(myDatetimeRow, 1).setValue(myDate);
    sheet.getRange(myDatetimeRow, 2).setValue(myTime);  
  }
  else if (myDatetime=="gmt_date") {
    sheet.getRange(myDatetimeRow, 1).setValue(myDate); 
  }
  else if (myDatetime=="gmt_time") {
    sheet.getRange(myDatetimeRow, 1).setValue(myTime);  
  }   
  return  ContentService.createTextOutput("ok");
}
