//Question https://codility.com/programmers/task/cyclic_rotation/

function solution(A, K) {
    console.log(A);
    for (var i = 0; i < K; i++) {
        //inserts last element in the first position of the array
        A.unshift(A[A.length-1]);
        //removes the last element
        A.pop();
    }
    
    return A;
}

(function () {
    console.log(solution([10, 1000, 55, 10, 3, 5], 2));
})();