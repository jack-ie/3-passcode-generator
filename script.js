var specialCharacters;
var lowerCase;
var upperCase;
var numericCharacters;
var characterAmount;
var choices;
var passcode;

//Character references
character = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', ',', '.', '/', '?', '>', '<'];
numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
upper = ["Q", "W", "E", "R", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
lower = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  passcode = newPasscode();
  document.getElementById("password").placeholder = passcode;
});

//password to the #password input
function newPasscode() {
  characterAmount = window.prompt("How many characters for your passcode? (Between 8 and 128)");
  if (!characterAmount) {
    alert("You need to enter a value");
    return ('');
  } else if (characterAmount < 8 || characterAmount > 128) {
    return('');
  } else {
    upperCase = confirm("Would you like UPPERCASE letters?");
    lowerCase = confirm("Would you like lowercase letters?");
    numericCharacters = confirm("Would you like numbers?");
    specialCharacters = confirm("Would you like special characters?");
  };

  //no options choosen
  if (!specialCharacters && !lowerCase && !upperCase && !numericCharacters) {
    return ('');
  }

  //all options choosen
  else if (specialCharacters && numericCharacters && upperCase && lowerCase) {
    choices = character.concat(numeric, lower, upper);
  }

  //3 options choosen
  else if (specialCharacters && numericCharacters && upperCase) {
    choices = character.concat(numeric, upper);
  } else if (specialCharacters && numericCharacters && lowerCase) {
    choices = character.concat(number, lower);
  } else if (specialCharacters && lowerCase && upperCase) {
    choices = character.concat(lower, upper);
  } else if (numericCharacters && lowerCase && upperCase) {
    choices = number.concat(lower, upper);
  }

  //2 options choosen
  else if (specialCharacters && numericCharacters) {
    choices = character.concat(numeric);
  } else if (specialCharacters && lowerCase) {
    choices = character.concat(lower);
  } else if (specialCharacters && upperCase) {
    choices = character.concat(upper);
  } else if (lowerCase && numericCharacters) {
    choices = lower.concat(numeric);
  } else if (lowerCase && upperCase) {
    choices = lower.concat(upper);
  } else if (numericCharacters && upperCase) {
    choices = numeric.concat(upper);
  }

  //1 option
  else if (specialCharacters) {
    choices = character;
  } else if (numericCharacters) {
    choices = numeric;
  } else if (lowerCase) {
    choices = lower;
  } else if (upperCase) {
    choices = upper;
  };

  //array placeholder
  var password = [];

  //randomizer
  for (var i = 0; i < characterAmount; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }

  //turns array into string 
  var passcode = password.join("");
  UserInput(passcode);
  return passcode;
}

//Puts passcode in alert
function UserInput(passcode) {
  document.getElementById("password").textContent = passcode;
}
