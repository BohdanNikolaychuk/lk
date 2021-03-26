$(function(){
    
    $('.list__slider').slick({
    arrows:true,
    dots:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
    infinite: true,
    nextArrow:'<button type="button" class="slick-prev"><img src="/images/next-arrow.svg" alt=""></button>',
    prevArrow:'<button type="button" class="slick-next"><img src="/images/prev-arrow.svg" alt=""></button>',
    responsive: [
        {
          breakpoint: 1296,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows:false
          }
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows:false
          }
        },
        {
          breakpoint: 735,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false
          }
        }




    ]
    });

    $('.feedback__slider').slick({

        slidesToShow: 4 ,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        dots:true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                arrows:false
              }
            },
            {
                breakpoint: 740,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 513 ,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
             
        ]
      
    
        
    });
  
    

    $('.menu__list-link').on('click', function() {

        let href = $(this).attr("href");
    
        $('html,body').animate({
            scrollTop: $(href).offset().top + "px"
        }, {
             duration: 1000,   
             easing: "linear"
        });
    
        return false;

    });
$('.menu__burger').on('click', function(){
  $('.menu__burger,.menu').toggleClass('active');
      $('body').toggleClass('lock');
    });
      $('.menu__list-link').click(function() {
        $('.menu__burger,.menu').removeClass('active');
        $('body').removeClass('lock');
      });
});




