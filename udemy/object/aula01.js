// Objetos agrupam dados em pares de chave e valor.

//  '' `` ""  string literal
// []         array literal
// 12345      number literal
// function() função literal
// {}         objeto literal

// Objetos podem ser criados por funções construtoras, factories ou classes.
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // congela o this
    Object.freeze(this);
    // O retorno de `this` é feito automaticamente por `new`.
}
// `new` cria um objeto, associa `this` a ele e devolve a instância.
const p1 = new Pessoa('Rafael', 'Rotela');

// p1 = (ENDERECOMEMORIA) -> 'Valor'
const p2 = new Pessoa('Rafael', 'Rotela');
console.log(p1);
// construtor do objeto = Pessoa
// Pessoa { nome: 'Rafael', sobrenome: 'Rotela' }

// Uma factory function devolve um objeto sem precisar de `new`.
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
































const pessoa = {
//  chave : valor
    nome: 'Rafael',
    sobrenome: 'Rotela',
};
const chave = 'sobrenome';
console.log(pessoa[chave]); // A notação de colchetes aceita uma chave variável.
// console.log(pessoa.nome);
// console.log(pessoa[chave])

const pessoa1 = new Object();
pessoa1.nome = 'Rafael';
pessoa1.sobrenome = 'Marcio';
pessoa1.idade = 20;
pessoa1.falarNome = function() {
    console.log(`${this.nome} está falando seu nome.`);
};
pessoa1.getAnoNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

// `for...in` percorre as chaves enumeráveis do objeto.
for (const chavePessoa in pessoa1) {
    console.log(chavePessoa);
}

console.log(p2);
console.log(criaPessoa('Rafael', 'Rotela').nomeCompleto);
console.log(pessoa1.getAnoNascimento());
