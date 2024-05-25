function multiChoose(n, x) {
    let box = [];
    rec([]);

    function rec(arr) {
        if (arr.length >= n - 1) {
            arr = arr.concat([x - sum(arr)]);
            box.push(arr);
            return;
        }
        for (let i = 0; i <= x - sum(arr); i++) {
            rec(arr.concat([i]));
        }
    }

    function sum(arr) {
        return arr.reduce((acc, v) => acc + v, 0);
    }
    return box;
}
