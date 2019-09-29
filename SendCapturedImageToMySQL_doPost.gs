/*
Author : ChungYi Fu (Kaohsiung, Taiwan)   2019/9/29 23:00
https://www.facebook.com/francefu
*/

function doPost(e) {

  var dbHost = decodeURIComponent(e.parameter.dbHost);
  var dbPort = decodeURIComponent(e.parameter.dbPort);
  var dbUser = decodeURIComponent(e.parameter.dbUser);
  var dbPassword = decodeURIComponent(e.parameter.dbPassword);
  var databaseName = decodeURIComponent(e.parameter.databaseName);
  var tableName = decodeURIComponent(e.parameter.tableName);
  var columnName = decodeURIComponent(e.parameter.columnName);
  var myFile = e.parameter.myFile;
 
  // Save the photo to MySQL
  var conn = Jdbc.getConnection("jdbc:mysql://"+dbHost+":"+dbPort+"/"+databaseName, dbUser, dbPassword);
  var insert_sql = "INSERT INTO "+tableName+" ("+columnName+") VALUES ('"+myFile+"')";
  conn.createStatement().execute(insert_sql);
  if (conn!=null) conn.close();

  // Save the photo to Google Drive
  var contentType = myFile.substring(myFile.indexOf(":")+1, myFile.indexOf(";"));
  var data = myFile.substring(myFile.indexOf(",")+1);
  data = Utilities.base64Decode(data);
  var blob = Utilities.newBlob(data, contentType, "esp32-cam.jpg");

  var folder, folders = DriveApp.getFoldersByName("ESP32-CAM");
  if (folders.hasNext()) {
    folder = folders.next();
  } else {
    folder = DriveApp.createFolder("ESP32-CAM");
  }
  var file = folder.createFile(blob);    
  file.setDescription("Uploaded by ESP32-CAM");

  return  ContentService.createTextOutput("ok");
}