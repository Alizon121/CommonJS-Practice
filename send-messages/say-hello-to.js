// The import requires that we use two dots since we are going back to the root directory
const sayMessage = require('../messages/say-message')
function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}

sayHelloTo("Woody");

//!!START SILENT
module.exports = { sayHelloTo };
//!!END