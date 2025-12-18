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
    bio: `
    With a Master’s from Paris-Sorbonne and a BBA from Northwood University (Swiss Campus), 
    Hassan brings more than 15 years of industry experience across hospitality, hotels, and F&B 
    development. 
    <div class="bio-divider"> </div>
    <p>
      He is known for his structured approach, clear decision-making, and ability to turn 
      complex ideas into operationally strong concepts that scale, bringing a structured, analytical, 
      and results-driven mindset to every project.
    </p>
    ` 
  },
  {
    name: "Girish Rao",
    role: "Partner <br> IMEA",
    image: "src/teams/girish.png",
    bio: `With over 25 years of experience in HVAC and commercial kitchen ventilation, Girish leads the 
    delivery of innovative, sustainable, and high-performance solutions across the IMEA region. 
    <div class="bio-divider"> </div>
    <p>
      He oversees complex projects for hotels, restaurants, cloud kitchens, and industrial food facilities, 
      combining technical depth with strategic leadership.
    </p>`  
  },
  {
    name: "Miran Štirn",
    role: "Partner Europe",
    image: "src/teams/miran.png",
    bio: `With a Bachelor’s degree in Mechanical Engineering and nearly 30 years of experience in the 
    catering equipment industry, Miran is a serial entrepreneur with deep expertise in kitchen 
    innovation. 
    <div class="bio-divider"> </div>
    <p>
      He previously served as Owner and CEO of a modular kitchen manufacturing 
      company and founded Kopa Grilling Solutions and Kook Show Kitchen, focusing on advanced 
      grilling and front-of-house cooking concepts.
    </p>`  
  },
  {
    name: "Paul Richards",
    role: "Technical Director",
    image: "src/teams/paul.png",
    bio: `
    Paul brings more than 35 years of experience in the Middle East across commercial HVAC and 
    kitchen ventilation systems. 
    <div class="bio-divider"> </div>
    <p>
    Known for his hands-on approach, he ensures energy-efficient, 
    compliant, and high-performance solutions, supporting the successful execution of large-scale 
    hospitality and infrastructure projects.
    </p>
    `
  },
  {
    name: "Jayadev Kalliat",
    role: "Director of Operations",
    image: "src/teams/jayadev.png",
    bio: `
    With a background in mechanical engineering and over 17 years of experience across the GCC, 
    Jayadev specializes in commercial refrigeration and kitchen equipment manufacturing. 
    <div class="bio-divider"> </div>
    <p>
    He oversees technical management, strategic sourcing and procurement, and end-to-end project 
    delivery for high-end hospitality, retail, and residential developments.
    </p>
    `
  },
  {
    name: "Ivan Garbas",
    role: "Production Director",
    image: "src/teams/ivan.png",
    bio: `A mechanical engineer with 27 years of experience, Ivan began his career in a leading Slovenian 
    modular kitchen manufacturer, later becoming Head of R&D. 
           <div class="bio-divider"> </div>
    <p>
    An independent entrepreneur since 
    2000, he combines hands-on technical expertise with leadership in sheet metal production and 
    product development.
       </p>
    `
  },
  {
    name: "Branislav Vorgic",
    role: "Director of Technology",
    image: "src/teams/branislav.png",
    bio: `With 20 years of experience in commercial kitchen equipment production and R&D, Branislav is a 
    seasoned expert in product development and manufacturing optimization. 
       <div class="bio-divider"> </div>
    <p>
    He plays a key role in 
    driving innovation, improving production efficiency, and enhancing equipment quality across the 
    group’s portfolio.
        </p>
    `
  },
  {
    name: "Filippo Maria Genovesi",
    role: "Commercial Director",
    image: "src/teams/filippo.png",
    bio: `
    With over a decade of specialized experience in the GCC, Filippo combines strong commercial 
    leadership with technical expertise in front-of-house display solutions. 
    <div class="bio-divider"> </div>
    <p>
    As Commercial Director, 
    he drives growth strategy, builds long-term partnerships, and leads sales initiatives across 
    complex hospitality and foodservice projects.
    </p>
    `
  },
  {
    name: "Hasnae El Horma",
    role: "Supply Chain Manager",
    image: "src/teams/hasnae.png",
    bio: `With several years of experience in the professional kitchen equipment industry, Hasnae plays a 
    key role across supply chain coordination and internal operations. 
               <div class="bio-divider"> </div>
    <p>
    She supports multiple 
    departments and ensures continuity, efficiency, and reliability across daily business activities.
     </p>
    `
  },
  {
    name: "Darko Josimov",
    role: "R&D Manager",
    image: "src/teams/darko.png",
    bio: `With over 25 years of experience, Darko has spent the last 13 years focused on the design and 
    development of commercial kitchen equipment, including refrigeration, cooking, and extraction 
    systems, supporting hospitality and foodservice sectors across Europe and the Middle East.`
  },
  {
    name: "Beatrice Trevisan",
    role: "Brand Manager",
    image: "src/teams/beatrice.png",
    bio: `With over ten years of experience across leading industry brands, Beatrice has developed a 
    strong foundation in business development with a focus on the Middle Eastern market. 
           <div class="bio-divider"> </div>
    <p>
    Driven 
    and analytical, she leads brand growth initiatives, aligning commercial strategy with operational 
    execution.
    </p>`
  },
  {
    name: "Jihane El Fady",
    role: "Brand Manager",
    image: "src/teams/jihane.png",
    bio: `With six years of regional experience, Jihane leads business development initiatives in advanced 
    kitchen and ventilation systems across the GCC. 
           <div class="bio-divider"> </div>
    <p>
    Her strategic insight, strong industry 
    relationships, and involvement in high-profile hospitality projects contribute to sustained brand 
    growth and market presence.
    </p>
    `
  },
  {
    name: "Katerina Moroz",
    role: "Business Development Manager",
    image: "src/teams/katerina.png",
    bio: `With over ten years of experience in hospitality and the commercial kitchen industry, Katerina 
    specializes in business development and client relations, contributing to strategic partnerships, 
    market expansion, and operational excellence across the UAE.`
  },
  {
    name: "Ali Anouty",
    role: "Brand Manager",
    image: "src/teams/ali.png",
    bio: `Holding an MBA from the American University, Ali brings five years of experience across sales, 
    procurement, and production operations. 
               <div class="bio-divider"> </div>
    <p>
    He supports the group through effective business 
    development, process optimization, and strong client relationship management.
     </p>
    `
  },
  {
    name: "Joelle Osta",
    role: "Marketing Manager",
    image: "src/teams/joelle.png",
    bio: `With over a decade of experience in graphic design and marketing, Joelle combines creative 
    vision with strategic thinking. 
               <div class="bio-divider"> </div>
    <p>
    With more than three years in the commercial kitchen industry, she 
    leads brand strategy, visual communication, and marketing initiatives across the group.
        </p>
    `
  },
  {
    name: "Aymen Chemli",
    role: "Design Manager",
    image: "src/teams/aymen.png",
    bio: `A graduate of the University of Art and Design in Tunisia, Aymen brings 23 years of experience 
    across interior design, product design, and kitchen manufacturing. 
               <div class="bio-divider"> </div>
    <p>
    His expertise bridges creative 
    vision with technical execution, delivering production-ready, high-quality F&B design solutions.
     </p>
    `
  },
  {
    name: "Nirupama Rao",
    role: "Director of Finance & HR",
    image: "src/teams/nirupama.png",
    bio: `With an MBA and 25 years of experience across UAE banking and the HVAC industry, Nirupama 
    leads finance and HR functions, supporting business growth through financial planning, 
    regulatory compliance, talent development, and people-focused leadership`
  },
  {
    name: "Abed Kawahaty",
    role: "Expert Manager",
    image: "src/teams/abed.png",
    bio: `Holding a BA in International Hospitality and over 20 years of experience, Abed specializes in 
    sales and business development, supporting Nexus Kitchen Group’s growth and market 
    leadership across the GCC.`
  },
  {
    name: "Jasmin D.Ronquillo",
    role: "Commercial Support Manager",
    image: "src/teams/jasmin.png",
    bio: `As a detail-driven commercial support professional, Jasmin strengthens documentation, 
    reporting discipline, and workflow efficiency. 
               <div class="bio-divider"> </div>
    <p>
    She supports sales and project teams by 
    maintaining strong client relationships, improving data accuracy, and ensuring smooth revenue 
    operations.
     </p>
    `
  },
  {
    name: "Khasim Hussain",
    role: "Technical Manager",
    image: "src/teams/khasim.png",
    bio: `With 12 years of experience in the manufacturing industry, Khasim specializes in front-of-house 
    kitchen solutions, bar design, and project coordination. 
               <div class="bio-divider"> </div>
    <p>
    His leadership ensures functional, 
    innovative designs that enhance customer experience and operational efficiency.
    </p>
    `
  },
  {
    name: "Perly Massaad",
    role: "Digital Marketing Executive",
    image: "src/teams/perly.png",
    bio: `With over ten years of experience in graphic design and marketing, Perly manages digital content 
    and social media initiatives. 
                   <div class="bio-divider"> </div>
    <p>
    Her work enhances brand visibility, engagement, and creative 
    consistency across platforms and campaigns.
      </p>
    `
  },
  {
    name: "Tawfiq Suleiman",
    role: "Aftersales Service Manager",
    image: "src/teams/tawfiq.png",
    bio: `With extensive experience in professional kitchen equipment and aftersales operations, Tawfiq 
    oversees service coordination, maintenance planning, and customer support, ensuring long-term 
    performance and high levels of client satisfaction.`
  },
  {
    name: "Ganesh Raja",
    role: "R&D Executive",
    image: "src/teams/ganesh.png",
    bio: `With over 14 years of experience in commercial kitchen equipment fabrication, Ganesh 
    specializes in product research, development, and optimization. 
                   <div class="bio-divider"> </div>
    <p>
    Proficient in advanced 3D CAD 
    tools, he supports innovation-driven, high-performance product solutions.
    </p>
    `
  },
  {
    name: "Clara Dagher",
    role: "Product Engineer",
    image: "src/teams/clara.png",
    bio: `With a background in industrial engineering, Clara brings strong technical expertise to her role as 
    Product Engineer. 
               <div class="bio-divider"> </div>
    <p>
    She supports operations through accurate cost analysis, project evaluation, 
    and solution development, contributing to operational efficiency and informed decision-making 
    across projects.
        </p>
    `
  },
  {
    name: "Francis Prable",
    role: "Estimation Manager",
    image: "src/teams/francis.png",
    bio: `A mechanical engineer with over ten years of experience in the foodservice industry, Francis 
    specializes in tender estimation, procurement coordination, and multi-brand project execution 
    across the GCC region.`
  },
  {
    name: "Jayadeep Kalliat",
    role: "Project Manager",
    image: "src/teams/jayadeep.png",
    bio: `A mechanical engineering professional with over seven years of experience in the commercial 
    refrigeration sector, Jayadeep specializes in operations and project management, delivering 
    customer-focused solutions and ensuring efficient execution across complex technical projects.`
  },
  {
    name: "Muhammed Nafih",
    role: "Accounting Manager",
    image: "src/teams/nafih.png",
    bio: `A Certified Management Accountant with eight years of experience in FP&A and cost accounting, 
    Nafih supports budgeting, forecasting, financial controls, and analysis, providing actionable 
    insights that strengthen profitability, cash flow, and strategic decision-making.`
  },
  {
    name: "Matej Zupančič",
    role: "Production Manager",
    image: "src/teams/matej.png",
    bio: `With a strong background in professional kitchen equipment production, Matej manages 
    manufacturing processes, workflow optimization, and quality standards, ensuring consistent and 
    efficient production across Kopa grilling solutions.`
  },
  {
    name: "Joy Prakash Rodrigues",
    role: "Sales Manager",
    image: "src/teams/joy.png",
    bio: `A mechanical engineer with over 15 years of experience in the UAE, Joy specializes in sales and 
    operations, supporting major F&B projects from design development through execution and 
    handover across the Middle East.`
  },
  {
    name: "Avinash Natarajan",
    role: "Country Manager, India",
    image: "src/teams/avinash.png",
    bio: `With 20 years of hospitality experience across the UAE and India, Avinash leads business 
    development and end-to-end project delivery, strengthening partnerships and ensuring 
    consistent execution across regional operations.`
  },
  {
    name: "Vipul Sharma",
    role: "Project & Service Manager",
    image: "src/teams/vipul.png",
    bio: `With over 13 years of experience across India and the Middle East, Vipul specializes in project 
    management, installation, and testing and commissioning, ensuring regulatory compliance and 
    seamless site execution.`
  },
  {
    name: "Dejan Škrjanc",
    role: "Plant Manager",
    image: "src/teams/dejan.png",
    bio: `With extensive experience in professional kitchen equipment manufacturing, Dejan oversees 
    plant operations, production efficiency, and quality control, supporting the delivery of high-
    performance grilling and cooking solutions.`
  },
  {
    name: "Vijaykumar Kolachi",
    role: "Sales & Operations Manager, India",
    image: "src/teams/vijaykumar.png",
    bio: `With over seven years of experience in commercial kitchen ventilation, Vijay leads sales and 
    operations in India, delivering tailored solutions while ensuring smooth coordination with 
    consultants and contractors.`
  },
  {
    name: "Aleš Smrekar",
    role: "R&D Manager",
    image: "src/teams/ales.png",
    bio: `With 20 years of experience, Aleš began his career as a technician before advancing to Head of 
    R&D. 
                   <div class="bio-divider"> </div>
    <p>
    Known for innovation in sheet metal design, he delivers practical engineering solutions that 
    enhance production efficiency.
    </p>
    `
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
          <p>${member.bio}</p>
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
