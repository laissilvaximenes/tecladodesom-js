
// Funções
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play()  
}


// Variáveis e Constantes

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

// Laço de repetição

while ( contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    contador = contador + 1;
}

