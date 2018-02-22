$(document).ready(function () {
    AOS.init();
    $(".owl-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        center: true,
        items:3,
        loop:true,

    });

    $("#hamburger").click(function () {
        $("#first-line").toggleClass("open-first")
        $("#second-line").toggleClass("open-second")
        $("#third-line").toggleClass("open-third")
        $(".navigation").toggleClass("open")
        $(".fixed").toggleClass("colored");
        $("#white-logo").toggleClass("show");
        $("#black-logo").toggleClass("show");


    })
    function onScroll() {
        window.scrollY >= origOffsetY + 30 != headerIsFixed && (
            headerIsFixed = !headerIsFixed,
                header.classList.toggle("fixed", headerIsFixed)
        );
    }
    var header = document.querySelector("#header"), origOffsetY = header.offsetTop, headerIsFixed = !1;
    document.addEventListener("scroll", onScroll);
})