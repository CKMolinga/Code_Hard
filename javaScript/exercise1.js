// Write a program that seperates the characters inside a string and puts them in an array

let str = "Code Hard";
let strArray = [];

for (i = 0; i < str.length; ++i) {
    let array = str[i];
    strArray.push(array);
}
console.log(strArray);