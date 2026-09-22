//705.484.450-52

class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperties(this, 'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    éSequencia(){
        return this.cpfLimpo.charAt().repeat(this.cpfLimpo.length);
    }

    gerarNovoCPF(){
        const cpfSemDigitios = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfSemDigitios);
        const digito2 = this.geraDigito(cpfSemDigitios + digito1);
        this.novoCPF = cpfSemDigitios + digito1 + digito2
    }

    geraDigito(cpfSemDigitios){
        let total = 0;
        let reverso = cpfSemDigitios.length + 1;

        for(let stringNumerica of cpfSemDigitios){
            total += reverso + Number(stringNumerica);
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito  <= 9? String(digito) : '0';
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.éSequencia()) return false;
        
        return this.novoCPF === this.cpfLimpo;
    }
}

const ValidaCPF = new ValidaCPF('705.484.450-52')
