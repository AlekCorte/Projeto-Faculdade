//botao responsivo 
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-menu-esq",
  ".nav-menu-esq-item",
);
mobileNavbar.init();


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
  button.style.color = 'rgb(180, 180, 0)'
  button.addEventListener('click', function() {
    mudarCor(button);
  });
});

//contador das ofertas especiais
const dataTerminoOferta = new Date(2023, 6, 10, 23, 59, 59);

function atualizarContador() {
    const agora = new Date().getTime();
    const diferenca = dataTerminoOferta - agora;

    // Calcula o tempo restante em dias, horas, minutos e segundos
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Formata a saída do contador
    const contadorElement = document.getElementById('contador');
    contadorElement.innerHTML = `OFERTA TERMINA EM: ${dias}d ${horas}h ${minutos}m ${segundos}s`;

    // Verifica se a oferta já terminou, se sim, exibe uma mensagem
    if (diferenca < 0) {
        contadorElement.innerHTML = 'OFERTA ENCERRADA!';
    }
}

// Chama a função para atualizar o contador a cada segundo
setInterval(atualizarContador, 1000);


