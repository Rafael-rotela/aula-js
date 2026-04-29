const texto = [
    "1 - Faça um algoritmo que o usuário possa digitar o seu nome e a sua idade. Utilizando a tabela a baixo, verifique em qual item se enquadra a idade da pessoa e escreva a mensagem:(nome) está com (idade) e pela tabela é considerado um (tipo)", 
    "2 - Faça um algoritmo que verifique se o número digitado é positivo ou negativo.", 
    "3 - Faça um algoritmo que leia o número digitado e verifique se é par ou ímpar.", 
    "4 - Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcule e escreva o saldo atual (saldo atual = saldo - débito + crédito). Também teste se saldo atual for maior ou igual a zero. Em seguida escreva a mensagem 'Saldo Positivo', senão, escrever a mensagem 'Saldo Negativo' .", 
    "5 - Faça um Programa que verifique se uma letra digitada é F ou M. Conforme a letra escreva: F - Feminino, M - Masculino ou Sexo Inválido.", 
    "6 - Faça um Programa que leia três números e mostre o maior e o menor deles.", 
    "7 - As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhes contrataram para desenvolver o programa que calculará os reajustes. Faça um programa que recebe o salário de um colaborador e reajuste-o seguindo o seguinte critério baseado no salário atual salários até R$ 280,00 (incluindo) : aumento de 20% salários entre R$ 280,00 e R$ 700,00 : aumento de 15% salários entre R$ 700,00 e R$ 1500,00 : aumento de 10% salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela: o salário antes do reajuste; o percentual de aumento aplicado; o valor do aumento; o novo salário, após o aumento.",
    "",
];

let indexSentence = 0;
let indexChar = 0;
const elemento = document.getElementById("text");

function writeText() {
    if (indexChar <= texto[indexSentence].length) {
        elemento.textContent = texto[indexSentence].substring(0, indexChar);
        indexChar++;
        setTimeout(writeText, 25);
    }
}


const botao = document.getElementById('lista');

botao.addEventListener('click', (evento) => {
    let valor = evento.target.closest('li');
    if (valor) {
        valor = Number(valor.dataset.id);
        indexSentence = valor;
        console.log(valor)
        writeText();
    }
})
function mostrarExercicio(numero) {
 
  document.querySelectorAll('.container-atividade').forEach(ex => ex.style.display = 'none');
 
  document.getElementById(`atividade${numero}`).style.display = 'block';
 
}
 