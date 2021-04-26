const yaml = require("js-yaml");
const fs = require("fs");
const yamlMerge = require("yaml-merge");
const glob = require("glob");
const filePath = "test/locators/*.yaml";

//let objYaml = null;
//let objData = null;

// const getSelecotr = function () {
//   glob(filePath, function (er, files) {
//     // objYaml = yamlMerge.mergeFiles(files);

//     return yamlMerge.mergeFiles(files);
//   });
// };

// console.log(getSelecotr());

function getSelector(callback) {
  glob(filePath, function (er, files) {
    // objYaml = yamlMerge.mergeFiles(files);

    return callback(yamlMerge.mergeFiles(files));
  });
}

getSelector(function (res) {
  console.log(res["loc_lastName"]);
});
