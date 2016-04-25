//Question: https://codility.com/programmers/task/perm_check/

function solution(A) {
    var len = A.length;
    var max = A.length;
    var all = {};
    
    for (var i in A) {
        if (!all[A[i]] && A[i] <= len) {
            all[A[i]] = A[i];
            max--;
        }
    }
    
    return max === 0 ? 1 : 0;
}

console.log(solution([4, 2, 3, 1]));