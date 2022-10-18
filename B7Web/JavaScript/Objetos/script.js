/*

//criando objeto
let personagem = { 
    nome: 'Bruno',
    idade: 26,
    pais: 'Brasil',
    olhos: ['preto', 'azul'],
    caracteristicas: {
        forca: 20,
        magia: 5,
        stamina: 15
    }
}

//acessando itens do objeto
console.log(`${personagem.nome} tem ${personagem.idade} anos.`);
console.log(personagem.caracteristicas.magia)

//acessando e alterando objetos
personagem.nome = 'Pedro';
personagem.caracteristicas.forca += 5;
console.log(`Força = ${personagem.caracteristicas.forca}`);

personagem.olhos.push('verde');
console.log(personagem.olhos);

*/

/* 


//objeto com array de objetos
let personagem = {
    nome: 'Bruno',
    idade: 26,
    carros: [
        { modelo: 'Fiat', cor: 'preto' },
        { modelo: 'Ferrari', cor: 'vermelho' }
    ]
}

*/

//acessando objetos dentro de um array
console.log(personagem.carros[1].modelo);

//Função dentro de objeto 
let pessoa = {
    nome: 'Bruno',
    sobrenome: 'Hoffmann',
    idade: 26,
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(pessoa.nomeCompleto());