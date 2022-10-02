// Assignment code here
var chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v']
var numb = [1,2,3,4,5,6,7,8,9]
var specialChars = ['!','"','#','$','%','&',"'",'(',')','*','+','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~']
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  function generatePassword() {
  // ask user for number of characters
    var userChoice = window.prompt ('How many characters would you like you password to contain?');
// if user hit cancel end 
    if (!userChoice) {
      return;
    }
    userChoice = math.floor(math.random()* userChoice);
// if the user wants a certain number of characters userchoice math random multiplied by user choice 

// ask user if the want uppercase chars?
// if user wants upercase allow randomize then .uppercase else if randomize
// ask user if the want lowercase chars?
// if user wants upercase allow randomize then .uppercase
// ask user if the want numbs?
// if user wants numbs allow randomize numbs
// ask user if the want special chars?
// if user wants special chars randomize chars
};
  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
