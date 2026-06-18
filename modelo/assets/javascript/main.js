const respostaNegativa = document.getElementById("negativa");
const respostaPositiva = document.getElementById("resposta");

function calcularImc(peso, altura) {
  peso = Number(peso.value);
  altura = parseFloat(altura.value);
  const rs = document.getElementById("resposta");
  let imc = (peso / (altura * altura)).toFixed(2);
  let resultado = "";

  if (imc < 18.5) {
    resultado = "Abaixo do peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultado = "Peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    resultado = "Sobrepeso";
  } else if (imc >= 30 && imc <= 34.9) {
    resultado = "Obesidade grau 1";
  } else if (imc >= 35 && imc <= 39.9) {
    resultado = "Obesidade grau 2";
  } else {
    resultado = "Obesidade grau 3";
  }

  let reposta = `Seu IMC é ${imc} ${resultado}`;
  return (rs.innerHTML = reposta);
}

const btn = document.getElementById("btn");
function validador(peso, altura) {
  const pesoValor = peso.value.trim();
  const alturaValor = altura.value.trim();
  if (!pesoValor || !alturaValor) {
    return false;
  } else {
    return true;
  }
}

btn.addEventListener("click", (evento) => {
  evento.preventDefault();
  const peso = document.getElementById("input-teste-3");
  const altura = document.getElementById("input-teste-4");
  const resultado = validador(peso, altura);

  if (!resultado) {
    respostaNegativa.innerHTML = "Preencha todos os campos";
    respostaNegativa.classList.add("active");
    respostaPositiva.classList.remove("active");
  } else {
    respostaNegativa.classList.remove("active");
    respostaPositiva.classList.add("active");
    calcularImc(peso, altura);
  }
});
