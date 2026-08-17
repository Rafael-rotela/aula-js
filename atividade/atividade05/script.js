const container = document.querySelector('.container');

// Cada objeto descreve qual elemento criar e qual texto inserir nele.
const elementos = [
    { tag: 'p', texto: 'frase 1' },
    { tag: 'div', texto: 'frase 2' },
    { tag: 'footer', texto: 'frase 3' },
    { tag: 'section', texto: 'frase 4' },
];

// Percorre as descrições e usa desestruturação para obter suas propriedades.
for (let i = 0; i < elementos.length; i++) {
    const { tag, texto } = elementos[i];

    const filho = document.createElement(tag);
    filho.textContent = texto;

    container.appendChild(filho);
}

// Alternativa: `for...of` poderia percorrer diretamente cada objeto:
// for (const { tag, texto } of elementos) { ... }
