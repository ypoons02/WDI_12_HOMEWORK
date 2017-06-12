//Return true if the given string is a palindrome. Otherwise, return false.
//A palindrome is a word or sentence that's spelled the same way
//both forward and backward, ignoring punctuation, case, and spacing.

function palindrome(input){
input = input.trim();
input = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
input = input.toUpperCase();

var palindromeIsTrue = "";

  for (i = 0; i < input.length; i++){
    var left =input.charAt(i);
    var y = input.length - i - 1;
    var right =input.charAt(y);

      if (left == right){
        palindromeIsTrue = "Yes";
      }

      else {
        palindromeIsTrue = "No";
      }

    if (y < 0){
      break;
    }
  }
  console.log("Is this a palindrome? Answer: "+palindromeIsTrue)
}
