$('.slider--section .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    items:1
})



$('input').focus(function(){
    $(this).parents('.input--box').addClass('focused');
});
  
$('input').blur(function(){
    var inputValue = $(this).val();
    if ( inputValue == "" ) {
      $(this).removeClass('filled');
      $(this).parents('.input--box').removeClass('focused');  
    } else {
      $(this).addClass('filled');
    }
})  


$(".search--btn").click(function(event){

    $('#search-field').toggleClass('form-active');
    $('.search--btn i').toggleClass('fa-close');
    event.stopPropagation();


  // $(document).click(function(event){
  //   if (!$(event.target).hasClass('form-active')) {
  //     $("#search-field").removeClass("form-active");
  //     $(".search--btn i").removeClass("fa-close");
  //   }
  // });
})

$(".nav-toggler").click(function () {
  $('.header--menu').slideToggle('menu-active');
  $(this).toggleClass('nav-active');
});


AOS.init({
  once: true,
  disable: 'mobile',

})

