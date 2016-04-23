//Question: https://codility.com/programmers/task/tape_equilibrium/

function solution(A) {
    var first = A[0];
    var second = A.slice(1).reduce(function (a, b) {
        return a + b; 
    });
    var minimalDifference = Math.abs(first - second);
    
    var length = A.length;
    for (var i = 1; i < length-1; i++) {
        first += A[i];
        second -= A[i];
        
        var absolute = Math.abs(first - second);
        if (absolute < minimalDifference) {
            minimalDifference = absolute;
        }
    }
    
    return minimalDifference;
}

console.log(solution([3, 1, 2, 4, 3]));
