var multiline = require('multiline')
var mysql = require('mysql');
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'Recipe',
  password : 'helloworld123',
  database : 'RecipeWebsite',
  port : 8889
});

exports.TypeHtml = function(req, res){
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
      <title><ins>Filter by Type of Recipe</ins></title>
    </head>
    <body>
      <h1>Filter by Type of Recipe</h1>
      <form action = "http://localhost:3000/process_type" method = "GET" id="frm2">
      Type of Recipe<br>
      <select name="type">
      <option selected="selected"value=null>--------</option>
      <option value="Traybakes">Traybakes</option>
      <option value="Pasta">Pasta meal</option>
      <option value="Bread">Bread</option>
    </select><br>
    */});

    if(passedVariable === 'Type'){ //For invalid entries
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
