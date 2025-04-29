for(let i=0;i<5;i++){
    console.log(`Interação número: ${i}`);//shift + crase para a função
}
let contador = -3;
while(contador < 3){
    console.log(`Interação número: ${contador}`);//shift + crase para a função
    contador ++;
}

const pessoa = {
    nome: "Maria",
    idade: 30,
    cidade: "São Paulo"
};

for(const propriedade in pessoa){
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
}

const cores = ['vermelho', 'verde', 'azul'];
for(const cor of cores){
    console.log(cor)
}

const mensagem ='Olá';
for(const letra of mensagem){
    console.log(letra);
}

const carro = {
    marca: 'Mercedes',
    modelo:'Logan',
    ano: '2013',
    cor: 'Preto',
    ligar: function(){
        console.log('O carro está ligado.');
        exibirMensagemNoNavegador('O carro está ligado.');
    },
    obterDetalhes: function(){
        return `${this.marca} ${this.modelo} (${this.ano})`;
    }
};

console.log('---Objeto Literal---')
console.log(`Marca: ${carro.marca}`); //acessando a propriedade 'marca'
console.log(`Modelo: ${carro['modelo']}`);//acessando a propriedade 'modelo'
carro.ligar(); //chamando o metodo ligar
const detalhesCarro = carro.obterDetalhes();
console.log(`Detalhes do carro: ${detalhesCarro}`);
exibirMensagemNoNavegador (`Detalhes do carro: ${detalhesCarro}`);

//Outra forma d exibir um objeto (converte um objeto para uma string JSON)
const carroJSON = JSON.stringify(carro);
console.log(`Objeto CARRO como JSON: ${carroJSON}`);
exibirMensagemNoNavegador (`Objeto CARRO como JSON: ${carroJSON}`)

//Funções construtoras
//Uma função construtora é usada para criar multiplos objetos com a mesma estrutura
//Usamos a palavra chave 'new' para invocar um construtor
function Pessoa (nome, idade,profissao){
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
    this.saudar = function(){
        console.log(`Olá, meu nome é ${this.nome} e eu sou ${this.profissao} tenho ${this.idade} anos.`)
    }
}
//Criando instâncias (objetos) da função construtora 'Pessoa' usando o 'new'
const pessoa1 = new Pessoa('Carlos',30,'Engenheiro');
const pessoa2 = new Pessoa('Maria',27,'Médica');
console.log('---Funções Construtoras---')
console.log(`Nome da pessoa 1: ${pessoa1.nome}`);
pessoa1.saudar();
console.log(`Nome da pessoa 2: ${pessoa2.nome}`);
pessoa2.saudar();

//Função auxiliar para exibir mensagens no navegador
function exibirMensagemNoNavegador(mensagem){
    const paragrafo = document.createElement(`p`); //cria um elemento 'p'
    paragrafo.textContent = mensagem;//define o texto do parágrafo com a mensagem
    resultadoDiv.appendChild(paragrafo);//adiciona o paragrafo ao elemento'resultado' no HTML
}