// Data for the Kerbol System
// This section defines the data for the Kerbol System, including the star (Kerbol), planets, and moons. Each celestial body has properties such as name, type, image, description, statistics, and ambient audio.
const kerbol = {
    name: "Kerbol",
    type: "Star",

    image:
        "images/planets/kerbol.png",

    description:
        "Parent Star of the Kerbol System. It is the most well known object in the daytime sky. Scientists have noted a particular burning sensation and potential loss of vision if it is stared at for long periods of time. Impossible to land on, but not tested during nighttime.",

    stats: {
        Diameter: "523,200 km",
        "Equatorial Circumference": "1,643,362 km",
        Mass: "Placeholder",
        Temperature: "5,840 K",
        "Star Type": "Does Not Fit Any Stellar Classification?",
        "Number of Planets": "5",
        "Number of Dwarf Planets:": "2",
    },

    audio:
        "audio/planet_ambiance/kerbol.mp3"
};

// Planets and Moons
// This array contains the data for each planet and its moons in the Kerbol System.
const planets = [

    {
        name: "Moho",
        type: "Planet",
        x: 13,
        size: 25,
        image: "images/planets/moho.png",
        description: "Third smallest and closest planet to Kerbol. Moho figures in Kerbal mythology as a fiery place with oceans of flowing lava. In reality however, it's much less interesting. Scientists speculate about possible ways to make it awesome like in the stories. Some of those ideas have led to new breakthroughs in aerospace technology. Inclined, eccentric orbit with no atmposhere, alongside with the close proximity to Kerbol, makes it a difficult target for interplanetary missions.",
        stats: {
            "Equatorial Diameter": "3,030 km",
            "Surface Gravity": "2.67 m/s²",
            Atmosphere: "None",
            "Approximate Surface Temperature": "573 K"
        },
        audio: "audio/planet_ambiance/moho.mp3"
    },

    {
        name: "Eve",
        type: "Planet",
        x: 20,
        size: 88,
        image: "images/planets/eve.png",
        description: "Second planet from Kerbol. It is considered by some to be almost a sister planet to Kerbin. Well, despite the purple, and the toxic atmosphere, and the extreme pressures and temperatures. Actually, it is not very similar at all, is it? Eve has the greatest surface gravity of all the planets, and the second highest escape velocity. It is also the only planet with a significant atmosphere that is not breathable by Kerbals. Eve has one moon, Gilly, which is a small, irregularly shaped body with very low gravity.",
        stats: {
            "Equatorial Diameter": "7,176 km",
            "Surface Gravity": "8.90 m/s²",
            "Approximate Surface Temperature": "408 K",
            Atmosphere: "Extremely thick and dense. Sea-level pressure of 5 Atmospheres."
        },
        audio: "audio/planet_ambiance/eve.mp3",

        moons: [
            {
                name: "Gilly",
                type: "Moon",
                size: 12,
                image: "images/moons/gilly.png",
                description: "The only natural satellite of Eve and smallest celestial body in the Kerbol System. Due to the large amount of squinting and eye strain associated with its discovery, wearing glasses has now become synonymous with being an accomplished Astronomer. This moon is also considered to be an captured asteroid.",
                stats: {
                    "Approximate Equatorial Diameter": "26 km",
                    "Surface Gravity": "0.05 m/s²",
                    Parent: "Eve"
                },
                audio: "audio/planet_ambiance/gilly.mp3"
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
            "Equatorial Diameter": "Placeholder",
            "Surface Gravity": "Placeholder",
            Atmosphere: "Placeholder"
        },
        audio: "audio/planet_ambiance/kerbin.mp3",

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
                audio: "audio/planet_ambiance/Kerbin_moon.mp3"
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
                audio: "audio/planet_ambiance/Kerbin_moon.mp3"
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
        audio: "audio/planet_ambiance/duna.mp3",

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
                audio: "audio/planet_ambiance/ike.mp3"
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
        audio: "audio/planet_ambiance/dres.mp3"
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
        audio: "audio/planet_ambiance/jool.mp3",

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
                audio: "audio/planet_ambiance/jool_moon.mp3"
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
                audio: "audio/planet_ambiance/jool_moon.mp3"
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
                audio: "audio/planet_ambiance/jool_moon.mp3"
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
                audio: "audio/planet_ambiance/jool_moon.mp3"
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
                audio: "audio/planet_ambiance/jool_moon.mp3"
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
        audio: "audio/planet_ambiance/eeloo.mp3"
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

const creditsButton =document.getElementById("credits-button");
const creditsPanel =document.getElementById("credits-panel");
const creditsClose =document.getElementById("credits-close");

// Button for Kerbol (Sun)
// This section adds an event listener to the Kerbol button, allowing users to select it and view its information when clicked.
if (kerbolButton) {
    kerbolButton.addEventListener("click", () => {
        selectBody(kerbolButton);
        showInfo(kerbol);
    });
}

// Open credits
creditsButton.addEventListener("click", () => {
        creditsPanel.classList.add(
            "open");
    }
);

// Close credits
creditsClose.addEventListener("click", () => {
    creditsPanel.classList.remove("open");
    }
);

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

// Show Information
// This function displays the information panel for a selected celestial body, populating it with the relevant data and playing the associated ambient audio.
function showInfo(body) {
    if (!infoPanel) return;

    infoImage.src = body.image || "";
    infoImage.alt = body.name || "";

    infoName.textContent = body.name || "Unknown";
    infoType.textContent = body.type || "Celestial Body";
    infoDescription.textContent = body.description || "No description available.";

    // Clear and rebuild the statistics.
    infoStatistics.innerHTML = "";

    if (body.stats) {
        for (const [name, value] of Object.entries(body.stats)) {
            const row = document.createElement("div");
            row.className = "stat-row";

            const statName = document.createElement("span");
            statName.className = "stat-name";
            statName.textContent = name;

            const statValue = document.createElement("span");
            statValue.className = "stat-value";
            statValue.textContent = value;

            row.append(statName, statValue);
            infoStatistics.appendChild(row);
        }
    }

    // Load and play the body's ambient track.
    ambientPlayer.pause();

    if (body.audio) {
        ambientName.textContent = body.name + " Ambient";

        // Only reload when switching to a different file.
        const nextSource = new URL(body.audio, window.location.href).href;

        if (ambientPlayer.src !== nextSource) {
            ambientPlayer.src = body.audio;
            ambientPlayer.load();
        }

        ambientPlayer.play().catch(error => {
            // The panel still works even if the audio file is missing
            // or the browser refuses playback.
            console.warn("Could not play ambient audio:", error);
        });
    } else {
        ambientName.textContent = "No ambient track";
        ambientPlayer.removeAttribute("src");
        ambientPlayer.load();
    }

    infoPanel.classList.add("open");
    infoPanel.setAttribute("aria-hidden", "false");
}

// Select Body
// This function highlights the selected celestial body by adding a "selected" class to it and removing that class from any previously selected bodies.
function selectBody(body) {
    document
        .querySelectorAll(".selected")
        .forEach(element => {
            element.classList.remove("selected");
        });


    body.classList.add("selected");
}

// Close Information
// This function closes the information panel and stops any ambient audio that is playing.
function closeInfo() {
    infoPanel.classList.remove("open");
    infoPanel.setAttribute("aria-hidden", "true");

    ambientPlayer.pause();

    document
        .querySelectorAll(".selected")
        .forEach(element => {
            element.classList.remove("selected");
        });
}


if (infoClose) {
    infoClose.addEventListener("click", closeInfo);
}

// Close Info Panel on Escape Key
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeInfo();
    }
});