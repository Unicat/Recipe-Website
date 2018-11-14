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

exports.CommentHtml = function(req, res){
  var passedVariable = null;
    var IDRecipe = req.query.IDRecipe;

  passedVariable = req.query.Valid;
  req.query.valid = null;

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
      <title><ins>Please enter your comment</ins></title>
    </head>
    <body>
      <h1>Comments</h1>
      <form action = "http://localhost:3000/process_comment" method = "GET" id="frm2">
      <label for="name">Comment:</label><br>
      <input type="text" id="comment" name="comment" placeholder="Enter your comment"><br>
      */});

    var tmpRandom = new Date(); //stopping the program from caching the page

    rtnStr += '<input type="hidden" name="_" value="' + tmpRandom.getTime() + '" />';

    rtnStr += '<input type="hidden" name="IDRecipe" value="' + IDRecipe + '" />'; //passing along the recipe ID

      if(passedVariable === 'Comment'||passedVariable === 'Both'){ //For invalid entries
        rtnStr += '<p> Your Comment was Invalid, please enter a valid Comment</p><br>';
      }

      rtnStr += multiline(function(){/*
      <label for="rating">Rating:</label><br>
      <input type="radio" id="1Star" name="rating" value="1"> 1 Star<br>
      <input type="radio" id="2Star" name="rating" value="2"> 2 Stars<br>
      <input type="radio" id="3Star" name="rating" value="3"> 3 Stars<br>
      <input type="radio" id="4Star" name="rating" value="4"> 4 Stars<br>
      <input type="radio" id="5Star" name="rating" value="5"> 5 Stars<br>
      */});

      if(passedVariable === 'Rating'||passedVariable === 'Both'){ //For invalid entries
        rtnStr += '<p> Your Rating was Invalid, please enter a valid Rating</p><br>';
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
