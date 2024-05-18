// Binary Search Algorithm
// Time Complexity - O(log n) - logarithmic time complexity

// function to find the index of a target in the sorted array
function binarySearch(array, target){
    let left = 0;
    let right = array.length - 1;

    // while loop divides the search space in half with each iteration,
    // thus leading to a logarithmic time complexity when the array is sorted
    while(left <= right){
        const mid = Math.floor((left+right)/2);
        if(array[mid] === target){
            return mid;
        }
        if(array[mid] < target){
            left = mid + 1; // search in the right half
        }
        else{
            right = mid - 1; // search in the left half
        }
    }
    return  -1; // element not found
}

const array = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 16;

const result = binarySearch(array, target);

if(result >= 0){
    console.log(target, " is present at index: ", result, " in the given array: ", array);
    }
    else{
        console.log(target, " not found as the index calculated is: ", result);
    }