//###The Ultimate Life Decider Never make a decision again!
//####Part One - The Coin of Inevitability

//Create a file called decider.js
//Write a function called coinFlip that 'console.logs' HEADS or TAILS when called
//Add a counter that declares WINNER in the console when either HEADS or TAILS is flipped 5 times.

//#####Part Two - The Coin App
//Create a file called decider.html
//Find any coin image online
//Link the .js file, while you're there you may also decide to add a .css file for some styling
//Now add the necessary components to the decider.html file so that when the coin image is clicked
//the coinFlip function result and tally are returned somewhere on the page.

var i = 0;
var headsValue = 0;
var tailsValue = 0;

var tally = document.getElementById("tally");
var clickInput = document.getElementById("clickImage");

clickInput.addEventListener("click", coinFlip);

//function users call to display results
function coinFlip(){
  var results;
  var reason = Math.random()< 0.5;
    i = i + 1;
      if (i > 5) {
          if (headsValue > tailsValue){
            var winner = "HEADS";
          }
          else {
            var winner = "TAILS";
          }
          i = 0;

          var heads = headsValue;
          var tails = tailsValue;

          headsValue = 0;
          tailsValue = 0;

        return tally.innerHTML = "You have reached 5 flips! </br> Final Results: Heads: " + heads + " Tails: "+ tails + ". The winner: "+ winner;
        console.log("Final Results: Heads: " + heads + " Tails: "+ tails + ". The winner: "+ winner);
      }

      else {
        if (reason){
          results = "HEADS";
          headsValue = headsValue + 1;
        }
        else{
          results = "TAILS";
          tailsValue = tailsValue + 1;
        }
    return tally.innerHTML = "Game: "+i+ " Results: "+results;
    console.log("Game: "+i+ " Results: "+results);
    }
}
