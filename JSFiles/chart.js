
const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar', // نوع الرسم
    data: {
      labels: ['Pizza Margherita', 'Pasta Carbonara', 'Fish Dish', 'Meat Dish'],
      datasets: [{
        label: 'Most Popular Dishes',
        data: [40, 25, 20, 15],
        backgroundColor: 'orange',
        borderColor: 'black',
        borderWidth: 1
      }]
    },
    options: {
      responsive : true,
      maintainAspectRatio: false,
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
      labels: ['Excellent', 'Good', 'Average', 'Bad'],
      datasets: [{
        label: 'Customer Satisfaction',
        data: [60, 25, 10, 3],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        tension: 0.4,      
        fill: true,        
        pointRadius: 5    
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
