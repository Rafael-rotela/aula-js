
// `for...in` retorna índices/chaves; `for...of` retorna os próprios valores.
const frutas = ['banana','maça','pessego']
// For clássico: oferece controle explícito sobre início, condição e incremento.
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
    // resposta = banana , maça , pessego

}
console.log('#######')

// Ideal quando precisamos apenas dos valores de um iterável.
for(let valor of frutas){
    console.log(valor);
    // resposta = banana , maça , pessego
}

console.log('#######')

for(let indice in frutas){
    console.log(indice);
    // resposta  =  0  1  2
}

console.log('#######')

// `forEach` recebe valor, índice e o array completo em seu callback.
frutas.forEach(function(valor, indice, array){
    console.log(valor, indice, array)
})



const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Rotela'
}

// para lidar com objetos o for comum nao seria util, maneira a baixo de se fazer com for in

for(let chave in pessoa){
    console.log(chave)
// retorno = nome, sobrenome
// for in foi feito para percorrer as chaves
}

/* Resumo */

// For clássico - Geralmente com interáveis (array ou stings)
// for in - Retorna o índice ou chave (string, array ou objeto)
// for of - Retorna o valor em si (iteráveis, array ou string)
