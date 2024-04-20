// Objective - To ascertain whether an array of even length can be divided into two halves with 
// equal sums and unique elements in each half

// Algo Explanation

// 1. First, we check if the total sum of the array is even and the length of the array is even.
// 2. We calculate the half sum, which is what each half should sum up to for the array to be 
// balanced.
// 3. As we iterate through the array, we keep adding elements to a set and summing up their 
// values.
// 4. If, at any point, the current sum equals the half sum, we check the remaining elements in 
// the array. If these remaining elements are all unique (checked by comparing the size of a 
// set constructed from these elements with the length of these elements), then the array 
// can split into two balanced halves. Otherwise, it cannot.

// Solution

function isBalancedArray(arr){ // [1,2,3,4,5,7]
    if(arr.length % 2 !== 0){ // arr length must be even
        return false;
    }

    let totalSum = arr.reduce((acc, cur) => acc + cur, 0);
    
    console.log("total sum: " + totalSum);

    if(totalSum % 2 !== 0){ // totalSum must be even
        return false;
    }
    
    let halfSum = totalSum/2;
    console.log("half sum: " + halfSum)
    let set = new Set();
    let currentSum = 0;

    for(let i = 0; i < arr.length; i++){
        currentSum += arr[i];
        set.add(arr[i]);

        if(currentSum === halfSum){
            let remainingElements = arr.slice(i+1);
            let remainingSet = new Set(remainingElements);
            if(remainingSet.size === remainingElements.length){
                return true; // both halves are balanced and have unique elements            
            }
            else{
                return false; // second half has duplicates
            }
        }
        
    }


return false;
}

const array = [4, 3, 5, 6, 2, 4]
console.log(array + " is balanced " + isBalancedArray(array));