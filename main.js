let motosCompradas = 47;
let totalMotos = 136;
let dinheiro = 24580420;

function atualizarWidget() {

    const porcentagem =
        (motosCompradas / totalMotos) * 100;

    const motosRestantes =
        totalMotos - motosCompradas;

    document.getElementById("bought").textContent =
        motosCompradas;

    document.getElementById("total").textContent =
        totalMotos;

    document.getElementById("remaining").textContent =
        motosRestantes;

    document.getElementById("percentage").textContent =
        porcentagem.toFixed(1).replace(".", ",") + "%";

    document.getElementById("progress-bar").style.width =
        porcentagem + "%";

    document.getElementById("money").textContent =
        "$" + dinheiro.toLocaleString("en-US");
}

atualizarWidget();
