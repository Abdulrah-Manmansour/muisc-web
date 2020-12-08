$(document).ready(function () {
  $(".fa-bars").on("click", function () {
    $(this).toggleClass("fa-bars fa-times");
  });
  //header hight && width
  $(function () {
    $(".header").height($(window).height());
    $(".header").width($(window).width());
    $(window).resize(function () {
      $(".header").height($(window).height());
      $(".header").width($(window).width());
    });
  });
  //navbar color
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
      $("nav").addClass("bg")
    } else {
      $("nav").removeClass("bg")
    }
  });
  if ($(window).scrollTop() >= 100) {
    $("nav").addClass("bg")
  } else {
    $("nav").removeClass("bg")
  }
  //smoth scroll
  $("nav li a").on("click", function () {
    $('html, body').animate({
      scrollTop: $("#" + $(this).data('scrol')).offset().top - 90
    }, 1000)

  });
  //nice scroll

  $(function() {  
    $("body").niceScroll({
      cursorcolor: "#FF275E",
      cursorwidth: "8px",
      cursorborder: "none",
      zindex: "99999"
    });
    //button top
    $(window).scroll(function(){
      if($(window).scrollTop()>100){
        $(".up").fadeIn();
      }
      else{
        $(".up").fadeOut();
      }
      });
      $(".up").on("click",function(){
      $("body, html").animate({
        scrollTop:0
      },800)
      });
      //loading page
      $(window).on("load",function(){
        $(".spinner").fadeOut(1000,function(){
          $(this).parent(".laoding").fadeOut(2000,function(){
            $(this).remove();
          });
        });
      })
  });
  // slider
  $('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    autoplaySpeed:500,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
});
