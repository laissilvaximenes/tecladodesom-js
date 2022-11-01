
// Funções
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play()  
}


// Variáveis e Constantes

const listaDeTeclas = document.querySelectorAll('.tecla');

// Laço de repetição

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocaSom(idAudio);
    }

}

