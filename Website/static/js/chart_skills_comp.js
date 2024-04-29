// Data for competencies
var competencyLabels = ['Analytical Thinking', 'Solution Orientiert', 'Planner', 'Implementation Capabilities', 'Team Work', 'Adaptable to Change'];
var competencyScores = [4.4, 4.3, 4.5, 4, 4.5, 4];

// Create radar chart
var ctx = document.getElementById('competenciesChart').getContext('2d');
var chart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: competencyLabels,
    datasets: [{
      label: 'Competency Level (out of 5)',
      data: competencyScores,
      borderColor: 'rgba(75, 192, 192, 1)',// Set the border color to black
      backgroundColor: 'rgba(75, 192, 192, 0.2)', // Set the background color to black with some transparency
      borderWidth: 3 // Adjust the thickness of the radar line here
    }]
  },
  options: {
    scales: {
      r: {
        beginAtZero: true,
        max: 5,
        angleLines: {
          color: 'black' // Set the color of the radar axis lines to black
        },
        pointLabels: {
          color: 'black', // Set the color of the radar axis labels to black
          font: {
            weight: 'bold', // Make the radar axis labels bold
            size: 14 // Increase the font size of the radar axis labels
          }
        },
        ticks: {
          color: 'black', // Set the color of the radar axis tick marks to black
          font: {
            weight: 'bold' // Make the radar axis tick marks bold
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
});
