function mostrar() {
    let nome = document.getElementById("nome").value;
    document.getElementById("resposta").innerText = "Olá " + nome;
}

function somar() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let soma = n1+n2;
    document.getElementById("resultado").innerText = "Resultado" + soma;
}

function verificar(){
    let idade = Number(document.getElementById("idade").value);

    if (idade >= 18){
        document.getElementById("msg").innerHTML = "Maior de Idade";
    }
    else{
        document.getElementById("msg").innerHTML = "Menor de Idade";
    }
}

function parImpar() {
    let num = document.getElementById("numero").value;
    if(num % 2 == 0){
        document.getElementById("parecidade").innerHTML = num + " Teu numero é par";
    } else {
        document.getElementById("parecidade").innerHTML = num + " Teu numero é impar";
    }
}
function maiorMenor() {
    let num1 = document.getElementById('num').value;

    if(num1 > 10){
        document.getElementById("msg-diferenca").innerHTML = "maior";
    } else if(num1 >= 10){
        document.getElementById("msg-diferenca").innerHTML = "igual";
    }
    else{
        document.getElementById("msg-diferenca").innerHTML = "menor";
    }

}
function tecla(event) {
    if (event.key === "Enter") {
        maiorMenor();
    }
}