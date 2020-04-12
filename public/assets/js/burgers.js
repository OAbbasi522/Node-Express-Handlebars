// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function(){
   $(".devour-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var burger_id = $(this).children(".burger_id").val()
    // Send the POST request.
    $.ajax( {
      type: "PUT",
      url:"/burgers/" + burger_id
    }).then(
      function(data) {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
})
