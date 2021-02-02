// burger handler

(function(){
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav');
    const closeItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.nav__menu-link');

    burgerItem.addEventListener('click', () => {
        menu.classList.add('nav__active');
        burgerItem.style.display = "none";
    });

    closeItem.addEventListener('click', () => {
        menu.classList.remove('nav__active');
        burgerItem.style.display = "block";
    });
    if (window.innerWidth > 767) {
        for (let i=0; i<menuLinks.length; i++) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('nav__active');
            })
        }
    }
}());


jQuery(document).ready(function($) {
    $('.testimonials-carousel').owlCarousel({
        autoplay:true,
        dots:true,
        loop:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });
    
});


// Register and Login Form

var loginForm = document.getElementById("loginForm");
var regForm = document.getElementById("regForm");
var logClick = document.getElementById('logClick')
var regClick = document.getElementById('regClick')
var indicator = document.getElementById("Indicator");

    regClick.onclick = function() {
        regForm.style.transform = "translateX(0)";
        loginForm.style.transform = "translateX(0)";
        indicator.style.transform = "translateX(51px)";
    }

    logClick.onclick = function() {
        regForm.style.transform = "translateX(300px)";
        loginForm.style.transform = "translateX(300px)";
        indicator.style.transform = "translateX(-51px)";
        
    }
