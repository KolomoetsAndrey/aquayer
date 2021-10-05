$(document).ready(function() {
    if ($('.category-title').length) {
        $('.category-title').each(function(index, element) {
            var heading = $(element);
            var word_array, cut_word, first_part;
    
            word_array = heading.html().split(/\s+/);
            cut_word = word_array.pop();
            first_part = word_array.join(' ');
    
            heading.html([first_part, ' <span class="last-word">', cut_word, '</span>'].join(''));
        });
    } else {
        ;
    }

    $('.hamburger-btn').click(function() {

        $mobileNav = $('.navbar');
        $navbarBtn = $('.hamburger-btn');

        if ($(this).hasClass('open')) {
            $mobileNav.css({"width": "0"});
            $mobileNav.css({"opacity": "0"});
            $mobileNav.css({"visibility": "hidden"});

        }
        else {
            $mobileNav.css({"width": "100%"});
            $mobileNav.css({"opacity": "1"});
            $mobileNav.css({"visibility": "visible"});
        }

        $(this).toggleClass('open');
    });

    $('#category-btn').click(function() {

        var categoryArea = $('#category-btn');
        var categoryTgr = $('.collapsed-trigger');
        var openCat = '-';
        var closeCat = '+';

        if (categoryArea.hasClass('collapsed')) {
            categoryTgr.text(closeCat);
        } else {
            categoryTgr.text(openCat);
        }
    });

    if ($('.slider-partners').length) {
        $('.slider-partners').slick({
            infinite: false,
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            rows: 2, 
            slidesPerRow: 7,
            dots: true,
            centerMode: true,
            centerPadding: '0px',
            appendArrows: $('.slider-arrows'),
            prevArrow: '<button id="prev" type="button" class="slider-btn"> < </button>',
            nextArrow: '<button id="next" type="button" class="slider-btn"> > </button>'
        });
    } else {
        ;
    }

    if ($('.thumbnails-slider').length) {
        $('.thumbnails-slider').on('init', function(e, slider) {
            $(slider.$slides.find('.thumbnail-button')).each(function(index) {
              $(this).on('click', function() {
                // Move aria-current="true" to this button
                $(slider.$slides.find('.thumbnail-button').removeAttr('aria-current'));
                $(this).attr('aria-current', true);
        
                // Change the main image to match this thumbnail button
                var index = $(this).closest('.slick-slide').data('slick-index');
                $('.main-image-slider').slick('slickGoTo', index);
              });
            });
          });
          
        
        $('.thumbnails-slider').slick({
            vertical: true,
            slidesToShow: 4,
            infinite: false
        });
        
        $('.main-image-slider').slick({
            slidesToShow: 1,
            draggable: false
        });
        
        $('.main-image-slider').on('beforeChange', function(e, slider, currentSlide, nextSlide) {
            $('.thumbnails-slider .thumbnail-button[aria-current="true"]').removeAttr('aria-current');
            $('.thumbnails-slider').slick('slickGoTo', nextSlide);
            $('.thumbnails-slider .thumbnail-button:eq(' + nextSlide + ')').attr('aria-current', true);
        }); 
    } else {
        ;
    }

    // videoslider
    if ( $('.video-slider-main').length ) {
        var $slider = $('.video-slider-main')
            .on('init', function(slick) {
                $('.video-slider-main').fadeIn(1000);
            })
            .slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                autoplay: true,
                lazyLoad: 'ondemand',
                autoplaySpeed: 3000,
                asNavFor: '.video-slider-thmb',
                appendArrows: $('.video-slider-arrows'),
                prevArrow: '<button id="prev" type="button" class="slider-btn"> < </button>',
                nextArrow: '<button id="next" type="button" class="slider-btn"> > </button>'
            });

    var $slider2 = $('.video-slider-thmb')
            .on('init', function(slick) {
                $('.video-slider-thmb').fadeIn(1000);
            })
            .slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                lazyLoad: 'ondemand',
                asNavFor: '.video-slider-main',
                dots: false,
                arrows: true,
                centerMode: false,
                focusOnSelect: true
            });

    //remove active class from all thumbnail slides
    $('.video-slider-thmb .slick-slide').removeClass('slick-active');

    //set active class to first thumbnail slides
    $('.video-slider-thmb .slick-slide').eq(0).addClass('slick-active');

    // On before slide change match active thumbnail to current slide
    $('.video-slider-main').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var mySlideNumber = nextSlide;
        $('.video-slider-thmb .slick-slide').removeClass('slick-active');
        $('.video-slider-thmb .slick-slide').eq(mySlideNumber).addClass('slick-active');
    });
    
    
    // init slider
    require(['js-sliderWithProgressbar'], function(slider) {

        $('.video-slider-main').each(function() {

            me.slider = new slider($(this), options, sliderOptions, previewSliderOptions);

            // stop slider
            //me.slider.stop();

            // start slider
            //me.slider.start(index);

            // get reference to slick slider
            //me.slider.getSlick();

        });
    });

    var options = {
        progressbarSelector    : '.bJS_progressbar'
        , slideSelector        : '.bJS_slider'
        , previewSlideSelector : '.bJS_previewSlider'
        , progressInterval     : ''
            // add your own progressbar animation function to sync it i.e. with a video
            // function will be called if the current preview slider item (".b_previewItem") has the data-customprogressbar="true" property set
        , onCustomProgressbar : function($slide, $progressbar) {}
    }

        // slick slider options
        // see: https://kenwheeler.github.io/slick/
    var sliderOptions = {
        slidesToShow   : 1,
        slidesToScroll : 1,
        arrows         : true,
        fade           : true,
        autoplay       : true
    }

        // slick slider options
        // see: https://kenwheeler.github.io/slick/
    var previewSliderOptions = {
        slidesToShow   : 3,
        slidesToScroll : 1,
        dots           : false,
        focusOnSelect  : true,
        centerMode     : true
    }
    }
});