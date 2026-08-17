// Seleciona o contêiner e depois somente os parágrafos existentes dentro dele.
const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

// `getComputedStyle` lê o estilo final aplicado pelo navegador.
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

// `for...of` percorre cada elemento da NodeList retornada por querySelectorAll.
for(let p of ps) {
    p.style.background = backgroundColorBody;
    p.style.color = 'white';
}

// Alternativa equivalente:
// ps.forEach(p => Object.assign(p.style, { background: backgroundColorBody, color: 'white' }));
