var express = require('express');
var path = require('path');
var app = express();
var multiline = require('multiline')
var mysql = require('mysql');
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'Recipe',
  password : 'helloworld123',
  database : 'RecipeWebsite',
  port : 8889
});

exports.FavouriteHtml = function(req, res){
  var passedVariable = null;

    passedVariable = req.query.Valid;
    req.query.valid = null;
    var IDRecipe = req.query.IDRecipe;

  var rtnStr = multiline(function(){/*
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
      <title><ins>Would you like to favourite this recipe?</ins></title>
    </head>
    <body>
      <h1>Would you like to favourite this recipe?</h1>
      <form action = "http://localhost:3000/process_favourite" method = "GET" id="frm2">
      <label for="favourite">Favourite?:</label><br>
      <input type="radio" id="Yes" name="Favourite" value="True"> Favourite<br>
      <input type="radio" id="No" name="Favourite" value="False"> Unfavourite<br>
      */});

    rtnStr += '<input type="hidden" name="IDRecipe" value="' + IDRecipe + '" />';

      if(passedVariable === 'Favourite'){ //For invalid entries
        rtnStr += '<p> Your Favourite Choice was Invalid, please enter a valid Favourite Choice</p><br>';
      }

      rtnStr += multiline(function(){/*
      <br>
      <input type="submit" value="Submit">
      <input type="reset">
      <a href="http://localhost:3000/recipetry/:
      */});
      rtnStr += IDRecipe;
      rtnStr += multiline(function(){/*
      " class="btn">Recipe</a>
      <a href="http://localhost:3000/try" class="btn">Home</a>
    </form>
    */});
rtnStr += '</body></html>';
res.write(rtnStr);
res.end();
};
