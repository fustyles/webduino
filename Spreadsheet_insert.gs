/*
  Author : ChungYi Fu (Kaohsiung, Taiwan)   2022/6/16 22:00
  https://www.facebook.com/francefu
*/

function doPost(e) {
  var mySpreadsheeturl = e.parameter.spreadsheeturl;
  var mySpreadsheetname = e.parameter.spreadsheetname;
  var myPosition = e.parameter.position;
  var myData = e.parameter.data;
  myData = myData.replace(/gmt_datetime/g, Utilities.formatDate(new Date(), "GMT+8", "yyyy/MM/dd HH:mm:ss"));
  myData = myData.replace(/gmt_date/g, Utilities.formatDate(new Date(), "GMT+8", "yyyy/MM/dd"));
  myData = myData.replace(/gmt_time/g, Utilities.formatDate(new Date(), "GMT+8", "HH:mm:ss"));
  myData = myData.split(";;;");
  
  var ss = SpreadsheetApp.openByUrl(mySpreadsheeturl)
  var sheet = ss.getSheetByName(mySpreadsheetname);
  var lastRow = sheet.getLastRow();

  if (myPosition=="insertfirst") {
    sheet.insertRowsBefore(1, 1);
    for (var i=0;i<myData.length;i++) {
      sheet.getRange(1, i+1).setValue(myData[i]);
    }
  } else if (myPosition=="insertrow2") {
    sheet.insertRowsBefore(2, 1);
    for (var i=0;i<myData.length;i++) {
      sheet.getRange(2, i+1).setValue(myData[i]);
    }
  } else if (myPosition=="insertlast") {
    for (var i=0;i<myData.length;i++) {
      sheet.getRange(lastRow+1, i+1).setValue(myData[i]);
    }    
  }
  return  ContentService.createTextOutput("ok");
}