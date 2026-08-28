function criaCalculadora() {
  // A factory function cria e devolve um novo objeto calculadora.
  return {
    display: document.querySelector(".display"),

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener("keyup", (e) => {
        // `e.key` é mais legível e atual que o antigo `keyCode`.
        if (e.key === "Enter") {
          this.realizaConta();
        }
      });
    },

    clearDisplay() {
      this.display.value = "";
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        // Este exemplo didático usa `eval`; não use dados não confiáveis aqui.
        conta = eval(conta);

        // Zero é um resultado válido; rejeitamos apenas resultados não numéricos.
        if (typeof conta !== "number" || !Number.isFinite(conta)) {
          alert("Conta inválida");
          return;
        }

        this.display.value = String(conta);
      } catch (e) {
        alert("Conta inválida");
        return;
      }
    },

    cliqueBotoes() {
      document.addEventListener(
        "click",
        function (e) {
          const el = e.target;

          if (el.classList.contains("btn-num")) {
            this.btnParaDisplay(el.innerText);
          }

          if (el.classList.contains("btn-clear")) {
            this.clearDisplay();
          }

          if (el.classList.contains("btn-del")) {
            this.apagaUm();
          }

          if (el.classList.contains("btn-eq")) {
            this.realizaConta();
          }
        }.bind(this),
      );
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
