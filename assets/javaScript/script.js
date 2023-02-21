// Assignment Code - created variables to pull as user inputs to create a password
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "'-<>[]{}~!@#$%^&*()_+";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Checks size requested and if it fits in the requirements, if not it will prompt the user to enter a number between 8 
//and 128
function generatePassword() {
var passwordSize = prompt("Choose a password length between 8 and 128 characters.");
if(passwordSize < 8 || passwordSize > 128){
  alert('Password length must be between 8 and 128 characters.');
  return '';
}
//Alerts to chosen password length if chosen length is between 8 and 128
alert('You chose ' + passwordSize + ' characters!');
//Confirm choices and assigns a true or false value based on user input
  var bigCase = confirm('Include uppercase letters ("Ok" to confirm, "Cancel" to deny)?');
  var smallCase = confirm('Include lowercase letters ("Ok" to confirm, "Cancel" to deny)?');
  var numeric = confirm('Include numbers ("Ok" to confirm, "Cancel" to deny)?');
  var special = confirm('Include special characters ("Ok" to confirm, "Cancel" to deny)?');
//check user choices if all section are left empty reset
if (bigCase === false && smallCase === false && numeric === false && special === false) {
   alert('Must select at least ONE option.');
   return '';
   }
//Created a new variable to hold each selected option based off of the true or false value
var userChoiceCharacter = "";
//Check user choices again for true values if true assign new chosen variable to userChoiceCharacter
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
//Create our password variable that is going to put out our randomly generated password
  var password = "";
  //The next for loop will be the password generator based on the user choice character thus passwordSize as length    math.random chooses a random number, multiply it by the length of userChoiceCharacter and round down to a whole number, this random number picks a character from userChoiceCharacter using the .substring function we single out one character from userChoiceCharacter and add it to the password
  for (var i = 0; i < passwordSize; i++) {
      var randomSelector = Math.floor(Math.random() * userChoiceCharacter.length);
      password += userChoiceCharacter.substring(randomSelector, randomSelector+1);
    }
    //our final return statement calling our random password variable
  return password;
 }

