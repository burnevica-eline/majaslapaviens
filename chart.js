function fetchWeatherData() {
}

function fetchMigrationData() {
}

function makeBarChart(months, temperatures) {
}

function makeMigrationChart (years, peopleCounts) {
    var ctx2 = document.getElementById('chart2').getContext('2d');
    var chart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: years,
            datasets: [{
                label: 'Iedzīvotāju migrācija uz ārzemēm',
                data: counts,
                borderColor: '#63dbffff',
                backgroundColor: 'rgba(85, 209, 240, 0.2)',
                tension: 0.2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: 'Iedzīvotāju migrācija uz ārzemēm' }
            },
            scales: {
                x: { title: { display: true, text: 'Gads' } },
                y: { title: { display: true, text: 'Iedzīvotāju skaits' } }
            }
        }
    });
}

window.onload = function() {
    fetchWeatherData();
    fetchMigrationData();
};