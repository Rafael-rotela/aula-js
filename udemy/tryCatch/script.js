// Retorna uma hora formatada; sem argumento, usa a data atual.
function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError("Esperando uma instância de Date.");
    }


    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

const hora  = retornaHora();
console.log(hora);





function soma(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new TypeError('x e y precisam ser números');
    }

    return x + y;
}

// `try` executa o teste; `catch` recebe qualquer erro lançado dentro dele.
try{
    console.log(soma(1,2));
    console.log(soma('1',2));
} catch(error) {
    console.error(error.message);
}
