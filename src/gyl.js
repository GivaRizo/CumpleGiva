// Dependencies
const imageToAscii = require("image-to-ascii");
const chalk = require('chalk');
const colors = require('colors');


let image = require('fs').readFileSync(__dirname + '/img/1.jpg');
 
// The path can be either a local path or an url
imageToAscii(image, (err, converted) => {
    
    console.log(err || converted);
});

