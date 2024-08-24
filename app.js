let textoCriptografado;
let textoDescriptografado;

function criptografarTexto(){
    let campoTextoEntrada = document.getElementById("textoEntrada").value;

    if (!/^[a-z\s]*$/.test(campoTextoEntrada)) {
        alert("Uh-oh! Apenas letras minúsculas e sem acento.");
        return;
    }

    textoCriptografado = campoTextoEntrada
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    let campoTextoSaida = document.getElementById("textoSaida");
    campoTextoSaida.innerHTML = textoCriptografado;
}

function descriptografarTexto(){
    let campoTextoEntrada = document.getElementById("textoEntrada").value;

    if (!/^[a-z\s]*$/.test(campoTextoEntrada)) {
        alert("Uh-oh! Apenas letras minúsculas e sem acento.");
        return;
    }

    textoDescriptografado = campoTextoEntrada
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    let campoTextoSaida = document.getElementById("textoSaida");
    campoTextoSaida.innerHTML = textoDescriptografado;
}
