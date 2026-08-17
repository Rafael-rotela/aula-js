// Escreva uma função que recebe um número e
// retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número
// Use a função com números de 0 a 100


// A ordem dos testes importa: primeiro verificamos a regra mais específica.
function fizzBuzz(numero){
    if(typeof numero !== 'number' || Number.isNaN(numero)) return 'Não é um número';
    if(numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if(numero % 3 === 0) return 'Fizz';
    if(numero % 5 === 0) return 'Buzz';
    return numero;
}

// Testa automaticamente todos os valores pedidos pelo exercício.
for(let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}

// Alternativa: ser divisível por 3 e 5 equivale a ser divisível por 15.
function fizzBuzzAlternativo(numero) {
    if (!Number.isFinite(numero)) return 'Não é um número';
    if (numero % 15 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

console.log('Alternativa:', fizzBuzzAlternativo(15));
