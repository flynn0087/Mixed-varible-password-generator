// Assignment Code
let generateBtn = document.querySelector("#generate");
// varibles determining the possible character sets in string form
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

//this section is the start of the generation of the PW and determine's the length of the PW and invalidates it and starts over if a number not wihtin the bounds is selected
function generatePassword() {
  let pwLength = prompt("Between 8 and 128; how many characters would you like to use?");
    if (pwLength <= 128 && pwLength >= 8);
      else { alert("Password needs to be between 8 and 128 characters")
      return generatePassword()
      }
  
  //this section determines the query to the user of which character sets they want to use    
  let lowerCase = confirm("Do you want lower case letters?");
  let upperCase = confirm("Do you want upper case letters?"); 
  let intigerCase = confirm("Do you want numbers?");
  let specialCase = confirm("Do you want special characters?");
  //this sets the initial character set to be blank
  let char = "";
  
  //this line makes the confirm process restart if no character set is selected
  if (lowerCase === false && upperCase === false && intigerCase === false && specialCase === false) {alert("At least one character set must be chosen"); return generatePassword()}    
  //these determine the character sets that are available as a result of the confirms    
  if (lowerCase === true) {char = char + lower};
  if (upperCase === true) {char = char + upper};
  if (intigerCase === true) {char = char + intiger};
  if (specialCase === true) {char = char + special};
  
  //this determines if all input are verified to run the password function and return the result to the user    
  let result = password (pwLength, char);
  return result;
}

//this is the "for" loop that randomly selected the characters from the verified sets
function password(pwLength, char) {
  let pwd = "";
  for (let i = 0; i < pwLength; i++) {
    pwd += char.charAt(Math.floor(Math.random() * char.length));
  }
  return pwd;
}

// Add event listener to generate button, which starts the verification and generation process when the button is clicked
generateBtn.addEventListener("click", writePassword);
