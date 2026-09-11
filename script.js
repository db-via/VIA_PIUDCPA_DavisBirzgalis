// Kerbol Data
const kerbol = {
    name: "Kerbol",
    type: "Star",

    image:
        "images/planets/kerbol.png",

    description:
        "Placeholder information about Kerbol. Replace this with information about the star.",

    stats: {
        Diameter: "Placeholder",
        Mass: "Placeholder",
        Temperature: "Placeholder",
        "Star Type": "Placeholder",
        "Number of Planets": "7"
    },

    audio:
        "audio/kerbol.mp3"
};

// Planet Data
// This section defines an array of planet objects, each containing information about the planet, its moons (if any), and associated audio files.
const planets = [

    {
        name: "Moho",
        type: "Planet",
        x: 13,
        size: 25,
        image: "images/planets/moho.png",
        description: "Placeholder information about Moho.",
        stats: {
            Diameter: "Placeholder",
            Gravity: "Placeholder",
            Atmosphere: "Placeholder"
        },
        audio: "audio/moho.mp3"
    },

    {
        name: "Eve",
        type: "Planet",
        x: 20,
        size: 88,
        image: "images/planets/eve.png",
        description: "Placeholder information about Eve.",
        stats: {
            Diameter: "Placeholder",
            Gravity: "Placeholder",
            Atmosphere: "Placeholder"
        },
        audio: "audio/eve.mp3",

        moons: [
            {
                name: "Gilly",
                type: "Moon",
                size: 12,
                image: "images/moons/gilly.png",
                description: "Placeholder information about Gilly.",
                stats: {
                    Diameter: "Placeholder",
                    Gravity: "Placeholder",
                    Parent: "Eve"
                },
                audio: "audio/gilly.mp3"
            }
        ]
    },

    {
        name: "Kerbin",
        type: "Planet",
        x: 30,
        size: 66,
        image: "images/planets/kerbin.png",
        description: "Placeholder information about Kerbin.",
        stats: {
            Diameter: "Placeholder",
            Gravity: "Placeholder",
            Atmosphere: "Placeholder"
        },
        audio: "audio/kerbin.mp3",

        moons: [
            {
                name: "Mun",
                type: "Moon",
                size: 15,
                image: "images/moons/mun.png",
                description: "Placeholder information about Mun.",
                stats: {
                    Diameter: "Placeholder",
                    Gravity: "Placeholder",
                    Parent: "Kerbin"
                },
                audio: "audio/Kerbin_moon.mp3"
            },

            {
                name: "Minmus",
                type: "Moon",
                size: 10,
                image: "images/moons/minmus.png",
                description: "Placeholder information about Minmus.",
                stats: {
                    Diameter: "Placeholder",
                    Gravity: "Placeholder",
                    Parent: "Kerbin"
                },
                audio: "audio/Kerbin_moon.mp3"
            }
        ]
    },

    {
        name: "Duna",
        type: "Planet",
        x: 41,
        size: 47,
        image: "images/planets/duna.png",
        description: "Placeholder information about Duna.",
        stats: {
            Diameter: "Placeholder",
            Gravity: "Placeholder",
            Atmosphere: "Placeholder"
        },
        audio: "audio/duna.mp3",

        moons: [
            {
                name: "Ike",
                type: "Moon",
                size: 16,
                image: "images/moons/ike.png",
                description: "Placeholder information about Ike.",
                stats: {
                    Diameter: "Placeholder",
                    Gravity: "Placeholder",
                    Parent: "Duna"
                },
                audio: "audio/ike.mp3"
            }
        ]
    },

    {
        name: "Dres",
        type: "Planet",
        x: 53,
        size: 30,
        image: "images/planets/dres.png",
        description: "Placeholder information about Dres.",
        stats: {
            Diameter: "Placeholder",
            Gravity: "Placeholder",
            Atmosphere: "Placeholder"
        },
        audio: "audio/dres.mp3"
    },

    {
        name: "Jool",
        type: "Planet",
        x: 69,
        size: 190,
        image: "images/planets/jool.png",
        description: "Placeholder information about Jool.",
        stats: {
            Diameter: "Placeholder",
            Gravity: "Placeholder",
            Atmosphere: "Placeholder"
        },
        audio: "audio/jool.mp3",

        moons: [
            {
                name: "Laythe",
                type: "Moon",
                size: 32,
                image: "images/moons/laythe.png",
                description: "Placeholder information about Laythe.",
                stats: {
                    Gravity: "Placeholder",
                    Parent: "Jool"
                },
                audio: "audio/jool_moon.mp3"
            },

            {
                name: "Vall",
                type: "Moon",
                size: 25,
                image: "images/moons/vall.png",
                description: "Placeholder information about Vall.",
                stats: {
                    Gravity: "Placeholder",
                    Parent: "Jool"
                },
                audio: "audio/jool_moon.mp3"
            },

            {
                name: "Tylo",
                type: "Moon",
                size: 31,
                image: "images/moons/tylo.png",
                description: "Placeholder information about Tylo.",
                stats: {
                    Gravity: "Placeholder",
                    Parent: "Jool"
                },
                audio: "audio/jool_moon.mp3"
            },

            {
                name: "Bop",
                type: "Moon",
                size: 13,
                image: "images/moons/bop.png",
                description: "Placeholder information about Bop.",
                stats: {
                    Gravity: "Placeholder",
                    Parent: "Jool"
                },
                audio: "audio/jool_moon.mp3"
            },

            {
                name: "Pol",
                type: "Moon",
                size: 16,
                image: "images/moons/pol.png",
                description: "Placeholder information about Pol.",
                stats: {
                    Gravity: "Placeholder",
                    Parent: "Jool"
                },
                audio: "audio/jool_moon.mp3"
            }
        ]
    },

    {
        name: "Eeloo",
        type: "Planet",
        x: 91,
        size: 25,
        image: "images/planets/eeloo.png",
        description: "Placeholder information about Eeloo.",
        stats: {
            Diameter: "Placeholder",
            Gravity: "Placeholder",
            Atmosphere: "Placeholder"
        },
        audio: "audio/eeloo.mp3"
    }
];

// HTML Elements
// This section retrieves references to various HTML elements that will be used in the script.
const kerbolButton = document.getElementById("kerbol"); // The Kerbol (Sun) button
const planetContainer = document.getElementById("planet-container"); // The container for the planet buttons
const starField = document.getElementById("star-field"); // The star field background

const infoPanel = document.getElementById("info-panel"); // The information panel that displays details about the selected celestial body
const infoClose = document.getElementById("info-close"); // The close button for the information panel

const infoImage = document.getElementById("info-image"); // The image element in the information panel
const infoName = document.getElementById("info-name"); // The name element in the information panel
const infoType = document.getElementById("info-type"); // The type element in the information panel
const infoDescription = document.getElementById("info-description"); // The description element in the information panel
const infoStatistics = document.getElementById("info-statistics"); // The statistics element in the information panel

const ambientPlayer = document.getElementById("ambient-player"); // The audio player for ambient sounds
const ambientName = document.getElementById("ambient-name"); // The name element for the ambient sound

// Generate Stars
// This section creates a star field background by generating multiple star elements with random properties.
for (let i = 0; i < 300; i++) {
    const star = document.createElement("div");

    star.className = "background-star";

    const size = Math.random() * 2 + 0.5;

    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.setProperty("--minimum-opacity", "0.15");
    star.style.setProperty("--maximum-opacity", "0.8");
    star.style.setProperty("--twinkle-speed", Math.random() * 5 + 3 + "s");

    starField.appendChild(star);
}

// Create Planet Systems
// This section creates the planet systems by iterating over the planets array and generating the necessary HTML elements for each planet.
planets.forEach(planet => {
    const system = document.createElement("div");

    system.className = "planet-system";
    system.style.left = planet.x + "%";

    system.style.setProperty(
        "--planet-width",
        planet.size + "px"
    );

    system.style.setProperty(
        "--planet-height",
        planet.size + "px"
    );

    const button = document.createElement("button");

    button.className = "planet";
    button.type = "button";

    const image = document.createElement("img");

    image.src = planet.image;
    image.alt = planet.name;

    button.appendChild(image);

    const label = document.createElement("div");

    label.className = "planet-label";
    label.textContent = planet.name;

    button.addEventListener("click", () => {
        selectBody(button);
        showInfo(planet);
    });

    system.appendChild(button);
    system.appendChild(label);

    if (planet.moons) {
        createMoons(system, planet);
    }

    planetContainer.appendChild(system);
});

// Create Moons
// This function creates the moons for a given planet by generating the necessary HTML elements and positioning them appropriately.
function createMoons(system, planet) {
    const spacing = 48;

    const firstMoon =
        planet.size / 2 + 40;

    const line = document.createElement("div");

    line.className = "moon-line";

    line.style.height =
        firstMoon +
        spacing * (planet.moons.length - 1)
        - planet.size / 2 +
        "px";

    system.appendChild(line);

    planet.moons.forEach((moon, index) => {
        const y =
            firstMoon +
            spacing * index;

        const button =
            document.createElement("button");

        button.className = "moon";
        button.type = "button";

        button.style.top = y + "px";

        button.style.setProperty(
            "--moon-width",
            moon.size + "px"
        );

        button.style.setProperty(
            "--moon-height",
            moon.size + "px"
        );


        const image =
            document.createElement("img");

        image.src = moon.image;
        image.alt = moon.name;

        button.appendChild(image);

        const label =
            document.createElement("div");

        label.className = "moon-label";

        label.textContent = moon.name;

        label.style.top = y + "px";

        label.style.setProperty(
            "--moon-label-offset",
            moon.size / 2 + 12 + "px"
        );

        button.addEventListener("click", () => {
            selectBody(button);
            showInfo(moon);
        });


        system.appendChild(button);
        system.appendChild(label);
    });
}