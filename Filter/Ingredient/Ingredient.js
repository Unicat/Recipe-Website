var multiline = require('multiline');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'Recipe',
  password : 'helloworld123',
  database : 'RecipeWebsite',
  port : 8889
});

exports.IngredientHtml = function(req, res){
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
    <title><ins>Filter by Ingredient</ins></title>
    </head>
    <body>
    <h1>Filter by Ingredient</h1>
    <form action = "http://localhost:3000/process_ingredient" method = "GET" id="frm2">
    Ingredient:<br>
    <select name="ingredient">
   <option selected="selected"value=null>--------</option>
    */});
    var IngredientQuery1 = 'SELECT IngredientName FROM tblIngredient;'; //Selecting and finding all possible allergies
    connection.query(IngredientQuery1, function (error, results, fields) {
        if (error) {
            console.log("An error has occurred on IngredientQuery1.");
            console.log(error);
        }
        else {
            for (var i = 0; i<results.length; i++){
                rtnStr += '<option value="';
                rtnStr += results[i].IngredientName;
                rtnStr += '">';
                rtnStr += results[i].IngredientName;
                rtnStr += '</option>';
            }
            rtnStr += multiline(function(){/*
             </select><br>
             */});

            if(passedVariable === 'Ingredient'){ //For invalid entries
                rtnStr += '<p> Your Ingredient was Invalid, please enter a valid Ingredient</p><br>';
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
        }
  });
};
