// METHOD 1: USING ARRAYS 

// Sort Ascending Order

let number = [1, 6, 0];
let arr2 = [];

const len = number.length;

for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {

        // To sort in descending order: use lesser than comparison(number[i]>number[j]) 
        if (number[i] > number[j]) {
            let temp = number[i];
            number[i] = number[j];
            number[j] = temp;

        }
    }
}

console.log(number);