// Sintaxe: condição ? valorSeVerdadeiro : valorSeFalso.

const pontuacao = 5100;
const nivelUsuario = pontuacao >= 1000 ? 'Usuário VIP' : 'Usuário normal';
const corUsuario = null
console.log(nivelUsuario);

// `??` usa o valor à direita apenas quando o da esquerda é null ou undefined.
const corPadrao = corUsuario ?? 'preto';
console.log(corPadrao);
