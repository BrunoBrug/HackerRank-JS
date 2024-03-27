function plusMinus(arr) {  
    let positive = 0;
    let negative = 0;
    let zero = 0;
    const length = arr.length

    if(length > 0 && length <= 100){
        arr.forEach(element => {
            if(element > 0) {
                positive++;
            } else if(element < 0){
                negative++;
            } else{
                zero++;
            }
        });
    }

    console.log((positive/length).toFixed(6))
    console.log((negative/length).toFixed(6)) 
    console.log((zero/length).toFixed(6));
}



plusMinus([-4,3,-9,0,4,1])