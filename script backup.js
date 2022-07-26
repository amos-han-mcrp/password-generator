// Assignment code here
var numericCharacters = {
  from: 8,
  to: 128
}


// Get references to the #generate element

var generateBtn = document.querySelector("#generate");
function userchoices() {
  var length = parseInt(prompt("Enter number of characters desired between 8 and 128"),10);
  if ((length >= 8) && (length <= 128)) {
    var characters = confirm("Would you like to include symbols?");
      if (characters == true) {
        alert("symbols included");
      } else {
        alert("symbols excluded");
      }
    var numbers = confirm("Would you like to include numbers?");
      if (numbers == true) {
      alert("numbers included");
    } else {
      alert("numbers excluded");
    }
    var uppercaseletters = confirm("Would you like to include uppercase letters?");
    if (uppercaseletters == true) {
      alert("uppercase letters included");
    } else {
      alert("lowercase letters excluded");
    }
    var lowercaseletters = confirm("Would you like to include lowercase letters?");
    if (lowercaseletters == true) {
      alert("lowercase letters included");
      const rand = Math.random().toString().substr(2, 8);
    } else {
      alert("lowercase letters");
    };
    var password = "";
for (var i=0; i<length; i++){
var lowercharacter = getRandomLower();
var uppercharacter = getRandomUpper();
var symbolcharacter = getRandomSymbol();
var numbercharacter = getRandomNumber();
password = password + lowercharacter;
}
var passwordText = document.querySelector("#password");

passwordText.value = password;

  } else {
    alert("Invalid response. Must be a number between 8 and 128.");
  }
}

  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = 0;


  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";
  
function generatePassword() {
  var options = userchoices();
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Write password to the #password input


function writePassword() {
  var password = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
