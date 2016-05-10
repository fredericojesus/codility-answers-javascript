//Question: https://codility.com/programmers/task/prefix_set/

function solution(A) {
    var valuesThatOccurInA = {};
    var lastDiffOccurence = 0;
    
    for (var i = 0, len = A.length; i < len; i++) {
        if (!valuesThatOccurInA.hasOwnProperty([A[i]])) {
            valuesThatOccurInA[A[i]] = A[i];
            lastDiffOccurence = i;
        }
    }
    
    return lastDiffOccurence;
}

console.log(solution([2, 2, 1, 0, 1]));