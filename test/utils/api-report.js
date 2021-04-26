const reporter = require('cucumber-html-reporter');
require('dotenv-flow').config();
const options = {
    theme: 'bootstrap',
    jsonFile: 'reports/api/cucumber.json',
    output: 'reports/api/api-test-report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    name:'API Automation',
    brandTitle:'REST API Test Report',
    metadata: {
        "Date:": new Date(),
        "App Version":"0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome  89.0.2840.98",
        "Platform": "MacBookPro",
        "SDTE": process.env.SDET,
    }
};

reporter.generate(options);
    