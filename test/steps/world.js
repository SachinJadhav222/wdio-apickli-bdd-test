const {setWorldConstructor} = require("cucumber");

// if (!process.env.SERVICE_URL) {
//     require('dotenv-flow').config();
// }
// if (!process.env.JSON_Placeholder || !process.env.SERVICE_URL ) {
//     require('dotenv-flow').config();
// }
//const attach={buffer: Buffer, mimeType: string}
class World {
    //private attach: (buffer: Buffer, mimeType: string) => void;
    constructor({parameters}) {
        this.context = {};
        this.variable = 0;
        //this.attach = attach;
    }

    setTo(number) {
        this.variable = number;
    }

    incrementBy(number) {
        this.variable += number;
    }
}
// console.log('<<<<========CustomWorlds============>>>>>',this);
setWorldConstructor(World);