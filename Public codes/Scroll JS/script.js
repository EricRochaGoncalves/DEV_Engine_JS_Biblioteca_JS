// Seleciona todos os links de navegação
const navLinks = document.querySelectorAll('nav a');

// Função de rolagem suave
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Verifica se o href começa com "#"
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault(); // Previne o comportamento padrão

            // Obtém a seção de destino
            const targetSection = document.querySelector(this.getAttribute('href'));

            // Rolagem suave até a seção correspondente
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});