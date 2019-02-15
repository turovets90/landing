$(document).ready(function(){



    $(window).resize(function(){
        var header_height = $('header').outerHeight();
        console.log(header_height);
        $(window).scroll(function(){
            if ($(this).scrollTop() > header_height) {
                $('header').addClass('fixed');
            } else {
                $('header').removeClass('fixed');
            }
        });
    });
    $(window).resize();



});


