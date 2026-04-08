const places = [
  {
    name: "Chamundi Hills",
    image: "chamundi.jpg",
    description: "Sacred temple perched atop a scenic hill with panoramic views of Mysore city",
    location: "13 km from city center",
    rating: 4.8,
    type: "Temple & Nature"
  },
  {
    name: "Brindavan Gardens",
    image: "brindavan gardens.webp",
    description: "Magnificent terraced gardens with fountains and evening light show",
    location: "20 km from city center",
    rating: 4.7,
    type: "Gardens"
  },
  {
    name: "Srirangapatna",
    image: "srirangapatana.jpg",
    description: "Historic island town with ancient temples and Tipu Sultan's palace",
    location: "15 km from city center",
    rating: 4.6,
    type: "Historical"
  },
  {
    name: "Ranganathittu Bird Sanctuary",
    image: "ranganathittu bird sanctuary.jpg",
    description: "Serene bird sanctuary on the Kaveri River with diverse avian species",
    location: "17 km from city center",
    rating: 4.5,
    type: "Wildlife"
  },
  {
    name: "St. Philomena's Cathedral",
    image: "st philomena church.jpg",
    description: "Stunning Neo-Gothic cathedral with remarkable architecture and stained glass",
    location: "City center",
    rating: 4.7,
    type: "Architecture"
  },
  {
    name: "Karanji Lake",
    image: "Karanji Lake.webp",
    description: "Picturesque lake perfect for boating and enjoying sunset views",
    location: "5 km from city center",
    rating: 4.4,
    type: "Nature"
  },
  {
    name: "Mysore Zoo",
    image: "zooo.png",
    description: "One of India's oldest zoos with diverse wildlife and well-maintained habitats",
    location: "City center",
    rating: 4.6,
    type: "Zoo"
  },
  {
    name: "Talakadu",
    image: "Talakadu.webp",
    description: "Ancient ruins and temples on the banks of the Kaveri River with historical significance",
    location: "45 km from city center",
    rating: 4.5,
    type: "Historical"
  }
];

const grid = document.getElementById("placesGrid");

places.forEach((place, index) => {
  const card = document.createElement("div");
  card.className = "card";

  const stars = "⭐".repeat(Math.floor(place.rating));
  
  card.innerHTML = `
    <div class="card-image-wrapper">
      <img src="${place.image}" alt="${place.name}">
      <div class="card-badge">${place.type}</div>
    </div>
    <div class="card-content">
      <h3>${place.name}</h3>
      <p class="card-description">${place.description}</p>
      <div class="card-location">
        📍 ${place.location}
      </div>
      <div class="card-rating">
        ${stars}
        <span style="color: #999; font-size: 0.9rem;">(${place.rating})</span>
      </div>
      <button class="card-btn" onclick="alert('More information about ${place.name} coming soon!')">Learn More</button>
    </div>
  `;

  grid.appendChild(card);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
