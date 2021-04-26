const yaml = require("js-yaml");
const fs = require("fs");
const glob = require("glob");
const filePath = "test/locators/*.yaml";
const mergedArray = [];

function findDuplicates() {
  glob(filePath, function (er, files) {
    let isUnique = true;

    files.forEach(function (filePath) {
      // console.log(filePath)
      try {
        const objYaml = yaml.load(fs.readFileSync(filePath));
        //console.log(objYaml);
        for (let p in objYaml) {
          if (mergedArray.indexOf(p) > -1) {
            isUnique = false;
            console.log("<<<<<< " + p + " is a DUPLICATE ENTRY >>>>>>");
            isUnique = false;
          } else {
            mergedArray.push(p);
          }
        }
      } catch (err) {
        console.log("<<<<<<" + err + ">>>>>>");
      }
    });
    if (isUnique) {
      console.log("<<<<<<< I am Unique :) >>>>>>>");
    } else {
      console.log("<<<<<<< I am NOT Unique :( >>>>>>>");
    }
  });
}
findDuplicates();
