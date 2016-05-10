function quicksort(arr) {
    //if array is empty
    if (arr.length === 0) {
        return [];
    }
    
    var left = [];
    var right = [];
    var pivot = arr[0];
    
    //go through each element in array
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    
    return quicksort(left).concat(pivot, quicksort(right));
}

console.log(quicksort([1, 6, 5, 10, 8, 12, 7]));