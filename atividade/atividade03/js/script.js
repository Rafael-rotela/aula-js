// A função mantém seus dados fora do escopo global.

function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')
    const pessoas = [];

    // Intercepta o envio do formulário para a página não recarregar.
    function eventoNaoEnviado(evento){
        evento.preventDefault()
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.Sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        // Guarda uma nova pessoa como objeto dentro do array.
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })    
        console.log(pessoas)
        
        resultado.innerHTML += `<p>Nome: ${nome.value}<br>Sobrenome: ${sobrenome.value}<br>Peso: ${peso.value}<br>Altura: ${altura.value}</p>`;
    }
    
    form.addEventListener('submit', eventoNaoEnviado)
}
meuEscopo();
