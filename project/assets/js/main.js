(function($){
    "use strict";
    jQuery(document).on('ready', function(){
        
        // Mean Menu
        jQuery('.mean-menu').meanmenu({
            meanScreenWidth: "991"
        });

        // Header Sticky
        $(window).on('scroll', function() {
            if ($(this).scrollTop() >150){  
                $('.header-sticky').addClass("is-sticky");
            }
            else{
                $('.header-sticky').removeClass("is-sticky");
            }
        });

        // Banner-slider
        $('.banner-slider').owlCarousel({
            autoplay: true,
            loop: true,
            autoplayHoverPause: true,
            dots: false,  
            animateOut: 'slideOutDown',
            animateIn: 'heartBeat',
            smartSpeed: 2000, 
            nav: true,
            items: 1,
            navText: ["<i class='flaticon-arrowhead-thin-outline-to-the-left'></i>", "<i class='flaticon-arrow-point-to-right'></i>"],         
        });

        // Main-slider
        $('.main-slider').owlCarousel({
            autoplay: true,
            loop: true,
            autoplayHoverPause: true,
            dots: false,  
            animateOut: 'slideOutDown',
            animateIn: 'heartBeat',
            smartSpeed: 2000, 
            nav: true,
            mouseDrag: false,
            items: 1,
            navText: ["<i class='flaticon-arrowhead-thin-outline-to-the-left'></i>", "<i class='flaticon-arrow-point-to-right'></i>"],         
        });

        // Partner Slider
        $('.partner-slider') .owlCarousel ({
            loop: true,
            autoplay:true,
            nav: false,
            margin: 30,
            mouseDrag: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            dots: false,
            responsive:{
                0:{
                    items:2,
                },
                768:{
                    items:4,
                },
                1200:{
                    items:4,
                }
            }
        })

        // Therapy-slider
        $('.therapy-slider').owlCarousel({
            loop: true,
            autoplay: true,
            nav: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            dots: false,  
            margin: 30,
            nav: true,
            navText: ["<i class='flaticon-arrowhead-thin-outline-to-the-left'></i>", "<i class='flaticon-arrow-point-to-right'></i>"],         
            responsive:{
                0:{
                    items: 1,
                },
                768:{
                    items:2,
                },
                1200:{
                    items: 3,
                }
            }
        });

        // Counter Up Number JS
        $('.counter').counterUp({
            delay: 20,
            time: 5000
        });

        // Video Popup
		$('.popup-youtube').magnificPopup({
			disableOn: 320,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
        });

        // Popup Gallery
		$('.popup-btn').magnificPopup({
            type: 'image',
            gallery:{
                enabled:true
            }
        });

        // MixItUp JS
        $('#Container').mixItUp();

        // Testimonial-slider
        $('.testimonial-slider').owlCarousel({
            loop: true,
            autoplay: true,
            nav: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            dots: true,  
            margin: 30,
            nav: false,       
            responsive:{
                0:{
                    items: 1,
                },
                768:{
                    items:2,
                },
                1200:{
                    items: 2,
                }
            }
        });

        // TOP BUTTON JS CODE
		$('body').append('<div id="toTop" class="top-arrow"><i class="flaticon-arrow-pointing-up"></i></div>');
		$(window).on('scroll', function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
			$('#toTop').fadeOut();
			}
        }); 
        
		$('#toTop').on('click', function(){
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});
        // END TOP BUTTON JS CODE

        // Preloader Area
        $(window).on('load', function() {
            $('.preloader').fadeOut();
        });

        // What-we-slider
        $('.what-we-slider').owlCarousel({
            loop: true,
            autoplay: true,
            nav: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            dots: false,  
            margin: 30,
            nav: true,
            navText: ["<i class='flaticon-arrowhead-thin-outline-to-the-left'></i>", "<i class='flaticon-arrow-point-to-right'></i>"],         
            responsive:{
                0:{
                    items: 1,
                },
                768:{
                    items:2,
                },
                1200:{
                    items: 3,
                }
            }
        });

        // Customer-slider
        $('.customer-slider').owlCarousel({
            loop: true,
            autoplay: true,
            nav: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            dots: true,  
            margin: 20,
            nav: false,     
            responsive:{
                0:{
                    items: 1,
                },
                768:{
                    items:2,
                },
                1200:{
                    items: 3,
                }
            }
        });

        // FAQ Accordion
        $(function() {
            $('.accordion').find('.accordion-title').on('click', function() {
                // Adds Active Class
                $(this).toggleClass('active');
                // Expand or Collapse This Panel
                $(this).next().slideToggle('fast');
                // Hide The Other Panels
                $('.accordion-content').not($(this).next()).slideUp('fast');
                // Removes Active Class From Other Titles
                $('.accordion-title').not($(this)).removeClass('active');
            });
        });
            

	});
}(jQuery));