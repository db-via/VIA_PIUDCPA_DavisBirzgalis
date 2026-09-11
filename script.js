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