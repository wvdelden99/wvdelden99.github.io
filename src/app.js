// Nav Hamburger
const menuBtn = document.querySelector(".nav-hamburger-button");
const sideNav = document.querySelector(".sidenav");
const sideNavContent = document.querySelector(".sidenav-content-container");

let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        sideNav.classList.add('sidenav-active');
        sideNavContent.classList.add('active');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        sideNav.classList.remove('sidenav-active');
        sideNavContent.classList.remove('active');
        menuOpen = false;
    }
});