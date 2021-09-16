// Write a JavaScript program that separates the different words in a string and puts them in an array as array values beginning from the first to the last word.
// Example string ="Good morning Developers"
// Expected output = ["Good", "morning", "Developers"].

// Note: String higher order methods are not allowed to be used. Use plain old javascript.

let string = "Good Morning Developers"
let Arry = [];

function hasWhiteSpace(s) {
    return s.indexOf(' ') >= 0;
}
hasWhiteSpace(string);
if (hasWhiteSpace == true) {
    console.log("Has white space")
} else {
    console.log("No white space")
}