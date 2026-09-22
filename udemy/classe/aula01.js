// Classes 
class Pessoa {
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} esta falando`)
    }

}

// Factory function
function Pessoa01(nome,sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}
a
Pessoa01.prototype.falar = function(){
    console.log(`${this.nome} está falando`)
}

const p1 = new Pessoa('Rafael', 'Rotela');
