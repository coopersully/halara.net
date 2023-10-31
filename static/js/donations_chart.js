const ctx = document.getElementById('donations_chart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [40, 25, 15, 10, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
        }],
        labels: ['Server Hosting', 'Plugin Development', 'Server Maintenance', 'Server Staff', 'Tithes']
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});
