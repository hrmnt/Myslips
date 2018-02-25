$(document).ready(function () {
    AOS.init();
    $(".team").owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        center: true,
        items:1,
        loop:true,
        responsive:{
            600:{
                items:3
            }
        },
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true
    });
    $(".company").owlCarousel({
        loop:true,
        responsive:{
            600:{
                items:2
            }
        },
        // autoplay:true,
        // autoplayTimeout:1000,
        // autoplayHoverPause:true
    })
    var words=["Играй.","Рисуй.","Разрабатывай.","Достигай.","Совершенствуй.","Делай.","Учись.","Твори.","Создавай."]
    var kelime=["Играй.","Рисуй.","Разрабатывай.","Достигай.","Совершенствуй.","Делай.","Учись.","Твори.","Создавай."]
    var lastRandom;
    var random;
    function getRandomArbitrary() {
        var max = 9;
        var min = 1;

        if (lastRandom === undefined) {
            random = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        else {
            random = Math.floor(Math.random() * (max - min    )) + min;
            if (random >= lastRandom) random += 1;
        }
        lastRandom = random;
        return random;
    }
    timeout();
    function timeout() {
        setTimeout(function () {
            $('#'+Math.floor(getRandomArbitrary())+'-word').fadeOut(500, function() {

                var item= Math.floor(getRandomArbitrary());
                    $(this).text(words[item]).fadeIn(500);

            });
            timeout();
        }, getRandomArbitrary()*10);
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
    var mentors = $('.mentors').offset().top;

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
        }
        if(window.scrollY<= statistics || window.scrollY>= mentors){
            onStat = false;
            $("#black-logo").removeClass("show");
            $("#white-logo").addClass("show");
            $("#header").removeClass("h-clr");
        }

    }
    console.log(statistics)
    var header = document.querySelector("#header"), origOffsetY = header.offsetTop, headerIsFixed = !1;
    document.addEventListener("scroll", onScroll);
})