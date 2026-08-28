// Closure é a combinação de uma função com o escopo em que ela foi criada.
// Por isso, a função interna continua acessando `nome` mesmo depois que
// `retornaFuncao` termina sua execução.

function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const falaRafael = retornaFuncao("Rafael");
const falaLuiz = retornaFuncao("Luiz");

console.log(falaRafael());
console.log(falaLuiz());
