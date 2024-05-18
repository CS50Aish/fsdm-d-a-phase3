// Heap Sort Algorithm
// It works on a heap i.e. a binary tree structure

// Function to swap two elements in an array
function swap(array, i, j){
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

// Function to heapify a subtree rooted at index i
function heapify(array, n, i){
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    let largest = i;

    // Compare with the left child
    if(left < n && array[left] > array[largest]){
        largest = left;
    }

    // Compare with the right child
    if(right < n && array[right] > array[largest]){
        largest = right;
    }

    // if the largest element is not the root, swap and heapify the affected subtree
    if(largest !== i){
        swap(array, i, largest);
        heapify(array, n, largest);
    }
}

function heapSort(array){
    const n = array.length;

    // Build a max heap (rearrange array)
    for(let i = Math.floor(n/2) - 1; i >= 0; i--){
        heapify(array, n, i);
    }

    // One by one extract elements from the heap
    for(let i = n - 1; i >= 0; i--){
        // Move the current root to the end
        swap(array, 0, i);

        // Call heapify on the reduced heap
        heapify(array, i, 0);
    }   

}

const array = [3, 0, 2, 5, -1, 4, 1];
console.log('Unsorted Array: ', array);

heapSort(array);

console.log('Sorted Array: ', array);
