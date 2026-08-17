// Classifica a idade usando faixas contínuas, sem deixar idades de fora.
function calcularIdade(){
    const idade = Number(document.getElementById('idade').value);
    if(idade < 0 || !Number.isFinite(idade)) {
        document.getElementById('msg-idade').innerHTML = "Informe uma idade válida";
    } else if(idade <= 2){
        document.getElementById('msg-idade').innerHTML = "você é um Bebê";
    } else if(idade <= 11){
        document.getElementById('msg-idade').innerHTML = "você é uma Criança";
    } else if(idade <= 21){
        document.getElementById('msg-idade').innerHTML = "você é um Adolescente";
    } else if(idade <= 59){
        document.getElementById('msg-idade').innerHTML = "você é um Adulto";
    } else {
        document.getElementById('msg-idade').innerHTML = "você é um Idoso";
    }
}
function negativoPositivo(){
    let numero = Number(document.getElementById('maiorMenor').value);
    if(numero > 0){
        document.getElementById('ms-Mm').innerHTML = 'Teu número é posítivo';
    }
    else if (numero < 0){
        document.getElementById('ms-Mm').innerHTML = 'Teu número é negativo';
    } else {
        document.getElementById('ms-Mm').innerHTML = 'O número é zero';
    }
}
function parImpar(){
    let numero = Number(document.getElementById('imparPar').value);
    if (numero % 2 === 0){
        document.getElementById('par-impar').innerHTML = 'Teu número é Par';
    } else{
        document.getElementById('par-impar').innerHTML = 'Teu número é Impar';
    }
}
// Saldo atual = saldo inicial - débitos + créditos.
function Saldo() {
    let saldo = Number(document.getElementById('saldo').value);
    let debito = Number(document.getElementById('debito').value);
    let credito = Number(document.getElementById('credito').value);

    let saldoAtual = saldo - debito + credito;

    if(saldoAtual >= 0){
        document.getElementById('valor').innerHTML = `Seu valor é de ${saldoAtual}`;
        document.getElementById('msg-valor').innerHTML = "Seu valor é posítivo";
    } else {
        document.getElementById('valor').innerHTML = `Seu valor é de ${saldoAtual}`;
        document.getElementById('msg-valor').innerHTML = "Seu valor é negativo";
    }
}

function genero(){
    // Normaliza a entrada para aceitar F/f e M/m.
    const sexo = document.getElementById('genero').value.trim().toLowerCase();
    
    switch (sexo) {
        case 'f':
            document.getElementById('msg-genero').innerHTML = 'Feminino';
            break;
        case 'm':
            document.getElementById('msg-genero').innerHTML = 'masculino';    
            break
        default:
            document.getElementById('msg-genero').innerHTML = 'genero não identificado';    
            break;
    }
}
function sorteio(){
    const campos = ['valor1', 'valor2', 'valor3'].map(id => document.getElementById(id).value);
    if (campos.some(valor => valor.trim() === '')) {
        document.getElementById("msg-sorteio").innerHTML = 'Preencha todos os campos';
        return;
    }
    const lista = campos.map(Number);
    lista.sort((a,b) => a - b);
    document.getElementById("msg-sorteio").innerHTML = `Menor: ${lista[0]} — maior: ${lista[2]}`;
}
function reajuste(){
    let salario = Number(document.getElementById('salario').value);
    let aumento = 0;
    if(salario <= 280){
        aumento = 0.20;
    } else if (salario > 280 && salario <= 700){
        aumento = 0.15;
    } else if (salario > 700 && salario <= 1500){
        aumento = 0.10;
    } else{
        aumento = 0.05;
    }
    const valorAumento = salario * aumento;
    const novoSalario = salario + valorAumento;
    document.getElementById('msg-reajuste1').innerHTML = `Seu sálario antes do reajuste é R$${salario}` 
    document.getElementById('msg-reajuste2').innerHTML = `O percentual de aumento aplicado é ${aumento * 100}%` 
    document.getElementById('msg-reajuste3').innerHTML = `Valor do aumento é R$${valorAumento.toFixed(2)}`
    document.getElementById('msg-reajuste4').innerHTML = `Novo salário:  R$${novoSalario}` 
}
