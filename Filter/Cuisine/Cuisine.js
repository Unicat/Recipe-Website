var multiline = require('multiline')
var mysql = require('mysql');
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'Recipe',
  password : 'helloworld123',
  database : 'RecipeWebsite',
  port : 8889
});

exports.CuisineHtml = function(req, res){
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
      <title><ins>Filter by Cuisine Type</ins></title>
    </head>
    <body>
      <h1>Filter by Cuisine Type</h1>
      <form action = "http://localhost:3000/process_cuisine" method = "GET" id="frm2">
      Type of Cuisine:<br>
      <select name="cuisine">
      <option selected="selected"value=null>--------</option>
      <option value="French">French</option>
      <option value="Italian">Italian</option>
      <option value="German">German</option>
    </select><br>
    */});

    if(passedVariable === 'Cuisine'){ //For invalid entries
      rtnStr += '<p> Your Cuisine was Invalid, please enter a valid Cuisine</p><br>';
    };

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
