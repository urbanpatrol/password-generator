var generateButton = document.getElementById("generate");
var passwordInput = document.getElementById("password");

generateButton.addEventListener("click", () => {
  
  // Initialise password criteria
  let length = 0;
  let lowercase = false;
  let uppercase = false;
  let numeric = false;
  let special = false;

  // Present prompts for password criteria
  while (length < 10 || length > 64) {
    length = prompt(
      "Enter the desired length of your password (between 10 and 64 characters):"
    );
  }

  lowercase = confirm("Include lowercase characters in your password?");
  uppercase = confirm("Include uppercase characters in your password?");
  numeric = confirm("Include numeric characters in your password?");
  special = confirm("Include special characters in your password?");

  // Validate that at least one character type is selected
  if (!lowercase && !uppercase && !numeric && !special) {
    alert("You must select at least one character type!");
    return;
  }

  // Generate password
  let password = "";
  var possibleCharacters = [];
  var specialCharacters = [
    "$",
    "@",
    "%",
    "&",
    "*",
  ];

  if (lowercase) {
    possibleCharacters.push("abcdefghijklmnopqrstuvwxyz");
  }
  if (uppercase) {
    possibleCharacters.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (numeric) {
    possibleCharacters.push("0123456789");
  }
  if (special) {
    possibleCharacters.push(specialCharacters);
  }

  for (let i = 0; i < length; i++) {
    var characterType = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
    password += characterType[Math.floor(Math.random() * characterType.length)];
  }

  // Display password
  passwordInput.value = password;
  alert(`Your generated password is: ${password}`);
});
