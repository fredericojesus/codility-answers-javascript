//Question: https://codility.com/programmers/task/frog_river_one/

function solution(X, A) {
    var coveredPositions = {};
    var positionsToCover = X;
    
    for (var i in A) {
        if (!coveredPositions[A[i]]) {
            //position to cover
            coveredPositions[A[i]] = A[i];
            
            if(--positionsToCover === 0) {
                return parseInt(i);
            }
        }   
    }
    
    return -1;
}

console.log(solution(1, [1]));