// Count Sort Algorithm - Non-Comparision based

function countSort(array){
    // find max number in given array
    let max = Math.max(...array);

    // lets create an auxillary array to store the count of each element
    let countArray = new Array(max + 1).fill(0);

    // Count the occurrences of each element in input array
    for(let element of array){
        countArray[element]++;
    }

    // Calculate prefix sums of the count array
    // Visit each element in the counts array and store the sum of all the counts encountered so far
    let prefixSums = [];
    prefixSums[0] = countArray[0];
    for(let i = 1; i <= max; i++){
        prefixSums[i] = prefixSums[i - 1] + countArray[i];
    }

    // Create an empty output array to store the elements
    let outputArray  = new Array(array.length);

    // place each element in the correct position in the output array
    for(let i = array.length - 1; i >= 0; i--){
        let element = array[i];
        let index = prefixSums[element] - 1;
        outputArray[index] = element;
        prefixSums[element]--;
    }

    return outputArray;
}


let inputArray = [4, 2, 10, 1, 5, 3, 7];
console.log("inputArray: ", inputArray);

let outputSortedArray = countSort(inputArray);
console.log("outputSortedArray: ", outputSortedArray)