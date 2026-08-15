const result = document.getElementById("result");

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