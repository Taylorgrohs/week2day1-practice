$(document).ready(function() {
  $(".clickable1").click(function(){
    $(".section2").toggle();
  });
  $("#clickable1").click(function(){
    $(".showp").toggle();
  });
  $(".clickable2").click(function(){
    $(".section3").fadeIn();
  });
  $(".clickable2b").click(function(){
    $(".section3").fadeOut();
  });
  $(".clickable4").click(function(){
    $(".section4").toggle();
  });
  $("#clickable4").click(function(){
    $(".showp4").toggle();
  });
  $("button").addClass("animated shake");
});
