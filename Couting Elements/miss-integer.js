//Question: https://codility.com/programmers/task/missing_integer/

function solution(A) {
    var allElements = {};
    
    for (var i = 0, len = A.length; i < A.length; i++) {
        allElements[A[i]] = A[i];
    }
    
    for (var i = 1, len = A.length; i <= A.length; i++) {
        if (!allElements[i]) {
            return i;
        }
    }
    
    //if none occurs, the first that does not occur bigger than 0 is length+1
    return A.length + 1;
}

console.log(solution([1, 3, 6, 4, 1, 2]));