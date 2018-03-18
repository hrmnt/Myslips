$(document).ready(function () {

    AOS.init();
    // $(".team").owlCarousel({
    //     animateOut: 'slideOutDown',
    //     animateIn: 'flipInX',
    //     center: true,
    //     items:1,
    //     loop:true,
    //     responsive:{
    //         600:{
    //             items:3
    //         }
    //     },
    //     autoplay:true,
    //     autoplayTimeout:1000,
    //     autoplayHoverPause:true
    // });
    var owl = $('.company');
    $(".company").owlCarousel({
        loop:true,
        items:1,
        responsive:{
            600:{
                items:2
            }
        },
        // autoplay:true,
        // autoplayTimeout:1000,
        // autoplayHoverPause:true
    })
    $(".abroad-stu").owlCarousel({
        loop:true,
        items:1,
        responsive:{
            600:{
                items:2
            }
        },
    })
    $('.c-btn.next').click(function() {
        owl.trigger('next.owl.carousel');
    })
    $('.c-btn.prev').click(function() {
        owl.trigger('prev.owl.carousel');
    })
    var words=[
    "достигай",
    "делай",
    "совершенствуй",
    "твори",
    "добивайся",
    "создавай",
    "практикуй",
        "Вместе с KEYNOTE."
    ]

    var lastRandom;
    var random;
    $("#more-fee").click(function () {
        // console.log("ss")
        $(".navigation").toggleClass("open")
    })

    $("#tel_number").mask('+7 (000) 000-00-00')
    timeout();
    var i =0;
    var timer =1000;
    function timeout() {
        setTimeout(function () {
            if(i > 7){
                i=0

            }

            $('#word').fadeOut(500, function() {
                    $(this).text(words[i]).fadeIn(500);

                    i++;
                    if(i == 7){
                        timer =6000;
                    }
                    else{
                        timer =1000;
                    }
            });
            timeout();
        }, timer );
    }

    $("#hamburger").click(function () {
        $("#first-line").toggleClass("open-first")
        $("#second-line").toggleClass("open-second")
        $("#third-line").toggleClass("open-third")
        $(".navigation").toggleClass("open")
        $(".fixed").toggleClass("colored");
        $("#white-logo").toggleClass("show");
        $("#black-logo").toggleClass("show");

    })
    var statistics = $('#statistics').offset().top;
    var mentors = $('.abroad').offset().top;

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 30
        }, 1000);
    });
    var onStat =false;
    function onScroll() {
        if(!onStat){
            window.scrollY >= origOffsetY + 30 != headerIsFixed  &&  (headerIsFixed = !headerIsFixed, header.classList.toggle("fixed", headerIsFixed));
        }
        if(window.scrollY>= statistics && window.scrollY <= mentors){
            onStat = true;
            $("#black-logo").addClass("show");
            $("#white-logo").removeClass("show");
            $("#header").addClass("h-clr");
            $(".line").removeClass("nthng");
            $(".fee").removeClass("nthng");
            $(".profession").removeClass("nthng");
            $(".lent").addClass("black")
        }
        if(window.scrollY<= statistics || window.scrollY>= mentors){
            onStat = false;
            $("#black-logo").removeClass("show");
            $("#white-logo").addClass("show");
            $("#header").removeClass("h-clr");
            $(".lent").removeClass("black")

        }

    }
    console.log(statistics)
    var header = document.querySelector("#header"), origOffsetY = header.offsetTop, headerIsFixed = !1;
    document.addEventListener("scroll", onScroll);

})