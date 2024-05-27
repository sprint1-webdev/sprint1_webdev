// ALTERNANDO AS CORES DO BACKGROUND DA PÁGINA

// Declarando as variáveis
let body = document.querySelector('body');
let classCores = ['cor1', 'cor2', 'cor3'];
let indexCor = 0;
let timeCor = 3000;

function alternarCores() {
    body.setAttribute('class', `${classCores[indexCor]}`);
    indexCor++;

    if (indexCor == classCores.length) {
        indexCor = 0;
    }
    setTimeout('alternarCores()', timeCor);
}
alternarCores();

// CRIANDO UM SLIDESHOW AUTOMÁTICO

// Declarando as variáveis
let imagens = [ './img/logomahindra.png','./img/carromahindra.jpg', './img/carromahindra2.jpg', './img/carromahindra3.jpg',];
let index = 0;
let time = 3000;

// Criando a função do slideshow
function slideShow() {
    document.getElementById('imgbanner').src=imagens[index];
    index++;

    if (index == imagens.length) {
        index = 0;
    }
    setTimeout('slideShow()', time);
}