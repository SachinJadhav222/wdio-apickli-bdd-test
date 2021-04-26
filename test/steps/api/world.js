const { setWorldConstructor } = require("cucumber");
const apickli = require("../../support/apickli");
require('dotenv-flow').config();
//const Apickli =require('./../support/apickli').Apickli;
//const apickli=new Apickli();

// if (!process.env.SERVICE_URL) {
//     require('dotenv-flow').config();
// }
// if (!process.env.JSON_Placeholder || !process.env.SERVICE_URL ) {
//     require('dotenv-flow').config();
// }
//const base_url="http://httpbin.org"
const fixturePath= "test/fixture"
class CustomWorld {
  constructor({ parameters }) {
    this.context = {};
    this.variable = 0;
    this.apickli = new apickli.Apickli(process.env.BASE_URL);
    //this.apickli = apickli;
    //this.apickli.addRequestHeader("Cache-Control", "no-cache");
    // this.apickli.clientTLSConfig = {
    //   valid: {
    //     key: "./test/mock_target/certs/client-key.pem",
    //     cert: "./test/mock_target/certs/client-crt.pem",
    //     ca: "./test/mock_target/certs/ca-crt.pem",
    //   },
    // };
  }

  setTo(number) {
    this.variable = number;
  }

  incrementBy(number) {
    this.variable += number;
  }
}
// console.log('<<<<========CustomWorlds============>>>>>',this);
setWorldConstructor(CustomWorld);

