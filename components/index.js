function loadPackages(){
    var packages = {};
    
    // all external packages should be initialized here

    // this will give us better control to manage exernal packages

    packages.Promise = require("bluebird");
    packages.Lodash = require("lodash");
    packages.DateFormat = require("dateformat");
    packages.Winston = require("winston");
    packages.Hold = require("hold");
    packages.Assent = require("assent");
    packages.Ephemeral = require("ephemeral");
    packages.Circulate = require("circulate");
    packages.StoreHouse = require("storehouse");
    packages.Goof = require("goof")();

    global.Packages = packages;
}

module.exports = loadPackages;
