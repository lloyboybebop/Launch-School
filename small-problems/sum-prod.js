let readLineSync = require('readline-sync');

let int = readLineSync.question('Please enter an integer greater than 0: ');
let sOrP = readLineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if(sOrP === 's') {
  let sum = 0;

  for(i = 1; i <= int; i++) {
    sum += i;
  }

  console.log('The sum of the integers between 1 and ' + int + ' is ' + sum + '.');
}
else {
  let product = 1;

  for(i = 2; i <= int; i++) {
    product *= i;
  }

  console.log('The product of the integers between 1 and ' + int + ' is ' + product +'.');
}


