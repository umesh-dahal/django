document.addEventListener('DOMContentLoaded', function() {
    // Function to handle smooth scrolling to sections
    function scrollToSection(sectionId) {
      // Get the target section
      var section = document.getElementById(sectionId);
      // Calculate the offset considering the height of the navbar
      var offset = section.offsetTop - document.querySelector('.navbar').offsetHeight;
      // Scroll to the section with smooth behavior
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  
    // Add click event listeners to navbar links
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        // Prevent default link behavior
        event.preventDefault();
        // Get the target section id from the href attribute
        var targetSectionId = link.getAttribute('href').substring(1);
        // Scroll to the target section
        scrollToSection(targetSectionId);
      });
    });
  });
  