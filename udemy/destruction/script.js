// // Desestruturação retira valores de arrays ou propriedades de objetos.
// // Este bloco cria um escopo isolado para o primeiro exemplo.
// {
// const numeros = [ 10000, 22222, 30000, 40000, 5000, 6000, 7000, 8000];
// const [um, , tres, , cinco, , sete] = numeros;
// console.log(um,tres,cinco);
// }

// //                    0      1       2    
// //                 0 1 2   0 1 2   0 1 2
// {
// const numeros = [[1,2,3],[4,5,6],[7,8,9]];
// // As vírgulas vazias pulam posições; aqui obtemos o número 6.
// const [, [, ,seis]] = numeros;
// console.log(seis);
// }

// // Atribuição via desestruturação(Objetos)

const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Rotela',
    idade: 20,
    endereco: {
        rua: 'Av Brasil',
        numero: 203
    }
}
// const {endereco: {rua, numero}, endereco} = pessoa;
// console.log(rua,numero, endereco);



// // Alternativa: extrai propriedades que estão no primeiro nível.
// const { nome, sobrenome, idade } = pessoa;
// console.log(nome, sobrenome, idade);


const {nome:apelido, sobrenome:posnome, idade: ano} = pessoa;
console.log(apelido,posnome,ano);

