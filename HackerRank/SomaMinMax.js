function somaMinMax(arr){
    arr.forEach(number => {
        if(number < 1 || number > Math.pow(10, 5)){
            return null
        }
    });

    let max = min = arr[0], total = 0
    
    arr.forEach(number => {
        total = total + number
        if(number > max){
            max = number
        }
        if(number < min){
            min = number
        }
    }); 

    let somaMin = total - max
    let somaMax = total - min

    console.log(somaMin, somaMax)
}

somaMinMax([-2 ,3, 5, 7, 9])