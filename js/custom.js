$(function () {
    $(window).scroll(function(){
        var scrolling =$(this).scrollTop();
        if(scrolling>200){
            $('.navbar').addClass('bg');
        }
        else{
             $('.navbar').removeClass('bg');
        }
    });
    //counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    //feedback slider
    $('.feedback-item-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow:'.right',
        prevArrow:'.left',

    });
    //team slider
     $('.team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
         responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
       
      }
   
    
    },
              {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
       
      }
   
    
    }
   
  ]
        

    });
});
