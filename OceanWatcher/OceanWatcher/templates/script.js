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
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }

        });

// Codido para fazer o menu e aparecer de acordo com que passa o mouse por cima.
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
            } else if (currentScroll > lastScroll){
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
           function texto(){
            
             document.getElementById("texto").innerHTML = "teste"
            
        }
       
        const MudarTexto = document.getElementById("clicar-logo")
        MudarTexto.addEventListener("click", texto)
