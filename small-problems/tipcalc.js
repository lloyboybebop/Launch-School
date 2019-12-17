let readlineSync = require("readline-sync");

let bill = readlineSync.question("What is the bill? ");
let percent = readlineSync.question("What is the tip percentage? ")/100;
let tip = (bill * percent);
let total = (bill + tip);

console.log('\nThe tip is $' + tip.toFixed(2));
console.log('The total is $' + total.toFixed(2));
