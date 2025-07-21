document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.getElementById("creature-gallery");

    // Array of image URLs and corresponding webpage URLs
    const images = [
        { imageUrl: "images/Forest.jpg", pageUrl: "FloraWelcomPage.html" },
        { imageUrl: "images/Animal.jpg", pageUrl: "animalWelcomePage.html" },
        { imageUrl: "images/Season.jpg", pageUrl: "SeasonWelcomPage.html" },
        // Add more objects with imageUrl and pageUrl properties for each image
    ];

    // Function to create and append image elements
    function appendImages() {
        images.forEach(imageData => {
            const creatureDiv = document.createElement("div");
            creatureDiv.classList.add("creature");

            const image = document.createElement("img");
            image.src = imageData.imageUrl;
            image.alt = getAltText(imageData.imageUrl); // Set alt text dynamically
            image.setAttribute("data-page-url", imageData.pageUrl); // Store page URL as data attribute

            // Add click event listener to each image
            image.addEventListener("click", function() {
                // Navigate to the specified page URL when the image is clicked
                const pageUrl = this.getAttribute("data-page-url");
                window.location.href = pageUrl;
            });

            const caption = document.createElement("div");
            caption.classList.add("caption");
            caption.textContent = getAltText(imageData.imageUrl); // Set caption text dynamically

            creatureDiv.appendChild(image);
            creatureDiv.appendChild(caption);
            galleryContainer.appendChild(creatureDiv);
        });
    }

    // Function to extract creature name from image URL
    function getAltText(imageUrl) {
        // Extract the creature name from the image URL
        const imageName = imageUrl.split("/").pop().split(".")[0]; // Assumes image file names are in the format "creatureName.jpg"
        // Replace underscores with spaces and capitalize the first letter of each word
        return imageName.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    }

    // Call the function to append images
    appendImages();
});
    