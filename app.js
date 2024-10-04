// Question 01: Get the user's full name and show a welcome message
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "! Welcome.");

// Question 02: Get mobile model and show the length of the input
let mobileModel = prompt("Enter your favorite mobile phone model:");
let modlngth = mobileModel.length;
alert("Your input length is: " + modelLength);

// Question 03: Find the index of 'n' in the word 'Pakistani'
let country = "Pakistani";
let indexOfN = country.indexOf("n");
alert("String: Pakistani, Index of 'n': " + indexOfN);

// Question 04: Find the last index of 'l' in 'Hello World'
let phrase = "Hello World";
let lastIndexL = phrase.lastIndexOf("l");
alert("String: Hello World, Last index of 'l': " + lastIndexL);

// Question 05: Find the character at index 3 in 'Pakistani'
let countryName = "Pakistani";
let charAt3 = countryName.charAt(3);
alert("String: Pakistani, Character at index 3: " + charAt3);

// Question 06: Combine first and last name and show a welcome message
let fName = prompt("Enter your first name:");
let lName = prompt("Enter your last name:");
let combinedName = fName.concat(" ", lName);
alert("Hello, " + combinedName + "! Welcome.");

// Question 07: Replace 'Hyder' with 'Islam' in 'Hyderabad'
let city = "Hyderabad";
let newCity = city.replace("Hyder", "Islam");
alert("City after replacement: " + newCity);

// Question 08: Replace 'and' with '&' in the sentence
let msg = "I love ice-creams";
let updatedMsg = msg.replace(/and/g, "&");
alert("Updated message: " + updatedMsg);

// Question 09: Convert string '472' to a number and show types
let str = "472";
let num = Number(str);
alert("Value: " + num + "\nType: " + typeof num + "\nValue: " + str + "\nType: " + typeof str);

// Question 10: Convert user input to uppercase
let userText = prompt("Enter some text:");
let upperCaseInput = userText.toUpperCase();
alert("Input in uppercase: " + upperCaseInput);

// Question 11: Convert user input to title case (first letter capital)
let userText2 = prompt("Enter some text:");
let words = userText2.split(' ');
let titleCasedText = "";
for (let i = 0; i < words.length; i++) {
    titleCasedText += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
alert("Input in title case: " + titleCasedText);

// Question 12: Convert decimal number to a string without the dot
let numVal = 35.36;
let numString = numVal.toString();
let result = numString.replace('.', '');
alert("Number: " + numVal + " Result: " + result);

// Question 13: Check if username has invalid characters
let username = prompt("Enter your username:");
let invalidChars = ['@', '.', '!', ','];
for (let i = 0; i < invalidChars.length; i++) {
    if (username.includes(invalidChars[i])) {
        alert("Please enter a valid username");
        username = prompt("Enter a valid username:");
        i = -1;
    }
}
alert("Username accepted: " + username);

// Question 14: Search for a bakery item in the list
let itemList = ["cake", "apple pie", "cookie", "chips", "patties"];
let userOrder = prompt("What would you like to order?");
let itemFound = false;
for (let i = 0; i < itemList.length; i++) {
    if (itemList[i].toLowerCase() === userOrder.toLowerCase()) {
        itemFound = true;
        break;
    }
}
if (itemFound) {
    alert("The item '" + userOrder + "' is available.");
} else {
    alert("The item '" + userOrder + "' is not available.");
}

// Question 15: Check if the password is valid
let password = prompt("Enter your password:");
let containsLetter = /[a-zA-Z]/.test(password);
let containsNumber = /[0-9]/.test(password);
let startsWithNumber = /^[0-9]/.test(password);
let isValidLength = password.length >= 6;
if (containsLetter && containsNumber && !startsWithNumber && isValidLength) {
    alert("Your password is valid: " + password);
} else {
    let errors = "Invalid password. Please check:\n";
    if (!containsLetter) errors += "- It must have at least one letter.\n";
    if (!containsNumber) errors += "- It must have at least one number.\n";
    if (startsWithNumber) errors += "- It should not start with a number.\n";
    if (!isValidLength) errors += "- It must be at least 6 characters long.\n";
    alert(errors);
}

// Question 16: Split university name into letters and show each letter on a new line
let clgName = "Ayesha Bawani college";
let clgArr = clgName.split("");
for (let i = 0; i < clgArr.length; i++) {
    document.write(clgArr[i] + "<br>");
}

// Question 17: Find the last character of user input
let inputText = prompt("Enter some text:");
let lastCharacter = inputText.charAt(inputText.length - 1);
alert("The last character is: " + lastCharacter);

// Question 18: Count how many times the word 'the' appears in the sentence
let sentence = "The quick brown fox jumps over the lazy dog";
let countThe = (sentence.match(/the/gi) || []).length;
alert("The word 'the' appears " + countThe + " times.");