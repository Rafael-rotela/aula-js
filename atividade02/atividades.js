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
