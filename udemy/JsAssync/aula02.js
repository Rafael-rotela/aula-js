function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("BAD VALUE");

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

function baixaPagina() {
  const emCache = true;
  if (emCache) Promise.reject("Págiina em cache");

  return esperaAi("Baixei a página", 3000);
}

baixaPagina()
  .then(dadosPaagina => {
    console.log(dadosPaagina);
  })
  .catch(e => xonsole.log(e));

// Promise.all Promise.race Promise.resolve Promise.reject
