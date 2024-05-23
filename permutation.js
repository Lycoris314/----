function permutation(arr) {
    let box = [];
    rec([], 0);
    function rec(ar, i) {
        if (i == arr.length) {
            box.push(ar);
            return;
        }
        for (let j = 0; j <= ar.length; j++) {
            rec(ar.toSpliced(j, 0, arr[i]), i + 1);
        }
    }
    return box;
}
