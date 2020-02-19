export const CHART_CONFIG = {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Number of Movies',
            data: [],
            backgroundColor: '#3386ff',
            borderColor: '#3386ff',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
};
