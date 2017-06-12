//Write a program that creates a string that represents an 8×8 grid,
//using new- line characters to separate lines.
//At each position of the grid there is either a
//space or a “#” character. The characters
//should form a chess board. Passing this
//string to console.log should show something
//like this:
//# # # # # # # #
//# # # # # # # #
//# # # # # # # #
//# # # # # # # #

function chessboard(variable,symbol){
var chessboardItem = symbol;
var chessboardLine = [];
var chessboard = "";

//draw horizontal
  for (i = 0; i < variable; i++) {
    chessboardLine.splice(i, 0, chessboardItem);
  }

//draw vertical
  for (i = 0; i < variable; i++) {
    chessboard = chessboard + chessboardLine+"\r\n";
  }
  console.log(chessboard);
}



//bonus When you have a program that generates this
//pattern, define a variable size = 8 and change the
//program so that it works for any size, outputting a grid
//of the given width and height. Then, define a variable
//'symbol' that generates the board using the specified
//character instead.
