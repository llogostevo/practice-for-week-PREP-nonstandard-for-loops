function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let newArray = []
    for (let i=1; i<arr.length; i+=2){
         newArray.push(arr[i]);
    }
    return newArray
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let newArray = []
    if (arr.length%2===0){
        start = arr.length-1
    } else {
        start = arr.length-2
    }

    for (let i=start; i>0; i-=2){
         newArray.push(arr[i]);
    }
    return newArray
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let newArray = [];
    power = 0;
    for (let i=1; i<arr.length; i = Math.pow(2, power)){
        newArray.push(arr[i]);
        power = power+1;
    }
    return newArray;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let newArray = [];
    power = 0;
    for (let i=1; i<arr.length; i = Math.pow(n, power)){
        newArray.push(arr[i]);
        power = power+1;
    }
    return newArray;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    newArray = [];
    for (let i=0; i<arr.length/2; i++) {
        newArray.push(arr[i]);
    }
    return newArray;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    newArray = [];

    for (let i=Math.ceil(arr.length/2); i<arr.length; i++) {
        newArray.push(arr[i]);
    }
    return newArray;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}