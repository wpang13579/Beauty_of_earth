// script.js
document.addEventListener("DOMContentLoaded", function () {
    const goBackButton = document.getElementById("goBackButton");

    // Add a click event listener to the "Go Back" button
    goBackButton.addEventListener("click", function () {
        // Navigate back to the "SeasonalMainPage.html" page
        window.location.href = "Season.html";
    });
});

let scrollContainer = document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});
nextbtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;


});

backbtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";

    scrollContainer.scrollLeft -= 900;


});
