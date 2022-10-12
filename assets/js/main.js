/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')

}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('header-bg') 
                       : header.classList.remove('header-bg')
}
window.addEventListener('scroll', scrollHeader)

/*=============== MOUSE TRACKER ===============*/
gsap.set(".ball", {xPercent: -50, yPercent: -50});

let xTo = gsap.quickTo(".ball", "x", {duration: 0.6, ease: "power3"}),
    yTo = gsap.quickTo(".ball", "y", {duration: 0.6, ease: "power3"});

window.addEventListener("mousemove", e => {
  xTo(e.pageX);
  yTo(e.pageY);
});

