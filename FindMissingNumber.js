// here we are finding the missing number from the first n natural numbers stored in the array
function findMissingNumber(arr){
    const n = arr.length + 1; // 8
    const expectedSum = (n * (n + 1))/2; // sum of first n natural numbers - 36

    let actualSum = 0;
    for(let i = 0; i < arr.length; i++){
        actualSum += arr[i];
    }

    console.log('Actual Sum: ' + actualSum);
    console.log('Expected Sum: ' + expectedSum);
    return expectedSum - actualSum; 
}

const array = [1, 2, 4, 6, 3, 7, 8];

console.log('Missing Number: ' + findMissingNumber(array));