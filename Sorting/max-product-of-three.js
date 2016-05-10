//Question: https://codility.com/programmers/task/max_product_of_three/

function solution(A) {
    A.sort(function (a, b) {
        return b - a;
    });
    
    var len = A.length;
    
    if (A[0] < 0) {
        return A[0] * A[1] * A[2];
    }
    
    if (A[len-1] < 0 && A[len-2] < 0) {
        if (A[1] * A[2] < A[len-1] * A[len-2]) {
            return A[0] * A[len-1] * A[len-2];
        }
    }
    
    return A[0] * A[1] * A[2];   
}

console.log(solution([-3, 1, 2, -2, 5, 6]));