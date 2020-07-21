$(document).ready(function(){

  var hiddenGames = $(".hiddenbyDefault");
  $("#show-more-games-button").on("click", function(event){
    hiddenGames.show();
    $("#button-holder").remove();
  });

  $(".game-box").click(function() {
    window.location = $(this).find("a").attr("href");
    return false;
  });

  $("#button-nav").click(function () {
      $('body').toggleClass('overflow-add');
      $("#fast-search-wrapper").slideToggle();
      $(".button-nav-top").css({transform: 'translateY(300px) rotateZ(120deg)'})

  });

});
