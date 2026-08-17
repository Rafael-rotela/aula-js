const numeros = [1,2,3,4,5,6,7,8,9];

// `for...of` percorre os valores do array, um de cada vez.
for(let numero of numeros) {
    if (numero === 2 ) {
        continue; // Ignora o restante desta volta e começa a próxima.
    }

    if(numero === 7){
        break; // Encerra completamente o laço quando encontra 7.
    }
    console.log(numero)
}

