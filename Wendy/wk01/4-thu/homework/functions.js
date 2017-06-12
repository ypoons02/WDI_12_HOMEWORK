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

var commonStation = "Richmond";

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

    if (originStopNo != 0 || destinationStopNo != 0){
      if(originStopNo == 0){
        originStopNo = Alamein.indexOf(commonStation) + 1;
      }
      if(destinationStopNo == 0){
        destinationStopNo = Alamein.indexOf(commonStation) + 1;
      }
    }

  noOfStops0 = originStopNo - destinationStopNo;
  noOfStops0 = Math.abs(noOfStops0);

  destinationStopNo1 = GlenWaverly.indexOf(destination) + 1;
  originStopNo1 = GlenWaverly.indexOf(origin) + 1;

    if (originStopNo1 != 0 || destinationStopNo1 != 0){
      if(originStopNo1 == 0){
        originStopNo1 = GlenWaverly.indexOf(commonStation) + 1;
      }
      if(destinationStopNo1 == 0){
        destinationStopNo1 = GlenWaverly.indexOf(commonStation) + 1;
      }
    }

  noOfStops1 = originStopNo1 - destinationStopNo1;
  noOfStops1 = Math.abs(noOfStops1);

  destinationStopNo2 = Sandringham.indexOf(destination) + 1;
  originStopNo2 = Sandringham.indexOf(origin) + 1;

    if (originStopNo2 != 0 || destinationStopNo2 != 0){
      if(originStopNo2 == 0){
        originStopNo2 = Sandringham.indexOf(commonStation) + 1;
      }
      if(destinationStopNo2 == 0){
        destinationStopNo2 = Sandringham.indexOf(commonStation) + 1;
      }
    }

  noOfStops2 = originStopNo2 - destinationStopNo2;
  noOfStops2 = Math.abs(noOfStops2);

//----------------------------------------------------------------------------------
//validate origin input
if (originStopNo == 0 && originStopNo1 == 0 && originStopNo2 == 0){
    console.log("invalid origin. Please check your input and try again.");
  }

if (destinationStopNo == 0 && destinationStopNo1 == 0 && destinationStopNo2 == 0){
    console.log("invalid destination. Please check your input and try again.");
  }
//----------------------------------------------------------------------------------
//if ((originStopNo != 0 && originStopNo1 != 0 && originStopNo2 != 0)||(destinationStopNo != 0 && destinationStopNo1 != 0 && destinationStopNo2 != 0)){
//print no. of stops
var noOfStops = Math.abs(noOfStops0) +Math.abs(noOfStops1) +Math.abs(noOfStops2)+ 1;
console.log("Number of stops: " + noOfStops);

//----------------------------------------------------------------------------------
//print station
var printStation = "";
var printStation0 ="";
var printStation1 ="";
var printStation2 ="";

// print stations for Alamein line
if (originStopNo > 0 || destinationStopNo > 0){
//if orginal stop  to destination stop in array is in accending order, print results in accending order.
  if (originStopNo < destinationStopNo) {
    originStopNo = originStopNo -1;
    for (i= originStopNo; i < destinationStopNo; i ++) {
      if (printStation0 == "") {
        printStation0 = Alamein[i];
      }
      else {
        printStation0 = printStation0 + " - " + Alamein[i];
      }
    }
  }
  else {
  //if orginal stop to destination stop in array is in descending order, print results in accending order.
    destinationStopNo = destinationStopNo -1;
      for (i= originStopNo - 1; i >= destinationStopNo; i --) {
        if (printStation0 == "") {
          printStation0 = Alamein[i];
          }
        else {
          printStation0 = printStation0 + " - " + Alamein[i];
        }
    }
  }
}
// print stations for GlenWaverly line
if (originStopNo1 > 0 || destinationStopNo1 > 0){
//if orginal stop  to destination stop in array is in accending order, print results in accending order.
  if (originStopNo1 < destinationStopNo1) {
    originStopNo1 = originStopNo1 -1;
    for (i= originStopNo1; i < destinationStopNo1; i ++) {
      if (printStation1 == "") {
        printStation1 = GlenWaverly[i];
      }
      else {
        printStation1 = printStation1 + " - " + GlenWaverly[i];
      }
    }
  }
  else {
  //if orginal stop to destination stop in array is in descending order, print results in accending order.
    destinationStopNo1 = destinationStopNo1 -1;
      for (i= originStopNo1 - 1; i >= destinationStopNo1; i --) {
        if (printStation1 == "") {
          printStation1 = GlenWaverly[i];
          }
        else {
          printStation1 = printStation1 + " - " + GlenWaverly[i];
        }
    }
  }
}
// print stations for Sandringham line
if (originStopNo2 > 0 || destinationStopNo2 > 0){
//if orginal stop  to destination stop in array is in accending order, print results in accending order.
  if (originStopNo2 < destinationStopNo2) {
    originStopNo2 = originStopNo2 -1;
    for (i= originStopNo2; i < destinationStopNo2; i ++) {
      if (printStation2 == "") {
        printStation2 = Sandringham[i];
      }
      else {
        printStation2 = printStation2 + " - " + Sandringham[i];
      }
    }
  }
  else {
  //if orginal stop to destination stop in array is in descending order, print results in accending order.
    destinationStopNo2 = destinationStopNo2 -1;
      for (i= originStopNo2 - 1; i >= destinationStopNo2; i --) {
        if (printStation2 == "") {
          printStation2 = Sandringham[i];
          }
        else {
          printStation2 = printStation2 + " - " + Sandringham[i];
        }
    }
  }
}

//----------------------------------------------------------------------------------
//Print stations in seq for different trainlines
//find line for origin
  if(Alamein.indexOf(origin) > -1) {
    printStation = printStation0;
    }
  if(GlenWaverly.indexOf(origin) > -1) {
    printStation = printStation1;
  }
  if(Sandringham.indexOf(origin) > -1) {
    printStation =  printStation2;
  }
  if(Alamein.indexOf(destination) > -1 && Alamein.indexOf(origin) == -1) {
    printStation = printStation +" - " +printStation0;
    }
  if(GlenWaverly.indexOf(destination) > -1 && GlenWaverly.indexOf(origin) == -1) {
    printStation = printStation +" - " +printStation1;
  }
  if(Sandringham.indexOf(destination) > -1 && Sandringham.indexOf(origin) == -1) {
    printStation = printStation +" - " +printStation2;
  }

console.log(printStation);
printStation = "";
printStation0 ="";
printStation1 ="";
printStation2 = "";

}
//}

//Non-Required Bonus:
//input validation
//User must enter a line and station in the subway network
//If the user enters something else, your program should handle it
//Add additional lines
