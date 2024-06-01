function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura)) {
        alert("Error: Ingrese valores numéricos válidos para peso y altura.");
        return;
    }

    const alturaEnMetros = altura / 100;
    const imc = peso / (alturaEnMetros * alturaEnMetros);

    document.getElementById('imc').textContent = imc.toFixed(2);

    const clasificacion = clasificarIMC(imc);
    document.getElementById('clasificacion').textContent = clasificacion;
}

function clasificarIMC(imc) {
    if (imc < 18.5) {
        return "Bajo peso";
    } else if (imc < 25) {
        return "Peso normal";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}
