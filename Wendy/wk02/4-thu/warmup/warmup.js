//FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.
//This is a form of cryptography known as the Caesar Cipher. It has a shift parameter of 3.
//The alphabet is normally:
//ABCDEFGHIJKLMNOPQRSTUVWXYZ
//The alphabet with the shift parameter of 3 is now as follows:
//DEFGHIJKLMNOPQRSTUVWXYZABC

//var input = "AB CD EFGHIJKLMNOPQRSTUVWXYZ";
var output =[];
var position = 0;
var index = 0;
var item = "";
var restart = -1;

function cryptography(input){
  for (var i = 0; i < input.length; i++) {
    if (i+3 >= input.length)  {
        restart = restart + 1;
        item = input.charAt(restart);
      }
    else {
        index = i + 3;
        item = input.charAt(index);
      }
    output.splice(i, 0, item );
  }
  console.log(output);

//reset variables
  output = [];
  position = 0;
  index = 0;
  item = "";
  restart = -1;
}
