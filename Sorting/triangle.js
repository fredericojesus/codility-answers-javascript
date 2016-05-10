//Question: https://codility.com/programmers/task/triangle/

function solution(A) {
    A.sort(function (a, b) {
        return b - a;
    });
    
    for (var i = 0, len = A.length; i < len - 2; i++) {
        if (A[i+1] + A[i+2] > A[i]) {
            return 1;
        }
    }
    
    return 0;
}

console.log(solution([10, 2, 5, 1, 8, 20]));