    //Orange
    $("#click-orange").click(function() {

        $('.e-campuz, .intro-text h1 span, .nest-address, .footer-above, .footer-below').css({
            "background": "#ECA928"
        });
        $('.border-color').attr('style', 'border: 4px solid #ECA928!important');
        $('.arrow-down').attr('style', 'border-top: 50px solid #ECA928!important');
       // $('.resume-content h3').attr('style', 'border-left: 28px solid #ECA928!important');
        $('.title-change-color').attr('style', 'color: #ECA928!important');
        $('.page-scroll a:hover').attr('style', 'color: #ECA928!important');
        $('.btn-social').attr('style', 'color: #ECA928!important');
        $('.text-title').attr('style', 'color: #ECA928!important');
    });
    //blue
    $("#click-blue").click(function() {

        $('.e-campuz, .intro-text h1 span, .nest-address, .footer-above, .footer-below').css({
            "background": "#05C1FD"
        });
        $('.border-color').attr('style', 'border: 4px solid #05C1FD!important');
        $('.arrow-down').attr('style', 'border-top: 50px solid #05C1FD!important');
        //$('.resume-content h3').attr('style', 'border-left: 28px solid #05C1FD!important');
        $('.title-change-color').attr('style', 'color: #05C1FD!important');
        $('.page-scroll a:hover').attr('style', 'color: #05C1FD!important');
        $('.btn-social').attr('style', 'color: #05C1FD!important');
        $('.text-title').attr('style', 'color: #05C1FD!important');
    });

    //Green
    $("#click-green").click(function() {

        $('.e-campuz, .intro-text h1 span, .nest-address, .footer-above, .footer-below').css({
            "background": "#1abc9c"
        });
        $('.border-color').attr('style', 'border: 4px solid #1abc9c!important');
        $('.arrow-down').attr('style', 'border-top: 50px solid #1abc9c!important');
        //$('.resume-content h3').attr('style', 'border-left: 28px solid #1abc9c!important');
        $('.title-change-color').attr('style', 'color: #1abc9c!important');
        $('.page-scroll a:hover').attr('style', 'color: #1abc9c!important');
        $('.btn-social').attr('style', 'color: #1abc9c!important');
        $('.text-title').attr('style', 'color: #1abc9c!important');
    });
    //Purple
    $("#click-purple").click(function() {

        $('.e-campuz, .intro-text h1 span, .nest-address, .footer-above, .footer-below').css({
            "background": "#8e44ad"
        });
        $('.border-color').attr('style', 'border: 4px solid #8e44ad!important');
        $('.arrow-down').attr('style', 'border-top: 50px solid #8e44ad!important');
        //$('.resume-content h3').attr('style', 'border-left: 28px solid #8e44ad!important');
        $('.title-change-color').attr('style', 'color: #8e44ad!important');
        $('.page-scroll a:hover').attr('style', 'color: #8e44ad!important');
        $('.btn-social').attr('style', 'color: #8e44ad!important');
        $('.text-title').attr('style', 'color: #8e44ad!important');
    });
    //Red
    $("#click-red").click(function() {

        $('.e-campuz, .intro-text h1 span, .nest-address, .footer-above, .footer-below').css({
            "background": "#2E3639"
        });
        $('.border-color').attr('style', 'border: 4px solid #2E3639!important');
        $('.arrow-down').attr('style', 'border-top: 50px solid #2E3639!important');
        //$('.resume-content h3').attr('style', 'border-left: 28px solid #2E3639!important');
        $('.title-change-color').attr('style', 'color: #2E3639!important');
        $('.page-scroll a:hover').attr('style', 'color: #2E3639!important');
        $('.btn-social').attr('style', 'color: #2E3639!important');
        $('.text-title').attr('style', 'color: #2E3639!important');
    });
    //Background
    $("#click-bg-dark").click(function() {

        $('body').attr('style', 'background: #000!important');
    });
    $("#click-bg-light").click(function() {

        $('body').attr('style', 'background: #f5f5f5!important');
    });





        $("#my-checkbox").click(function() {
            if ($("#my-checkbox").is(":checked")) {
                //$('#page-top').addClass('index');
                $('#page-top').attr('style', 'padding:0px');
                $('.navbar').attr('style', 'width: 100%; left: 0;');

            } else {
                $('#page-top').removeAttr("style");
                $('.navbar').removeAttr("style");
            }
        });  