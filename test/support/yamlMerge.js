const yaml = require("js-yaml");
const fs = require("fs");
const yamlMerge = require("yaml-merge");
const glob = require("glob");
const filePath = "test/locators/*.yaml";

let objYaml = null;
let objData = null;

// function getSelecotr1(selector) {
//   let webElement = null;

//   if (objYaml === null) {
//     glob(filePath, function (er, files) {
//       try {
//         objYaml = yamlMerge.mergeFiles(files);
//         // console.log('Merged Object---->',objYaml)
//         return objYaml[selector];
//         //console.log(webElement)
//         // return webElement;
//       } catch (er) {
//         console.log("Catch block--------->", er);
//       }
//     });
//   }
// }
const getLoc= async (selector)=>{
    glob(filePath, async function (er, files) {
        objYaml = await yamlMerge.mergeFiles(files);
        //console.log(objYaml);
        return await objYaml[selector];
      });
}
function getSelecotr1(selector) {
  glob(filePath, async function (er, files) {
    objYaml = await yamlMerge.mergeFiles(files);
    //console.log(objYaml);
    //return await objYaml[selector];
  });
}

console.log(getSelecotr1("loc_phoneNumber"));
console.log(getLoc("loc_phoneNumber"));
