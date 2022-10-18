//eventos de click
function clicou(){
    console.log("Clicou no botão");
}

let botao = document.querySelector('.botao');
botao.addEventListener("click", clicou);
//evento do mouse estar em cima de algum caracter
botao.addEventListener("mouseover");
//evento de mouse sair de cima de algum caracter
botao.addEventListener("mouseout");


//eventos de teclados
document.addEventListener('keypress');
document.addEventListener('keyup');
document.addEventListener('keydown')

