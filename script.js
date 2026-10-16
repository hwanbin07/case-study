
const cities = {
    Japan: {
        title: "JAPAN",
        subtitle: "Discover the beauty, culture, and flavors of Japan.",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1800&q=85"
    },
    Tokyo: {
        title: "TOKYO",
        subtitle: "Experience modern city life, shopping districts, and Japanese pop culture.",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1800&q=85"
    },
    Osaka: {
        title: "OSAKA",
        subtitle: "Explore famous street food, lively shopping streets, and exciting attractions.",
        image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1800&q=85"
    },
    Fukuoka: {
        title: "FUKUOKA",
        subtitle: "Enjoy Hakata ramen, local food stalls, historic shrines, and lively city streets.",
        image: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?auto=format&fit=crop&w=1800&q=85"
    },
    Okinawa: {
        title: "OKINAWA",
        subtitle: "Explore tropical beaches, island traditions, and beautiful ocean scenery.",
        image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1800&q=85"
    }
};

const travelInfo = {
    Japan: {
        stay: {
            title: "Where to Stay in Japan",
            items: [
                {
                    name: "City Hotels",
                    description: "Stay near train stations for convenient access to major attractions.",
                    images: ["images/japan-hotel-1.jpg", "images/japan-hotel-2.jpg"]
                },
                {
                    name: "Traditional Ryokan",
                    description: "Experience Japanese hospitality and traditional-style rooms.",
                    images: ["images/ryokan-1.jpg", "images/ryokan-2.jpg"]
                }
            ]
        },
        food: {
            title: "Must-Try Food in Japan",
            items: [
                {
                    name: "Sushi",
                    description: "Enjoy Japanese rice and fresh seafood prepared with care.",
                    image: "images/japan-sushi.jpg"
                },
                {
                    name: "Ramen",
                    description: "Try noodles served in a variety of rich and flavorful broths.",
                    image: "images/japan-ramen.jpg"
                },
                {
                    name: "Tempura",
                    description: "Taste lightly battered and fried seafood or vegetables.",
                    image: "images/japan-tempura.jpg"
                }
            ]
        },
        culture: {
            title: "Japanese Culture",
            items: [
                ["Temples and Shrines", "Visit historic religious sites and peaceful gardens."],
                ["Traditional Festivals", "Discover seasonal celebrations and local traditions."],
                ["Japanese Arts", "Explore crafts, calligraphy, and traditional performing arts."]
            ]
        }
    },

    Tokyo: {
        stay: {
            title: "Where to Stay in Tokyo",
            items: [
                {
                    name: "Shinjuku Hotels",
                    description: "Stay near shopping, restaurants, and major train stations.",
                    images: ["images/tokyo-hotel-1.jpg", "images/tokyo-hotel-2.jpg"]
                },
                {
                    name: "Shibuya Hotels",
                    description: "Explore fashionable neighborhoods and famous city attractions.",
                    images: ["images/shibuya-hotel-1.jpg", "images/shibuya-hotel-2.jpg"]
                }
            ]
        },
        food: {
            title: "Must-Try Food in Tokyo",
            items: [
                {
                    name: "Sushi",
                    description: "Try sushi restaurants ranging from casual spots to traditional counters.",
                    image: "images/tokyo-sushi.jpg"
                },
                {
                    name: "Monjayaki",
                    description: "A savory, soft-textured dish associated with Tokyo's Tsukishima area.",
                    image: "images/tokyo-monjayaki.jpg"
                },
                {
                    name: "Ramen",
                    description: "Discover different noodle styles and regional broth flavors.",
                    image: "images/tokyo-ramen.jpg"
                }
            ]
        },
        culture: {
            title: "Discover Tokyo",
            items: [
                ["Senso-ji Temple", "Explore a famous temple in the historic Asakusa district."],
                ["Shibuya Crossing", "Experience one of Tokyo's most recognizable urban landmarks."],
                ["Harajuku", "Discover street fashion, creative shops, and Japanese pop culture."]
            ]
        }
    },

    Osaka: {
        stay: {
            title: "Where to Stay in Osaka",
            items: [
                {
                    name: "Namba Hotels",
                    description: "Stay close to Dotonbori, shopping streets, and famous restaurants.",
                    images: ["images/osaka-hotel-1.jpg", "images/osaka-hotel-2.jpg"]
                },
                {
                    name: "Umeda Hotels",
                    description: "Choose a hotel near major train connections and shopping malls.",
                    images: ["images/umeda-hotel-1.jpg", "images/umeda-hotel-2.jpg"]
                }
            ]
        },
        food: {
            title: "Must-Try Food in Osaka",
            items: [
                {
                    name: "Takoyaki",
                    description: "Round batter snacks traditionally filled with octopus.",
                    image: "images/osaka-takoyaki.jpg"
                },
                {
                    name: "Okonomiyaki",
                    description: "A savory pancake made with cabbage and various toppings.",
                    image: "images/osaka-okonomiyaki.jpg"
                },
                {
                    name: "Kushikatsu",
                    description: "Skewered ingredients coated in breadcrumbs and deep-fried.",
                    image: "images/osaka-kushikatsu.jpg"
                }
            ]
        },
        culture: {
            title: "Discover Osaka",
            items: [
                ["Osaka Castle", "Explore one of the city's best-known historic landmarks."],
                ["Dotonbori", "See colorful signs, lively streets, and famous food spots."],
                ["Shinsekai", "Discover a retro neighborhood known for its distinctive atmosphere."]
            ]
        }
    },

    Fukuoka: {
        stay: {
            title: "Where to Stay in Fukuoka",
            items: [
                {
                    name: "Hakata Hotels",
                    description: "Stay near the main station for convenient transportation.",
                    images: ["images/hakata-hotel-1.jpg", "images/hakata-hotel-2.jpg"]
                },
                {
                    name: "Tenjin Hotels",
                    description: "Choose a central area with shops, cafes, and restaurants.",
                    images: ["images/tenjin-hotel-1.jpg", "images/tenjin-hotel-2.jpg"]
                }
            ]
        },
        food: {
            title: "Must-Try Food in Fukuoka",
            items: [
                {
                    name: "Hakata Ramen",
                    description: "Known for its thin noodles and rich pork-bone broth.",
                    image: "images/fukuoka-ramen.jpg"
                },
                {
                    name: "Motsunabe",
                    description: "A hot pot dish made with offal, vegetables, and broth.",
                    image: "images/motsunabe.jpg"
                },
                {
                    name: "Mentaiko",
                    description: "Seasoned pollock roe often served with rice or noodles.",
                    image: "images/mentaiko.jpg"
                }
            ]
        },
        culture: {
            title: "Discover Fukuoka",
            items: [
                ["Ohori Park", "Enjoy a relaxing walk around the scenic park lake."],
                ["Kushida Shrine", "Discover a historic shrine connected to local festivals."],
                ["Yatai Food Stalls", "Experience Fukuoka's outdoor food-stall culture in the evening."]
            ]
        }
    },

    Okinawa: {
        stay: {
            title: "Where to Stay in Okinawa",
            items: [
                {
                    name: "Naha City Hotels",
                    description: "Stay near Kokusai Street, restaurants, shopping, and public transportation.",
                    images: ["images/naha-hotel-1.jpg", "images/naha-hotel-2.jpg"]
                },
                {
                    name: "Hilton Okinawa Chatan Resort",
                    description: "Enjoy resort-style pools and convenient access to Mihama American Village.",
                    images: ["images/hilton-resort-1.jpg", "images/hilton-resort-2.jpg"]
                }
            ]
        },
        food: {
            title: "Must-Try Food in Okinawa",
            items: [
                {
                    name: "Okinawa Soba",
                    description: "A local noodle dish with a distinctive wheat-based noodle.",
                    image: "images/okinawa-soba.jpg"
                },
                {
                    name: "Goya Champuru",
                    description: "A stir-fried dish commonly made with bitter melon, tofu, and other ingredients.",
                    image: "images/goya-champuru.jpg"
                },
                {
                    name: "Taco Rice",
                    description: "Rice topped with taco-seasoned ingredients and typical taco toppings.",
                    image: "images/taco-rice.jpg"
                }
            ]
        },
        culture: {
            title: "Discover Okinawa",
            items: [
                ["Shuri Castle", "Learn about the history of the Ryukyu Kingdom."],
                ["Traditional Ryukyu Culture", "Discover local music, dance, crafts, and island traditions."],
                ["Okinawa Beaches", "Enjoy the island's coastal scenery and beautiful ocean views."]
            ]
        }
    }
};

let currentCity = "Japan";

const heroImage = document.getElementById("hero-image");
const heroTitle = document.getElementById("hero-title");
const heroSubtitle = document.getElementById("hero-subtitle");

const infoPanel = document.getElementById("info-panel");
const infoTitle = document.getElementById("info-title");
const infoContent = document.getElementById("info-content");
const closePanel = document.getElementById("close-panel");

const sectionLabel = document.getElementById("section-label");
const sectionTitle = document.getElementById("section-title");
const sectionDescription = document.getElementById("section-description");

const nextButton = document.getElementById("next-button");
const nextWrap = document.querySelector(".next-wrap");
const homeLink = document.getElementById("home-link");

function changeCity(city) {
    if (!cities[city]) return;

    currentCity = city;

    heroImage.src = cities[city].image;
    heroImage.alt = cities[city].title;
    heroTitle.textContent = cities[city].title;
    heroSubtitle.textContent = cities[city].subtitle;

    infoPanel.hidden = true;

    if (nextWrap) {
        nextWrap.classList.remove("menu-open");
    }

    if (nextButton) {
        nextButton.setAttribute("aria-expanded", "false");
    }

    sectionLabel.textContent =
        city === "Japan" ? "DISCOVER JAPAN" : "WELCOME TO " + city.toUpperCase();

    sectionTitle.textContent =
        city === "Japan" ? "Discover Japan" : "Discover " + city;

    sectionDescription.textContent =
        city === "Japan"
            ? "Choose a category below to start planning your Japanese adventure."
            : cities[city].subtitle;
}

function showCategory(category) {
    const selected = travelInfo[currentCity]?.[category];

    if (!selected) return;

    infoTitle.textContent = selected.title;
    infoContent.replaceChildren();

    selected.items.forEach((item) => {
        const isArray = Array.isArray(item);
        const name = isArray ? item[0] : item.name;
        const description = isArray ? item[1] : item.description;

        const card = document.createElement("article");
        card.className = "info-card";

        // Display two photos side by side for lodging cards.
        if (!isArray && item.images) {
            const imageContainer = document.createElement("div");
            imageContainer.className = "hotel-images";

            item.images.forEach((imagePath, index) => {
                const img = document.createElement("img");
                img.src = imagePath;
                img.alt = name + " photo " + (index + 1);
                img.loading = "lazy";

                img.onerror = function () {
                    this.style.display = "none";
                };

                imageContainer.appendChild(img);
            });

            card.appendChild(imageContainer);
        } else if (!isArray && item.image) {
            const img = document.createElement("img");
            img.src = item.image;
            img.alt = name;
            img.className = "info-card-image";
            img.loading = "lazy";

            img.onerror = function () {
                this.style.display = "none";
            };

            card.appendChild(img);
        }

        const body = document.createElement("div");
        body.className = "info-card-body";

        const heading = document.createElement("h3");
        heading.textContent = name;

        const paragraph = document.createElement("p");
        paragraph.textContent = description;

        body.append(heading, paragraph);
        card.appendChild(body);
        infoContent.appendChild(card);
    });

    infoPanel.hidden = false;

    infoPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

document.querySelectorAll("[data-city]").forEach((button) => {
    button.addEventListener("click", () => {
        changeCity(button.dataset.city);
    });
});

document.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
        showCategory(button.dataset.category);
    });
});

if (nextButton && nextWrap) {
    nextButton.addEventListener("click", () => {
        const isOpen = nextWrap.classList.toggle("menu-open");
        nextButton.setAttribute("aria-expanded", String(isOpen));
    });
}

if (homeLink) {
    homeLink.addEventListener("click", (event) => {
        event.preventDefault();
        changeCity("Japan");
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

if (closePanel) {
    closePanel.addEventListener("click", () => {
        infoPanel.hidden = true;
    });
}

document.addEventListener("click", (event) => {
    if (nextWrap && !nextWrap.contains(event.target)) {
        nextWrap.classList.remove("menu-open");

        if (nextButton) {
            nextButton.setAttribute("aria-expanded", "false");
        }
    }
});

changeCity("Japan");
