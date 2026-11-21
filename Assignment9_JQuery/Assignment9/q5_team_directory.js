$(document).ready(function () {
  // Scenario 1: clicking a manager highlights only the employees who report to them
  $(".employee.manager").on("click", function () {
    const managerId = $(this).data("id");

    $(".employee").removeClass("report");
    // Attribute selector built from the id: finds employees whose data-manager matches
    $(".employee[data-manager='" + managerId + "']").addClass("report");
  });

  // Scenario 2: .next(".contact") is the element right after the hovered employee
  $(".employee").hover(
    function () {
      $(this).next(".contact").stop(true, true).slideDown(150);
    },
    function () {
      $(this).next(".contact").stop(true, true).slideUp(150);
    }
  );

  // Scenario 3: department title click colours every member of that department.
  // .siblings(".team") gets the list beside the title, .children(".employee") its members.
  $(".dept-title").on("click", function () {
    const $members = $(this).siblings(".team").children(".employee");
    const color = $(this).parent().data("color");

    // Use a flag so a second click removes the colour again
    const isColoured = $(this).data("coloured") === true;
    $members.css("background-color", isColoured ? "" : color);
    $(this).data("coloured", !isColoured);
  });

  // Scenario 4: pick a random employee and highlight the employees beside them
  $("#randomBtn").on("click", function () {
    const $everyone = $(".employee");

    // Clear old highlights first
    $everyone.removeClass("picked sibling-highlight");

    const randomIndex = Math.floor(Math.random() * $everyone.length);
    const $picked = $everyone.eq(randomIndex).addClass("picked");

    // .siblings(".employee") = other employees in the same list (the same team)
    $picked.siblings(".employee").addClass("sibling-highlight");

    $("#randomResult").text("Random pick: " + $picked.text());
  });

  // Scenario 5: .parent() goes from the button to its department,
  // then .find() searches inside it for the team list
  $(".toggle-team").on("click", function () {
    $(this).parent().find(".team").slideToggle(250);
  });
});
