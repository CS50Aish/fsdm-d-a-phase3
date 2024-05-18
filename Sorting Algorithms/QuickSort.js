// Quick Sort Function
// It is also based on Divide and Conquer Design Technique
// It is more performant than merge sort in sorting large datasets

// Time Complexity - O(n log n) - Average Case, and O(n^2) - Worst case
// Space Complexity - O(log n)
function quickSort(array, low, high){

    if(low < high){
       const pivotIndex = partition(array, low, high);
       
       // Recursive call for the left part of the array 
       quickSort(array, low, pivotIndex - 1);

       // Recursive call for the right part of the array
       quickSort(array, pivotIndex + 1, high);
    }
}

function partition(array, low, high){
    const pivot = array[high];
    let i = low - 1;
 
    for(let j = low; j < high; j++){
        if(array[j] < pivot){
           i++;
           [array[i], array[j]] = [array[j], array[i]] // Swapping elements
        }
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]]; // Swap pivot
    return i + 1; // returning pivot index
}

const array = [6, 3, 4, 5, 2, 1];
console.log('unsortedArray:', array);
quickSort(array, 0, array.length - 1);
console.log('sortedArray:', array);