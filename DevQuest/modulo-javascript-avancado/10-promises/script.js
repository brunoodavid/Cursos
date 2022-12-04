// Corpo da promise
// new Promise((resolve, reject)=>{
//    
//})

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = false;

let ferverAgua = function(chaleiraEstaNoFogao,fogaoEstaLigado){
    return new Promise((resolve,reject)=>{
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('Começando o processo de ferver água')
            resolve()
        } else {
            console.log('É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água')
            reject()
        }
    })
}

ferverAgua(chaleiraEstaNoFogao,fogaoEstaLigado)
console.log('fazendo o café')
