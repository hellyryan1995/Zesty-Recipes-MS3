
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
 
// Addd new Ingredient line once button is clicked
let ingredient = 1;
let ingredient_full = 25;

$("#add-ingredients").click(function (e) {
    e.preventDefault();
    if (ingredient < ingredient_full) {
        ingredient++;
        $(".new-ingredient").append(`
        <div class="input-field col s12 m10 offset-m1">
        <input id="ingredients${ingredient}" name="ingredients" type="text"  minlength="5"
        maxlength="80" class="validate" required>
        <label id="ingredients" for="ingredients${ingredient}"> Ingredient ${ingredient}</label>
        <a class="remove_ingredient" type="button" id="remove_ingredient">
        <i class="delete-step-button fas fa-times-circle right"></i>
        </a>
        </div>`)
    }
});

$("main").on('click', ".remove_ingredient", function() {
    $(this).parent('div').remove();
    ingredient--;
});

// Addd new Instruction line once button is clicked
let instruction = 1;
let instruction_full = 25;

$("#add-directions").click(function (e) {
    e.preventDefault();
    if (instruction < instruction_full) {
        instruction++;
        $(".new-instruction").append(`
        <div class="input-field col s12 m10 offset-m1">
        <textarea id="directions${instruction}" name="directions" minlength="25" 
        maxlength="350" class="materialize-textarea"></textarea>
        <label for="directions${instruction}">Step${instruction}</label>
        <a class="remove_instruction" type="button" id="remove_instruction">
            <i class="delete-step-button fas fa-times-circle right"></i>
        </a>
        </div>`)
    }
});

$("main").on('click', ".remove_instruction", function() {
    $(this).parent('div').remove();
    instruction--;
});