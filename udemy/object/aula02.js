// Prototypes permitem compartilhar métodos entre todas as instâncias.
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

// O método fica no prototype, em vez de ser recriado para cada pessoa.
Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

const pessoa = new Pessoa("Rafael", "Rotela");

console.log(pessoa.nomeCompleto());
console.log(pessoa.__proto__ === Pessoa.prototype); // true
