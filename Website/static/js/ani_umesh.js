function animateIntroText() {
  var introText = document.getElementById('intro-text');
  var text = introText.textContent;
  introText.innerHTML = '';
  for (var i = 0; i < text.length; i++) {
    var span = document.createElement('span');
    span.className = 'letter';
    span.textContent = text[i];
    introText.appendChild(span);
  }
  // Trigger the animation
  setTimeout(function () {
    var letters = document.getElementsByClassName('letter');
    for (var i = 0; i < letters.length; i++) {
      letters[i].style.animationDelay = (i * 0.1) + 's';
    }
    introText.style.opacity = '1';
  }, 100);
}

// Initial animation
animateIntroText();

// Repeat the animation every 4 seconds
setInterval(function() {
  // Reset opacity to 0 to restart the animation
  document.getElementById('intro-text').style.opacity = '0';
  // Wait for a short delay before restarting the animation
  setTimeout(animateIntroText, 100);
}, 5000);
