// const data  = new Date('2026-06-2  20:15:59');
// console.log('Dia:', data.getDate()); 
// console.log('Mês:', data.getFullYear()); //Mês começa do zero
// console.log('Ano:', data.getMonth());
// console.log('Hora:', data.getHours());
// console.log('Min:', data.getMinutes());
// console.log('ms:', data.getSeconds());
// console.log('Dia semana:', data.getDay()); // 0 - Domingo, 6 sábado 
// console.log(data.toString());

function FormataData(data){
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