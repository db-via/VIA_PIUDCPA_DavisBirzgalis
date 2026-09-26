// Data for the Kerbol System
// This section defines the data for the Kerbol System, including the star (Kerbol), planets, and moons. Each celestial body has properties such as name, type, image, description, statistics, and ambient audio.
const kerbol = {
    name: "Kerbol",
    type: "Star",
    image: "images/planets/kerbol.png",
    wiki: "https://wiki.kerbalspaceprogram.com/wiki/Kerbol",
    description: "Parent Star of the Kerbol System. It is the most well known object in the daytime sky. Scientists have noted a particular burning sensation and potential loss of vision if it is stared at for long periods of time. Impossible to land on, but not tested during nighttime or in winter.",
    stats: {
        Diameter: "523,200 km",
        "Equatorial Circumference": "1,643,362 km",
        Temperature: "5,840 K",
        "Star Type": "Does Not Fit Any Stellar Classification?",
        "Number of Planets": "5",
        "Number of Dwarf Planets:": "2",
    },
    audio: "audio/planet_ambiance/kerbol.mp3"
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
        wiki: "https://wiki.kerbalspaceprogram.com/wiki/Moho",
        description: "Moho figures in Kerbal mythology",
        stats: {
            "Equatorial Diameter": "3,030 km",
            "Surface Gravity": "2.70 m/s²",
            "Approximate Surface Temperature": "573 K",
            Atmosphere: "None"
        },
        audio: "audio/planet_ambiance/moho.mp3"
    },

    {
        name: "Eve",
        type: "Planet",
        x: 20,
        size: 88,
        image: "images/planets/eve.png",
        wiki: "https://wiki.kerbalspaceprogram.com/wiki/Eve",
        description: "It is considered by some to be almost a sister planet to Kerbin. Well, despite the purple, and the toxic atmosphere, and the extreme pressures and temperatures. Actually, it is not very similar at all, is it? It is the only planet with a walkable surface that has a significant atmosphere which is not breathable by Kerbals. Eve has one moon, Gilly.",
        stats: {
            "Equatorial Diameter": "1,400 km",
            "Surface Gravity": "16.7 m/s²",
            "Amount of Purple": "The Purplest Object.",
            Atmosphere: "Extremely thick and dense. Sea-level pressure of 5 Atmospheres."
        },
        audio: "audio/planet_ambiance/eve.mp3",

        moons: [
            {
                name: "Gilly",
                type: "Moon",
                size: 12,
                image: "images/moons/gilly.png",
                wiki: "https://wiki.kerbalspaceprogram.com/wiki/Gilly",
                description: "Gilly is a lumpy rock wandering around the orbit of Eve. It’s by far the smallest natural satellite and celestial body that the Kerbal Astronomical Society has discovered. Due to the large amount of squinting and eye strain associated with its discovery, wearing glasses has now become synonymous with being an accomplished Astronomer.",
                stats: {
                    "Approximate Equatorial Diameter": "26 km",
                    "Surface Gravity": "0.05 m/s²",
                    "Interestable?": "As interesting as its gravity allows it to be.",
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
        wiki: "https://wiki.kerbalspaceprogram.com/wiki/Kerbin",
        description: "A unique world, Kerbin has flat plains, soaring mountains and wide, blue oceans. Home to the Kerbals, it has just the right conditions to support a vast, seemingly undepletable population of the eager green creatures. Kerbin has two natural satellites, Mun and Minmus.",
        stats: {
            "Equatorial Diameter": "1,200 km",
            "Surface Gravity": "9.81 m/s²",
            "Approximate Surface Temperature": "288 K",
            "Signs of Life": "Stupid, Courageous and Eyelid-less Kerbals",
            Atmosphere: "Thick, warm and breathable atmosphere. Sea-level pressure of 1 Atmosphere."
        },
        audio: "audio/planet_ambiance/kerbin.mp3",

        moons: [
            {
                name: "Mun",
                type: "Moon",
                size: 15,
                image: "images/moons/mun.png",
                wiki: "https://wiki.kerbalspaceprogram.com/wiki/Mun",
                description: "A large satellite orbiting Kerbin. It is mostly gray in appearance, with craters of various sizes dotting its otherwise smooth surface. The Mun’s discovery is widely regarded as one of the more important breakthroughs of Kerbal evolution.",
                stats: {
                    "Equatorial Diameter": "400 km",
                    "Surface Gravity": "1.63 m/s²",
                    Parent: "Kerbin"
                },
                audio: "audio/planet_ambiance/Kerbin_moon.mp3"
            },

            {
                name: "Minmus",
                type: "Moon",
                size: 10,
                image: "images/moons/minmus.png",
                wiki: "https://wiki.kerbalspaceprogram.com/wiki/Minmus",
                description: "The smallest moon orbiting Kerbin. From the surface of Kerbin, it can be seen on clear days as a tiny blue speck in the sky. It is often mistaken as dirt on telescope lenses or dead pixels, but the top minds at the Kerbal Astronomical Society assure us it is a real moon nevertheless.",
                stats: {
                    "Equatorial Diameter": "120 km",
                    "Surface Gravity": "0.49 m/s²",
                    "Edibility": "Ice Cream appearance, surface samples not edible.",
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
        wiki: "https://wiki.kerbalspaceprogram.com/wiki/Duna",
        description: "Known as the red dot that you can see if you squint at it really hard, Duna has long been a wonder to Kerbalkind. The planet has been held in much awe, due to its striking red color and stark contrast to the color green. Duna orbits Kerbol with an inclination nearly identical to that of Kerbin, making it a prime target for interplanetary missions. Duna has one moon, Ike.",
        stats: {
            "Equatorial Diameter": "640 km",
            "Surface Gravity": "2.94 m/s²",
            "Martian Presence": "What's a Mars?",
            Atmosphere: "Thin, cool atmosphere."
        },
        audio: "audio/planet_ambiance/duna.mp3",

        moons: [
            {
                name: "Ike",
                type: "Moon",
                size: 16,
                image: "images/moons/ike.png",
                wiki: "https://wiki.kerbalspaceprogram.com/wiki/Ike",
                description: "Ike is a relatively large, grey object occasionally seen orbiting Duna. Scientists have postulated that Ike is seemingly perfectly positioned to sneakily interfere with any object that presumes to come orbiting near its parent.",
                stats: {
                    "Equatorial Diameter": "260 km",
                    "Surface Gravity": "1.10 m/s²",
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
        wiki: "https://wiki.kerbalspaceprogram.com/wiki/Dres",
        description: "Dres is a very small planet. It was the first planet considered to be a dwarf. Its orbit is highly irregular and, together with its size, it took a long time to discover since half the time it was not where scientists expected to find a planet. Due to its nature of frequenting the bad parts of space, this dwarf planet was officially labeled as “Not to be trusted” by the scientific community. Some astronomers have also noticed variations in gravitational measurements around Dres. While only slight, perhaps there is something more to this gray dwarf.",
        stats: {
            "Equatorial Diameter": "276 km",
            "Surface Gravity": "1.13 m/s²",
            "Plausability of Existence": "~50%",
            Atmosphere: "None"
        },
        audio: "audio/planet_ambiance/dres.mp3"
    },

    {
        name: "Jool",
        type: "Planet",
        x: 69,
        size: 190,
        image: "images/planets/jool.png",
        wiki: "https://wiki.kerbalspaceprogram.com/wiki/Jool",
        description: "Jool is particularly known for being a rather large, predominantly green planet. Kerbalkind has longed to visit it since it was first spotted in the sky. Philosophers reason that the swirling green planet must be a really nice place to visit, on account of its wholesome coloration. If you look at Jool through a telescope, it is fuzzy. Jool has the largest diameter and greatest mass of all planets in the Kerbol System. It has five moons, Laythe, Vall, Tylo, Bop and Pol.",
        stats: {
            "Equatorial Diameter": "12,000 km",
            "Surface Gravity": "7.85 m/s²",
            "Possibility of Surface": "How do you land on a gas giant?",
            Atmosphere: "Extremely dense, cold atmosphere."
        },
        audio: "audio/planet_ambiance/jool.mp3",

        moons: [
            {
                name: "Laythe",
                type: "Moon",
                size: 32,
                image: "images/moons/laythe.png",
                wiki: "https://wiki.kerbalspaceprogram.com/wiki/Laythe",
                description: "When Laythe was first discovered, it was not entered in the records because the scientist in charge thought he was looking at Kerbin. Luckily this error was corrected when a plucky intern informed him that “telescopes don’t work that way”. Laythe is the only moon in the Kerbol System with a significant atmosphere, and it is also the only celestial body besides Kerbin that has liquid oceans on its surface. The air does have a strange smell to it.",
                stats: {
                    "Equatorial Diameter": "1,000 km",
                    "Surface Gravity": "7.85 m/s²",
                    "Radioactivity": "High levels of Radiation due to Jool.",
                    Atmosphere: "Thick, warm and breathable enough atmosphere.",
                    Parent: "Jool"
                },
                audio: "audio/planet_ambiance/Laythe.mp3"
            },

            {
                name: "Vall",
                type: "Moon",
                size: 25,
                image: "images/moons/vall.png",
                wiki: "https://wiki.kerbalspaceprogram.com/wiki/Vall",
                description: "Vall was one of the last Moons of Jool to be discovered. Frustrated scientists kept attempting to wipe it off the lenses of their telescopes. Eventually after a rash of returned telescopes, Advanced Optics Co. finally decided to just tell them it was an actual object in the sky. Topical similarities to the Mun and Minmus.",
                stats: {
                    "Equatorial Diameter": "600 km",
                    "Surface Gravity": "2.31 m/s²",
                    Atmosphere: "None",
                    Parent: "Jool"
                },
                audio: "audio/planet_ambiance/Vall.mp3"
            },

            {
                name: "Tylo",
                type: "Moon",
                size: 31,
                image: "images/moons/tylo.png",
                wiki: "https://wiki.kerbalspaceprogram.com/wiki/Tylo",
                description: "The largest moon of Jool and the Kerbol System, and the largest celestial body without an atmosphere. Tylo was the first moon of Jool to be discovered by the Kerbal Astronomical Society. Similar gravity to Kerbin, but with no atmosphere, which makes it a difficult target for interplanetary missions.",
                stats: {
                    "Equatorial Diameter": "1,200 km",
                    "Surface Gravity": "7.85 m/s²",
                    "Crater Names": "Gagarin, Galileo, Gris- Who are these people?",
                    Atmosphere: "None",
                    Parent: "Jool"
                },
                audio: "audio/planet_ambiance/Tylo.mp3"
            },

            {
                name: "Bop",
                type: "Moon",
                size: 13,
                image: "images/moons/bop.png",
                wiki: "https://wiki.kerbalspaceprogram.com/wiki/Bop",
                description: "Bop is a small moon in the vicinity of Jool. In Kerbal mythology, Bop is believed to be the home of the Kraken, a mischievous creature said to play with the ships of hapless explorers, by spinning them out of control until torn asunder, then casting them into oblivion. Comparable to Minmus.",
                stats: {
                    "Equatorial Diameter": "130 km",
                    "Surface Gravity": "0.589 m/s²",
                    "Kraken Presence": "We don't talk about it.",
                    Atmosphere: "None",
                    Parent: "Jool"
                },
                audio: "audio/planet_ambiance/Bop.mp3"
            },

            {
                name: "Pol",
                type: "Moon",
                size: 16,
                image: "images/moons/pol.png",
                wiki: "https://wiki.kerbalspaceprogram.com/wiki/Pol",
                description: "This moon was especially hard to spot, as it looks just like a pollen grain, particularly when observed through telescopes based near dusty fields. Pol was finally discovered when someone decided to write down the location of the pollen, and noticed that it was moving in a way that pollen grains do not. Comparable to Gilly.",
                stats: {
                    "Equatorial Diameter": "88 km",
                    "Surface Gravity": "0.373 m/s²",
                    Atmosphere: "None",
                    Parent: "Jool"
                },
                audio: "audio/planet_ambiance/Pol.mp3"
            }
        ]
    },

    {
        name: "Eeloo",
        type: "Planet",
        x: 91,
        size: 25,
        image: "images/planets/eeloo.png",
        wiki: "https://wiki.kerbalspaceprogram.com/wiki/Eeloo",
        description: "There’s been a considerable amount of controversy around the status of Eeloo as being a proper planet or a just a “lump of ice going around the sun”. The debate is still ongoing, as most academic summits held to address the issue have devolved into, on good days, petty name calling, and on worse ones, all-out brawls. Nevertheless, it is one of the most distant objects in the Kerbol System, and is a small, icy world with a highly eccentric orbit.",
        stats: {
            "Equatorial Diameter": "420 km",
            "Surface Gravity": "1.69 m/s²",
            "Approximate Surface Temperature": "100 K",
            Atmosphere: "Teneous atmospheric coating."
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
const infoPrev = document.getElementById("info-prev");
const infoNext = document.getElementById("info-next");
const infoType = document.getElementById("info-type"); // The type element in the information panel
const infoDescription = document.getElementById("info-description"); // The description element in the information panel
const infoStatistics = document.getElementById("info-statistics"); // The statistics element in the information panel

const ambientPlayer = document.getElementById("ambient-player"); // The audio player for ambient sounds
const ambientName = document.getElementById("ambient-name"); // The name element for the ambient sound

const creditsButton =document.getElementById("credits-button");
const creditsPanel =document.getElementById("credits-panel");
const creditsClose =document.getElementById("credits-close");

const celestialBodies = [
    kerbol,
    ...planets.flatMap(planet => [
        planet,
        ...(planet.moons || [])
    ])
];

let currentBodyIndex = 0;

// Button for Kerbol (Sun)
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

    currentBodyIndex = celestialBodies.indexOf(body);

    infoImage.src = body.image || "";
    infoImage.alt = "Image of " + (body.name || "Unknown");
    infoImage.onclick = () => {
        console.log("Selected body: " + body.name);
    };
    infoImage.style.cursor = "zoom-in";

    infoImage.onclick = () => {
        if (body.wiki) {
            window.open(body.wiki, "_blank");
        }
    };

    infoImage.style.cursor = body.wiki ? "pointer" : "default";

    infoName.textContent =
        `${body.name || "Unknown"} (${currentBodyIndex + 1}/${celestialBodies.length})`;
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

function showPreviousBody() {
    currentBodyIndex--;

    if (currentBodyIndex < 0) {
        currentBodyIndex = celestialBodies.length - 1;
    }

    showInfo(celestialBodies[currentBodyIndex]);
}

function showNextBody() {
    currentBodyIndex++;

    if (currentBodyIndex >= celestialBodies.length) {
        currentBodyIndex = 0;
    }

    showInfo(celestialBodies[currentBodyIndex]);
}

infoPrev.addEventListener("click", showPreviousBody);
infoNext.addEventListener("click", showNextBody);