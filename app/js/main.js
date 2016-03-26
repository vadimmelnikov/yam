// js
$(document).ready(function() {
    // Большой слайдер
//     $('#bslider').bxSlider({
//    mode: 'horizontal',
//   useCSS: true,
//   controls: false,
//   auto: true,
//   // autoControls: true,
//   infiniteLoop: true,
// autoHover: true,
// minSlides: 1,
//                 maxSlides: 1,
//   pause: 3000,
//   speed: 400,
//   // useCSS: false,
//   hideControlOnEnd: true
//   // easing: 'easeOutElastic',
//   // speed: 2000
// });
    $("#bslider").owlCarousel({

        // autoPlay: 3000, //Set AutoPlay to 3 seconds
        // items: 3,
        autoPlay: 3000,
        pagination: true,
        // itemsDesktop : [500],
        autoWidth: false,
         // responsiveRefreshRate : 500,
        stopOnHover: true,
        // scrollPerPage: true,
        loop:true,
        items: 1,
        autoHeight : true,
    // transitionStyle:"fade",
        // navigation: true


    });
    // Карусель товаров
    var owl = $("#bx-recomend");
    owl.owlCarousel({

        // autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 4,
        pagination: false,
        itemsDesktop: [1140, 4],
        scrollPerPage: true
    });
    /*Кастомные переключалки*/
    $(".nextH").click(function(e) {
        e.preventDefault();
        owl.trigger('owl.next');
    })
    $(".prevH").click(function(e) {
            e.preventDefault();
            owl.trigger('owl.prev');
        })
        /*end.Кастомные переключалки*/

    // Табы в drob-list

    var href1 = $("#link-1 .dropmenu-MainHref");
    href1.hover(function() {
        var tab_id = $(this).attr('data-tab');

        href1.removeClass('active');
        $('#link-1 .col-rightDrop').removeClass('current');

        $(this).addClass('active');
        $("#" + tab_id).addClass('current');
    });


    var href2 = $("#link-2 .dropmenu-MainHref");
    href2.hover(function() {
        var tab_id = $(this).attr('data-tab');

        href2.removeClass('active');
        $('#link-2 .col-rightDrop').removeClass('current');

        $(this).addClass('active');
        $("#" + tab_id).addClass('current');
    });





    // Появление drob-list
    // $('.menu-href').hover(

    // function () {
    //     var $this = $(this);
    //     var link_id = $(this).attr('data-link');
    //     var timer = $this.data("timer") || 0;
    //     clearTimeout(timer);
    //     $('.droplist').removeClass('current');
    //     timer = setTimeout(function() {
    //         $("#" + link_id).addClass('current');
    //     }, 300); // 2000 is in mil sec eq to 2 sec.
    //     $this.data("timer", timer);
    // }, function () {
    //     var $this = $(this);
    //     var timer = $this.data("timer") || 0;
    //     clearTimeout(timer);
    //     // $('.droplist').removeClass('current');
    // });



    // Появление drob-list в главном меню

    $('.menu-href').hover(function() {
            window.initHandler = setTimeout(handler, 300);
            var link_id = $(this).attr('data-link');
            function handler() {
                $('.droplist').removeClass('current');
                // $('.dropmenu-MainHref').removeClass('active');
                // $(this).addClass('active');
                $("#" + link_id).addClass('current');
            }
        }, function() {
            clearTimeout(window.initHandler);
        })
        // Появление drob-list в алфавитом меню
    $('.brand-abc__href').hover(function() {
            window.initHandler = setTimeout(handler, 300);
            var link_id = $(this).attr('data-link');
            var his = $(this);
            // vat $this = $(this);
            $('.brand-abc__href').removeClass('active');
            
            function handler() {
                his.addClass('active');
                $('.droplist').removeClass('current');
                // $('.dropmenu-MainHref').removeClass('active');
                
                $("#" + link_id).addClass('current');
            }
        }, function() {
            clearTimeout(window.initHandler);
            // $(this).removeClass('active');
        })
        // Появление корзины

    $('.header-page__hrefCart').hover(function() {
            window.initHandler = setTimeout(handler, 300);
            var link_id = $(this).attr('data-link');
            var his = $(this);
            function handler() {
                his.addClass('active');
                $('.dropBascket').addClass('current');
            }
        }, function() {
            clearTimeout(window.initHandler);
        })
        // Удаление drob-list
    $('.droplist').mouseleave(function() {

        $('.brand-abc__href').removeClass('active');
        $(this).removeClass('current');
    })
    $('.header-hide').mouseenter(function() {
        $('.header-page__hrefCart').removeClass('active');
        $('.droplist').removeClass('current');
        $('.dropBascket').removeClass('current');
    })
    $('.headerBrands__hide').mouseenter(function() {
        $('.brand-abc__href').removeClass('active');
        $('.droplist').removeClass('current');
    })
    $('.dropBascket').mouseleave(function() {
        $('.header-page__hrefCart').removeClass('active');
        $(this).removeClass('current');
    })
});
// $(window).resize(function() {

//     var widthCont = $('.container').width();
// var inputW = (383/widthCont);
// var inputWpx = (283*widthCont)/1000;
// console.log( inputWpx );
// $('.input-search').css({ width : inputWpx + "px" });
// });
