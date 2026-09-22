// Herança

// Produto -> aumento,desconto
function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia
};

function Camiseta(nome,preco,cor){
    Produto.call(this, nome, preco)
}

const camiseta = new Camiseta('Regata',7.7,'Amarelo');