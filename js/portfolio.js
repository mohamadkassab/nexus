const portfolioItems = [
    {
        id: "signor-sassi",
        title: "Signor Sassi",
        location: "Dubai, United Arab Emirates",
        brand: "DARC&nbsp;&nbsp;|&nbsp;&nbsp;NORTH",
        image: "src/portfolio/north.webp"
    },
    {
        id: "regent-hotel",
        title: "Regent Hotel",
        location: "Taipei, Taiwan",
        brand: "KOOK",
        image: "src/portfolio/kook new 4.webp"
    },
    {
        id: "baoli",
        title: "Bâoli",
        location: "Dubai, United Arab Emirates",
        brand: "AVANTE&nbsp;&nbsp;|&nbsp;&nbsp;KOPA&nbsp;&nbsp;|&nbsp;&nbsp;NORTH",
        image: "src/portfolio/kopa 6.webp"
    },
    {
        id: "macau",
        title: "Macau",
        location: "China",
        brand: "KOPA",
        image: "src/portfolio/kopa 2.webp"
    },
    {
        id: "birch",
        title: "Birch",
        location: "Dubai, United Arab Emirates",
        brand: "DARC",
        image: "src/portfolio/darc 1.webp"
    },

    {
        id: "radisson-collection-hotel",
        title: "Radisson Collection Hotel",
        location: "Brussels, Belgium",
        brand: "KOOK",
        image: "src/portfolio/kook new 3.webp"
    },
    {
        id: "gaggan-anand-restaurant",
        title: "Gaggan Anand Restaurant",
        location: "Bangkok, Thailand",
        brand: "KOPA",
        image: "src/portfolio/kopa new 2.webp"
    },
    {
        id: "ciel-bleu-restaurant",
        title: "Ciel Bleu Restaurant",
        location: "Amsterdam, Netherlands",
        brand: "KOPA",
        image: "src/portfolio/kopa new 1.webp"
    },
    {
        id: "gloria-osteria",
        title: "Gloria Osteria",
        location: "Dubai, United Arab Emirates",
        brand: "AVANTE",
        image: "src/portfolio/avante 2.webp"
    },
    {
        id: "frantzen",
        title: "Frantzén",
        location: "Stockholm, Sweden",
        brand: "KOPA&nbsp;&nbsp;|&nbsp;&nbsp;KOOK",
        image: "src/portfolio/kopa 3.webp"
    },
    {
        id: "amadeo-by-oberoi",
        title: "Amadeo By Oberoi",
        location: "Mumbai, India",
        brand: "DARC&nbsp;&nbsp;|&nbsp;&nbsp;NORTH",
        image: "src/portfolio/darc and north new 1.webp"
    },
    {
        id: "sheraton-cebu-mactan-resort",
        title: "Sheraton Cebu Mactan Resort",
        location: "Cebu, Philippines",
        brand: "KOPA",
        image: "src/portfolio/kopa new 3.webp"
    },
    {
        id: "lola-brasserie",
        title: "Lola Brasserie",
        location: "Jeddah, Saudi Arabia",
        brand: "AVANTE&nbsp;&nbsp;|&nbsp;&nbsp;KOPA",
        image: "src/portfolio/kopa 1.webp"
    },
    {
        id: "ganache-chocolatier",
        title: "Ganache Chocolatier",
        location: "Dubai, United Arab Emirates",
        brand: "DARC",
        image: "src/portfolio/darc 2.webp"
    },
    {
        id: "w-hotel",
        title: "W Hotel",
        location: "Maldives",
        brand: "AVANTE",
        image: "src/portfolio/avante 4.webp"
    },
    {
        id: "time-out-market",
        title: "Time Out Market",
        location: "Manama, Bahrain",
        brand: "AVANTE",
        image: "src/portfolio/avante 6.webp"
    },
    {
        id: "hilton-the-hague",
        title: "Hilton The Hague",
        location: "Den Haag, Netherlands",
        brand: "KOOK",
        image: "src/portfolio/kook new 2.webp"
    },
    {
        id: "marina-bay-sands",
        title: "Marina Bay Sands Hotel",
        location: "Singapore",
        brand: "KOOK",
        image: "src/portfolio/kook 2.webp"
    },
    {
        id: "amazonico",
        title: "Amazonico",
        location: "Dubai, United Arab Emirates",
        brand: "DARC",
        image: "src/portfolio/darc 3.webp"
    },
    {
        id: "autograph-collection-by-marriott",
        title: "Autograph Collection by Marriott",
        location: "Nanjing, China",
        brand: "KOOK",
        image: "src/portfolio/kook new 1.webp"
    },
    {
        id: "angelina-paris",
        title: "Angelina Paris",
        location: "Dubai, United Arab Emirates",
        brand: "DARC",
        image: "src/portfolio/darc 5.webp"
    },
    {
        id: "mondrian-hotel",
        title: "Mondrian Hotel",
        location: "Duxton, Singapore",
        brand: "KOOK",
        image: "src/portfolio/kook 4.webp"
    },
    {
        id: "ristorante-loren",
        title: "Ristorante Loren",
        location: "Dubai, United Arab Emirates",
        brand: "AVANTE",
        image: "src/portfolio/avante 1.webp"
    },
    {
        id: "marriott-hotel",
        title: "Marriott Hotel",
        location: "Daegu, South Korea",
        brand: "KOPA",
        image: "src/portfolio/kopa 5.webp"
    },
    {
        id: "berber",
        title: "Berber",
        location: "Dubai, United Arab Emirates",
        brand: "AVANTE",
        image: "src/portfolio/avante 3.webp"
    },

    {
        id: "trident-hotel",
        title: "Trident Hotel",
        location: "Mumbai India",
        brand: "AVANTE",
        image: "src/portfolio/avante 5.webp"
    }
];

function renderPortfolio() {
    const container = document.getElementById('gallery-carousel-2');
    if (!container) return;

    let html = '';

    portfolioItems.forEach(item => {
        html += `
          <div id="${item.id}" class="item">
            <div class="pimcore_area_text-image-full-width pimcore_area_content ">
              <section class="area-text-image-full ">
                <div class="row">
                  <div class="container">

                    <div class="col-xs-12 text-wrapper">
                      <h2 class="slider-title">
                        ${item.title}
                      </h2>
                      <div class="portfolio-paragraph">
                        <p class="slider-paragraph">
                          ${item.location}
                        </p>
                        <p class="slider-brand">
                          ${item.brand}
                        </p>
                      </div>
                      <div class="col-xs-12 image-wrapper">
                        <img alt="${item.title}" title="${item.title}" src="${item.image}">
                      </div>
                    </div>
                  </div>
              </section>
            </div>
          </div>
        `;
    });

    container.innerHTML = html;
}

// Render immediately so it is ready for Slick init
renderPortfolio();
