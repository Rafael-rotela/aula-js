// filter -> sempre vai retornar um array, com a mesma quantidade ou menos.

// Retorne os números maiores que 10
const numeros = [12,2,31,1235,323,6,42,1,2,456];

const numerosFiltrado = numeros.filter(function(valor){
    return valor > 10;
});
// console.log(numerosFiltrado);

// Retorne as pessoas que têm o nome com 5 letras ou mais.
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com "a"

const Pessoa = [
    { nome: "Luiz",   idade: 60},
    { nome: "Rafael", idade: 30},
    { nome: "Camila", idade: 35},
    { nome: "Felipy", idade: 27},
]

const atividade01 = Pessoa.filter(valor =>  valor.nome.length > 5);
const atividade02 = Pessoa.filter(valor =>  valor.idade > 50);
const atividade03 = Pessoa.filter(valor =>  valor.nome.toLowerCase().endsWith('a'));
console.log(atividade03);
