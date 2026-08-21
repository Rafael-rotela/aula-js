// Escopo Léxico

const nome = 'Rafael';

function falaNome(){
    const nome = 'luiz'
    console.log(nome);
}
function useFalaNome(){
    // const nome = "batata"  // a funcao lembra aonde ela foi declarada entao portanto caso tente entrar na variavel nome que foi declarada nesse escopo, a funcao falaNome nao vai lembrar.
    falaNome()
}
useFalaNome();