// Exercise 1: Maximum Value of Two Numbers
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
        return x;
    } else {
    return y; }
}

console.log("Exercise 1 Result: ", maxOfTwoNumbers(3,9));

// Exercise 2: Age Verification

function isAdult(age){
    if (age >= 18) {return "Adult"}
    else {return "Minor"}

}

console.log("Exercise 2 Result:", isAdult(20))

// Exercise 3: Vowel Detection

function isCharAVowel(character){
    if (character === "a") {return true}
    else if (character === "e") {return true}
    else if (character === "i") {return true}
    else if (character === "o") {return true}
    else if (character === "u") {return true}
    else {return false}
}

console.log("Exercise 3 Result:", isCharAVowel("a"))

// Exercise 4: Email Address Generation

function generateEmail(name, domain){
    return(name + "@" + domain + ".com")
}
console.log("Exercise 4 Result:", generateEmail("fares", "example"))

// Exercise 5: Greetings

function greetUser(name, time){
    return("Good " + time + ", " + name + "!")
}

console.log("Exercise 5 Result:", greetUser("Mr. Fares", "morning"))

// Exercise 6: Maximum Value of Three Numbers

const maxOfThreeNumbers = (x, y, z) => {
    if ( x >= y ) { return x; }
    else if ( y >= z ) { return y; }
    else { return z; }
}
console.log("Exercise 6 Result:", maxOfThreeNumbers(4, 7, 10))

// Exercise 7: Calculating Bill with Tip

function calculateTip(amount, percentage)
{ return amount * (percentage / 100) }

console.log("Exercise 7 Result:", calculateTip(50,20))

// Exercise 8: Temperature Converter
function convertTemperature(temperature, unit)
{ if (unit === "C") {return ((temperature * 1.8) + 32)} // [1]
else if (unit === "F") {return ((temperature - 32) / 1.8)} // [2]
else return "Please use a valid unit for temperature."
}

console.log("Exercise 8 Result:", convertTemperature(32, "F"))

// Exercise 9: Four-Function Calculator
function basicCalculator(num1, operation, num2)
{if (operation === "add") {return num1 + num2}
else if (operation === "subtract") {return num1 - num2}
else if (operation === "multiply") {return num1 * num2}
else if (operation === "divide") {return num1 / num2}
else return "Please choose a valid operator."}

console.log("Exercise 9 Result:", basicCalculator(7, "add", 5))