//Question: https://codility.com/programmers/task/max_counters/

function solution(N, A) {
    var counters = Array.apply(null, {length: N}).map(function() {return 0;});
    var maxCounter = 0;
    var lastIncrease = 0;
    
    for (var i = 0, len = A.length; i < len; i++) {
        if (A[i] <= N) {
            //equal counter with last increase
            if (lastIncrease > counters[A[i]-1]) {
                counters[A[i]-1] = lastIncrease;
            }
            //inc counter
            counters[A[i]-1]++;
            
            //change maxCounter if increased number is higher than current
            if (counters[A[i]-1] > maxCounter) {
                maxCounter = counters[A[i]-1]
            }
        } else {
            //save lastIncrease
            lastIncrease = maxCounter;
        }
    }
   
    
    for (var i = 0, len = counters.length; i < len; i++) {
        //set all counters lower than lastIncrease to equal lastIncrease
        if (lastIncrease > counters[i]) {
            counters[i] = lastIncrease;
        }
        
    }
    
    return counters;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));