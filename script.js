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


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
