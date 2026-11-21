$(document).ready(function () {
  // Scenario 1: .next(".answer") finds the answer right after the clicked question,
  // and .slideToggle() opens it if closed or closes it if open
  $(".question").on("click", function () {
    $(this).next(".answer").slideToggle(200);
  });

  // Scenario 2: change the question colour on mouse enter, remove it on mouse leave
  $(".question").hover(
    function () {
      $(this).css("color", "#c0392b");
    },
    function () {
      $(this).css("color", ""); // an empty string removes the inline colour
    }
  );

  // Scenario 3: double-click collapses every answer.
  // .stop(true, true) finishes the toggle animations caused by the two single clicks first.
  $(".question").on("dblclick", function () {
    $(".answer").stop(true, true).slideUp(200);
  });

  // Scenario 4: focusing an input highlights the whole FAQ item that contains it.
  // .closest() walks up the tree until it finds the nearest matching ancestor.
  $(".answer-input").on("focus", function () {
    $(this).closest(".faq-item").css("background-color", "#fff3cd");
  });

  // Scenario 5: leaving the input resets the background
  $(".answer-input").on("blur", function () {
    $(this).closest(".faq-item").css("background-color", "");
  });
});
