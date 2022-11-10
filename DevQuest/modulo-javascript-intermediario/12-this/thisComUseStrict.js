'use strict'

// console.log(this)
// console.log(window)
// console.log(window === this)

// this.name = 'Bruno'

// function saudar(){
//     console.log('this no contexto da função', this)
//     console.log('Olá, ' + this.name)
// }

// saudar()

// let usuario = {
//     nome: 'Bruno',
//     saudar: function () {
//         console.log('This no contexto do metodo', this)
//         console.log('This.nome no contexto do metodo', this.nome)
//     }
// }

// usuario.saudar()


let comida = {
    nome: 'Brócolis',
    temperatura: 0
}

comida.cozinhar = function(temperaturaDeCozimento) {
    this.temperatura = temperaturaDeCozimento
}

console.log(comida)

comida.cozinhar(100)

console.log(comida)