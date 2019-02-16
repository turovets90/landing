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
        $(".main_menu a").click(function () {
            var elementClick = $(this).attr("href");
            var destination = $(elementClick).offset().top - 60;
            $('html,body').animate( { scrollTop: destination }, 1100 );
            $('.header_row .dropdown, .header_row .dropdown-menu').romoveClass('show');
            return false;
        });
    });
    $(window).resize();

});


