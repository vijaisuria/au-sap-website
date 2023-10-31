// Sample data for the chart
const data = {
    labels: ['Company A', 'Company B', 'Company C', 'Company D','Company E'],
    datasets: [
        {
            label: '2020',
            data: [10, 15, 7, 12,5],
            backgroundColor: 'rgba(37, 150, 190,0.5)',
            stack: 'total'
          },
      
        {
        label: '2021',
        data: [10, 15, 7, 12,6],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        stack: 'total'
      },
      {
        label: '2022',
        data: [8, 10, 5, 9,7],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        stack: 'total'
      },
    ],
  };
  
  // Create the bar chart
  const ctx = document.getElementById('placement-chart').getContext('2d');
  const placementChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        x: {
          beginAtZero: true,
        },
      },
    },
  });
  