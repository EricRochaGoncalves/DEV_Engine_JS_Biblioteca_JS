let currentIndex = 0;
const images = document.querySelectorAll('.carrossel img');

function mudarImagem(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.querySelector('.carrossel').style.transform = `translateX(-${currentIndex * 600}px)`;
}

// Chama mudarImagem com intervalos para automatizar a troca das imagens
setInterval(() => mudarImagem(1), 3000); // Muda a imagem a cada 3 segundos