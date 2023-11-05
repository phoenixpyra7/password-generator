// Assignment Code
var generateBtn = document.querySelector("#generate");

 var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var lowerCase = upperCase.toLocaleLowerCase(); //this will change the capitols to lower.
 var number = "123456789"
 var spcChar = "!@#$%&?~" //selected basic special chars.
 var result = ""; //global
 var possChars = ""; //global
 var guarantiedChar = "" //global


/*added a function for a return to
function generatePassword() {
  //console.log("The generate password button has been clicked")
  var userLength = parseInt(prompt("What is the total length of your password"));
  if(isNaN(userLength)) {
    console.log(userLength)
    alert("Must hoose a number!");
    return null;
  }

  if(userLength < 8 || userLength > 128) {
    console.log(userLength)
    alert("Must be btw 8 through 128");
    return null;
  }

  var choseUpper = confirm("Do you want upper case in your password?")
  var choseLower = confirm("Do you want lower case in your password?")
  var choseNum = confirm("Do you want number in your password?")
  var choseChar = confirm("Do you want special characters in your password?")

  //To get the user choices fort characters you will need to use the confirm method
  if(choseUpper) {
    possChars += upperCase;
    guarantiedChar += upperCase[Math.floor(Math.random() * possChars.length)]
  }

  if(choseLower) {
    possChars += lowerCase;
  }

  if(choseNum) {
    possChars += number;
  }

  if(choseChar) {
    possChars += spcChar;
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
