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


// Product details gallery

let productImg = document.getElementById("productImg");
let smallImg = document.getElementsByClassName("small__img");

    smallImg[0].onclick = function() {
        productImg.src = smallImg[0].src;
    }
    smallImg[1].onclick = function() {
        productImg.src = smallImg[1].src;
    }
    smallImg[2].onclick = function() {
        productImg.src = smallImg[2].src;
    }
    smallImg[3].onclick = function() {
        productImg.src = smallImg[3].src;
    }