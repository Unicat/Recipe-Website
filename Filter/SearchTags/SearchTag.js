var multiline = require('multiline');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'Recipe',
  password : 'helloworld123',
  database : 'RecipeWebsite',
  port : 8889
});

exports.SearchTagHtml = function(req, res){
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
      <title><ins>Filter by Search Tags</ins></title>
    </head>
    <body>
      <h1>Filter by Search Tags</h1>
      <form action = "http://localhost:3000/process_searchtag" method = "GET" id="frm2">
      Search Tag<br>
      <select name="searchtag">
   <option selected="selected"value=null>--------</option>
    */});
    var SearchTagQuery1 = 'SELECT SearchTagName FROM tblSearchTag;'; //Finding and selecting all possible searchtags
    connection.query(SearchTagQuery1, function (error, results, fields) {
        if (error) {
            console.log("An error has occurred at SearchTagQuery1.");
        }
        else {
            for (var i = 0; i<results.length; i++){
                rtnStr += '<option value="';
                rtnStr += results[i].SearchTagName;
                rtnStr += '">';
                rtnStr += results[i].SearchTagName;
                rtnStr += '</option>';
            }
            rtnStr += multiline(function(){/*
             </select><br>
             */});

            if(passedVariable === 'SearchTag'){ //For invalid entries
                rtnStr += '<p> Your Search Tag was Invalid, please enter a valid Search Tag</p><br>';
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
