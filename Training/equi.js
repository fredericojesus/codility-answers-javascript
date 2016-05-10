//Question: https://codility.com/programmers/task/equi/

function solution(A) {
    if (A.length === 0) {
        return -1;    
    }
    
    var sumAll = A.reduce(function (a, b) {
        return a + b;
    });
    
    var sumLeft = 0;
  
    for (var i = 0, len = A.length; i < len; i++) {
        var sumRight = sumAll - sumLeft - A[i];       
        
        if (sumLeft === sumRight) {
            return i;
        }
        
        sumLeft += A[i];
    }
    
    return -1;
}

console.log(solution([-1, 3, -4, 5, 1, -6, 2, 1]));