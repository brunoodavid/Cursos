/*

const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir){
    const mesAtual = 11
    let AnoDeNascimento = 2022 - idade
    if(mesDeNascimento > mesAtual) AnoDeNascimento--
    imprimir(AnoDeNascimento)
}

let imprimirAnoDeNascimento = AnoDeNascimento => {
    console.log('Seu ano de nascimento é: ' + AnoDeNascimento)
}

calcularAnoDeNascimento(26, 7, imprimirAnoDeNascimento) 

*/

function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadriplicar = multiplicar(4)

console.log(dobrar(4))
console.log(triplicar(3))
console.log(quadriplicar(3))