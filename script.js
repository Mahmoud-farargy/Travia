$(document).ready(()=>{
    // handles the burger button
    $("#toggle-menu").on("click", function(){
        $(".upper-header").toggleClass("collapse");
    });
    // initializes owl carousel 
    const responsive={
        0:{
            items:1
        },
        320:{
            items:1
        },
        560:{
            items:2
        },
        960:{
            items:3
        }
    }

    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        nav: true,
        dots:false,
        navText:[$(".owl-navigation .owl-nav-prev"),$(".owl-nav-next")],
        responsive: responsive
    }); 
    // handles the scroll behavior
    $(".footer-arrow-up .fa-arrow-circle-up").click(function(){
        $("html,body").animate({
            scrollTop:0
        },1000);
    });

    //Initialize AOS
    AOS.init();
})
