// Assignment Code created variables for elements
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

//Checks size requested and if it fits in the requirements
function generatePassword() {
var passwordSize = prompt("Choose a password length between 8 and 128 characters.");
if(passwordSize < 8 || passwordSize > 128){
  alert('Password length must be between 8 and 128 characters.');
  return '';
}
//Alerts to chosen password length
alert('You chose ' + passwordSize + ' characters!');
//Confirm choices and assigns values to their corresponding variables
  var bigCase = confirm('Include uppercase letters ("Ok" to confirm, "Cancel" to deny)?');
  var smallCase = confirm('Include lowercase letters ("Ok" to confirm, "Cancel" to deny)?');
  var numeric = confirm('Include numbers ("Ok" to confirm, "Cancel" to deny)?');
  var special = confirm('Include special characters ("Ok" to confirm, "Cancel" to deny)?');
//If all section are left empty reset
if (bigCase === false && smallCase === false && numeric === false && special === false) {
   alert('Must select at least ONE option.');
   return '';
   }
//Created a new variable to hold each selected option based off of the true or false value
var userChoiceCharacter = "";
//Check if the option is selected
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
//Create our password variable that is going to put out a string
  var password = "";
  //The next for loop will be the password generator based on the user choice character thus passwordSize as length
  //we choose a random number and round down to a whole number, this number picks a character from userChoiceCharacter 
  //using the substring function we single out one character from userChoiceCharacter and add it to the password
  for (var i = 0; i < passwordSize; i++) {
      var randomSelector = Math.floor(Math.random() * userChoiceCharacter.length);
      password += userChoiceCharacter.substring(randomSelector, randomSelector+1);
    }
    //our final return statement calling our random password variable
  return password;
 }

