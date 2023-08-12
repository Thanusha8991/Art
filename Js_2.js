/* ---------------------toggle icon navbar-------------------*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/* ---------------------scroll section active link-------------------*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
     /* ---------------------sticky navbar-------------------*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

     /* ---------------------remove toggle icon and navbar when click navbar link(scroll)-------------------*/
     menuIcon.classList.remove('bx-x');
     navbar.classList.remove('active');

};

/* ---------------------scroll reveal-------------------*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* ---------------------typed js-------------------*/
const typed = new Typed('.multiple-text', {
    strings: [' a Student at Rajarata University of Sri Lanka', ' an Artist', ' a Programmer(Java, C, C++)', ' a Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 });

 /*---------------------------form validation js--------------------------------- */

function validateForm() {
    // Get input values
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var username = document.getElementById("username").value;

    // Regular expressions for validation
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneRegex = /^\d{10}$/;
    var usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;

    // Perform validation
    if (!emailRegex.test(email)) {
        alert("Invalid email address");
        return false;
    }

    if (!phoneRegex.test(phone)) {
        alert("Invalid phone number");
        return false;
    }

    if (!usernameRegex.test(username)) {
        alert("Invalid username");
        return false;
    }

    // All fields are valid
    alert("Form submitted successfully");
    return true;
}


/*-----------------------image slider js---------------- */
 var counter = 1;
 setInterval(function(){
     document.getElementById('radio' + counter).checked = true;
     counter++;
     if (counter > 14){
         counter = 1;
     }
    }, 5000);

   
    
