// Assignment Code
var generateBtn = document.querySelector("#generate");

 var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var lowerCase = upperCase.toLocaleLowerCase(); //this will change the capitols to lower.
 var number = "123456789"
 var spcChar = "!@#$%&?~" //selected basic special chars.
 var result = ""; //global
 var possChars = ""; //global
 var guarantiedChar = "" //global


function generatePassword() {
/*added a function for a return to confirm that the button was clicked*/
//console.log("The generate password button has been clicked")
//added that a length must be selected or it will not continue to next prompt.
  var userLength = parseInt(prompt("How many characters between 8 and 128 would you like for your password to be?"));
  //added an alert if anything but a number is typed in.
  if(isNaN(userLength)) {
    console.log(userLength)
    alert("You must choose a number!");
    return null;
  }
//added a character length range of 8-128, added an alert if number selected is out of range.
  if(userLength < 8 || userLength > 128) {
    console.log(userLength)
    alert("You must select a number between 8 and 128");
    return null;
  }
//added prompt questions.
  var choseUpper = confirm("Do you want upper case letters in your password?")
  var choseLower = confirm("Do you want lower case letters in your password?")
  var choseNum = confirm("Do you want numbers in your password?")
  var choseChar = confirm("Do you want special characters in your password?")

  //Note: To get the user choices for the characters, you will need to use the confirm method
  if(choseUpper) {
    possChars += upperCase;
    guarantiedChar += upperCase[Math.floor(Math.random() * possChars.length)]
  }

  if(choseLower) {
    possChars += lowerCase;
    guarantiedChar += lowerCase[Math.floor(Math.random() * possChars.length)];
  }

  if(choseNum) {
    possChars += number;
    guarantiedChar += number[Math.floor(Math.random() * possChars.length)]; //should i use length on this and spc char?
  }

  if(choseChar) {
    possChars += spcChar;
    guarantiedChar += spcChar[Math.floor(Math.random() * possChars.length)];
  }
console.log("RESULT: ", result)
//var chars = "abcde";

for (var i = 0; i < userLength; i++) {
  var random = Math.floor(Math.random() * possChars.length);
  result += possChars[random];
}

//loop through gaurantiedChar
/* trying algoritm found on w3 lists*/
// console.log(result); // Theoretical output - "cae";
// Math.floor(Math.random() * 128) + 8;


  /*return that variable*/
  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
