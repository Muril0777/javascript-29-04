//existem duas formas de criar um array em JavaScript
const frutas = ['maçã', 'maracuja', 'banana'];
const numeros = [10, 20, 30, 40];

const cores = new Array('vermelho', 'preto', 'branco')

const linguagens = ['javascript', 'python', 'java', 'c#'];

//acessando o primeiro elemento do meu vetor

const primeiraLinguagem = linguagens[0];
console.log(`A primeira linguagem é: ${primeiraLinguagem}`);

const ultimoElemento = linguagens[linguagens.length - 1]; //exibindo o ultimo elemento (se for exibido sem o '-1', dará erro, pq a contagem dos elementos começa no 0, e mostraria o numero 4)
console.log(`A ultima linguagem é: ${ultimoElemento}`); //printando a mensagem

let coresMutaveis = ['branco', 'preto', 'cinza']; //definindo uma variavel
coresMutaveis[1] = 'azul'; //trocando o 'preto' pelo 'azul'

let planetas = ['Terra', 'Marte'];
console.log(`Array inicial dos planetas: ${planetas}`);
//push()--> adiciona um ou mais elementos ao final do array e retorna o novo comprimento
const novoComprimentoPush = planetas.push('Saturno', 'Urano');
console.log(`Exibindo novos elementos do array planetas: ${planetas}`);

//pop()--> remove o último elemento do array e retorna esse elemento
const ultimoElementoRemovido = planetas.pop();
console.log(`Exibindo os elementos, já com o último elemento removido: ${ultimoElementoRemovido}`);

//unshift()--> adiciona um ou mais elementos ao início do array.
planetas.unshift('Mercúrio');
console.log(`Array após o 'unshift': ${planetas}`);

//shift()--> remove o primeiro elemento do array.
const primeiroPlanetaRemovido = planetas.shift();
console.log(`Array após o 'shift': ${primeiroPlanetaRemovido}`);

//indexOf() --> retorna o primeiro índice em que um elemento pode ser encontradio no array e -1 se não estiver
const indiceTerra = planetas.indexOf('Terra');
console.log(`Array após o 'indexOf': ${indiceTerra}`);

//join()--> cria e retorna uma nova string concatenando todos os elementos do array
const stringPlanetaHifen = planetas.join('-')
console.log(`Array após o 'join': ${stringPlanetaHifen}`);
const coresIteracao = ['vermelho', 'amarelo', 'rosa'];
console.log('\n--Iterando com laço for--')
for (let i = 0; i < coresIteracao.length; i++) {
    console.log(`Cor no índice ${i}: ${coresIteracao[i]}`);
}

console.log('\n--Iterando com laço for...of--')
for (const cor of coresIteracao) {
    //consto co: em cada iteração, 'cor' recebe o valor do elemento atual do array
    console.log(`Cor: ${cor}`);
}

console.log('\n--Iterando com laço forEach()--')

//método forEach() --> executa uma função para cada elemento do array

coresIteracao.forEach(function (cor, indice) {
    console.log(`Cor: ${cor} no índice: ${indice}`);
});