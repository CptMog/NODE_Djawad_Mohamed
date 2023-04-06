const pug = require('pug')

const compileTemplate = pug.compileFile('template.pug')

const result = compileTemplate({user :{isAdmin : true}})
console.log(result)