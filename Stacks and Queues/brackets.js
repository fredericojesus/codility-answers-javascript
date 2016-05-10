//Question: https://codility.com/programmers/task/brackets/

function solution(S) {
    var t = {
        '(': ')',
        '[': ']',
        '{': '}'  
    };
    var stack = [];
    
    for (var i = 0; i < S.length; i++) {
        if (t[S[i]]) {
            stack.push(S[i]);
        } else {
            if (S[i] === t[stack[stack.length - 1]]) {
                stack.pop();
            } else {
                return 0;
            }
        }
    }
    
    if (stack.length === 0) {
        return 1;
    }
    
    return 0;
}

console.log(solution('{[()()]}'));