const { HookScenarioResult } = require( 'cucumber');
const { Before, After } = require('cucumber');
After(async function(scenario) {
    const ss = await browser.takeScreenshot();
    const img = Buffer.alloc(ss.length, ss, 'base64');
    this.attach(img, 'image/png');
  });