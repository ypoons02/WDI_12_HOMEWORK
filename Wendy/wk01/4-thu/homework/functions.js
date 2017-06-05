//PT PLANNER

//Melbourne Public Transport Journey Planner
//There are 3 train lines:
//The Alamein line has the following stops: Flinders Street, Richmond, East Richmond, Burnley, Hawthorn, and Glenferrie.
//The Glen Waverly line has the following stops: Flagstaff, Melbourne Central, Parliament, Richmond, Kooyong and Tooronga.
//The Sandringham line has the following stops: Southern Cross, Richmond, South Yarra, Prahran, and Windsor.

//All 3 train lines intersect at Richmond, but there are NO other intersection points as trains run express.
//Write a javascript program that works out display the journey when you give it an origin and destination.

//var stops;
var originStopNo = 0;
var destinationStopNo = 0;

var originStopNo1 = 0;
var destinationStopNo1 = 0;

var originStopNo2 = 0;
var destinationStopNo2 = 0;

var noOfStops0 = 0;
var noOfStops1 = 0;
var noOfStops2 = 0;

var Alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var GlenWaverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var Sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];

//example:
//origin: Melbourne Central
//destination: Richmond
//Melbourne Central -----> Parliament -----> Richmond
//2 stops total
//You may want to hard code the origin and destination for easier testing in the beginning.
//Hints:
//Consider diagramming the lines by sketching out the train lines and their stops and intersection. Think about what data structure to use to store each line and all the stops on each line.
//The key to the lab is the intersection of the lines at Richmond.

var getStop = function(origin,destination) {

  noOfStops == 0;
  noOfStops0 == 0;
  noOfStops1 == 0;

  originStopNo == 0;
  destinationStopNo == 0;

  originStopNo1 == 0;
  destinationStopNo1 == 0;

  originStopNo2 == 0;
  destinationStopNo2 == 0;

  originStopNo = Alamein.indexOf(origin) + 1;
  destinationStopNo = Alamein.indexOf(destination) + 1;

  destinationStopNo1 = GlenWaverly.indexOf(destination) + 1;
  originStopNo1 = GlenWaverly.indexOf(origin) + 1;

  destinationStopNo2 = Sandringham.indexOf(destination) + 1;
  originStopNo2 = Sandringham.indexOf(origin) + 1;

//validate origin input

if (originStopNo == 0 && originStopNo1 == 0 && originStopNo2 == 0)
{
console.log("invalid origin. Please check your input and try again.");
}

if (destinationStopNo == 0 && destinationStopNo1 == 0 && destinationStopNo2 == 0)
{
console.log("invalid destination. Please check your input and try again.");
}

//if ((originStopNo != 0 && originStopNo1 != 0 && originStopNo2 != 0)||(destinationStopNo != 0 && destinationStopNo1 != 0 && destinationStopNo2 != 0)){

  if (destinationStopNo == 0 && originStopNo != -1){
      destinationStopNo = Alamein.indexOf("Richmond")+1;
      }

  if (destinationStopNo != 0 && originStopNo == 0){
      originStopNo = Alamein.indexOf("Richmond")+1;
      }

  if (destinationStopNo != 0 && originStopNo != 0){
      noOfStops0 = originStopNo - destinationStopNo;
      noOfStops0 = Math.abs(noOfStops0);
      }

  if (destinationStopNo1 == 0 && originStopNo1 != -1){
      destinationStopNo1 = GlenWaverly.indexOf("Richmond")+1;
      }

  if (destinationStopNo1 != 0 && originStopNo1 == 0){
      originStopNo1 = GlenWaverly.indexOf("Richmond")+1;
      }

  if (destinationStopNo1 != 0 && originStopNo1 != 0){
      noOfStops1 = originStopNo1 - destinationStopNo1;
      noOfStops1 = Math.abs(noOfStops1);
      }

  if (destinationStopNo2 == 0 && originStopNo2 != -1){
      destinationStopNo2 = Sandringham.indexOf("Richmond")+1;
      }

  if (destinationStopNo2 != 0 && originStopNo2 == 0){
      originStopNo2 = Sandringham.indexOf("Richmond")+1;
      }

  if (destinationStopNo2 != 0 && originStopNo2 != 0){
      noOfStops2 = originStopNo2 - destinationStopNo2;
      noOfStops2 = Math.abs(noOfStops2);
      }

//print no. of stops
var noOfStops = Math.abs(noOfStops0) +Math.abs(noOfStops1) +Math.abs(noOfStops2)+ 1;
console.log("Number of stops: " + noOfStops);
}
//}

//Non-Required Bonus:
//input validation
//User must enter a line and station in the subway network
//If the user enters something else, your program should handle it
//Add additional lines
