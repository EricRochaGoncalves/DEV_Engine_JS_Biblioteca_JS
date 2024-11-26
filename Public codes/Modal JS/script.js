const toggleButton = document.getElementById('toggleModal');
const closeButton = document.getElementById('closeModal');
const closeExtraButton = document.getElementById('closeModalButton'); // Novo botão
const modal = document.getElementById('modal');

// Função toggle para abrir e fechar o modal
function toggleModal() {
  modal.classList.toggle('visible'); // Adiciona/remove a classe 'visible'
}

// Função para fechar o modal (remove a classe 'visible')
function closeModal() {
  modal.classList.remove('visible');
}

// Eventos
toggleButton.addEventListener('click', toggleModal); // Abre/fecha o modal
closeButton.addEventListener('click', closeModal); // Fecha o modal pelo botão no canto superior
closeExtraButton.addEventListener('click', closeModal); // Fecha o modal pelo botão adicional

// Fechar o modal clicando fora dele
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
