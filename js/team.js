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


const teamData = [
  {
    name: "Hassan Anouti",
    role: "CEO",
    image: "src/teams/hassan.png",
    bio: "With a Master’s from Paris-Sorbonne and a BBA from Northwood University (Swiss Campus), Hassan brings more than 15 years of industry experience across hospitality, hotels, and F&B development.<br><br>He is known for his structured approach, clear decision-making, and ability to turn complex ideas into operationally strong concepts that scale, bringing a structured, analytical, and results-driven mindset to every project."
  },
  {
    name: "Girish Rao",
    role: "Managing Partner <br> IMEA",
    image: "src/teams/girish.png",
    bio: "With a Master’s from Paris-Sorbonne and a BBA from Northwood University (Swiss Campus), Hassan brings more than 15 years of industry experience across hospitality, hotels, and F&B development.<br><br> He is known for his structured approach, clear decision-making, and ability to turn complex ideas into operationally strong concepts that scale, bringing a structured, analytical, and results-driven mindset to every project."                      
  },
  {
    name: "Miran Štirn",
    role: "Partner Europe",
    image: "src/teams/miran.png",
    bio: "With a Master’s from Paris-Sorbonne and a BBA from Northwood University (Swiss Campus), Hassan brings more than 15 years of industry experience across hospitality, hotels, and F&B development.<br><br> He is known for his structured approach, clear decision-making, and ability to turn complex ideas into operationally strong concepts that scale, bringing a structured, analytical, and results-driven mindset to every project."                                               
  },
  {
    name: "Paul Richards",
    role: "Technical Director",
    image: "src/teams/paul.png",
    bio: ""
  },
  {
    name: "Jayadev Kalliat",
    role: "Director of Operations",
    image: "src/teams/jayadev.png",
    bio: ""  
  },
  {
    name: "Ivan",
    role: "Production Director",
    image: "src/teams/ivan.png",
    bio: ""  
  },
  {
    name: "Branislav Vorgic",
    role: "Director of Technology",
    image: "src/teams/branislav.png",
    bio: ""  
  },
    {
    name: "Branislav Vorgic",
    role: "Director of Technology",
    image: "src/teams/branislav.png",
    bio: ""  
  },
    {
    name: "Filippo Maria Genovesi",
    role: "Commercial Director",
    image: "src/teams/filippo.png",
    bio: ""
  },
  {
    name: "Hasnae El Horma",
    role: "Supply Chain Manager",
    image: "src/teams/hasnae.png",
    bio: ""
  },
  {
    name: "Darko Josimov",
    role: "R&D Manager",
    image: "src/teams/darko.png",
    bio: ""
  },
  {
    name: "Beatrice Trevisan",
    role: "Brand Manager",
    image: "src/teams/beatrice.png",
    bio: ""
  },
  {
    name: "Jihane El Fady",
    role: "Brand Manager",
    image: "src/teams/jihane.png",
    bio: ""
  },
  {
    name: "Katerina Moroz",
    role: "Business Development Manager",
    image: "src/teams/katerina.png",
    bio: ""
  },
  {
    name: "Ali Anouty",
    role: "Brand Manager",
    image: "src/teams/ali.png",
    bio: ""
  },
  {
    name: "Joelle Osta",
    role: "Marketing Manager",
    image: "src/teams/joelle.png",
    bio: ""
  },
  {
    name: "Aymen Chemli",
    role: "Design Manager",
    image: "src/teams/aymen.png",
    bio: ""
  },
  {
    name: "Sasa",
    role: "Administration Manager",
    image: "src/teams/sasa.png",
    bio: ""
  },
  {
    name: "Nirupama Rao",
    role: "Director of Finance & HR",
    image: "src/teams/nirupama.png",
    bio: ""
  },
  {
    name: "Abed Kawahaty",
    role: "Expert Manager",
    image: "src/teams/abed.png",
    bio: ""
  },
  {
    name: "Jasmin D.Ronquillo",
    role: "Commercial Support Manager",
    image: "src/teams/jasmin.png",
    bio: ""
  },
  {
    name: "Khasim Hussain",
    role: "Technical Manager",
    image: "src/teams/khasim.png",
    bio: ""
  },
  {
    name: "Perly Massaad",
    role: "Digital Marketing Executive",
    image: "src/teams/perly.png",
    bio: ""
  },
  {
    name: "Tawfiq Suleiman",
    role: "Aftersales Service Manager",
    image: "src/teams/tawfiq.png",
    bio: ""
  },
  {
    name: "Ganesh Raja",
    role: "R&D Executive",
    image: "src/teams/ganesh.png",
    bio: ""
  },
  {
    name: "Clara Dagher",
    role: "Product Engineer",
    image: "src/teams/clara.png",
    bio: ""
  },
  {
    name: "Francis Prable",
    role: "Estimation Manager",
    image: "src/teams/francis.png",
    bio: ""
  },
  {
    name: "Jayadeep Kalliat",
    role: "Project Manager",
    image: "src/teams/jayadeep.png",
    bio: ""
  },
  {
    name: "Muhammed Nafih",
    role: "Accounting Manager",
    image: "src/teams/nafih.png",
    bio: ""
  },
  {
    name: "Matej",
    role: "Production Manager",
    image: "src/teams/matej.png",
    bio: ""
  },
  {
    name: "Joy Prakash Rodrigues",
    role: "Sales Manager",
    image: "src/teams/joy.png",
    bio: ""
  },
  {
    name: "Avinash Natarajan",
    role: "Country Manager, India",
    image: "src/teams/avinash.png",
    bio: ""
  },
  {
    name: "Vipul Sharma",
    role: "Project & Service Manager",
    image: "src/teams/vipul.png",
    bio: ""
  },
  {
    name: "Dejan",
    role: "Plant Manager",
    image: "src/teams/dejan.png",
    bio: ""
  },
  {
    name: "Vijaykumar Kolachi",
    role: "Sales & Operations Manager, India",
    image: "src/teams/vijaykumar.png",
    bio: ""
  },
  {
    name: "Ales",
    role: "R&D Manager",
    image: "src/teams/ales.png",
    bio: ""
  }
];

// Select the container
const container = document.getElementById('team-grid');

// Function to generate cards
function renderTeam() {
  // Map over the data and convert objects into HTML strings
  const cardsHTML = teamData.map(member => {
    return `
      <div class="team-member-card">
        <img class="team-member-image" src="${member.image}" alt="${member.name}" />
        <div class="team-member-overlay">
          <p class="team-member-name">${member.name}</p>
          <p class="team-member-role">${member.role}</p>
          <p class="team-member-bio">${member.bio}</p>
        </div>
        <button class="details-button">
          <span class="plus-icon">+</span>
          <span class="minus-icon">-</span>
        </button>
        <div class="mobile-nav-arrow">&#10095;</div>
      </div>
    `;
  }).join(''); // Join the array into a single string

  // Inject into the DOM
  container.innerHTML = cardsHTML;
}

// Run the function
renderTeam();
