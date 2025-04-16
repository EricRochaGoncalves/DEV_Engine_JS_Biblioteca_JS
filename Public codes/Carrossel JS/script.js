let index = 0;
const totalSlides = document.querySelectorAll('.carrossel-item').length;
const carrosselInner = document.getElementById('carrosselInner');

document.getElementById('btnEsquerda').addEventListener('click', () => {
  index = (index - 1 + totalSlides) % totalSlides;
  atualizarCarrossel();
});

document.getElementById('btnDireita').addEventListener('click', () => {
  index = (index + 1) % totalSlides;
  atualizarCarrossel();
});

function atualizarCarrossel() {
  const offset = -index * 100;
  carrosselInner.style.transform = `translateX(${offset}vw)`;
}