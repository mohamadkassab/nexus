function initCollapsible() {
      const collapsibles = document.querySelectorAll('.collapsible');
      
      collapsibles.forEach(item => {
        const mainSpan = item.querySelector('.main');
        const iconPlus = item.querySelector('.icon-plus');
        const iconMinus = item.querySelector('.icon-minus');
        
        // Click handler for the main span
        const toggleCollapsible = () => {
          // Only work on mobile (768px or less)
          if (window.innerWidth <= 768) {
            item.classList.toggle('active');
          }
        };
        
        mainSpan.addEventListener('click', toggleCollapsible);
        
        // Also allow clicking the icons themselves
        if (iconPlus) {
          iconPlus.addEventListener('click', toggleCollapsible);
        }
        if (iconMinus) {
          iconMinus.addEventListener('click', toggleCollapsible);
        }
      });
    }

    // Initialize on page load
    initCollapsible();

    // Handle window resize to ensure proper behavior when switching between mobile/desktop
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        // Remove active class on desktop view
        if (window.innerWidth > 768) {
          document.querySelectorAll('.collapsible').forEach(item => {
            item.classList.remove('active');
          });
        }
      }, 250);
    });