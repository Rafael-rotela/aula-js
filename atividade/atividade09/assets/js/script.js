// Encapsula o cronômetro para não criar variáveis no escopo global.
function timer() {
  const horas = document.getElementById("timer");
  let segundos = 0;
  let timer;

  // Converte a quantidade de segundos em uma string no formato HH:MM:SS.
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  // Guarda o identificador do intervalo para poder cancelá-lo depois.
  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      horas.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  // Delegação de eventos: um ouvinte atende aos três botões pelos seus IDs.
  document.addEventListener("click", function (e) {
    const el = e.target;

    if (el.id === "iniciar") {
      horas.classList.remove("pausado");
      clearInterval(timer);
      iniciaRelogio();
    }

    if (el.id === "parar") {
      horas.classList.add("pausado");
      clearInterval(timer);
    }

    if (el.id === "limpar") {
      horas.classList.remove("pausado");
      clearInterval(timer);
      segundos = 0;
      horas.innerHTML = "00:00:00";
    }
  });
}

// Inicia a configuração do cronômetro assim que o script é carregado.
timer();
