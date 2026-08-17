// && (E): todas as condições precisam ser verdadeiras.
const temIdadeMinima = true;
const temDocumento = true;
console.log(temIdadeMinima && temDocumento);

// || (OU): basta uma das condições ser verdadeira.
const pagamentoCartao = false;
const pagamentoPix = true;
console.log(pagamentoCartao || pagamentoPix);

// ! (NÃO): inverte um valor booleano.
console.log(!temDocumento);

// Alternativa comum: `??` escolhe um padrão somente para null ou undefined.
const nomeInformado = null;
console.log(nomeInformado ?? 'Visitante');
