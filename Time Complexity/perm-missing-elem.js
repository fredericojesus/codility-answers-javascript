//Question: https://codility.com/programmers/task/perm_missing_elem/

function solution(A) {
    // if (A.length === 0) {
    //     return 1;
    // }

    // var sumArray = A.reduce(function (a, b) {
    //     return a + b;
    // });
    // var max = A.length+1;

    // var sumNormalArray = 0;
    // for (var i = 1; i < max; i++) {
    //     sumNormalArray += i;        
    // }

    // var diff = sumArray - sumNormalArray;

    // return max - diff;

    // XOR solution
    var xor_sum = 0;

    for (var index = 0, len = A.length; index < len; ++index) {
        xor_sum = xor_sum ^ A[index] ^ (index + 1);
    }

    return xor_sum ^ (A.length + 1);
}

console.log(solution([2, 3, 1, 5]));