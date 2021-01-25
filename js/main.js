/* global $, JQuery, alert */

$(document).ready(function () {
    "use strict";
    
    // Toggle Nav Button
	$('#toggleNav').click(function() {
        $('#contacts').toggle();
    });

    /* Smooth in Navigation */
    $('header .menu .list a, .navbar-light .navbar-nav .nav-link.aboutLink').click(function(){
        $('html,body').animate({
            scrollTop: $('#'+ $(this).data('value')).offset().top 
        },1000);
        $('.active').removeClass('active');
        $(this).addClass('active');
    });
    $('.navbar-light .navbar-nav .nav-link.aboutLink').click(function(){
        $(".navbar-collapse").removeClass("show");
        $('#contacts').css('display','block');
    });

    // Fixed Nav
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".navbar").css({
                'position': 'fixed',
                'top': '0',
                'left': '0',
                'width': '100%',
                'z-index': '99999',
                'background': '#fff',
                'box-shadow': '0 10px 20px rgba(0,0,0,0.1)',
                'transition': 'top .5s ease-in-out',
                '-webkit-transition': 'top .5s ease-in-out',
            });
            $("header .menu").css({
                'position': 'fixed',
                'top': '0',
                'left': '0',
                'width': '100%',
                'z-index': '99999',
                'background': '#9ca2c6',
                'box-shadow': '0 10px 20px rgba(0,0,0,0.1)',
                'transition': 'top .5s ease-in-out',
                '-webkit-transition': 'top .5s ease-in-out',
            });
        }
        else {
            $(".navbar").css({
                'position': 'relative',
                'background': '#fff',
                'left': '0',
                'width': '100%',
                'z-index': '99999',
                'box-shadow': 'none'
            });
            $("header .menu").css({
                'position': 'relative',
                'background': '#9ca2c6',
                'left': '0',
                'width': '100%',
                'z-index': '99999',
                'box-shadow': 'none'
            });
        }
    });

    /* Scroll Top */
    var scrollButton = $("#scroll-top");
        $(window).scroll(function () {
            
        if($(this).scrollTop()>=700)
            scrollButton.show(); 
        else 
            scrollButton.hide();
    });
    scrollButton.click(function () {
        $("html,body").animate({scrollTop: 0}, 600);
    });
    
});