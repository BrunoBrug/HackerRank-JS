function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  var arrayParaOrdenar = [64, 34, 25, 12, 22, 11, 90];
  console.log("Array antes da ordenação: " + arrayParaOrdenar);
  bubbleSort(arrayParaOrdenar);
  console.log("Array após a ordenação: " + arrayParaOrdenar);
  