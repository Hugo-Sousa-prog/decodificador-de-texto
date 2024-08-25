document.addEventListener('DOMContentLoaded', function() {
    let textoCriptografado;
    let textoDescriptografado;

    function botaoVisivel(){
        const botaoCopiar = document.getElementById("botaoCopiar");
        const mensagemNenhumTexto = document.getElementById("mensagemNenhumTexto");
        const campotextoSaidaResultado = document.getElementById("textoSaidaResultado");
        
        if (botaoCopiar && mensagemNenhumTexto && campotextoSaidaResultado) {
            botaoCopiar.style.display = "block";
            mensagemNenhumTexto.style.display = "none";
            campotextoSaidaResultado.style.display = "block";
        } else {
            console.error("Um ou mais elementos necessários não foram encontrados.");
        }
    }

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

        let campotextoSaidaResultado = document.getElementById("textoSaidaResultado");
        campotextoSaidaResultado.value = textoCriptografado;

        botaoVisivel();
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

        let campotextoSaidaResultado = document.getElementById("textoSaidaResultado");
        campotextoSaidaResultado.value = textoDescriptografado;

        botaoVisivel();
    }

    function copiarTexto(){
        let campotextoSaidaResultado = document.getElementById("textoSaidaResultado").value;

        navigator.clipboard.writeText(campotextoSaidaResultado)
        .then(() => {
            console.log("Texto copiado com sucesso!");
        })
        .catch(err => {
            console.error("Erro ao copiar o texto: ", err);
            alert("Falha ao copiar o texto.");
        });
    }

    window.criptografarTexto = criptografarTexto;
    window.descriptografarTexto = descriptografarTexto;
    window.copiarTexto = copiarTexto;
});
