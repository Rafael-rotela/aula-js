// Funções construtoras criam objetos quando são chamadas com `new`.

function Pessoa(nome, sobrenome) {
    // Variáveis locais não são expostas na instância: funcionam como membros privados.
    const metodoPrivado = () => {
        return `${nome} ${sobrenome}`;
    };

    // Propriedades ligadas a `this` são públicas no objeto criado.
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = metodoPrivado;
}

const p1 = new Pessoa('Rafael', 'Rotela');
console.log(p1.nomeCompleto());
