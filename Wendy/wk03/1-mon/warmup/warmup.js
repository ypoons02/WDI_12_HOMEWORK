//You are a villain trying to trap an adventuring archaeologist.
//Write a function 'makeFakeMap' that takes two numbers as arguments and
//returns an array of arrays to represent a map. It should be filled with
//the 'A' character, except for one, which should be an uppercase X(as below).
//The position of X should be determined randomly.

//makeFakeMap(5, 5);

// Sample outputs:
//[
//["A","A","A","A","A"],
//["A","A","A","A","A"],
//["A","A","X","A","A"],
//["A","A","A","A","A"],
//["A","A","A","A","A"]
//];

//makeFakeMap(5, 5);
//[
//["A","A","A","A","A"],
//["A","A","A","A","A"],
//["A","A","A","A","A"],
//["A","A","A","A","X"],
//["A","A","A","A","A"]
//];

//makeFakeMap(5, 5);
//[
//["A","A","A","A","A"],
//["A","A","A","X","A"],
//["A","A","A","A","A"],
//["A","A","A","A","A"],
//["A","A","A","A","A"]
//];

function makeFakeMap(length,width){
var mapItem = "A";
var maplength = [];
var mapLengthString = "";
var map = [[]];

var x = width;
var y = length;

//draw horizontal
  for (i = 0; i < x; i++) {
   maplength.splice(i, 0, mapItem)+ ",";
  }
   //maplengthString = maplength;
//draw vertical
  for (i = 0; i < y; i++) {
   //map =  map  +"[" +maplength+"]"+"\r\n" ;
   map.splice(0, i, maplength)+ ",";
  }
    //console.log("["+"\r\n"+map+"]");

 console.log(map[0]);
  console.log(map[1]);
   console.log(map[2]);
    console.log(map[3]);
     console.log(map[4]);

  //randomly insert X
  //random position for length
  var randomLength = Math.floor(Math.random() * (x - 1 + 1)) +1;

  //random position for Width
  var randomwidth = Math.floor(Math.random() * (y - 1 + 1)) +1;
}
