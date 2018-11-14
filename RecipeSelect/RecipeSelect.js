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

exports.SelectRecipeHtml = function(req, res, next){

  var IDAllergyGroup = req.app.get('IDAllergyGroup');
  console.log(IDAllergyGroup);
  var FilterOption = req.app.get('FilterOption');
  var FilterData = req.app.get('FilterData');
  //console.log(FilterData);

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

function Finish(rtnStr, req, res){
    rtnStr += multiline(function(){/*
     <!-- START FOOTER-->
     <footer id="footer">
     <div class="container">
     <div class="row">
     <div class="col-sm-6">
     <ul class="footer-nav">
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

//creates Filter Query

     if (FilterOption === 'Ingredient'){
       var FilterQuery = 'SELECT tblRecipe.IDRecipe, RecipeTitle, Description, ImageName FROM tblRecipe, tblImage, tblRecipeImage, tblIngredient, tblRecipeIngredient WHERE tblRecipeImage.IDRecipe = tblRecipe.IDRecipe AND tblRecipeImage.IDImage = tblImage.IDImage AND MainImage = true AND tblRecipeIngredient.IDRecipe = tblRecipe.IDRecipe AND tblRecipeIngredient.IDIngredient = tblIngredient.IDIngredient AND IngredientName = ' + connection.escape(FilterData) + ';';
     }
     else if (FilterOption === 'ServingSize'){
       var FilterQuery = 'SELECT tblRecipe.IDRecipe, RecipeTitle, Description, ImageName FROM tblRecipe, tblImage, tblRecipeImage WHERE tblRecipeImage.IDRecipe = tblRecipe.IDRecipe AND tblRecipeImage.IDImage = tblImage.IDImage AND MainImage = true AND ServingSize = ' + connection.escape(FilterData)+ ';';
     }
     else if (FilterOption === 'Cuisine'){
       var FilterQuery = 'SELECT tblRecipe.IDRecipe, RecipeTitle, Description, ImageName FROM tblRecipe, tblImage, tblRecipeImage WHERE tblRecipeImage.IDRecipe = tblRecipe.IDRecipe AND tblRecipeImage.IDImage = tblImage.IDImage AND MainImage = true AND Cuisine = ' + connection.escape(FilterData)+ ';';
     }
     else if (FilterOption === 'PrepTime'){
       var FilterQuery = 'SELECT tblRecipe.IDRecipe, RecipeTitle, Description, ImageName FROM tblRecipe, tblImage, tblRecipeImage WHERE tblRecipeImage.IDRecipe = tblRecipe.IDRecipe AND tblRecipeImage.IDImage = tblImage.IDImage AND MainImage = true AND TimePrep = ' + connection.escape(FilterData)+ ';';
     }
     else if (FilterOption === 'Type'){
       var FilterQuery = 'SELECT tblRecipe.IDRecipe, RecipeTitle, Description, ImageName FROM tblRecipe, tblImage, tblRecipeImage WHERE tblRecipeImage.IDRecipe = tblRecipe.IDRecipe AND tblRecipeImage.IDImage = tblImage.IDImage AND MainImage = true AND Types = ' + connection.escape(FilterData)+ ';';
     }
     else if (FilterOption === 'SearchTag'){
       var FilterQuery = 'SELECT tblRecipe.IDRecipe, RecipeTitle, Description, ImageName FROM tblRecipe, tblImage, tblRecipeImage, tblRecipeSearchTag, tblSearchTag WHERE tblRecipeImage.IDRecipe = tblRecipe.IDRecipe AND tblRecipeImage.IDImage = tblImage.IDImage AND MainImage = true AND tblRecipeSearchTag.IDRecipe = tblRecipe.IDRecipe AND tblRecipeSearchTag.IDSearchTag = tblSearchTag.IDSearchTag AND SearchTagName = ' + connection.escape(FilterData)+ ';';
     }

//runs filter query and outputs data found
   connection.query(FilterQuery, function (error, results, fields) {
       if (error) {
           console.log("An error has occurred at FilterQuery1.");
           console.log(error);
       }
       else{
           var count;
           if (results.length <=10){
               count = results.length;
           }
           else{
               count = 10;
           }
           for (var i = 0; i<count; i++){
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
                           var j = 0;
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
                               if(i===(count-1)) {
                                   Finish(rtnStr, req, res);
                               }
                               //j++
                           }
                           else {
                               if(i===(count-1)) {
                                   Finish(rtnStr, req, res);
                               }
                               //j++
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
                   console.log(results[i].ImageName);
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
                   Finish(rtnStr, req, res);
               }



           }

       }
   });
};
