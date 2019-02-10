/*002.015 makes the burger icon clickable by either giving it a class of open
            or takes it away if it has it */
$(document).ready(function(){

      $(".burger-nav").on("click", function(){

        $("header nav ul").toggleClass("open");
      });
});
