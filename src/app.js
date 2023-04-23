// Nav Hamburger
const menuBtn = document.querySelector(".nav-hamburger-button");
const sideNav = document.querySelector(".sidenav");
const menuSided = document.querySelector(".menu-sided_wrapper");
const menuOverlay = document.querySelector(".menu-sided_overlay")
const borderLeft = document.querySelector(".content-body-border-left");

let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        sideNav.classList.add('menu-sided-active');
        menuSided.classList.add('active');
        menuOverlay.classList.remove('d-none');
        // borderLeft.classList.add('active_b');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        sideNav.classList.remove('menu-sided-active');
        menuSided.classList.remove('active');
        menuOverlay.classList.add('d-none');
        // borderLeft.classList.remove('active_b');
        menuOpen = false;
    }
});