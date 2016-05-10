//Question: https://codility.com/programmers/task/genomic_range_query/

function solution(S, P, Q) {
    var result = [];
    
    for (var i = 0, len = P.length; i < len; i++) {
        var p = P[i];
        var q = Q[i] + 1;
        var str = S.slice(p, q);
        
        if (str.indexOf('A') > -1) {
            result.push(1);
        } else if (str.indexOf('C') > -1) {
            result.push(2);
        } else if (str.indexOf('G') > -1) {
            result.push(3);
        } else {
            result.push(4);
        }
    }
    
    return result;
}

console.log(solution('CAGCCTA', [2, 5, 0], [4, 5, 6]));
