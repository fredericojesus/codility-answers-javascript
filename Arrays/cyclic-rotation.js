//Question https://codility.com/programmers/task/cyclic_rotation/

function solution(A, K) {
    for (var i = 0; i < K; i++) {
        //inserts last element in the first position of the array
        A.unshift(A[A.length-1]);
        //removes the last element
        A.pop();
    }
    
    return A;
}

console.log(solution([3, 8, 9, 7, 6], 3));
