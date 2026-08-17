// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). Retorne true see a imagem estiver no modo paisagem

// Uma expressão de comparação já retorna um booleano: true ou false.
function ePaisagem(largura,altura){
    return largura > altura 
}

console.log(ePaisagem(1920,1080));

// Alternativa com arrow function, útil para funções curtas.
const ePaisagemArrow = (largura, altura) => largura > altura;
console.log(ePaisagemArrow(800, 1200));
