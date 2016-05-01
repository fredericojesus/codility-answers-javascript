//Question: https://codility.com/programmers/task/passing_cars/

function solution(A) {
    var eastCarsCount = 0;
    var passingCars = 0;
    
    for (var i = 0, len = A.length; i < len; i++) {
        if (A[i] === 0) {
            eastCarsCount++;
        } else {
            passingCars += eastCarsCount;
            if (passingCars > 1000000000) {
                return -1;
            }
        }
    }
    
    return passingCars;
}

console.log(solution([0, 1, 0, 1, 1]));