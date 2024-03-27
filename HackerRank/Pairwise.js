function pairwise(arr, sum){
    let answer = 0;
    let sumArr = [];
    for(let i = 0; i <= arr.length; i++){
        for(let j = i + 1; j <= arr.length; j++){
            if(arr[i] + arr[j] == sum 
            && !sumArr.includes(i) 
            && !sumArr.includes(j)){
                sumArr.push(i, j);
            }
        }
    }

   console.log(sumArr)
    
    sumArr.forEach(element => {
        answer += element;
    });

    return answer;
}

console.log(pairwise([0, 0, 0, 0, 1, 1], 1));