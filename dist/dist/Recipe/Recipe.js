'use strict';

var multiline = require('multiline');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'Recipe',
    password: 'helloworld123',
    database: 'RecipeWebsite',
    port: 8889
});

exports.RecipeHtml = function (req, res) {

    //specifying of variables
    var IDRecipe = 0;
    var ServingChange = false;
    var passedVariable = req.app.get('ServingChange');
    if (passedVariable !== undefined) {
        ServingChange = true;
        passedVariable = undefined;
    }
    IDRecipe = Number(req.query.IDRecipe);
    req.query.IDRecipe = null;
    req.app.set('IDAccount', 1);
    var IDAccount = req.app.get('IDAccount');
    console.log(IDAccount);
    var ServingCon = 'NULL';

    Image(IDRecipe, req, res); //calls image function

    function Image(IDRecipe, req, res) {
        //function to retrieve the image data
        if (isNaN(IDRecipe) === false) {
            var ImageQuery1 = 'SELECT ImageName FROM tblImage, tblRecipeImage WHERE tblImage.IDImage = tblRecipeImage.IDImage AND IDRecipe = ' + connection.escape(IDRecipe) + ';';
            connection.query(ImageQuery1, function (error, results, fields) {
                if (error) {
                    console.log("An error has occurred at ImageQuery1");
                    console.log(error);
                } else {
                    var ImageList = [];
                    for (var i = 0; i < results.length; i++) {
                        ImageList.push(results[i].ImageName);
                    }
                    console.log("Image query failed for unknown reason.");
                    Title(IDRecipe, ImageList, req, res); //calls title function
                }
            });
        }
    }

    function Title(IDRecipe, ImageList, req, res) {
        //function to retrieve the header data
        var rtnStr = multiline(function () {/*
                                            <!DOCTYPE html>
                                            <html lang="en">
                                            <head>
                                            <meta charset="UTF-8">
                                            <meta name="description" content="Landing Page Template">
                                            <meta name="keywords" content="bootstrap, app, theme">
                                            <meta name="author" content="@themicon">
                                            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
                                            <title>
                                            */
        });
        var TitleQuery1 = 'SELECT RecipeTitle, Description, ServingSize FROM tblRecipe, tblImage, tblRecipeImage WHERE tblRecipe.IDRecipe = tblRecipeImage.IDRecipe AND tblImage.IDImage = tblRecipeImage.IDImage AND tblRecipe.IDRecipe = ' + connection.escape(IDRecipe) + ';';
        connection.query(TitleQuery1, function (error, results, fields) {
            if (error) {
                console.log("An error has occurred at TitleQuery1.");
                console.log(error);
            } else {
                var Title = results[0].RecipeTitle;
                var Description = results[0].Description;
                var ServingSize = results[0].ServingSize;
                rtnStr += Title;

                rtnStr += multiline(function () {/*
                                                 </title>
                                                 <!-- PREALOADER (loads asap)-->
                                                 <link rel="stylesheet" href="/vendor/nprogress/nprogress.css">
                                                 <script src="/vendor/nprogress/nprogress.js"></script>
                                                 <!-- FAVICON-->
                                                 <link rel="icon" href="/img/favicon/favicon.ico">
                                                 <link rel="apple-touch-icon" href="/img/favicon/apple-touch-icon.png">
                                                 <link rel="apple-touch-icon" sizes="57x57" href="/img/favicon/apple-touch-icon-57x57-precomposed.png">
                                                 <link rel="apple-touch-icon" sizes="72x72" href="/img/favicon/apple-touch-icon-72x72-precomposed.png">
                                                 <link rel="apple-touch-icon" sizes="114x114" href="/img/favicon/apple-touch-icon-114x114-precomposed.png">
                                                 <link rel="apple-touch-icon" sizes="144x144" href="/img/favicon/apple-touch-icon-144x144-precomposed.png">
                                                 <!-- FONT-->
                                                 <link href="//fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,400italic" rel="stylesheet" type="text/css">
                                                 <!-- ICONS-->
                                                 <link rel="stylesheet" href="/vendor/font-awesome/css/font-awesome.min.css">
                                                 <script src="/vendor/jquery.browser/dist/jquery.browser.js"></script>
                                                 <script>
                                                 if ( window.jQBrowser.mobile && top.location != location) top.location.href = document.location.href;
                                                 </script>
                                                 <!-- VENDOR CSS-->
                                                 <link rel="stylesheet" href="/vendor/owl.carousel/dist/assets/owl.carousel.css">
                                                 <link rel="stylesheet" href="/vendor/owl.carousel/dist/assets/owl.theme.default.css">
                                                 <link rel="stylesheet" href="/vendor/Nivo-Lightbox/nivo-lightbox.css">
                                                 <link rel="stylesheet" href="/vendor/Nivo-Lightbox/themes/default/default.css">
                                                 <link rel="stylesheet" href="/vendor/animate.css/animate.css">
                                                 <!-- SITE CSS-->
                                                 <link rel="stylesheet" href="/css/styles.css" id="stylescss">
                                                 <link rel="stylesheet" href="/css/theme-a.css">
                                                 <!--[if lt IE 9]><script src="/js/html5shiv.js"></script><script src="/js/respond.min.js"></script><![endif]-->
                                                 </head>
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
                                                 <img src="/img/CupcakeLogo.png" alt="">
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
                                                 <img src="/img/CupcakeLogo.png" alt="">
                                                 </div>
                                                 <div class="row">
                                                 <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                                                 <!-- INTRO MESSAGE-->
                                                 <div class="intro-section">
                                                 <h1 class="intro">Scrumptious Recipes</h1>
                                                 </div>
                                                 <div class="intro-shot">
                                                 <img src="/img/ButterflyCupcakes.png" alt="Header shot" data-no-retina="" class="img-responsive">
                                                 </div>
                                                 </div>
                                                 </div>
                                                 </div>
                                                 </div>
                                                 </header>
                                                 */
                });

                rtnStr += multiline(function () {/*
                                                 <!-- START TESTIMONIAL SLIDER-->
                                                 <section id="feedbacks" class="feedbacks">
                                                 <div data-wow-offset="15" data-wow-duration="1.3s" class="container wow fadeIn animated">
                                                 <div id="feedback-carousel" class="owl-carousel owl-theme text-center">
                                                 <!-- FEEDBACK-->
                                                 <div class="feedback-client">
                                                 <h1>
                                                 */
                });

                rtnStr += Title;

                rtnStr += multiline(function () {/*
                                                 </h1>
                                                 <p>
                                                 */
                });

                rtnStr += Description;

                rtnStr += multiline(function () {/*
                                                 </p>
                                                 <img src="/img/versions/
                                                 */
                });

                rtnStr += ImageList[0];
                rtnStr += multiline(function () {/*
                                                 .png" alt="" width="4" height="130" data-no-retina class="img-thumbnail img-circle">
                                                 </div>
                                                 <!-- FEEDBACK-->
                                                 <div class="feedback-client">
                                                 <h1> Recipe Ingredients </h1>
                                                 <div class="text-centre"><a href="http://localhost:3000/servingcontry/?IDRecipe=
                                                 */});
                rtnStr += IDRecipe;
                rtnStr += multiline(function () {/*
                                                 " class="btn btn-sm btn-default">Convert Serving Size</a>
                                                 </div>
                                                 <div class="feedback-client-msg">-
                                                 */
                });
                Ingredient(IDRecipe, rtnStr, ServingSize, ImageList, req, res); //calls ingredient function
            }
        });
    }

    function Ingredient(IDRecipe, rtnStr, ServingSize, ImageList, req, res) {
        //function to retrieve the ingredient data
        var IngredientsQuery1 = 'SELECT IngredientName, Quantity, Unit FROM tblIngredient, tblRecipeIngredient WHERE tblIngredient.IDIngredient = tblRecipeIngredient.IDIngredient AND IDRecipe = ' + connection.escape(IDRecipe) + ';';
        connection.query(IngredientsQuery1, function (error, results, fields) {
            if (error) {
                console.log("An error has occurred at IngredientQuery1.");
                console.log(error);
            } else {
                for (var i = 0; i < results.length; i++) {
                    rtnStr += multiline(function () {/*
                                                     <div class="feedback-client-msg">-
                                                     */
                    });
                    if (ServingChange === true) {
                        Quantity = results[i].Quantity;
                        var ServingCon = req.app.get('ServingCon');
                        var ratio = ServingCon / ServingSize;
                        var NewQuantity = Quantity * ratio;
                        rtnStr += NewQuantity;
                    } else {
                        rtnStr += results[i].Quantity;
                    }
                    rtnStr += ' ';
                    rtnStr += results[i].Unit;
                    rtnStr += ' of ';
                    rtnStr += results[i].IngredientName;
                    rtnStr += '</div>';
                }
                rtnStr += '</div>';

                rtnStr += multiline(function () {/*
                                                 <div class="feedback-client">
                                                 <h1> Recipe Equipment </h1>
                                                 */
                });
                Equipment(IDRecipe, rtnStr, ImageList, req, res); //calls the equipment function
            }
        });
    }

    function Equipment(IDRecipe, rtnStr, ImageList, req, res) {
        //function to retrieve the equipment data
        var EquipmentQuery1 = 'SELECT EquipmentName FROM tblEquipment, tblRecipeEquipment WHERE tblEquipment.IDEquipment = tblRecipeEquipment.IDEquipment AND IDRecipe = ' + connection.escape(IDRecipe) + ';';

        connection.query(EquipmentQuery1, function (error, results, fields) {
            if (error) {
                console.log("An error has occurred at EquipmentQuery1.");
                console.log(error);
            } else {
                for (var i = 0; i < results.length; i++) {
                    rtnStr += multiline(function () {/*
                                                     <div class="feedback-client-msg">- A
                                                     */});
                    rtnStr += ' ';
                    rtnStr += results[i].EquipmentName;
                    rtnStr += '</div>';
                }
                rtnStr += multiline(function () {/*
                                                 </div>
                                                 </div>
                                                 </div>
                                                 </section>
                                                 */
                });

                rtnStr += multiline(function () {/*
                                                 <section id="desc1" class="pic-text pic-text-right">
                                                 <div class="container">
                                                 <div class="row">
                                                 <!-- LEFT TEXT-->
                                                 <div class="col-md-6">
                                                 <!-- SECTION TITLE-->
                                                 <h2>
                                                 */
                });
                Method(IDRecipe, rtnStr, ImageList, req, res); //calls method function
            }
        });
    }

    function Method(IDRecipe, rtnStr, ImageList, req, res) {
        //function to retrieve method data
        var MethodQuery1 = 'SELECT Method, TimePrep, OvenTemp, ServingSize, Cuisine, RecipeTitle  FROM tblRecipe WHERE tblRecipe.IDRecipe = ' + connection.escape(IDRecipe) + ';';

        connection.query(MethodQuery1, function (error, results, fields) {
            if (error) {
                console.log("An error has occurred at MethodQuery1.");
                console.log(error);
            } else {
                var Method1 = '';
                var Method2 = '';
                for (var i = 0; i < results[0].Method.length; i++) {
                    if (i < results[0].Method.length / 2) {
                        Method1 += results[0].Method[i];
                    } else {
                        Method2 += results[0].Method[i];
                    }
                }
                rtnStr += results[0].RecipeTitle;
                rtnStr += multiline(function () {/*
                                                 </h2>
                                                 <p>ServingSize: </p>
                                                 */
                });
                if (ServingChange === true) {
                    rtnStr += ServingCon;
                } else {
                    rtnStr += results[0].ServingSize;
                }
                rtnStr += multiline(function () {/*
                                                 <br>
                                                 <p>Cuisine: </p>
                                                 */
                });
                rtnStr += results[0].Cuisine;
                rtnStr += multiline(function () {/*
                                                 <br>
                                                 <p>Oven Temperature: </p>
                                                 */
                });
                rtnStr += results[0].OvenTemp;
                rtnStr += multiline(function () {/*
                                                 <br>
                                                 <p>Time to Prepare: </p>
                                                 */
                });
                rtnStr += results[0].TimePrep;
                rtnStr += '<p>';
                rtnStr += Method1;
                rtnStr += multiline(function () {/*
                                                 <br>
                                                 <br>
                                                 </p>
                                                 <p>
                                                 <em>How is the recipe going? How about commenting about it?</em>
                                                 </p>
                                                 </div>
                                                 <!-- RIGHT PIC-->
                                                 <div data-wow-offset="15" data-wow-duration="1.2s" class="col-md-6 wow fadeInRight animated">
                                                 <div class="mockup-mobile">
                                                 <img src="/img/versions/
                                                 */
                });
                rtnStr += ImageList[0];
                rtnStr += multiline(function () {/*
                                                 .png" alt="" data-no-retina>
                                                 </div>
                                                 </div>
                                                 <!-- /END PHONES IMAGE-->
                                                 </div>
                                                 </div>
                                                 </section>
                                                 <!-- END PIC TEXT RIGHT-->
                                                 <!-- START PIC TEXT LEFT-->
                                                 <section id="desc2" class="pic-text pic-text-left">
                                                 <div class="container">
                                                 <div class="row">
                                                 <!-- LEFT PIC-->
                                                 <div data-wow-offset="15" data-wow-duration="1.2s" class="col-md-6 wow fadeInLeft animated">
                                                 <div class="mockup-mobile">
                                                 <img src="/img/versions/
                                                 */
                });
                rtnStr += ImageList[1];
                rtnStr += multiline(function () {/*
                                                 .png" alt="" data-no-retina>
                                                 </div>
                                                 </div>
                                                 <!-- RIGHT TEXT-->
                                                 <div class="col-md-6">
                                                 <!-- SECTION TITLE-->
                                                 <p>
                                                 */
                });
                rtnStr += Method2;
                rtnStr += '</p>';
                if (IDAccount !== 0) {
                    //If logged in
                    rtnStr += multiline(function () {/*
                                                     <div class="text-center"><a href="http://localhost:3000/favouritetry/?IDRecipe=
                                                     */});
                    rtnStr += IDRecipe;
                    rtnStr += multiline(function () {/*
                                                     " class="btn btn-theme">Add this Recipe to your Favourites?</a>
                                                     </div>
                                                     */
                    });
                }
                rtnStr += multiline(function () {/*
                                                 </div>
                                                 </div>
                                                 </div>
                                                 </section>
                                                 */});

                rtnStr += multiline(function () {/*
                                                 <section id="shots" class="appshots">
                                                 <div class="container">
                                                 <!-- SECTION HEADER-->
                                                 <div class="section-header">
                                                 <h2>Comments</h2>
                                                 */
                });
                if (IDAccount !== 0) {
                    rtnStr += multiline(function () {/*
                                                     <div class="section-description">Do you have something you want to say about this Recipe? Add it below or read what others have said.</div>
                                                     </div>
                                                     <div class="text-center"><a href="http://localhost:3000/commenttry/?IDRecipe=
                                                     */});
                    rtnStr += IDRecipe;
                    rtnStr += multiline(function () {/*
                                                     " class="btn btn-theme">Add your own Comment</a>
                                                     </div>
                                                     */
                    });
                } else {
                    rtnStr += multiline(function () {/*
                                                     <div class=`section-description`>Please login to be able to leave a Comment.</div></div>
                                                     */
                    });
                }
                rtnStr += multiline(function () {/*
                                                 <!-- END SECTION HEADER-->
                                                 <div class="row">
                                                 <div id="appshots" class="owl-carousel owl-theme">
                                                 */
                });

                Comment(IDRecipe, rtnStr, req, res); //calls the comment function
            }
        });
    }

    function Comment(IDRecipe, rtnStr, req, res) {
        //function to retrieve the comment data
        var CommentQuery1 = 'SELECT CommentDescription, Rating, UserName FROM tblComment, tblAccountDetails WHERE tblAccountDetails.IDAccountDetails = tblComment.IDAccountDetails AND IDRecipe = ' + connection.escape(IDRecipe) + ';';
        connection.query(CommentQuery1, function (error, results, fields) {
            if (error) {
                console.log("An error has occurred at CommentQuery1.");
                console.log(error);
            } else {
                for (var i = 0; i < results.length; i++) {
                    rtnStr += multiline(function () {/*
                                                     <div class="shot">
                                                     <p>
                                                     */
                    });
                    rtnStr += results[i].UserName;
                    rtnStr += multiline(function () {/*
                                                     <div class="shot">
                                                     <p>
                                                     */
                    });
                    rtnStr += results[i].Rating;
                    rtnStr += multiline(function () {/*
                                                     Stars</p>
                                                     <p>
                                                     */
                    });
                    rtnStr += results[i].CommentDescription;
                    rtnStr += multiline(function () {/*
                                                     </p>
                                                     </div>
                                                     */
                    });
                }
                rtnStr += multiline(function () {/*
                                                 </div>
                                                 </div>
                                                 </div>
                                                 </section>
                                                 */
                });

                rtnStr += multiline(function () {/*
                                                 <!-- START FOOTER-->
                                                 <footer id="footer">
                                                 <div class="container">
                                                 <div class="row">
                                                 <div class="col-sm-6">
                                                 <ul class="footer-nav">
                                                 <li><a href="http://localhost:3000/try">Home</a>
                                                 </li>
                                                 </ul>
                                                 </div>
                                                 <div class="col-sm-6">
                                                 </div>
                                                 </div>
                                                 </div>
                                                 </footer>
                                                 */
                });

                rtnStr += multiline(function () {/*
                                                 <script src="/vendor/jquery/dist/jquery.min.js"></script>
                                                 <script src="/vendor/jquery.browser/dist/jquery.browser.js"></script>
                                                 <script src="/vendor/jquery.easing/js/jquery.easing.js"></script>
                                                 <script src="/vendor/bootstrap/dist/js/bootstrap.js"></script>
                                                 <script src="/vendor/waitForImages/dist/jquery.waitforimages.min.js"></script>
                                                 <script src="/vendor/smoothscroll/smoothscroll.js"></script>
                                                 <script src="/vendor/owl.carousel/dist/owl.carousel.js"></script>
                                                 <script src="/vendor/Nivo-Lightbox/nivo-lightbox.js"></script>
                                                 <script src="/vendor/jquery.scrollTo/jquery.scrollTo.js"></script>
                                                 <script src="/vendor/wow/dist/wow.js"></script>
                                                 <script src="/vendor/matchMedia/matchMedia.js"></script>
                                                 <script src="/vendor/background-video/jquery.backgroundvideo.js"></script>
                                                 <script src="/vendor/jQuery-One-Page-Nav/jquery.nav.js"></script>
                                                 <script src="/vendor/jQuery-Storage-API/jquery.storageapi.js"></script>
                                                 <!-- SITE SCRIPTS-->
                                                 <script src="/js/scripts.js"></script>x
                                                 */
                });
                rtnStr += '</body></html>';
                res.write(rtnStr); //returns dynamically made html
                res.end();
            }
        });
    }
};
//# sourceMappingURL=Recipe.js.map
//# sourceMappingURL=Recipe.js.map