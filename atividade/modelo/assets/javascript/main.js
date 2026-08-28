// Mantém referências aos elementos reutilizados em diferentes resultados.
const respostaNegativa = document.getElementById("negativa");
const respostaPositiva = document.getElementById("resposta");

// Recebe números e devolve tanto o IMC quanto sua classificação.
function calcularImc(peso, altura) {
  peso = Number(peso.value);
  altura = Number(altura.value);
  const rs = document.getElementById("resposta");
  const imc = peso / altura ** 2;
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

  const resposta = `Seu IMC é ${imc.toFixed(2)} — ${resultado}`;
  rs.innerHTML = resposta;
}

const btn = document.getElementById("btn");
function validador(peso, altura) {
  // Além de exigir conteúdo, valida valores numéricos positivos.
  const pesoValor = peso.value.trim();
  const alturaValor = altura.value.trim();
  return pesoValor !== "" && alturaValor !== "" &&
    Number(pesoValor) > 0 && Number(alturaValor) > 0;
}

btn.addEventListener("click", (evento) => {
  // Impede o envio padrão do formulário, que recarregaria a página.
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
