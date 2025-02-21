let currentIndex = 0;
const images = document.querySelectorAll('.carrossel img');
const carrossel = document.querySelector('.carrossel');

function mudarImagem(direction) {
    currentIndex += direction;

    // Garantir que o índice não ultrapasse os limites
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Volta para a última imagem
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // Volta para a primeira imagem
    }

    // Muda a posição do carrossel
    const imageWidth = images[0].offsetWidth; // Usa offsetWidth para garantir a largura correta

    // Muda a posição do carrossel
    carrossel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Automatiza a troca das imagens a cada 3 segundos
setInterval(() => mudarImagem(1), 3000); // Muda a imagem a cada 3 segundos