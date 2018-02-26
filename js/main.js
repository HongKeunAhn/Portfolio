jQuery(document).ready(function($){

    //    Header and Back Button
    $(window).scroll(function(){
       if($(this).scrollTop() > 100){
           $('.back-to-top').fadeIn('slow');
           $('#hgroup').addClass('hgroup-bg');
        }
       else {
           $('.back-to-top').fadeOut('slow');
           $('#hgroup').removeClass('hgroup-bg');
        }
    });
    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop : 0}, 1500, 'easeInOutExpo');
        return false;
    });
    // mobile safari touch (hover event)
    $('a[href*="html"]').on('touchend', function (e) {
        var el = $(this);
        var link = el.attr("href");
        window.location = link;
    });   

    //   mobile navigation

    if($('#menu').length){
        var $mobile_menu = $('#menu').clone().prop({id:'mobile-menu'});
            $mobile_menu.find('>a').attr({'class': '', 'id': ''});
            $('body').append($mobile_menu);
            $('body').prepend('<button type="button" id="mobile-menu-button"><i class="icon-menu-2"></i></button>');
            $('body').append('<div id="mobile-body-overlay"></div>');
            $('#mobile-menu a').wrap("<p></p>");

        $(document).on('click', '#mobile-menu-button', function(e){
            $('body').toggleClass('mobile-menu-active');
            $('#mobile-menu-button i').toggleClass('icon-cancel icon-menu-2');
            $('#mobile-body-overlay').toggle();
        }); 

        // mobile touchscroll defend for IOS&Chrome
        
        // $(document).on('touchstart', function () {
        //     console.log($('.icon-cancel').length && $('#mobile-body-overlay').css("display") === "block");
        //     console.log($('.icon-menu-2').length && $('#mobile-body-overlay').css("display") == "none");
        //     if ($('.icon-cancel').length && $('#mobile-body-overlay').css("display") == "block") {
        //         $('#wrapper').on('scroll touchmove mousewheel', function (e) {
        //             e.preventDefault();
        //             e.stopPropagation();
        //             return false;
        //         })
        //     }
        //     else if ($('.icon-menu-2').length && $('#mobile-body-overlay').css("display") == "none") {
        //         $('#wrapper').off('scroll touchmove mousewheel');
        //     }
        // });  


        $(document).on('click', function(e){
            var container = $("#mobile-menu, #mobile-menu-button");
            
            if(!container.is(e.target) && container.has(e.target).length === 0){
                if($('body').hasClass('mobile-menu-active')){
                    $('body').removeClass('mobile-menu-active');
                    $('#mobile-menu-button i').toggleClass('icon-cancel icon-menu-2');
                    $('#mobile-body-overlay').fadeOut();
                }
            }
        });
    } 
    else if($("#mobile-menu, #mobile-menu-button").length){
        $("#mobile-menu, #mobile-menu-button").hide();
    }
    
    // Smooth scroll on page hash links (easing.js)
    $('a[href*="#"]:not([href="#"])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
                if (target.length) {
                    var top_space = 0;

                    if ($('#hgroup').length) {
                        top_space = $('#hgroup').outerHeight();
                    }    
                    if (!$('#hgroup').hasClass('hgroup-bg')) {
                        top_space = top_space - 20;
                    }
                }

            $('html, body').animate({
                scrollTop: target.offset().top - top_space
            }, 1000, 'easeInOutExpo');

            if ($(this).parents('.nav-menu').length) {
                $('.nav-menu .menu-active').removeClass('menu-active');
                $(this).closest('a').addClass('menu-active');
            }

            if ($('body').hasClass('mobile-menu-active')) {
                $('body').removeClass('mobile-menu-active');
                $('#mobile-menu-button i').toggleClass('icon-cancel icon-menu-2');
                $('#mobile-body-overlay').fadeOut();
            }
            return false;
        }
    })

    // Footer

    var $copyyear = new Date();
   $('footer').find('span').text($copyyear.getFullYear());  
});



// Google Map

function initMap() {
    var uluru = {lat: 37.482132, lng: 126.997830};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
}