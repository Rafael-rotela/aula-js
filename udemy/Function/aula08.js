// Factory Function

function criaPessoa(nome,sobrenome,a,p){
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto(){return `${this.nome} ${this.sobrenome}`},
        
        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        
        fala(assunto){
            return `${this.nome} está ${assunto}`;
        },
        altura: a,
        peso: p,
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        }
    };
}

const p1 = criaPessoa('Rafael','Rotela',1.80,79);
console.log(p1.fala('estudando js'));
console.log(p1.imc); // transform uma function em um metodo
