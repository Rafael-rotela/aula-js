// reduce

// Some
// Retorne um array com os pares (Filter)
// Retorne  um array com o dobro dos valores(Map)

const numeros = [1,4,22,3,57,33,12,56,8,64];

                                //          novo                                   ex:0
// const total = numeros.reduce(function(acumulador, valor, indice, array){}  "valor inicial");
const total = numeros.reduce(function(acumulador, valor, indice, array){
   if (valor % 2 === 0) acumulador.push(valor);
   return acumulador;
}, []);
const teste = numeros.filter((valor)=> valor % 8 === 0)
const teste02 = numeros.map((valor) => valor * 2 )
console.log(teste02)


// Retorne a pessoa mais velha
const Pessoa = [
    { nome: "Luiz",   idade: 60},
    { nome: "Rafael", idade: 30},
    { nome: "Camila", idade: 35},
    { nome: "Felipy", idade: 27},
    { nome: "Marlene",idade: 100},
]

const maisVelhas = Pessoa.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
})

console.log(maisVelhas);
