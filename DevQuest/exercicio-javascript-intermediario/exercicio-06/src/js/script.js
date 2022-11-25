const conteudo = document.querySelectorAll(".conteudo")
const textoConteudo = document.querySelectorAll(".texto-conteudo")

const conteudoCont = 0;
const textoCont = 0


conteudo.forEach(function (item){
    item.addEventListener("click", function(){
        item.classList.add("ativo")
    })
})

