// Assignment Code
var generateBtn = document.querySelector("#generate");
/*added a function for a return of a confirmation the button was clicked*/
function generatePassword() {
  console.log("The generate passwerd button has been clicked")

/* from general chat as example
var chars = "abcde";
var result = "";

for (var i = 0; i < 3; i++) {
  var random = Math.floor(Math.random() * chars.length);
  result += chars[random];
}
*/
/* trying algoritm found on w3 lists*/
console.log(result); // Theoretical output - "cae";
Math.floor(Math.random() * 128) + 8;









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
