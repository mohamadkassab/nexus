const portfolioItems = [
    {
        id: "birch",
        title: "Birch",
        location: "Dubai, United Arab Emirates",
        brand: "DARC",
        image: "src/portfolio/darc 1.webp"
    },
    {
        id: "macau",
        title: "Macau",
        location: "China",
        brand: "KOPA",
        image: "src/portfolio/kopa 2.webp"
    },
    {
        id: "gloria-osteria",
        title: "Gloria Osteria",
        location: "Dubai, United Arab Emirates",
        brand: "AVANTE",
        image: "src/portfolio/avante 2.webp"
    },
    {
        id: "mandarin-oriental-hotel",
        title: "Mandarin Oriental Hotel",
        location: "Abu Dhabi, United Arab Emirates",
        brand: "KOOK",
        image: "src/portfolio/kook 1.webp"
    },
    {
        id: "lola-brasserie",
        title: "Lola Brasserie",
        location: "Jeddah, Saudi Arabia",
        brand: "AVANTE&nbsp;&nbsp;|&nbsp;&nbsp;KOPA",
        image: "src/portfolio/kopa 1.webp"
    },
    {
        id: "the-meat-co",
        title: "The Meat Co.",
        location: "Zahra, Kuwait",
        brand: "AVANTE",
        image: "src/portfolio/avante 7.webp"
    },
    {
        id: "ganache-chocolatier",
        title: "Ganache Chocolatier",
        location: "Dubai, United Arab Emirates",
        brand: "DARC",
        image: "src/portfolio/darc 2.webp"
    },
    {
        id: "time-out-market",
        title: "Time Out Market",
        location: "Manama, Bahrain",
        brand: "AVANTE",
        image: "src/portfolio/avante 6.webp"
    },
    {
        id: "signor-sassi",
        title: "Signor Sassi",
        location: "Dubai, United Arab Emirates",
        brand: "DARC&nbsp;&nbsp;|&nbsp;&nbsp;NORTH",
        image: "src/portfolio/north.webp"
    },
    {
        id: "frantzen",
        title: "Frantzén",
        location: "Stockholm, Sweden",
        brand: "KOPA",
        image: "src/portfolio/kopa 3.webp"
    },
    {
        id: "ristorante-loren",
        title: "Ristorante Loren",
        location: "Dubai, United Arab Emirates",
        brand: "AVANTE",
        image: "src/portfolio/avante 1.webp"
    },
    {
        id: "amazonico",
        title: "Amazonico",
        location: "Dubai, United Arab Emirates",
        brand: "DARC",
        image: "src/portfolio/darc 3.webp"
    },
    {
        id: "copa-25h-hotel",
        title: "Copa, 25H Hotel",
        location: "Jakarta, Indonesia",
        brand: "KOOK",
        image: "src/portfolio/kook 3.webp"
    },
    {
        id: "timeless",
        title: "Timeless",
        location: "Dubai, United Arab Emirates",
        brand: "NORTH",
        image: "src/portfolio/north 3.webp"
    },
    {
        id: "w-hotel",
        title: "W Hotel",
        location: "Maldives",
        brand: "AVANTE",
        image: "src/portfolio/avante 4.webp"
    },
    {
        id: "baoli",
        title: "Bâoli",
        location: "Dubai, United Arab Emirates",
        brand: "AVANTE&nbsp;&nbsp;|&nbsp;&nbsp;KOPA&nbsp;&nbsp;|&nbsp;&nbsp;NORTH",
        image: "src/portfolio/kopa 6.webp"
    },
    {
        id: "mondrian-hotel",
        title: "Mondrian Hotel",
        location: "Duxton, Singapore",
        brand: "KOOK",
        image: "src/portfolio/kook 4.webp"
    },
    {
        id: "sofitel-hotel",
        title: "Sofitel Hotel & Convention Centre",
        location: "Riyadh, Saudi Arabia",
        brand: "DARC",
        image: "src/portfolio/darc 4.webp"
    },
    {
        id: "courtyard-marriott",
        title: "Courtyard by Marriott",
        location: "Colva, Goa, India",
        brand: "NORTH",
        image: "src/portfolio/north 2.webp"
    },
    {
        id: "marriott-hotel",
        title: "Marriott Hotel",
        location: "Daegu, South Korea",
        brand: "KOPA",
        image: "src/portfolio/kopa 5.webp"
    },
    {
        id: "angelina-paris",
        title: "Angelina Paris",
        location: "Dubai, United Arab Emirates",
        brand: "DARC",
        image: "src/portfolio/darc 5.webp"
    },
    {
        id: "marina-bay-sands",
        title: "Marina Bay Sands Hotel",
        location: "Singapore",
        brand: "KOOK",
        image: "src/portfolio/kook 2.webp"
    },
    {
        id: "berber",
        title: "Berber",
        location: "Dubai, United Arab Emirates",
        brand: "AVANTE",
        image: "src/portfolio/avante 3.webp"
    },
    {
        id: "the-cave",
        title: "The Cave",
        location: "Nanjing, China",
        brand: "KOPA",
        image: "src/portfolio/kopa 4.webp"
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
                      <div class="collaboration-paragraph">
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
