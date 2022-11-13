document
    .querySelector(".btn-trocar-cor")
    .addEventListener("click", trocarCor);

let quadradoAzul = document.querySelector(".azul");
let quadradoAmarelo = document.querySelector(".amarelo")

function trocarCor() {
    quadradoAzul.classList.remove("azul")
    quadradoAzul.classList.add("amarelo")
}

