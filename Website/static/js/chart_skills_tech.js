// Data for skills
var skillLabels = ['Excel', 'PowerBI', 'Python', 'Web Development', 'Statistics', 'Machine Learning'];
var skillScores = [4, 4, 4, 4, 3.5, 3.5];

// Create line chart
var ctx = document.getElementById('skillsChart').getContext('2d');
var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: skillLabels,
    datasets: [{
      label: 'Skill Level ',
      data: skillScores,
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 3 // Adjust the width of the line here
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
        ticks: {
          color: 'black', // Set the color of the y-axis labels to black
          font: {
            weight: 'bold', // Make the y-axis labels bold
            size: 14 // Increase the font size of y-axis labels
          }
        }
      },
      x: {
        ticks: {
          color: 'black', // Set the color of the x-axis labels to black
          font: {
            weight: 'bold', // Make the x-axis labels bold
            size: 14 // Increase the font size of x-axis labels
          }
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'black', // Set the color of the legend labels to black
          font: {
            weight: 'bold' // Make the legend labels bold
          }
        }
      }
    }
  }
});
