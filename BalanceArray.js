// Objective - To ascertain whether an array of even length can be divided into two halves with equal sum and unique elements in each half

function isBalancedArray(arr){
    if(arr.length % 2 !== 0){
        return false;
    }

    let totalSum = arr.reduce((acc, cur) => acc + cur, 0);
    console.log("Total Sum: " +totalSum);

    if(totalSum % 2 !== 0){
        return false;
    }

    let halfsum = totalSum/2;
    let set = new Set();
    let currentSum = 0;

    for(let i=0; i < arr.length; i++){
        currentSum += arr[i];
        set.add(arr[i]);

        if(currentSum === halfsum){
            let remainingElements = arr.slice(i+1);
            let remainigSet = new Set(remainingElements);

            if(remainigSet.size === remainingElements.length){
                return true; // Both halves are balanced and have unique elements 
            }
        }
    }
}

const array = [1, 2, 3, 4, 5, 6]
isBalancedArray(array);