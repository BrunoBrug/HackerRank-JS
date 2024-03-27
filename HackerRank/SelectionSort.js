function selectionSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
      // Encontra o índice do menor elemento não ordenado
      var minIndex = i;
      for (var j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      // Troca o menor elemento encontrado com o primeiro elemento não ordenado
      var temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
    return arr;
  }
  
  // Exemplo de uso:
  var arrayParaOrdenar = [64, 34, 25, 12, 22, 11, 90];
  console.log("Array antes da ordenação: " + arrayParaOrdenar);
  selectionSort(arrayParaOrdenar);
  console.log("Array após a ordenação: " + arrayParaOrdenar);
  