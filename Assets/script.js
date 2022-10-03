// Assignment code here
var chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v']
var upperChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numb = [1,2,3,4,5,6,7,8,9]
var specialChars = ['!','"','#','$','%','&',"'",'(',')','*','+','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~']
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
      
    if (numberOfChars < 8 || numberOfChars > 128) {
      window.alert(' Oh no! Password must be a minimum of 8 characters and maximum of 128 characters, Please try again.');
    };

  // ask user if the want uppercase chars? 
    var getUpperCase = window.confirm('Would you like to incorporate uppercase letters?');
  // ask user if the want lowercase chars? 
    var lowerCase =  window.confirm('Would you like to incorporate uppercase letters?');
   // ask user if the want numbs? 
    var confirmNumbs =  window.confirm('Would you like to incorporate uppercase letters?');
  // ask user if the want special chars? 
    var confirmSpecialChars = window.confirm('Would you like to incorporate uppercase letters?');
  // if user wants special chars randomize chars for loop
    if (getUpperCase === true) {
     getUpperCase = Math.floor(Math.random()* upperChars.length +1 );
     randomChar = upperChars[getUpperCase];
     console.log(randomChar);
    };
};
//   for (i = 0; i < numberOfChars; i++)















// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
