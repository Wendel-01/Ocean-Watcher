// Codigo onde trás o Gráfico com o JavaScript
const Grhapy = document.getElementById('myChart');
new Chart(Grhapy, {
    type: 'bar',
    data: {
        labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: "green",
            hoverBackgroundColor: "red",
        }
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }

});

// Codigo para fazer o menu e aparecer de acordo com que passa o mouse por cima.
const nav = document.querySelector(".nav-bar");
const tophover = document.createElement("div");
tophover.style.position = "fixed";
tophover.style.top = "0";
tophover.style.left = "0";
tophover.style.width = "100%";
tophover.style.height = "50px";
tophover.style.zIndex = "999";
tophover.style.background = "transparent";
document.body.appendChild(tophover)

let lastScroll = 0;

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll === 0) {
        nav.classList.remove("hidden");
    } else if (currentScroll > lastScroll) {
        nav.classList.add("hidden")
    }

    lastScroll = currentScroll;
});

tophover.addEventListener("mouseenter", () => {
    nav.classList.remove("hidden");

});

nav.addEventListener("mouseleave", () => {
    if (window.scrollY > 0) {
        nav.classList.add("hidden");
    }
});


// Código que faz o texto da Sea aparacer

const original = document.getElementById("texto");
const tituloOriginal = document.getElementById("titulo")
const MudarTexto = document.getElementById("clicar-logo");

let textooriginal = `Cada gesto de apoio ajuda a manter viva a luta pela preservação marinha.
As ONGs são fundamentais na conscientização, pesquisa e proteção da vida nos mares.
Com o seu apoio, elas ganham força para combater a poluição e defender a biodiversidade.
A união de pequenas ações pode gerar grandes transformações.
Juntos, podemos garantir que as futuras gerações herdem um oceano mais limpo e saudável.`;

let textoSea = `Shepherd é uma marca/empresa que se destaca por seu compromisso com qualidade e inovação. 
O nome “Shepherd” (que significa “pastor” em inglês) simboliza liderança, cuidado e orientação, 
refletindo a missão de guiar seus clientes ou usuários com confiança e segurança.`;

let tituloOriginal1 = "Apoie as ONGs"
let tituloSea = "Sea Shepherd Brasil"

let mostrandoSea = false;

function ChamarTexto() {
    if (mostrandoSea) {
        original.textContent = textooriginal;
        tituloOriginal.textContent = tituloOriginal1
        mostrandoSea = false;
    } else {
        original.textContent = textoSea; 
        tituloOriginal.textContent = tituloSea;
        mostrandoSea = true;
    }
}

MudarTexto.addEventListener("click", ChamarTexto);
