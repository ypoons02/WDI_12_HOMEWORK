

//JS Variables
//Assign the string "Jack" to a variable called captain
//Using the captain variable, use string concatenation to form the string "Oh Jack, my Jack!", assigning it to a variable named phrase
var captain = "Jack";
var phrase = "Oh " + captain + ", my "+ captain + "!";
console.log(phrase);

//JS Conditionals
//var souls = 3;
//var lifeRafts = 2;
//Write an if statement that console.logs "SOS!" if there are more souls than lifeRafts
var souls = 3;
var lifeRafts = 2;

if (souls > lifeRafts) {
  console.log("SOS");
}

//Data Structures - JS Arrays
//Create an array named weekend with just 'Saturday' in it
//Add 'Sunday' to the end of the weekend array
//Add 'Friday' to the front to the front of the weekend array
//Access 'Saturday' in the array and assign to a variable named day
//Remove 'Friday' from the array

var weekend = ['Saturday']

if (weekend[1] == 'Friday') {
  console.log('Friday is already added!');
}
else{
  console.log('Friday isnt added! I have now added Friday into the array!');
  weekend.splice(0, 0, "Friday");
  var weekendvalues = weekend.toString();
  console.log('values on array - Weekend:'+ weekendvalues);
  }

var day = weekend.indexOf("Saturday");
day = weekend[day];
console.log("day is " + day);

var removeFriday = weekend.indexOf("Friday");
weekend.splice(removeFriday, 1);
console.log("values in array Weekend: "+ weekend.join());

//Data Structures - JS Objects
//Write an object literal named brain having a property of energyLevel with a value of 10
//Assign the property of energyLevel to a variable named energy
//Add a dream property to the brain object that holds the string 'electric sheep'

var brain = {energylevel: 10,dream:'electric sheep'};
var energy = brain.energylevel;

console.log('energy level:' + energy + ', dream: '+ brain.dream);

//JS Functions
//Write a function to return the area of a rectangle (the product of its length and its width)
//Invoke the function with 3 and 4 as arguments and save it to a variable
var area = calcArea(3, 4);
console.log(area);

function calcArea(length,width){
  return length * width;
}
