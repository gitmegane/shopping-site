$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,

        }
    );
});

$(window).load(function(){
  $("#list_img img").click(function(){
    var img_src = $(this).attr("src");
    $(".slidemain img").attr("src", img_src);
  });
});

$(document).ready(function(){
  $("#sp_navi_btn").click(function(){
    $(".sp_navi_li").slideToggle();
  });
});