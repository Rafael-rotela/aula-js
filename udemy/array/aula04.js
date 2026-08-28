// `map` sempre devolve um array com o mesmo tamanho do original.

const numeros = [1,4,22,3,57,33,12,56,8,64];

// Dobrar os números      mesma coisa que o filter
const exemplo = numeros.map((valor,indici,array) => {});

const numerosEmDobro = numeros.map((valor) => valor * 2);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adiciona uma chave id em cada objeto

const Pessoa = [
    { nome: "Luiz",   idade: 60},
    { nome: "Rafael", idade: 30},
    { nome: "Camila", idade: 35},
    { nome: "Felipy", idade: 27},
    { nome: "Marlene",idade: 100},
]

const nome = Pessoa.map( (valor) => valor.nome)
const remova = Pessoa.map( (valor) =>{
    return {
        idade: valor.idade
    };
} )
const pessoaId = Pessoa.map((obj,id) => {
    // obj.id = id // referencia o objeto inicial, valor com referencia.
    const newObjeto = {...obj} // utiizou o spread para criar um novo objeto
    newObjeto.id = id
    return newObjeto
})

console.log(pessoaId)
