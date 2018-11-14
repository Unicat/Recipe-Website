var multiline = require('multiline')
var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'Recipe',
    password : 'helloworld123',
    database : 'RecipeWebsite',
    port : 8889
});

exports.LogoutHtml = function(req, res){
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
     <title><ins>Logout</ins></title>
     </head>
     <body>
     <h1>Logout</h1>
     <form action = "http://localhost:3000/process_logout" method = "GET" id="frm1">
     <label for="logout">Logout?:</label><br>
     <input type="radio" id="Yes" name="Logout" value="true"> Yes<br>
     <input type="radio" id="No" name="Logout" value="false"> No<br>
     */});

    if(passedVariable === 'Logout'){ //For invalid entries
        rtnStr += '<p> Your Logout Choice was Invalid, please enter a valid Logout Choice</p><br>';
    }

    rtnStr += multiline(function(){/*
     <br>
     <input type="submit" value="Submit">
     <input type="reset">
     <a href="http://localhost:3000/try" class="btn">Home</a>
     <!-- <input type="reset" href="http://localhost:3000/" value="Home"> -->
     </form>
     */});
    rtnStr += '</body></html>';
    res.write(rtnStr);
    res.end();
};
