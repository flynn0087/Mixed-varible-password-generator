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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
