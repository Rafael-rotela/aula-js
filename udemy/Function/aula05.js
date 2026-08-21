// Closures

/*Uma closure (fechamento) em JavaScript é a combinação de uma função com o seu escopo léxico. Na prática, é quando uma função interna se lembra e consegue acessar as variáveis de uma função externa, mesmo depois que a função de fora já terminou de rodar.*/

function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao("Rafael");
const funcao = retornaFuncao("Luiz");
