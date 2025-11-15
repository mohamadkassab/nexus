document.addEventListener('DOMContentLoaded', function () {
  // Select all the detail buttons
  const detailsButtons = document.querySelectorAll('.details-button');

  detailsButtons.forEach(button => {
    // Add a click event listener to each button
    button.addEventListener('click', () => {
      // Find the parent card of the button that was clicked
      const card = button.closest('.team-member-card');
      
      // Check if the card is already active
      const isActive = card.classList.contains('is-active');

      // First, close any other cards that might be open
      document.querySelectorAll('.team-member-card.is-active').forEach(activeCard => {
        // Only remove the class if it's not the card we just clicked
        if (activeCard !== card) {
          activeCard.classList.remove('is-active');
        }
      });

      // Now, toggle the active state for the clicked card
      if (isActive) {
        card.classList.remove('is-active'); // If it was active, close it
      } else {
        card.classList.add('is-active'); // If it was not active, open it
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  
  const toggleBtn = document.getElementById('toggleTeamBtn');
  const teamSection = document.querySelector('.team-section');
  const teamGrid = document.getElementById('teamGrid');

  if (toggleBtn && teamSection) {
    
    toggleBtn.addEventListener('click', function() {
      
      // Check if the section is currently expanded
      const isExpanded = teamSection.classList.contains('is-expanded');

      if (!isExpanded) {
        // --- ACTION: SHOW ALL ---
        teamSection.classList.add('is-expanded');
        toggleBtn.textContent = "Show Less";
      } else {
        // --- ACTION: SHOW LESS ---
        teamSection.classList.remove('is-expanded');
        toggleBtn.textContent = "View All";

        // Optional: Smooth scroll back to the top of the grid
        // This prevents the user from being stranded at the bottom of the page
        teamGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      
    });
  }
});
