var inputContainer = [];
var player = "";
var C1 = "";
var C2 = "";
var C3 = "";
var C4 = "";
var C5 = "";
var C6 = "";
var C7 = "";
var C8 = "";
var C9 = "";
var ColumnClicked = "";
var symbol = "";
var resetGame = "";
var wins = false;
var boardisFull = false;

//Trigger Game
C1 = document.getElementById('Column1');
C2 = document.getElementById('Column2');
C3 = document.getElementById('Column3');
C4 = document.getElementById('Column4');
C5 = document.getElementById('Column5');
C6 = document.getElementById('Column6');
C7 = document.getElementById('Column7');
C8 = document.getElementById('Column8');
C9 = document.getElementById('Column9');

C1.addEventListener("click", ClickC1);
C2.addEventListener("click", ClickC2);
C3.addEventListener("click", ClickC3);
C4.addEventListener("click", ClickC4);
C5.addEventListener("click", ClickC5);
C6.addEventListener("click", ClickC6);
C7.addEventListener("click", ClickC7);
C8.addEventListener("click", ClickC8);
C9.addEventListener("click", ClickC9);

//Trigger Reset
resetGame = document.getElementById("Reset");
resetGame.addEventListener("click", resetGameBoard);

function ClickC1 (){ColumnClicked = "C1"; ticTacToe ();}
function ClickC2 (){ColumnClicked = "C2"; ticTacToe ();}
function ClickC3 (){ColumnClicked = "C3"; ticTacToe ();}
function ClickC4 (){ColumnClicked = "C4"; ticTacToe ();}
function ClickC5 (){ColumnClicked = "C5"; ticTacToe ();}
function ClickC6 (){ColumnClicked = "C6"; ticTacToe ();}
function ClickC7 (){ColumnClicked = "C7"; ticTacToe ();}
function ClickC8 (){ColumnClicked = "C8"; ticTacToe ();}
function ClickC9 (){ColumnClicked = "C9"; ticTacToe ();}

//main class
    function ticTacToe (){
    //get data from tic tac toe board
      getDataFromBoard();

    //get user's turn
      getUserTurn(inputContainer);
        if (wins === false && boardisFull === false){
          //insert user's input onto board
            insertUserInput(ColumnClicked,inputContainer,symbol);
          //refresh board
            refreshBoard(inputContainer);
          //search for winning combination on tic tac toe board
            checkWins (inputContainer,boardisFull);
        }
        else {
          //if player won, reset timmer
          resetGameBoard();
        }
    }

//get input from user
    function getDataFromBoard(){
      C1 = document.getElementById('Column1').textContent
      C2 = document.getElementById('Column2').textContent
      C3 = document.getElementById('Column3').textContent
      C4 = document.getElementById('Column4').textContent
      C5 = document.getElementById('Column5').textContent
      C6 = document.getElementById('Column6').textContent
      C7 = document.getElementById('Column7').textContent
      C8 = document.getElementById('Column8').textContent
      C9 = document.getElementById('Column9').textContent

      //insert input into container
      inputContainer = [C1,C2,C3,C4,C5,C6,C7,C8,C9];
      console.log(inputContainer);
    }

// compute player's turn
    function getUserTurn(inputContainer){
      var noOfInputs = 0;

      //calculate no.of inputs
      for (i=0; i <9; i++){
        if(inputContainer[i] != ""){
          noOfInputs = noOfInputs +1;
        }
      }
      noOfInputs = noOfInputs + 1;

      //if input is odd number, time for player 1 to play. if input is even number, time for player 2 to play
      symbol = (noOfInputs & 1 ) ? "X" : "O";

    }

//check for wins
    function checkWins (inputContainer,boardisFull){
    var winner = "";
    var point1 = inputContainer[0];
    var point2 = inputContainer[1];
    var point3 = inputContainer[2];
    var point4 = inputContainer[3];
    var point5 = inputContainer[4];
    var point6 = inputContainer[5];
    var point7 = inputContainer[6];
    var point8 = inputContainer[7];
    var point9 = inputContainer[8];

    //check horizontal lines
    if (point1 != "" || point4 != "" || point7 != ""){
      if (point1 !=""){
        if (point1 == point2 && point2 == point3){
          wins = true;
          winner = point1;
        }
      }
      if (point4 !=""){
        if (point4 == point5 && point5 == point6){
          wins = true;
          winner = point4;
        }
      }
      if (point7 !=""){
        if (point7 == point8 && point8 == point9){
          wins = true;
          winner = point7;
        }
      }
    }

    //check vertical lines
    if (point1 != "" || point2 != "" || point3 != ""){
      if(point1 != ""){
        if (point1 == point4 && point4 == point7){
          wins = true;
          winner = point1;
        }
      }
      if(point2!=""){
        if (point2 == point5 && point5 == point8){
          wins = true;
          winner = point2;
        }
      }
      if(point3!=""){
        if (point3 == point6 && point6 == point9){
          wins = true;
          winner = point3;
        }
      }
    }

//check diagonal lines
    if (point5 != ""){
      if (point1 == point5 && point5 == point9){
          wins = true;
          winner = point1;
      }
      if (point3 == point5 && point5 == point7){
          wins = true;
          winner = point3;
      }
    }
    //check for wins
      if (winner == "X"){ player = "Player 1 Won!";}
      if (winner == "O"){ player = "Player 2 Won!";}
      if (boardisFull){ document.getElementById("displayWinner").innerHTML = "Its a Draw!";}
      if (wins){
        document.getElementById("displayWinner").innerHTML = player;
      }

    }

//insert user's input onto board
    function insertUserInput(ColumnClicked,inputContainer,symbol){
      switch (ColumnClicked) {
          case "C1":  if(inputContainer[0]==""){inputContainer[0] = symbol;};break;
          case "C2":  if(inputContainer[1]==""){inputContainer[1] = symbol;};break;
          case "C3":  if(inputContainer[2]==""){inputContainer[2] = symbol;};break;
          case "C4":  if(inputContainer[3]==""){inputContainer[3] = symbol;};break;
          case "C5":  if(inputContainer[4]==""){inputContainer[4] = symbol;};break;
          case "C6":  if(inputContainer[5]==""){inputContainer[5] = symbol;};break;
          case "C7":  if(inputContainer[6]==""){inputContainer[6] = symbol;};break;
          case "C8":  if(inputContainer[7]==""){inputContainer[7] = symbol;};break;
          case "C9":  if(inputContainer[8]==""){inputContainer[8] = symbol;};break;
        }
    //check if board is full
         if(inputContainer[0] !="" && inputContainer[1] !="" && inputContainer[2] !="" && inputContainer[3] !="" && inputContainer[4] !="" && inputContainer[5] !="" && inputContainer[6] !="" && inputContainer[7] !="" && inputContainer[8] !=""){
           boardisFull = true;
         }
      }

  //insert input into container
      function refreshBoard (inputContainer){
        document.getElementById('Column1').textContent = inputContainer[0];
        document.getElementById('Column2').textContent = inputContainer[1];
        document.getElementById('Column3').textContent = inputContainer[2];
        document.getElementById('Column4').textContent = inputContainer[3];
        document.getElementById('Column5').textContent = inputContainer[4];
        document.getElementById('Column6').textContent = inputContainer[5];
        document.getElementById('Column7').textContent = inputContainer[6];
        document.getElementById('Column8').textContent = inputContainer[7];
        document.getElementById('Column9').textContent = inputContainer[8];
      }

  //reset game
      function resetGameBoard(){
        document.getElementById('Column1').textContent = "";
        document.getElementById('Column2').textContent = "";
        document.getElementById('Column3').textContent = "";
        document.getElementById('Column4').textContent = "";
        document.getElementById('Column5').textContent = "";
        document.getElementById('Column6').textContent = "";
        document.getElementById('Column7').textContent = "";
        document.getElementById('Column8').textContent = "";
        document.getElementById('Column9').textContent = "";
        wins = false;
        boardisFull = false;
        document.getElementById("displayWinner").innerHTML = "New Game!";
        //console.log("Refreshed!");
      }
