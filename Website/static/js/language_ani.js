// Array of colors for animation
var colors = ['#ff0000', '#00ff00', '#0000ff'];
var currentIndex = 0;

// Function to change text color with animation
function changeTextColor() {
  var languageList = document.getElementById('languageList');
  var languageItems = languageList.getElementsByTagName('li');
  
  // Change color for each language item
  for (var i = 0; i < languageItems.length; i++) {
    languageItems[i].style.color = colors[currentIndex];
  }
  
  // Update current index
  currentIndex = (currentIndex + 1) % colors.length;
}

// Call the function repeatedly with a delay
setInterval(changeTextColor,500); // Change color every 1 second