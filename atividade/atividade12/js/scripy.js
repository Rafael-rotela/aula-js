
let cpf = "705.484.450-52";
let cpfLimpo = cpf.replace(/\D+/g, "");
let cpfArray = Array.from(cpfLimpo);
let cpfCopia02 = cpfArray.slice(0, 9);

const num01 = cpfCopia02
  .map((value, index) => {
    const numero = Number(value);
    const multiplicador = 10 - index;

    return numero * multiplicador;
  })
  .reduce((acumulador, valor) => acumulador + valor, 0);

let primeiroNumero = 11 - (num01 % 11);

if (primeiroNumero > 9) {
  primeiroNumero = 0;
}

cpfCopia02.push(primeiroNumero);

const num02 = cpfCopia02.reduce((acumulador, value, index) => {
  const numero = Number(value);
  const multiplicador = 11 - index;
console.log(acumulador,value,index)
  return acumulador + numero * multiplicador;
}, 0);

let segundoNumero = 11 - (num02 % 11);

if (segundoNumero > 9) {
  segundoNumero = 0;
}

cpfCopia02.push(segundoNumero);

const resultado = cpfCopia02.join("");

if (resultado === cpfLimpo) {
  console.log("CPF válido");
} else {
  console.log("CPF inválido");
}
