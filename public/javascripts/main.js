$(document).ready(function () {
    AOS.init();
    emailjs.init("user_lm9NaZQP4gPX00KqvMvRC");
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
    var abr = $('.abroad-stu');
    $(".company").owlCarousel({
        loop: true,
        items: 1,
        responsive: {
            600: {
                items: 2
            }
        },
        // autoplay:true,
        // autoplayTimeout:1000,
        // autoplayHoverPause:true
    })
    $(".abroad-stu").owlCarousel({
        loop: true,
        items: 1,
        responsive: {
            600: {
                items: 2
            }
        },
    })
    $('.c-btn.next').click(function () {
        owl.trigger('next.owl.carousel');
    })
    $('.c-btn.prev').click(function () {
        owl.trigger('prev.owl.carousel');
    })
    $('.c-btn.next-a').click(function () {
        abr.trigger('next.owl.carousel');
    })
    $('.c-btn.prev-a').click(function () {
        abr.trigger('prev.owl.carousel');
    })
    $('#register-btn').click(function () {
        $(".register-drop").addClass('open')

    })
    $('.c-layer').click(function () {
        $(".register-drop").removeClass('open')
    })
    var words = [
        "достигай",
        "делай",
        "совершенствуй",
        "твори",
        "добивайся",
        "создавай",
        "практикуй",
        "Вместе с KEYNOTE."
    ];

    // $(".form-element").submit(function () {
    //     var name = $("#name-form").val();
    //     var surname = $("#surname-form").val();
    //     var tel = $("#tel-form").val();
    //     var course = $("#course-form").val();
    //     var templateParams ={
    //         name: name,
    //         surname: surname,
    //         phone: tel,
    //         lesson: course
    //     }
    //     emailjs.send('gmail', 'keynote_product', templateParams)
    //         .then(function(response) {
    //             console.log('SUCCESS!', response.status, response.text);
    //             $(".register-drop").removeClass('open')
    //
    //         }, function(error) {
    //             console.log('FAILED...', error);
    //         });
    //
    // });

    var myform = $("form.form-element");
    myform.submit(function(event){
        var name = $("#name-form").val();
        var surname = $("#surname-form").val();
        var tel = $("#tel-form").val();
        var course = $("#course-form").val();
        var templateParams ={
            name: name,
            surname: surname,
            phone: tel,
            lesson: course
        }
        event.preventDefault();

        // Change to your service ID, or keep using the default service
        var service_id = "gmail";
        var template_id = "keynote_product";

        myform.find("button").text("Отправляется...");
        emailjs.send(service_id,template_id,templateParams)
            .then(function(){
                myform.find("button").text("Отправлено");
                $(".register-drop").removeClass('open')

            }, function(err) {
                myform.find("button").text("Send");
            });
        return false;
    });

    var lastRandom;
    var random;
    $("#more-fee").click(function () {
        // console.log("ss")
        $(".navigation").toggleClass("open")
    })

    $("#tel-form").mask('+7 (000) 000-00-00')
    timeout();
    var i = 0;
    var timer = 1000;

    function timeout() {
        setTimeout(function () {
            if (i > 7) {
                i = 0

            }

            $('#word').fadeOut(500, function () {
                $(this).text(words[i]).fadeIn(500);

                i++;
                if (i == 7) {
                    timer = 6000;
                }
                else {
                    timer = 1000;
                }
            });
            timeout();
        }, timer);
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
    var onStat = false;

    function onScroll() {
        if (!onStat) {
            window.scrollY >= origOffsetY + 30 != headerIsFixed && (headerIsFixed = !headerIsFixed, header.classList.toggle("fixed", headerIsFixed));
        }
        if (window.scrollY >= statistics && window.scrollY <= mentors) {
            onStat = true;
            $("#black-logo").addClass("show");
            $("#white-logo").removeClass("show");
            $("#header").addClass("h-clr");
            $(".line").removeClass("nthng");
            $(".fee").removeClass("nthng");
            $(".profession").removeClass("nthng");
            $(".lent").addClass("black")
        }
        if (window.scrollY <= statistics || window.scrollY >= mentors) {
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