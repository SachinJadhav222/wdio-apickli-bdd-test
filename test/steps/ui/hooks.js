// const { HookScenarioResult } = require( 'cucumber');
// const { Before, After } = require('cucumber');
// After(async function(scenario) {
//     const ss = await browser.takeScreenshot();
//     const img = Buffer.alloc(ss.length, ss, 'base64');
//     this.attach(img, 'image/png');
//   });

// const { After, Status } = require("cucumber");

// After(function(testCase) {
//     var me = this;
//     console.log('Taking screenshot---->>>>')
//     if (testCase.result.status === Status ) {
//         console.log('Test status->',status)
//         browser.saveScreenshot('reports/ui/22.png')
//         return browser.takeScreenshot().then(function(screenshot) {
//             return me.attach(screenshot, "image/png");
//         });
//     }
// });