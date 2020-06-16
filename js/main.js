
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

	
    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 500;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });
	
  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            //filter: '*',
            filter: '.hdmscd0',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
  
    // ********** ********** ********** ********** ********** ********** ********** ********** ********** **********
  	// dwh isotope filter [copy of Portfolio isotope filter]
    // ********** ********** ********** ********** ********** ********** ********** ********** ********** **********

    $(window).load(function() {
      var $container = $('.dwh-items');
      $container.isotope({
          //filter: '*',
          filter: '.dwh',
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
      });
      $('.catdwh a').click(function() {
          $('.catdwh .active').removeClass('active');
          $(this).addClass('active');
          var selector = $(this).attr('data-filter');
          $container.isotope({
              filter: selector,
              animationOptions: {
                  duration: 750,
                  easing: 'linear',
                  queue: false
              }
          });
          return false;
      });

  });
  
    // ********** ********** ********** ********** ********** ********** ********** ********** ********** **********
  	// mdm isotope filter [copy of Portfolio isotope filter]
    // ********** ********** ********** ********** ********** ********** ********** ********** ********** **********
    
    $(window).load(function() {
      var $container = $('.mdm-items');
      $container.isotope({
          //filter: '*',
          filter: '.mdm010',
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
      });
      $('.catmdm a').click(function() {
          $('.catmdm .active').removeClass('active');
          $(this).addClass('active');
          var selector = $(this).attr('data-filter');
          $container.isotope({
              filter: selector,
              animationOptions: {
                  duration: 750,
                  easing: 'linear',
                  queue: false
              }
          });
          return false;
      });

  });

    // ********** ********** ********** ********** ********** ********** ********** ********** ********** **********
  	// ss isotope filter [copy of Portfolio isotope filter]
    // ********** ********** ********** ********** ********** ********** ********** ********** ********** **********
    
    $(window).load(function() {
      var $container = $('.ss-items');
      $container.isotope({
          //filter: '*',
          filter: '.ss010',
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
      });
      $('.catss a').click(function() {
          $('.catss .active').removeClass('active');
          $(this).addClass('active');
          var selector = $(this).attr('data-filter');
          $container.isotope({
              filter: selector,
              animationOptions: {
                  duration: 750,
                  easing: 'linear',
                  queue: false
              }
          });
          return false;
      });

  });

    // ********** ********** ********** ********** ********** ********** ********** ********** ********** **********
  	// dash isotope filter [copy of Portfolio isotope filter]
    // ********** ********** ********** ********** ********** ********** ********** ********** ********** **********
    
    $(window).load(function() {
        var $container = $('.dash-items');
        $container.isotope({
            //filter: '*',
            filter: '.dash010',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.catdash a').click(function() {
            $('.catdash .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
  
    });
  
    // ********** ********** ********** ********** ********** ********** ********** ********** ********** **********
  	// oth isotope filter [copy of Portfolio isotope filter]
    // ********** ********** ********** ********** ********** ********** ********** ********** ********** **********
    
    $(window).load(function() {
        var $container = $('.oth-items');
        $container.isotope({
            //filter: '*',
            filter: '.oth010',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.catoth a').click(function() {
            $('.catoth .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
  
    });
  
    // ********** ********** ********** ********** ********** ********** ********** ********** ********** **********
  	// ml isotope filter [copy of Portfolio isotope filter]
    // ********** ********** ********** ********** ********** ********** ********** ********** ********** **********
    
    $(window).load(function() {
        var $container = $('.ml-items');
        $container.isotope({
            //filter: '*',
            filter: '.ml010',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.catml a').click(function() {
            $('.catml .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
  
    });
  
    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });
  
    // Nivo Lightbox 
    $('.dwh-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });
  
    // Nivo Lightbox 
    $('.mdm-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });
    
    // Nivo Lightbox 
    $('.ss-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });
    
    // Nivo Lightbox 
    $('.dash-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });
    
    // Nivo Lightbox 
    $('.oth-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });
    
    // Nivo Lightbox 
    $('.ml-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });
}());


}
main();