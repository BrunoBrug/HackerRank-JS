function organizingContainers(container) {
    let rowSums = new Array(container.length).fill(0);
    let colSums = new Array(container.length).fill(0);

    for (let i = 0; i < container.length; i++) {
        for (let j = 0; j < container.length; j++) {
            rowSums[i] += container[i][j];
            colSums[j] += container[i][j];
        }
    }

    rowSums.sort((a, b) => a - b);
    colSums.sort((a, b) => a - b);

    if (rowSums.join() === colSums.join()) {
        return "Possible";
    } else {
        return "Impossible";
    }
}

// Exemplo de uso
const container = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
];

console.log(organizingContainers(container));
