// Prototypes

// Construora -> molde (classe)
function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + '' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome
}

// instância
const Pessoa1 = new Pessoa('Luiz', "R."); // <- Pessoa = Função construtora
const Pessoa2 = new Pessoa('Rafael', "R."); // <- Pessoa = Função construtora

console.dir(Pessoa1);
console.dir(Pessoa2);