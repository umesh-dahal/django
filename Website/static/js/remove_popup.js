function showCVPopup(id) {
    // Hide all popups
    var popups = document.querySelectorAll('.popup');
    popups.forEach(function(popup) {
      popup.style.display = 'none';
    });
    
    // Show the specified popup
    document.getElementById(id).style.display = 'block';
  }
  
  function showContactPopup(id) {
    // Hide all popups
    var popups = document.querySelectorAll('.popup');
    popups.forEach(function(popup) {
      popup.style.display = 'none';
    });
    
    // Show the specified popup
    document.getElementById(id).style.display = 'block';
  }
  
  function hidePopup(id) {
    document.getElementById(id).style.display = 'none';
  }