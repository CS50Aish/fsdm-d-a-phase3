// Bubble Sort Algorithm
// 1. Start with the first element in the array
// 2. Compare the current element with the next element
//     2.1. If the current element is greter than the next element, swap them.
//     2.2. If they are in corect order (or equal), then move to next adjacent elements
// 3. Continue this process for each pair of adjacent elements
//     3.1. This will push the largest element to the end of the array
// 4. Repeat the entire process for the entire array.
// 5. Stop when no swaps are needed.


// Time complexity: O(n^2) in worst case
// Space complexity: O(1)
function bubbleSort(array){
    for(let i=0; i<array.length-1;i++){
        for(let j=0; j<array.length-1; j++){
            if(array[j] > array[j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }
    return array;
}


const unsortedArray = [5,2,4,1,3]

console.log("Unsorted Array: ", unsortedArray);

console.time('bubbleSort');

const sortedArray = bubbleSort(unsortedArray);

console.timeEnd('bubbleSort');

console.log("Sorted Array: ", sortedArray);
