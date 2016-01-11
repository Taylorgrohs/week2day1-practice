$(document).ready(function() {
  $("#clickable").click(function(){
    $(".hidden").toggle();
    $(".showing").slideDown();
  });
  $("#clickable2").click(function(){
    $(".hidden").toggle();
    $(".showing").slideUp();
  });
});
