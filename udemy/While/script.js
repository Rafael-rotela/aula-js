// Sorteia um inteiro entre `min` (inclusivo) e `max` (exclusivo).
function random(min,max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50;
let rand =  random(min,max);

// Repete enquanto o valor sorteado for diferente de 10.
while  (rand !== 10) {
    rand = random(min,max);
    console.log(rand);
}
