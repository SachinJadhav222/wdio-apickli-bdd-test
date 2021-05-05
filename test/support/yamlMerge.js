const yaml = require("js-yaml");
const fs = require("fs");
const yamlMerge = require("yaml-merge");
const glob = require("glob");
const filePath = "test/locators/*.yaml";

module.exports= glob(filePath, function (er, files) {
    // objYaml = yamlMerge.mergeFiles(files);

    return yamlMerge.mergeFiles(files);
  });

// module.exports= function getSelector1(callback) {
//   glob(filePath, function (er, files) {
//     // objYaml = yamlMerge.mergeFiles(files);

//     return callback(yamlMerge.mergeFiles(files));
//   });
// }

// getSelector1(function (res) {
//   console.log(res)
//   //return res;
// });


// function getMergedYaml() {
//   let promise= new Promise((resolve, reject) => {
//     if (true) {
//       resolve(
//           getSelector(function (res){
//             return res
//           })
//         )
      
//     } else {
//       reject("Rejected ");
//     }
//   });
// }

// function getMergedYaml() {
//   glob(filePath, function (er, files) {
//     return yamlMerge.mergeFiles(files);
//   })
// }

// async function getSelector1() {
//   try {
//     const elm = await getMergedYaml();
//     console.log(elm);
//   } catch (err) {
//     console.log(err);
//   }
// }
// getSelector1();
