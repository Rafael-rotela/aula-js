{
// Data fixa para observar os métodos sem depender do momento atual.
const dataExemplo = new Date('2026-06-02T20:15:59');
console.log('Dia:', dataExemplo.getDate());
console.log('Mês:', dataExemplo.getMonth() + 1); // Janeiro tem índice zero.
console.log('Ano:', dataExemplo.getFullYear());
console.log('Hora:', dataExemplo.getHours());
console.log('Min:', dataExemplo.getMinutes());
console.log('Seg:', dataExemplo.getSeconds());
console.log('Dia semana:', dataExemplo.getDay()); // 0 = domingo; 6 = sábado.
}

function FormataData(data){
    // Cada método lê uma parte da instância de Date recebida.
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min =  data.getMinutes();
    const seg = data.getSeconds();

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data =  new Date();
const dataBrasil = FormataData(data);
console.log(dataBrasil);

// Alternativa nativa para formatar data e hora no padrão brasileiro.
console.log(data.toLocaleString('pt-BR'));
