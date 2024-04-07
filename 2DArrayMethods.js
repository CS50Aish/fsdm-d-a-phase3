let twoDArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// Accessing elements from a 2D Array

console.log("Element at row 3 and column 2 = " + twoDArray[2][1])  // Code to print the number 8
console.log("Element at row 2 and column 3 = " + twoDArray[2][1])

// Nested for loop to print the complete structure of 2D Array
console.log("Iterating through the 2D Array");

for(let row = 0; row < twoDArray.length; row++){
    for(let col = 0; col < twoDArray[row].length; col++){
        console.log(`Element at row ${row + 1}, column ${col + 1}: ${twoDArray[row][col]}`)
    }
}

// Adding a new row to a 2D Array
let newRow = [10, 11, 12]
twoDArray.push(newRow);
console.log("2D Array after pushing a new row: " + twoDArray);
console.log(twoDArray);

// Removing last row from 2D Array
twoDArray.pop();
console.log("2D Array after removing last row: " + twoDArray)
