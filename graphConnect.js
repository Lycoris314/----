//ｓと連結している頂点のリストを出力する。
function graphConnect(G, V, s) {
    let box = [];

    let visited = new Map();
    let neighborMap = new Map();
    for (let e of V) {
        visited.set(e, false);
        neighborMap.set(e, neighbor(e));
    }

    function neighbor(k) {
        const a = G.filter((e) => e[0] == k || e[1] == k);
        return Array.from(new Set(a.flat().filter((e) => e != k)));
    }

    main(s);
    function main(v) {
        visited.set(v, true);
        box.push(v);
        for (let x of neighborMap.get(v)) {
            if (visited.get(x)) {
                continue;
            }
            main(x);
        }
    }
    return box;
}
