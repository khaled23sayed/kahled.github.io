/*global $, alert, console, mixitup*/
$(function (){
    
   "use strict";
    
    //adjust header height
    
    $(".header").height($(window).height());
    
    $(window).resize(function () {
        
        $(".testim").height($(window).height());
        
        $(".header").height($(window).height());
        
        $(".slider").each(function () {
        
        $(this).css('paddingtop', ($(window).height() - $('.slider div').height()) /2);
            
        });
        
        $(".slider").height($(window).height());
    });
    
    //add active class to links
    
    $('.links li a').click(function () {
        
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    $('.slider').bxSlider({
        
        pager: false
        
    });
    
    $(".slider").each(function () {
        
        $(this).css('paddingtop', ($(window).height() - $('.slider div').height()) /2);
    });
    
    $('.links li a').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        },1000)
    });
   // our outo slider code, this is very important code
    
    (function autoslider() {
        
        $('.slide .act').each(function () {
            
            if (!$(this).is(' :last-child')) {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('act').next().addClass('act').fadeIn();
                    
                    autoslider();
                    
                });
                
            } else {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('act');
                    
                    $('.slide div').eq(0).addClass('act').fadeIn();
                    
                    autoslider();
                    
                });
                
            }
        });
        
    }());
   
    //trigger mixitup
    
    $(".on").click(function () {
        
        $(".mix-techno, .mix-animal, .mix-fantasy").fadeIn(1000);
    });
    
    $(".techno").click(function () {
        
        $(".mix-techno").fadeIn(2000);
        $(".mix-animal, .mix-fantasy").fadeOut(1000);
    });
    
    $(".animal").click(function () {
        
        $(".mix-animal").fadeIn(2000);
        $(".mix-techno, .mix-fantasy").fadeOut(1000);
    });
    
    $(".fantasy").click(function () {
        
        $(".mix-fantasy").fadeIn(2000);
        $(".mix-techno, .mix-animal").fadeOut(1000);
    });
    
    // trigger nice scroll
    
    
    $("html").niceScroll({
        
        cursorcolor: '#1abc9c',
        
        cursorwith: '10px',
        
        cursorborder: '1px solid #1abc9c',
        
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});