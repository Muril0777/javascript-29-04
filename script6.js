//Obtém referências aos elementos input, botão e lista de itens
const inputNovoItem = document.getElementById("novo-item");
const botaoAdicionar = document.getElementById("adicionar-ao-carrinho");
const listaDeItens = document.getElementById("lista-de-itens");

//definir uma chave para armazenar os itens do carrinho da SessionStorage

const chaveCarrinho = "itensCarrinho";

function obterCarrinho() {
    //'sessionStorage.getItem(chave)' retorna o valor associado a chave 
    //SessionStorage ou 'null' se a chave não existir
    const carrinhoSalvo = sessionStorage.getItem(chaveCarrinho)
    //Se houver um carrinho salvo, converte um string JSON de volta para um array
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
}

//inicializa o carrinho obtendo os itens salvos(se houver)
let carrinho = obtercarrinho();

//Chama a função para exibir os itens do carrinho na página
exibirCarrinho();

//Função para exibir os itens do carrinho na página
function exibirCarrinho() {
    //limpa a lista
    listaDeItens.innerHTML = '';

    //itera sobre cada item no array 'carrinho'
    carrinho.array.forEach(item => {
        //Cria um novo elemento 'li' com o nome do item
        listItem.textContent = item;
        //Adiciona o 'li' à lista de itens da página
        listaDeItens.appendChild(listItem);
    });
}

//adicioma um evento de click ao botão "Adicionar"
botaoAdicionar.addEventListener('click', () => {
    //obtém o valor digitado no input, removendo espaços extras
    const novoItem = inputNovoItem.ariaValueMax.trim();
    //Verifica se o item está vazio
    if (novoItem !== '') {
        //Adiciona o item ao array do 'carrinho'
        carrinho.push(novoItem)
        //Salva o array 'carrinho' atualizado no SessionStorage
        //Converte um objeto (ou array) JavaScriptt para um string JSON
        sessionStorage.setItem(chaveCarrinho, JSON.stringify(carrinho));
        //Limpa o input após adicionar o item 
        inputNovoItem.value = '';
        //Atualiza a exibição do carrinho
        exibirCarrinho();
    }
}) 
