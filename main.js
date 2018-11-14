var express = require('express');
var path = require('path');
var app = express();

var showRecipe = require('./Recipe/Recipe');
var newHome = require('./test/newHome');
var Ingredient = require('./Filter/Ingredient/Ingredient');
var Login = require('./Login/Login');
var RecipeSelect = require('./RecipeSelect/RecipeSelect');
var Allergy = require('./Allergy/Allergy');
var LogOut = require('./Logout/Logout');

var Favourite = require('./Favourites/Favourite');
var Cuisine = require('./Filter/Cuisine/Cuisine');
var PrepTime = require('./Filter/PrepTime/PrepTime');
var SearchTag = require('./Filter/SearchTags/SearchTag');
var ServingSize = require('./Filter/ServingSize/ServingSize');
var Type = require('./Filter/Type/Type');
var Comments = require('./Comment/Comment');
var ServingCon = require('./ServingConversion/ServingCon');

var multiline = require('multiline');
var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'Recipe',
    password: 'helloworld123',
    database: 'RecipeWebsite',
    port: 8889
});

String.prototype.format = function()
// From https://journalofasoftwaredev.wordpress.com/2011/10/30/replicating-string-format-in-javascript/
{
    var content = this;
    for (var i=0; i < arguments.length; i++)
    {
        var replacement = '{' + i + '}';
        content = content.replace(replacement, mysql.escape(arguments[i]));
    }
    return content;
};

app.get('/oldtry', function (req, res) {
    res.send('Is anyone out there?');
});

//Path Names/Routes

app.use('/vendor', express.static(__dirname + '/vendor'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/video', express.static(__dirname + '/video'));
app.use('/recipetry/video', express.static(__dirname + '/video'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/recipetry/css', express.static(__dirname + '/css'));

app.use('/recipetry', showRecipe.RecipeHtml);

app.use('/try', newHome.HeaderHtml);

app.use('/logintry', Login.LoginHtml);

app.use('/logouttry', LogOut.LogoutHtml);

app.use('/selecttry', RecipeSelect.SelectRecipeHtml);

app.use('/ingredienttry', Ingredient.IngredientHtml);

app.use('/allergytry', Allergy.AllergyHtml);

app.use('/favouritetry', Favourite.FavouriteHtml);

app.use('/cuisinetry', Cuisine.CuisineHtml);

app.use('/preptimetry', PrepTime.PrepTimeHtml);

app.use('/searchtagtry', SearchTag.SearchTagHtml);

app.use('/servingsizetry', ServingSize.ServingSizeHtml);

app.use('/typetry', Type.TypeHtml);

app.use('/commenttry', Comments.CommentHtml);

app.use('/servingcontry', ServingCon.ServingConHtml);

//Getting information back from the files

app.get('/Login/Login.js', function (req, res) {
    res.sendFile(__dirname + "/Login/" + "Login.js");
});

app.get('/Logout/Logout.js', function (req, res) {
    res.sendFile(__dirname + "/Logout/" + "Logout.js");
});

app.get('/Allergy/allergy.js', function (req, res) {
    res.sendFile(__dirname + "/Allergy/" + "allergy.js");
});

app.get('/Comment/Comment.js', function (req, res) {
    res.sendFile(__dirname + "/Comment/" + "Comment.js");
});

app.get('/Filter/Ingredient/Ingredient.js', function (req, res) {
    res.sendFile(__dirname + "/Filter/Ingredient/" + "Ingredient.js");
});

app.get('/Filter/Cuisine/Cuisine.js', function (req, res) {
    res.sendFile(__dirname + "/Filter/Cuisine/" + "Cuisine.js");
});

app.get('/Filter/PrepTime/PrepTime.js', function (req, res) {
    res.sendFile(__dirname + "/Filter/PrepTime/" + "PrepTime.js");
});

app.get('/Filter/SearchTags/SearchTag.js', function (req, res) {
    res.sendFile(__dirname + "/Filter/SearchTags/" + "SearchTag.js");
});

app.get('/Filter/ServingSize/ServingSize.js', function (req, res) {
    res.sendFile(__dirname + "/Filter/ServingSize/" + "ServingSize.js");
});

app.get('/Filter/Type/Type.js', function (req, res) {
    res.sendFile(__dirname + "/Filter/Type/" + "Type.js");
});

app.get('/Favourite/Favourite.js', function (req, res) {
    res.sendFile(__dirname + "/Favourite/" + "Favourite.js");
});

app.get('/ServingConversion/ServingCon.js', function (req, res) {
    res.sendFile(__dirname + "/ServingConversion/" + "ServingCon.js");
});

app.get('/process_login', function (req, res) {
    // Prepare output in JSON format
    response = {
        Username: req.query.username,
        Password: req.query.password
    };
    var Name = req.query.username;     //Data from User
    var Pass = req.query.password;
    console.log(response);

    //Not Valid Input Section
    if (Name === ''&& Pass === '') {
         return res.redirect('/logintry?Valid=Both');     //Redirects user to login page
    }
    if (Name === '') {
        return res.redirect('/logintry?Valid=Name');     //Redirects user to login page
    }
    else if (Pass === '') {
        return res.redirect('/logintry?Valid=Pass');     //Redirects user to login page
    }

    var LoginQuery1 = 'SELECT * FROM tblAccountDetails WHERE UserName = {0}'.format(Name);
    connection.query(LoginQuery1, function (error, results, fields) {
        if (error) {
            console.log("An error has occurred at LoginQuery1.");
            console.log(error);
        }
        else if(results.length===0){
            return res.redirect('/logintry?Valid=Name');
        }
        else{
            //Hashing Function
            if (typeof(results[0]) === undefined || typeof(results[0].PasswordHASH) === undefined ){
                return res.redirect('/logintry?Valid=Name');
            }
            console.log('PasswordHASH: ', results[0].PasswordHASH);
            console.log('PasswordSALT: ', results[0].PasswordSALT);
            var IDAccount = results[0].IDAccountDetails;
            var ToBeHashed = Pass + results[0].PasswordSALT;

            var NumHash = 0;

            for (var i = 0; i < ToBeHashed.length; i++) {
                console.log(ToBeHashed.charCodeAt(i));
                NumHash = NumHash + ToBeHashed.charCodeAt(i);   //find the ascii for the password given
            }
            var hash = NumHash % 12;

            //Finds the current time and creates a cookie

            if (hash === results[0].PasswordHASH) {
                var date = new Date();

                var hour = date.getHours();
                hour = (hour < 10 ? "0" : "") + hour;

                var min = date.getMinutes();
                min = (min < 10 ? "0" : "") + min;

                var sec = date.getSeconds();
                sec = (sec < 10 ? "0" : "") + sec;

                var year = date.getFullYear();

                var month = date.getMonth() + 1;
                month = (month < 10 ? "0" : "") + month;

                var day  = date.getDate();
                day = (day < 10 ? "0" : "") + day;

                var DateTime = year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;
                //connection.query('INSERT INTO RecipeWebsite.tblCookieDetails (IDAccountDetails, ExpiryDateTime) VALUES (?, ?);', [results[0].IDAccountDetails, DateTime]);
                var LoginQuery2 = 'SELECT IDAllergyGroup FROM tblAllergyGroupAccountDetails WHERE IDAccountDetails = {0}'.format(IDAccount);
                connection.query(LoginQuery2, function (error, results, fields) {
                    if(results.length>0){
                        IDAllergyGroup = results[0].IDAllergyGroup;
                        app.set('IDAllergyGroup', IDAllergyGroup);      //Set global variable
                        app.set('IDAccount', IDAccount);      //Set global variable
                        return res.redirect(301, 'http://localhost:3000/try');     //Redirects user to the recipe select page
                        }
                    else{
                        app.set('IDAccount', IDAccount);      //Set global variable
                        return res.redirect(301, 'http://localhost:3000/try');     //Redirects user to the recipe select page
                    }

                });

            }
            else {
                return res.redirect('http://localhost:3000/logintry?Valid=Pass');      //Redirects user to login page
            }
        }
    });
});

app.get('/process_logout', function (req, res) {
    response = {
        logout: req.query.logout
    };
    var Logout = req.query.Logout;    //Data from User
    console.log(response);

    //Not valid Input Section

    if (Logout === undefined) {
        return res.redirect('/logouttry/?Valid=Logout');      //Redirects user to the logout page
    }
    else if (Logout === 'false'){
        return res.redirect('/try');
    }
    else{
        app.set('IDAccount', undefined);
        app.set('IDAllergyGroup', undefined);
        return res.redirect('/try');
    }
});

//SignUp and Allergy Input Code
app.get('/process_allergy', function (req, res) {
    app.set('IDAllergyGroup', undefined);     //Set global variable
    app.set('IDAccount', undefined);     //Set global variable
    response = {
        Username: req.query.username,
        EmailAddress: req.query.emailaddress,
        Password: req.query.password,
        PasswordConfirmation: req.query.passwordconfirmation,
        AllergyType: req.query.allergy
    };
    var Name = req.query.username;
    var Email = req.query.emailaddress;    //Data from User
    var Pass1 = req.query.password;
    var Pass2 = req.query.passwordconfirmation;
    var AllergyType = req.query.allergy;
    console.log(response);

    //Not valid Input Section

    var AtSymbol = false;
    for (var i = 0; i < Email.length; i++) {     //Makes sure Email is valid
        if (Email[i] === '@') {
            AtSymbol = true;
        }
    }
    if (Email === '' || (AtSymbol === false)) {
        return res.redirect('/allergytry?Valid=Email');     //Redirects user to Allergy/SignUp page
    }
    else if (Name === '') {
        return res.redirect('/allergytry?Valid=Name');     //Redirects user to Allergy/SignUp page
    }
    else if (Pass1 === '') {
        return res.redirect('/allergytry?Valid=Pass1');     //Redirects user to Allergy/SignUp page
    }
    else if (Pass2 === '') {
        return res.redirect('/allergytry?Valid=Pass2');      //Redirects user to Allergy/SignUp page
    }
    else if (Pass2 !== Pass1) {
        return res.redirect('/allergytry?Valid=PassDiff');     //Redirects user to Allergy/SignUp page
    }
    var SignUpQuery1 = 'SELECT UserName FROM tblAccountDetails;';    //Find all the Usernames and compare to the to the entered
    connection.query(SignUpQuery1, function (error, results, fields) {
        if (error) {
            console.log("An error has occurred at SignUpQuery1.");
            console.log(error);
        }
        else {
            for (var i = 0; i < results.length; i++) {
                if (results[i] === Name) {
                    return res.redirect('/allergytry?Valid=Name');   //Redirects user to Allergy/SignUp page
                }
            }
            //Create Salt
            function randomString(length, chars) {
                var salt = '';
                for (var i = length; i > 0; --i) salt += chars[Math.floor(Math.random() * chars.length)];
                console.log(salt);
                return salt;
            }

            var Salt = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

            var ToBeHashed = Pass1 + Salt;
            var NumHash = 0;

            for (var i = 0; i < ToBeHashed.length; i++) {     //Turn to be hashed value into ascii
                NumHash = NumHash + ToBeHashed.charCodeAt(i);
            }
            var hash = NumHash % 12;     //Modulus the hash

            //Insert Data into database, then find the ID of the created account
            console.log(Name);
            console.log(Email);
            console.log(hash);
            console.log(Salt);

            connection.query('INSERT INTO RecipeWebsite.tblAccountDetails (UserName, EmailAddress, PasswordHASH, PasswordSALT) VALUES (?, ?, ?, ?);', [Name, Email, hash, Salt], function (error, results, fields) {
                if (error) {
                    console.log("An error has occurred at SignUpQuery3.");
                    console.log(error);
                }
                else{
                    var SignUpQuery2 = 'SELECT IDAccountDetails FROM tblAccountDetails WHERE UserName = ' + connection.escape(Name) + ";";
                    connection.query(SignUpQuery2, function (error, results, fields) {
                        if (error) {
                            console.log("An error has occurred at SignUpQuery2.");
                            console.log(error);
                        }
                        else{
                            var IDAccount = results[0].IDAccountDetails;
                            app.set('IDAccount', IDAccount);       //Set global variable
                            //Insert Data into database if allergy info was entered, then find ID of each allergy that applies to the account
                            console.log(IDAccount);
                            if (AllergyType !== "null") {
                                var IDAllergyGroup;

                                    var AllergyQuery1 = 'SELECT IDAllergyGroup FROM tblAllergyGroup WHERE AllergyGroupName = ' + connection.escape(AllergyType);
                                    connection.query(AllergyQuery1, function (error, results, fields) {
                                        if (error) {
                                            console.log("An error has occurred at AllergyQuery1.");
                                            console.log(error);
                                        }
                                        else{
                                            IDAllergyGroup = results[0].IDAllergyGroup;
                                            connection.query('INSERT INTO RecipeWebsite.tblAllergyGroupAccountDetails (IDAllergyGroup, IDAccountDetails) VALUES (?, ?);', [IDAllergyGroup, IDAccount]);
                                            app.set('IDAllergyGroup', IDAllergyGroup);     //Set global variable
                                            return res.redirect(301, 'http://localhost:3000/try');
                                        }
                                    });
                            }
                            else{
                                return res.redirect(301, 'http://localhost:3000/try');
                            }
                        }
                    });
                }
            });
        }
    });
});

//Comment Input Code
app.get('/process_comment', function (req, res) {
    response = {
        comment: req.query.comment,
        Rating: req.query.rating,
        IDRecipe: req.query.IDRecipe
    };
    var comment = req.query.comment;   //Data from User
    var rating = req.query.rating;
    var IDRecipe = req.query.IDRecipe;
    var IDAccount = req.app.get('IDAccount');
    console.log(response);

    //Not valid Input Section

    if (comment === '' && rating === undefined) {
        return res.redirect('/commenttry?Valid=Both');     //Redirects user to the Comment page
    }
    else if (comment === '') {
        return res.redirect('/commenttry?Valid=Comment');     //Redirects user to the Comment page
    }
    else if (rating === undefined) {
        return res.redirect('/commenttry?Valid=Rating');     //Redirects user to the Comment page
    }
    else{
        connection.query('INSERT INTO tblComment (CommentDescription, Rating, IDAccountDetails, IDRecipe) VALUES (?, ?, ?, ?);', [comment, rating, IDAccount, IDRecipe]);
        return res.redirect('/recipetry/?IDRecipe='+IDRecipe);
    }
});

app.get('/process_ingredient', function (req, res) {
    response = {
        ingredient: req.query.ingredient
    };
    var Ingredient = req.query.ingredient;    //Data from User
    console.log(response);

    //Not valid Input Section

    if (Ingredient === 'null') {
        return res.redirect('/ingredienttry?Valid=Ingredient');     //Redirects user to the In page
    }
    else{
        app.set('FilterOption', 'Ingredient');
        app.set('FilterData', Ingredient);
        return res.redirect('/selecttry');     //Redirects user to the Select page
    }
});

app.get('/process_searchtag', function (req, res) {
    response = {
        searchtag: req.query.searchtag
    };
    var SearchTag = req.query.searchtag;    //Data from User
    console.log(response);

    //Not valid Input Section

    if (SearchTag === 'null') {
        return res.redirect('/searchtagtry?Valid=SearchTag');      //Redirects user to the SearchTag page
    }
    else{
        app.set('FilterOption', 'SearchTag');
        app.set('FilterData', SearchTag);
        return res.redirect('/selecttry');     //Redirects user to the Select page
    }
});

app.get('/process_cuisine', function (req, res) {
    response = {
        cuisine: req.query.cuisine
    };
    var Cuisine = req.query.cuisine;    //Data from User
    console.log(response);

    //Not valid Input Section

    if (Cuisine === 'null') {
        return res.redirect('/cuisinetry?Valid=Cuisine');      //Redirects user to the Cuisine page
    }
    else{
        app.set('FilterOption', 'Cuisine');
        app.set('FilterData', Cuisine);
        return res.redirect('/selecttry');     //Redirects user to the Select page
    }
});

app.get('/process_preptime', function (req, res) {
    response = {
        preptime: req.query.preptime
    };
    var PrepTime = req.query.preptime;    //Data from User
    console.log(response);

    //Not valid Input Section

    if (PrepTime === 'null') {
        return res.redirect('/preptimetry?Valid=PrepTime');     //Redirects user to the Prep Time page
    }
    else{
        app.set('FilterOption', 'PrepTime');
        app.set('FilterData', PrepTime);
        return res.redirect('/selecttry');     //Redirects user to the Select page
    }
});

app.get('/process_type', function (req, res) {
    response = {
        type: req.query.type
    };
    var Type = req.query.type;    //Data from User
    console.log(response);

    //Not valid Input Section

    if (Type === 'null') {
        return res.redirect('/typetry?Valid=Type');     //Redirects user to the Type page
    }
    else{
        app.set('FilterOption', 'Type');
        app.set('FilterData', Type);
        return res.redirect('/selecttry');     //Redirects user to the Select page
    }
});

app.get('/process_servingsize', function (req, res) {
    response = {
        servingsize: req.query.servingsize
    };
    var ServingSize = req.query.servingsize;    //Data from User
    console.log(response);

    //Not valid Input Section

    if (ServingSize === 'null') {
        //connection.end();
        return res.redirect('/servingsizetry?Valid=ServingSize');      //Redirects user to the Serving Size page
    }
    else{
        app.set('FilterOption', 'ServingSize');
        app.set('FilterData', ServingSize);
        return res.redirect('/selecttry');     //Redirects user to the Select page
    }
});

app.get('/process_favourite', function (req, res) {
    response = {
        favourite: req.query.Favourite,
        IDRecipe: req.query.IDRecipe
    };
    var Favourite = req.query.Favourite;    //Data from User
    var IDRecipe = req.query.IDRecipe;
    console.log(response);
    var IDAccount = req.app.get('IDAccount');
    //Not valid Input Section

    if (Favourite === 'null'|| Favourite=== undefined) {
        return res.redirect('/favouritetry?Valid=Favourite');      //Redirects user to the Favourite page
    }
    else{
        connection.query('INSERT INTO tblFavourite (IDAccountDetails, IDRecipe) VALUES (?, ?);', [IDAccount, IDRecipe]);
        return res.redirect('/recipetry/?IDRecipe='+IDRecipe);
    }
});

app.get('/process_servingcon', function (req, res) {
    response = {
        serving: req.query.serving,
        IDRecipe: req.query.IDRecipe
    };
    var ServingCon = req.query.serving;
    var IDRecipe = req.query.IDRecipe;
    console.log(response);

    //Not valid Input Section

    if (ServingCon === 'null'|| ServingCon === undefined) {
        //connection.end();
        return res.redirect('/servingcontry?Valid=ServingCon');     //Redirects user to the Serving Conversion page
    }
    else{
        ServingChange = true;
        app.set('ServingCon', ServingCon);
        app.set('ServingChange', ServingChange);
        return res.redirect('/recipetry/?IDRecipe='+IDRecipe);
    }
    //res.end(JSON.stringify(response));
    //connection.end();
});
//console.log("GOING DOWN");

app.listen(3000, function () {
    console.log('Go listen on port 3000')
});