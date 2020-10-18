// Assignment Code
let generateBtn = document.querySelector("#generate");
let lower ="abcdefghijklmnopqrstuvwxyz";
let upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let intiger ="0123456789";
let special =" !#$%&'()*+,-./:;<=>?@[\\]^_`{|}~\""

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  let pwLength = prompt("Between 8 and 128; how many characters would you like to use?");
    if (pwLength <= 128 && pwLength >= 8);
      else { alert("Password needs to be between 8 and 128 characters")
        return generatePassword()
      }

         
  let lowerCase = confirm("Do you want lower case letters?");
  let upperCase = confirm("Do you want upper case letters?"); 
  let intigerCase = confirm("Do you want numbers?");
  let specialCase = confirm("Do you want special characters?");
  let char = "";

  if (lowerCase === false && upperCase === false && intigerCase === false && specialCase === false) {alert("At least one character set must be chosen"); return generatePassword()}     
  if (lowerCase === true) {char = char + lower};
  if (upperCase === true) {char = char + upper};
  if (intigerCase === true) {char = char + intiger};
  if (specialCase === true) {char = char + special};

  let result = password (pwLength, char);
  return result;
}

function password(pwLength, char) {
  let pwd = "";
  for (let i = 0; i < pwLength; i++) {
    pwd += char.charAt(Math.floor(Math.random() * char.length));
  }
  return pwd;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
