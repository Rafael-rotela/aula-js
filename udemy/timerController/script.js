function mostraHora() {
    // Uma nova instância captura o horário do momento da chamada.
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

// Executa a função repetidamente a cada 1 segundo.
const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000)

// Executa uma vez e cancela o intervalo após 5 segundos.
setTimeout(function(){
    clearInterval(timer);
}, 5000)
