//A lógica do efeito consiste em cada letra ser adiconada após a outra

function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach( function(letra, i) {
        setTimeout(function() {
            elemento.innerHTML += letra;
        }, 90 * i)
    })

    };


let frase = document.querySelector('h4');
typeWrite(frase);
