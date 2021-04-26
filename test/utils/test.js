const faker = require('faker');
const _ = require('lodash');


_.times(10, (n) => {

    const c = {}
    c.id = n;
    c.name = faker.name.findName();
    c.email = faker.internet.email();
    c.phoneNumber = faker.phone.phoneNumber();
    c.address=faker.address.country();
    //console.info(JSON.stringify(c));
})


function one(){
    console.log('I am one');

    function two(){
        console.log('I am two in one');

    }
}

one();

