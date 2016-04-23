//Question https://codility.com/programmers/task/odd_occurrences_in_array/

function solution(A) {
    // only correctness
    // while (true) {
    //     var unpairedNumber = A[0];
    //     A.shift();

    //     if (A.indexOf(unpairedNumber) == -1) {
    //         break;
    //     }

    //     A.splice(A.indexOf(unpairedNumber), 1);
    // }
    
    
    //performance and correctness
    var unpairedNumber = 0
    for (var i in A) {
        //a ^ b = a XOR b
        unpairedNumber ^= A[i];
    }

    return unpairedNumber;
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));

