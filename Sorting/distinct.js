//Question: https://codility.com/programmers/task/distinct/

function solution(A) {
    var distinctNumbers = {};
    var distinctCount = 0;
    
    for (var i = 0, len = A.length; i < len; i++) {
        if (!distinctNumbers.hasOwnProperty([A[i]])) {
            distinctNumbers[A[i]] = A[i];
            distinctCount++;
        }
    }
    
    return distinctCount;
}

console.log(solution([2, 1, 1, 2, 3, 1]));
