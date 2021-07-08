$(document).ready(function(){
    $('.sidenav').sidenav({edge: "right"});
  });

  // Fade out flash pop up
  $(function() {
    $('#flash').delay(900).fadeIn('slow', function() {
       $(this).delay(1500).fadeOut();
    });
 });
 