// Objective - To find the highest sum from any length subarray, zero in an array of integers with both negative and positive values
// Algorithm Explanation 
// 1. maxCurrent: Tracks the highest sum of the subarray ending at the current index
// 2. maxGlobal: Tracks the highest sum found overall
// 3. The loop begins from the second element (index 1) as the first element is already
// accounted for in both maxCurrent and maxGlobal
// 4. At each element, a decision 
// Math.max(arr[i], maxCurrent + arr[i])
// 5. If maxCurrent surpasses maxGlobal, maxGlobal is updated
// 6. 

function maxSubArraySum(arr){
    if(arr.length === 0){
        return 0;
    }

    let maxCurrent = arr[0];

    let maxGlobal = arr[0];

    for(let i = 1; i < arr.length; i++){
        maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
        if(maxCurrent > maxGlobal){
            maxGlobal = maxCurrent;
        }
    }

    return maxGlobal; // Returning the max subarray sum

}

const array = [-2, 1, -3, -4, -1, 2, 1, -5, 4]
console.log("Array: " +array);
console.log("Max Subarray Sum: " +maxSubArraySum(array));