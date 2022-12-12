const button = document.querySelector(".advice-update")
const adviceDescription = document.querySelector(".advice-text")
const adviceNumber = document.querySelector('.number')
async function pegarFrases(){
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    return await resposta.json()
}

async function pegarUmaFrase(slip_id){
    const url = `https://api.adviceslip.com/advice/${slip_id}`
    const resposta = await fetch(url)
    return await resposta.json()
}

async function pegarUmaFraseAleatoria(){
    const frases = await pegarFrases()
    const frase = await pegarUmaFrase(frases.slip.id)
    const adviceNumberJS = frase.slip.id
    const fraseAleatoria = frase.slip.advice

    adviceNumber.innerHTML = adviceNumberJS
    adviceDescription.innerHTML = fraseAleatoria;
    
}

button.addEventListener("click", ()=> pegarUmaFraseAleatoria())