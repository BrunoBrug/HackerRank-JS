function diagonalDifference(arr){
    let prin = 0
    let sec = 0

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if (arr[i][j] > 100 || arr[i][j] < -100) {
                return null
            }

            if(i == j){
                prin = prin + arr[i][j]
            } 
            if((i + j) == (arr.length - 1)){
                sec = sec + arr[i][j]
            }
        }
    }

    
    return Math.abs(prin - sec)
}

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]))