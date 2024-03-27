function insertionSort(arr) {
    var len = arr.length;
    for (var i = 1; i < len; i++) {
      var key = arr[i];
      var j = i - 1;
  
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = key;
    }
    return arr;
  }
  
  // Exemplo de uso:
  var arrayParaOrdenar = [64, 34, 25, 12, 22, 11, 90];
  console.log("Array antes da ordenação: " + arrayParaOrdenar);
  insertionSort(arrayParaOrdenar);
  console.log("Array após a ordenação: " + arrayParaOrdenar);
  