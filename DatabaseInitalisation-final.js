var mysql = require('mysql');
var multiline = require('multiline');
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'Recipe',
  password : 'helloworld123',
  database : 'RecipeWebsite',
  port : 8889
});
connection.connect();

// connection.query(multiline(function(){/*
//   CREATE SCHEMA IF NOT EXISTS `RecipeWebsite` DEFAULT CHARACTER SET utf8;
//   USE `RecipeWebsite` ;
//   */}));

connection.query(multiline(function(){/*
CREATE TABLE IF NOT EXISTS `RecipeWebsite`.`tblAccountDetails` (
  `IDAccountDetails` INT NOT NULL AUTO_INCREMENT,
  `UserName` VARCHAR(20) NOT NULL,
  `EmailAddress` VARCHAR(45) NOT NULL,
  `PasswordHASH` INT NOT NULL,
  `PasswordSALT` VARCHAR(32) NOT NULL,
  PRIMARY KEY (`IDAccountDetails`),
  UNIQUE INDEX `IDAccountDetails_UNIQUE` (`IDAccountDetails` ASC))
;
*/}));


connection.query(multiline(function(){/*
CREATE TABLE IF NOT EXISTS `RecipeWebsite`.`tblRecipe` (
  `IDRecipe` INT NOT NULL AUTO_INCREMENT,
  `Method` VARCHAR(255) NOT NULL,
  `TimePrep` VARCHAR(10) NOT NULL,
  `OvenTemp` VARCHAR(10) NULL,
  `Types` VARCHAR(45) NULL,
  `ServingSize` VARCHAR(45) NULL,
  `Cuisine` VARCHAR(45) NULL,
  `RecipeTitle` VARCHAR(128) NOT NULL,
  `Description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`IDRecipe`),
  UNIQUE INDEX `IDRecipe_UNIQUE` (`IDRecipe` ASC))
;
*/}));

connection.query(multiline(function(){/*
CREATE TABLE IF NOT EXISTS `RecipeWebsite`.`tblIngredient` (
  `IDIngredient` INT NOT NULL AUTO_INCREMENT,
  `IngredientName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`IDIngredient`),
  UNIQUE INDEX `IDIngredient_UNIQUE` (`IDIngredient` ASC))
;
*/}));

connection.query(multiline(function(){/*
CREATE TABLE IF NOT EXISTS `RecipeWebsite`.`tblAllergyGroup` (
  `IDAllergyGroup` INT NOT NULL AUTO_INCREMENT,
  `AllergyGroupName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`IDAllergyGroup`),
  UNIQUE INDEX `IDAllergyGroups_UNIQUE` (`IDAllergyGroup` ASC))
;
*/}));

connection.query(multiline(function(){/*
CREATE TABLE IF NOT EXISTS `RecipeWebsite`.`tblIngredientAllergyGroups` (
  `IDIngredient` INT NOT NULL,
  `IDAllergyGroup` INT NOT NULL,
  PRIMARY KEY (`IDIngredient`, `IDAllergyGroup`))
;
*/}));

connection.query(multiline(function(){/*
CREATE TABLE IF NOT EXISTS `RecipeWebsite`.`tblRecipeIngredient` (
  `IDRecipe` INT NOT NULL,
  `IDIngredient` INT NOT NULL,
  `Quantity` INT NOT NULL,
  `Unit` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`IDRecipe`, `IDIngredient`))
;
*/}));

connection.query(multiline(function(){/*
CREATE TABLE IF NOT EXISTS `RecipeWebsite`.`tblEquipment` (
  `IDEquipment` INT NOT NULL AUTO_INCREMENT,
  `EquipmentName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`IDEquipment`),
  UNIQUE INDEX `IDEquipment_UNIQUE` (`IDEquipment` ASC))
;
*/}));

connection.query(multiline(function(){/*
CREATE TABLE IF NOT EXISTS `RecipeWebsite`.`tblRecipeEquipment` (
  `IDRecipe` INT NOT NULL,
  `IDEquipment` INT NOT NULL,
  PRIMARY KEY (`IDRecipe`, `IDEquipment`))
;
*/}));

connection.query(multiline(function(){/*
CREATE TABLE IF NOT EXISTS `RecipeWebsite`.`tblSearchTag` (
  `IDSearchTag` INT NOT NULL AUTO_INCREMENT,
  `SearchTagName` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`IDSearchTag`),
  UNIQUE INDEX `IDSearchTag_UNIQUE` (`IDSearchTag` ASC))
;
*/}));

connection.query(multiline(function(){/*
CREATE TABLE IF NOT EXISTS `RecipeWebsite`.`tblRecipeSearchTag` (
  `IDRecipe` INT NOT NULL,
  `IDSearchTag` INT NOT NULL,
  PRIMARY KEY (`IDRecipe`, `IDSearchTag`))
;
*/}));

connection.query(multiline(function(){/*
CREATE TABLE IF NOT EXISTS `RecipeWebsite`.`tblFavourite` (
  `IDAccountDetails` INT NOT NULL,
  `IDRecipe` INT NOT NULL,
  PRIMARY KEY (`IDAccountDetails`, `IDRecipe`))
;
*/}));

connection.query(multiline(function(){/*
CREATE TABLE IF NOT EXISTS `RecipeWebsite`.`tblComment` (
  `IDComment` INT NOT NULL AUTO_INCREMENT,
  `CommentDescription` VARCHAR(255) NOT NULL,
  `Rating` INT NOT NULL,
  `IDRecipe` INT NOT NULL,
  `IDAccountDetails` INT NOT NULL,
  PRIMARY KEY (`IDComment`, `IDRecipe`, IDAccountDetails),
  UNIQUE INDEX `IDComment_UNIQUE` (`IDComment` ASC))
;
*/}));

connection.query(multiline(function(){/*
  CREATE TABLE IF NOT EXISTS `RecipeWebsite`.`tblCookieDetails` (
    `IDCookie` INT NOT NULL AUTO_INCREMENT,
    `IDAccountDetails` INT NOT NULL,
    `ExpiryDateTime` DATETIME NOT NULL,
    PRIMARY KEY (`IDCookie`),
    UNIQUE INDEX `IDCookie_UNIQUE` (`IDCookie` ASC),
    UNIQUE INDEX `IDAccountDetails_UNIQUE` (`IDAccountDetails` ASC))
  ;
*/}));

connection.query(multiline(function(){/*
  CREATE TABLE IF NOT EXISTS `RecipeWebsite`.`tblImage` (
    `IDImage` INT NOT NULL AUTO_INCREMENT,
    `ImageName` VARCHAR(128) NOT NULL,
    `MainImage` BOOL NOT NULL,
    PRIMARY KEY (`IDImage`),
    UNIQUE INDEX `IDImage_UNIQUE` (`IDImage` ASC))
  ;
*/}));

connection.query(multiline(function(){/*
  CREATE TABLE IF NOT EXISTS `RecipeWebsite`.`tblRecipeImage` (
    `IDRecipe` INT NOT NULL,
    `IDImage` INT NOT NULL,
    PRIMARY KEY (`IDRecipe`, `IDImage`))
  ;
*/}));

connection.query(multiline(function(){/*
  CREATE TABLE IF NOT EXISTS `RecipeWebsite`.`tblAllergyGroupAccountDetails` (
    `IDAllergyGroup` INT NOT NULL,
    `IDAccountDetails` INT NOT NULL,
    PRIMARY KEY (`IDAllergyGroup`, `IDAccountDetails`))
  ;
*/}));

// var IngredientQuery1 = 'SELECT IngredientName FROM tblIngredient;'
// connection.query(IngredientQuery1, function (error, results, fields) {
//     if (error) {
//         console.log("An error has occured.")
//     }
//     else{
//         console.log("Hello");
//         for (var i = 0; i < results.length; i++) {
//             console.log('hello' + i);
//             console.log(results[0,i]);
//         }
//         ;
//     }
//
// });

connection.end();
