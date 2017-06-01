//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// your code here

var pm = ['turnbull', 'rudd', 'howard', 'hawk', 'keatin'];

var getLength1 = function(index) {
  console.log('length of PM '+ (index+0) + pm[index+0] + ' length: '+ pm[index+0].length);
}

var getLength2 = function(index) {
  for (var index = 0; index < pm.length; index++) {
  console.log('length of PM'+ (index+1) + pm[index]+ ' length: '+ pm[index+0].length);
  }
}


// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// your code here
var transmogrifier = function(number1,number2,number3){

var productof2No = number1*number2;
var finalResult = Math.pow(productof2No, number3)
console.log(finalResult);

}

// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// your code here

var getwordReverse = function(myWord){
console.log(myWord.split("").reverse().join(""));

}
