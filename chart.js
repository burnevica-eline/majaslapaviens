function fetchWeatherData() {
}

function fetchSalaryData() {
}

function makeBarChart(months, temperatures) {
}

function makeSalaryChart(dates, wages) {
    var ctx2 = document.getElementById('chart2').getContext('2d');
    var chart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: 'Minimālās Mēnešalgas Pieaugums (€)',
                data: wages,
                borderColor: '#FF6384',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: 'Minimālās Mēnešalgas Pieaugums' }
            },
            scales: {
                x: { title: { display: true, text: 'Gads' } },
                y: { title: { display: true, text: 'Alga (€)' } }
            }
        }
    });
}

window.onload = function() {
    fetchWeatherData();
    fetchSalaryData();
};