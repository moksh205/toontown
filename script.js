// Typing Effect Function
function typeEffect(element, text, delay = 100) {
    let index = 0;
    const typingInterval = setInterval(() => {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval);
        }
    }, delay);
}

// Trigger Typing Effect for Titles
document.addEventListener('DOMContentLoaded', () => {
    const welcomeText = "Welcome to ToonTown!";
    const aboutText = [
        "ToonTown is a magical place where colorful characters and delightful stories come to life. ",
        "It's a tribute to the timeless charm of cartoons, where nostalgia reigns supreme. ",
        "Here, you'll find everything from classic animation to modern-day favorites, bringing smiles and laughter to everyone."
    ];

    const welcomeTitle = document.getElementById('welcome-title'); // Select the welcome title
    welcomeTitle.innerHTML = ""; // Clear the title element
    typeEffect(welcomeTitle, welcomeText, 50); // Add typing effect to the title

    // After the title is typed, add the about text
    aboutText.forEach((text, i) => {
        setTimeout(() => {
            const aboutParagraph = document.getElementById('about-text'); // Select the <p> element
            typeEffect(aboutParagraph, text, 50); // Type in the paragraph
        }, (i + 1) * 1000); // Delay between each text
    });
});
$(document).ready(function() {
    // Smooth scroll to the About section
    $('a[href="#about"]').on('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 1000); // Adjust the duration of the scroll (in milliseconds)
    });
});
