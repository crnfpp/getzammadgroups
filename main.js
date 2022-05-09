var GET_URL = "https://_____________/api/v1/groups";
var MY_TOKEN = "____________";

function groupCheck() {

  var options = {
    "method": "get",
    "contentType": "application/json",
    "headers": { "Authorization":"Token token=" + MY_TOKEN },
  }

  var response = UrlFetchApp.fetch(GET_URL, options);
  var parseRes = JSON.parse(response);
  // Logger.log(parseRes[0]["id"]);
  //** Whatch out! GetSheetByName is language-dependent, change it!  **//
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Foglio1");
  
  for (i =0 ; i<parseRes.length;i++){
    Logger.log(parseRes[i]["id"]);
    ss.getRange((i+2),1).setValue(parseRes[i]["id"]);
    ss.getRange((i+2),2).setValue(parseRes[i]["name"]);
  }
  


};
