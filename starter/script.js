// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = prompt("What is the length of the password? (8-128 characters)");
  var includeSpecial = confirm("Do you want to include special characters in the password?");
  var includeNumeric = confirm("Do you want to include numeric characters in the password?");
  var includeLowercase = confirm("Do you want to include lowercase characters in the password?");
  var includeUppercase = confirm("Do you want to include uppercase characters in the password?");
  var passwordOptions = {
    length: length,
    includeSpecial: specialCharacters,
    includeNumeric: numericCharacters,
    includeLowercase: lowerCasedCharacters,
    includeUppercase: upperCasedCharacters
  }
  return passwordOptions;
}


// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  // Initialize password with an empty string
  let password = "";

  // Prompt user for password length
  let length = prompt("Enter the desired length of your password (must be between 10 and 64 characters):");

  // Validate password length
  while (length < 10 || length > 64) {
    alert("Error: Password length must be between 10 and 64 characters.");
    length = prompt("Enter the desired length of your password (must be between 10 and 64 characters):");
  }

  // Prompt user for character types to include in password
  let lowercase = confirm("Include lowercase characters in your password?");
  let uppercase = confirm("Include uppercase characters in your password?");
  let numeric = confirm("Include numeric characters in your password?");
  let special = confirm("Include special characters in your password?");

  // Validate that at least one character type is selected
  while (!lowercase && !uppercase && !numeric && !special) {
    alert("Error: You must select at least one character type to include in your password.");
    lowercase = confirm("Include lowercase characters in your password?");
    uppercase = confirm("Include uppercase characters in your password?");
    numeric = confirm("Include numeric characters in your password?");
    special = confirm("Include special characters in your password?");
  }

  // Initialize string of possible characters based on selected character types
  let possibleCharacters = "";
  if (lowercase) possibleCharacters += lowerCasedCharacters;
  if (uppercase) possibleCharacters += upperCasedCharacters;
  if (numeric) possibleCharacters += numericCharacters;
  if (special) possibleCharacters += specialCharacters;

  // Generate password by selecting random characters from the string of possible characters
  for (let i = 0; i < length; i++) {
    password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
  }

  // Display generated password in an alert
  alert(password);
}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);