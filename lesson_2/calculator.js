const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber (num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

console.log('Welcome to Calculator!');

// ask the user for the first number
prompt("What's the first number?");
let first = readline.question();

while (invalidNumber(first)) {
  prompt("Hmm... that doesn't look like a valid number.");
  first = readline.question();
}

// ask the user for the second number
prompt("What's the second number?");
let second = readline.question();

while (invalidNumber(second)) {
  prompt("Hmm... that doesn't look like a valid number.");
  second = readline.question();
}

// ask the user for an operation to perform
prompt("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide ");
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = readline.question();
}

let operands = [+first + +second, first - second, first * second, first / second];

// perform the operation on the two numbers
let calculated = operands[operation - 1];

// print the result to the terminal
prompt(`The result is: ${calculated}`);