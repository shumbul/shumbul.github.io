
    $(document).ready(function() {
        $('.chart').horizBarChart({
            selector: '.bar',
            speed: 1000
        });


        var stickyNavTop = $('.navbar-wrapper').offset().top;

        var stickyNav = function() {
            var scrollTop = $(window).scrollTop();

            if (scrollTop > stickyNavTop) {
                $('.navbar-wrapper').addClass('sticky');
            } else {
                $('.navbar-wrapper').removeClass('sticky');
            }
        };

        stickyNav();

        $(window).scroll(function() {
            stickyNav();
        });

        //slideout
        var test = true;

        $("#clickme").click(function() {
            if (test) {
                $(this).parent().parent().animate({
                    left: '0px'
                }, {
                    queue: false,
                    duration: 500
                });
            } else {
                $(this).parent().parent().animate({
                    left: '-280px'
                }, {
                    queue: false,
                    duration: 500
                });
            }
            test = !test;

        });
    
    });
