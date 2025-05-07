// script.js

let index = 0;
const carrosselInner = document.getElementById('carrosselInner');
const totalSlides = document.querySelectorAll('.carrossel-item').length;

document.getElementById('btnEsquerda').addEventListener('click', slideAnterior);
document.getElementById('btnDireita').addEventListener('click', slideProximo);

function slideAnterior() {
  index = (index - 1 + totalSlides) % totalSlides;
  atualizarCarrossel();
}

function slideProximo() {
  index = (index + 1) % totalSlides;
  atualizarCarrossel();
}

function atualizarCarrossel() {
  carrosselInner.style.transform = `translateX(-${index * 100}%)`;
}

// Suporte a teclado (seta direita/esquerda)
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') slideAnterior();
  if (e.key === 'ArrowRight') slideProximo();
});
