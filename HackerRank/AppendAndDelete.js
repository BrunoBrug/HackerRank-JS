function appendAndDelete(s, t, k) {
    let commonLength = 0;

    for (let i = 0; i < Math.min(s.length, t.length); i++) {
        if (s[i] === t[i]) {
            commonLength++;
        } else {
            break;
        }
    }

    let deleteMoves = s.length - commonLength;

    let addMoves = t.length - commonLength;

    let moves = deleteMoves + addMoves;

    if (moves <= k && (k >= s.length + t.length || (k - moves) % 2 === 0)) {
        return "Yes";
    } else {
        return "No";
    }
}

console.log(appendAndDelete("aaaaaaaaaa", "aaaaa", ));
