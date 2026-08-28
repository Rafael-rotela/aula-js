//               0        1       2
// const nome = ['Rafael','Luana','Joana'];
// const novo = nome.slice(1,-1);
// console.log(nome)

// const nome = 'Matteus Orlando miranda';
// const novo = nome.split(' ');
const nome = ['Matteus', 'Orlando', 'Miranda', 'Gustavo', 'Rafael', 'Carlos', 'Bruno'];
// const nomes = nome.join(' ');
                        //  posiçao,  remove,  adiciona
const removidos = nome.splice( 1,       0,     'Rafael');
console.log(nome, removidos);
