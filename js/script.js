//Select Element function
const selectElement = function(e) {
    return document.querySelector(e);
}

let menuToggler = selectElement(".menu-toggle")
let body = selectElement("body")

menuToggler.addEventListener('click', () => body.classList.toggle("open"))

//active indicator
// let active = 0;
// let i;
// for ( i = 0; i < document.links.length; i++) {
//     if(document.links[i].href === document.URL) {
//         active = i;
//     }
// }
// document.links[active].className += " active";

// overlay transition
// let imgBox = selectElement(".img-box")
// imgBox.addEventListener("mouseenter", ()=>{
//     imgBox.style.setProperty('--slide-in','translateY(0%)')
// })


//scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
} );

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
} );

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
} );

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
} );
