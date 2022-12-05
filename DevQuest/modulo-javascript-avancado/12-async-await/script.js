let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true

let ferverAgua = function(chaleiraEstaNoFogao,fogaoEstaLigado){
    return new Promise((resolve,reject)=>{
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('Passo 1 finalizado: Água foi fervida')
            resolve()
        } else {
            console.log('É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água')
            reject()
        }
    })
}

let passarOCafe = (aguaFervida) => {
    return new Promise((resolve) => {
        console.log('Passo 2 finalizado: Café foi passado')
        resolve(true)
    })
}

let tomarCafe = (cafePassado) => {
    return new Promise((resolve)=>{
        console.log('Passo 3 finalizado: Terminei de tomar o café')
        resolve(true)
    })
}

let lavarXicara = (cafeTomado) =>{
    return new Promise((resolve)=>{
        console.log('Passo 4 finalizado: Terminei de lavar a xícara')
        resolve(true)
    })
}

async function iniciarProcessoDeFazerCade(){
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    const cafePassado = await passarOCafe(aguaFervida)
    const cafeTomado = await tomarCafe(cafePassado)
    const xicaraLavada = await lavarXicara(cafeTomado)
    if(xicaraLavada) console.log('Finalizado o ritual de tomar o café, bora trabalhar')
}

iniciarProcessoDeFazerCade()