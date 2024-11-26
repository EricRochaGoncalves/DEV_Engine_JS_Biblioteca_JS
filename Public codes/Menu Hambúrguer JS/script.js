const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('nav');

// Função para alternar a visibilidade do menu
function toggleMenu() {
    nav.classList.toggle('active'); // Adiciona/remove a classe 'active'
}

// Evento de clique no botão do menu
btnMenu.addEventListener('click', toggleMenu);
