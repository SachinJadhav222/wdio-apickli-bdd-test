# UI and API test automation framework
*Test Automation for UI and API test project  using WebdriverIO , cucumberjs   and other tools
 The framework is BDD enabled using cucumber js to create feature file written in Gherkin Language*

### Folder Structure
* [Project Root](./tree-md) : LPG-WDIO-APICKLI-BDD-TEST
    * [reports](./reports)  : Cucumber HTML reports
    * [test](./test)
        * [config](./test/config) - webdriver configurations , urls
        * [featureFiles](./test/featureFiles) -All bdd feature file are here
        * [fixture](./test/fixtures) - Test fixtures and mock data
        * [locators](./test/locators) - Locators, webelements are stored 
         * [steps](./test/steps) - Step defition files
         * [support](./test/support) - Support and helpers  files
         * [utils](./test/utils) - Utility files
   * [file12.ext](test\featureFiles\ui\gocity-attactions.feature)
 * [.env.local](./.env.local) : This file will overwirte local environment variables 
 * [README.md](./README.md)

#### Setup 
```
npm i
npm install -g json-server
```

#### Start mock REST API server 
```
json-server --watch test/mock-data/db.json
```
### Run API Test
```
npm run api-test
```
### API Test Report
```
npm run api-report
```
### UI Test
```
npm run ui-test
```
### UI Test report
```
npm run ui-report
```
#### Run ALL test & Generate Report 
```
npm test
```


