let myChart;

function showPage(pageId) {
    document.querySelectorAll('.content-page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId + '-page').classList.add('active');
    
    if(pageId === 'dashboard') {
        initChart();
        document.getElementById('nav-title').innerText = "Smart Farming Dashboard";
    } else {
        document.getElementById('nav-title').innerText = "AI-Driven Smart Farming System";
    }
}

function initChart() {
    const ctx = document.getElementById('parameterChart').getContext('2d');
    if (myChart) myChart.destroy();
    
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7'],
            datasets: [{
                label: 'Temperature',
                data: [28, 28.2, 28.4, 28.3, 28.4, 28.4, 28.4],
                borderColor: '#e53935',
                tension: 0.1
            }, {
                label: 'Moisture',
                data: [29, 29.5, 29.3, 29.3, 29.3, 29.3, 29.3],
                borderColor: '#1e88e5',
                tension: 0.1
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });
}

function refreshData() {
    document.getElementById('crop-text').innerText = "Wheat / Rice (Suggested)";
    document.getElementById('fert-text').innerText = "Apply NPK 10-10-10";
    document.getElementById('crop-text').classList.remove('loading');
    document.getElementById('fert-text').classList.remove('loading');
}