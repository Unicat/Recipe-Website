'use strict';

var multiline = require('multiline');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'Recipe',
  password: 'helloworld123',
  database: 'RecipeWebsite',
  port: 8889
});

exports.ServingConHtml = function (req, res) {
  var passedVariable = null;
  var IDRecipe = req.query.IDRecipe;
  passedVariable = req.query.Valid;
  req.query.valid = null;

  var rtnStr = multiline(function () {/*
                                      <!DOCTYPE html>
                                      <html lang="en">
                                      <head>
                                      <meta http-equiv="content-type" content="text/html; charset=UTF-8">
                                      <!-- <meta charset="UTF-8"> -->
                                      <style>
                                      body {background-color: white;}
                                      h1 {color: black;}
                                      p {color: black;}
                                      </style>
                                      <title><ins>Serving Conversion</ins></title>
                                      </head>
                                      <body>
                                      <h1>Serving Conversion</h1>
                                      <form action = "http://localhost:3000/process_servingcon" method = "GET" id="frm2">
                                      <label for="rating">Serving Size to change to:</label><br>
                                      <input type="radio" id="Serve1" name="serving" value="1">Serves 1<br>
                                      <input type="radio" id="Serve2" name="serving" value="2">Serves 2<br>
                                      <input type="radio" id="Serve4" name="serving" value="4">Serves 4<br>
                                      <input type="radio" id="Serve8" name="serving" value="8">Serves 8<br>
                                      */});
  rtnStr += '<input type="hidden" name="IDRecipe" value="' + IDRecipe + '" />'; //passes along IDRecipe

  if (passedVariable === 'ServingCon') {
    //if invalid entries
    rtnStr += '<p> Your Serving choice was Invalid, please enter a valid Serving choice</p><br>';
  }

  rtnStr += multiline(function () {/*
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
//# sourceMappingURL=ServingCon.js.map
//# sourceMappingURL=ServingCon.js.map