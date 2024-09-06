/*
  Author : ChungYi Fu (Kaohsiung, Taiwan)   2024/9/6 19:00
  https://www.facebook.com/francefu
*/

var myFile;
var myFileWidth = 320;
var myFileHeight = 240;
var myFormat;
var blob;
var myDate;
var myTime;
var mySpreadsheeturl;
var mySpreadsheetname;
var myFoldername = "spreadsheet_images";

function doPost(e) {
  myFile = e.parameter.file;
  mySpreadsheeturl = decodeURIComponent(e.parameter.spreadsheeturl);
  mySpreadsheetname = decodeURIComponent(e.parameter.spreadsheetname);
  var myDatetime = e.parameter.datetime;  
  var myPosition = e.parameter.position;  
  var myColumn = e.parameter.column;
  var myRow = e.parameter.row;
  myFormat = e.parameter.format||"base64";
  myDate = Utilities.formatDate(new Date(), "GMT+8", "yyyy/MM/dd");
  myTime = Utilities.formatDate(new Date(), "GMT+8", "HH:mm:ss");
  var myDatetimeRow = 1; 

  var contentType = myFile.substring(myFile.indexOf(":")+1, myFile.indexOf(";"));
  var data = myFile.substring(myFile.indexOf(",")+1);
  data = Utilities.base64Decode(data);
  blob = Utilities.newBlob(data, contentType, myDate+" "+myTime+".jpg");
  
  var ss = SpreadsheetApp.openByUrl(mySpreadsheeturl)
  var sheet = ss.getSheetByName(mySpreadsheetname);
  var lastRow = sheet.getLastRow();

  if (myPosition=="custom") {
    myDatetimeRow = myRow;     
    insertImage(sheet, myRow, myColumn);
  } else if (myPosition=="first") {
    myDatetimeRow = 1;    
    insertImage(sheet, 1, myColumn);
  } else if (myPosition=="second") {
    myDatetimeRow = 2;     
    insertImage(sheet, 2, myColumn); 
  } else if (myPosition=="insertfirst") {
    sheet.insertRowsBefore(1, 1);
    myDatetimeRow = 1;      
    insertImage(sheet, 1, myColumn);
  } else if (myPosition=="last") {
    myDatetimeRow = lastRow;     
    insertImage(sheet, lastRow, myColumn);
  } else if (myPosition=="insertlast") { 
    myDatetimeRow = lastRow+1;   
    insertImage(sheet, lastRow+1, myColumn);
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

function insertImage(insertSheet, insertRow, insertColumn) {
  if (myFormat=="base64")
    insertSheet.getRange(insertRow, insertColumn).setValue(myFile);  
  else if (myFormat=="link") {
    var folder, folders = DriveApp.getFoldersByName(myFoldername);
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(myFoldername);
    }
    var file = folder.createFile(blob);
    var imageUrl = file.getUrl();
    var imageID = imageUrl.substring(imageUrl.indexOf("/d/")+3,imageUrl.indexOf("view")-1);       
    imageUrl = "https://drive.google.com/file/d/"+imageID+"/view?usp=sharing";     
    var formula = '=HYPERLINK("' + imageUrl + '","'+ myDate+" "+myTime +'")';
    insertSheet.getRange(insertRow, insertColumn).setFormula(formula); 
  } 
  else if (myFormat=="jpg") {
    var folder, folders = DriveApp.getFoldersByName(myFoldername);
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(myFoldername);
    }
    var file = folder.createFile(blob);
    var imageUrl = file.getUrl();
    var imageID = imageUrl.substring(imageUrl.indexOf("/d/")+3,imageUrl.indexOf("view")-1);       
    imageUrl = "https://drive.google.com/thumbnail?id="+imageID;
    insertSheet.setRowHeight(insertRow, myFileHeight);    
    insertSheet.setColumnWidth(insertColumn, myFileWidth);          
    var formula = '=IMAGE("' + imageUrl + '", 1)';
    insertSheet.getRange(insertRow, insertColumn).setFormula(formula);
  }  
}
