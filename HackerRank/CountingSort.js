function countSort(arr) {
    if (arr.length % 2 !== 0) {
        return;
    }

    let d = {};
    let arrMid = arr.length / 2;

    for (let index = 0; index < arr.length; index++) {
        let a = arr[index];

        if (a.length < 2 || a.length > 10) {
            return;
        }

        let k = parseInt(a[0]);

        if (isNaN(k) || k < 0 || k > 100) {
            return;
        }

        let v = (index < arrMid) ? '-' : a[1];

        if (k in d) {
            d[k].push(v);
        } else {
            d[k] = [v];
        }
    }

    let result = "";
    Object.keys(d).sort((a, b) => a - b).forEach((sk) => {
        result += " " + d[sk].join(" ");
    });

    console.log(result.trim());
}

let inputArray = [[0, "ab"], [6, "cd"], [0, "ef"], [6, "gh"], [4, "ij"], [0, "ab"],
                    [6, "cd"], [0, "ef"], [6, "gh"], [0, "ij"], [4, "that"], [3, "be"], [0, "to"],
                    [1, "be"], [5, "question"], [1, "or"], [2, "not"], [4, "is"], [2, "to"], [4, "the"]];
countSort(inputArray);
