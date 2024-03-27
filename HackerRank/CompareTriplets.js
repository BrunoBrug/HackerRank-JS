function compareTriplets(a, b){
    let points = [0, 0]
    if(0 < a <= 100 && 0 < b <= 100){
        for(let i = 0; i < 3; i++){
            if(a[i] > b[i]){
                points[0]++
            } else if(b[i] > a[i]){
                points[1]++
            } else{
                continue
            }
        }
    }
    return points
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]))