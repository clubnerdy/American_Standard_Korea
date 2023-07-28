$(function(){

    $('.nav_btn01').click(function(){
        $('nav').animate({
            top:0,
        },500);
        $('header').fadeOut();
        $('.main_title').fadeOut();
    })

    $('.nav_btn02').click(function(){
        $('nav').animate({
            top:"-100vh",
        },500);
        $('header').fadeIn();
        $('.main_title').fadeIn();
    })

});//제이쿼리 종료