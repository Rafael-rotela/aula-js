function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject('BAD VALUE');


    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi("frase 1", aleatorio(1, 2))
  .then((reposta) => {
    console.log(reposta);
    return esperaAi(2, aleatorio(1,2))
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAi("Frase 3", aleatorio(1,2))
  })
  .then(resposta => {
    console.log(resposta);
  })
  .catch(e => {
    console.log(e);
  });
