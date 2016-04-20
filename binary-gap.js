//Question: https://codility.com/programmers/task/binary_gap/

function solution(N) {
    //integer to binary
    var binaryN = N.toString(2);
    //ignore tail zeros
    binaryN = binaryN.slice(0, binaryN.lastIndexOf(1) + 1);
    var longestBinaryGap = 0;
    
    while(binaryN.indexOf(0) > -1) {
        //find first 0 and slice
        binaryN = binaryN.slice(binaryN.indexOf(0));
        //cut gap
        var gap = binaryN.slice(0, binaryN.indexOf(1));
        
        //save gap if bigger than last one
        if (gap.length > longestBinaryGap) {
            longestBinaryGap = gap.length;   
        }
        
        //find first 1 and slice
        binaryN = binaryN.slice(binaryN.indexOf(1));
    }
    
    return longestBinaryGap;
}

(function () {
    console.log(solution(51712));
})();