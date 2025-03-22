document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os botões que abrem um modal
    const openButtons = document.querySelectorAll(".openModal");
    const closeButtons = document.querySelectorAll(".closeModal");

    // Adiciona evento para abrir o modal correto
    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add("visible");
            }
        });
    });

    // Adiciona evento para fechar o modal correspondente
    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modal = button.closest(".modal");
            if (modal) {
                modal.classList.remove("visible");
            }
        });
    });

    // Fecha o modal se o usuário clicar fora dele
    window.addEventListener("click", (event) => {
        document.querySelectorAll(".modal").forEach(modal => {
            if (event.target === modal) {
                modal.classList.remove("visible");
            }
        });
    });
});