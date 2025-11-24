function calcularIMC() {
    let peso = parseFloat(document.getElementById("pesoIMC").value);
    let altura = parseFloat(document.getElementById("alturaIMC").value) / 100;
    let resultado = peso / (altura * altura);
    let ResultadoImc = "";

    if (resultado < 18.5) {
        ResultadoImc = "Abaixo do peso";
    }
    else if (resultado >= 18.5 && resultado <= 24.9) {
        ResultadoImc = "Peso ideal";
    }
    else if (resultado >= 25 && resultado <= 29.9) {
        ResultadoImc = "Levemente acima do peso";
    }
    else if (resultado >= 30 && resultado <= 34.9) {
        ResultadoImc = "Obesidade grau I";
    }
    else if (resultado >= 35 && resultado <= 39.9) {
        ResultadoImc = "Obesidade grau II (severa)";
    }
    else if (resultado >= 40) {
        ResultadoImc = "Obesidade grau III (mórbida)";
    }

    document.getElementById("ResultadoIMC").innerText = "IMC: " + resultado.toFixed(2) + " → " + ResultadoImc;
}


function calcularTmbTdee() {
    let peso = parseFloat(document.getElementById("pesoCT").value);
    let altura = parseFloat(document.getElementById("alturaCT").value);
    let idade = document.getElementById("idadeCT").value;
    const sexo = document.getElementById("sexoCT").value;
    const nivelAtividade = document.getElementById("AtividadeNivel").value;
    let fatorAtividade = 0;
    let tmb = 0.00;
    let tdee = 0.00;

    if (sexo === "1") {
        tmb = 66 + (13.7 * peso) + (5.0 * altura) - (6.8 * idade);
    } else if (sexo === "2") {
        tmb = 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);
    } else {
        sexoSelecionado = "nenhum";
    }

    document.getElementById("ResultadoTMB").innerText = "TMB: " + " → " + tmb + " calorias";

    switch (nivelAtividade) {
        case "1":
            fatorAtividade = 1.2;
            break;
        case "2":
            fatorAtividade = 1.375;
            break;
        case "3":
            fatorAtividade = 1.55;
            break;
        case "4":
            fatorAtividade = 1.725;
            break;
        default:
            fatorAtividade = 0;
    }
    tdee = tmb * fatorAtividade

    document.getElementById("ResultadoTDEE").innerText = "TDEE: " + " → " + tdee + " calorias";

}