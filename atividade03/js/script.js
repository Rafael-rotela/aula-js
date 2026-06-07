// const nome = 'Rafael'; //esta em um escopo global

function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')
    const pessoas = [];

    function eventoNaoEnviado(evento){
        evento.preventDefault()
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.Sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })    

        resultado.innerHTML += `<p> nome:${nome.value}  <br> sobreno: ${sobrenome.value} <br> peso: ${peso.value}</p> `
    }
    
    form.addEventListener('submit', eventoNaoEnviado)
}
meuEscopo()
console.log(pessoas)