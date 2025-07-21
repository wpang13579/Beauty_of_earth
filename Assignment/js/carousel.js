document.addEventListener('DOMContentLoaded', function() {
    const oceanList = document.querySelector('.ocean-list');
    const leftBtn = document.querySelector('.left');
    const rightBtn = document.querySelector('.right');

    leftBtn.addEventListener('click', function() {
        oceanList.scrollBy({
            left: -200, // Adjust scroll amount as needed
            behavior: 'smooth'
        });
    });

    rightBtn.addEventListener('click', function() {
        oceanList.scrollBy({
            left: 200, // Adjust scroll amount as needed
            behavior: 'smooth'
        });
    });
});
