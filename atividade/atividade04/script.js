const result = document.getElementById("result");

// Reúne as partes da data atual e monta a frase exibida na página.
function obterData() {
    const agora = new Date();

    const diaSemana = agora.getDay();
    const diaMes = agora.getDate();
    const mes = agora.getMonth();
    const hora = agora.getHours();
    const minuto = agora.getMinutes();
    const ano = agora.getFullYear();

    return `${validarDia(diaSemana)}, ${diaMes} de ${validarMes(mes)} de ${ano} ${hora}:${String(minuto).padStart(2, "0")}`;
}

// O número retornado por getDay é usado como índice deste array.
function validarDia(valor) {
    const dias = [
        "domingo",
        "segunda-feira",
        "terça-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira",
        "sábado"
    ];

    return dias[valor];
}

// getMonth também retorna um índice, de 0 a 11.
function validarMes(valor) {
    const meses = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro"
    ];

    return meses[valor];
}

result.innerHTML = obterData();

// Alternativa: Intl faz a formatação completa usando as regras do idioma.
const dataComIntl = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'full',
    timeStyle: 'short'
}).format(new Date());
console.log(dataComIntl);
