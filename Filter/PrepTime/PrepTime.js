var multiline = require('multiline')
var mysql = require('mysql');
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'Recipe',
  password : 'helloworld123',
  database : 'RecipeWebsite',
  port : 8889
});

exports.PrepTimeHtml = function(req, res){
  var passedVariable = null;

  passedVariable = req.query.Valid;
  req.query.valid = null;

  var rtnStr = multiline(function(){/*
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <style>
    body {background-color: white;}
    h1 {color: black;}
    p {color: black;}
    </style>
      <title><ins>Filter by Preparation Time</ins></title>
    </head>
    <body>
      <h1>Filter by Preparation Time</h1>
      <form action = "http://localhost:3000/process_preptime" method = "GET" id="frm2">
      Amount of Time taken to Prepare:<br>
      <select name="preptime">
      <option selected="selected"value=null>--------</option>
      <option value="30 mins">30 minutes</option>
      <option value="45 mins">45 minutes</option>
      <option value="1 hour">1 hour</option>
    </select><br>
    */});

    if(passedVariable === 'PrepTime'){ //For invalid entries
      rtnStr += '<p> Your Prep Time was Invalid, please enter a valid Prep Time</p><br>';
    }

    rtnStr += multiline(function(){/*
    <br>
      <input type="submit" value="Submit">
      <input type="reset">
      <a href="http://localhost:3000/try" class="btn">Home</a>
    </form>
    */});
rtnStr += '</body></html>';
res.write(rtnStr);
res.end();
};
