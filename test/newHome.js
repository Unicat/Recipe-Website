var express = require('express');
var path = require('path');
var app = express();
var multiline = require('multiline');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'Recipe',
  password : 'helloworld123',
  database : 'RecipeWebsite',
  port : 8889
});
//specifies variables
exports.HeaderHtml = function(req, res, next){
    app.set('IDRecipe', null);
var IDAccount ='';      //Create Variables
var Cuisine ='';
var IDAllergyGroup=req.app.get('IDAllergyGroup');
if(req.app.get('IDAccount') === undefined||req.app.get('IDAccount')=== null){     //Is user logged in?
  IDAccount = 0;
}
else{
    IDAccount = req.app.get('IDAccount');
}
//IDAccount = 1;

    function AddMore(){ //finishing function
        rtnStr += multiline(function(){/*
         <!-- START FOOTER-->
         <footer id="footer">
         <div class="container">
         <div class="row">
         <div class="col-sm-6">
         <ul class="footer-nav">
         <li><a href="#header" class="scrollto">Home</a>
         </li>
         <li><a href="#versions" class="scrollto">Suggestions</a>
         </li>
         <li><a href="#download" class="scrollto">Login</a>
         </li>
         <li><a href="#features" class="scrollto">Filtering</a>
         </li>
         <li><a href="#plan" class="scrollto">Favourites</a>
         </li>
         </ul>
         </div>
         <div class="col-sm-6">
         <!-- COPYRIGHT-->
         <p class="copyright">{C}Cupcakes &copy; 2017</p>
         </div>
         </div>
         </div>
         </footer>
         */});

        rtnStr += multiline(function(){/*
         <script src="vendor/jquery/dist/jquery.min.js"></script>
         <script src="vendor/jquery.browser/dist/jquery.browser.js"></script>
         <script src="vendor/jquery.easing/js/jquery.easing.js"></script>
         <script src="vendor/bootstrap/dist/js/bootstrap.js"></script>
         <script src="vendor/waitForImages/dist/jquery.waitforimages.min.js"></script>
         <script src="vendor/smoothscroll/smoothscroll.js"></script>
         <script src="vendor/owl.carousel/dist/owl.carousel.js"></script>
         <script src="vendor/Nivo-Lightbox/nivo-lightbox.js"></script>
         <script src="vendor/jquery.scrollTo/jquery.scrollTo.js"></script>
         <script src="vendor/wow/dist/wow.js"></script>
         <script src="vendor/matchMedia/matchMedia.js"></script>
         <script src="vendor/background-video/jquery.backgroundvideo.js"></script>
         <script src="vendor/jQuery-One-Page-Nav/jquery.nav.js"></script>
         <script src="vendor/jQuery-Storage-API/jquery.storageapi.js"></script>
         <!-- SITE SCRIPTS-->
         <script src="js/scripts.js"></script>x
         */});

        rtnStr += '</body></html>';
        res.write(rtnStr);
        res.end();
    }

  var rtnStr = multiline(function(){/*
  <!DOCTYPE html>
  <html lang="en">
  <head>
     <meta charset="UTF-8">
     <meta name="description" content="Landing Page Template">
     <meta name="keywords" content="bootstrap, app, theme">
     <meta name="author" content="@themicon">
     <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
     <title>Scrumptious Recipes</title>
     <!-- PREALOADER (loads asap)-->
     <link rel="stylesheet" href="vendor/nprogress/nprogress.css">
     <script src="vendor/nprogress/nprogress.js"></script>
     <!-- FAVICON-->
     <link rel="icon" href="img/favicon/favicon.ico">
     <link rel="apple-touch-icon" href="img/favicon/apple-touch-icon.png">
     <link rel="apple-touch-icon" sizes="57x57" href="img/favicon/apple-touch-icon-57x57-precomposed.png">
     <link rel="apple-touch-icon" sizes="72x72" href="img/favicon/apple-touch-icon-72x72-precomposed.png">
     <link rel="apple-touch-icon" sizes="114x114" href="img/favicon/apple-touch-icon-114x114-precomposed.png">
     <link rel="apple-touch-icon" sizes="144x144" href="img/favicon/apple-touch-icon-144x144-precomposed.png">
     <!-- FONT-->
     <link href="//fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,400italic" rel="stylesheet" type="text/css">
     <!-- ICONS-->
     <link rel="stylesheet" href="vendor/font-awesome/css/font-awesome.min.css">
     <script src="vendor/jquery.browser/dist/jquery.browser.js"></script>
     <script>
        if ( window.jQBrowser.mobile && top.location != location) top.location.href = document.location.href;
     </script>
     <!-- VENDOR CSS-->
     <link rel="stylesheet" href="vendor/owl.carousel/dist/assets/owl.carousel.css">
     <link rel="stylesheet" href="vendor/owl.carousel/dist/assets/owl.theme.default.css">
     <link rel="stylesheet" href="vendor/Nivo-Lightbox/nivo-lightbox.css">
     <link rel="stylesheet" href="vendor/Nivo-Lightbox/themes/default/default.css">
     <link rel="stylesheet" href="vendor/animate.css/animate.css">
     <!-- SITE CSS-->
     <link rel="stylesheet" href="css/styles.css" id="stylescss">
     <link rel="stylesheet" href="css/theme-a.css">
     <!--[if lt IE 9]><script src="js/html5shiv.js"></script><script src="js/respond.min.js"></script><![endif]-->
  </head>
    */});

  rtnStr += multiline(function(){/*
    <body>
       <!-- WEBSITE PRELOADER-->
       <div class="preloader">
          <div class="loading">Loading ...</div>
       </div>
       <!-- START HEADER-->
       <header id="header" class="header novideo">
          <div class="full-screen">
             <!-- START STICKY NAVBAR-->
             <div class="navbar navbar-default navbar-fixed-top navbar-sticky">
                <div class="container">
                   <div class="navbar-header">
                      <button type="button" data-toggle="collapse" data-target="#navbar-main" class="navbar-toggle">
                         <span class="sr-only">Toggle navigation</span>
                         <span class="icon-bar"></span>
                         <span class="icon-bar"></span>
                         <span class="icon-bar"></span>
                      </button>
                      <a href="#" class="navbar-brand">
                         <img src="img/CupcakeLogo.png" alt="">
                      </a>
                   </div>
                   <!-- MENU-->
                   <div id="navbar-main" class="navbar-collapse collapse">
                      <ul class="nav navbar-nav navbar-right main-navbar">
                         <li><a href="#header">Home</a>
                         </li>
                         <li><a href="#versions">Suggestions</a>
                         </li>
                         <li><a href="#download">Login</a>
                         </li>
                         <!-- <li id="clickMe">Click Me
                         </li> -->
                         <li><a href="#features">Filtering</a>
                         </li>
                         <li><a href="#plans">Favourites</a>
                         </li>
                      </ul>
                   </div>
                </div>
             </div>
             <!-- END STICKY NAVBAR-->
             <div class="container">
                <!-- MAIN LOGO-->
                <div class="top-logo">
                   <img src="img/CupcakeLogo.png" alt="">
                </div>
                <div class="row">
                   <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                      <!-- INTRO MESSAGE-->
                      <div class="intro-section">
                         <h1 class="intro">Scrumptious Recipes</h1>
                      </div>
                      <div class="intro-shot">
                         <img src="img/ButterflyCupcakes.png" alt="Header shot" data-no-retina="" class="img-responsive">
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </header>
    */});

   var count;
   if (IDAccount !== 0){      //If logged in
     rtnStr += multiline(function(){/*
       <section id="versions" class="versions">
          <div class="container">
             <!-- START SECTION HEADER-->
             <div data-wow-offset="120" data-wow-duration="1.3s" class="section-header wow fadeIn animated">
                <!-- SECTION TITLE-->
                <h2>Suggestions</h2>
                <div class="section-description">High Rated Recipes and Suggestions</div>
                */});
     //aggregate SQL functions for finding number of recipes, comments and users registered
       var AmountOfRecipesQuery1 = 'SELECT Count(IDRecipe) AS NumberOfRecipes FROM tblRecipe;';
       connection.query(AmountOfRecipesQuery1, function (error, results, fields) {
           if (error) {
               console.log("An error has occurred at AmountOfRecipesQuery1.");
               console.log(error);
           }
           else {
               var NumOfRecipes = results[0].NumberOfRecipes;
               var AmountOfUsersQuery1 = 'SELECT Count(IDAccountDetails) AS NumberOfUsers FROM tblAccountDetails;';
               connection.query(AmountOfUsersQuery1, function (error, results, fields) {
                   if (error) {
                       console.log("An error has occurred at AmountOfUsersQuery1.");
                       console.log(error);
                   }
                   else {
                       var NumOfUsers = results[0].NumberOfUsers;
                       var AmountOfCommentsQuery1 = 'SELECT Count(IDComment) AS NumberOfComments FROM tblComment;';
                       connection.query(AmountOfCommentsQuery1, function (error, results, fields) {
                           if (error) {
                               console.log("An error has occurred at AmountOfCommentsQuery1.");
                               console.log(error);
                           }
                           else {
                               var NumOfComments = results[0].NumberOfComments;
                               rtnStr += '<p>Currently the number of users registered on the site is ';
                               rtnStr += NumOfUsers;
                               rtnStr += ', who have made in total ';
                               rtnStr += NumOfComments;
                               rtnStr += ' comments on the site, on a total number of ';
                               rtnStr += NumOfRecipes;
                               rtnStr += ' recipes.</p>';
                               rtnStr +='</div>';
                               //these queries find the suggestions for the user
                               var SuggestionQuery1 = 'SELECT Cuisine FROM tblFavourite, tblRecipe WHERE tblFavourite.IDRecipe = tblRecipe.IDRecipe AND IDAccountDetails = ' + connection.escape(IDAccount);
                               connection.query(SuggestionQuery1, function (error, results, fields) {
                                   if (error) {
                                       console.log("An error has occurred at SuggestionQuery1.");
                                       console.log(error);
                                   }
                                   else if(results.length===0){
                                       rtnStr += multiline(function(){/*
                                        <div class="section-description">Please add Recipes to your favourites</div>
                                        */});
                                       Add(IDAccount);
                                   }
                                   else {
                                       console.log(results[0].Cuisine);
                                       var Cuisine = results[0].Cuisine;

                                       var SuggestionQuery2 = 'SELECT tblRecipe.IDRecipe, RecipeTitle, Description, ImageName FROM tblRecipe, tblImage, tblRecipeImage WHERE tblRecipeImage.IDRecipe = tblRecipe.IDRecipe AND tblRecipeImage.IDImage = tblImage.IDImage AND MainImage = true AND Cuisine = ' + connection.escape(Cuisine);
                                       connection.query(SuggestionQuery2, function (error, results, fields) {
                                           if (error) {
                                               console.log("An error has occurred at SuggestionQuery2.");
                                               console.log(error);
                                           }
                                           else{
                                               if (results.length <=10){
                                                   count = results.length;
                                               }
                                               else{
                                                   count = 10;
                                               }
                                               for (var i =0; i<count; i++){
                                                   if (IDAllergyGroup != 'null'&& IDAllergyGroup != undefined) {
                                                       var ImageName = results[i].ImageName;
                                                       var RecipeTitle = results[i].RecipeTitle;
                                                       var Description = results[i].Description;
                                                       var IDRecipe = results[i].IDRecipe;
                                                       var FilterQuery2 = 'SELECT IDAllergyGroup FROM tblRecipe, tblImage, tblRecipeImage, tblIngredient, tblRecipeIngredient, tblIngredientAllergyGroups WHERE tblRecipeImage.IDRecipe = tblRecipe.IDRecipe AND tblRecipeImage.IDImage = tblImage.IDImage AND MainImage = true AND tblRecipeIngredient.IDRecipe = tblRecipe.IDRecipe AND tblRecipeIngredient.IDIngredient = tblIngredient.IDIngredient AND tblIngredientAllergyGroups.IDIngredient = tblIngredient.IDIngredient AND tblRecipe.IDRecipe = ' + connection.escape(IDRecipe) + ' AND IDAllergyGroup = ' + connection.escape(IDAllergyGroup) + ';';
                                                       console.log(FilterQuery2);
                                                       connection.query(FilterQuery2, function (error, results, fields) {
                                                           if (error) {
                                                               console.log("An error has occurred at FilterQuery1.");
                                                               console.log(error);
                                                           }
                                                           else {
                                                               if (results.length === 0) {
                                                                   rtnStr += multiline(function () {/*
                                                                    <!-- END SECTION HEADER-->
                                                                    <div class="row bottom-space">
                                                                    <div class="col-lg-offset-3 col-lg-6 col-md-offset-0 col-sm-6 col-xs-12">
                                                                    <div class="media media-card">
                                                                    <div class="media-left media-middle">
                                                                    <a href="#">
                                                                    <img src="img/versions/
                                                                    */
                                                                   });
                                                                   rtnStr += ImageName;
                                                                   rtnStr += multiline(function () {/*
.png"width="128px" alt="" data-no-retina="" data-wow-offset="15" data-wow-duration=".5s" class="wow zoomIn animated img-responsive version-pic">
                                                                    </a>
                                                                    </div>
                                                                    <div class="media-body">
                                                                    <h4 class="media-heading">
                                                                    <strong>
                                                                    */
                                                                   });
                                                                   rtnStr += RecipeTitle;
                                                                   rtnStr += multiline(function () {/*
                                                                    </strong>
                                                                    </h4>
                                                                    <p class="media-card-text">
                                                                    */
                                                                   });
                                                                   rtnStr += Description;
                                                                   rtnStr += multiline(function () {/*
                                                                    </p>
                                                                    <div class="text-right"><a href="/recipetry/?IDRecipe=
                                                                    */
                                                                   });
                                                                   rtnStr += IDRecipe;
                                                                   rtnStr += multiline(function () {/*
" class="btn btn-sm btn-default">Go to Recipe</a>
                                                                    </div>
                                                                    </div>
                                                                    </div>
                                                                    </div>
                                                                    */
                                                                   });
                                                                   if(i===count) {
                                                                       Add(IDAccount);
                                                                   }

                                                               }
                                                               else {
                                                                   Add(IDAccount);
                                                               }
                                                           }
                                                       });
                                                   }
                                                   else {
                                                       rtnStr += multiline(function () {/*
                                                        <!-- END SECTION HEADER-->
                                                        <div class="row bottom-space">
                                                        <div class="col-lg-offset-3 col-lg-6 col-md-offset-0 col-sm-6 col-xs-12">
                                                        <div class="media media-card">
                                                        <div class="media-left media-middle">
                                                        <a href="#">
                                                        <img src="img/versions/
                                                        */
                                                       });
                                                       rtnStr += results[i].ImageName;
                                                       rtnStr += multiline(function () {/*
.png"width="128px" alt="" data-no-retina="" data-wow-offset="15" data-wow-duration=".5s" class="wow zoomIn animated img-responsive version-pic">
                                                        </a>
                                                        </div>
                                                        <div class="media-body">
                                                        <h4 class="media-heading">
                                                        <strong>
                                                        */
                                                       });
                                                       rtnStr += results[i].RecipeTitle;
                                                       rtnStr += multiline(function () {/*
                                                        </strong>
                                                        </h4>
                                                        <p class="media-card-text">
                                                        */
                                                       });
                                                       rtnStr += results[i].Description;
                                                       rtnStr += multiline(function () {/*
                                                        </p>
                                                        <div class="text-right"><a href="/recipetry/?IDRecipe=
                                                        */
                                                       });
                                                       rtnStr += results[i].IDRecipe;
                                                       rtnStr += multiline(function () {/*
" class="btn btn-sm btn-default">Go to Recipe</a>
                                                        </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                        */
                                                       });
                                                   }
                                                   if(i===(count-1)){
                                                       Add(IDAccount);
                                                   }
                                               }

                                           }
                                       });
                                   }
                               });
                           }
                       });
                   }
               });
           }
       });
   }
   else {
     rtnStr += multiline(function(){/*
       <section id="versions" class="versions">
          <div class="container">
             <!-- START SECTION HEADER-->
             <div data-wow-offset="120" data-wow-duration="1.3s" class="section-header wow fadeIn animated">
                <!-- SECTION TITLE-->
                <h2>Suggestions</h2>
                <div class="section-description">Please Login for this feature to work or add Recipes to your favourites</div>
       */});
     //duplicate of aggregation for when not logged in
       var AmountOfRecipesQuery1 = 'SELECT Count(IDRecipe) AS NumberOfRecipes FROM tblRecipe';
       connection.query(AmountOfRecipesQuery1, function (error, results, fields) {
           if (error) {
               console.log("An error has occurred at AmountOfRecipesQuery1.");
               console.log(error);
           }
           else {
               var NumOfRecipes = results[0].NumberOfRecipes;
               var AmountOfUsersQuery1 = 'SELECT Count(IDAccountDetails) AS NumberOfUsers FROM tblAccountDetails';
               connection.query(AmountOfUsersQuery1, function (error, results, fields) {
                   if (error) {
                       console.log("An error has occurred at AmountOfUsersQuery1.");
                       console.log(error);
                   }
                   else {
                       var NumOfUsers = results[0].NumberOfUsers;
                       var AmountOfCommentsQuery1 = 'SELECT Count(IDComment) AS NumberOfComments FROM tblComment';
                       connection.query(AmountOfCommentsQuery1, function (error, results, fields) {
                           if (error) {
                               console.log("An error has occurred at AmountOfCommentsQuery1.");
                               console.log(error);
                           }
                           else {
                               var NumOfComments = results[0].NumberOfComments;
                               rtnStr += '<p>Currently the number of users registered on the site is ';
                               rtnStr += NumOfUsers;
                               rtnStr += ', who have made in total ';
                               rtnStr += NumOfComments;
                               rtnStr += ' comments on the site, on a total number of ';
                               rtnStr += NumOfRecipes;
                               rtnStr += ' recipes.</p>';
                               Add(IDAccount); //calls Add function
                           }
                       });
                   }
               });
           }
       });

   }

function Add(IDAccount){ //code that needs to at the end of suggestion regardless of if logged in
    rtnStr += multiline(function(){/*
     </div>
     </div>
     </div>
     </section>
     */});
    rtnStr += multiline(function(){/*
     <!-- START DOWNLOAD-->
     <section id="download" class="download">
     <div class="container">
     <h2 data-wow-offset="15" data-wow-duration="1.2s" class="wow fadeInDown animated">
     */});

    if (IDAccount !== 0){
        rtnStr += multiline(function(){/*
         Logout</h2>
         <div data-wow-offset="15" data-wow-duration="1.2s" class="wow fadeInUp animated">
         <a href="http://localhost:3000/logouttry/" class="btn btn-lg btn-theme">
         <!-- <em class="fa fa-android"></em> -->
         Logout</a>
         </div>
         </div>
         </section>
         <!-- END DOWNLOAD-->
         */});
    }
    else {
        rtnStr += multiline(function(){/*
         Please Login</h2>
         <div data-wow-offset="15" data-wow-duration="1.2s" class="wow fadeInUp animated">
         <a href="http://localhost:3000/allergytry/" class="btn btn-lg btn-theme">
         <!-- <em class="fa fa-apple"></em> -->
         Sign up</a>
         <a href="http://localhost:3000/logintry/" class="btn btn-lg btn-theme">
         <!-- <em class="fa fa-android"></em> -->
         Login</a>
         </div>
         </div>
         </section>
         <!-- END DOWNLOAD-->
         */});
    }
    rtnStr += multiline(function(){/*
     <!-- START FEATURE LIST-->
     <section id="features" class="features-list">
     <div class="container">
     <!-- START SECTION HEADER-->
     <div data-wow-offset="120" data-wow-duration="1.3s" class="section-header wow fadeIn animated">
     <!-- SECTION TITLE-->
     <h2>Filtering</h2>
     <div class="section-description">Filter by: Ingredient, Serving Size, Cuisine, Time to Prepare, Recent Uploads or Search Tags</div>
     </div>
     <!-- END SECTION HEADER-->
     <div class="row">
     <!-- START FEATURES LEFT-->
     <div class="col-md-4 col-sm-4 features-left">
     <!-- FEATURE-->
     <div class="feature">
     <!-- FEATURE TEXT-->
     <div class="feature-details">
     <h4 class="main-color">Ingredient</h4>
     <p>Filter by a specific Ingredient.</p>
     <div class="text-right"><a href="http://localhost:3000/ingredienttry/" class="btn btn-sm btn-default">Filter</a>
     </div>
     </div>
     </div>
     <!-- FEATURE-->
     <div class="feature">
     <!-- FEATURE TEXT-->
     <div class="feature-details">
     <h4 class="main-color">Serving Size</h4>
     <p>Filter by amount of servings, eg 2 people.</p>
     <div class="text-right"><a href="http://localhost:3000/servingsizetry/" class="btn btn-sm btn-default">Filter</a>
     </div>
     </div>
     </div>
     <!-- FEATURE-->
     <div class="feature">
     <!-- FEATURE TEXT-->
     <div class="feature-details">
     <h4 class="main-color">Cuisine</h4>
     <p>Filter by type of Cuisine, eg French, Spanish.</p>
     <div class="text-right"><a href="http://localhost:3000/cuisinetry/" class="btn btn-sm btn-default">Filter</a>
     </div>
     </div>
     </div>
     </div>
     <!-- END FEATURES LEFT-->
     <!-- START MOBILE MOCKUP-->
     <div class="col-md-4 col-sm-4">
     <div data-wow-offset="120" data-wow-duration="1.3s" class="mockup-mobile wow fadeIn animated">
     <img src="img/macaron.png" alt="" data-no-retina>
     </div>
     </div>
     <!-- END MOBILE MOCKUP-->
     <!-- START FEATURES RIGHT-->
     <div class="col-md-4 col-sm-4 features-right">
     <!-- FEATURE-->
     <div class="feature">
     <!-- FEATURE ICON-->
     <!-- FEATURE TEXT-->
     <div class="feature-details">
     <h4 class="main-color">Time to Prepare</h4>
     <p>Filter by amount of time taken to prepare</p>
     <div class="text-left"><a href="http://localhost:3000/preptimetry/" class="btn btn-sm btn-default">Filter</a>
     </div>
     </div>
     </div>
     <!-- FEATURE-->
     <div class="feature">
     <!-- FEATURE TEXT-->
     <div class="feature-details">
     <h4 class="main-color">Type of Food</h4>
     <p>Filter by Type of food, eg Pasta, Bread, Cupcakes.</p>
     <div class="text-left"><a href="http://localhost:3000/typetry/" class="btn btn-sm btn-default">Filter</a>
     </div>
     </div>
     </div>
     <!-- FEATURE-->
     <div class="feature">
     <!-- FEATURE TEXT-->
     <div class="feature-details">
     <h4 class="main-color">Search Tags</h4>
     <p>Filter by Search Tags.</p>
     <div class="text-left"><a href="http://localhost:3000/searchtagtry/" class="btn btn-sm btn-default">Filter</a>
     </div>
     </div>
     </div>
     </div>
     <!-- END FEATURES RIGHT-->
     </div>
     </div>
     </section>
     <!-- END FEATURE LIST-->
     */});

    rtnStr += multiline(function(){/*
     <!-- START TESTIMONIAL SLIDER-->
     <section id="feedbacks" class="feedbacks">
     <div data-wow-offset="15" data-wow-duration="1.3s" class="container wow fadeIn animated">
     <div id="feedback-carousel" class="owl-carousel owl-theme text-center">
     <!-- FEEDBACK-->
     <div class="feedback-client">
     <div class="feedback-client-picture">
     <img src="img/clients/01.jpg" alt="" data-no-retina class="img-thumbnail img-circle">
     </div>
     <div class="feedback-client-msg">This is why I decided to follow my dreams and start my own recipe website, with different filtering oppertunities and options.</div>
     <div
     class="feedback-client-name">Cookie Monster</div>
     <div class="feedback-client-company">Claire Mulholland</div>
     </div>
     <!-- FEEDBACK-->
     <div class="feedback-client">
     <div class="feedback-client-picture">
     <img src="img/clients/02.jpg" alt="" data-no-retina class="img-thumbnail img-circle">
     </div>
     <div class="feedback-client-msg">Etiam feugiat risus massa. Etiam nisi dui, sodales ut dignissim vitae, eleifend non nisi. Donec ipsum enim, fermentum sed viverra et, vulputate eget libero. Sed elementum venenatis ullamcorper. Phasellus faucibus placerat luctus.</div>
     <div
     class="feedback-client-name">Mathew Rogers</div>
     <div class="feedback-client-company">Designer, Ngcompany</div>
     </div>
     <!-- FEEDBACK-->
     <div class="feedback-client">
     <div class="feedback-client-picture">
     <img src="img/clients/03.jpg" alt="" data-no-retina class="img-thumbnail img-circle">
     </div>
     <div class="feedback-client-msg">Etiam feugiat risus massa. Etiam nisi dui, sodales ut dignissim vitae, eleifend non nisi. Donec ipsum enim, fermentum sed viverra et, vulputate eget libero. Sed elementum venenatis ullamcorper. Phasellus faucibus placerat luctus.</div>
     <div class="feedback-client-name">Bradley Jimenez</div>
     <div class="feedback-client-company">Coder, Ngcompany</div>
     </div>
     </div>
     </div>
     </section>
     <!-- END TESTIMONIAL SLIDER-->
     */});

    var count1;

    if (IDAccount !== 0){ //if logged in
        rtnStr += multiline(function(){/*
         <!-- START PLAN TABLE-->
         <section id="plans" class="plan-table">
         <div class="container">
         <!-- SECTION HEADER-->
         <div data-wow-offset="15" data-wow-duration="1.3s" class="section-header wow fadeIn animated">
         <h2>Favourites</h2>
         <div class="section-description">Choose one of your favourite Recipes
         </div>
         </div>
         */});
        //favourite query is run
        console.log(connection.escape(IDAccount));
        var FavouriteQuery1 = 'SELECT tblRecipe.IDRecipe, RecipeTitle, Description, ImageName FROM tblFavourite, tblRecipe, tblImage, tblRecipeImage WHERE tblFavourite.IDRecipe = tblRecipe.IDRecipe AND tblRecipe.IDRecipe = tblRecipeImage.IDRecipe AND tblRecipeImage.IDImage = tblImage.IDImage AND MainImage = true AND IDAccountDetails = ' + connection.escape(IDAccount);
        connection.query(FavouriteQuery1, function (error, results, fields) {
            if (error) {
                console.log("An error has occurred at FavouriteQuery1.");
                console.log(error);
            }
            else if(results.length===0){
                rtnStr += multiline(function(){/*
                 <div class="section-description">Please add Recipes to your favourites</div>
                 */});
                AddMore();
            }
            else {
                if (results.length <=10){
                    count = results.length;
                }
                else{
                    count = 10;
                }
                for (var i =0; i<count; i++){
                    rtnStr += multiline(function(){/*
                     <!-- END SECTION HEADER-->
                     <div class="row bottom-space">
                     <div class="col-lg-offset-3 col-lg-6 col-md-offset-0 col-sm-6 col-xs-12">
                     <div class="media media-card">
                     <div class="media-left media-middle">
                     <a href="#">
                     <img src="img/versions/
                     */});
                    rtnStr += results[i].ImageName;
                    rtnStr += multiline(function(){/*
.png" width="128px" alt="" data-no-retina="" data-wow-offset="15" data-wow-duration=".5s" class="wow zoomIn animated img-responsive version-pic">
                     </a>
                     </div>
                     <div class="media-body">
                     <h4 class="media-heading">
                     <strong>
                     */});
                    rtnStr += results[i].RecipeTitle;
                    rtnStr += multiline(function(){/*
                     </strong>
                     </h4>
                     <p class="media-card-text">
                     */});
                    rtnStr += results[i].Description;
                    rtnStr += multiline(function(){/*
                     </p>
                     <div class="text-right"><a href="http://localhost:3000/recipetry/
                     */});
                    rtnStr += results[i].IDRecipe;
                    rtnStr += multiline(function(){/*
" class="btn btn-sm btn-default">Go to Recipe</a>
                     </div>
                     </div>
                     </div>
                     </div>
                     */});
                }
                rtnStr += multiline(function(){/*
                 </div>
                 </div>
                 </div>
                 </section>
                 */});
                AddMore();
            }
        });
    }
    else{
        rtnStr += multiline(function(){/*
         <!-- START PLAN TABLE-->
         <section id="plans" class="plan-table">
         <div class="container">
         <!-- SECTION HEADER-->
         <div data-wow-offset="15" data-wow-duration="1.3s" class="section-header wow fadeIn animated">
         <h2>Favourites</h2>
         <div class="section-description">Please Login for this feature to work or add Recipes to your favourites</div>
         </div>
         </div>
         </section>
         */});
        AddMore();
    }
}
};
