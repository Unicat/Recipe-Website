var multiline = require('multiline');

exports.LoginHtml = function(req, res){
  var passedVariable = null;

  passedVariable = req.query.Valid;
  req.query.Valid = null;

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
      <title><ins>Login</ins></title>
    </head>
    <body>
      <h1>Login</h1>
      <form action = "http://localhost:3000/process_login" method = "GET" id="frm2">
      */});

    var tmpRandom = new Date(); //stopping the program from caching the page

    rtnStr += '<input type="hidden" name="_" value="' + tmpRandom.getTime() + '" />';

    rtnStr += multiline(function(){/*
      <label for="name">Username:</label><br>
      <input type="text" id="name" name="username" placeholder="Enter your username"><br>
      */});

      if (passedVariable === 'Name'||passedVariable === 'Both'){
        rtnStr += '<p> Your Username was Invalid, please enter a valid Username</p><br>';
      }

      rtnStr += multiline(function(){/*
      <label for="password">Password:</label><br>
      <input type="password" id="password" name="password" placeholder="Enter your password"><br>
      */});

      if (passedVariable === 'Pass'||passedVariable === 'Both'){
        rtnStr += '<p> Your Password was Invalid, please enter a valid Password</p><br>';
      }

      rtnStr += multiline(function(){/*
      <br>
      <input type="submit" value="Submit">
      <input type="reset">
    </form>
    */});
  rtnStr += '</body></html>';
  console.log(rtnStr);
  res.write(rtnStr);
  res.end();
};
