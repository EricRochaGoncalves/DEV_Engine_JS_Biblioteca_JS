// Seleciona todos os links de navegação
const navLinks = document.querySelectorAll('nav a');

// Função de rolagem suave
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do link

        // Obtém o ID do link (exemplo: "#home")
        const targetSection = document.querySelector(this.getAttribute('href'));

        // Rolagem suave até a seção correspondente
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

Teste secundário


const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});