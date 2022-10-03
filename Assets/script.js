// Assignment code here
var chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v']
var upperChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numb = [1,2,3,4,5,6,7,8,9]
var specialChars = ['!','"','#','$','%','&',"'",'(',')','*','+','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~']
var generatedPassword = ""
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Password 
function generatePassword() {
    // ask user for number of characters
  var userChoice = window.prompt ('How many characters would you like you password to contain?');
  // if user hit cancel end 
  if (!userChoice) {
    return;
  };
  // if the user wants a certain number of characters userchoice parseInt()
  userChoice = parseInt(userChoice);
  numberOfChars = userChoice;
  // set character limits
  if (numberOfChars < 8 || numberOfChars > 128) {
    window.alert(' Oh no! Password must be a minimum of 8 characters and maximum of 128 characters, Please try again.');
  };

  // ask user if the want uppercase chars? 
  var getUpperCase = window.confirm('Would you like to incorporate uppercase letters?');
  // ask user if the want lowercase chars? 
  var lowerCase =  window.confirm('Would you like to incorporate lowercase letters?');
   // ask user if the want numbs? 
  var confirmNumbs =  window.confirm('Would you like to incorporate numbers?');
  // ask user if the want special chars? 
  var confirmSpecialChars = window.confirm('Would you like to incorporate special characters?');
  // if user wants special chars, numbs, lower or upper case randomize those chars. 
  if (getUpperCase === true) {
    getUpperCase = Math.floor(Math.random()* upperChars.length +1 ); 
    generatedPassword = generatedPassword.concat(upperChars[getUpperCase]);
  };

  if (lowerCase === true) {
    lowerCase = Math.floor(Math.random()* chars.length +1 );
    generatedPassword = generatedPassword.concat(chars[lowerCase]);
  };
    
  if (confirmNumbs === true) {
    confirmNumbs = Math.floor(Math.random()* numb.length +1 );
    generatedPassword = generatedPassword.concat(numb[confirmNumbs]);
  };

  if (confirmSpecialChars === true) {
    confirmSpecialChars = Math.floor(Math.random()* specialChars.length +1 );
    generatedPassword = generatedPassword.concat(specialChars[confirmSpecialChars]);
  };
// create a loop to grab random numbers from chars array.
  for (i = generatedPassword.length; i < numberOfChars; i++) {
    addFillerChars = (chars[i]);
    generatedPassword += addFillerChars;
    
  }
  // return its value to display on called query selector.
  return generatedPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
