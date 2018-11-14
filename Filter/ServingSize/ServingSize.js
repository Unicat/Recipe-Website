var multiline = require('multiline')
var mysql = require('mysql');
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'Recipe',
  password : 'helloworld123',
  database : 'RecipeWebsite',
  port : 8889
});

exports.ServingSizeHtml = function(req, res){
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
      <title><ins>Filter by Serving Size</ins></title>
    </head>
    <body>
      <h1>Filter by Serving Size</h1>
      <form action = "http://localhost:3000/process_servingsize" method = "GET" id="frm2">
      Amount of Servings:<br>
      <select name="servingsize">
      <option selected="selected"value=null>--------</option>
      <option value="2">2</option>
      <option value="4">4</option>
      <option value="8">8</option>
    </select><br>
    */});

    if(passedVariable === 'ServingSize'){
      rtnStr += '<p> Your Type choice was Invalid, please enter a valid Type choice</p><br>';
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
