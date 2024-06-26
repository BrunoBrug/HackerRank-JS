function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = [4, 2, 7, 1, 9, 3];
const sortedArray = quickSort(array);


console.log("Array original: ", array);
console.log("Array ordenado: ", sortedArray);
