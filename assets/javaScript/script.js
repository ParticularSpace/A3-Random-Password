// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
var passwordSize = prompt("Choose a password length between 8 and 128 characters.");
if(passwordSize < 8 || passwordSize > 128){
  alert('Password length must be between 8 and 128 characters.');
  return '';
}

alert('You chose ' + passwordSize + ' characters!');

  var bigCase = confirm('Include uppercase letters ("Ok" to confirm, "Cancel" to deny)?');
  var smallCase = confirm('Include lowercase letters ("Ok" to confirm, "Cancel" to deny)?');
  var numeric = confirm('Include numbers ("Ok" to confirm, "Cancel" to deny)?');
  var special = confirm('Include special characters ("Ok" to confirm, "Cancel" to deny)?');

if (bigCase === false && smallCase === false && numeric === false && special === false) {
   alert('Must select at least ONE option.');
   return '';
   }

var userChoiceCharacter = "";

  if (bigCase === true) {
    userChoiceCharacter += upperCase;
    alert('Uppercase has been added!');
  }
  if (smallCase === true) {
    userChoiceCharacter += lowerCase;
    alert('Lowercase has been added!');
  }
  if (numeric === true) {
    userChoiceCharacter += numbers;
    alert('Numbers have been added!');
  }
  if (special === true) {
    userChoiceCharacter += specialCharacters;
    alert('Special characters have been added!');
  }

  var password = "";
    for (var i = 0; i < passwordSize; i++) {
      var randomPin = Math.floor(Math.random() * userChoiceCharacter.length);
      password += userChoiceCharacter.substring(randomPin, randomPin+1);
    }
  return password;
 }

