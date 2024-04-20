// popup.js

function showCVPopup(id) {
  // Hide all popups
  hideAllPopups();

  // Show the specified popup
  document.getElementById(id).style.display = 'block';
  
  // Add class to the CV menu item
  document.getElementById('cv-link').classList.add('active');
}

function showWorkPopup(id) {
  // Hide all popups
  hideAllPopups();

  // Show the specified popup
  document.getElementById(id).style.display = 'block';
  
  // Add class to the Work menu item
  document.getElementById('work-link').classList.add('active');
}

function showEducationPopup(id) {
  // Hide all popups
  hideAllPopups();

  // Show the specified popup
  document.getElementById(id).style.display = 'block';
  
  // Add class to the Work menu item
  document.getElementById('work-link').classList.add('active');
}

function showSkillPopup(id) {
  // Hide all popups
  hideAllPopups();

  // Show the specified popup
  document.getElementById(id).style.display = 'block';
  
  // Add class to the Work menu item
  document.getElementById('work-link').classList.add('active');
}


function showLanguagePopup(id) {
  // Hide all popups
  hideAllPopups();

  // Show the specified popup
  document.getElementById(id).style.display = 'block';
  
  // Add class to the Work menu item
  document.getElementById('work-link').classList.add('active');
}

function showProjectPopup(id) {
  // Hide all popups
  hideAllPopups();

  // Show the specified popup
  document.getElementById(id).style.display = 'block';
  
  // Add class to the Work menu item
  document.getElementById('work-link').classList.add('active');
}

function showContactPopup(id) {
  // Hide all popups
  hideAllPopups();

  // Show the specified popup
  document.getElementById(id).style.display = 'block';
  
  // Add class to the Contact menu item
  document.getElementById('contact-link').classList.add('active');
}

function hidePopup(id) {
  document.getElementById(id).style.display = 'none';
  
  // Remove active class from all menu items
  var menuItems = document.querySelectorAll('nav ul li a');
  menuItems.forEach(function (item) {
    item.classList.remove('active');
  });
}

function hideAllPopups() {
  var popups = document.querySelectorAll('.popup');
  popups.forEach(function (popup) {
    popup.style.display = 'none';
  });
}