window.onload = () => {
    document
        .querySelector("form.permutation")
        .addEventListener("submit", (e) => {
            e.preventDefault();
            const input = document.querySelector("input.permutation").value;
            const arr = input.split(",");

            const span = document.querySelector("span.permutation");
            if (arr.length >= 10) {
                span.textContent = "要素数を10未満にしてください";
            } else {
                span.textContent = "[" + permutation(arr).join("] [") + "]";
            }
        });

    document.querySelector("form.nCk").addEventListener("submit", (e) => {
        e.preventDefault();
        const input = document.querySelector("input.nCk").value;
        const arr = input.split(",");

        const span = document.querySelector("span.nCk");
        if (arr[0] >= 20) {
            span.textContent = "第一引数を20未満にしてください";
        } else {
            span.textContent = "[" + nCk(...arr).join("] [") + "]";
        }
    });
};
