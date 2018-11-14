var multiline = require('multiline');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'Recipe',
  password : 'helloworld123',
  database : 'RecipeWebsite',
  port : 8889
});

exports.AllergyHtml = function(req, res){
  var passedVariable = null;
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
      <title><ins>Allergy Info</ins></title>
    </head>
    <body>
    <h1>Sign Up</h1>
    <form action = "http://localhost:3000/process_allergy" method = "GET" id="frm2">
    <label for="name">Username:</label><br>
    <input type="text" id="name" name="username" placeholder="Enter a username"><br>
    */});

    if (passedVariable === 'Name'){ //For invalid entries
      rtnStr += '<p> Your Username was Invalid, please enter a valid Username</p><br>';
    }

    rtnStr += multiline(function(){/*

    <label for="emailaddress">Email Address:</label><br>
    <input type="text" id="emailaddress" name="emailaddress" placeholder="Enter an Email Address"><br>
    */});

    if (passedVariable === 'Email'){ //For invalid entries
      rtnStr += '<p> Your Email was Invalid, please enter a valid Email Address</p><br>';
    }

    rtnStr += multiline(function(){/*
    <label for="password">Password:</label><br>
    <input type="password" id="password" name="password" placeholder="Enter a password"><br>
    */});

    if (passedVariable === 'Pass1'){ //For invalid entries
      rtnStr += '<p> Your Password was Invalid, please enter a valid Password</p><br>';
    }

    rtnStr += multiline(function(){/*
    <label for="password">Password Confirmation:</label><br>
    <input type="password" id="passwordconfirmation" name="passwordconfirmation" placeholder="Re-enter your password"><br>
    */});

    if (passedVariable === 'Pass2'){ //For invalid entries
      rtnStr += '<p> Your Password was Invalid, please enter a valid Password</p><br>';
    }
    else if (passedVariable === 'PassDiff'){ //For invalid entries
      rtnStr += '<p> Your Passwords do not match, please enter valid Passwords</p><br>';
    }

    rtnStr += multiline(function(){/*
    <br>
    <h1>Please check all your allergies/preferences</h1>
    <form action = "http://localhost:3000/process_allergy" method = "GET" id="frm2">
    Allergy:<br>
     <select name="allergy">
     <option selected="selected"value=null>--------</option>
    */});

    //connection.connect();
    var AllergyQuery1 = 'SELECT AllergyGroupName FROM tblAllergyGroup'; //Selecting and finding all possible allergies
    connection.query(AllergyQuery1, function (error, results, fields) {
        if (error) {
            console.log("An error has occured.");
        }
        else {
            for (var i = 0; i<results.length; i++){
                var Allergy = results[i].AllergyGroupName;
                rtnStr += '<option value="';
                rtnStr += Allergy;
                rtnStr += '">';
                rtnStr += Allergy;
                rtnStr += '</option>';
            }
            rtnStr += multiline(function(){/*
             </select><br>
             */});
        }
      rtnStr += multiline(function(){/*
        </select><br><br>
          <input type="submit" value="Submit">
          <input type="reset">
          <a href="http://localhost:3000/try" class="btn">Home</a>
        </form>
        </body>
        </html>
        */});
        res.write(rtnStr);
        res.end();
  });
    //connection.end();
};
