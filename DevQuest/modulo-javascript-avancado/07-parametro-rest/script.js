//Esqueleto de como usar o REST
//fuction(a,b, ...args){
//  ...   
//}

function incentivarQuesters(mensagem, ...nomesQuesters){
    nomesQuesters.map(nomesQuesters => console.log(`${mensagem} ${nomesQuesters}`))
}

incentivarQuesters('Parabéns por ter chego ao módulo de javascript avançado', 'Joao', 'Pedro', 'Bruno')