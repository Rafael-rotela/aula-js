// argumentos que sustenta todos os argumentos enviados

function funcao({nome, sobrenome, idade}) {
    console.log(nome,sobrenome,idade);
}

funcao({nome: 'Luiz', sobrenome: 'Otávio', idade: 20})

function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
    
}

conta('+', 0, 20,30,40,50);