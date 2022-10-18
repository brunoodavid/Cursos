/*

//Array dentro de array
let lista = ['Bruno' ,['David', 'Thome']]
//pegando o david dentro do array lista
console.log(lista[1][0])

*/

/*

//Operações básicas de array
let ingredientes = ['agua', 'farinha', 'ovo', 'corante', 'sal'];

//adiciona um item no array de ingredientes
ingredientes.push('açucar');

//remove o último item do array
ingredientes.pop();

//remove o primeiro item do array
ingredientes.shift();

console.log(ingredientes);

//Diz quantos itens tem dentro do array
console.log(`Total de ingredientes: ${ingredientes.length}`);


//Exercícios de Array
//1 - No array abaixo, qual o número que pega a Ferrari?
let carros = ['BMW', 'Ferrari', 'Mercedes'];
console.log('1 - ' + carros[1]);

//2 - Troque a Ferrari por Audi
console.log('2 - Lista com Audi: ');
carros[1] = 'Audi';
console.log(carros);

//3 - Adicione o Volvo a lista
console.log('3 - Lista com Volvo: ');
carros.push('Volvo');
console.log(carros);

//4 - Exiba quantos itens tem no array
console.log('4 - Itens no array: ');
console.log(carros.length);


// --- funções de array ---
let fruits = ['Maça', 'Uva', 'Laranja', 'Banana'];

//função join - Acrescenta um caracter como separador dentro do array, por exemplo:
console.log(fruits.join(', '));

//função sort - Altera a ordem do array e os coloca em ordem alfabética
fruits.sort();

//funçao reverse - Inverte a ordem do array
fruits.reverse();



// Ordenação de array

let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'BMW', year: 2018},
    {brand: 'Ferrari', year: 2020}
]
//Aqui vai acontecer um cálculo que quando o número for negativo o item anda para trás, quando
//o cálculo resultar em 0, o item continua no mesmo lugar, e quando o cálculo der positivo, ele anda para frente
cars.sort((a, b) => a.year - b.year);
console.log(cars)

*/

// iteração de array
let fruits = ['Banana', 'Laranja', 'Maça', 'Pêra', 'Uva'];

//realiza a pesquisa da palavra uva dentro do array fruits
if (fruits.includes('Uva')){
    console.log('Tem uva sim! ');
} else {
    console.log('Não tem uva! ');
}