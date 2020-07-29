// navbarToggler = document.querySelector('.navbar-toggler');
// navbar = document.querySelector('.navbar');
// navlink = document.querySelectorAll('.nav-link');
// navbarNav = document.querySelector('.navbar-nav');
// // PRELOADER CODE 
// var overlay = document.getElementById("overlay");

// NAVBAR COLLAPSE ON CLICK 
$(document).on("click", ".navbar-collapse", function (e) {
    if ($(e.target).is("a")) {
        $(this).collapse("hide");
    }
});
// AOS.init({ offset: 300, duration: 800 }); AOS ANIMATION INITIALIZER
$(function () {
    AOS.init({ offset: 300, duration: 1000, easing: "ease-out-quad", once: 0 });
    window.addEventListener('load', AOS.refresh);
});



// EVENT LISTENERS 
window.addEventListener('load', function () {
    overlay.style.display = 'none';
})




