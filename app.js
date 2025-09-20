const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
});

//now to be able to naviagte to another page
document.addEventListener('DOMContentLoaded', function() {
    const getStartedButton = document.querySelector('.main_btn');
    if (getStartedButton){
        getStartedButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'signup.html' ; //need to add page to direvct it to
        });
    }


    //for sign up button in navbar 

const signUpButton = document.querySelector('.button');
if (signUpButton){
    signUpButton.addEventListener('click', function(e){
        e.preventDefault();
        window.location.href = 'signup.html';
    });
}

   // Logo Navigation - clicking logo goes to home
    const logo = document.getElementById('navbar__logo'); // Find logo by ID
    if (logo) { // Check if logo exists
        logo.addEventListener('click', function(e) { // Add click listener
            e.preventDefault(); // Prevent default link behavior
            window.location.href = 'index.html'; // Go to home page
        });
    }

    // Tech Page Navigation (your existing tech.html link should work, but we can enhance it)
    const techLink = document.querySelector('a[href="/tech.html"]'); // Find the tech link
    if (techLink) { // Check if tech link exists
        techLink.addEventListener('click', function(e) { // Add click listener
            e.preventDefault(); // Prevent default behavior
            window.location.href = 'tech.html'; // Navigate to tech page
        });
    }

    // Products Link Navigation (currently goes to "/", let's make it go somewhere useful)
    const productsLinks = document.querySelectorAll('a[href="/"]'); // Find all links going to "/"
    productsLinks.forEach(link => { // Loop through each link
        const linkText = link.textContent.trim(); // Get the text content of the link
        
        if (linkText === 'Products') { // If this is the Products link
            link.addEventListener('click', function(e) { // Add click listener
                e.preventDefault(); // Prevent default behavior
                window.location.href = 'products.html'; // Navigate to products page (create this page)
            });
        } else if (linkText === 'Home') { // If this is a Home link
            link.addEventListener('click', function(e) { // Add click listener
                e.preventDefault(); // Prevent default behavior
                window.location.href = 'index.html'; // Navigate to home page
            });
        }
    });
});

