// Assignment Code
var generateBtn = document.querySelector("#generate");
/*added a function for a return of a confirmation the button was clicked*/
function generatePassword() {
  console.log("The generate passwerd button has been clicked")
/*thinking that an if-else will help select character range, status was crossed out so I selected permission status instead*/
if ((charaters >= 1) && (characters <= 28)) {
  PermissionStatus = "Acceptable.";
} else {
  PermissionStatus = "Not accepptable.";
}
}
// 



  /*return that variable*/
  return "Generated password will go here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
