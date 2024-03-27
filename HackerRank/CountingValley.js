function countingValleys(steps, path) {
    arrPath = path.split("");
    let height = 0;
    let valleyCount = 0;
    for(let i = 0; i < steps; i++){
        if(arrPath[i] == "D"){
            height--;
        } else{
            height++;
        }
        if(arrPath[i] == "U" && height == 0){
            valleyCount++;
        }
    }
    return valleyCount;
}
console.log(countingValleys(8, "UDDDUDUU"));