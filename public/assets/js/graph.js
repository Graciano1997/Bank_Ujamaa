const ctx = document.getElementById('myChart');
const mobile = document.getElementById('saldo');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [
      'Activo:',
      'Passivo:',
    ],
    datasets: [{
      label: 'Total KZ',
      data: [+300, -100],
      color: 'white',
      backgroundColor: [
        'blueviolet',
        'rgba(28, 33, 30, 0.842)'
      ],
      borderColor: 'rgba(0, 0, 0, 0.489)',
      hoverOffset: 4
    }]
  }
});

new Chart(mobile, {
  type: 'doughnut',
  data: {
    labels: [
      'Activo:',
      'Passivo:',
    ],
    datasets: [{
      label: 'Total KZ',
      data: [+300, -100],
      color: 'white',
      backgroundColor: [
        'blueviolet',
        'rgba(28, 33, 30, 0.842)'
      ],
      borderColor: 'rgba(0, 0, 0, 0.489)',
      hoverOffset: 4
    }]
  }
});
