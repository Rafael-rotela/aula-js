// Funções geradoras pausam em cada `yield` e retomam na chamada seguinte.

function* geradora1(){
    // Código qualquer....
    yield 'valor 1';
    // Código qualquer....
    yield 'valor 2';
    // Código qualquer....
    yield 'valor 3';
}

function* geradora2(){
    let i = 0;

    // Esta geradora é infinita; quem a consome decide quando parar.
    while (true) {
        yield i;
        i++;
    }
}

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

const valores = geradora1();
console.log(valores.next()); // { value: 'valor 1', done: false }
console.log(valores.next()); // { value: 'valor 2', done: false }
console.log(valores.next()); // { value: 'valor 3', done: false }
console.log(valores.next()); // { value: undefined, done: true }
