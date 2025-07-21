document.addEventListener("DOMContentLoaded", function() {
    const introSection = document.querySelector(".intro");
    const geoLocationImageContainer = document.getElementById("geo-location-image");
    const imageGrid = document.getElementById("image-grid");

    // Fetch information from Wikipedia API and images from Unsplash API
    fetchOceanInfo();
    fetchImages();

    async function fetchOceanInfo() {
        try {
            const response = await fetch("https://en.wikipedia.org/api/rest_v1/page/summary/Pacific_Ocean");
            const data = await response.json();

            // Extract relevant information from the response
            const introText = data.extract;

            // Update the HTML with the fetched information
            introSection.querySelector(".intro-content").innerHTML = `
            <h1 style="color: #82c8c6;">Introduction</h1>
            <p style="font-size: 23px;">${introText}</p>
            `;
        } catch (error) {
            console.error("Error fetching ocean information:", error);
            introSection.querySelector(".intro-content").innerHTML = "<p>Failed to load ocean information.</p>";
        }
    }

    async function fetchImages() {
        try {
            const response = await fetch("https://api.unsplash.com/photos/random?query=pacific-ocean&count=8&client_id=G2uVaK0UO2CX848ALLi_wcPeikL1paKyy9YV-N9Jvxg");
            const data = await response.json();

            // Display images on the webpage
            data.forEach(image => {
                const imgElement = document.createElement("img");
                imgElement.src = image.urls.regular;
                imgElement.alt = "Pacific Ocean Image";
                imgElement.classList.add("gallery-image");
                imageGrid.appendChild(imgElement);
            });
        } catch (error) {
            console.error("Error fetching images:", error);
            imageGrid.innerHTML = "<p>Failed to load images.</p>";
        }
    }

    // Set the geological location image using an anchor element
    const geoLocationLink = document.createElement("a");
    geoLocationLink.href = "https://en.wikipedia.org/wiki/Pacific_Ocean";
    geoLocationLink.target = "_blank"; // Open link in a new tab
    geoLocationLink.classList.add("geo-location-link"); // Add class for styling
    const geoLocationImg = document.createElement("img");
    geoLocationImg.src = "https://upload.wikimedia.org/wikipedia/commons/f/f6/Pacific_Ocean_-_en.png";
    geoLocationImg.alt = "Geological Location of the Pacific Ocean";
    geoLocationLink.appendChild(geoLocationImg);
    geoLocationImageContainer.appendChild(geoLocationLink);
});
