// getDay retorna um número entre 0 (domingo) e 6 (sábado).
const data = new Date();
const diaSemana = data.getDay()

switch (diaSemana) {
    case 1:
        
        break;

    default:
        break;
}

// Alternativa completa: usar o número como índice de um array.
const nomesDosDias = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
console.log(nomesDosDias[diaSemana]);
