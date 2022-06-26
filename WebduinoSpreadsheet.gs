/*
  Author : ChungYi Fu (Kaohsiung, Taiwan)   2022/6/27 06:00
  https://www.facebook.com/francefu
*/

function doPost(e) {

  var myFile = e.parameter.myFile;
  var myFileFormat = e.parameter.myFileFormat;
  var myFilename = Utilities.formatDate(new Date(), "GMT+8", "yyyyMMddHHmmss");
  var myDate = Utilities.formatDate(new Date(), "GMT+8", "yyyy/MM/dd");
  var myTime = Utilities.formatDate(new Date(), "GMT+8", "HH:mm:ss");
  var mySpreadsheet = e.parameter.mySpreadsheet;
  var mySpreadsheetName = e.parameter.mySpreadsheetName;
  var myCellRow = e.parameter.myCellRow;
  var myCellCol = e.parameter.myCellCol; 
  var myCellColHeight = e.parameter.myCellColHeight;
  
  var contentType = myFile.substring(myFile.indexOf(":")+1, myFile.indexOf(";"));
  var data = myFile.substring(myFile.indexOf(",")+1);
  data = Utilities.base64Decode(data);
  var blob = Utilities.newBlob(data, contentType, myFilename);

  var ss = SpreadsheetApp.openByUrl(mySpreadsheet)
  ss.getActiveSheet().setHiddenGridlines(true);
  var sheet = ss.getSheetByName(mySpreadsheetName);
  sheet.insertRowsBefore(myCellRow, 1);
  if (myFileFormat=="string")
    sheet.getRange(myCellRow, myCellCol).setValue(myFile);
  else {
    sheet.setRowHeight(myCellRow, myCellColHeight);
    sheet.insertImage(blob, myCellCol, myCellRow);
  }
  sheet.getRange(myCellRow, myCellCol+1).setValue(myDate);
  sheet.getRange(myCellRow, myCellCol+2).setValue(myTime);

  return  ContentService.createTextOutput("ok");
}
