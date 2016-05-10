//Question: https://codility.com/programmers/task/min_avg_two_slice/

//All slices must be of size two or three. Since any bigger slice is created from smaller slices we can check only the slices of size two or three to get the minimal average.
function solution(A) {
    var smallestStartingPos = 0;
    var smallestAverage = 10001;
    
    for (var i = 0, len = A.length; i < len - 1; i++) {
        if ((A[i] + A[i+1]) / 2 < smallestAverage) {
            smallestStartingPos = i;
            smallestAverage = (A[i] + A[i+1]) / 2;
        }
        
        if (i < len - 2 && (A[i] + A[i+1] + A[i+2]) / 3 < smallestAverage) {
            smallestStartingPos = i;
            smallestAverage = (A[i] + A[i+1] + A[i+2]) / 3;
        }
    }
    
    return smallestStartingPos;
}

console.log(solution([4, 2, 2, 5, 1, 5, 8]));