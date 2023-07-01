// Obtém todos os botões pela classe
const botao = document.querySelectorAll('.botao-favoritar');

// Função para alternar a cor, a borda e o texto
function mudarCor(button) {
  // Obtém a cor atual
  const currentColor = button.style.color;

  if (currentColor === 'rgb(180, 180, 0)') {
    // Se a cor atual for amarelo, muda para verde
    button.style.color = 'green';
    button.style.borderColor = 'green';
    button.value = 'Desfavoritar' // Altera o texto do botão para o texto alternativo
  } else {
    // Se a cor atual for verde, muda para amarelo
    button.style.color = 'rgb(180, 180, 0)';
    button.style.borderColor = 'rgb(180, 180, 0)';
    button.value = 'Favoritar'; // Altera o texto do botão para o texto padrão
  }
}

// Adiciona o ouvinte de evento de clique a cada botão
botao.forEach(function(button) {
  button.addEventListener('click', function() {
    mudarCor(button);
  });
});
