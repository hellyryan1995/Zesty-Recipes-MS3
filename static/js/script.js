$(document).ready(function(){
    $('.sidenav').sidenav({edge: "right"});
    $('select').formSelect();
  });

  // Fade out flash pop up
  $(function() {
    $('#flash').delay(900).fadeIn('slow', function() {
       $(this).delay(1500).fadeOut();
    });
 });
 