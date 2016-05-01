//Question: https://codility.com/programmers/task/count_div/

function solution(A, B, K) {
    
    // var minValue =  Math.floor((A + K - 1) / K) * K other way of getting the min value
    for (var i = A; i <= B; i++) {
        if (i % K === 0) {
            break;
        }
    }
    
    if (i > B) {
        return 0;
    }
    
    return Math.floor((B - i) / K) + 1;
}

console.log(solution(6, 11, 2));