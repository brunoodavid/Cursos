// function azul(){
//     limpar();
//     document.getElementById("titulo").classList.add('azul');
// }

// function vermelho(){
//     limpar();
//     document.getElementById("titulo").classList.add('vermelho');
// }

// function verde(){
//     limpar();
//     document.getElementById("titulo").classList.add('verde');
// }

// function limpar(){
//     document.getElementById("titulo").classList.remove('azul');
//     document.getElementById("titulo").classList.remove('vermelho');
//     document.getElementById("titulo").classList.remove('verde');
// }

// let btnAzul = document.querySelector(".btnAzul");
// btnAzul.addEventListener('click', () => azul());

// let btnVermelho = document.querySelector(".btnVermelho");
// btnVermelho.addEventListener('click',() => vermelho());

// let btnVerde = document.querySelector(".btnVerde");
// btnVerde.addEventListener('click', () => verde());

/*
function mostrarTelefone(elemento){
    elemento.style.display = "none";
    document.getElementById("telefone").style.display = "block";
}
*/


function mudarCor(){
    let titulo = document.querySelector("#titulo");
    if(titulo.classList.contains('preto')){
        titulo.classList.remove('preto');
        titulo.classList.add('azul');
    } else {
        titulo.classList.remove('azul');
        titulo.classList.add('preto');
    }
} 
let btnMudarCor = document.querySelector("#mudarCor");
btnMudarCor.addEventListener('click', mudarCor);
