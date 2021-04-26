// /* eslint new-cap: "off", no-invalid-this: "off" */

// 'use strict';

// const apickli = require('./apickli');
// const {Before, setDefaultTimeout} = require('cucumber');
// const apickli = require("./../support/apickli");
// Before(function() {
//   console.log('This is Before HOOK------------------->>>>>>>>>',this)
//   this.apickli = new apickli.Apickli('http', 'httpbin.org');
//   this.apickli.addRequestHeader('Cache-Control', 'no-cache');
//   this.apickli.clientTLSConfig = {
//     valid: {
//       key: './test/mock_target/certs/client-key.pem',
//       cert: './test/mock_target/certs/client-crt.pem',
//       ca: './test/mock_target/certs/ca-crt.pem',
//     },
//   };
// });

// setDefaultTimeout(60 * 1000);


//"api-clean": "node -e \"require('fs-extra').emptyDir('reports/');\""