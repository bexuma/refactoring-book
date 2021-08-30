var invoices = require('./invoices.json');
var plays = require('./plays.json');
var statement = require('./main.js');

console.log(statement(invoices[0], plays))