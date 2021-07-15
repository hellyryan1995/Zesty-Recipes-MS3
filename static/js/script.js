
// Materalize jquery
$(document).ready(function(){
   $('.sidenav').sidenav({edge: "right"});
   $('select').formSelect();
   $('.tooltipped').tooltip();

   // Jquery Select Validation from code institute task manager mini-project
   validateMaterializeSelect();
   function validateMaterializeSelect() {
      let classValid = { "border-bottom": "1px solid #11d929", "box-shadow": "0 1px 0 0 #4caf50" };
      let classInvalid = { "border-bottom": "1px solid #f02727", "box-shadow": "0 1px 0 0 #f44336" };
      if ($("select.validate").prop("required")) {
         $("select.validate").css({ "display": "block", "height": "0", "padding": "0", "width": "0", "position": "absolute" });
        }
        $(".select-wrapper input.select-dropdown").on("focusin", function () {
            $(this).parent(".select-wrapper").on("change", function () {
               if ($(this).children("ul").children("li.selected:not(.disabled)").on("click", function () { })) {
                  $(this).children("input").css(classValid);
               }
            });
        }).on("click", function () {
            if ($(this).parent(".select-wrapper").children("ul").children("li.selected:not(.disabled)").css("background-color") === "rgba(0, 0, 0, 0.03)") {
                $(this).parent(".select-wrapper").children("input").css(classValid);
            } else {
                $(".select-wrapper input.select-dropdown").on("focusout", function () {
                    if ($(this).parent(".select-wrapper").children("select").prop("required")) {
                        if ($(this).css("border-bottom") != "1px solid rgb(76, 175, 80)") {
                            $(this).parent(".select-wrapper").children("input").css(classInvalid);
                        }
                    }
                });
            }
        });
    }
});

  // Fade out flash pop up
  $(function() {
    $('#flash').delay(900).fadeIn('slow', function() {
       $(this).delay(1500).fadeOut();
    });
 });
 