$(document).ready(function() {
    // Stick Navbar on Scroll
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Scroll-Up Button Show/Hide
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up on Scroll-Up Button Click
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // Removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    // Smooth Scrolling on Navbar Menu Items Click
    $('.navbar .menu li a').click(function() {
        // Applying smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle Menu/Navbar Script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing Animation Script
    var typed = new Typed(".typing", {
        strings: ["Business Administrator", "Java Developer", "Gamer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Business Administrator", "Java Developer", "Gamer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
