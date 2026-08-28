// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzirr (somar tudo)

const numeros = [5,3,2,14,32,6,23,64];
const numerosPares = numeros.filter(valor => valor % 2 === 0)
                            .map(valor => valor * 2)
                            .reduce((acumulador, valor) => acumulador + valor)

// [ 2, 14, 32, 6, 64 ] pares
// [ 4, 28, 64, 12, 128 ] dobro

console.log(numerosPares)