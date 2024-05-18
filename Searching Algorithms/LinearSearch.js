// Function to perform linear search
// Time Complexity - O(n) - linear time complexity
// Space Complexity - O(1) - constant space complexity

function linearSearch(array, target){

    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}

const array = [1, 3, 5, 8, 9]

const target = 3;

const index = linearSearch(array, target);

if(index >= 0){
console.log(target, " is present at index: ", index, " in the given array: ", array);
}
else{
    console.log(target, " not found as the index calculated is: ", index);
}