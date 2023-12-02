// slider.js

let slides = document.querySelectorAll(".slide");
let index = 0;

function nextSlide() {
    slides[index].style.display = "none";  // Oculta o slide atual
    index = (index + 1) % slides.length;   // Calcula o próximo índice
    slides[index].style.display = "block"; // Exibe o próximo slide
}

// Configurando o intervalo para mudança automática de slide a cada 2 segundos
setInterval(nextSlide, 2000);

// Certifique-se de que o primeiro slide esteja visível inicialmente
slides[index].style.display = "block";
