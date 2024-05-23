//深さ優先探索的な手法で
function nCk(n, k) {
    let box = [];

    rec([], 0, 0);
    function rec(arr, num, length) {
        if (k - num > n - length) {
            return;
        }
        if (length == n) {
            box.push(arr);
            return;
        }
        if (num == k) {
            arr = arr.concat(new Array(n - length).fill(0));
            box.push(arr);
            return;
        }
        rec(arr.concat([0]), num, length + 1);
        rec(arr.concat([1]), num + 1, length + 1);
    }
    return box;
}
