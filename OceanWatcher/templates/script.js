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


        
        function texto(){
            
             document.getElementById("texto").innerHTML = "teste"
            
        }
       
        const MudarTexto = document.getElementById("clicar-logo")
        MudarTexto.addEventListener("click", texto)
