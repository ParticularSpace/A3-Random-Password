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
generateBtn.addEventListener("click", writePassword);{}

function generatePassword() {

while(true) {
var passwordLength = prompt("Choose a password length between 8 and 128 characters.");

var bigCase = confirm('Include uppercase letters ("Ok" to confirm, "Cancel" to deny)?');

var smallCase = confirm('Include lowercase letters ("Ok" to confirm, "Cancel" to deny)?');

var numeric = confirm('Include numbers ("Ok" to confirm, "Cancel" to deny)?');

var special = confirm('Include special characters ("Ok" to confirm, "Cancel" to deny)?');

if (bigCase === true && smallCase === true && numeric === true && special === true) {
   alert('Uppercase, Lowercase, Numbers and Special Characters will be added!');
}else if (bigCase === true && smallCase === true && numeric === true && special === false) {
   alert('Uppercase, Lowercase, and Numbers have been added!');
  }else if(bigCase === true && smallCase === true && numeric === false && special === false){ 
    alert('Uppercase and Lowercase will be added!');
} else if(bigCase === true && smallCase === false && numeric === false && special === false){
  alert('Uppercase will be added!')
   } else {
    alert('Not enough options selected. Try Again.')
   break; 
  }
  
  }
 }
