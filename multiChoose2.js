function multiChoose2(n, x) {
    let box = [];
    rec([]);

    function rec(arr) {
        if (arr.length >= n - 1) {
            arr = arr.concat([x - sum(arr)]);
            box.push(arr);
            return;
        }
        let s = arr.length == 0 ? 0 : arr.at(-1);
        for (let i = s; i * (n - arr.length) <= x - sum(arr); i++) {
            rec(arr.concat([i]));
        }
    }

    function sum(arr) {
        return arr.reduce((acc, v) => acc + v, 0);
    }
    return box;
}
