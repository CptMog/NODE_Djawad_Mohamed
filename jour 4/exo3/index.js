const pug = require('pug');

const loggedUser = {
    name: {
        first: 'Jean',
        last: 'Dupont',
    },
    age: 36,
    birthdate: new Date('1986-04-18'),
    location: {
        zipcode: '77420',
        city: 'Champs-sur-Marne',
    },
    isAdmin: true
};

const compiledFile = pug.compileFile('template.pug');

const result = compiledFile(loggedUser);
console.log(result)
//pug.renderFile('template.pug')