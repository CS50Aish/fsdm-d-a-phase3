// Insertion Sort function
// Time Complexity - O(n^2)
// Space Complexity - O(1)

function insertionSort(array){

    for(let i = 1; i < array.length; i++){
        let currentValue = array[i];
        let j = i - 1;

        // Shift elements greater than the current value to the right
        while(j >= 0 && array[j] > currentValue){
            array[j+1] = array[j];
            j--;
        }

        // Insert the current value at the correct position
        array[j+1] = currentValue;
    }

    return array;
}

const unsortedArray = [5, 2, 4, 1, 3];
console.log('unsortedArray: ', unsortedArray);

console.time('insertionSort');
const sortedArray = insertionSort(unsortedArray);
console.timeEnd('insertionSort');
console.log('sortedArray: ', sortedArray);


