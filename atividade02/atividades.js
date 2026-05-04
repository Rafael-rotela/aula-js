function calcularIdade(){
    let idade = Number(document.getElementById('idade').value);
    if(idade < 2){
        document.getElementById('msg-idade').innerHTML = "você é um Bebê";
    } else if(idade >= 3 && idade <= 11){
        document.getElementById('msg-idade').innerHTML = "você é uma Criança";
    } else if(idade >= 12 && idade <= 21){
        document.getElementById('msg-idade').innerHTML = "você é uma Criança";
    } else if(idade >= 22 && idade <= 100){
        document.getElementById('msg-idade').innerHTML = "você é uma Criança";
    }
}
function negativoPositivo(){
    let numero = Number(document.getElementById('maiorMenor').value);
    if(numero > 0){
        document.getElementById('ms-Mm').innerHTML = 'Teu número é posítivo';
    }
    else{
        document.getElementById('ms-Mm').innerHTML = 'Teu número é negativo';
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
function Saldo(params) {
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
    let sexo = document.getElementById('genero').value;
    
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
    let valor1 = Number(document.getElementById('valor1').value);
    let valor2 = Number(document.getElementById('valor2').value);
    let valor3 = Number(document.getElementById('valor3').value);
    let lista = [];
    lista.push(valor1,valor2,valor3);
    lista.sort((a,b) => a - b);
    if (valor1 == null || valor2 == null || valor2 == null) {
        document.getElementById("msg-sorteio").innerHTML = `preencha todos os campos`;
    } else{
        document.getElementById("msg-sorteio").innerHTML = `seu maior valor é ${lista[2]}`;
    }
}
function reajuste(){
    let salario = Number(document.getElementById('salario').value);
    let aumento = 0;
    if(salario <= 280){
        aumento = 1.2
    } else if (salario > 280 && salario <= 700){
        aumento = 1.5
    } else if (salario >= 700 && salario <= 1500){
        aumento = 1.1
    } else{
        aumento = 1.05
    }
    let novoSalario = salario * aumento;
    document.getElementById('msg-reajuste1').innerHTML = `Seu sálario antes do reajuste é R$${salario}` 
    document.getElementById('msg-reajuste2').innerHTML = `O percentual de aumento aplicado é ${aumento * 100}%` 
    document.getElementById('msg-reajuste3').innerHTML = `Valor do aumentado é R$${novoSalario - salario}` 
    document.getElementById('msg-reajuste4').innerHTML = `Novo salário:  R$${novoSalario}` 
}