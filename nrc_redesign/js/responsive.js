$(document).ready(function(){    
  var isMainMenuOpen = false;
  $(".hamburger-icon").on("click", function(){
    $(".open-close-icon").show();    
    if(!isMainMenuOpen) {
      $(".header__top .nav-item").slideDown("");
    }else{
      $(".header__top .nav-item").slideUp("", function(){
        $(".sub-nav").hide();
      });      
    }
    isMainMenuOpen = !isMainMenuOpen;
    
    $(".header__top .nav-item:first").on("click", function(){
      
      // alert("click");
      // alert($(this).children(".sub-nav").length);
     
    });
  })

  $(".open-close-icon").on("click", function(){
    $(this).siblings(".sub-nav").toggle();
  })
    
  $(".header__logo a").after($(".hamburger-icon"));
  $(".header__top .nav-item:first > div:first").after($(".open-close-icon"));
})