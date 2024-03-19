const textoEntrada = document.querySelector('.textoEntrada');
const textoSaida = document.querySelector('.textoSaida');
let matrizCriptografia = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufa"]];

function botaoEncriptar() {
    const resultadoCriptografado = criptografia(textoEntrada.value.toLowerCase());
    textoSaida.value = resultadoCriptografado;
}

function botaoDescriptografar() {
    const resultadoTraduzido = descriptografia(textoEntrada.value.toLowerCase());
    textoSaida.value = resultadoTraduzido;
}

function criptografia(textoCriptografar) {
    for(let i = 0; i < matrizCriptografia.length; i++) {
        if(textoCriptografar.includes(matrizCriptografia[i][0])) {
            textoCriptografar = textoCriptografar.replaceAll(matrizCriptografia[i][0], matrizCriptografia[i][1])
        }
    }
    if (textoCriptografar !== "") {
        document.querySelector('.mensagem').style.display = 'none';
        document.querySelector('.textoSaida').style.display = 'block';
        document.querySelector('.botaoCopiar').style.display = 'block';
    }
    return textoCriptografar;
}

function descriptografia(textoDescriptografar) {
    for(let i = 0; i < matrizCriptografia.length; i++) {
        if(textoDescriptografar.includes(matrizCriptografia[i][1])) {
            textoDescriptografar = textoDescriptografar.replaceAll(matrizCriptografia[i][1], matrizCriptografia[i][0])
        }
    }
    if (textoDescriptografar !== "") {
        document.querySelector('.mensagem').style.display = 'none';
        document.querySelector('.textoSaida').style.display = 'block';
        document.querySelector('.botaoCopiar').style.display = 'block';
    }
    return textoDescriptografar;
}

function copiar() {
    let textoCopiado = document.querySelector('.textoSaida');
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textoCopiado.value);
}