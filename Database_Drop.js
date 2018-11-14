var mysql = require('mysql');
var multiline = require('multiline')
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'Recipe',
  password : 'helloworld123',
  database : 'RecipeWebsite',
  port : 8889
});
connection.connect();

// connection.query(multiline(function(){/*
//   DROP TABLE IF EXISTS `RecipeWebsite`.`tblAccountDetails`
//   ;
//   */}));
//
// connection.query(multiline(function(){/*
//   DROP TABLE IF EXISTS `RecipeWebsite`.`tblRecipe`
//   ;
//   */}));
//
// connection.query(multiline(function(){/*
//   DROP TABLE IF EXISTS `RecipeWebsite`.`tblIngredient`
//   ;
//   */}));
//
// connection.query(multiline(function(){/*
//   DROP TABLE IF EXISTS `RecipeWebsite`.`tblAllergyGroup`
//   ;
//   */}));
//
// connection.query(multiline(function(){/*
//   DROP TABLE IF EXISTS `RecipeWebsite`.`tblIngredients-AllergyGroups`
//   ;
//   */}));
//
// connection.query(multiline(function(){/*
//   DROP TABLE IF EXISTS `RecipeWebsite`.`tblRecipe-Ingredient`
//   ;
//   */}));
//
// connection.query(multiline(function(){/*
//   DROP TABLE IF EXISTS `RecipeWebsite`.`tblEquipment`
//   ;
//   */}));
//
// connection.query(multiline(function(){/*
//   DROP TABLE IF EXISTS `RecipeWebsite`.`tblRecipe-Equipment`
//   ;
//   */}));
//
// connection.query(multiline(function(){/*
//   DROP TABLE IF EXISTS `RecipeWebsite`.`tblSearchTag`
//   ;
//   */}));
//
// connection.query(multiline(function(){/*
//   DROP TABLE IF EXISTS `RecipeWebsite`.`tblRecipe-SearchTag`
//   ;
//   */}));
//
// connection.query(multiline(function(){/*
//   DROP TABLE IF EXISTS `RecipeWebsite`.`tblFavourite`
//   ;
//   */}));
//
// connection.query(multiline(function(){/*
//   DROP TABLE IF EXISTS `RecipeWebsite`.`tblComment`
//   ;
//   */}));
//
// connection.query(multiline(function(){/*
//   DROP TABLE IF EXISTS `RecipeWebsite`.`tblCookieDetails`
//   ;
//   */}));
//
// connection.query(multiline(function(){/*
//   DROP TABLE IF EXISTS `RecipeWebsite`.`tblImage`
//   ;
//   */}));
//
// connection.query(multiline(function(){/*
//   DROP TABLE IF EXISTS `RecipeWebsite`.`tblRecipe-Image`
//   ;
//   */}));
//
//   connection.query(multiline(function(){/*
//     DROP TABLE IF EXISTS `RecipeWebsite`.`tblAllergyGroup-AccountDetails`
//     ;
//     */}));

connection.query(multiline(function(){/*
  DROP SCHEMA IF EXISTS `RecipeWebsite` ;
  */}));

  connection.query(multiline(function(){/*
    CREATE SCHEMA IF NOT EXISTS `RecipeWebsite` DEFAULT CHARACTER SET utf8;
    */}));

connection.end();
