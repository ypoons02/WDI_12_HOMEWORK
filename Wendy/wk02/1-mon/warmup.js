//Write a function 'grannyTalk' what takes a question as an argument and returns a string as her response.
//If you talk to Granny normally, she'll reply "SPEAK UP SONNY JIM"
//If you talk to her in ALL CAPS, she'll reply "NO, NOT SINCE 1945"

//The year will be a random year between 1930 and 1950.

//If you say "BYE" to her she'll reply "What's that honey, I didn't hear you.."
//bonus: write an additional function 'grandpaTalk' that when called, will call granny for you and interpret her responses incorrectly by swapping vowels randomly in the words of her responses.
//sample output of grandpaTalk:
// NO, NOT SINCE incorrect year // whats that sunny

function grannyTalk(input){
    if(input != input.toUpperCase()){
      console.log("SPEAK UP SONNY JIM");
    }
    else if (input == "BYE"){
      console.log("What's that honey, I didn't hear you...");
    }
    else{
      var year = Math.floor((Math.random() * 20) + 1930);
      console.log("No, NOT SINCE "+ year);
    }
}
