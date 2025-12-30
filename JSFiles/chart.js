
const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar', // نوع الرسم
    data: {
      labels: ['يناير', 'فبراير', 'مارس', 'أبريل'],
      datasets: [{
        label: 'المبيعات',
        data: [12, 19, 3, 5],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive : true,
    //   maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
});


 const lineChart = document.getElementById('lineChart').getContext('2d');

  new Chart(lineChart, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: 'Sales',
        data: [12, 19, 8, 15, 22],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        tension: 0.4,      // يجعل الخط ناعم
        fill: true,        // تعبئة أسفل الخط
        pointRadius: 5     // حجم النقاط
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
